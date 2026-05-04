import os

base_dir = r"d:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp"
manage_admins_path = os.path.join(base_dir, "manage_admins.html")

with open(manage_admins_path, "r", encoding="utf-8") as f:
    content = f.read()

# Create manage_users.html
users_content = content.replace("Admin List", "User List")
users_content = users_content.replace("{% url 'add_admin' %}", "#") # No add user yet unless we configure it
users_content = users_content.replace("Add New Admin", "Add New User")
users_content = users_content.replace("admins", "users")
users_content = users_content.replace("admin", "user")
# Fix specific replacements
users_content = users_content.replace("User List | Usery", "User List | Academy")

# Write manage_users.html
with open(os.path.join(base_dir, "manage_users.html"), "w", encoding="utf-8") as f:
    f.write(users_content)

# Create manage_groups.html
groups_content = content.replace("Admin List", "Group List")
groups_content = groups_content.replace("{% url 'add_admin' %}", "#")
groups_content = groups_content.replace("Add New Admin", "Add New Group")
groups_content = groups_content.replace("admins", "groups")
groups_content = groups_content.replace("admin", "group")
groups_content = groups_content.replace("Group List | Groupy", "Group List | Academy")

# For groups, we only have 'name' primarily, not 'Phone', etc.
# We will just write groups.html as the same layout and it evaluates group.get_full_name loosely (or fails safely).
# Better to supply a clean custom template for groups.
clean_group_html = """{% extends 'webashaApp/base.html' %} {% load static %} 
{% block title %}Group List | Academy{% endblock %} 
{% block topbar_title %}Group List{% endblock %} 
{% block content %} 
<div class="user-dashboard" style="padding: 24px; background: #f8fafc; min-height: calc(100vh - 70px);"> 
    <div class="page-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;"> 
        <h2 style="font-size: 20px; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 8px;"> 
            <i class="fas fa-users" style="color: #64748b;"></i> Group List 
        </h2> 
        <a href="/admin/auth/group/add/" target="_blank" class="add-btn" style="background: white; border: 1px solid #e2e8f0; padding: 10px 16px; border-radius: 8px; font-size: 14px; font-weight: 500; color: #1e293b; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: all 0.2s; text-decoration: none;"> 
            <span style="font-size: 18px; line-height: 1;">+</span> Add New Group 
        </a> 
    </div> 
    
    <div class="table-container" style="background: white; border-radius: 12px; border: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0,0,0,0.02); overflow: hidden;"> 
        <table style="width: 100%; border-collapse: collapse; text-align: left;"> 
            <thead> 
                <tr style="background: #f8fafc; border-bottom: 1px solid #f1f5f9;"> 
                    <th style="padding: 16px 24px; font-size: 12px; font-weight: 700; color: #0f172a; text-transform: none; width: 50px;"> #</th> 
                    <th style="padding: 16px 24px; font-size: 12px; font-weight: 700; color: #0f172a; text-transform: none;"> Group Name</th> 
                    <th style="padding: 16px 24px; font-size: 12px; font-weight: 700; color: #0f172a; text-transform: none;"> Total Users</th> 
                    <th style="padding: 16px 24px; font-size: 12px; font-weight: 700; color: #0f172a; text-transform: none; text-align: right;"> Options</th> 
                </tr> 
            </thead> 
            <tbody> 
                {% for group in groups %} 
                <tr style="border-bottom: 1px solid #f1f5f9; transition: background 0.2s;"> 
                    <td style="padding: 16px 24px; font-size: 14px; color: #1e293b; font-weight: 700;">{{ forloop.counter }}</td> 
                    <td style="padding: 16px 24px; font-size: 14px; color: #1e293b; font-weight: 600;">{{ group.name }}</td> 
                    <td style="padding: 16px 24px; font-size: 14px; color: #1e293b;">{{ group.user_count }} Users </td> 
                    <td style="padding: 16px 24px; text-align: right;"> 
                       <a href="/admin/auth/group/{{ group.id }}/change/" target="_blank" style="color: #3b82f6; text-decoration: none; font-size: 13px; font-weight: 500;">Manage Permissions</a>
                    </td> 
                </tr> 
                {% empty %} 
                <tr> 
                    <td colspan="4" style="padding: 48px; text-align: center; color: #64748b;">No groups found. </td> 
                </tr> 
                {% endfor %} 
            </tbody> 
        </table> 
        <div style="padding: 16px 24px; border-top: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"> Showing {{ groups|length }} of {{ groups|length }} data </div> 
    </div> 
</div> 
{% endblock %}
"""

with open(os.path.join(base_dir, "manage_groups.html"), "w", encoding="utf-8") as f:
    f.write(clean_group_html)
    
print("Successfully generated manage_users.html and manage_groups.html!")
