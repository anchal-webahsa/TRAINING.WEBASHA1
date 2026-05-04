import os
import subprocess

models_path = r"d:\1.webashaProject\webashaProject\webashaApp\models.py"

model_content = """
class Exam(models.Model):
    exam_code = models.CharField(max_length=50, unique=True, help_text="e.g. EX200")
    title = models.CharField(max_length=200, help_text="e.g. Red Hat Certified System Administrator")
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="e.g. 400.00")
    description = models.TextField(blank=True, help_text="Short description of the exam")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.exam_code} - {self.title}"
"""

with open(models_path, "a", encoding="utf-8") as f:
    f.write("\n" + model_content)

print("Exam model appended to models.py successfully.")
