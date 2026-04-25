import sys

path = r'd:\1.webashaProject\webashaProject\webashaApp\models.py'
with open(path, 'r') as f:
    content = f.read()

new_model = """

class ExamCertificate(models.Model):
    exam = models.ForeignKey(Exam, related_name='certificates', on_delete=models.CASCADE)
    student_name = models.CharField(max_length=255, blank=True)
    image = models.ImageField(upload_to="exams/certificates/", help_text="Certificate image")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.exam.exam_code} Certificate - {self.student_name}"
"""

if "class ExamCertificate" not in content:
    with open(path, 'a') as f:
        f.write(new_model)
    print("Successfully added ExamCertificate to models.py")
else:
    print("ExamCertificate already exists")
