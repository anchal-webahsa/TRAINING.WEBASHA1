from django.contrib import admin
from .models import (
    Course, 
    CourseCategory, 
    Coupon, 
    Profile, 
    Testimonial, 
    VideoReview,
    Instructor,
    HomeSection,
    AlumniProfile
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
    list_display = ('title', 'status', 'price', 'created_at')
    search_fields = ('title',)
    list_filter = ('status',)

    class Media:
        js = ('admin/js/course_admin.js',)


class CourseCategoryAdmin(BaseAdmin):
    list_display = ('name', 'slug', 'created_at')
    search_fields = ('name',)


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

# Restrict access to the admin site to superusers only
admin.site.has_permission = lambda request: request.user.is_active and request.user.is_superuser
