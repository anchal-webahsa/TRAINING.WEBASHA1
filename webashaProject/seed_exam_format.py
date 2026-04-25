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
    
    exam.exam_duration = "180 Minutes"
    exam.number_of_questions = "10-12"
    exam.exam_fee = "Varies country to country (20000 + 18% GST for India)"
    exam.validity = "3 years"
    exam.exam_format_table = "Lab based"
    exam.passing_score = "210 out of 300"
    exam.eligibility = "None"
    exam.exam_languages = "English, Japanese, Korean, and Simplified Chinese"
    
    exam.save()
    print("Exam format table fields seeded successfully!")
else:
    print("No exam found to seed.")
