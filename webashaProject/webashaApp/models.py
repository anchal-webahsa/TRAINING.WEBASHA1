from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class CourseCategory(models.Model):
	name = models.CharField(max_length=120)
	slug = models.SlugField(max_length=140, unique=True)
	icon = models.ImageField(upload_to="category_icons/", null=True, blank=True)
	icon_class = models.CharField(max_length=100, blank=True, help_text="FontAwesome class for the mega menu, e.g. fa-solid fa-cloud")
	order = models.IntegerField(default=0, help_text="Order in the mega menu (lowest first)")
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Course Category'
		verbose_name_plural = 'Course Categories'
		ordering = ['order', 'name']

	def __str__(self):
		return self.name

class CourseSubCategory(models.Model):
	category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE, related_name="subcategories")
	name = models.CharField(max_length=120)
	order = models.IntegerField(default=0, help_text="Order in the mega menu (lowest first)")
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name = 'Course Subcategory'
		verbose_name_plural = 'Course Subcategories'
		ordering = ['order', 'name']

	def __str__(self):
		return f"{self.category.name} - {self.name}"

class Course(models.Model):
	STATUS_CHOICES = [
		("active", "Active"),
		("upcoming", "Upcoming"),
		("pending", "Pending"),
		("private", "Private"),
		("draft", "Draft"),
		("inactive", "Inactive"),
	]

	MENU_LABEL_CHOICES = [
		("none", "None"),
		("best_seller", "Best Seller"),
		("trending", "Trending"),
		("new", "New"),
	]

	title = models.CharField(max_length=255)
	slug = models.SlugField(max_length=255, unique=True, null=True, blank=True)
	
	# Mega Menu fields
	subcategory = models.ForeignKey(CourseSubCategory, on_delete=models.SET_NULL, null=True, blank=True, related_name="courses")
	course_code = models.CharField(max_length=100, blank=True, help_text="e.g. RH124v10")
	menu_label = models.CharField(max_length=20, choices=MENU_LABEL_CHOICES, default="none")
	menu_icon = models.ImageField(upload_to="course_menu_icons/", null=True, blank=True)
	
	short_description = models.TextField(max_length=150, blank=True)
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
		# best-effort fallback: if subcategory is set, use its category name
		if self.subcategory:
			return self.subcategory.category.name
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
			return ''





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
    is_read = models.BooleanField(default=False)
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
    description = models.TextField(help_text="Supports HTML formatting. Maximum 300 characters to keep cards aligned.")
    before_role = models.CharField(max_length=255)
    before_company_name = models.CharField(max_length=255)
    before_company_logo = models.ImageField(upload_to="alumni_companies/")
    after_role = models.CharField(max_length=255)
    after_company_name = models.CharField(max_length=255)
    after_company_logo = models.ImageField(upload_to="alumni_companies/")
    image = models.ImageField(upload_to="alumni_profiles/", help_text="Profile picture of the alumni", null=True, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def clean(self):
        from django.core.exceptions import ValidationError
        super().clean()
        if self.description and len(self.description) > 300:
            raise ValidationError({'description': 'Description cannot exceed 300 characters to keep cards aligned.'})

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
    course_banner = models.ForeignKey('CourseBanner', on_delete=models.CASCADE, related_name="upcoming_batches", null=True, blank=True, help_text="Select the course page this batch belongs to. If empty, it may appear globally.")
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


class CourseBanner(models.Model):
    subcategory = models.ForeignKey(
        'CourseSubCategory', 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True, 
        related_name="course_banners",
        help_text="Select the subcategory this banner belongs to"
    )
    page_identifier = models.CharField(max_length=100, unique=True, help_text="e.g. rhcsa1")
    breadcrumb_active = models.CharField(max_length=255, default="RH124 v10 Certification Training")
    heading = models.CharField(max_length=255, default="RH124 v10 Certification Training: Essential Linux System Administration Skills")
    enrolled_count = models.CharField(max_length=100, default="3,850+ Participants Enrolled")
    rating_text = models.CharField(max_length=100, default="4.9/5 (48,765+ Reviews)")
    google_rating = models.CharField(max_length=50, default="4.9/5")
    facebook_rating = models.CharField(max_length=50, default="4.9/5")
    description = models.TextField(help_text="Supports HTML formatting for styling.")
    
    # Table Details
    detail_duration = models.CharField(max_length=255, blank=True, null=True, default="50 Hours (Weekday/Weekend Batches)")
    detail_mode = models.CharField(max_length=255, blank=True, null=True, default="Online & Classroom Training")
    detail_certification = models.CharField(max_length=255, blank=True, null=True, default="Red Hat Certified System Administrator (EX200)")
    detail_institute = models.CharField(max_length=255, blank=True, null=True, default="WebAsha Technologies, Pune")
    detail_includes = models.CharField(max_length=255, blank=True, null=True, default="Hands-on Labs, Official Red Hat Curriculum, Exam Simulations")
    
    # Syllabus Headings
    syllabus_heading_top = models.CharField(max_length=255, blank=True, default="RH124 v10 Certification Training", help_text="e.g. RH124 v10 Certification Training")
    syllabus_heading_bottom = models.CharField(max_length=255, blank=True, default="RH124 v10 Certification Training: Essential Linux System Administration Skills Curriculum")
    
    # Exam Details Table
    exam_detail_heading_prefix = models.CharField(max_length=255, blank=True, default="RHCSA Exam", help_text="e.g. RHCSA Exam")
    exam_detail_name = models.CharField(max_length=255, blank=True, default="Red Hat Certified System Administrator (RHCSA)")
    exam_detail_duration = models.CharField(max_length=255, blank=True, default="180 Minutes")
    exam_detail_questions = models.CharField(max_length=255, blank=True, default="Performance-based tasks")
    exam_detail_fee = models.CharField(max_length=255, blank=True, default="Varies (approx ₹20,000 in India)")
    exam_detail_validity = models.CharField(max_length=255, blank=True, default="3 Years")
    exam_detail_code = models.CharField(max_length=255, blank=True, default="EX200")
    exam_detail_format = models.CharField(max_length=255, blank=True, default="Hands-On Lab")
    exam_detail_passing_score = models.CharField(max_length=255, blank=True, default="210 out of 300")
    exam_detail_eligibility = models.CharField(max_length=255, blank=True, default="None, RH124/RH134 recommended")
    exam_detail_languages = models.CharField(max_length=255, blank=True, default="English")
    exam_detail_mode = models.CharField(max_length=255, blank=True, default="In-Person/Remote Proctor")
    
    # Passing Criteria
    passing_criteria_heading = models.CharField(max_length=255, blank=True, default="Passing Criteria for RHCSA Exam")
    passing_criteria_text = models.TextField(blank=True, default="To achieve RHCSA certification, score 210/300 on the EX200 hands-on exam (180 min).")
    whatsapp_link = models.URLField(max_length=500, blank=True, default="https://wa.me/918485847920")
    call_number = models.CharField(max_length=50, blank=True, default="+91 848584 7920")
    
    # Instructor/Trainer Details
    instructor_heading_top = models.CharField(max_length=255, blank=True, default="Meet Our Expert Trainers")
    instructor_description = models.TextField(blank=True, null=True, help_text="Subheading description text under trainer heading")
    instructor_html = models.TextField(blank=True, null=True, help_text="List of bullet points or custom description of trainers")
    
    # Media
    voucher_offer = models.ForeignKey('ExamVoucherOffer', on_delete=models.SET_NULL, null=True, blank=True, related_name="course_banners", help_text="Select a specific Exam Voucher Offer for this page. If empty, uses default active offer.")
    video_thumbnail = models.ImageField(upload_to="course_banners/", help_text="Image previewing the video")
    partner_image = models.ImageField(upload_to="course_banners/partners/", blank=True, null=True, help_text="Upload partner logo (e.g. Red Hat, Cisco)")
    show_partner_logo = models.BooleanField(default=True, help_text="Toggle visibility of the 'Accredited By' partner logo section")
    slider_image_1 = models.ImageField(upload_to="course_banners/sliders/", blank=True, null=True, help_text="Upload first slider image")
    slider_image_2 = models.ImageField(upload_to="course_banners/sliders/", blank=True, null=True, help_text="Upload second slider image")
    training_track_image = models.ImageField(upload_to="course_banners/tracks/", blank=True, null=True, help_text="Upload course training track image (e.g. certification path diagram)")
    youtube_video_url = models.URLField(max_length=500, blank=True, null=True, help_text="Paste full YouTube video URL (e.g. https://www.youtube.com/watch?v=...)")
    youtube_video_id = models.CharField(max_length=100, default="ERtp4zua0-s", help_text="Or enter YouTube Video ID directly")
    pdf_syllabus_link = models.CharField(max_length=500, blank=True, null=True, help_text="Direct link if any, else opens modal")
    
    # Stats at bottom
    stat_professionals = models.CharField(max_length=50, default="1000+")
    stat_batches = models.CharField(max_length=50, default="8+")
    stat_countries = models.CharField(max_length=50, default="20+")
    stat_clients = models.CharField(max_length=50, default="1000+")
    
    # Dynamic Page Content Fields (Raw HTML)
    overview_html = models.TextField(blank=True, help_text="HTML content for the Course Overview section")
    exam_info_html = models.TextField(blank=True, help_text="HTML content for Exam Information & Passing Criteria")
    salary_html = models.TextField(blank=True, help_text="HTML content for Salary & Job Roles")
    career_benefits_html = models.TextField(blank=True, help_text="HTML content for Career Benefits")
    why_choose_us_html = models.TextField(blank=True, help_text="HTML content for Why Choose Us")
    
    # Dynamic Section Titles & Descriptions
    key_features_heading = models.CharField(
        max_length=255, 
        default="RH124 v10 Certification Training: Essential Linux System Administration Skills Key Features",
        help_text="Heading for the Key Features section"
    )
    key_features_description = models.TextField(
        default="Explore the unique benefits of our courses designed for foundational success in Pune's booming IT sector.",
        help_text="Description for the Key Features section"
    )
    why_choose_heading = models.CharField(
        max_length=255,
        default="Why Choose WebAsha Technologies",
        help_text="Heading for the comparison table section"
    )
    why_choose_description = models.TextField(
        default="At WebAsha Technologies, we deliver career-focused IT training that combines expert mentorship, practical learning, and globally recognized certifications to give you a competitive edge.",
        help_text="Description for the comparison table section"
    )
    
    # Cloud Lab details
    cloud_lab_title = models.CharField(
        max_length=255,
        default="Our <span class=\"red-color\">Cloud Lab</span>",
        blank=True,
        help_text="Title for the Cloud Lab section"
    )
    cloud_lab_image = models.ImageField(
        upload_to="course_banners/labs/",
        blank=True,
        null=True,
        help_text="Upload custom Cloud Lab image (GIF/PNG/JPG)"
    )
    cloud_lab_image_url = models.CharField(
        max_length=500,
        blank=True,
        null=True,
        default="https://i.ibb.co/5X09hRg/lab.gif",
        help_text="Direct URL of Cloud Lab image/GIF if not uploading a file"
    )
    
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.page_identifier} - {self.heading}"

    class Meta:
        verbose_name = "Course Banner"
        verbose_name_plural = "Course Banners"


class CourseKeyFeature(models.Model):
    course_banner = models.ForeignKey(
        CourseBanner,
        on_delete=models.CASCADE,
        related_name="key_features"
    )
    icon = models.ImageField(
        upload_to="course_banners/features/",
        blank=True,
        null=True,
        help_text="Upload key feature icon (e.g. PNG/SVG)"
    )
    icon_url = models.CharField(
        max_length=500,
        blank=True,
        null=True,
        help_text="Or enter a direct icon URL / CSS class"
    )
    label = models.CharField(max_length=255)
    order = models.IntegerField(default=0, help_text="Display order")

    class Meta:
        ordering = ['order', 'id']
        verbose_name = "Training Key Feature"
        verbose_name_plural = "Training Key Features"

    def __str__(self):
        return f"{self.course_banner.page_identifier} - {self.label}"


class CourseComparisonRow(models.Model):
    course_banner = models.ForeignKey(
        CourseBanner, 
        on_delete=models.CASCADE, 
        related_name="comparison_rows"
    )
    feature = models.CharField(max_length=255)
    webasha = models.TextField()
    others = models.TextField()
    order = models.IntegerField(default=0, help_text="Order in which features are displayed")

    class Meta:
        ordering = ['order', 'id']
        verbose_name = "Training Comparison Row"
        verbose_name_plural = "Training Comparison Rows"

    def __str__(self):
        return f"{self.course_banner.page_identifier} - {self.feature}"


class CourseTrackTool(models.Model):
    course_banner = models.ForeignKey(
        CourseBanner,
        on_delete=models.CASCADE,
        related_name="track_tools"
    )
    category = models.CharField(max_length=255)
    tools_covered = models.TextField(help_text="Tools list (comma separated or plain text)")
    order = models.IntegerField(default=0, help_text="Order in which categories are displayed")

    class Meta:
        ordering = ['order', 'id']
        verbose_name = "Training Track Tool"
        verbose_name_plural = "Training Track Tools"

    def __str__(self):
        return f"{self.course_banner.page_identifier} - {self.category}"




class CourseBannerCertificate(models.Model):
    course_banner = models.ForeignKey(CourseBanner, related_name='certificates', on_delete=models.CASCADE)
    student_name = models.CharField(max_length=255, blank=True, help_text="Candidate Name")
    image = models.ImageField(upload_to="course_banners/certificates/", help_text="Upload certificate image")
    order = models.IntegerField(default=0, help_text="Lower numbers appear first")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'created_at']
        verbose_name = "Training Banner Certificate"
        verbose_name_plural = "Training Banner Certificates"

    def __str__(self):
        return f"{self.student_name} Certificate"


class StudentScreenshot(models.Model):
    name = models.CharField(max_length=255, help_text="Name of the student or reference label")
    logo_image = models.ImageField(upload_to="student_logos/", help_text="Circular profile image or logo in the slider")
    phone_image = models.ImageField(upload_to="student_phones/", help_text="The large phone screenshot showing the feedback")
    order = models.IntegerField(default=0, help_text="Controls the order in the slider (lowest first)")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Student Screenshot"
        verbose_name_plural = "Student Screenshots"
        ordering = ['order', '-created_at']


class CourseSyllabus(models.Model):
    course_banner = models.ForeignKey(CourseBanner, on_delete=models.CASCADE, related_name="syllabus_modules")
    module_title = models.CharField(max_length=255, help_text="e.g. 1. Get Started with Red Hat Enterprise Linux")
    description = models.TextField(blank=True, help_text="HTML supported content for this module")
    order = models.IntegerField(default=0, help_text="Ordering of the module in the accordion")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Training Syllabus Module"
        verbose_name_plural = "Training Syllabus Modules"
        ordering = ['order', 'created_at']

    def __str__(self):
        return f"{self.course_banner.page_identifier} - {self.module_title}"


class CourseFAQ(models.Model):
    course_banner = models.ForeignKey(CourseBanner, on_delete=models.CASCADE, related_name="faqs")
    question = models.TextField()
    answer = models.TextField(help_text="HTML supported")
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Training FAQ"
        verbose_name_plural = "Training FAQs"
        ordering = ['order', 'created_at']

    def __str__(self):
        return f"{self.course_banner.page_identifier} - Question {self.order}"


class GalleryImage(models.Model):
    title = models.CharField(max_length=255, help_text="Image title or alt text")
    image = models.ImageField(upload_to="gallery_images/")
    category = models.CharField(max_length=100, blank=True, help_text="E.g., Event, Classroom, Lab (Optional)")
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0, help_text="Lower numbers appear first")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Gallery Image"
        verbose_name_plural = "Gallery Images"
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title

def generate_cert_id():
    import string, random
    code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
    return f"WACERT-{code}"

class StudentCertificate(models.Model):
    certificate_id = models.CharField(max_length=50, unique=True, default=generate_cert_id, help_text="Unique Certificate ID, used by students to lookup their certificate.")
    student_name = models.CharField(max_length=255)
    course_name = models.CharField(max_length=255)
    total_lectures = models.CharField(max_length=100, blank=True, help_text="e.g. 50 Hours or 40 Lectures")
    issue_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Student Certificate"
        verbose_name_plural = "Student Certificates"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.student_name} - {self.certificate_id}"

class Enquiry(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    course_name = models.CharField(max_length=255, blank=True)
    country = models.CharField(max_length=100, default="India")
    city = models.CharField(max_length=100, blank=True)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Enquiry"
        verbose_name_plural = "Enquiries"
        ordering = ['-created_at']

    def __str__(self):
        return f"Enquiry from {self.name} for {self.course_name}"

class PlacedStudent(models.Model):
    name = models.CharField(max_length=255)
    course = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    package = models.CharField(max_length=50, help_text="e.g. 8.5")
    month_year = models.CharField(max_length=100, help_text="e.g. Apr 2024")
    order = models.IntegerField(default=0, help_text="Controls the display order")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Placed Student"
        verbose_name_plural = "Placed Students"
        ordering = ['order', '-created_at']

    def __str__(self):
        return f"{self.name} - {self.company}"

class PlacementStat(models.Model):
    total_placements = models.CharField(max_length=50, default="350+")
    average_package = models.CharField(max_length=50, default="8.9 LPA")
    hiring_partners = models.CharField(max_length=50, default="120+")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Placement Stat"
        verbose_name_plural = "Placement Stats"

    def __str__(self):
        return f"Placement Stats: {self.total_placements} Placements"

class HiringPartner(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to="hiring_partners/", help_text="Company Logo")
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Hiring Partner"
        verbose_name_plural = "Hiring Partners"
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.name

class StandaloneRelatedCourse(models.Model):
    thumbnail = models.ImageField(upload_to="related_courses/", blank=True, null=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True, help_text="Short decription to display under the title.")
    student_count = models.CharField(max_length=100, default="1,000+")
    rating = models.CharField(max_length=50, default="4.8")
    explore_link = models.CharField(max_length=255, default="/all-courses", help_text="The URL that the explore button pushes.")
    order = models.IntegerField(default=0, help_text="Lower numbers appear first.")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Standalone Related Course"
        verbose_name_plural = "Standalone Related Courses"
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title


class Exam(models.Model):
    exam_code = models.CharField(max_length=50, unique=True, help_text="e.g. EX200")
    title = models.CharField(max_length=200, help_text="e.g. Red Hat Certified System Administrator")
    image = models.ImageField(upload_to="exams/", blank=True, null=True, help_text="Upload exam image if any")
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, help_text="e.g. 400.00")
    description = models.TextField(blank=True, help_text="Short description of the exam")
    # Subtitle Details
    bootcamp_title = models.CharField(max_length=255, blank=True, default="Exam Preparation Class (Bootcamp)", help_text="e.g. Exam Preparation Class (Bootcamp)")
    review_score = models.CharField(max_length=10, blank=True, default="4.9", help_text="e.g. 4.9")
    review_count = models.CharField(max_length=50, blank=True, default="8092", help_text="e.g. 8092")
    # Real Exam Format Table
    exam_duration = models.CharField(max_length=100, default="180 Minutes", help_text="e.g. 180 Minutes")
    number_of_questions = models.CharField(max_length=100, default="10-12", help_text="e.g. 10-12")
    exam_fee = models.CharField(max_length=255, default="Varies country to country", help_text="e.g. Varies country to country (20000 + 18% GST for India)")
    validity = models.CharField(max_length=100, default="3 years", help_text="e.g. 3 years")
    exam_format_table = models.CharField(max_length=100, default="Lab based", help_text="e.g. Lab based")
    passing_score = models.CharField(max_length=100, default="210 out of 300", help_text="e.g. 210 out of 300")
    eligibility = models.CharField(max_length=255, default="None", help_text="e.g. None")
    exam_languages = models.CharField(max_length=255, default="English", help_text="e.g. English, Japanese, Korean")

    # Bottom Product Box
    box_image = models.ImageField(upload_to="exams/boxes/", blank=True, null=True, help_text="The 3D Mock Test / Q&A Box Image")
    last_update_date = models.CharField(max_length=100, default="Apr 08, 2026", help_text="e.g. Apr 08, 2026")
    original_price = models.DecimalField(max_digits=10, decimal_places=2, default=500.00, help_text="The strike-through price, e.g. 500.00")

    # Meta Specifications
    preparation_mode = models.CharField(max_length=255, default="Classroom / Online", help_text="e.g. Classroom / Online")
    mock_test_count = models.CharField(max_length=100, default="5-10", help_text="e.g. 5-10")
    bundle_includes = models.CharField(max_length=255, default="10-12 Questions & Answers", help_text="e.g. 10-12 Questions & Answers")
    free_updates = models.CharField(max_length=100, default="90 days", help_text="e.g. 90 days")
    
    # Statistics
    stat_customers_passed = models.CharField(max_length=50, default="13+", help_text="e.g. 13+")
    stat_average_score = models.CharField(max_length=50, default="94%", help_text="e.g. 94%")
    stat_similar_questions = models.CharField(max_length=50, default="92%", help_text="e.g. 92%")

    # HTML Snippets (Except certified candidates which is now dynamic)
    overview_html = models.TextField(blank=True, help_text="General Overview / About the Exam")
    audience_html = models.TextField(blank=True, help_text="Audience / Bootcamp section")
    prerequisites_html = models.TextField(blank=True, help_text="Prerequisites / Syllabus section")
    objectives_html = models.TextField(blank=True, help_text="Passing Criteria section")
    certification_value_html = models.TextField(blank=True, help_text="What is Certification section")
    career_opportunities_html = models.TextField(blank=True, help_text="Cost / Career section")
    benefits_html = models.TextField(blank=True, help_text="Benefits of Certification section")
    future_html = models.TextField(blank=True, help_text="Future / Impact section")
    conclusion_html = models.TextField(blank=True, help_text="Conclusion / How to Pass section")
    location = models.CharField(max_length=255, default="Dubai, UAE", help_text="Location for headers (e.g. Dubai, UAE)")
    
    # Sidebar Custom Offer Box
    offer_box_title = models.CharField(max_length=255, blank=True, null=True, help_text="e.g. Free Red Hat certification exam offer")
    offer_box_subtitle = models.CharField(max_length=255, blank=True, null=True, help_text="e.g. Buy 1 Get 1 Exam Voucher")
    offer_box_button_text = models.CharField(max_length=100, blank=True, null=True, help_text="e.g. Enroll Here")
    offer_box_button_url = models.CharField(max_length=255, blank=True, null=True, help_text="e.g. /contact or an external link")

    order = models.IntegerField(default=0, help_text="Lower numbers appear first.")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.exam_code} - {self.title}"

class ExamCertificate(models.Model):
    exam = models.ForeignKey(Exam, related_name='certificates', on_delete=models.CASCADE)
    image = models.ImageField(upload_to="exams/certificates/", help_text="Upload certificate image")
    order = models.IntegerField(default=0, help_text="Lower numbers appear first")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'created_at']

    def __str__(self):
        return f"Certificate for {self.exam.exam_code}"


class ExamFAQ(models.Model):
    exam = models.ForeignKey(Exam, related_name='faqs', on_delete=models.CASCADE)
    question = models.TextField()
    answer = models.TextField()
    order = models.IntegerField(default=0, help_text="Order of appearance")
    
    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.exam.exam_code} FAQ - {self.question[:30]}"


class ExamReview(models.Model):
    exam = models.ForeignKey(Exam, related_name='reviews', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=True, help_text="e.g. Perfect Exam Blueprint")
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255, default="Student")
    text = models.TextField()
    rating = models.IntegerField(default=5)
    image = models.ImageField(upload_to="exams/reviews/", blank=True, null=True, help_text="Reviewer profile image")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Review by {self.name} for {self.exam.exam_code}"


class ExamPartnerLogo(models.Model):
    TYPE_CHOICES = [
        ('learner', 'Our Learners Work At'),
        ('trusted', 'Trusted By The Best'),
    ]
    exam = models.ForeignKey(Exam, related_name='partner_logos', on_delete=models.CASCADE)
    name = models.CharField(max_length=255, help_text="Name of the company/partner")
    logo_type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='learner')
    icon_class = models.CharField(max_length=100, blank=True, help_text="e.g. fa-brands fa-microsoft")
    image = models.ImageField(upload_to="exams/partners/", blank=True, null=True, help_text="Upload image OR use icon_class")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.get_logo_type_display()}: {self.name} ({self.exam.exam_code})"


class ExamRelatedCourse(models.Model):
    exam = models.ForeignKey(Exam, related_name='related_courses', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, help_text="e.g. Red Hat OpenStack Administration I EX110")
    bundle_includes = models.CharField(max_length=255, default="597 Questions & Answers", help_text="e.g. 597 Questions & Answers")
    last_update_date = models.CharField(max_length=100, default="Apr 10, 2026")
    price_original = models.DecimalField(max_digits=10, decimal_places=2, default=500.00)
    price_discounted = models.DecimalField(max_digits=10, decimal_places=2, default=99.00)
    explore_link = models.CharField(max_length=255, default="/exams", help_text="URL to navigate to")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Related: {self.title} -> {self.exam.exam_code}"


class ExamWhyChooseUs(models.Model):
    exam = models.ForeignKey(Exam, related_name='why_choose_us', on_delete=models.CASCADE)
    text = models.CharField(max_length=255, help_text="e.g. 100% Latest Exam Questions")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.exam.exam_code}: {self.text}"


class ExamAdBanner(models.Model):
    THEME_CHOICES = [
        ('danger', 'Red Theme'),
        ('dark', 'Dark Theme'),
        ('primary', 'Blue Theme'),
    ]
    exam = models.ForeignKey(Exam, related_name='ad_banners', on_delete=models.CASCADE)
    theme = models.CharField(max_length=20, choices=THEME_CHOICES, default='danger')
    icon_class = models.CharField(max_length=100, blank=True, help_text="e.g. fa-linux or fa-redhat")
    title = models.CharField(max_length=255, help_text="e.g. Linux")
    subtitle = models.CharField(max_length=255, blank=True, help_text="e.g. Training & Certification")
    button_text = models.CharField(max_length=100, default="JOIN NOW")
    button_url = models.CharField(max_length=255, default="/exams")
    contact_email = models.CharField(max_length=255, default="training.webasha@gmail.com")
    contact_phone = models.CharField(max_length=50, default="+918485847920")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.title} Ad for {self.exam.exam_code}"


class ExamSidebarCarousel(models.Model):
    exam = models.ForeignKey(Exam, related_name='sidebar_carousels', on_delete=models.CASCADE)
    image = models.ImageField(upload_to="exams/sidebar/", help_text="Upload 400x250 slider image")
    alt_text = models.CharField(max_length=255, blank=True, help_text="Accessibility alt text")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Sidebar Slider {self.order} for {self.exam.exam_code}"



class CustomPage(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    content = models.TextField(help_text='HTML/Summernote content')
    
    # Banner Section
    banner_image = models.ImageField(upload_to="pages/banners/", blank=True, null=True, help_text="Top banner background image")
    banner_title = models.CharField(max_length=255, blank=True, null=True, help_text="Large title over banner")
    banner_subtitle = models.CharField(max_length=255, blank=True, null=True, help_text="Subtitle under banner title")
    
    # Call to Action Section
    cta_text = models.CharField(max_length=100, blank=True, null=True, help_text="Button text (e.g. Enroll Now)")
    cta_link = models.CharField(max_length=255, blank=True, null=True, help_text="Button URL")
    
    # Sidebar Toggle
    show_sidebar = models.BooleanField(default=True, help_text="Show the right-side informational sidebar?")
    
    meta_title = models.CharField(max_length=255, blank=True, null=True)
    meta_description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Custom Page'
        verbose_name_plural = 'Custom Pages'
        ordering = ['-created_at']

    def __str__(self):
        return self.title

class LiveChatInquiry(models.Model):
    name = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=255)
    question = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Live Chat Inquiry'
        verbose_name_plural = 'Live Chat Inquiries'
        ordering = ['-created_at']

    def __str__(self):
        return f"Live Chat: {self.subject} from {self.name}"
