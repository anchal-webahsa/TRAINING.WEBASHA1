import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import Exam

try:
    exam = Exam.objects.get(exam_code='tdh67')
    exam.exam_code = 'EX432'
    exam.save()
    print("Fixed exam code from 'tdh67' to 'EX432' successfully.")
except Exam.DoesNotExist:
    # If not found case sensitive, try insensitive
    exam = Exam.objects.filter(exam_code__icontains='tdh').first()
    if exam:
        exam.exam_code = 'EX432'
        exam.save()
        print("Fixed exam code to 'EX432' successfully.")
    else:
        print("Could not find the exam. It might have already been modified.")

