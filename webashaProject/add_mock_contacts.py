import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import Contact

def create_mock_contacts():
    contacts = [
        {
            'name': 'Kevin Wilder',
            'email': 'hytyqab@mailinator.com',
            'phone': '+1 (889) 859-5752',
            'address': 'Dolores est volupta',
            'message': 'Porro exercitationem',
            'is_registered': False
        },
        {
            'name': 'Emily Salazar',
            'email': 'xuly@mailinator.com',
            'phone': '+1 (841) 634-4168',
            'address': 'Omnis sed labore et',
            'message': 'Voluptas error in be',
            'is_registered': False
        }
    ]

    for c in contacts:
        Contact.objects.get_or_create(
            email=c['email'],
            defaults=c
        )
    print("Mock contacts created successfully!")

if __name__ == '__main__':
    create_mock_contacts()
