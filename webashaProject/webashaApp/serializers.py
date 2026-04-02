from rest_framework import serializers
from .models import Course, Testimonial, VideoReview, Instructor, CourseCategory, CourseSubCategory, HomeSection, AlumniProfile, ExamVoucherOffer, UpcomingBatch, CourseBanner, StudentScreenshot, CourseSyllabus, CourseFAQ, GalleryImage, StudentCertificate, PlacedStudent, PlacementStat, HiringPartner

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
