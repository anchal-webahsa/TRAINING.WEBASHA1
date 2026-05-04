import os

models_data = [
    {
        "model": "PlacedStudent",
        "title": "Placed Student",
        "name_plural": "placed_students",
        "name_singular": "placed_student",
        "search_placeholder": "Search by name...",
        "table_headers": ["Name", "Company", "Role", "Status"],
        "table_rows": """
                    <td style="padding:16px"><strong style="color:#0f172a;font-size:14px">{{ item.name }}</strong></td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.company }}</td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.role }}</td>
        """
    },
    {
        "model": "PlacementStat",
        "title": "Placement Stat",
        "name_plural": "placement_stats",
        "name_singular": "placement_stat",
        "search_placeholder": "Search stats...",
        "table_headers": ["Total Placements", "Average Package", "Hiring Partners"],
        "table_rows": """
                    <td style="padding:16px"><strong style="color:#0f172a;font-size:14px">{{ item.total_placements }}</strong></td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.average_package }}</td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.hiring_partners }}</td>
        """
    },
    {
        "model": "Profile",
        "title": "Profile",
        "name_plural": "profiles",
        "name_singular": "profile",
        "search_placeholder": "Search by username...",
        "table_headers": ["Image", "User", "Role"],
        "table_rows": """
                    <td style="padding:16px">
                        {% if item.image %}
                            <img src="{{ item.image.url }}" style="width: 45px; height: 45px; object-fit: cover; border-radius: 50%;">
                        {% else %}
                            <div style="width: 45px; height: 45px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; color: #64748b;">N/A</div>
                        {% endif %}
                    </td>
                    <td style="padding:16px"><strong style="color:#0f172a;font-size:14px">{{ item.user.username }}</strong></td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.role|title }}</td>
        """
    },
    {
        "model": "StudentCertificate",
        "title": "Student Certificate",
        "name_plural": "student_certificates",
        "name_singular": "student_certificate",
        "search_placeholder": "Search by student name...",
        "table_headers": ["Certificate ID", "Student Name", "Course", "Status"],
        "table_rows": """
                    <td style="padding:16px"><strong style="color:#0f172a;font-size:14px">{{ item.certificate_id }}</strong></td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.student_name }}</td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.course_name }}</td>
        """
    },
    {
        "model": "StudentScreenshot",
        "title": "Student Screenshot",
        "name_plural": "student_screenshots",
        "name_singular": "student_screenshot",
        "search_placeholder": "Search by name...",
        "table_headers": ["Logo", "Name", "Order", "Status"],
        "table_rows": """
                    <td style="padding:16px">
                        {% if item.logo_image %}
                            <img src="{{ item.logo_image.url }}" style="width: 45px; height: 45px; object-fit: cover; border-radius: 5px;">
                        {% else %}
                            <div style="width: 45px; height: 45px; border-radius: 5px; background: #e2e8f0;"></div>
                        {% endif %}
                    </td>
                    <td style="padding:16px"><strong style="color:#0f172a;font-size:14px">{{ item.name }}</strong></td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.order }}</td>
        """
    },
    {
        "model": "Testimonial",
        "title": "Testimonial",
        "name_plural": "testimonials",
        "name_singular": "testimonial",
        "search_placeholder": "Search by name...",
        "table_headers": ["Name", "Rating", "Type", "Status"],
        "table_rows": """
                    <td style="padding:16px"><strong style="color:#0f172a;font-size:14px">{{ item.full_name }}</strong></td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.rating }} Stars</td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.get_review_type_display }}</td>
        """
    },
    {
        "model": "UpcomingBatch",
        "title": "Upcoming Batch",
        "name_plural": "upcoming_batches",
        "name_singular": "upcoming_batch",
        "search_placeholder": "Search batches...",
        "table_headers": ["Date", "Mode", "Status Text", "Status"],
        "table_rows": """
                    <td style="padding:16px"><strong style="color:#0f172a;font-size:14px">{{ item.date }}</strong></td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.mode_of_class }}</td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.status_text }}</td>
        """
    },
    {
        "model": "VideoReview",
        "title": "Video Review",
        "name_plural": "video_reviews",
        "name_singular": "video_review",
        "search_placeholder": "Search reviews...",
        "table_headers": ["Thumbnail", "Title", "Video ID", "Status"],
        "table_rows": """
                    <td style="padding:16px">
                        {% if item.image %}
                            <img src="{{ item.image.url }}" style="width: 80px; height: 45px; object-fit: cover; border-radius: 5px;">
                        {% else %}
                            <div style="width: 80px; height: 45px; border-radius: 5px; background: #e2e8f0;"></div>
                        {% endif %}
                    </td>
                    <td style="padding:16px"><strong style="color:#0f172a;font-size:14px">{{ item.title }}</strong></td>
                    <td style="padding:16px;color:#475569;font-size:13px">{{ item.video_id }}</td>
        """
    }
]

manage_layout = """{{% extends 'webashaApp/base.html' %}}

{{% block content %}}
<div style="background:#fff;border-radius:12px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.05)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
        <h2 style="margin:0;font-size:24px;color:#0f172a;font-weight:600">Manage {title}s</h2>
        <a href="{{% url 'add_{singular}' %}}" style="background:#3b82f6;color:white;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:500;display:flex;align-items:center;gap:8px;transition:background 0.2s">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add {title}
        </a>
    </div>

    <!-- Messages -->
    {{% if messages %}}
        {{% for message in messages %}}
        <div class="alert-styled {{% if message.tags == 'error' %}}alert-error{{% else %}}alert-{{{{ message.tags }}}}{{% endif %}}">
            {{{{ message }}}}
        </div>
        {{% endfor %}}
    {{% endif %}}

    <!-- Search / Filter -->
    <div style="background:#f8fafc;padding:16px;border-radius:8px;margin-bottom:24px">
        <form method="get" style="display:flex;gap:12px;align-items:center">
            <div style="flex:1;position:relative">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" style="position:absolute;left:12px;top:50%;transform:translateY(-50%)"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input name="q" placeholder="{search_placeholder}" value="{{{{ query }}}}" style="width:100%;padding:10px 10px 10px 40px;border-radius:8px;border:1px solid #e2e8f0;outline:none;font-size:14px;box-sizing:border-box">
            </div>
            <button type="submit" style="background:#475569;color:white;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:500">Filter</button>
        </form>
    </div>

    <!-- Table -->
    <div style="overflow-x:auto;border:1px solid #e2e8f0;border-radius:8px">
        <table style="width:100%;border-collapse:collapse;min-width:800px;text-align:left">
            <thead style="background:#f8fafc;border-bottom:1px solid #e2e8f0">
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {{% for item in page_obj %}}
                <tr style="border-bottom:1px solid #e2e8f0;transition:background 0.2s" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                    {rows}
                    
                    {{% if "Status" in table_headers_raw %}}
                    <td style="padding:16px">
                        {{% if item.is_active is not None %}}
                            {{% if item.is_active %}}
                            <span style="background:#dcfce7;color:#166534;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600">Active</span>
                            {{% else %}}
                            <span style="background:#fee2e2;color:#991b1b;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600">Inactive</span>
                            {{% endif %}}
                        {{% else %}}
                            <span style="background:#e0e7ff;color:#3730a3;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600">N/A</span>
                        {{% endif %}}
                    </td>
                    {{% endif %}}
                </tr>
                {{% empty %}}
                <tr>
                    <td colspan="6" style="padding:32px;text-align:center;color:#64748b">
                        <div style="margin-bottom:12px"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></div>
                        <p style="font-size:15px;margin:0">No {title}s found.</p>
                    </td>
                </tr>
                {{% endfor %}}
            </tbody>
        </table>
    </div>

    <!-- Pagination -->
    {{% if page_obj.has_other_pages %}}
    <div style="display:flex;justify-content:center;margin-top:24px;gap:8px">
        {{% if page_obj.has_previous %}}
        <a href="?q={{{{ query }}}}&page={{{{ page_obj.previous_page_number }}}}" style="padding:8px 16px;border:1px solid #e2e8f0;border-radius:6px;color:#475569;text-decoration:none;font-weight:500;transition:all 0.2s" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">Previous</a>
        {{% endif %}}
        <div style="display:flex;align-items:center;padding:0 16px;color:#64748b;font-size:14px">
            Page {{{{ page_obj.number }}}} of {{{{ page_obj.paginator.num_pages }}}}
        </div>
        {{% if page_obj.has_next %}}
        <a href="?q={{{{ query }}}}&page={{{{ page_obj.next_page_number }}}}" style="padding:8px 16px;border:1px solid #e2e8f0;border-radius:6px;color:#475569;text-decoration:none;font-weight:500;transition:all 0.2s" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">Next</a>
        {{% endif %}}
    </div>
    {{% endif %}}
</div>
{{% endblock %}}
"""

add_layout = """{{% extends "webashaApp/base.html" %}}

{{% block content %}}
<style>
    .form-group {{ margin-bottom: 20px; }}
    .form-label {{ display: block; font-weight: 500; margin-bottom: 8px; color: #1e293b; font-size: 14px; line-height: 1.2; padding-top: 4px;}}
    .form-control, .form-select, .django-summernote {{
        width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px;
        font-size: 14px; color: #334155; box-sizing: border-box; transition: 0.2s;
    }}
    .form-control:focus, .form-select:focus {{ border-color: #3b82f6; outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }}
    .form-check-input {{ width: 18px; height: 18px; margin-right: 8px; cursor: pointer; margin-top:2px;}}
    .form-row {{ display: flex; gap: 20px; flex-wrap: wrap; }}
    .form-col {{ flex: 1; min-width: 250px; }}
    
    /* Layout */
    .banner-layout {{ display: flex; flex-direction: column; gap: 24px; width: 100%; }}
    
    /* Content Area */
    .tab-content {{ background: #fff; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }}
</style>

<div style="width:100%">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
        <a href="{{% url 'manage_{plural}' %}}" style="width:36px;height:36px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;color:#64748b;text-decoration:none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
        </a>
        <h2 style="margin:0;font-size:24px;color:#0f172a;font-weight:600">Add {title}</h2>
    </div>

    <form method="post" enctype="multipart/form-data">
        {{% csrf_token %}}
        <div class="banner-layout">
            <div class="tab-content">
                {{% if form.errors %}}
                <div class="alert-styled alert-error" style="margin-bottom: 24px;">
                    <strong>Error:</strong> Please correct the errors below.
                    <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;">
                        {{% for field in form %}}
                            {{% for error in field.errors %}}
                                <li>{{{{ field.label }}}}: {{{{ error }}}}</li>
                            {{% endfor %}}
                        {{% endfor %}}
                        {{% for error in form.non_field_errors %}}
                            <li>{{{{ error }}}}</li>
                        {{% endfor %}}
                    </ul>
                </div>
                {{% endif %}}

                <div class="form-row">
                    {{% for field in form %}}
                    <div class="form-col" style="min-width: calc(50% - 20px); margin-bottom: 20px; {{% if field.name == 'is_active' %}}width:100%;flex:none;{{% endif %}}">
                        {{% if field.name == 'is_active' %}}
                            <hr style="border:0;border-top:1px solid #e2e8f0;margin:24px 0">
                            <label class="form-label" style="display:flex;align-items:center;">
                                {{{{ field }}}}
                                <span style="font-weight:600">Mark as Active immediately</span>
                            </label>
                        {{% else %}}
                            <label class="form-label">
                                {{{{ field.label }}}} {{% if field.field.required %}}<span class="text-danger">*</span>{{% endif %}}
                            </label>
                            {{{{ field }}}}
                            {{% if field.help_text %}}<div class="form-text" style="font-size: 12px; color: #64748b; margin-top: 4px;">{{{{ field.help_text }}}}</div>{{% endif %}}
                        {{% endif %}}
                    </div>
                    {{% endfor %}}
                </div>

                <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:24px">
                    <a href="{{% url 'manage_{plural}' %}}" style="padding:12px 24px;border:1px solid #cbd5e1;background:#fff;color:#475569;border-radius:8px;font-weight:600;text-decoration:none;">Cancel</a>
                    <button type="submit" style="background:#3b82f6;color:white;border:none;padding:12px 24px;border-radius:8px;font-weight:600;cursor:pointer;">SAVE {cap_title}</button>
                </div>
            </div>
        </div>
    </form>
</div>
{{% endblock %}}
"""

target_dir = r"d:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp"

for group in models_data:
    # Compile headers
    headers_html = ""
    for h in group["table_headers"]:
        headers_html += f'<th style="padding:16px;color:#475569;font-weight:600;font-size:13px;text-transform:uppercase;letter-spacing:0.5px">{h}</th>\n                    '
        
    compiled_manage = manage_layout.format(
        title=group["title"],
        singular=group["name_singular"],
        search_placeholder=group["search_placeholder"],
        headers=headers_html.strip(),
        rows=group["table_rows"].strip(),
        table_headers_raw=str(group["table_headers"])
    )
    
    compiled_add = add_layout.format(
        title=group["title"],
        cap_title=group["title"].upper(),
        plural=group["name_plural"]
    )
    
    with open(os.path.join(target_dir, f"manage_{group['name_plural']}.html"), "w") as f:
        f.write(compiled_manage)
        
    with open(os.path.join(target_dir, f"add_{group['name_singular']}.html"), "w") as f:
        f.write(compiled_add)

print("Generated 16 HTML Templates Successfully.")
