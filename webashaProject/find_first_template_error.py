import os
import django
from django.conf import settings
from django.template import Template, TemplateSyntaxError

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

def find_first_error():
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
                    print(f"FAILED_FILE: {path}")
                    print(f"ERROR_MSG: {str(e)}")
                    return # Stop at first error
    print("SUCCESS: No errors found.")

if __name__ == "__main__":
    find_first_error()
