from django.contrib import admin
from .models import (
    Course, 
    CourseCategory, 
    CourseSubCategory,
    Coupon, 
    Profile, 
    Testimonial, 
    VideoReview,
    Instructor,
    HomeSection,
    AlumniProfile,
    ExamVoucherOffer,
    UpcomingBatch,
    CourseBanner,
    StudentScreenshot
)


class BaseAdmin(admin.ModelAdmin):
    def has_module_permission(self, request):
        return request.user.is_active and request.user.is_superuser
    def has_view_permission(self, request, obj=None):
        return request.user.is_superuser
    def has_add_permission(self, request):
        return request.user.is_superuser
    def has_change_permission(self, request, obj=None):
        return request.user.is_superuser
    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser


class CouponAdmin(BaseAdmin):
    list_display = ('code', 'discount_percent', 'expiry', 'active', 'created_at')
    search_fields = ('code',)
    list_filter = ('active', 'expiry')


class CourseAdmin(BaseAdmin):
    list_display = ('title', 'course_code', 'subcategory', 'status', 'price', 'created_at')
    search_fields = ('title', 'course_code')
    list_filter = ('status', 'subcategory__category', 'subcategory', 'menu_label')

    class Media:
        js = ('admin/js/course_admin.js',)


class CourseCategoryAdmin(BaseAdmin):
    list_display = ('name', 'slug', 'order', 'created_at')
    search_fields = ('name',)
    list_editable = ('order',)

class CourseSubCategoryAdmin(BaseAdmin):
    list_display = ('name', 'category', 'order', 'created_at')
    search_fields = ('name', 'category__name')
    list_filter = ('category',)
    list_editable = ('order',)


class TestimonialAdmin(BaseAdmin):
    list_display = ('full_name', 'designation', 'review_type', 'rating', 'is_active', 'created_at')
    search_fields = ('full_name', 'content')
    list_filter = ('is_active', 'review_type', 'rating')

    class Media:
        js = ('admin/js/testimonial_admin.js',)


class InstructorAdmin(BaseAdmin):
    list_display = ('full_name', 'designation', 'is_active', 'created_at')
    search_fields = ('full_name', 'designation')
    list_filter = ('is_active',)


class VideoReviewAdmin(BaseAdmin):
    list_display = ('title', 'video_id', 'is_active', 'created_at')
    search_fields = ('title', 'video_id')
    list_filter = ('is_active',)


admin.site.register(Course, CourseAdmin)
admin.site.register(CourseCategory, CourseCategoryAdmin)
admin.site.register(CourseSubCategory, CourseSubCategoryAdmin)
admin.site.register(Coupon, CouponAdmin)
admin.site.register(Profile, BaseAdmin)
admin.site.register(Testimonial, TestimonialAdmin)
admin.site.register(VideoReview, VideoReviewAdmin)
admin.site.register(Instructor, InstructorAdmin)
admin.site.register(HomeSection)

class AlumniProfileAdmin(BaseAdmin):
    list_display = ('name', 'experience', 'growth_badge', 'is_active', 'created_at')
    search_fields = ('name', 'before_role', 'after_role')
    list_filter = ('is_active',)

admin.site.register(AlumniProfile, AlumniProfileAdmin)

class ExamVoucherOfferAdmin(BaseAdmin):
    list_display = ('title', 'whatsapp_number', 'is_active', 'created_at')
    search_fields = ('title', 'whatsapp_number')
    list_filter = ('is_active',)

admin.site.register(ExamVoucherOffer, ExamVoucherOfferAdmin)

class UpcomingBatchAdmin(BaseAdmin):
    list_display = ('date', 'mode_of_class', 'batch_form', 'time', 'status_text', 'is_active')
    search_fields = ('batch_form', 'mode_of_class', 'status_text')
    list_filter = ('is_active', 'status_color', 'batch_form')

admin.site.register(UpcomingBatch, UpcomingBatchAdmin)

class CourseBannerAdmin(BaseAdmin):
    list_display = ('page_identifier', 'heading', 'is_active')
    search_fields = ('page_identifier', 'heading')
    list_filter = ('is_active',)

admin.site.register(CourseBanner, CourseBannerAdmin)

class StudentScreenshotAdmin(BaseAdmin):
    list_display = ('name', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    search_fields = ('name',)
    list_filter = ('is_active',)
    ordering = ('order',)

admin.site.register(StudentScreenshot, StudentScreenshotAdmin)

# Restrict access to the admin site to superusers only
admin.site.has_permission = lambda request: request.user.is_active and request.user.is_superuser
