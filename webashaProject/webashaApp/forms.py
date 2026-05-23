from django import forms
from .models import Course, Coupon, AlumniProfile, CourseBanner, CourseSyllabus, CourseFAQ, UpcomingBatch, CourseSubCategory, CourseCategory, Enquiry, ExamVoucherOffer, GalleryImage, HiringPartner, HomeSection, StandaloneRelatedCourse, Instructor, PlacedStudent, PlacementStat, Profile, StudentCertificate, StudentScreenshot, Testimonial, VideoReview, Exam, ExamFAQ, ExamReview, ExamPartnerLogo, ExamRelatedCourse, ExamWhyChooseUs, ExamAdBanner, ExamSidebarCarousel, ExamCertificate, CourseTrackTool
from django.forms import inlineformset_factory
from django_summernote.widgets import SummernoteWidget


class CourseForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = [
            'title', 'slug', 'subcategory', 'course_code', 'menu_label', 
            'menu_icon', 'short_description', 'status', 'thumbnail', 
            'student_count', 'rating', 'price'
        ]
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'slug': forms.TextInput(attrs={'class': 'form-control'}),
            'subcategory': forms.Select(attrs={'class': 'form-select'}),
            'course_code': forms.TextInput(attrs={'class': 'form-control'}),
            'menu_label': forms.Select(attrs={'class': 'form-select'}),
            'menu_icon': forms.FileInput(attrs={'class': 'form-control'}),
            'short_description': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'status': forms.Select(attrs={'class': 'form-select'}),
            'thumbnail': forms.FileInput(attrs={'class': 'form-control'}),
            'student_count': forms.TextInput(attrs={'class': 'form-control'}),
            'rating': forms.NumberInput(attrs={'class': 'form-control', 'step': '0.1', 'min': '0', 'max': '5'}),
            'price': forms.NumberInput(attrs={'class': 'form-control', 'step': '0.01'}),
        }


class CouponForm(forms.ModelForm):
    class Meta:
        model = Coupon
        fields = ['code', 'discount_percent', 'expiry', 'active']
        widgets = {
            'code': forms.TextInput(attrs={'class': 'form-control'}),
            'discount_percent': forms.NumberInput(attrs={'class': 'form-control', 'min': 0, 'max': 100}),
            'expiry': forms.DateInput(attrs={'type':'date','class':'form-control'}),
            'active': forms.CheckboxInput(attrs={'class':'form-check-input'}),
        }


class AlumniProfileForm(forms.ModelForm):
    class Meta:
        model = AlumniProfile
        fields = [
            'name', 'experience', 'growth_badge', 'description', 
            'before_role', 'before_company_name', 'before_company_logo',
            'after_role', 'after_company_name', 'after_company_logo',
            'image', 'is_active'
        ]
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'experience': forms.TextInput(attrs={'class': 'form-control'}),
            'growth_badge': forms.TextInput(attrs={'class': 'form-control'}),
            'description': SummernoteWidget(attrs={'class': 'form-control'}),
            'before_role': forms.TextInput(attrs={'class': 'form-control'}),
            'before_company_name': forms.TextInput(attrs={'class': 'form-control'}),
            'before_company_logo': forms.FileInput(attrs={'class': 'form-control'}),
            'after_role': forms.TextInput(attrs={'class': 'form-control'}),
            'after_company_name': forms.TextInput(attrs={'class': 'form-control'}),
            'after_company_logo': forms.FileInput(attrs={'class': 'form-control'}),
            'image': forms.FileInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class CourseBannerForm(forms.ModelForm):
    class Meta:
        model = CourseBanner
        fields = '__all__'
        exclude = ['created_at']
        widgets = {
            'page_identifier': forms.TextInput(attrs={'class': 'form-control'}),
            'breadcrumb_active': forms.TextInput(attrs={'class': 'form-control'}),
            'heading': forms.TextInput(attrs={'class': 'form-control'}),
            'enrolled_count': forms.TextInput(attrs={'class': 'form-control'}),
            'rating_text': forms.TextInput(attrs={'class': 'form-control'}),
            'google_rating': forms.TextInput(attrs={'class': 'form-control'}),
            'facebook_rating': forms.TextInput(attrs={'class': 'form-control'}),
            'description': SummernoteWidget(attrs={'class': 'form-control'}),
            'detail_duration': forms.TextInput(attrs={'class': 'form-control'}),
            'detail_mode': forms.TextInput(attrs={'class': 'form-control'}),
            'detail_certification': forms.TextInput(attrs={'class': 'form-control'}),
            'detail_institute': forms.TextInput(attrs={'class': 'form-control'}),
            'detail_includes': forms.TextInput(attrs={'class': 'form-control'}),
            'voucher_offer': forms.Select(attrs={'class': 'form-select'}),
            'video_thumbnail': forms.FileInput(attrs={'class': 'form-control'}),
            'youtube_video_url': forms.URLInput(attrs={'class': 'form-control'}),
            'youtube_video_id': forms.TextInput(attrs={'class': 'form-control'}),
            'pdf_syllabus_link': forms.TextInput(attrs={'class': 'form-control'}),
            'stat_professionals': forms.TextInput(attrs={'class': 'form-control'}),
            'stat_batches': forms.TextInput(attrs={'class': 'form-control'}),
            'stat_countries': forms.TextInput(attrs={'class': 'form-control'}),
            'stat_clients': forms.TextInput(attrs={'class': 'form-control'}),
            'overview_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'exam_info_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'salary_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'career_benefits_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'why_choose_us_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class CourseSyllabusForm(forms.ModelForm):
    class Meta:
        model = CourseSyllabus
        fields = ['module_title', 'description', 'order']
        widgets = {
            'module_title': forms.TextInput(attrs={'class': 'form-control'}),
            'description': SummernoteWidget(attrs={'class': 'form-control'}),
            'order': forms.NumberInput(attrs={'class': 'form-control'})
        }

class CourseFAQForm(forms.ModelForm):
    class Meta:
        model = CourseFAQ
        fields = ['question', 'answer', 'order']
        widgets = {
            'question': forms.Textarea(attrs={'class': 'form-control', 'rows': 2}),
            'answer': SummernoteWidget(attrs={'class': 'form-control'}),
            'order': forms.NumberInput(attrs={'class': 'form-control'})
        }

class UpcomingBatchForm(forms.ModelForm):
    class Meta:
        model = UpcomingBatch
        fields = ['date', 'mode_of_class', 'batch_form', 'time', 'status_text']
        widgets = {
            'date': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'mode_of_class': forms.TextInput(attrs={'class': 'form-control'}),
            'batch_form': forms.TextInput(attrs={'class': 'form-control'}),
            'time': forms.TextInput(attrs={'class': 'form-control'}),
            'status_text': forms.TextInput(attrs={'class': 'form-control'})
        }

SyllabusFormSet = inlineformset_factory(
    CourseBanner, CourseSyllabus, form=CourseSyllabusForm,
    extra=1, can_delete=True
)

FAQFormSet = inlineformset_factory(
    CourseBanner, CourseFAQ, form=CourseFAQForm,
    extra=1, can_delete=True
)

BatchFormSet = inlineformset_factory(
    CourseBanner, UpcomingBatch, form=UpcomingBatchForm,
    extra=1, can_delete=True
)

class CourseTrackToolForm(forms.ModelForm):
    class Meta:
        model = CourseTrackTool
        fields = ['category', 'tools_covered', 'order']
        widgets = {
            'category': forms.TextInput(attrs={'class': 'form-control'}),
            'tools_covered': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'order': forms.NumberInput(attrs={'class': 'form-control'})
        }

TrackToolFormSet = inlineformset_factory(
    CourseBanner, CourseTrackTool, form=CourseTrackToolForm,
    extra=1, can_delete=True
)

class CourseSubCategoryForm(forms.ModelForm):
    class Meta:
        model = CourseSubCategory
        fields = ['category', 'name', 'order']
        widgets = {
            'category': forms.Select(attrs={'class': 'form-select'}),
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'order': forms.NumberInput(attrs={'class': 'form-control'})
        }

class CourseCategoryForm(forms.ModelForm):
    class Meta:
        model = CourseCategory
        fields = ['name', 'slug', 'icon', 'icon_class', 'order']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'slug': forms.TextInput(attrs={'class': 'form-control'}),
            'icon': forms.FileInput(attrs={'class': 'form-control'}),
            'icon_class': forms.TextInput(attrs={'class': 'form-control'}),
            'order': forms.NumberInput(attrs={'class': 'form-control'})
        }

class EnquiryForm(forms.ModelForm):
    class Meta:
        model = Enquiry
        fields = ['name', 'email', 'phone', 'course_name', 'country', 'city']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Full Name'}),
            'email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Email Address'}),
            'phone': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Phone Number'}),
            'course_name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Course Name'}),
            'country': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Country'}),
            'city': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'City'}),
        }

class ExamVoucherOfferForm(forms.ModelForm):
    class Meta:
        model = ExamVoucherOffer
        fields = ['title', 'image', 'whatsapp_number', 'whatsapp_message', 'enroll_link', 'is_active']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'image': forms.FileInput(attrs={'class': 'form-control'}),
            'whatsapp_number': forms.TextInput(attrs={'class': 'form-control', 'placeholder': '+91-XXXXX'}),
            'whatsapp_message': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'enroll_link': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Optional redirect link'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class GalleryImageForm(forms.ModelForm):
    class Meta:
        model = GalleryImage
        fields = ['title', 'image', 'category', 'is_active', 'order']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Image title or alt text'}),
            'image': forms.FileInput(attrs={'class': 'form-control'}),
            'category': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'E.g., Event, Classroom, Lab'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
            'order': forms.NumberInput(attrs={'class': 'form-control', 'placeholder': '0'})
        }

class HiringPartnerForm(forms.ModelForm):
    class Meta:
        model = HiringPartner
        fields = ['name', 'logo', 'order', 'is_active']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Company Name'}),
            'logo': forms.FileInput(attrs={'class': 'form-control'}),
            'order': forms.NumberInput(attrs={'class': 'form-control', 'placeholder': '0'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class HomeSectionForm(forms.ModelForm):
    class Meta:
        model = HomeSection
        fields = ['identifier', 'badge', 'title', 'highlight_text', 'description', 'button_text', 'view_all_text', 'view_all_link', 'curated_courses', 'is_active']
        widgets = {
            'identifier': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. related_courses'}),
            'badge': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Optional top badge'}),
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Main title text'}),
            'highlight_text': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Words in title to turn red'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'button_text': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. Explore More'}),
            'view_all_text': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. View All'}),
            'view_all_link': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. /all-courses'}),
            'curated_courses': forms.SelectMultiple(attrs={'class': 'form-select', 'size': 8}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class StandaloneRelatedCourseForm(forms.ModelForm):
    class Meta:
        model = StandaloneRelatedCourse
        fields = ['thumbnail', 'title', 'description', 'student_count', 'rating', 'explore_link', 'order', 'is_active']
        widgets = {
            'thumbnail': forms.FileInput(attrs={'class': 'form-control'}),
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Course Title'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'rows': 2}),
            'student_count': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. 1,000+'}),
            'rating': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. 4.8'}),
            'explore_link': forms.TextInput(attrs={'class': 'form-control', 'placeholder': '/all-courses'}),
            'order': forms.NumberInput(attrs={'class': 'form-control', 'placeholder': '0'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class InstructorForm(forms.ModelForm):
    class Meta:
        model = Instructor
        fields = ['full_name', 'designation', 'bio', 'image', 'linkedin_link', 'google_link', 'is_active']
        widgets = {
            'full_name': forms.TextInput(attrs={'class': 'form-control'}),
            'designation': forms.TextInput(attrs={'class': 'form-control'}),
            'bio': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'image': forms.FileInput(attrs={'class': 'form-control'}),
            'linkedin_link': forms.URLInput(attrs={'class': 'form-control'}),
            'google_link': forms.URLInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class PlacedStudentForm(forms.ModelForm):
    class Meta:
        model = PlacedStudent
        fields = ['name', 'course', 'role', 'company', 'package', 'month_year', 'order', 'is_active']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'course': forms.TextInput(attrs={'class': 'form-control'}),
            'role': forms.TextInput(attrs={'class': 'form-control'}),
            'company': forms.TextInput(attrs={'class': 'form-control'}),
            'package': forms.TextInput(attrs={'class': 'form-control'}),
            'month_year': forms.TextInput(attrs={'class': 'form-control'}),
            'order': forms.NumberInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class PlacementStatForm(forms.ModelForm):
    class Meta:
        model = PlacementStat
        fields = ['total_placements', 'average_package', 'hiring_partners']
        widgets = {
            'total_placements': forms.TextInput(attrs={'class': 'form-control'}),
            'average_package': forms.TextInput(attrs={'class': 'form-control'}),
            'hiring_partners': forms.TextInput(attrs={'class': 'form-control'})
        }

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['role', 'biography', 'phone', 'address', 'image', 'facebook_link', 'twitter_link', 'linkedin_link']
        widgets = {
            'role': forms.Select(attrs={'class': 'form-control'}),
            'biography': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'phone': forms.TextInput(attrs={'class': 'form-control'}),
            'address': forms.Textarea(attrs={'class': 'form-control', 'rows': 2}),
            'image': forms.FileInput(attrs={'class': 'form-control'}),
            'facebook_link': forms.URLInput(attrs={'class': 'form-control'}),
            'twitter_link': forms.URLInput(attrs={'class': 'form-control'}),
            'linkedin_link': forms.URLInput(attrs={'class': 'form-control'})
        }

class StudentCertificateForm(forms.ModelForm):
    class Meta:
        model = StudentCertificate
        fields = ['certificate_id', 'student_name', 'course_name', 'total_lectures', 'is_active']
        widgets = {
            'certificate_id': forms.TextInput(attrs={'class': 'form-control'}),
            'student_name': forms.TextInput(attrs={'class': 'form-control'}),
            'course_name': forms.TextInput(attrs={'class': 'form-control'}),
            'total_lectures': forms.TextInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class StudentScreenshotForm(forms.ModelForm):
    class Meta:
        model = StudentScreenshot
        fields = ['name', 'logo_image', 'phone_image', 'order', 'is_active']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'logo_image': forms.FileInput(attrs={'class': 'form-control'}),
            'phone_image': forms.FileInput(attrs={'class': 'form-control'}),
            'order': forms.NumberInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class TestimonialForm(forms.ModelForm):
    class Meta:
        model = Testimonial
        fields = ['full_name', 'designation', 'content', 'image', 'rating', 'review_type', 'video_id', 'linkedin_url', 'is_active']
        widgets = {
            'full_name': forms.TextInput(attrs={'class': 'form-control'}),
            'designation': forms.TextInput(attrs={'class': 'form-control'}),
            'content': SummernoteWidget(attrs={'class': 'form-control', 'style': 'min-height: 250px;'}),
            'image': forms.FileInput(attrs={'class': 'form-control'}),
            'rating': forms.NumberInput(attrs={'class': 'form-control', 'min': 1, 'max': 5}),
            'review_type': forms.Select(attrs={'class': 'form-control'}),
            'video_id': forms.TextInput(attrs={'class': 'form-control'}),
            'linkedin_url': forms.URLInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class VideoReviewForm(forms.ModelForm):
    class Meta:
        model = VideoReview
        fields = ['title', 'image', 'video_id', 'is_active']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'image': forms.FileInput(attrs={'class': 'form-control'}),
            'video_id': forms.TextInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class ExamForm(forms.ModelForm):
    class Meta:
        model = Exam
        fields = '__all__'
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'exam_code': forms.TextInput(attrs={'class': 'form-control'}),
            'image': forms.FileInput(attrs={'class': 'form-control'}),
            'description': SummernoteWidget(attrs={'class': 'form-control'}),
            'bootcamp_title': forms.TextInput(attrs={'class': 'form-control'}),
            'review_score': forms.TextInput(attrs={'class': 'form-control'}),
            'review_count': forms.TextInput(attrs={'class': 'form-control'}),
            'price': forms.TextInput(attrs={'class': 'form-control'}),
            'original_price': forms.TextInput(attrs={'class': 'form-control'}),
            'last_update_date': forms.TextInput(attrs={'class': 'form-control'}),
            'box_image': forms.FileInput(attrs={'class': 'form-control'}),
            
            'offer_box_title': forms.TextInput(attrs={'class': 'form-control'}),
            'offer_box_subtitle': forms.TextInput(attrs={'class': 'form-control'}),
            'offer_box_button_text': forms.TextInput(attrs={'class': 'form-control'}),
            'offer_box_button_url': forms.TextInput(attrs={'class': 'form-control'}),

            # Real Exam Format Table
            'exam_duration': forms.TextInput(attrs={'class': 'form-control'}),
            'number_of_questions': forms.TextInput(attrs={'class': 'form-control'}),
            'exam_fee': forms.TextInput(attrs={'class': 'form-control'}),
            'validity': forms.TextInput(attrs={'class': 'form-control'}),
            'exam_format_table': forms.TextInput(attrs={'class': 'form-control'}),
            'passing_score': forms.TextInput(attrs={'class': 'form-control'}),
            'eligibility': forms.TextInput(attrs={'class': 'form-control'}),
            'exam_languages': forms.TextInput(attrs={'class': 'form-control'}),

            # Meta
            'preparation_mode': forms.TextInput(attrs={'class': 'form-control'}),
            'mock_test_count': forms.TextInput(attrs={'class': 'form-control'}),
            'bundle_includes': forms.TextInput(attrs={'class': 'form-control'}),
            'free_updates': forms.TextInput(attrs={'class': 'form-control'}),
            
            # Stats
            'stat_customers_passed': forms.TextInput(attrs={'class': 'form-control'}),
            'stat_average_score': forms.TextInput(attrs={'class': 'form-control'}),
            'stat_similar_questions': forms.TextInput(attrs={'class': 'form-control'}),
            
            # HTML Fields
            'overview_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'audience_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'prerequisites_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'objectives_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'certification_value_html': SummernoteWidget(attrs={'class': 'form-control'}),
            'career_opportunities_html': SummernoteWidget(attrs={'class': 'form-control'}),
            
            'order': forms.NumberInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

# --- Exam Inline Formsets ---

ExamFAQFormSet = inlineformset_factory(
    Exam, ExamFAQ, fields=['question', 'answer', 'order'], extra=0, can_delete=True,
    widgets={'question': forms.Textarea(attrs={'class': 'form-control', 'rows': 2}), 'answer': SummernoteWidget(attrs={'class': 'form-control'}), 'order': forms.NumberInput(attrs={'class': 'form-control'})}
)

ExamReviewFormSet = inlineformset_factory(
    Exam, ExamReview, fields=['rating', 'title', 'text', 'image', 'name', 'role', 'order'], extra=0, can_delete=True,
    widgets={
        'rating': forms.NumberInput(attrs={'class': 'form-control', 'min': 1, 'max': 5}),
        'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. Zero to Certified in 45 Days'}),
        'text': forms.Textarea(attrs={'class': 'form-control', 'rows': 3, 'placeholder': 'Review content...'}),
        'image': forms.FileInput(attrs={'class': 'form-control'}),
        'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Full Name'}),
        'role': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. RHCSA | Cloud Ops'}),
        'order': forms.NumberInput(attrs={'class': 'form-control'}),
    }
)

ExamPartnerLogoFormSet = inlineformset_factory(
    Exam, ExamPartnerLogo, fields=['name', 'logo_type', 'icon_class', 'image', 'order'], extra=0, can_delete=True,
    widgets={'name': forms.TextInput(attrs={'class': 'form-control'}), 'logo_type': forms.Select(attrs={'class': 'form-select'}), 'icon_class': forms.TextInput(attrs={'class': 'form-control'}), 'image': forms.FileInput(attrs={'class': 'form-control'}), 'order': forms.NumberInput(attrs={'class': 'form-control'})}
)

ExamRelatedCourseFormSet = inlineformset_factory(
    Exam, ExamRelatedCourse, fields=['title', 'bundle_includes', 'last_update_date', 'price_original', 'price_discounted', 'explore_link', 'order'], extra=0, can_delete=True,
    widgets={'title': forms.TextInput(attrs={'class': 'form-control'}), 'bundle_includes': forms.TextInput(attrs={'class': 'form-control'}), 'last_update_date': forms.TextInput(attrs={'class': 'form-control'}), 'price_original': forms.NumberInput(attrs={'class': 'form-control'}), 'price_discounted': forms.NumberInput(attrs={'class': 'form-control'}), 'explore_link': forms.TextInput(attrs={'class': 'form-control'}), 'order': forms.NumberInput(attrs={'class': 'form-control'})}
)

ExamWhyChooseUsFormSet = inlineformset_factory(
    Exam, ExamWhyChooseUs, fields=['text', 'order'], extra=0, can_delete=True,
    widgets={'text': forms.TextInput(attrs={'class': 'form-control'}), 'order': forms.NumberInput(attrs={'class': 'form-control'})}
)

ExamAdBannerFormSet = inlineformset_factory(
    Exam, ExamAdBanner, fields=['theme', 'icon_class', 'title', 'subtitle', 'button_text', 'button_url', 'contact_email', 'contact_phone', 'order'], extra=0, can_delete=True,
    widgets={'theme': forms.Select(attrs={'class': 'form-select'}), 'icon_class': forms.TextInput(attrs={'class': 'form-control'}), 'title': forms.TextInput(attrs={'class': 'form-control'}), 'subtitle': forms.TextInput(attrs={'class': 'form-control'}), 'button_text': forms.TextInput(attrs={'class': 'form-control'}), 'button_url': forms.TextInput(attrs={'class': 'form-control'}), 'contact_email': forms.TextInput(attrs={'class': 'form-control'}), 'contact_phone': forms.TextInput(attrs={'class': 'form-control'}), 'order': forms.NumberInput(attrs={'class': 'form-control'})}
)

ExamSidebarCarouselFormSet = inlineformset_factory(
    Exam, ExamSidebarCarousel, fields=['image', 'alt_text', 'order'], extra=0, can_delete=True,
    widgets={'image': forms.FileInput(attrs={'class': 'form-control'}), 'alt_text': forms.TextInput(attrs={'class': 'form-control'}), 'order': forms.NumberInput(attrs={'class': 'form-control'})}
)

ExamCertificateFormSet = inlineformset_factory(
    Exam, ExamCertificate, fields=['image', 'order'], extra=0, can_delete=True,
    widgets={'image': forms.FileInput(attrs={'class': 'form-control'}), 'order': forms.NumberInput(attrs={'class': 'form-control'})}
)

from django.contrib.auth.models import Group
class GroupForm(forms.ModelForm):
    class Meta:
        model = Group
        fields = ['name', 'permissions']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'permissions': forms.SelectMultiple(attrs={'class': 'form-control', 'style': 'height: 300px;'}),
        }
