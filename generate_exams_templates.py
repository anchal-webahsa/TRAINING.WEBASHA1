import os

base_dir = r"d:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp"

# 1. Update base.html Sidebar
base_path = os.path.join(base_dir, "base.html")
with open(base_path, "r", encoding="utf-8") as f:
    base_content = f.read()

if "manage_exams" not in base_content:
    injection = """
                    <a class="nav-link {% if request.resolver_match.url_name == 'manage_exams' %}active{% endif %}" href="{% url 'manage_exams' %}">
                        <span class="nav-icon"><svg><use href="#icon-file"></use></svg></span>Exams
                    </a>"""
    # Find a good place to inject. Usually around "manage_vouchers"
    target = """<a class="nav-link {% if request.resolver_match.url_name == 'manage_vouchers' %}active{% endif %}" href="{% url 'manage_vouchers' %}">"""
    
    if target in base_content:
        base_content = base_content.replace(target, injection.strip() + "\n                    " + target)
        with open(base_path, "w", encoding="utf-8") as f:
            f.write(base_content)

# 2. Create manage_exams.html
manage_exams_html = """{% extends 'webashaApp/base.html' %}
{% load static %}
{% block title %}Manage Exams | Academy Admin{% endblock %}
{% block topbar_title %}Manage Exams{% endblock %}

{% block content %}
<div class="user-dashboard" style="padding: 24px; background: #f8fafc; min-height: calc(100vh - 70px);">
    <div class="page-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h2 style="font-size: 20px; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-file-alt" style="color: #64748b;"></i> Exams Registry
        </h2>
        <a href="{% url 'add_exam' %}" class="add-btn" style="background: white; border: 1px solid #e2e8f0; padding: 10px 16px; border-radius: 8px; font-size: 14px; font-weight: 500; color: #1e293b; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: all 0.2s; text-decoration: none;">
            <span style="font-size: 18px; line-height: 1;">+</span> Add New Exam
        </a>
    </div>

    {% if messages %}
    <div class="messages" style="margin-bottom: 24px;">
        {% for message in messages %}
        <div class="alert-styled alert-{{ message.tags }}" style="padding: 16px; border-radius: 8px; margin-bottom: 8px; font-weight: 500; {% if message.tags == 'success' %}background:#f0fdf4;color:#166534;border:1px solid #bbf7d0;{% else %}background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;{% endif %}">
            {{ message }}
        </div>
        {% endfor %}
    </div>
    {% endif %}

    <div class="table-container" style="background: white; border-radius: 12px; border: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0,0,0,0.02); overflow: hidden;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
                <tr style="background: #f8fafc; border-bottom: 1px solid #f1f5f9;">
                    <th style="padding: 16px 24px; font-size: 12px; font-weight: 700; color: #0f172a;">Exam Code</th>
                    <th style="padding: 16px 24px; font-size: 12px; font-weight: 700; color: #0f172a;">Title</th>
                    <th style="padding: 16px 24px; font-size: 12px; font-weight: 700; color: #0f172a;">Price</th>
                    <th style="padding: 16px 24px; font-size: 12px; font-weight: 700; color: #0f172a;">Status</th>
                    <th style="padding: 16px 24px; font-size: 12px; font-weight: 700; color: #0f172a; text-align: right;">Options</th>
                </tr>
            </thead>
            <tbody>
                {% for item in exams %}
                <tr style="border-bottom: 1px solid #f1f5f9; transition: background 0.2s;">
                    <td style="padding: 16px 24px; font-size: 14px; font-weight: 700; color: #3b82f6;">{{ item.exam_code }}</td>
                    <td style="padding: 16px 24px; font-size: 14px; color: #1e293b; font-weight: 600;">{{ item.title }}</td>
                    <td style="padding: 16px 24px; font-size: 14px; color: #475569;">${{ item.price }}</td>
                    <td style="padding: 16px 24px;">
                        {% if item.is_active %}
                        <span style="background:#f0fdf4;color:#166534;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600">Active</span>
                        {% else %}
                        <span style="background:#fef2f2;color:#991b1b;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600">Hidden</span>
                        {% endif %}
                    </td>
                    <td style="padding: 16px 24px; text-align: right;">
                        <a href="{% url 'edit_exam' item.id %}" style="display:inline-flex;padding:6px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;color:#334155;font-size:13px;font-weight:500;text-decoration:none;align-items:center;transition:all 0.2s">Edit</a>
                    </td>
                </tr>
                {% empty %}
                <tr>
                    <td colspan="5" style="padding: 48px; text-align: center; color: #64748b;">No Exams configured yet.</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
</div>
{% endblock %}
"""
with open(os.path.join(base_dir, "manage_exams.html"), "w", encoding="utf-8") as f:
    f.write(manage_exams_html)

# 3. Create add_exam.html
add_exam_html = """{% extends 'webashaApp/base.html' %}
{% load static %}
{% block title %}{% if is_edit %}Edit{% else %}Add{% endif %} Exam | Academy Admin{% endblock %}
{% block content %}
<style>
    .form-group { margin-bottom: 24px; width: 100%; }
    .form-label { display: block; font-weight: 500; margin-bottom: 8px; color: #1e293b; font-size: 14px; }
    .form-control, .form-select, .form-check-input { width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; color: #334155; }
    .form-control:focus { border-color: #3b82f6; outline: none; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
    .form-check-input { width: auto; }
</style>
<div style="width:100%">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
        <a href="{% url 'manage_exams' %}" style="width:36px;height:36px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;color:#64748b;text-decoration:none;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg></a>
        <h2 style="margin:0;font-size:24px;color:#0f172a;font-weight:600">{% if is_edit %}Update Exam: {{ exam.title }}{% else %}Register Global Exam{% endif %}</h2>
    </div>
    {% if form.errors %}
    <div style="background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;padding:16px;border-radius:8px;margin-bottom:24px;">Please review the form errors closely.</div>
    {% endif %}
    <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.05);width:100%">
        <form method="post" enctype="multipart/form-data">
            {% csrf_token %}
            {{ form.media }}
            <h3 style="font-size:18px;font-weight:600;margin-bottom:24px;border-bottom:1px solid #e2e8f0;padding-bottom:12px">Exam Details</h3>
            
            <div style="display:flex;gap:24px;">
                <div class="form-group" style="flex:1;">
                    <label class="form-label">Exam Title <span style="color:red">*</span></label>
                    {{ form.title }}
                </div>
                <div class="form-group" style="flex:1;">
                    <label class="form-label">Official Exam Code <span style="color:red">*</span></label>
                    {{ form.exam_code }}
                </div>
            </div>

            <div style="display:flex;gap:24px;">
                <div class="form-group" style="flex:1;">
                    <label class="form-label">Pricing ($) <span style="color:red">*</span></label>
                    {{ form.price }}
                </div>
                <div class="form-group" style="flex:1;">
                    <label class="form-label">Display Order (0 is first) <span style="color:red">*</span></label>
                    {{ form.order }}
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Thumbnail Image (Optional)</label>
                {{ form.image }}
            </div>

            <div class="form-group">
                <label class="form-label">Full Description (HTML Supported) <span style="color:red">*</span></label>
                {{ form.description }}
            </div>

            <div class="form-group" style="display:flex;align-items:center;gap:12px">
                {{ form.is_active }}
                <label class="form-label" style="margin:0;cursor:pointer">Exam is globally Active and Visibile on Frontend</label>
            </div>

            <div style="display:flex;justify-content:flex-end;gap:12px;padding-top:24px;margin-top:32px;border-top:1px solid #e2e8f0">
                <a href="{% url 'manage_exams' %}" style="padding:12px 24px;border-radius:8px;font-weight:600;text-decoration:none;color:#475569;background:#f8fafc;border:1px solid #e2e8f0;">Cancel</a>
                <button type="submit" style="padding:12px 24px;border-radius:8px;font-weight:600;color:white;background:#3b82f6;border:none;cursor:pointer;">{% if is_edit %}Save Updates{% else %}Publish Exam{% endif %}</button>
            </div>
        </form>
    </div>
</div>
{% endblock %}
"""
with open(os.path.join(base_dir, "add_exam.html"), "w", encoding="utf-8") as f:
    f.write(add_exam_html)

print("Generated manage_exams.html, add_exam.html templates and injected base.html sidebar!")
