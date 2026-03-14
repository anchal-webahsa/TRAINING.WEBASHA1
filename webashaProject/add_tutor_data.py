import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import TutorCategory, TutorSubject

# Clear existing
TutorCategory.objects.all().delete()
TutorSubject.objects.all().delete()

# Add Categories
categories = [
    "Accounting", "Bookkeeping", "Photoshop", "Adobe Illustrator", 
    "Global Economics", "Drawing", "Communication skills", "Leadership", 
    "Adobe Premiere Pro"
]
for name in categories:
    TutorCategory.objects.create(name=name, status='active')

# Add Subjects
subjects = [
    "Finance and Accounting", "Graphic Design", "Business", "Video Editing"
]
for name in subjects:
    TutorSubject.objects.create(name=name, status='active')

print("Successfully added dummy data for Tutor Booking.")
