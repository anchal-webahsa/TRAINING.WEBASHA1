import os
import django
from django.conf import settings
from django.template import Template, Context, TemplateSyntaxError

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

def check_templates():
    template_dir = os.path.join('webashaApp', 'templates', 'webashaApp')
    errors = []
    for root, dirs, files in os.walk(template_dir):
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                try:
                    Template(content)
                except TemplateSyntaxError as e:
                    print(f"ERROR: {path} - {e}")
                    errors.append((path, str(e)))
                except Exception as e:
                    print(f"OTHER ERROR: {path} - {e}")
                    errors.append((path, str(e)))
    return errors

if __name__ == "__main__":
    errs = check_templates()
    if not errs:
        print("\nNo template syntax errors found!")
    else:
        print(f"\nFound {len(errs)} template syntax errors.")
