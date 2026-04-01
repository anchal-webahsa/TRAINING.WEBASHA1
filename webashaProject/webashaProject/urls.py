from django.contrib import admin
from django.urls import path,include
from django.views.generic import RedirectView
from rest_framework import routers
from webashaApp.api import (
    CourseViewSet, 
    TestimonialViewSet, 
    VideoReviewViewSet,
    InstructorViewSet, 
    CourseCategoryViewSet,
    HomeSectionViewSet,
    AlumniProfileViewSet,
    ExamVoucherOfferViewSet,
    UpcomingBatchViewSet,
    CourseBannerViewSet,
    StudentScreenshotViewSet,
    MenuCategoryViewSet,
    GalleryImageViewSet,
    StudentCertificateViewSet
)

router = routers.DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'categories', CourseCategoryViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'video-reviews', VideoReviewViewSet)
router.register(r'instructors', InstructorViewSet)
router.register(r'sections', HomeSectionViewSet)
router.register(r'alumni-profiles', AlumniProfileViewSet)
router.register(r'exam-voucher-offer', ExamVoucherOfferViewSet)
router.register(r'upcoming-batches', UpcomingBatchViewSet, basename='upcomingbatch')
router.register(r'course-banners', CourseBannerViewSet, basename='coursebanner')
router.register(r'student-screenshots', StudentScreenshotViewSet, basename='studentscreenshot')
router.register(r'mega-menu', MenuCategoryViewSet, basename='megamenu')
router.register(r'gallery-images', GalleryImageViewSet, basename='galleryimage')
router.register(r'student-certificates', StudentCertificateViewSet, basename='studentcertificate')

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/profile/', RedirectView.as_view(url='/', permanent=False)),
    path('api/', include(router.urls)),
    path("",include("webashaApp.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
