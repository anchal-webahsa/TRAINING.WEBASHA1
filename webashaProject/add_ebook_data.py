import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import EbookCategory, Ebook

def add_dummy_data():
    categories = [
        "Education",
        "Freelancing & Outsourcing",
        "Programming Language",
        "Science Fiction & Fantasy"
    ]
    
    cat_objs = []
    for cat_name in categories:
        cat, created = EbookCategory.objects.get_or_create(name=cat_name)
        cat_objs.append(cat)
        print(f"Category: {cat_name} {'created' if created else 'already exists'}")

    ebooks = [
        {
            "title": "A Practical Guide for Online Educators",
            "author_name": "James Marlyati",
            "author_email": "instructor@example.com",
            "category": cat_objs[0],
            "publication": "NextGen Learning Press",
            "price": 48.20,
        },
        {
            "title": "Modern Strategies for Digital Classrooms",
            "author_name": "James Marlyati",
            "author_email": "instructor@example.com",
            "category": cat_objs[0],
            "publication": "EduSphere Publishing",
            "price": 45.00,
        },
        {
            "title": "Learning That Sticks: Strategies for Lasting Impact",
            "author_name": "John Doe",
            "author_email": "admin@example.com",
            "category": cat_objs[1],
            "publication": "NextGen Learning Publications",
            "price": 42.10,
        },
        {
            "title": "Engage & Educate: The Art of Online Instruction",
            "author_name": "John Doe",
            "author_email": "admin@example.com",
            "category": cat_objs[2],
            "publication": "InsightEd Publishing",
            "price": 40.00,
        }
    ]

    for ebook_data in ebooks:
        ebook, created = Ebook.objects.get_or_create(
            title=ebook_data["title"],
            defaults=ebook_data
        )
        print(f"Ebook: {ebook_data['title']} {'created' if created else 'already exists'}")

if __name__ == "__main__":
    add_dummy_data()
