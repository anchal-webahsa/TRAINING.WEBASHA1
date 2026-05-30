from django.urls import path
from . import views

urlpatterns = [
    path('accounts/register/', views.register, name='register'),
    path("", views.dashboard, name="dashboard"),
    path("search/", views.global_search, name="global_search"),
    path("add-course/", views.add_course, name="add_course"),
    path("update-course/", views.update_course, name="update_course"),
    path("delete-course/", views.delete_course, name="delete_course"),
    path("courses/", views.manage_courses, name="manage_courses"),
    path("courses/category/<slug:slug>/", views.courses_by_category, name="courses_by_category"),
    path("courses/add/", views.course_create, name="course_create"),
    path("courses/<int:pk>/edit/", views.course_edit, name="course_edit"),
    path("courses/<int:pk>/", views.course_detail, name="course_detail"),
    path("courses/<int:pk>/delete/", views.course_delete, name="course_delete"),
    # course bundle management
    path("bundles/manage/", views.manage_bundles, name="manage_bundles"),
    path("bundles/add/", views.add_bundle, name="add_bundle"),
    # coupon management
    path("coupons/add/", views.coupon_create, name="coupon_create"),
    path("coupons/<int:pk>/edit/", views.coupon_edit, name="coupon_edit"),
    path("coupons/<int:pk>/delete/", views.coupon_delete, name="coupon_delete"),
    path("coupons/<int:pk>/toggle/", views.coupon_toggle, name="coupon_toggle"),
    # bootcamp management
    path("bootcamps/manage/", views.manage_bootcamps, name="manage_bootcamps"),
    path("bootcamps/add/", views.add_bootcamp, name="add_bootcamp"),
    path("bootcamps/purchase-history/", views.purchase_history, name="purchase_history"),
    path("bootcamps/categories/", views.bootcamp_categories, name="bootcamp_categories"),
    path("bootcamps/categories/<int:pk>/edit/", views.bootcamp_category_edit, name="bootcamp_category_edit"),
    path("bootcamps/categories/<int:pk>/delete/", views.bootcamp_category_delete, name="bootcamp_category_delete"),
    path("tutor-booking/subjects/", views.tutor_subjects, name="tutor_subjects"),
    path("tutor-booking/subjects/<int:pk>/edit/", views.tutor_subject_edit, name="tutor_subject_edit"),
    path("tutor-booking/subjects/<int:pk>/delete/", views.tutor_subject_delete, name="tutor_subject_delete"),
    path("tutor-booking/categories/", views.tutor_categories, name="tutor_categories"),
    path("tutor-booking/categories/<int:pk>/edit/", views.tutor_category_edit, name="tutor_category_edit"),
    path("tutor-booking/categories/<int:pk>/delete/", views.tutor_category_delete, name="tutor_category_delete"),
    # ebook management
    path("ebooks/", views.manage_ebooks, name="manage_ebooks"),
    path("ebooks/add/", views.add_ebook, name="add_ebook"),
    path("ebooks/<int:pk>/edit/", views.edit_ebook, name="edit_ebook"),
    path("ebooks/<int:pk>/delete/", views.delete_ebook, name="delete_ebook"),
    path("ebooks/categories/", views.ebook_categories, name="ebook_categories"),
    path("ebooks/categories/<int:pk>/edit/", views.ebook_category_edit, name="ebook_category_edit"),
    path("ebooks/categories/<int:pk>/delete/", views.ebook_category_delete, name="ebook_category_delete"),
    path("ebooks/admin-revenue/", views.ebook_admin_revenue, name="ebook_admin_revenue"),
    path("ebooks/instructor-revenue/", views.ebook_instructor_revenue, name="ebook_instructor_revenue"),
    # user management
    path("users/", views.manage_users, name="manage_users"),
    path("groups/", views.manage_groups, name="manage_groups"),
    path("groups/add/", views.add_group, name="add_group"),
    path("groups/<int:pk>/edit/", views.edit_group, name="edit_group"),
    path("users/admins/", views.manage_admins, name="manage_admins"),
    path('users/admins/add/', views.add_admin, name='add_admin'),
    path('users/instructors/', views.manage_instructors, name='manage_instructors'),
    path('users/instructors/add/', views.add_instructor, name='add_instructor'),
    path('users/instructors/payout/', views.instructor_payout, name='instructor_payout'),
    path('users/instructors/settings/', views.instructor_settings, name='instructor_settings'),
    path('users/instructors/applications/', views.instructor_applications, name='instructor_applications'),
    path('users/students/', views.manage_students, name='manage_students'),
    path('users/students/add/', views.add_student, name='add_student'),
    path('newsletter/', views.manage_newsletters, name='manage_newsletters'),
    path('newsletter/subscribers/', views.subscribed_users, name='subscribed_users'),
    path('enrollment/history/', views.enrollment_history, name='enrollment_history'),
    path('enrollment/add/', views.enroll_student, name='enroll_student'),
    path('payments/offline/', views.offline_payments, name='offline_payments'),
    # messaging system
    path('messages/', views.messages_view, name='messages_view'),
    path('messages/<int:user_id>/', views.messages_view, name='messages_view_with_user'),
    path('messages/send/', views.send_message, name='send_message'),
    path('contacts/', views.contacts_view, name='contacts_view'),
    path('contacts/<int:pk>/delete/', views.delete_contact, name='delete_contact'),
    path('contacts/reply/', views.reply_contact, name='reply_contact'),
    path('support/tickets/', views.tickets_view, name='tickets_view'),
    path('support/tickets/add/', views.add_ticket_view, name='add_ticket_view'),
    path('support/tickets/<int:pk>/update/', views.update_ticket, name='update_ticket'),
    path('support/tickets/<int:pk>/delete/', views.delete_ticket, name='delete_ticket'),
    # FAQ management
    path('support/faq/', views.faq_view, name='faq_view'),
    path('support/faq/add/', views.add_faq, name='add_faq'),
    path('support/faq/<int:pk>/edit/', views.edit_faq, name='edit_faq'),
    path('support/faq/<int:pk>/delete/', views.delete_faq, name='delete_faq'),
    # placements API
    path('api/placements/', views.get_placements, name='get_placements'),
    
    # Custom Alumni Profiles
    path('webashaApp/alumniprofile/', views.manage_alumni_profiles, name='manage_alumni_profiles'),
    path('webashaApp/alumniprofile/add/', views.add_alumni_profile, name='add_alumni_profile'),
    
    # Custom Coupons
    path('webashaApp/coupon/', views.manage_coupons, name='manage_coupons'),
    path('webashaApp/coupon/add/', views.add_coupon, name='add_coupon'),
    
    # Custom Course Banners
    path('webashaApp/coursebanner/', views.manage_course_banners, name='manage_course_banners'),
    path('webashaApp/coursebanner/add/', views.add_course_banner, name='add_course_banner'),
    path('webashaApp/coursebanner/<int:pk>/edit/', views.edit_course_banner, name='edit_course_banner'),
    
    # Custom Course Subcategories
    path('webashaApp/coursesubcategory/', views.manage_course_subcategories, name='manage_course_subcategories'),
    path('webashaApp/coursesubcategory/add/', views.add_course_subcategory, name='add_course_subcategory'),
    
    # Custom Course Categories
    path('webashaApp/coursecategory/', views.manage_course_categories, name='manage_course_categories'),
    path('webashaApp/coursecategory/add/', views.add_course_category, name='add_course_category'),
    
    # Custom Courses
    path('webashaApp/course/', views.manage_courses, name='manage_courses'),
    path('webashaApp/course/add/', views.add_course, name='add_course'),
    
    # Custom Enquiries
    path('webashaApp/enquiry/', views.manage_enquiries, name='manage_enquiries'),
    path('webashaApp/enquiry/add/', views.add_enquiry, name='add_enquiry'),
    path('webashaApp/enquiry/<int:pk>/delete/', views.delete_enquiry, name='delete_enquiry'),
    
    # Custom Exam Voucher Offers
    path('webashaApp/examvoucheroffer/', views.manage_vouchers, name='manage_vouchers'),
    path('webashaApp/examvoucheroffer/add/', views.add_voucher, name='add_voucher'),

    # Custom Exams
    path('webashaApp/exams/', views.manage_exams, name='manage_exams'),
    path('webashaApp/exams/add/', views.add_exam, name='add_exam'),
    path('webashaApp/exams/edit/<int:pk>/', views.add_exam, name='edit_exam'),
    
    # Custom Gallery Images
    path('webashaApp/galleryimage/', views.manage_gallery_images, name='manage_gallery_images'),
    path('webashaApp/galleryimage/add/', views.add_gallery_image, name='add_gallery_image'),
    path('webashaApp/galleryimage/<int:pk>/delete/', views.delete_gallery_image, name='delete_gallery_image'),
    
    # Custom Hiring Partners
    path('webashaApp/hiringpartner/', views.manage_hiring_partners, name='manage_hiring_partners'),
    path('webashaApp/hiringpartner/add/', views.add_hiring_partner, name='add_hiring_partner'),
    path('webashaApp/hiringpartner/<int:pk>/delete/', views.delete_hiring_partner, name='delete_hiring_partner'),
    
    # Custom Home Sections
    path('webashaApp/homesection/', views.manage_home_sections, name='manage_home_sections'),
    path('webashaApp/homesection/add/', views.add_home_section, name='add_home_section'),
    
    # Custom Standalone Related Courses
    path('webashaApp/related-courses/', views.manage_standalone_related_courses, name='manage_standalone_related_courses'),
    path('webashaApp/related-courses/add/', views.add_standalone_related_course, name='add_standalone_related_course'),
    
    # Custom Exam Certificates list/upload mapping
    # path('manage/exams/<int:exam_id>/certificates/', views.manage_exam_certificates, name='manage_exam_certificates'),
]


# --- GENERATED URIs FOR 9 BRAND NEW CRM COMPONENTS ---
urlpatterns += [
    path('manage/instructors/', views.manage_instructors, name='manage_instructors'),
    path('manage/instructors/add/', views.add_instructor, name='add_instructor'),
    path('manage/instructors/<int:pk>/delete/', views.delete_instructor, name='delete_instructor'),
    path('manage/placed_students/', views.manage_placed_students, name='manage_placed_students'),
    path('manage/placed_students/add/', views.add_placed_student, name='add_placed_student'),
    path('manage/placed_students/<int:pk>/delete/', views.delete_placed_student, name='delete_placed_student'),
    path('manage/placement_stats/', views.manage_placement_stats, name='manage_placement_stats'),
    path('manage/placement_stats/add/', views.add_placement_stat, name='add_placement_stat'),
    path('manage/profiles/', views.manage_profiles, name='manage_profiles'),
    path('manage/profiles/add/', views.add_profile, name='add_profile'),
    path('manage/student_certificates/', views.manage_student_certificates, name='manage_student_certificates'),
    path('manage/student_certificates/add/', views.add_student_certificate, name='add_student_certificate'),
    path('manage/student_screenshots/', views.manage_student_screenshots, name='manage_student_screenshots'),
    path('manage/student_screenshots/add/', views.add_student_screenshot, name='add_student_screenshot'),
    path('manage/testimonials/', views.manage_testimonials, name='manage_testimonials'),
    path('manage/testimonials/add/', views.add_testimonial, name='add_testimonial'),
    path('manage/testimonials/<int:pk>/edit/', views.edit_testimonial, name='edit_testimonial'),
    path('manage/testimonials/<int:pk>/delete/', views.delete_testimonial, name='delete_testimonial'),
    path('manage/upcoming_batches/', views.manage_upcoming_batches, name='manage_upcoming_batches'),
    path('manage/upcoming_batches/add/', views.add_upcoming_batch, name='add_upcoming_batch'),
    path('manage/video_reviews/', views.manage_video_reviews, name='manage_video_reviews'),
    path('manage/video_reviews/add/', views.add_video_review, name='add_video_review'),
    
    # Custom Pages Management
    path('manage/pages/', views.manage_pages, name='manage_pages'),
    path('manage/pages/add/', views.add_page, name='add_page'),
    path('manage/pages/<int:pk>/edit/', views.edit_page, name='edit_page'),
    path('manage/pages/<int:pk>/delete/', views.delete_page, name='delete_page'),

    # Live Chat Management
    path('manage/live-chat/', views.manage_live_chat, name='manage_live_chat'),
    path('manage/live-chat/<int:pk>/delete/', views.delete_live_chat, name='delete_live_chat'),
    path('manage/live-chat/<int:pk>/mark-read/', views.mark_live_chat_read, name='mark_live_chat_read'),
    
    # Frontend Custom Pages
    path('p/<slug:slug>/', views.serve_page, name='serve_page'),
]
