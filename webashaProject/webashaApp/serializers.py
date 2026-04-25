from rest_framework import serializers
from .models import Course, Testimonial, VideoReview, Instructor, CourseCategory, CourseSubCategory, HomeSection, AlumniProfile, ExamVoucherOffer, Exam, UpcomingBatch, CourseBanner, StudentScreenshot, CourseSyllabus, CourseFAQ, GalleryImage, StudentCertificate, PlacedStudent, PlacementStat, HiringPartner, StandaloneRelatedCourse, ExamCertificate

class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField()
    class Meta:
        model = Course
        fields = '__all__'

class MenuCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'slug', 'course_code', 'menu_label', 'menu_icon', 'short_description']

class MenuSubCategorySerializer(serializers.ModelSerializer):
    courses = MenuCourseSerializer(many=True, read_only=True)
    class Meta:
        model = CourseSubCategory
        fields = ['id', 'name', 'order', 'courses']

class MenuCategorySerializer(serializers.ModelSerializer):
    subcategories = MenuSubCategorySerializer(many=True, read_only=True)
    class Meta:
        model = CourseCategory
        fields = ['id', 'name', 'slug', 'icon', 'icon_class', 'order', 'subcategories']

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class VideoReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoReview
        fields = '__all__'

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = '__all__'

class HomeSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeSection
        fields = '__all__'
        depth = 1

class AlumniProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlumniProfile
        fields = '__all__'

class ExamVoucherOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamVoucherOffer
        fields = '__all__'

class ExamCertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamCertificate
        fields = '__all__'

from .models import (
    ExamFAQ, ExamReview, ExamPartnerLogo, ExamRelatedCourse, 
    ExamWhyChooseUs, ExamAdBanner, ExamSidebarCarousel, ExamCertificate, CustomPage
)

class ExamFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamFAQ
        fields = '__all__'

class ExamReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamReview
        fields = '__all__'

class ExamPartnerLogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamPartnerLogo
        fields = '__all__'

class ExamRelatedCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamRelatedCourse
        fields = '__all__'

class ExamWhyChooseUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamWhyChooseUs
        fields = '__all__'

class ExamAdBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamAdBanner
        fields = '__all__'

class ExamCertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamCertificate
        fields = '__all__'
        fields = '__all__'

class ExamSidebarCarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamSidebarCarousel
        fields = '__all__'

class ExamSerializer(serializers.ModelSerializer):
    certificates = ExamCertificateSerializer(many=True, read_only=True)
    faqs = ExamFAQSerializer(many=True, read_only=True)
    reviews = ExamReviewSerializer(many=True, read_only=True)
    partner_logos = ExamPartnerLogoSerializer(many=True, read_only=True)
    related_courses = ExamRelatedCourseSerializer(many=True, read_only=True)
    why_choose_us = ExamWhyChooseUsSerializer(many=True, read_only=True)
    ad_banners = ExamAdBannerSerializer(many=True, read_only=True)
    sidebar_carousels = ExamSidebarCarouselSerializer(many=True, read_only=True)
    certificates = ExamCertificateSerializer(many=True, read_only=True)

    class Meta:
        model = Exam
        fields = '__all__'

class UpcomingBatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingBatch
        fields = '__all__'

class CourseSyllabusSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseSyllabus
        fields = '__all__'

class CourseFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseFAQ
        fields = '__all__'

class CourseBannerSerializer(serializers.ModelSerializer):
    syllabus_modules = CourseSyllabusSerializer(many=True, read_only=True)
    faqs = CourseFAQSerializer(many=True, read_only=True)
    voucher_offer = ExamVoucherOfferSerializer(read_only=True)

    class Meta:
        model = CourseBanner
        fields = '__all__'

class StudentScreenshotSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentScreenshot
        fields = '__all__'

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'

class StudentCertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentCertificate
        fields = '__all__'

class PlacedStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlacedStudent
        fields = '__all__'

class PlacementStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlacementStat
        fields = '__all__'

class HiringPartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HiringPartner
        fields = '__all__'

class CustomPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomPage
        fields = '__all__'

class StandaloneRelatedCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = StandaloneRelatedCourse
        fields = '__all__'
