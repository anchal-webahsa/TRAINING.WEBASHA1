import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "webashaProject.settings")
django.setup()

from webashaApp.models import Exam

# Find the EX432 exam
exams = Exam.objects.filter(title__icontains='EX432')
if not exams.exists():
    exams = Exam.objects.filter(exam_code__icontains='EX432')

if not exams.exists():
    exams = Exam.objects.all()

if exams.exists():
    exam = exams.first()
    
    exam.preparation_mode = "Classroom / Online"
    exam.mock_test_count = "5-10"
    exam.bundle_includes = "10-12 Questions & Answers"
    exam.free_updates = "90 days"
    exam.last_update_date = "Apr 10, 2026"
    exam.price = "315"
    exam.original_price = "500"
    
    exam.stat_customers_passed = "13+"
    exam.stat_average_score = "94%"
    exam.stat_similar_questions = "92%"
    
    # Enable the sections that were commented before
    # (Just in case they require these fields)
    
    exam.save()
    print("Exam bottom fields seeded successfully!")
else:
    print("No exam found to seed.")
