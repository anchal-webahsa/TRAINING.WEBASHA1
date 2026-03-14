import os
import django
from django.conf import settings
from django.template import Template

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

out_path = 'final_error_report.txt'
with open(out_path, 'w', encoding='utf-8') as report:
    template_dir = os.path.join('webashaApp', 'templates', 'webashaApp')
    for root, dirs, files in os.walk(template_dir):
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                try:
                    Template(content)
                except Exception as e:
                    report.write(f"PATH: {path}\n")
                    report.write(f"ERROR: {str(e)}\n\n")

print(f"Report written to {out_path}")
