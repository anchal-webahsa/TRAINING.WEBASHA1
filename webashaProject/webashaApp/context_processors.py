from .models import CourseCategory


def course_categories(request):
    # provide categories for sidebar submenu (ordered by name)
    try:
        # force evaluation here so template rendering won't trigger DB errors
        cats = list(CourseCategory.objects.order_by('name'))
    except Exception:
        cats = []
    return {'course_categories': cats}
