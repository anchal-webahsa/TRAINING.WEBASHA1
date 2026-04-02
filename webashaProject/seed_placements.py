import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webashaProject.settings')
django.setup()

from webashaApp.models import PlacedStudent, PlacementStat, HiringPartner

def seed_data():
    # 1. Placement Stats
    if not PlacementStat.objects.exists():
        PlacementStat.objects.create(
            total_placements="350+",
            average_package="8.9 LPA",
            hiring_partners="120+"
        )
        print("Created PlacementStat")

    # 2. Placed Students
    if not PlacedStudent.objects.exists():
        students_data = [
            { "name": "Abhishek Jadhav", "course": "Cloud",      "role": "Cloud Engineer",       "company": "Infosys",   "package": "8.5",  "month_year": "Apr 2024" },
            { "name": "Anjali Deshmukh", "course": "Security",   "role": "Security Analyst",     "company": "TCS",       "package": "10.2", "month_year": "Mar 2024" },
            { "name": "Rohit Patil",     "course": "DevOps",     "role": "DevOps Engineer",      "company": "Accenture", "package": "7.8",  "month_year": "Feb 2024" },
            { "name": "Priya Kulkarni", "course": "Networking",  "role": "Network Engineer",     "company": "Cognizant", "package": "6.5",  "month_year": "Jan 2024" },
        ]
        for i, s in enumerate(students_data):
            PlacedStudent.objects.create(
                name=s['name'],
                course=s['course'],
                role=s['role'],
                company=s['company'],
                package=s['package'],
                month_year=s['month_year'],
                order=i
            )
        print(f"Created {len(students_data)} PlacedStudents")

    # 3. Hiring Partners (Note: Logos will be empty or placeholders)
    if not HiringPartner.objects.exists():
        partners = ["Infosys", "TCS", "Accenture", "Cognizant", "Wipro"]
        for i, p in enumerate(partners):
            HiringPartner.objects.create(name=p, order=i)
        print(f"Created {len(partners)} HiringPartner placeholders")

if __name__ == "__main__":
    seed_data()
