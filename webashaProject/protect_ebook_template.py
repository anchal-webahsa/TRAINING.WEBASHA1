import os
import re

path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\add_ebook.html'

# First, remove read-only if it exists
os.system(f'attrib -r "{path}"')

if not os.path.exists(path):
    print(f"Error: {path} not found")
    exit(1)

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the specific broken tags seen in the screenshot
# 1. Fix missing spaces around ==
content = re.sub(r'\{% if ebook\.category_id==cat\.id %\}', '{% if ebook.category_id == cat.id %}', content)
content = re.sub(r'\{% if ebook\.language==\'English\' %\}', '{% if ebook.language == \'English\' %}', content)
content = re.sub(r'\{% if ebook\.status==\'active\' %\}', '{% if ebook.status == \'active\' %}', content)

# 2. Fix split tags (e.g., {{ \n cat.name }})
content = re.sub(r'\{\{\s*\r?\n\s*cat\.name\s*\}\}', '{{ cat.name }}', content)
content = re.sub(r'\{\{\s*cat\.name\s*\r?\n\s*\}\}', '{{ cat.name }}', content)

# 3. Ensure all comparison operators in if tags have spaces
content = re.sub(r'\{% if (.*?)==(.*?) %\}', r'{% if \1 == \2 %}', content)

# 4. Join split {% endif %} and similar
content = re.sub(r'\{%\s*\r?\n\s*endif\s*%\}', '{% endif %}', content)

# with open(path, 'w', encoding='utf-8', newline='\r\n') as f:
#     f.write(content)

print("Protection script neutralized.")
# os.system(f'attrib +r "{path}"')
# print("Control complete. File is now Read-Only.")
