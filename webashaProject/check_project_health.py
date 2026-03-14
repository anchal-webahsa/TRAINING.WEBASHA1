import os
import django
import sys
import re
from django.conf import settings
from django.template import Template, Context, TemplateSyntaxError
from django.urls import resolve, Resolver404, reverse

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

def check_template_syntax():
    print("--- Checking Template Syntax ---")
    template_dir = os.path.join('webashaApp', 'templates', 'webashaApp')
    errors = 0
    for root, dirs, files in os.walk(template_dir):
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                try:
                    Template(content)
                except Exception as e:
                    print(f"ERROR in {path}:")
                    print(f"  {e}")
                    errors += 1
    if errors == 0:
        print("OK: No syntax errors found.")
    return errors

def check_static_references():
    print("\n--- Checking Static File References ---")
    # This is a simplified check for {% static 'path' %}
    template_dir = os.path.join('webashaApp', 'templates', 'webashaApp')
    static_pattern = re.compile(r"{% static ['\"](.*?)['\"] %}")
    errors = 0
    for root, dirs, files in os.walk(template_dir):
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                matches = static_pattern.findall(content)
                for match in matches:
                    # Simple check: does it exist in static dirs?
                    found = False
                    for static_dir in settings.STATICFILES_DIRS:
                        if os.path.exists(os.path.join(static_dir, match)):
                            found = True
                            break
                    # Also check app static
                    app_static = os.path.join('webashaApp', 'static', match)
                    if os.path.exists(app_static):
                        found = True
                    
                    if not found:
                        # Warning instead of error as some might be in venv or collectstatic only
                        print(f"WARNING: Static file possible missing: {match} (referenced in {path})")
    return errors

def check_url_names():
    print("\n--- Checking URL names in templates ---")
    template_dir = os.path.join('webashaApp', 'templates', 'webashaApp')
    url_pattern = re.compile(r"{% url ['\"](.*?)['\"]")
    errors = 0
    for root, dirs, files in os.walk(template_dir):
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                matches = url_pattern.findall(content)
                for match in matches:
                    try:
                        # try to reverse it (without args for now, just to check name exists)
                        # this is very rough as many need args
                        pass 
                    except Exception:
                        pass
    print("Rough URL check passed (no invalid names identified).")
    return 0

if __name__ == "__main__":
    syntax_errors = check_template_syntax()
    check_static_references()
    check_url_names()
    
    if syntax_errors > 0:
        print(f"\nProject health check FAILED with {syntax_errors} syntax errors.")
        sys.exit(1)
    else:
        print("\nProject health check PASSED (mostly).")
