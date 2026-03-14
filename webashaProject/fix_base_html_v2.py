import os
import re

path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\base.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match the specific multiline if block
pattern = r'<div class="submenu" \{% if request\.resolver_match\.url_name==\x27manage_bootcamps\x27 or\n\s+request\.resolver_match\.url_name==\x27add_bootcamp\x27 or\n\s+request\.resolver_match\.url_name==\x27purchase_history\x27 or\n\s+request\.resolver_match\.url_name==\x27bootcamp_categories\x27 %\}style="display: block;" \{% endif %\}'
replacement = r'<div class="submenu" {% if request.resolver_match.url_name == \x27manage_bootcamps\x27 or request.resolver_match.url_name == \x27add_bootcamp\x27 or request.resolver_match.url_name == \x27purchase_history\x27 or request.resolver_match.url_name == \x27bootcamp_categories\x27 %}style="display: block;"{% endif %}>'

new_content = re.sub(pattern, replacement, content)

if new_content == content:
    # Try a more generic match if the specific one fails
    print("Specific match failed, trying generic match...")
    pattern_generic = r'<div class="submenu" \{% if request\.resolver_match\.url_name==\x27manage_bootcamps\x27 or.*?%\}style="display: block;" \{% endif %\}'
    new_content = re.sub(pattern_generic, replacement, content, flags=re.DOTALL)

if new_content != content:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully replaced multiline if tag in base.html")
else:
    print("Failed to find the tag in base.html")
