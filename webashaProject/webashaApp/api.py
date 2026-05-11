from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Course, Testimonial, VideoReview, Instructor, CourseCategory, HomeSection, AlumniProfile, ExamVoucherOffer, Exam, UpcomingBatch, CourseBanner, StudentScreenshot, GalleryImage, StudentCertificate, Contact, Enquiry, StandaloneRelatedCourse, CustomPage, LiveChatInquiry


from .serializers import (
    CourseSerializer, 
    TestimonialSerializer, 
    VideoReviewSerializer,
    InstructorSerializer, 
    CourseCategorySerializer,
    HomeSectionSerializer,
    AlumniProfileSerializer,
    ExamVoucherOfferSerializer,
    ExamSerializer,
    UpcomingBatchSerializer,
    CourseBannerSerializer,
    StudentScreenshotSerializer,
    MenuCategorySerializer,
    GalleryImageSerializer,
    StudentCertificateSerializer,
    StandaloneRelatedCourseSerializer,
    CustomPageSerializer
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

class ExamViewSet(viewsets.ModelViewSet):
    queryset = Exam.objects.filter(is_active=True).order_by('order', '-created_at')
    serializer_class = ExamSerializer
    lookup_field = 'exam_code'

    def get_object(self):
        from django.shortcuts import get_object_or_404
        queryset = self.filter_queryset(self.get_queryset())
        filter_kwargs = {f"{self.lookup_field}__iexact": self.kwargs[self.lookup_field]}
        obj = get_object_or_404(queryset, **filter_kwargs)
        self.check_object_permissions(self.request, obj)
        return obj

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

class StandaloneRelatedCourseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StandaloneRelatedCourse.objects.filter(is_active=True)
    serializer_class = StandaloneRelatedCourseSerializer

class CustomPageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CustomPage.objects.filter(is_active=True)
    serializer_class = CustomPageSerializer
    lookup_field = 'slug'

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_contact(request):
    data = request.data
    try:
        Contact.objects.create(
            name=data.get('name', ''),
            email=data.get('email', ''),
            phone=data.get('phone', ''),
            message=data.get('message', ''),
            is_read=False
        )
        return Response({"message": "Contact form submitted successfully!"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_enquiry(request):
    data = request.data
    try:
        Enquiry.objects.create(
            name=data.get('name', ''),
            email=data.get('email', ''),
            phone=data.get('phone', ''),
            course_name=data.get('course_name', ''),
            country=data.get('country', 'India'),
            city=data.get('city', '')
        )
        return Response({"message": "Enquiry submitted successfully!"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_enrollment(request):
    data = request.data
    try:
        Enquiry.objects.create(
            name=data.get('name', ''),
            email=data.get('email', ''),
            phone=data.get('phone', ''),
            course_name=data.get('course_name', ''),
            country=data.get('country', 'India'),
            city=data.get('city', '')
        )
        return Response({"message": "Enrollment submitted successfully!"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_live_chat(request):
    data = request.data
    try:
        LiveChatInquiry.objects.create(
            name=data.get('name', ''),
            subject=data.get('subject', ''),
            email=data.get('email', ''),
            phone=data.get('phone', ''),
            location=data.get('location', ''),
            question=data.get('question', ''),
            is_read=False
        )
        return Response({"message": "Live chat inquiry submitted successfully!"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
