import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import TutorSubject, TutorCategory

def verify_tutor_crud():
    print("Testing TutorSubject CRUD...")
    # Add
    s = TutorSubject.objects.create(name="History", status='active')
    print(f"Added subject: {s.name} (ID: {s.id})")
    
    # Edit
    s.name = "World History"
    s.save()
    s_updated = TutorSubject.objects.get(id=s.id)
    print(f"Updated subject: {s_updated.name}")
    if s_updated.name != "World History":
        raise Exception("Subject name not updated!")

    # Delete
    subject_id = s.id
    s.delete()
    if TutorSubject.objects.filter(id=subject_id).exists():
        raise Exception("Subject not deleted!")
    print("Subject deleted successfully.")

    print("\nTesting TutorCategory CRUD...")
    # Add
    c = TutorCategory.objects.create(name="Humanities", status='active')
    print(f"Added category: {c.name} (ID: {c.id})")
    
    # Edit
    c.name = "Liberal Arts"
    c.save()
    c_updated = TutorCategory.objects.get(id=c.id)
    print(f"Updated category: {c_updated.name}")
    if c_updated.name != "Liberal Arts":
        raise Exception("Category name not updated!")

    # Delete
    category_id = c.id
    c.delete()
    if TutorCategory.objects.filter(id=category_id).exists():
        raise Exception("Category not deleted!")
    print("Category deleted successfully.")

    print("\nAll CRUD operations verified successfully.")

if __name__ == "__main__":
    try:
        verify_tutor_crud()
    except Exception as e:
        print(f"Verification failed: {e}")
        exit(1)
