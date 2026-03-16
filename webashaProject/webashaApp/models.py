from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Course(models.Model):
	STATUS_CHOICES = [
		("active", "Active"),
		("upcoming", "Upcoming"),
		("pending", "Pending"),
		("private", "Private"),
		("draft", "Draft"),
		("inactive", "Inactive"),
	]

	title = models.CharField(max_length=255)
	slug = models.SlugField(max_length=255, unique=True, null=True, blank=True)
	short_description = models.TextField(blank=True)
	description = models.TextField(blank=True)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="active")
	thumbnail = models.ImageField(upload_to="course_thumbnails/", null=True, blank=True)
	student_count = models.CharField(max_length=50, default="1,000+")
	rating = models.DecimalField(
		max_digits=3, 
		decimal_places=1, 
		default=4.8,
		validators=[
			MinValueValidator(0.0),
			MaxValueValidator(5.0)
		]
	)
	price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	created_at = models.DateTimeField(auto_now_add=True)



	def __str__(self):
		return self.title

	@property
	def category_name(self):
		# best-effort: find a CourseCategory whose name appears in the title
		try:
			from .models import CourseCategory
		except Exception:
			CourseCategory = globals().get('CourseCategory')
		if CourseCategory is None:
			return ''
		try:
			# case-insensitive containment match
			cat = CourseCategory.objects.filter(name__iexact=self.title).first()
			if not cat:
				cat = CourseCategory.objects.filter(name__icontains=self.title).first()
			if not cat:
				# try any category whose name appears in the title
				for c in CourseCategory.objects.all():
					if c.name.lower() in (self.title or '').lower():
						cat = c
						break
			return cat.name if cat else ''
		except Exception:
			# If the Category table doesn't exist or DB access fails, return empty string
			return ''


class CourseCategory(models.Model):
	name = models.CharField(max_length=120)
	slug = models.SlugField(max_length=140, unique=True)
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Course Category'
		verbose_name_plural = 'Course Categories'

	def __str__(self):
		return self.name


class Coupon(models.Model):
	code = models.CharField(max_length=64, unique=True)
	discount_percent = models.PositiveSmallIntegerField(default=0)
	expiry = models.DateField(null=True, blank=True)
	active = models.BooleanField(default=True)
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Coupon'
		verbose_name_plural = 'Coupons'

	def __str__(self):
		return self.code


class CourseBundle(models.Model):
	STATUS_CHOICES = [
		("active", "Active"),
		("inactive", "Inactive"),
	]

	title = models.CharField(max_length=255)
	owner = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="owned_bundles")
	courses = models.ManyToManyField(Course, related_name="bundles")
	subscription_limit_days = models.PositiveIntegerField(default=365)
	price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	thumbnail = models.ImageField(upload_to="bundle_thumbnails/", null=True, blank=True)
	details = models.TextField(blank=True)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="active")
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Course Bundle'
		verbose_name_plural = 'Course Bundles'


class BootcampCategory(models.Model):
	name = models.CharField(max_length=120)
	slug = models.SlugField(max_length=140, unique=True)
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Bootcamp Category'
		verbose_name_plural = 'Bootcamp Categories'

	def __str__(self):
		return self.name


class Bootcamp(models.Model):
	TITLE_MAX_LENGTH = 255
	title = models.CharField(max_length=TITLE_MAX_LENGTH)
	short_description = models.TextField(blank=True)
	description = models.TextField(blank=True)
	category = models.ForeignKey(BootcampCategory, on_delete=models.SET_NULL, null=True, related_name="bootcamps")
	owner = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="owned_bootcamps", null=True, blank=True)
	is_free = models.BooleanField(default=False)
	price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	has_discount = models.BooleanField(default=False)
	discounted_price = models.DecimalField(max_digits=10, decimal_places=2, default=0, null=True, blank=True)
	thumbnail = models.ImageField(upload_to="bootcamp_thumbnails/", null=True, blank=True)
	modules_count = models.PositiveIntegerField(default=0)
	classes_count = models.PositiveIntegerField(default=0)
	publish_date = models.DateField(null=True, blank=True)
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title


class BootcampPurchase(models.Model):
	user = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="bootcamp_purchases")
	bootcamp = models.ForeignKey(Bootcamp, on_delete=models.CASCADE, related_name="purchases")
	price = models.DecimalField(max_digits=10, decimal_places=2)
	admin_revenue = models.DecimalField(max_digits=10, decimal_places=2)
	author_revenue = models.DecimalField(max_digits=10, decimal_places=2)
	payment_method = models.CharField(max_length=50, default="Stripe")
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Bootcamp Purchase'
		verbose_name_plural = 'Bootcamp Purchases'
		ordering = ['-created_at']

	def __str__(self):
		return f"{self.user.username} - {self.bootcamp.title}"

class TutorCategory(models.Model):
	STATUS_CHOICES = [
		("active", "Active"),
		("inactive", "Inactive"),
	]
	name = models.CharField(max_length=120)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="active")
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Tutor Category'
		verbose_name_plural = 'Tutor Categories'

	def __str__(self):
		return self.name

class TutorSubject(models.Model):
	STATUS_CHOICES = [
		("active", "Active"),
		("inactive", "Inactive"),
	]
	name = models.CharField(max_length=120)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="active")
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Tutor Subject'
		verbose_name_plural = 'Tutor Subjects'

	def __str__(self):
		return self.name

class EbookCategory(models.Model):
	STATUS_CHOICES = [
		("active", "Active"),
		("inactive", "Inactive"),
	]
	name = models.CharField(max_length=120)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="active")
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Ebook Category'
		verbose_name_plural = 'Ebook Categories'

	def __str__(self):
		return self.name

class Ebook(models.Model):
	STATUS_CHOICES = [
		("active", "Active"),
		("inactive", "Inactive"),
	]
	title = models.CharField(max_length=255)
	author_name = models.CharField(max_length=255)
	author_email = models.EmailField()
	category = models.ForeignKey(EbookCategory, on_delete=models.CASCADE, related_name="ebooks")
	language = models.CharField(max_length=100, default="English")
	description = models.TextField(blank=True)
	summary = models.TextField(blank=True)
	publication = models.CharField(max_length=255)
	edition = models.CharField(max_length=100, blank=True)
	is_free = models.BooleanField(default=False)
	price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	has_discount = models.BooleanField(default=False)
	discounted_price = models.DecimalField(max_digits=10, decimal_places=2, default=0, null=True, blank=True)
	publish_date = models.DateField(null=True, blank=True)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="active")
	cover_image = models.ImageField(upload_to='ebook_covers/', null=True, blank=True)
	preview_file = models.FileField(upload_to='ebook_previews/', null=True, blank=True)
	ebook_file = models.FileField(upload_to='ebook_files/', null=True, blank=True)
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Ebook'
		verbose_name_plural = 'Ebooks'

	def __str__(self):
		return self.title

class EbookPurchase(models.Model):
	user = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="ebook_purchases")
	ebook = models.ForeignKey(Ebook, on_delete=models.CASCADE, related_name="purchases")
	price = models.DecimalField(max_digits=10, decimal_places=2)
	admin_revenue = models.DecimalField(max_digits=10, decimal_places=2)
	author_revenue = models.DecimalField(max_digits=10, decimal_places=2)
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Ebook Purchase'
		verbose_name_plural = 'Ebook Purchases'
		ordering = ['-created_at']

	def __str__(self):
		return f"{self.user.username} - {self.ebook.title}"

class Profile(models.Model):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('instructor', 'Instructor'),
        ('student', 'Student'),
    ]
    user = models.OneToOneField("auth.User", on_delete=models.CASCADE, related_name="profile")
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    biography = models.TextField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    address = models.TextField(blank=True)
    image = models.ImageField(upload_to="profile_images/", null=True, blank=True)
    facebook_link = models.URLField(blank=True, null=True)
    twitter_link = models.URLField(blank=True, null=True)
    linkedin_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"Profile of {self.user.username}"

class Message(models.Model):
    sender = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="sent_messages")
    receiver = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="received_messages")
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['timestamp']

    def __str__(self):
        return f"From {self.sender.username} to {self.receiver.username} at {self.timestamp}"

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    address = models.TextField(blank=True)
    message = models.TextField()
    is_registered = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Contact'
        verbose_name_plural = 'Contacts'
        ordering = ['-created_at']

    def __str__(self):
        return f"Contact from {self.name} ({self.email})"

class Ticket(models.Model):
    STATUS_CHOICES = [
        ('new', 'New'),
        ('solved', 'Solved'),
        ('pending', 'Pending'),
    ]
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    ]
    subject = models.CharField(max_length=255)
    user = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="tickets")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default='medium')
    category = models.CharField(max_length=100)
    message = models.TextField()
    file = models.FileField(upload_to='support_tickets/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Ticket'
        verbose_name_plural = 'Tickets'
        ordering = ['-created_at']

    def __str__(self):
        return f"Ticket: {self.subject} ({self.user.username})"

class FAQ(models.Model):
    question = models.TextField()
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'
        ordering = ['-created_at']

    def __str__(self):
        return self.question[:50]


class Testimonial(models.Model):
    REVIEW_TYPE_CHOICES = [
        ('text', 'Text Review'),
        ('video', 'Video Review'),
    ]
    full_name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255, blank=True)
    content = models.TextField()
    image = models.ImageField(upload_to="testimonials/", null=True, blank=True)
    rating = models.IntegerField(
        default=5,
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5)
        ]
    )
    review_type = models.CharField(max_length=10, choices=REVIEW_TYPE_CHOICES, default='text')
    video_id = models.CharField(max_length=100, blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True, help_text="LinkedIn profile URL of the reviewer")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name


class VideoReview(models.Model):
    title = models.CharField(max_length=255, help_text="Reference title for the admin")
    image = models.ImageField(upload_to="video_reviews/", null=True, blank=True, help_text="Video thumbnail image")
    video_id = models.CharField(max_length=100, help_text="YouTube Video ID")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Instructor(models.Model):
    full_name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    bio = models.TextField(blank=True)
    image = models.ImageField(upload_to="instructors/", null=True, blank=True)
    linkedin_link = models.URLField(blank=True, null=True)
    google_link = models.URLField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name


class HomeSection(models.Model):
    identifier = models.CharField(max_length=100, unique=True, help_text="e.g. related_courses")
    badge = models.CharField(max_length=255, blank=True)
    title = models.CharField(max_length=255, help_text="Supports HTML for custom bolding")
    highlight_text = models.CharField(max_length=255, blank=True, help_text="Text to be rendered in red")
    description = models.TextField(blank=True)
    button_text = models.CharField(max_length=255, default="Explore More")
    view_all_text = models.CharField(max_length=255, default="View All")
    view_all_link = models.CharField(max_length=255, default="/all-courses")
    curated_courses = models.ManyToManyField(Course, blank=True, related_name="section_courses")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.identifier} - {self.title}"

class AlumniProfile(models.Model):
    name = models.CharField(max_length=255)
    experience = models.CharField(max_length=255, help_text="e.g. 8+ Years of Experience")
    growth_badge = models.CharField(max_length=100, help_text="e.g. 150% Growth")
    description = models.TextField(help_text="Supports HTML formatting like <strong>")
    before_role = models.CharField(max_length=255)
    before_company_name = models.CharField(max_length=255)
    before_company_logo = models.ImageField(upload_to="alumni_companies/")
    after_role = models.CharField(max_length=255)
    after_company_name = models.CharField(max_length=255)
    after_company_logo = models.ImageField(upload_to="alumni_companies/")
    image = models.ImageField(upload_to="alumni_profiles/", help_text="Profile picture of the alumni", null=True, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Alumni Profile"
        verbose_name_plural = "Alumni Profiles"
        ordering = ['-created_at']

class ExamVoucherOffer(models.Model):
    title = models.CharField(max_length=255, default="Discounted Certification Exam Voucher")
    image = models.ImageField(upload_to="vouchers/")
    whatsapp_number = models.CharField(max_length=50, default="+91-8010911256")
    whatsapp_message = models.TextField(default="Hello WebAsha, I want Discounted Exam Voucher")
    enroll_link = models.CharField(max_length=500, default="#", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class UpcomingBatch(models.Model):
    date = models.DateField(help_text="e.g. 2026-03-30")
    mode_of_class = models.CharField(max_length=255, default="Online/Classroom")
    batch_form = models.CharField(max_length=255, default="Weekdays")
    time = models.CharField(max_length=255, help_text="e.g. 6:30 PM IST")
    
    status_text = models.CharField(max_length=255, help_text="e.g. Only 1 Seat Available or Batch Full")
    status_color = models.CharField(
        max_length=50, 
        choices=[('success', 'Green'), ('danger', 'Red'), ('warning', 'Yellow')],
        default='success'
    )
    max_intake_limit = models.IntegerField(null=True, blank=True, help_text="e.g. 10")
    
    action_text = models.CharField(max_length=255, default="Enrollment Open →")
    action_color = models.CharField(
        max_length=50, 
        choices=[('outline-success', 'Green Outline'), ('danger', 'Red Solid')],
        default='outline-success'
    )
    
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.date} - {self.batch_form}"

    class Meta:
        verbose_name = "Upcoming Batch"
        verbose_name_plural = "Upcoming Batches"
        ordering = ['date']
