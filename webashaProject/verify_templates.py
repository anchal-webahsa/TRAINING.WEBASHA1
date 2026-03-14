import os
import django
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from django.template.loader import render_to_string
from django.test import RequestFactory
from webashaApp.models import BootcampCategory
from django.db.models import Count
from django.urls import resolve

def verify_render():
    try:
        factory = RequestFactory()
        # Mock a request to the categories page
        request = factory.get('/bootcamps/categories/')
        
        # Mock user and resolver_match for the base.html logic
        class MockUser:
            is_authenticated = True
            username = 'admin'
        request.user = MockUser()
        request.resolver_match = resolve('/bootcamps/categories/')
        
        categories = BootcampCategory.objects.all().annotate(
            bootcamp_count=Count('bootcamps')
        ).order_by('name')
        
        context = {
            'categories': categories,
            'request': request,
        }
        
        html = render_to_string('webashaApp/bootcamp_categories.html', context, request=request)
        print("SUCCESS: Template rendered successfully.")
        # Debug: print all h3 tags
        import re
        h3_tags = re.findall(r'<h3.*?>.*?</h3>', html, re.DOTALL)
        print(f"Found {len(h3_tags)} h3 tags:")
        for tag in h3_tags:
            print(f"  {tag.strip()}")
        
        # Check for some expected content
        if 'Bootcamp Category' in html and 'Add new category' in html:
            print("SUCCESS: Expected content found in rendered HTML.")
        else:
            print("WARNING: Expected content not found in rendered HTML.")
            
    except Exception as e:
        print(f"FAILED: Render failed with error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    verify_render()
