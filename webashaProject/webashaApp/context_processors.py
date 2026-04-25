from .models import CourseCategory, Enquiry, Contact


def course_categories(request):
    # provide categories for sidebar submenu (ordered by name)
    try:
        # force evaluation here so template rendering won't trigger DB errors
        cats = list(CourseCategory.objects.order_by('name'))
    except Exception:
        cats = []
    return {'course_categories': cats}

def notifications(request):
    if not request.user.is_authenticated:
        return {}
    
    try:
        unread_enquiries = Enquiry.objects.filter(is_read=False).count()
        unread_contacts = Contact.objects.filter(is_read=False).count()
        total_unread = unread_enquiries + unread_contacts
        
        # Get 5 most recent unread notifications for a dropdown if needed
        recent_enquiries = Enquiry.objects.filter(is_read=False).order_by('-created_at')[:5]
        recent_contacts = Contact.objects.filter(is_read=False).order_by('-created_at')[:5]
        
        return {
            'unread_notifications_count': total_unread,
            'recent_unread_enquiries': recent_enquiries,
            'recent_unread_contacts': recent_contacts
        }
    except Exception:
        return {'unread_notifications_count': 0}
