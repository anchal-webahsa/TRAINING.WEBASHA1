import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import BootcampCategory, Bootcamp
from django.utils.text import slugify
from django.contrib.auth.models import User

# Ensure admin user exists
admin_user = User.objects.filter(is_superuser=True).first()
if not admin_user:
    admin_user = User.objects.create_superuser('admin', 'admin@example.com', 'admin')

# Define categories from user request image
cats = ['Software Engineering', 'Web Development', 'Data Science and Analytics', 'Information Security', 'UX/UI Design Bootcamp']

for name in cats:
    cat, _ = BootcampCategory.objects.get_or_create(name=name, defaults={'slug': slugify(name)})
    # Create 1 bootcamp for each category as seen in the image (Each card had "Total bootcamps 1")
    Bootcamp.objects.get_or_create(title=f'{name} Bootcamp', defaults={'category': cat, 'owner': admin_user})

print('Mock data updated successfully')
