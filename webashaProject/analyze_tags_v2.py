import re
import os

file_path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\base.html'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Full Tag Analysis of base.html:")
for i, line in enumerate(lines):
    # Find all pattern {% something %}
    matches = re.finditer(r'\{%\s*(.*?)\s*%\}', line)
    for m in matches:
        tag_content = m.group(1).strip()
        tag_name = tag_content.split()[0] if tag_content else ""
        print(f"Line {i+1}: Tag='{tag_name}' Content='{tag_content}'")
