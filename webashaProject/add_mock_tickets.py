import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import Ticket
from django.contrib.auth.models import User

def create_mock_tickets():
    # Get or create a default user for mock data
    user, _ = User.objects.get_or_create(username='admin')
    
    # Check if a different user exists to make it more realistic
    other_user = User.objects.exclude(username='admin').first()
    if not other_user:
        other_user = user

    tickets = [
        {
            'subject': "Can't Install",
            'user': user,
            'status': 'new',
            'priority': 'high',
            'category': 'Technical Support',
            'message': 'Having trouble with the installation process.'
        },
        {
            'subject': 'Error 500 - Mass Invoice',
            'user': user,
            'status': 'solved',
            'priority': 'urgent',
            'category': 'Technical Support',
            'message': 'Getting 500 error when generating invoices.'
        },
        {
            'subject': 'Problem with main page',
            'user': user,
            'status': 'pending',
            'priority': 'medium',
            'category': 'Technical Support',
            'message': 'The main page layout is broken on mobile.'
        },
        {
            'subject': 'NEED UPDATE',
            'user': other_user,
            'status': 'pending',
            'priority': 'medium',
            'category': 'General Query',
            'message': 'Please update the system to version 2.0.'
        }
    ]

    for t in tickets:
        Ticket.objects.get_or_create(
            subject=t['subject'],
            user=t['user'],
            defaults=t
        )
    print("Mock tickets created successfully!")

if __name__ == '__main__':
    create_mock_tickets()
