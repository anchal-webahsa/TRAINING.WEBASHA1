import os
import django
from django.template import loader
from django.test import RequestFactory
import traceback

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

def get_traceback(template_name):
    try:
        factory = RequestFactory()
        request = factory.get('/')
        from django.urls import resolve
        try:
            request.resolver_match = resolve('/')
        except:
            request.resolver_match = None
            
        t = loader.get_template(template_name)
        c = {'request': request, 'subjects': [], 'categories': []}
        t.render(c)
        return "Success"
    except Exception:
        return traceback.format_exc()

if __name__ == "__main__":
    error_msg = get_traceback('webashaApp/tutor_subjects.html')
    with open('error_traceback.txt', 'w', encoding='utf-8') as f:
        f.write(error_msg)
    print("Traceback written to error_traceback.txt")
