import os
import django
from django.conf import settings
from django.template import Template

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

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
                print(f"PATH:{path}")
                print(f"ERROR:{e}")
