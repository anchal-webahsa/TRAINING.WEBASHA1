from rest_framework import viewsets
from .models import Course, Testimonial, VideoReview, Instructor, CourseCategory, HomeSection
from .serializers import (
    CourseSerializer, 
    TestimonialSerializer, 
    VideoReviewSerializer,
    InstructorSerializer, 
    CourseCategorySerializer,
    HomeSectionSerializer
)

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseCategoryViewSet(viewsets.ModelViewSet):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class VideoReviewViewSet(viewsets.ModelViewSet):
    queryset = VideoReview.objects.all()
    serializer_class = VideoReviewSerializer

class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

class HomeSectionViewSet(viewsets.ModelViewSet):
    queryset = HomeSection.objects.all()
    serializer_class = HomeSectionSerializer
    lookup_field = 'identifier'
