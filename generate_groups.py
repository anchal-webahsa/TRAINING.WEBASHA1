import os
import re

base_dir = r"d:\1.webashaProject\webashaProject\webashaApp"

# 1. Update forms.py
forms_path = os.path.join(base_dir, "forms.py")
with open(forms_path, "r", encoding="utf-8") as f:
    forms_content = f.read()

if "class GroupForm" not in forms_content:
    new_form = """
from django.contrib.auth.models import Group
class GroupForm(forms.ModelForm):
    class Meta:
        model = Group
        fields = ['name', 'permissions']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'permissions': forms.SelectMultiple(attrs={'class': 'form-control', 'style': 'height: 300px;'}),
        }
"""
    forms_content += new_form
    with open(forms_path, "w", encoding="utf-8") as f:
        f.write(forms_content)

# 2. Update views.py
views_path = os.path.join(base_dir, "views.py")
with open(views_path, "r", encoding="utf-8") as f:
    views_content = f.read()

if "def add_group(request):" not in views_content:
    new_views = """
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
"""
    views_content += new_views
    with open(views_path, "w", encoding="utf-8") as f:
        f.write(views_content)

# 3. Update urls.py
urls_path = os.path.join(base_dir, "urls.py")
with open(urls_path, "r", encoding="utf-8") as f:
    urls_content = f.read()

if "path('groups/add/'" not in urls_content:
    replacement = """    path("groups/", views.manage_groups, name="manage_groups"),
    path("groups/add/", views.add_group, name="add_group"),
    path("groups/<int:pk>/edit/", views.edit_group, name="edit_group"),"""
    urls_content = urls_content.replace('    path("groups/", views.manage_groups, name="manage_groups"),', replacement)
    with open(urls_path, "w", encoding="utf-8") as f:
        f.write(urls_content)

# 4. Update manage_groups.html template
manage_groups_path = os.path.join(base_dir, "templates", "webashaApp", "manage_groups.html")
with open(manage_groups_path, "r", encoding="utf-8") as f:
    manage_groups_content = f.read()

manage_groups_content = manage_groups_content.replace('/admin/auth/group/add/', "{% url 'add_group' %}")
manage_groups_content = manage_groups_content.replace('/admin/auth/group/{{ group.id }}/change/', "{% url 'edit_group' group.id %}")
manage_groups_content = manage_groups_content.replace('target="_blank"', "")

with open(manage_groups_path, "w", encoding="utf-8") as f:
    f.write(manage_groups_content)

# 5. Create add_group.html
add_group_html = """{% extends 'webashaApp/base.html' %} 

{% block title %}{% if is_edit %}Edit{% else %}Add{% endif %} Group | WebAsha Admin{% endblock %} 

{% block content %}
<style>
    .form-group {
        margin-bottom: 24px;
        width: 100%;
    }
    .form-label {
        display: block;
        font-weight: 500;
        margin-bottom: 8px;
        color: #1e293b;
        font-size: 14px;
    }
    .form-control, .form-select {
        width: 100%;
        padding: 12px;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        font-size: 14px;
        color: #334155;
        box-sizing: border-box;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    .form-control:focus, .form-select:focus {
        border-color: #3b82f6;
        outline: none;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    .form-row {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
    }
    .form-col {
        flex: 1;
        min-width: 280px;
    }
    select[multiple] {
        padding: 8px;
    }
    select[multiple] option {
        padding: 8px 12px;
        border-bottom: 1px solid #f1f5f9;
    }
    select[multiple] option:checked {
        background-color: #e0f2fe linear-gradient(0deg, #e0f2fe 0%, #e0f2fe 100%);
        color: #0369a1;
        font-weight: 500;
    }
</style>

<div style="width:100%">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
        <a href="{% url 'manage_groups' %}" style="width:36px;height:36px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;color:#64748b;text-decoration:none;transition:background 0.2s" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
        </a>
        <h2 style="margin:0;font-size:24px;color:#0f172a;font-weight:600">{% if is_edit %}Manage Access Levels: {{ group.name }}{% else %}Create New User Permission Group{% endif %}</h2>
    </div>

    {% if form.errors %}
    <div class="alert-styled alert-error" style="background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;padding:16px;border-radius:8px;margin-bottom:24px;">
        <strong>Warning:</strong> Please correct the errors below.
    </div>
    {% endif %}

    <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.05);width:100%">
        <form method="post" enctype="multipart/form-data">
            {% csrf_token %}
            
            <h3 style="font-size:18px;font-weight:600;margin-bottom:24px;color:#0f172a;border-bottom:1px solid #e2e8f0;padding-bottom:12px">Group Base Settings</h3>
            
            <div class="form-group">
                <label class="form-label">Role / Group Identifier Name <span style="color:#ef4444">*</span></label>
                {{ form.name }}
                {% if form.name.errors %}<div style="color:#ef4444;font-size:13px;margin-top:4px">{{ form.name.errors }}</div>{% endif %}
            </div>

            <h3 style="font-size:18px;font-weight:600;margin-bottom:24px;margin-top:32px;color:#0f172a;border-bottom:1px solid #e2e8f0;padding-bottom:12px">Granular Access Controls</h3>
            <p style="font-size:13px;color:#64748b;margin-bottom:16px;">Hold down 'Ctrl' (Windows) or 'Command' (Mac) to select or deselect multiple permissions natively.</p>

            <div class="form-group">
                <label class="form-label">Attached Permissions Database <span style="color:#ef4444">*</span></label>
                {{ form.permissions }}
                {% if form.permissions.errors %}<div style="color:#ef4444;font-size:13px;margin-top:4px">{{ form.permissions.errors }}</div>{% endif %}
            </div>

            <div style="display:flex;justify-content:flex-end;gap:12px;padding-top:24px;margin-top:32px;border-top:1px solid #e2e8f0">
                <a href="{% url 'manage_groups' %}" style="padding:12px 24px;border-radius:8px;font-weight:600;text-decoration:none;color:#475569;background:#f8fafc;border:1px solid #e2e8f0;transition:background 0.2s" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='#f8fafc'">Cancel</a>
                <button type="submit" style="padding:12px 24px;border-radius:8px;font-weight:600;color:white;background:#3b82f6;border:none;cursor:pointer;box-shadow:0 1px 2px rgba(59, 130, 246, 0.4);transition:background 0.2s" onmouseover="this.style.background='#2563eb'" onmouseout="this.style.background='#3b82f6'">{% if is_edit %}Save Updates{% else %}Initialize Group{% endif %}</button>
            </div>
        </form>
    </div>
</div>
{% endblock %}
"""

add_group_path = os.path.join(base_dir, "templates", "webashaApp", "add_group.html")
with open(add_group_path, "w", encoding="utf-8") as f:
    f.write(add_group_html)

print("Generated Forms, Views, Urls, and Template for native Groups successfully!")
