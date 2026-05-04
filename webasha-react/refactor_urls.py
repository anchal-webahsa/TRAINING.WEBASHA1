import os
import re

src_dir = r"d:\1.webashaProject\webasha-react\src"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # Replace hardcoded URLs with environment variable template literals
    pattern1 = r'"http://(?:127\.0\.0\.1|localhost):8000([^"]*)"'
    pattern2 = r"'http://(?:127\.0\.0\.1|localhost):8000([^']*)'"
    pattern3 = r'`http://(?:127\.0\.0\.1|localhost):8000([^`]*)`'
    
    content = re.sub(pattern1, r'`${import.meta.env.VITE_API_URL}\1`', content)
    content = re.sub(pattern2, r'`${import.meta.env.VITE_API_URL}\1`', content)
    content = re.sub(pattern3, r'`${import.meta.env.VITE_API_URL}\1`', content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.js', '.jsx')):
            process_file(os.path.join(root, file))

print("Done.")
