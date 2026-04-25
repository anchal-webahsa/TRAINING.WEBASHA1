import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "webashaProject.settings")
django.setup()

from webashaApp.models import Exam, ExamCertificate
from django.core.files import File

# Find the EX432 exam (using title or code)
exams = Exam.objects.filter(exam_code__icontains='tdh67')
if not exams.exists():
    exams = Exam.objects.all()

if exams.exists():
    exam = exams.first()
    
    # Update the overview text the user requested
    overview_text = """<h4 style="text-align:center; font-size: 20px; color: #333; margin-bottom:15px;">EX432 | Red Hat Certified Specialist in OpenShift Advanced Cluster Management Exam</h4>
<p style="font-size:14px; text-align:justify;">WebAsha Technologies has been a trusted Red Hat Authorized Training and Certification Exam Partner since 2014. With extensive experience in delivering 1000+ Red Hat certification exams and maintaining a remarkable 99% first-attempt success rate, we focus on outcome-driven, exam-oriented training that delivers measurable results.</p>
<p style="font-size:14px; text-align:justify;">Our structured and industry-aligned curriculum is specifically designed to help professionals prepare confidently for the EX432 – Red Hat Certified Specialist in OpenShift Advanced Cluster Management exam. Through hands-on labs, guided practice, and real-world use cases, learners gain the skills required to manage and govern OpenShift clusters at enterprise scale.</p>
<p style="font-size:14px; text-align:justify;">We offer specialized training for EX432 | Red Hat Certified Specialist in OpenShift Advanced Cluster Management, tailored for platform engineers, OpenShift administrators, DevOps professionals, and cloud engineers responsible for managing multi-cluster Kubernetes environments. The program emphasizes real-world scenarios such as multi-cluster lifecycle management, policy-based governance, application deployment across clusters, and GitOps-driven automation.</p>
<p style="font-size:14px; text-align:justify;">All training sessions are conducted by industry experts with over 10 years of hands-on experience in Kubernetes, OpenShift, GitOps, DevOps, and enterprise platform engineering. This ensures participants not only clear the EX432 certification exam with confidence but also acquire practical, job-ready skills required to operate large-scale OpenShift environments in hybrid and multi-cloud enterprises.</p>"""
    exam.overview_html = overview_text
    exam.save()
    
    # Delete old certificates
    ExamCertificate.objects.filter(exam=exam).delete()
    
    # We will grab any existing image from media folder to use as mock certificate, or the exam image
    mock_image_path = exam.image.path if exam.image else None
    
    if mock_image_path and os.path.exists(mock_image_path):
        for i in range(1, 5):
            cert = ExamCertificate(exam=exam, order=i)
            # Reusing the existing image file as a mock certificate
            with open(mock_image_path, 'rb') as f:
                cert.image.save(f'mock_cert_{i}.jpg', File(f), save=True)
            print(f"Created certificate {i}")

print("Update complete!")
