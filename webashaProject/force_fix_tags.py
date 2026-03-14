import os
import re

path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\bootcamp_categories.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix {{ cat.name }} split
content = re.sub(r'\{\{\s*\n\s*cat\.name\s*\}\}', '{{ cat.name }}', content)
# Just in case it's split differently
content = re.sub(r'\{\{\s*cat\.name\s*\n\s*\}\}', '{{ cat.name }}', content)
# Fix the one I see in view_file: {{ \n cat.name }}
content = re.sub(r'\{\{\s*\r?\n\s*cat\.name\s*\}\}', '{{ cat.name }}', content)

# Fix options-trigger onclick split
content = re.sub(r'onclick="toggleDropdown\(event,\s*\r?\n\s*\'\{\{\s*cat\.id\s*\}\}\'\)"', 'onclick="toggleDropdown(event, \'{{ cat.id }}\')"', content)

# General rule: find {{ ... }} that are split by newlines and join them
def join_tags(match):
    return match.group(0).replace('\n', ' ').replace('\r', ' ')

content = re.sub(r'\{\{.*?\}\}', join_tags, content, flags=re.DOTALL)
content = re.sub(r'\{%.*?%\}', join_tags, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)

print("SUCCESS: Forced single-line tags in bootcamp_categories.html")
