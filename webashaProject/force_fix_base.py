import os

file_path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\base.html'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = 0
for i in range(len(lines)):
    if skip > 0:
        skip -= 1
        continue
        
    line = lines[i]
    
    # Fix Bootcamp submenu
    if '<div class="submenu" {% if request.resolver_match.url_name==\'manage_bootcamps\' or' in line:
        new_lines.append('                    <div class="submenu" {% if request.resolver_match.url_name == \'manage_bootcamps\' or request.resolver_match.url_name == \'add_bootcamp\' or request.resolver_match.url_name == \'purchase_history\' or request.resolver_match.url_name == \'bootcamp_categories\' %}style="display: block;"{% endif %}>\n')
        skip = 3
        continue
        
    # Fix Tutor Booking submenu
    if '<div class="submenu" {% if request.resolver_match.url_name==\'tutor_subjects\' or' in line:
        new_lines.append('                    <div class="submenu" {% if request.resolver_match.url_name == \'tutor_subjects\' or request.resolver_match.url_name == \'tutor_categories\' %}style="display: block;"{% endif %}>\n')
        skip = 1
        continue
        
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Forced fix applied to base.html")
