import os
import re

files_to_fix = [
    r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\offline_payments.html',
    r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\ebook_admin_revenue.html',
    r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\ebook_instructor_revenue.html',
    r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\purchase_history.html',
    r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\messages.html',
    r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\base.html'
]

def fix_file(path):              
    if not os.path.exists(path):
        print(f"Skipping: {path} (not found)")
        return
    
    # Remove read-only if it exists
    os.system(f'attrib -r "{path}"')
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix the tags: ensure spaces around == in {% if ... %}
    # We look for {% if something==something %} and replace with {% if something == something %}
    new_content = re.sub(r'\{% if (.*?)==(.*?) %\}', r'{% if \1 == \2 %}', content)
    
    # Also fix other variants like !=, <, >, <=, >=
    new_content = re.sub(r'\{% if (.*?)!=(.*?) %\}', r'{% if \1 != \2 %}', new_content)
    new_content = re.sub(r'\{% if (.*?)<=(.*?) %\}', r'{% if \1 <= \2 %}', new_content)
    new_content = re.sub(r'\{% if (.*?)>=(.*?) %\}', r'{% if \1 >= \2 %}', new_content)
    
    # NEW: Consolidate split {{ ... }} tags
    new_content = re.sub(r'\{\{\s*\n\s*(.*?)\s*\}\}', r'{{ \1 }}', new_content, flags=re.MULTILINE)
    # NEW: Consolidate split {% ... %} tags
    new_content = re.sub(r'\{%\s*\n\s*(.*?)\s*%\}', r'{% \1 %}', new_content, flags=re.MULTILINE)
    
    # Also handle intermediate splits like {{ var \n }}
    new_content = re.sub(r'\{\{\s*(.*?)\s*\n\s*\}\}', r'{{ \1 }}', new_content, flags=re.MULTILINE)
    new_content = re.sub(r'\{%\s*(.*?)\s*\n\s*%\}', r'{% \1 %}', new_content, flags=re.MULTILINE)

    # General cleanup: ensure no tags are split across lines for variable parts
    # This is a bit more aggressive
    def join_tags(match):
        return match.group(0).replace('\n', ' ').replace('\r', '').replace('  ', ' ')
    
    new_content = re.sub(r'\{\{.*?\}\}', join_tags, new_content, flags=re.DOTALL)
    new_content = re.sub(r'\{%.*?%\}', join_tags, new_content, flags=re.DOTALL)
    
    if content != new_content:
        with open(path, 'w', encoding='utf-8', newline='\r\n') as f:
            f.write(new_content)
        print(f"Fixed: {path}")
    else:
        print(f"No changes needed: {path}")
    
    # Make read-only to protect from formatters
    os.system(f'attrib +r "{path}"')
    print(f"Protected (Read-Only): {path}")

if __name__ == "__main__":
    for f in files_to_fix:
        fix_file(f)
