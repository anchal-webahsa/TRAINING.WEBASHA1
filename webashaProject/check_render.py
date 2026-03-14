import os
import django
from django.conf import settings
from django.template.loader import render_to_string
from django.test import RequestFactory
from django.db.models import Count
from django.urls import resolve

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import BootcampCategory

def check_rendering():
    factory = RequestFactory()
    request = factory.get('/bootcamps/categories/')
    
    class MockUser:
        is_authenticated = True
        username = 'admin'
    request.user = MockUser()
    request.resolver_match = resolve('/bootcamps/categories/')
    
    categories = BootcampCategory.objects.all().annotate(bootcamp_count=Count('bootcamps')).order_by('name')
    html = render_to_string('webashaApp/bootcamp_categories.html', {'categories': categories}, request=request)
    
    print(f"Total categories: {len(categories)}")
    if len(categories) > 0:
        first_cat = categories[0].name
        print(f"First category name: {first_cat}")
        print(f"Is '{first_cat}' in HTML? {'Yes' if first_cat in html else 'No'}")
    
    print(f"Is raw '{{{{ cat.name }}}}' in HTML? {'Yes' if '{{ cat.name }}' in html else 'No'}")
    print(f"Is 'display: none' still in modal div? {'Yes' if 'display: none; position: fixed' in html else 'No'}")
    
    # Check for Edit link
    if len(categories) > 0:
        first_id = categories[0].id
        edit_str = f"openEditModal('{first_id}',"
        print(f"Is Edit link for ID {first_id} in HTML? {'Yes' if edit_str in html else 'No'}")
        
        # Check if the name is escaped correctly in the onclick
        first_name_escaped = categories[0].name.replace("'", "\\u0027") 
        # escapejs uses unicode escapes for some chars
        print(f"Snippet of card area:")
        # Find where the card starts
        idx = html.find(f"onclick=\"openEditModal('{first_id}'")
        if idx != -1:
            print(html[idx:idx+200])
        else:
            print("Could not find Edit modal trigger!")

if __name__ == "__main__":
    check_rendering()
