from rest_framework import serializers
from .models import Course, Testimonial, VideoReview, Instructor, CourseCategory, HomeSection, AlumniProfile

class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField()
    class Meta:
        model = Course
        fields = '__all__'

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
