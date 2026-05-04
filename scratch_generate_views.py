import os

models_data = [
    {
        "model": "Instructor",
        "form": "InstructorForm",
        "search_field": "full_name__icontains",
        "name_plural": "instructors",
        "name_singular": "instructor"
    },
    {
        "model": "PlacedStudent",
        "form": "PlacedStudentForm",
        "search_field": "name__icontains",
        "name_plural": "placed_students",
        "name_singular": "placed_student"
    },
    {
        "model": "PlacementStat",
        "form": "PlacementStatForm",
        "search_field": "total_placements__icontains",
        "name_plural": "placement_stats",
        "name_singular": "placement_stat"
    },
    {
        "model": "Profile",
        "form": "ProfileForm",
        "search_field": "user__username__icontains",
        "name_plural": "profiles",
        "name_singular": "profile"
    },
    {
        "model": "StudentCertificate",
        "form": "StudentCertificateForm",
        "search_field": "student_name__icontains",
        "name_plural": "student_certificates",
        "name_singular": "student_certificate"
    },
    {
        "model": "StudentScreenshot",
        "form": "StudentScreenshotForm",
        "search_field": "name__icontains",
        "name_plural": "student_screenshots",
        "name_singular": "student_screenshot"
    },
    {
        "model": "Testimonial",
        "form": "TestimonialForm",
        "search_field": "full_name__icontains",
        "name_plural": "testimonials",
        "name_singular": "testimonial"
    },
    {
        "model": "UpcomingBatch",
        "form": "UpcomingBatchForm",
        "search_field": "batch_form__icontains",
        "name_plural": "upcoming_batches",
        "name_singular": "upcoming_batch"
    },
    {
        "model": "VideoReview",
        "form": "VideoReviewForm",
        "search_field": "title__icontains",
        "name_plural": "video_reviews",
        "name_singular": "video_review"
    }
]

template = """
@login_required
def manage_{plural}(request):
    query = request.GET.get('q', '')
    if query:
        items = {model}.objects.filter({search}=query)
    else:
        items = {model}.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_{plural}.html', {{
        'page_obj': page_obj, 'query': query
    }})

@login_required
def add_{singular}(request):
    if request.method == 'POST':
        form = {form}(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, '{model} added successfully.')
            return redirect('manage_{plural}')
    else:
        form = {form}()
    return render(request, 'webashaApp/add_{singular}.html', {{'form': form}})
"""

out = ""
for group in models_data:
    out += template.format(
        plural=group['name_plural'],
        singular=group['name_singular'],
        model=group['model'],
        form=group['form'],
        search=group['search_field']
    )

with open(r"d:\1.webashaProject\webashaProject\webashaApp\views.py", "a") as f:
    f.write("\n\n# --- GENERATED VIEWS FOR 9 BRAND NEW CRM COMPONENTS ---\n")
    f.write(out)
    
print("Views generated and attached correctly.")
