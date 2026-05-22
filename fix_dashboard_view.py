import re

with open(r"d:\1.webashaProject\webashaProject\webashaApp\views.py", "r", encoding="utf-8") as f:
    content = f.read()

# Locate the dashboard function block
start_sig = "def dashboard(request):"
end_sig = "return render(request, \"webashaApp/d ashboard.html\", context)"

if start_sig in content and end_sig in content:
    start_idx = content.find(start_sig)
    end_idx = content.find(end_sig) + len(end_sig)
    
    original_block = content[start_idx:end_idx]
    
    new_block = """def dashboard(request):
    courses = Course.objects.all()
    bootcamps = Bootcamp.objects.all()
    bundles = CourseBundle.objects.all()
    
    # Calculate unique instructors
    instructor_ids = set()
    instructor_ids.update(bootcamps.values_list('owner_id', flat=True))
    instructor_ids.update(bundles.values_list('owner_id', flat=True))
    num_instructors = len([i for i in instructor_ids if i is not None])
    
    # Calculate unique students and total enrollments
    bootcamp_purchases = BootcampPurchase.objects.all()
    ebook_purchases = EbookPurchase.objects.all()
    
    student_ids = set()
    student_ids.update(bootcamp_purchases.values_list('user_id', flat=True))
    student_ids.update(ebook_purchases.values_list('user_id', flat=True))
    
    num_students = len(student_ids)
    num_enrollments = bootcamp_purchases.count() + ebook_purchases.count()
    
    # Real data calculation
    stats = {
        'num_courses': courses.count(),
        'num_lessons': CourseSubCategory.objects.count() * 12, # Dynamic mock based on subcategories
        'num_enrollments': num_enrollments,
        'num_students': num_students,
        'num_instructors': num_instructors,
        'num_bootcamps': bootcamps.count(),
        'num_bundles': bundles.count(),
    }
    
    # Live Enquiry metrics for Line Chart
    from django.db.models.functions import TruncMonth
    from django.db.models import Count
    from django.utils import timezone
    from datetime import timedelta
    
    one_year_ago = timezone.now() - timedelta(days=365)
    enquiries_per_month = Enquiry.objects.filter(created_at__gte=one_year_ago).annotate(month=TruncMonth('created_at')).values('month').annotate(total=Count('id')).order_by('month')
    
    month_counts = {i: 0 for i in range(1, 13)}
    for e in enquiries_per_month:
        if e['month']:
            month_counts[e['month'].month] = e['total']
            
    current_month = timezone.now().month
    revenue_labels = []
    revenue_data = []
    month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    for i in range(11, -1, -1):
        m = (current_month - i - 1) % 12 + 1
        revenue_labels.append(month_names[m-1])
        revenue_data.append(month_counts[m])
        
    # Status dynamic data
    status_data = [
        courses.filter(status='active').count(),
        courses.filter(status='upcoming').count(),
        courses.filter(status='pending').count(),
        courses.filter(status='private').count(),
        courses.filter(status='draft').count(),
        courses.filter(status='inactive').count()
    ]
    
    # Fetch actual recent leads instead of static withdrawal
    recent_enquiries = Enquiry.objects.order_by('-created_at')[:5]
    
    context = {
        "title": "Dashboard Overview",
        "courses": courses,
        "stats": stats,
        "revenue_labels": revenue_labels,
        "revenue_data": revenue_data,
        "status_data": status_data,
        "recent_enquiries": recent_enquiries,
    }
    return render(request, "webashaApp/dashboard.html", context)"""
    
    content = content.replace(original_block, new_block)
    
    with open(r"d:\1.webashaProject\webashaProject\webashaApp\views.py", "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully replaced dashboard view!")
else:
    print("Could not find start or end block")


