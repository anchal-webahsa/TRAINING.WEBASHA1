from django.db import models
from django.db.models import Count
from django.shortcuts import render, get_object_or_404, redirect
from django.utils.text import slugify
from django.http import JsonResponse
from django.contrib.auth.decorators import user_passes_test, login_required
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import (
    Course, CourseBundle, Bootcamp, BootcampCategory, BootcampPurchase, 
    Coupon, TutorCategory, TutorSubject, EbookCategory, Ebook, 
    EbookPurchase, Profile, Contact, Ticket, FAQ, PlacedStudent, 
    PlacementStat, HiringPartner, AlumniProfile, CourseBanner,
    CourseSyllabus, CourseFAQ, Exam, UpcomingBatch, CourseSubCategory,
    CourseCategory, Enquiry, ExamVoucherOffer, GalleryImage, HiringPartner,
    HomeSection, StandaloneRelatedCourse, Instructor, Message,
    StudentCertificate, StudentScreenshot, Testimonial, VideoReview, ExamCertificate, CustomPage
)
from .forms import (
    CouponForm, AlumniProfileForm, CourseBannerForm,
    SyllabusFormSet, FAQFormSet, BatchFormSet, TrackToolFormSet, CourseSubCategoryForm,
    CourseCategoryForm, CourseForm, EnquiryForm, ExamVoucherOfferForm,
    GalleryImageForm, HiringPartnerForm, HomeSectionForm,
    StandaloneRelatedCourseForm, InstructorForm, PlacedStudentForm,
    PlacementStatForm, ProfileForm, StudentCertificateForm,
    StudentScreenshotForm, TestimonialForm, VideoReviewForm, UpcomingBatchForm, ExamForm,
    ExamFAQFormSet, ExamReviewFormSet, ExamPartnerLogoFormSet, ExamRelatedCourseFormSet,
    ExamWhyChooseUsFormSet, ExamAdBannerFormSet, ExamSidebarCarouselFormSet, ExamCertificateFormSet
)
from django.core.paginator import Paginator
from django.contrib import messages

@login_required
def global_search(request):
    query = request.GET.get('q', '').strip()
    results = {
        'courses': [],
        'enquiries': [],
        'pages': [],
        'query': query
    }
    
    if query:
        results['courses'] = Course.objects.filter(
            models.Q(title__icontains=query) | 
            models.Q(short_description__icontains=query)
        )[:10]
        
        results['enquiries'] = Enquiry.objects.filter(
            models.Q(name__icontains=query) | 
            models.Q(email__icontains=query) |
            models.Q(course_name__icontains=query)
        )[:10]
        
        results['pages'] = CustomPage.objects.filter(
            models.Q(title__icontains=query) | 
            models.Q(content__icontains=query)
        )[:10]
        
    return render(request, 'webashaApp/search_results.html', results)

def dashboard(request):
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
    return render(request, "webashaApp/dashboard.html", context)


@login_required
def add_course(request):
    if request.method == "POST":
        # allow simple AJAX create with only a title (use defaults for other fields)
        title = request.POST.get('title')
        if title:
            course = Course.objects.create(title=title)
            data = list(Course.objects.order_by('-created_at').values('id', 'title'))
            return JsonResponse({"courses": data})
        # fall back to form validation when more fields provided
        form = CourseForm(request.POST)
        if form.is_valid():
            form.save()
            data = list(Course.objects.order_by('-created_at').values('id', 'title'))
            return JsonResponse({"courses": data})
        return JsonResponse({"errors": form.errors}, status=400)
    return JsonResponse({"error": "Invalid request"}, status=400)


@login_required
def update_course(request):
    if request.method == "POST":
        try:
            cid = int(request.POST.get('id', -1))
        except (ValueError, TypeError):
            return JsonResponse({"error": "Invalid id"}, status=400)
        course = get_object_or_404(Course, pk=cid)
        # allow title-only updates via AJAX
        title = request.POST.get('title')
        if title:
            course.title = title
            course.save()
            data = list(Course.objects.order_by('-created_at').values('id', 'title'))
            return JsonResponse({"courses": data})
        # fall back to form-based full updates
        form = CourseForm(request.POST, instance=course)
        if form.is_valid():
            form.save()
            data = list(Course.objects.order_by('-created_at').values('id', 'title'))
            return JsonResponse({"courses": data})
        return JsonResponse({"errors": form.errors}, status=400)
    return JsonResponse({"error": "Invalid request"}, status=400)


@login_required
def delete_course(request):
    if request.method == "POST":
        try:
            cid = int(request.POST.get('id', -1))
        except (ValueError, TypeError):
            return JsonResponse({"error": "Invalid id"}, status=400)
        course = get_object_or_404(Course, pk=cid)
        course.delete()
        data = list(Course.objects.order_by('-created_at').values('id', 'title'))
        return JsonResponse({"courses": data})
    return JsonResponse({"error": "Invalid request"}, status=400)


@login_required
def manage_courses(request):
    qs = Course.objects.order_by('-created_at')
    q = request.GET.get('q', '').strip()
    if q:
        qs = qs.filter(title__icontains=q)
    # pagination
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 10)
    try:
        courses = paginator.page(page)
    except PageNotAnInteger:
        courses = paginator.page(1)
    except EmptyPage:
        courses = paginator.page(paginator.num_pages)
    return render(request, 'webashaApp/manage_courses.html', {'courses': courses, 'q': q, 'paginator': paginator})


def courses_by_category(request, slug):
    from django.shortcuts import render
    from .models import CourseCategory
    from .models import Coupon
    # best-effort: try to find the category; if present, attempt to show courses
    # special-case: if the category slug is 'coupons', show coupon management
    if slug.lower() == 'coupons':
        # show simple coupons list (admin-only in templates/actions if needed)
        coupons = Coupon.objects.order_by('-created_at')
        success = request.GET.get('added') == '1'
        return render(request, 'webashaApp/coupons.html', {'coupons': coupons, 'success': success})

    category = CourseCategory.objects.filter(slug=slug).first()
    if category:
        # without an explicit FK relationship (may be added via migration),
        # fall back to matching titles that contain the category name
        qs = Course.objects.filter(title__icontains=category.name).order_by('-created_at')
    else:
        qs = Course.objects.none()
    # reuse pagination
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 10)
    try:
        courses = paginator.page(page)
    except PageNotAnInteger:
        courses = paginator.page(1)
    except EmptyPage:
        courses = paginator.page(paginator.num_pages)
    return render(request, 'webashaApp/manage_courses.html', {'courses': courses, 'category_slug': slug, 'paginator': paginator})


@login_required
def course_create(request):
    if request.method == 'POST':
        form = CourseForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'webashaApp/course_form.html', {'form': CourseForm(), 'success': True})
    else:
        form = CourseForm()
    return render(request, 'webashaApp/course_form.html', {'form': form})


@login_required
def coupon_create(request):
    """Simple view for adding a coupon."""
    if request.method == 'POST':
        form = CouponForm(request.POST)
        if form.is_valid():
            form.save()
            from django.urls import reverse
            url = reverse('courses_by_category', args=['coupons'])
            return redirect(f"{url}?added=1")
    else:
        form = CouponForm()
    return render(request, 'webashaApp/coupon_form.html', {'form': form})


@login_required
def coupon_edit(request, pk):
    coupon = get_object_or_404(Coupon, pk=pk)
    if request.method == 'POST':
        form = CouponForm(request.POST, instance=coupon)
        if form.is_valid():
            form.save()
            from django.urls import reverse
            url = reverse('courses_by_category', args=['coupons'])
            return redirect(f"{url}?updated=1")
    else:
        form = CouponForm(instance=coupon)
    return render(request, 'webashaApp/coupon_form.html', {'form': form, 'edit': True})


@login_required
def coupon_delete(request, pk):
    coupon = get_object_or_404(Coupon, pk=pk)
    if request.method == 'POST':
        coupon.delete()
        from django.urls import reverse
        url = reverse('courses_by_category', args=['coupons'])
        return redirect(f"{url}?deleted=1")
    return render(request, 'webashaApp/coupon_confirm_delete.html', {'coupon': coupon})


@login_required
def coupon_toggle(request, pk):
    coupon = get_object_or_404(Coupon, pk=pk)
    coupon.active = not coupon.active
    coupon.save()
    from django.urls import reverse
    url = reverse('courses_by_category', args=['coupons'])
    # pass flag to indicate activation change
    return redirect(f"{url}?toggled=1")

# optional edit/delete could be added later if needed


@login_required
def course_edit(request, pk):
    course = get_object_or_404(Course, pk=pk)
    if request.method == 'POST':
        form = CourseForm(request.POST, instance=course)
        if form.is_valid():
            form.save()
            return render(request, 'webashaApp/course_form.html', {'form': form, 'success': True, 'edit': True})
    else:
        form = CourseForm(instance=course)
    return render(request, 'webashaApp/course_form.html', {'form': form, 'edit': True})


def course_detail(request, pk):
    course = get_object_or_404(Course, pk=pk)
    return render(request, 'webashaApp/course_detail.html', {'course': course})


def register(request):
    """Simple user registration view using Django's UserCreationForm.
    On success the new user is automatically logged in and redirected to the site root.
    """
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            if user is not None:
                login(request, user)
                return redirect('/')
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})


@login_required
def course_delete(request, pk):
    course = get_object_or_404(Course, pk=pk)
    if request.method == 'POST':
        course.delete()
        return render(request, 'webashaApp/manage_courses.html', {'courses': Course.objects.order_by('-created_at'), 'deleted': True})
    return render(request, 'webashaApp/course_detail.html', {'course': course})


@login_required
def manage_bundles(request):
    bundles = CourseBundle.objects.all().order_by('-created_at')
    return render(request, 'webashaApp/manage_bundles.html', {'bundles': bundles})


@login_required
def add_bundle(request):
    """View to render the Add Course Bundle page and handle creation."""
    if request.method == "POST":
        title = request.POST.get('title')
        price = request.POST.get('price')
        subscription_days = request.POST.get('subscription_days', 365)
        thumbnail = request.FILES.get('thumbnail')
        details = request.POST.get('details')
        course_ids_str = request.POST.get('course_ids', '')
        
        bundle = CourseBundle.objects.create(
            title=title,
            owner=request.user,
            price=price if price else 0,
            subscription_limit_days=subscription_days if subscription_days else 365,
            thumbnail=thumbnail,
            details=details
        )
        
        if course_ids_str:
            course_ids = [int(id) for id in course_ids_str.split(',') if id.strip()]
            courses_to_add = Course.objects.filter(id__in=course_ids)
            bundle.courses.set(courses_to_add)
            
        messages.success(request, f"Course bundle '{title}' created successfully!")
        return redirect('manage_bundles')

    courses = Course.objects.all().order_by('title')
    return render(request, 'webashaApp/add_bundle.html', {'courses': courses})

@login_required
def manage_bootcamps(request):
    """View for Manage Bootcamp page with real data."""
    bootcamps = Bootcamp.objects.all().order_by('-created_at')
    return render(request, 'webashaApp/manage_bootcamps.html', {'bootcamps': bootcamps})


@login_required
def add_bootcamp(request):
    """View to render the Add New Bootcamp page and handle creation."""
    if request.method == "POST":
        title = request.POST.get('title')
        category_id = request.POST.get('category')
        short_description = request.POST.get('short_description')
        description = request.POST.get('description')
        pricing_type = request.POST.get('pricing_type')
        price = request.POST.get('price', 0)
        has_discount = request.POST.get('has_discount') == 'on'
        discounted_price = request.POST.get('discounted_price', 0)
        thumbnail = request.FILES.get('thumbnail')
        publish_date = request.POST.get('publish_date')

        category = get_object_or_404(BootcampCategory, id=category_id) if category_id else None
        
        Bootcamp.objects.create(
            title=title,
            owner=request.user,
            category=category,
            short_description=short_description,
            description=description,
            is_free=(pricing_type == 'free'),
            price=price if price else 0,
            has_discount=has_discount,
            discounted_price=discounted_price if discounted_price else 0,
            thumbnail=thumbnail,
            publish_date=publish_date if publish_date else None
        )
        
        messages.success(request, f"Bootcamp '{title}' created successfully!")
        return redirect('manage_bootcamps')
        
    categories = BootcampCategory.objects.all().order_by('name')
    return render(request, 'webashaApp/add_bootcamp.html', {'categories': categories})


@login_required
def purchase_history(request):
    """View for Bootcamp Purchase History page."""
    purchases = BootcampPurchase.objects.all().select_related('user', 'bootcamp').order_by('-created_at')
    
    date_range = request.GET.get('date_range')
    if date_range:
        try:
            start_str, end_str = date_range.split(' - ')
            from datetime import datetime
            start_date = datetime.strptime(start_str, '%m/%d/%Y')
            end_date = datetime.strptime(end_str, '%m/%d/%Y').replace(hour=23, minute=59, second=59)
            purchases = purchases.filter(created_at__range=(start_date, end_date))
        except (ValueError, IndexError):
            pass

    # Calculate totals
    total_paid = sum(p.price for p in purchases)
    
    return render(request, 'webashaApp/purchase_history.html', {
        'purchases': purchases,
        'date_range': date_range,
        'total_paid': total_paid
    })


@login_required
def bootcamp_categories(request):
    """View to list all bootcamp categories and handle creation."""
    if request.method == "POST":
        name = request.POST.get('name')
        if name:
            slug = slugify(name)
            # Handle duplicate slugs
            base_slug = slug
            counter = 1
            while BootcampCategory.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            
            BootcampCategory.objects.create(name=name, slug=slug)
            messages.success(request, f"Category '{name}' created successfully!")
        return redirect('bootcamp_categories')

    categories = BootcampCategory.objects.all().annotate(
        bootcamp_count=Count('bootcamps')
    ).order_by('name')
    return render(request, 'webashaApp/bootcamp_categories.html', {'categories': categories})
@login_required
def bootcamp_category_edit(request, pk):
    """View to edit an existing bootcamp category."""
    category = get_object_or_404(BootcampCategory, pk=pk)
    if request.method == "POST":
        name = request.POST.get('name')
        if name:
            category.name = name
            # Update slug if name changed significantly, or keep it
            # For simplicity, we'll just update the name
            category.save()
            messages.success(request, f"Category updated to '{name}' successfully!")
        return redirect('bootcamp_categories')
    return redirect('bootcamp_categories')

@login_required
def bootcamp_category_delete(request, pk):
    """View to delete a bootcamp category."""
    category = get_object_or_404(BootcampCategory, pk=pk)
    name = category.name
    category.delete()
    messages.success(request, f"Category '{name}' deleted successfully!")
    return redirect('bootcamp_categories')

@login_required
def tutor_subjects(request):
    """View to list all tutor subjects and handle addition."""
    if request.method == 'POST':
        name = request.POST.get('name')
        if name:
            TutorSubject.objects.create(name=name, status='active')
            messages.success(request, f"Subject '{name}' added successfully!")
            return redirect('tutor_subjects')
            
    subjects = TutorSubject.objects.all().order_by('-created_at')
    return render(request, 'webashaApp/tutor_subjects.html', {'subjects': subjects})

@login_required
def tutor_subject_edit(request, pk):
    """View to edit a tutor subject."""
    subject = get_object_or_404(TutorSubject, pk=pk)
    if request.method == 'POST':
        name = request.POST.get('name')
        if name:
            subject.name = name
            subject.save()
            messages.success(request, f"Subject '{name}' updated successfully!")
            return redirect('tutor_subjects')
    return redirect('tutor_subjects')

@login_required
def tutor_subject_delete(request, pk):
    """View to delete a tutor subject."""
    subject = get_object_or_404(TutorSubject, pk=pk)
    name = subject.name
    subject.delete()
    messages.success(request, f"Subject '{name}' deleted successfully!")
    return redirect('tutor_subjects')

@login_required
def tutor_categories(request):
    """View to list all tutor categories and handle addition."""
    if request.method == 'POST':
        name = request.POST.get('name')
        if name:
            TutorCategory.objects.create(name=name, status='active')
            messages.success(request, f"Category '{name}' added successfully!")
            return redirect('tutor_categories')
            
    categories = TutorCategory.objects.all().order_by('-created_at')
    return render(request, 'webashaApp/tutor_categories.html', {'categories': categories})

@login_required
def tutor_category_edit(request, pk):
    """View to edit a tutor category."""
    category = get_object_or_404(TutorCategory, pk=pk)
    if request.method == 'POST':
        name = request.POST.get('name')
        if name:
            category.name = name
            category.save()
            messages.success(request, f"Category '{name}' updated successfully!")
            return redirect('tutor_categories')
    return redirect('tutor_categories')

@login_required
def tutor_category_delete(request, pk):
    """View to delete a tutor category."""
    category = get_object_or_404(TutorCategory, pk=pk)
    name = category.name
    category.delete()
    messages.success(request, f"Category '{name}' deleted successfully!")
    return redirect('tutor_categories')

@login_required
def manage_ebooks(request):
    """View to list all ebooks."""
    ebooks = Ebook.objects.select_related('category').all().order_by('-created_at')
    return render(request, 'webashaApp/manage_ebooks.html', {'ebooks': ebooks})

@login_required
def add_ebook(request):
    """View to add or edit an ebook."""
    categories = EbookCategory.objects.all()
    if request.method == 'POST':
        title = request.POST.get('title')
        author_name = request.POST.get('author_name')
        author_email = request.POST.get('author_email')
        category_id = request.POST.get('category')
        language = request.POST.get('language')
        description = request.POST.get('description')
        summary = request.POST.get('summary')
        publication = request.POST.get('publication')
        edition = request.POST.get('edition')
        pricing_type = request.POST.get('pricing_type')
        price = request.POST.get('price', 0)
        has_discount = request.POST.get('has_discount') == 'on'
        discounted_price = request.POST.get('discounted_price', 0)
        publish_date = request.POST.get('publish_date')
        status = request.POST.get('status', 'active')
        
        category = get_object_or_404(EbookCategory, id=category_id)
        
        Ebook.objects.create(
            title=title,
            author_name=author_name,
            author_email=author_email,
            category=category,
            language=language,
            description=description,
            summary=summary,
            publication=publication,
            edition=edition,
            is_free=(pricing_type == 'free'),
            price=price if price else 0,
            has_discount=has_discount,
            discounted_price=discounted_price if discounted_price else 0,
            publish_date=publish_date if publish_date else None,
            status=status,
            cover_image=request.FILES.get('cover_image'),
            preview_file=request.FILES.get('preview_file'),
            ebook_file=request.FILES.get('ebook_file')
        )
        messages.success(request, f"Ebook '{title}' added successfully!")
        return redirect('manage_ebooks')
        
    return render(request, 'webashaApp/add_ebook.html', {'categories': categories})

@login_required
def edit_ebook(request, pk):
    """View to edit an ebook."""
    ebook = get_object_or_404(Ebook, pk=pk)
    categories = EbookCategory.objects.all()
    if request.method == 'POST':
        ebook.title = request.POST.get('title')
        ebook.author_name = request.POST.get('author_name')
        ebook.author_email = request.POST.get('author_email')
        category_id = request.POST.get('category')
        ebook.category = get_object_or_404(EbookCategory, id=category_id)
        ebook.language = request.POST.get('language')
        ebook.description = request.POST.get('description')
        ebook.summary = request.POST.get('summary')
        ebook.publication = request.POST.get('publication')
        ebook.edition = request.POST.get('edition')
        pricing_type = request.POST.get('pricing_type')
        ebook.is_free = (pricing_type == 'free')
        ebook.price = request.POST.get('price', 0)
        ebook.has_discount = request.POST.get('has_discount') == 'on'
        ebook.discounted_price = request.POST.get('discounted_price', 0)
        publish_date = request.POST.get('publish_date')
        ebook.publish_date = publish_date if publish_date else None
        ebook.status = request.POST.get('status', 'active')
        
        if 'cover_image' in request.FILES:
            ebook.cover_image = request.FILES['cover_image']
        if 'preview_file' in request.FILES:
            ebook.preview_file = request.FILES['preview_file']
        if 'ebook_file' in request.FILES:
            ebook.ebook_file = request.FILES['ebook_file']
            
        ebook.save()
        messages.success(request, f"Ebook '{ebook.title}' updated successfully!")
        return redirect('manage_ebooks')
        
    return render(request, 'webashaApp/add_ebook.html', {'ebook': ebook, 'categories': categories})

@login_required
def delete_ebook(request, pk):
    """View to delete an ebook."""
    ebook = get_object_or_404(Ebook, pk=pk)
    title = ebook.title
    ebook.delete()
    messages.success(request, f"Ebook '{title}' deleted successfully!")
    return redirect('manage_ebooks')

@login_required
def ebook_categories(request):
    """View to list all ebook categories and handle addition."""
    if request.method == 'POST':
        name = request.POST.get('name')
        if name:
            EbookCategory.objects.create(name=name, status='active')
            messages.success(request, f"Category '{name}' added successfully!")
            return redirect('ebook_categories')
            
    categories = EbookCategory.objects.all().order_by('-created_at')
    return render(request, 'webashaApp/ebook_categories.html', {'categories': categories})

@login_required
def ebook_category_edit(request, pk):
    """View to edit an ebook category."""
    category = get_object_or_404(EbookCategory, pk=pk)
    if request.method == 'POST':
        name = request.POST.get('name')
        if name:
            category.name = name
            category.save()
            messages.success(request, f"Category '{name}' updated successfully!")
            return redirect('ebook_categories')
    return redirect('ebook_categories')

@login_required
def ebook_category_delete(request, pk):
    """View to delete an ebook category."""
    category = get_object_or_404(EbookCategory, pk=pk)
    category.delete()
    messages.success(request, "Category deleted successfully!")
    return redirect('ebook_categories')

@login_required
def ebook_admin_revenue(request):
    """View to display ebook admin revenue."""
    purchases = EbookPurchase.objects.select_related('ebook', 'user').all().order_by('-created_at')
    
    date_range = request.GET.get('date_range')
    if date_range:
        try:
            start_str, end_str = date_range.split(' - ')
            from datetime import datetime
            start_date = datetime.strptime(start_str, '%m/%d/%Y')
            end_date = datetime.strptime(end_str, '%m/%d/%Y').replace(hour=23, minute=59, second=59)
            purchases = purchases.filter(created_at__range=(start_date, end_date))
        except (ValueError, IndexError):
            pass

    # Calculate totals
    total_price = sum(p.price for p in purchases)
    total_revenue = sum(p.admin_revenue for p in purchases)
    
    return render(request, 'webashaApp/ebook_admin_revenue.html', {
        'purchases': purchases,
        'date_range': date_range,
        'total_price': total_price,
        'total_revenue': total_revenue
    })

@login_required
def ebook_instructor_revenue(request):
    """View to display ebook instructor revenue."""
    purchases = EbookPurchase.objects.select_related('ebook', 'user').all().order_by('-created_at')
    
    date_range = request.GET.get('date_range')
    if date_range:
        try:
            start_str, end_str = date_range.split(' - ')
            from datetime import datetime
            start_date = datetime.strptime(start_str, '%m/%d/%Y')
            end_date = datetime.strptime(end_str, '%m/%d/%Y').replace(hour=23, minute=59, second=59)
            purchases = purchases.filter(created_at__range=(start_date, end_date))
        except (ValueError, IndexError):
            pass

    # Calculate totals
    total_amount = sum(p.price for p in purchases)
    total_instructor_revenue = sum(p.author_revenue for p in purchases)
    
    return render(request, 'webashaApp/ebook_instructor_revenue.html', {
        'purchases': purchases,
        'date_range': date_range,
        'total_amount': total_amount,
        'total_instructor_revenue': total_instructor_revenue
    })

@login_required
def offline_payments(request):
    """View to display offline payments."""
    category = request.GET.get('category', 'All')
    # Returning empty list to show "No data found" UI as per request
    return render(request, 'webashaApp/offline_payments.html', {
        'category': category,
        'payments': []
    })

@login_required
def manage_users(request):
    """View to list all base users natively in the dashboard."""
    from django.contrib.auth.models import User
    users = User.objects.all().order_by('-date_joined')
    return render(request, 'webashaApp/manage_users.html', {'users': users})

@login_required
def manage_groups(request):
    """View to list all base groups natively in the dashboard."""
    from django.contrib.auth.models import Group
    groups = Group.objects.annotate(user_count=Count('user')).order_by('name')
    return render(request, 'webashaApp/manage_groups.html', {'groups': groups})

@login_required
def manage_admins(request):
    """View to list all administrators."""
    from django.contrib.auth.models import User
    from django.db.models import Count
    
    admins = User.objects.filter(is_staff=True).annotate(
        course_count=Count('owned_bundles') + Count('owned_bootcamps')
    ).order_by('username')
    
    return render(request, 'webashaApp/manage_admins.html', {'admins': admins})

@login_required
def add_admin(request):
    """View to add a new administrator and their profile."""
    from django.contrib.auth.models import User
    from django.contrib import messages
    from .models import Profile
    
    if request.method == 'POST':
        name = request.POST.get('name')
        biography = request.POST.get('biography')
        phone = request.POST.get('phone')
        address = request.POST.get('address')
        email = request.POST.get('email')
        password = request.POST.get('password')
        image = request.FILES.get('image')
        
        # Simple split for first/last name
        name_parts = name.split(' ', 1)
        first_name = name_parts[0]
        last_name = name_parts[1] if len(name_parts) > 1 else ''
        
        if not email and address and '@' in address:
            email = address
            
        if not email or not password:
            messages.error(request, "Email and Password are required.")
        else:
            try:
                # Create user
                user = User.objects.create_user(
                    username=email, # Use email as username for simplicity
                    email=email,
                    password=password,
                    first_name=first_name,
                    last_name=last_name,
                    is_staff=True # Mark as admin
                )
                
                # Create Profile
                profile = Profile.objects.create(
                    user=user,
                    role='admin',
                    biography=biography,
                    phone=phone,
                    address=address,
                    image=image
                )
                
                messages.success(request, f"Admin '{name}' created successfully!")
                return redirect('manage_admins')
            except Exception as e:
                messages.error(request, f"Error creating admin: {e}")
                
    return render(request, 'webashaApp/add_admin.html')

@login_required
def manage_instructors(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    
    qs = Instructor.objects.all().order_by('-created_at')
    
    query = request.GET.get('q', '').strip()
    if query:
        qs = qs.filter(full_name__icontains=query)
    
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 10)
    try:
        page_obj = paginator.page(page)
    except PageNotAnInteger:
        page_obj = paginator.page(1)
    except EmptyPage:
        page_obj = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_instructors.html', {
        'page_obj': page_obj,
        'query': query,
        'paginator': paginator
    })

@login_required
def delete_instructor(request, pk):
    instructor = get_object_or_404(Instructor, pk=pk)
    name = instructor.full_name
    instructor.delete()
    messages.success(request, f"Instructor '{name}' deleted successfully.")
    return redirect('manage_instructors')


@login_required
def add_instructor(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        biography = request.POST.get('biography', '')
        phone = request.POST.get('phone', '')
        address = request.POST.get('address', '')
        email = request.POST.get('email', '')
        password = request.POST.get('password', '')
        image = request.FILES.get('image')
        
        # Social links
        facebook_link = request.POST.get('facebook_link', '')
        twitter_link = request.POST.get('twitter_link', '')
        linkedin_link = request.POST.get('linkedin_link', '')

        # Basic split for first/last name
        name_parts = name.split(' ', 1)
        first_name = name_parts[0]
        last_name = name_parts[1] if len(name_parts) > 1 else ''
        
        if not email and address and '@' in address:
            email = address
            
        if not email or not password:
            messages.error(request, "Email and Password are required.")
        else:
            try:
                # Create User
                user = User.objects.create_user(
                    username=email,
                    email=email,
                    password=password,
                    first_name=first_name,
                    last_name=last_name
                )
                user.is_staff = True  # Instructors are usually staff in LMS
                user.save()

                # Create Profile
                Profile.objects.create(
                    user=user,
                    role='instructor',
                    biography=biography,
                    phone=phone,
                    address=address,
                    image=image,
                    facebook_link=facebook_link,
                    twitter_link=twitter_link,
                    linkedin_link=linkedin_link
                )
                messages.success(request, f"Instructor '{name}' created successfully.")
                return redirect('manage_instructors')
            except Exception as e:
                messages.error(request, f"Error creating instructor: {str(e)}")

    return render(request, 'webashaApp/add_instructor.html')

@login_required
def faq_view(request):
    """View to list all FAQs."""
    faqs = FAQ.objects.all().order_by('-created_at')
    q = request.GET.get('q', '').strip()
    if q:
        faqs = faqs.filter(question__icontains=q)
    return render(request, 'webashaApp/faq.html', {'faqs': faqs, 'q': q})

@login_required
def add_faq(request):
    """View to add a new FAQ."""
    if request.method == 'POST':
        question = request.POST.get('question')
        answer = request.POST.get('answer')
        if question and answer:
            FAQ.objects.create(question=question, answer=answer)
            messages.success(request, "FAQ added successfully!")
            return redirect('faq_view')
    return redirect('faq_view')

@login_required
def edit_faq(request, pk):
    """View to edit an existing FAQ."""
    faq = get_object_or_404(FAQ, pk=pk)
    if request.method == 'POST':
        question = request.POST.get('question')
        answer = request.POST.get('answer')
        if question and answer:
            faq.question = question
            faq.answer = answer
            faq.save()
            messages.success(request, "FAQ updated successfully!")
    return redirect('faq_view')

@login_required
def delete_faq(request, pk):
    """View to delete an FAQ."""
    faq = get_object_or_404(FAQ, pk=pk)
    faq.delete()
    messages.success(request, "FAQ deleted successfully!")
    return redirect('faq_view')

@login_required
def instructor_payout(request):
    return render(request, 'webashaApp/instructor_payout.html')

@login_required
def manage_students(request):
    students = User.objects.filter(profile__role='student').annotate(
        course_count=Count('bootcamp_purchases')
    ).select_related('profile')
    return render(request, 'webashaApp/manage_students.html', {'students': students})

@login_required
def add_student(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        phone = request.POST.get('phone')
        address = request.POST.get('address')
        biography = request.POST.get('biography')
        image = request.FILES.get('image')
        
        facebook = request.POST.get('facebook_link')
        twitter = request.POST.get('twitter_link')
        linkedin = request.POST.get('linkedin_link')

        if User.objects.filter(username=email).exists():
            messages.error(request, 'Email already exists.')
            return render(request, 'webashaApp/add_student.html')

        user = User.objects.create_user(username=email, email=email, password=password)
        names = name.split(' ', 1)
        user.first_name = names[0]
        if len(names) > 1:
            user.last_name = names[1]
        user.save()

        Profile.objects.create(
            user=user,
            role='student',
            phone=phone,
            address=address,
            biography=biography,
            image=image,
            facebook_link=facebook,
            twitter_link=twitter,
            linkedin_link=linkedin
        )
        
        messages.success(request, f"Student '{name}' created successfully.")
        return redirect('manage_students')
        
    return render(request, 'webashaApp/add_student.html')

@login_required
def instructor_settings(request):
    return render(request, 'webashaApp/instructor_settings.html')

@login_required
def instructor_applications(request):
    return render(request, 'webashaApp/instructor_applications.html')

@login_required
def manage_newsletters(request):
    # Dummy newsletters data based on screenshot
    newsletters = [
        {'id': 1, 'title': 'Listing New Product'},
        {'id': 2, 'title': 'Unlock Your Potential with 50% Off on Our UI/UX course'},
        {'id': 3, 'title': 'Startup Spotlight: Innovation and Entrepreneurship'},
        {'id': 4, 'title': 'Academy News: The Future of Learning'},
    ]
    return render(request, 'webashaApp/manage_newsletters.html', {'newsletters': newsletters})

@login_required
def subscribed_users(request):
    # This would typically filter users who are subscribed to newsletter
    subscribers = User.objects.all() # Placeholder logic
    return render(request, 'webashaApp/subscribed_users.html', {'subscribers': subscribers})

@login_required
def enrollment_history(request):
    return render(request, 'webashaApp/enrollment_history.html')

@login_required
def enroll_student(request):
    return render(request, 'webashaApp/enroll_student.html')
@login_required
def messages_view(request, user_id=None):
    """View to display the messaging interface."""
    # Simple chat list - all users except the current one (could be improved to only active conversations)
    users = User.objects.exclude(id=request.user.id).select_related('profile')
    
    # Get initial conversation if user_id is provided
    selected_user = None
    chat_messages = []
    if user_id:
        selected_user = get_object_or_404(User, id=user_id)
        from django.db.models import Q
        chat_messages = Message.objects.filter(
            (Q(sender=request.user) & Q(receiver=selected_user)) |
            (Q(sender=selected_user) & Q(receiver=request.user))
        ).order_by('timestamp')
        # Mark as read
        chat_messages.filter(receiver=request.user, is_read=False).update(is_read=True)
    elif users.exists():
        # Default to first user if none selected
        # selected_user = users.first()
        # chat_messages = Message.objects.filter(
        #     (Q(sender=request.user) & Q(receiver=selected_user)) |
        #     (Q(sender=selected_user) & Q(receiver=request.user))
        # ).order_by('timestamp')
        pass

    return render(request, 'webashaApp/messages.html', {
        'users': users,
        'selected_user': selected_user,
        'messages': chat_messages,
    })

@login_required
def send_message(request):
    """AJAX view to send a message."""
    if request.method == "POST":
        receiver_id = request.POST.get('receiver_id')
        content = request.POST.get('content')
        if receiver_id and content:
            receiver = get_object_or_404(User, id=receiver_id)
            message = Message.objects.create(
                sender=request.user,
                receiver=receiver,
                content=content
            )
            return JsonResponse({
                'id': message.id,
                'content': message.content,
                'timestamp': message.timestamp.strftime('%H:%M'),
                'sender': message.sender.username
            })
    return JsonResponse({'error': 'Invalid request'}, status=400)

@login_required
def contacts_view(request):
    Contact.objects.filter(is_read=False).update(is_read=True)
    contacts = Contact.objects.all()
    context = {
        'contacts': contacts,
        'title': 'Contacts'
    }
    return render(request, 'webashaApp/contacts.html', context)

@login_required
def delete_contact(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    if request.method == "POST":
        contact.delete()
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'}, status=400)

@login_required
def reply_contact(request):
    if request.method == "POST":
        contact_id = request.POST.get('contact_id')
        message = request.POST.get('message')
        # In a real app, you'd send an email here.
        # For now, we'll just mock it.
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'}, status=400)

@login_required
def tickets_view(request):
    tickets = Ticket.objects.all()
    users = User.objects.all()
    context = {
        'tickets': tickets,
        'users': users,
        'title': 'Tickets'
    }
    return render(request, 'webashaApp/tickets.html', context)

@login_required
def add_ticket_view(request):
    if request.method == 'POST':
        subject = request.POST.get('subject')
        category = request.POST.get('category')
        user_id = request.POST.get('user_id')
        status = request.POST.get('status')
        priority = request.POST.get('priority')
        message = request.POST.get('message')
        uploaded_file = request.FILES.get('file')

        try:
            target_user = User.objects.get(id=user_id)
            Ticket.objects.create(
                subject=subject,
                category=category,
                user=target_user,
                status=status,
                priority=priority,
                message=message,
                file=uploaded_file
            )
            messages.success(request, 'Ticket created successfully!')
            return redirect('tickets_view')
        except Exception as e:
            messages.error(request, f'Error creating ticket: {str(e)}')

    users = User.objects.all()
    context = {
        'users': users,
        'title': 'Add New Ticket'
    }
    return render(request, 'webashaApp/add_ticket.html', context)

@login_required
def update_ticket(request, pk):
    if request.method == 'POST':
        ticket = get_object_or_404(Ticket, pk=pk)
        ticket.subject = request.POST.get('subject')
        ticket.category = request.POST.get('category')
        user_id = request.POST.get('user_id')
        ticket.status = request.POST.get('status')
        ticket.priority = request.POST.get('priority')
        
        try:
            target_user = User.objects.get(id=user_id)
            ticket.user = target_user
            ticket.save()
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)

@login_required
def delete_ticket(request, pk):
    if request.method == 'POST':
        ticket = get_object_or_404(Ticket, pk=pk)
        ticket.delete()
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)
def get_placements(request):
    """API view to fetch all placement related data."""
    students = PlacedStudent.objects.filter(is_active=True).order_by('order', '-created_at')
    partners = HiringPartner.objects.filter(is_active=True).order_by('order', '-created_at')
    stats = PlacementStat.objects.first()

    student_data = [
        {
            "sno": i + 1,
            "name": s.name,
            "course": s.course,
            "role": s.role,
            "company": s.company,
            "pkg": s.package,
            "date": s.month_year
        } for i, s in enumerate(students)
    ]

    partner_data = [
        {
            "src": p.logo.url if p.logo else "",
            "alt": p.name
        } for p in partners
    ]

    stats_data = [
        {"value": stats.total_placements if stats else "350+", "label": "Total Placements"},
        {"value": stats.average_package if stats else "8.9 LPA", "label": "Average Package"},
        {"value": stats.hiring_partners if stats else "120+", "label": "Hiring Partners"}
    ]

    return JsonResponse({
        "students": student_data,
        "companies": partner_data,
        "stats": stats_data
    })

@login_required
def manage_alumni_profiles(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = AlumniProfile.objects.order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        qs = qs.filter(name__icontains=q)
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        profiles = paginator.page(page)
    except PageNotAnInteger:
        profiles = paginator.page(1)
    except EmptyPage:
        profiles = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_alumni_profiles.html', {
        'profiles': profiles,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_alumni_profile(request):
    if request.method == 'POST':
        form = AlumniProfileForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Alumni Profile created successfully.')
            return redirect('manage_alumni_profiles')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = AlumniProfileForm()
        
    return render(request, 'webashaApp/add_alumni_profile.html', {'form': form})

@login_required
def manage_coupons(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = Coupon.objects.order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        qs = qs.filter(code__icontains=q)
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        coupons = paginator.page(page)
    except PageNotAnInteger:
        coupons = paginator.page(1)
    except EmptyPage:
        coupons = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_coupons.html', {
        'coupons': coupons,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_coupon(request):
    if request.method == 'POST':
        form = CouponForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Coupon created successfully.')
            return redirect('manage_coupons')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = CouponForm()
        
    return render(request, 'webashaApp/add_coupon.html', {'form': form})

@login_required
def manage_course_banners(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = CourseBanner.objects.order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        qs = qs.filter(heading__icontains=q)
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        banners = paginator.page(page)
    except PageNotAnInteger:
        banners = paginator.page(1)
    except EmptyPage:
        banners = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_course_banners.html', {
        'banners': banners,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_course_banner(request):
    if request.method == 'POST':
        form = CourseBannerForm(request.POST, request.FILES)
        syllabus_formset = SyllabusFormSet(request.POST, prefix='syllabus')
        faq_formset = FAQFormSet(request.POST, prefix='faq')
        batch_formset = BatchFormSet(request.POST, prefix='batch')
        tracktool_formset = TrackToolFormSet(request.POST, prefix='tracktool')
        
        if form.is_valid() and syllabus_formset.is_valid() and faq_formset.is_valid() and batch_formset.is_valid() and tracktool_formset.is_valid():
            banner = form.save()
            
            syllabus_formset.instance = banner
            syllabus_formset.save()
            
            faq_formset.instance = banner
            faq_formset.save()
            
            batch_formset.instance = banner
            batch_formset.save()
            
            tracktool_formset.instance = banner
            tracktool_formset.save()
            
            messages.success(request, 'Course Banner created successfully with all related modules.')
            return redirect('manage_course_banners')
        else:
            messages.error(request, 'Please correct the highlighted errors.')
    else:
        form = CourseBannerForm()
        syllabus_formset = SyllabusFormSet(prefix='syllabus')
        faq_formset = FAQFormSet(prefix='faq')
        batch_formset = BatchFormSet(prefix='batch')
        tracktool_formset = TrackToolFormSet(prefix='tracktool')
        
    return render(request, 'webashaApp/add_course_banner.html', {
        'form': form,
        'syllabus_formset': syllabus_formset,
        'faq_formset': faq_formset,
        'batch_formset': batch_formset,
        'tracktool_formset': tracktool_formset
    })

@login_required
def edit_course_banner(request, pk):
    banner = get_object_or_404(CourseBanner, pk=pk)
    if request.method == 'POST':
        form = CourseBannerForm(request.POST, request.FILES, instance=banner)
        syllabus_formset = SyllabusFormSet(request.POST, prefix='syllabus', instance=banner)
        faq_formset = FAQFormSet(request.POST, prefix='faq', instance=banner)
        batch_formset = BatchFormSet(request.POST, prefix='batch', instance=banner)
        tracktool_formset = TrackToolFormSet(request.POST, prefix='tracktool', instance=banner)
        
        if form.is_valid() and syllabus_formset.is_valid() and faq_formset.is_valid() and batch_formset.is_valid() and tracktool_formset.is_valid():
            banner = form.save()
            syllabus_formset.save()
            faq_formset.save()
            batch_formset.save()
            tracktool_formset.save()
            messages.success(request, 'Course Banner updated successfully.')
            return redirect('manage_course_banners')
        else:
            messages.error(request, 'Please correct the highlighted errors.')
    else:
        form = CourseBannerForm(instance=banner)
        syllabus_formset = SyllabusFormSet(prefix='syllabus', instance=banner)
        faq_formset = FAQFormSet(prefix='faq', instance=banner)
        batch_formset = BatchFormSet(prefix='batch', instance=banner)
        tracktool_formset = TrackToolFormSet(prefix='tracktool', instance=banner)
        
    return render(request, 'webashaApp/add_course_banner.html', {
        'form': form,
        'syllabus_formset': syllabus_formset,
        'faq_formset': faq_formset,
        'batch_formset': batch_formset,
        'tracktool_formset': tracktool_formset
    })

@login_required
def manage_course_subcategories(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = CourseSubCategory.objects.select_related('category').order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        qs = qs.filter(name__icontains=q)
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        subcategories = paginator.page(page)
    except PageNotAnInteger:
        subcategories = paginator.page(1)
    except EmptyPage:
        subcategories = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_course_subcategories.html', {
        'subcategories': subcategories,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_course_subcategory(request):
    if request.method == 'POST':
        form = CourseSubCategoryForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Course Subcategory created successfully.')
            return redirect('manage_course_subcategories')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = CourseSubCategoryForm()
        
    return render(request, 'webashaApp/add_course_subcategory.html', {'form': form})

@login_required
def manage_course_categories(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = CourseCategory.objects.order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        qs = qs.filter(name__icontains=q)
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        categories = paginator.page(page)
    except PageNotAnInteger:
        categories = paginator.page(1)
    except EmptyPage:
        categories = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_course_categories.html', {
        'categories': categories,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_course_category(request):
    if request.method == 'POST':
        form = CourseCategoryForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Course Category created successfully.')
            return redirect('manage_course_categories')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = CourseCategoryForm()
        
    return render(request, 'webashaApp/add_course_category.html', {'form': form})

@login_required
def manage_courses(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = Course.objects.select_related('subcategory').order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        qs = qs.filter(title__icontains=q)
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        courses = paginator.page(page)
    except PageNotAnInteger:
        courses = paginator.page(1)
    except EmptyPage:
        courses = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_courses.html', {
        'courses': courses,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_course(request):
    if request.method == 'POST':
        form = CourseForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Course created successfully.')
            return redirect('manage_courses')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = CourseForm()
        
    return render(request, 'webashaApp/add_course.html', {'form': form})

@login_required
def manage_enquiries(request):
    Enquiry.objects.filter(is_read=False).update(is_read=True)
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = Enquiry.objects.order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        from django.db.models import Q
        qs = qs.filter(Q(name__icontains=q) | Q(email__icontains=q) | Q(phone__icontains=q) | Q(course_name__icontains=q))
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        enquiries = paginator.page(page)
    except PageNotAnInteger:
        enquiries = paginator.page(1)
    except EmptyPage:
        enquiries = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_enquiries.html', {
        'enquiries': enquiries,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_enquiry(request):
    if request.method == 'POST':
        form = EnquiryForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Enquiry added successfully.')
            return redirect('manage_enquiries')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = EnquiryForm()
        
    return render(request, 'webashaApp/add_enquiry.html', {'form': form})

@login_required
def manage_vouchers(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = ExamVoucherOffer.objects.order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        qs = qs.filter(title__icontains=q)
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        vouchers = paginator.page(page)
    except PageNotAnInteger:
        vouchers = paginator.page(1)
    except EmptyPage:
        vouchers = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_vouchers.html', {
        'vouchers': vouchers,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_voucher(request):
    if request.method == 'POST':
        form = ExamVoucherOfferForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Exam Voucher Offer created successfully.')
            return redirect('manage_vouchers')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = ExamVoucherOfferForm()
        
    return render(request, 'webashaApp/add_voucher.html', {'form': form})

@login_required
def manage_gallery_images(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = GalleryImage.objects.order_by('order', '-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        from django.db.models import Q
        qs = qs.filter(Q(title__icontains=q) | Q(category__icontains=q))
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        images = paginator.page(page)
    except PageNotAnInteger:
        images = paginator.page(1)
    except EmptyPage:
        images = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_gallery_images.html', {
        'images': images,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_gallery_image(request):
    if request.method == 'POST':
        form = GalleryImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Gallery Image added successfully.')
            return redirect('manage_gallery_images')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = GalleryImageForm()
        
    return render(request, 'webashaApp/add_gallery_image.html', {'form': form})

@login_required
def manage_hiring_partners(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = HiringPartner.objects.order_by('order', '-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        qs = qs.filter(name__icontains=q)
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        partners = paginator.page(page)
    except PageNotAnInteger:
        partners = paginator.page(1)
    except EmptyPage:
        partners = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_hiring_partners.html', {
        'partners': partners,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_hiring_partner(request):
    if request.method == 'POST':
        form = HiringPartnerForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Hiring Partner added successfully.')
            return redirect('manage_hiring_partners')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = HiringPartnerForm()
        
    return render(request, 'webashaApp/add_hiring_partner.html', {'form': form})

@login_required
def manage_home_sections(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = HomeSection.objects.order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        from django.db.models import Q
        qs = qs.filter(Q(identifier__icontains=q) | Q(title__icontains=q))
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        sections = paginator.page(page)
    except PageNotAnInteger:
        sections = paginator.page(1)
    except EmptyPage:
        sections = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_home_sections.html', {
        'sections': sections,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_home_section(request):
    if request.method == 'POST':
        form = HomeSectionForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Home Section created successfully.')
            return redirect('manage_home_sections')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = HomeSectionForm()
        
    return render(request, 'webashaApp/add_home_section.html', {'form': form})

@login_required
def manage_standalone_related_courses(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = StandaloneRelatedCourse.objects.order_by('order', '-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        from django.db.models import Q
        qs = qs.filter(Q(title__icontains=q) | Q(description__icontains=q))
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        courses = paginator.page(page)
    except PageNotAnInteger:
        courses = paginator.page(1)
    except EmptyPage:
        courses = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_standalone_related_courses.html', {
        'courses': courses,
        'q': q,
        'paginator': paginator
    })

@login_required
def add_standalone_related_course(request):
    if request.method == 'POST':
        form = StandaloneRelatedCourseForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Related Course Card added successfully.')
            return redirect('manage_standalone_related_courses')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = StandaloneRelatedCourseForm()
        
    return render(request, 'webashaApp/add_standalone_related_course.html', {'form': form})


# --- GENERATED VIEWS FOR 9 BRAND NEW CRM COMPONENTS ---

@login_required
def manage_instructors(request):
    query = request.GET.get('q', '')
    if query:
        items = Instructor.objects.filter(full_name__icontains=query)
    else:
        items = Instructor.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_instructors.html', {
        'page_obj': page_obj, 'query': query
    })

@login_required
def add_instructor(request):
    if request.method == 'POST':
        form = InstructorForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Instructor added successfully.')
            return redirect('manage_instructors')
    else:
        form = InstructorForm()
    return render(request, 'webashaApp/add_instructor.html', {'form': form})

@login_required
def manage_placed_students(request):
    query = request.GET.get('q', '')
    if query:
        items = PlacedStudent.objects.filter(name__icontains=query)
    else:
        items = PlacedStudent.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_placed_students.html', {
        'page_obj': page_obj, 'query': query
    })

@login_required
def add_placed_student(request):
    if request.method == 'POST':
        form = PlacedStudentForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'PlacedStudent added successfully.')
            return redirect('manage_placed_students')
    else:
        form = PlacedStudentForm()
    return render(request, 'webashaApp/add_placed_student.html', {'form': form})

@login_required
def manage_placement_stats(request):
    query = request.GET.get('q', '')
    if query:
        items = PlacementStat.objects.filter(total_placements__icontains=query)
    else:
        items = PlacementStat.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_placement_stats.html', {
        'page_obj': page_obj, 'query': query
    })

@login_required
def add_placement_stat(request):
    if request.method == 'POST':
        form = PlacementStatForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'PlacementStat added successfully.')
            return redirect('manage_placement_stats')
    else:
        form = PlacementStatForm()
    return render(request, 'webashaApp/add_placement_stat.html', {'form': form})

@login_required
def manage_profiles(request):
    query = request.GET.get('q', '')
    if query:
        items = Profile.objects.filter(user__username__icontains=query)
    else:
        items = Profile.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_profiles.html', {
        'page_obj': page_obj, 'query': query
    })

@login_required
def add_profile(request):
    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile added successfully.')
            return redirect('manage_profiles')
    else:
        form = ProfileForm()
    return render(request, 'webashaApp/add_profile.html', {'form': form})

@login_required
def manage_student_certificates(request):
    query = request.GET.get('q', '')
    if query:
        items = StudentCertificate.objects.filter(student_name__icontains=query)
    else:
        items = StudentCertificate.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_student_certificates.html', {
        'page_obj': page_obj, 'query': query
    })

@login_required
def add_student_certificate(request):
    if request.method == 'POST':
        form = StudentCertificateForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'StudentCertificate added successfully.')
            return redirect('manage_student_certificates')
    else:
        form = StudentCertificateForm()
    return render(request, 'webashaApp/add_student_certificate.html', {'form': form})

@login_required
def manage_student_screenshots(request):
    query = request.GET.get('q', '')
    if query:
        items = StudentScreenshot.objects.filter(name__icontains=query)
    else:
        items = StudentScreenshot.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_student_screenshots.html', {
        'page_obj': page_obj, 'query': query
    })

@login_required
def add_student_screenshot(request):
    if request.method == 'POST':
        form = StudentScreenshotForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'StudentScreenshot added successfully.')
            return redirect('manage_student_screenshots')
    else:
        form = StudentScreenshotForm()
    return render(request, 'webashaApp/add_student_screenshot.html', {'form': form})

@login_required
def manage_testimonials(request):
    query = request.GET.get('q', '')
    if query:
        items = Testimonial.objects.filter(full_name__icontains=query)
    else:
        items = Testimonial.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_testimonials.html', {
        'page_obj': page_obj, 'query': query
    })

@login_required
def add_testimonial(request):
    if request.method == 'POST':
        form = TestimonialForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Testimonial added successfully.')
            return redirect('manage_testimonials')
    else:
        form = TestimonialForm()
    return render(request, 'webashaApp/add_testimonial.html', {'form': form})

@login_required
def manage_upcoming_batches(request):
    query = request.GET.get('q', '')
    if query:
        items = UpcomingBatch.objects.filter(batch_form__icontains=query)
    else:
        items = UpcomingBatch.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_upcoming_batches.html', {
        'page_obj': page_obj, 'query': query
    })

@login_required
def add_upcoming_batch(request):
    if request.method == 'POST':
        form = UpcomingBatchForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'UpcomingBatch added successfully.')
            return redirect('manage_upcoming_batches')
    else:
        form = UpcomingBatchForm()
    return render(request, 'webashaApp/add_upcoming_batch.html', {'form': form})

@login_required
def manage_video_reviews(request):
    query = request.GET.get('q', '')
    if query:
        items = VideoReview.objects.filter(title__icontains=query)
    else:
        items = VideoReview.objects.all()
        
    paginator = Paginator(items, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'webashaApp/manage_video_reviews.html', {
        'page_obj': page_obj, 'query': query
    })

@login_required
def add_video_review(request):
    if request.method == 'POST':
        form = VideoReviewForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'VideoReview added successfully.')
            return redirect('manage_video_reviews')
    else:
        form = VideoReviewForm()
    return render(request, 'webashaApp/add_video_review.html', {'form': form})

@login_required
def add_group(request):
    from django.contrib.auth.models import Group
    from .forms import GroupForm
    from django.contrib import messages
    if request.method == 'POST':
        form = GroupForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Group specifically mapped successfully!")
            return redirect('manage_groups')
    else:
        form = GroupForm()
    return render(request, 'webashaApp/add_group.html', {'form': form, 'is_edit': False})

@login_required
def edit_group(request, pk):
    from django.contrib.auth.models import Group
    from .forms import GroupForm
    from django.contrib import messages
    group = get_object_or_404(Group, pk=pk)
    if request.method == 'POST':
        form = GroupForm(request.POST, instance=group)
        if form.is_valid():
            form.save()
            messages.success(request, "Group specifically mapped successfully!")
            return redirect('manage_groups')
    else:
        form = GroupForm(instance=group)
    return render(request, 'webashaApp/add_group.html', {'form': form, 'is_edit': True, 'group': group})
@login_required
@user_passes_test(lambda u: u.is_superuser)
def manage_exams(request):
    query = request.GET.get('q', '')
    if query:
        exams = Exam.objects.filter(
            models.Q(title__icontains=query) | 
            models.Q(exam_code__icontains=query)
        ).order_by('order', '-created_at')
    else:
        exams = Exam.objects.all().order_by('order', '-created_at')

    paginator = Paginator(exams, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'page_obj': page_obj,
        'query': query,
        'title': 'Manage Exams'
    }
    return render(request, 'webashaApp/manage_exams.html', context)

@login_required
@user_passes_test(lambda u: u.is_superuser)
def add_exam(request, pk=None):
    if pk:
        exam = get_object_or_404(Exam, pk=pk)
        title = "Edit Exam"
    else:
        exam = None
        title = "Add Exam"

    if request.method == 'POST':
        form = ExamForm(request.POST, request.FILES, instance=exam)
        faq_formset = ExamFAQFormSet(request.POST, request.FILES, prefix='faq', instance=exam)
        review_formset = ExamReviewFormSet(request.POST, request.FILES, prefix='review', instance=exam)
        partner_formset = ExamPartnerLogoFormSet(request.POST, request.FILES, prefix='partner', instance=exam)
        related_course_formset = ExamRelatedCourseFormSet(request.POST, request.FILES, prefix='relatedcourse', instance=exam)
        why_choose_us_formset = ExamWhyChooseUsFormSet(request.POST, request.FILES, prefix='whychooseus', instance=exam)
        ad_banner_formset = ExamAdBannerFormSet(request.POST, request.FILES, prefix='adbanner', instance=exam)
        carousel_formset = ExamSidebarCarouselFormSet(request.POST, request.FILES, prefix='carousel', instance=exam)
        certificate_formset = ExamCertificateFormSet(request.POST, request.FILES, prefix='certificate', instance=exam)
        
        if (form.is_valid() and faq_formset.is_valid() and review_formset.is_valid() and 
            partner_formset.is_valid() and related_course_formset.is_valid() and 
            why_choose_us_formset.is_valid() and ad_banner_formset.is_valid() and 
            carousel_formset.is_valid() and certificate_formset.is_valid()):
            
            exam_instance = form.save()
            
            faq_formset.instance = exam_instance
            faq_formset.save()
            
            review_formset.instance = exam_instance
            review_formset.save()
            
            partner_formset.instance = exam_instance
            partner_formset.save()
            
            related_course_formset.instance = exam_instance
            related_course_formset.save()
            
            why_choose_us_formset.instance = exam_instance
            why_choose_us_formset.save()
            
            ad_banner_formset.instance = exam_instance
            ad_banner_formset.save()
            
            carousel_formset.instance = exam_instance
            carousel_formset.save()

            certificate_formset.instance = exam_instance
            certificate_formset.save()

            messages.success(request, f'Exam {"updated" if pk else "added"} successfully with all inline modules!')
            return redirect('manage_exams')
        else:
            messages.error(request, 'Please correct the highlighted errors in the form or tabs.')
    else:
        form = ExamForm(instance=exam)
        faq_formset = ExamFAQFormSet(prefix='faq', instance=exam)
        review_formset = ExamReviewFormSet(prefix='review', instance=exam)
        partner_formset = ExamPartnerLogoFormSet(prefix='partner', instance=exam)
        related_course_formset = ExamRelatedCourseFormSet(prefix='relatedcourse', instance=exam)
        why_choose_us_formset = ExamWhyChooseUsFormSet(prefix='whychooseus', instance=exam)
        ad_banner_formset = ExamAdBannerFormSet(prefix='adbanner', instance=exam)
        carousel_formset = ExamSidebarCarouselFormSet(prefix='carousel', instance=exam)
        certificate_formset = ExamCertificateFormSet(prefix='certificate', instance=exam)

    return render(request, 'webashaApp/add_exam.html', {
        'form': form,
        'title': title,
        'faq_formset': faq_formset,
        'review_formset': review_formset,
        'partner_formset': partner_formset,
        'related_course_formset': related_course_formset,
        'why_choose_us_formset': why_choose_us_formset,
        'ad_banner_formset': ad_banner_formset,
        'carousel_formset': carousel_formset,
        'certificate_formset': certificate_formset
    })


def delete_gallery_image(request, pk):
    image = get_object_or_404(GalleryImage, pk=pk)
    title = image.title
    image.delete()
    messages.success(request, f'Image {title} deleted successfully.')
    return redirect('manage_gallery_images')

@login_required
def delete_testimonial(request, pk):
    testimonial = get_object_or_404(Testimonial, pk=pk)
    name = testimonial.name
    testimonial.delete()
    messages.success(request, f'Testimonial from {name} deleted successfully.')
    return redirect('manage_testimonials')

@login_required
def delete_hiring_partner(request, pk):
    partner = get_object_or_404(HiringPartner, pk=pk)
    name = partner.name
    partner.delete()
    messages.success(request, f'Hiring partner {name} deleted successfully.')
    return redirect('manage_hiring_partners')

@login_required
def delete_placed_student(request, pk):
    student = get_object_or_404(PlacedStudent, pk=pk)
    name = student.name
    student.delete()
    messages.success(request, f'Placed student record for {name} deleted successfully.')
    return redirect('manage_placed_students')


@login_required
def manage_pages(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = CustomPage.objects.all().order_by('-created_at')
    query = request.GET.get('q', '').strip()
    if query:
        qs = qs.filter(title__icontains=query)
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 10)
    try:
        page_obj = paginator.page(page)
    except PageNotAnInteger:
        page_obj = paginator.page(1)
    except EmptyPage:
        page_obj = paginator.page(paginator.num_pages)
    return render(request, 'webashaApp/manage_pages.html', {'page_obj': page_obj, 'query': query})

@login_required
def add_page(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        slug = request.POST.get('slug')
        content = request.POST.get('content')
        meta_title = request.POST.get('meta_title')
        meta_description = request.POST.get('meta_description')
        if title and slug:
            CustomPage.objects.create(
                title=title, slug=slug, content=content,
                meta_title=meta_title, meta_description=meta_description,
                banner_image=request.FILES.get('banner_image'),
                banner_title=request.POST.get('banner_title'),
                banner_subtitle=request.POST.get('banner_subtitle'),
                cta_text=request.POST.get('cta_text'),
                cta_link=request.POST.get('cta_link'),
                show_sidebar=request.POST.get('show_sidebar') == 'on'
            )
            messages.success(request, f'Page {title} created successfully!')
            return redirect('manage_pages')
    return render(request, 'webashaApp/add_page.html')

@login_required
def edit_page(request, pk):
    page_obj = get_object_or_404(CustomPage, pk=pk)
    if request.method == 'POST':
        page_obj.title = request.POST.get('title')
        page_obj.slug = request.POST.get('slug')
        page_obj.content = request.POST.get('content')
        page_obj.meta_title = request.POST.get('meta_title')
        page_obj.meta_description = request.POST.get('meta_description')
        if request.FILES.get('banner_image'):
            page_obj.banner_image = request.FILES.get('banner_image')
        page_obj.banner_title = request.POST.get('banner_title')
        page_obj.banner_subtitle = request.POST.get('banner_subtitle')
        page_obj.cta_text = request.POST.get('cta_text')
        page_obj.cta_link = request.POST.get('cta_link')
        page_obj.show_sidebar = request.POST.get('show_sidebar') == 'on'
        page_obj.save()
        messages.success(request, f'Page {page_obj.title} updated successfully!')
        return redirect('manage_pages')
    return render(request, 'webashaApp/add_page.html', {'page_obj': page_obj})

@login_required
def delete_page(request, pk):
    page_obj = get_object_or_404(CustomPage, pk=pk)
    title = page_obj.title
    page_obj.delete()
    messages.success(request, f'Page {title} deleted successfully.')
    return redirect('manage_pages')

def serve_page(request, slug):
    page_obj = get_object_or_404(CustomPage, slug=slug, is_active=True)
    return render(request, 'webashaApp/custom_page.html', {'page_obj': page_obj})

@login_required
def delete_enquiry(request, pk):
    enquiry = get_object_or_404(Enquiry, pk=pk)
    name = enquiry.name
    enquiry.delete()
    messages.success(request, f'Enquiry from {name} deleted successfully.')
    return redirect('manage_enquiries')

@login_required
def manage_live_chat(request):
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    qs = LiveChatInquiry.objects.order_by('-created_at')
    
    q = request.GET.get('q', '').strip()
    if q:
        from django.db.models import Q
        qs = qs.filter(Q(name__icontains=q) | Q(email__icontains=q) | Q(phone__icontains=q) | Q(subject__icontains=q))
        
    page = request.GET.get('page', 1)
    paginator = Paginator(qs, 15)
    try:
        inquiries = paginator.page(page)
    except PageNotAnInteger:
        inquiries = paginator.page(1)
    except EmptyPage:
        inquiries = paginator.page(paginator.num_pages)
        
    return render(request, 'webashaApp/manage_live_chat.html', {
        'inquiries': inquiries,
        'q': q,
        'paginator': paginator
    })

@login_required
def delete_live_chat(request, pk):
    inquiry = get_object_or_404(LiveChatInquiry, pk=pk)
    name = inquiry.name
    inquiry.delete()
    messages.success(request, f'Live Chat Inquiry from {name} deleted successfully.')
    return redirect('manage_live_chat')

@login_required
def mark_live_chat_read(request, pk):
    inquiry = get_object_or_404(LiveChatInquiry, pk=pk)
    inquiry.is_read = True
    inquiry.save()
    messages.success(request, f'Live Chat Inquiry from {inquiry.name} marked as read.')
    return redirect('manage_live_chat')
