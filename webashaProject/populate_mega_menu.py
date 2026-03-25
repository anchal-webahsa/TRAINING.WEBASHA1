import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import CourseCategory, CourseSubCategory, Course

def populate():
    # Category
    redhat_cat, _ = CourseCategory.objects.get_or_create(
        name="Red Hat", 
        slug="red-hat",
        defaults={'order': 1}
    )
    
    # SubCategories
    core_track, _ = CourseSubCategory.objects.get_or_create(
        category=redhat_cat,
        name="Core System Administration Track",
        defaults={'order': 1}
    )
    
    openshift_track, _ = CourseSubCategory.objects.get_or_create(
        category=redhat_cat,
        name="OpenShift Track",
        defaults={'order': 2}
    )

    # Courses
    Course.objects.get_or_create(
        slug="rhcsa1",
        defaults={
            "title": "RHCSA I",
            "course_code": "RH124v10",
            "subcategory": core_track,
            "menu_label": "best_seller",
            "short_description": "Red Hat Certified System Administrator (RHCSA) I",
            "status": "active"
        }
    )

    Course.objects.get_or_create(
        slug="rhcsa2",
        defaults={
            "title": "RHCSA II",
            "course_code": "RH134v10",
            "subcategory": core_track,
            "menu_label": "best_seller",
            "short_description": "Red Hat Certified System Administrator (RHCSA) II",
            "status": "active"
        }
    )

    Course.objects.get_or_create(
        slug="do188",
        defaults={
            "title": "DO188",
            "course_code": "EX188",
            "subcategory": openshift_track,
            "menu_label": "none",
            "short_description": "Introduction to Containers with Podman",
            "status": "active"
        }
    )

    print("Mega Menu test data populated successfully!")

if __name__ == '__main__':
    populate()
