from rest_framework import viewsets
from .models import Course, Testimonial, VideoReview, Instructor, CourseCategory, HomeSection, AlumniProfile, ExamVoucherOffer, UpcomingBatch, CourseBanner, StudentScreenshot, GalleryImage, StudentCertificate
from .serializers import (
    CourseSerializer, 
    TestimonialSerializer, 
    VideoReviewSerializer,
    InstructorSerializer, 
    CourseCategorySerializer,
    HomeSectionSerializer,
    AlumniProfileSerializer,
    ExamVoucherOfferSerializer,
    UpcomingBatchSerializer,
    CourseBannerSerializer,
    StudentScreenshotSerializer,
    MenuCategorySerializer,
    GalleryImageSerializer,
    StudentCertificateSerializer
)

class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryImage.objects.filter(is_active=True)
    serializer_class = GalleryImageSerializer

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

class AlumniProfileViewSet(viewsets.ModelViewSet):
    queryset = AlumniProfile.objects.all().order_by('-created_at')
    serializer_class = AlumniProfileSerializer

class ExamVoucherOfferViewSet(viewsets.ModelViewSet):
    queryset = ExamVoucherOffer.objects.all().order_by('-created_at')
    serializer_class = ExamVoucherOfferSerializer

class UpcomingBatchViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        from django.utils import timezone
        qs = UpcomingBatch.objects.filter(is_active=True, date__gte=timezone.now().date()).order_by('date')
        course = self.request.query_params.get('course', None)
        if course:
            qs = qs.filter(course_banner__page_identifier=course)
        return qs
    serializer_class = UpcomingBatchSerializer

class CourseBannerViewSet(viewsets.ModelViewSet):
    queryset = CourseBanner.objects.filter(is_active=True)
    serializer_class = CourseBannerSerializer
    lookup_field = 'page_identifier'

class StudentScreenshotViewSet(viewsets.ModelViewSet):
    queryset = StudentScreenshot.objects.filter(is_active=True).order_by('order', '-created_at')
    serializer_class = StudentScreenshotSerializer

class MenuCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CourseCategory.objects.all().order_by('order')
    serializer_class = MenuCategorySerializer
    pagination_class = None

class StudentCertificateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StudentCertificate.objects.filter(is_active=True)
    serializer_class = StudentCertificateSerializer
    lookup_field = 'certificate_id'
