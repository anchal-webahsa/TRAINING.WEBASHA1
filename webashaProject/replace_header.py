import re
import os

filepath = r'd:\1.webashaProject\webasha-react\src\components\layout\Header.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import if not present
if "import MegaMenu from" not in content:
    content = content.replace('import { Link } from "react-router-dom";', 'import { Link } from "react-router-dom";\nimport MegaMenu from "./MegaMenu";')

# Find the start of the course wrapper
start_str = '<div className="course-dropdown-wraper">'
start_idx = content.find(start_str)

if start_idx != -1:
    # Track divs to find the matching closing div
    i = start_idx
    div_count = 0
    in_tag = False
    
    while i < len(content):
        # Extremely basic counting for this specific well-formed react return
        if content[i:i+4] == '<div':
            div_count += 1
            i += 4
        elif content[i:i+6] == '</div>':
            div_count -= 1
            if div_count == 0:
                end_idx = i + 6
                break
            i += 6
        else:
            i += 1
            
    # Replace it
    new_content = content[:start_idx] + '<MegaMenu />' + content[end_idx:]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replaced course-dropdown-wraper with <MegaMenu />")
else:
    print("Could not find start string!")
