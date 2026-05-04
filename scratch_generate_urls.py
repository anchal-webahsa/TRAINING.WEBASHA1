import os

models_data = [
    {"name_plural": "instructors", "name_singular": "instructor"},
    {"name_plural": "placed_students", "name_singular": "placed_student"},
    {"name_plural": "placement_stats", "name_singular": "placement_stat"},
    {"name_plural": "profiles", "name_singular": "profile"},
    {"name_plural": "student_certificates", "name_singular": "student_certificate"},
    {"name_plural": "student_screenshots", "name_singular": "student_screenshot"},
    {"name_plural": "testimonials", "name_singular": "testimonial"},
    {"name_plural": "upcoming_batches", "name_singular": "upcoming_batch"},
    {"name_plural": "video_reviews", "name_singular": "video_review"}
]

out = ""
for group in models_data:
    out += f"    path('manage/{group['name_plural']}/', views.manage_{group['name_plural']}, name='manage_{group['name_plural']}'),\n"
    out += f"    path('manage/{group['name_plural']}/add/', views.add_{group['name_singular']}, name='add_{group['name_singular']}'),\n"

with open(r"d:\1.webashaProject\webashaProject\webashaApp\urls.py", "a") as f:
    f.write("\n\n# --- GENERATED URIs FOR 9 BRAND NEW CRM COMPONENTS ---\n")
    f.write("urlpatterns += [\n")
    f.write(out)
    f.write("]\n")
    
print("URLs generated and attached correctly.")
