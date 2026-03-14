import os
import django
from django.template import loader, Context
from django.test import RequestFactory

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

def debug_render(template_name):
    print(f"--- Debugging {template_name} ---")
    try:
        factory = RequestFactory()
        request = factory.get('/')
        # Mocking resolver_match
        from django.urls import resolve
        try:
            request.resolver_match = resolve('/')
        except:
            request.resolver_match = None
            
        t = loader.get_template(template_name)
        c = {'request': request, 'subjects': [], 'categories': []}
        rendered = t.render(c)
        print("Render Successful!")
    except Exception as e:
        print(f"Error rendering {template_name}:")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    debug_render('webashaApp/base.html')
    debug_render('webashaApp/tutor_subjects.html')
