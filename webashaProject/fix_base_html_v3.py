import os

path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\base.html'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = 0
found = False

for i in range(len(lines)):
    if skip > 0:
        skip -= 1
        continue
    
    line = lines[i]
    if '<div class="submenu" {% if request.resolver_match.url_name==\'manage_bootcamps\' or' in line:
        # We found the start of the multiline if
        new_line = '                    <div class="submenu" {% if request.resolver_match.url_name == \'manage_bootcamps\' or request.resolver_match.url_name == \'add_bootcamp\' or request.resolver_match.url_name == \'purchase_history\' or request.resolver_match.url_name == \'bootcamp_categories\' %}style="display: block;"{% endif %}>\n'
        new_lines.append(new_line)
        skip = 3 # Skip the next 3 lines (110, 111, 112)
        found = True
        print(f"Replaced multiline if starting at line {i+1}")
    else:
        new_lines.append(line)

if found:
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Successfully updated base.html")
else:
    print("Could not find the target line in base.html")
    # Debug: print the line that was expected
    # print(repr(lines[108])) # Line 109 is index 108
