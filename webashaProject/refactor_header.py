import re

with open(r'd:\1.webashaProject\webasha-react\src\components\layout\Header.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Add imports
if "DynamicCourseColumns" not in text:
    text = text.replace('import { Link } from "react-router-dom";', 'import { Link } from "react-router-dom";\nimport { useState, useEffect } from "react";\nimport DynamicCourseColumns from "./DynamicCourseColumns";')

# Add fetch logic right after `export default function Header() {`
fetch_logic = """
  const [megaMenuData, setMegaMenuData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/mega-menu/')
      .then(res => res.json())
      .then(data => setMegaMenuData(data || []))
      .catch(err => console.error(err));
  }, []);
"""
if "setMegaMenuData" not in text:
    text = text.replace('export default function Header() {', 'export default function Header() {\n' + fetch_logic)


# Now parse and replace the columns
lines = text.split('\n')
out = []
i = 0

current_tab_id = None
in_course_tabs_row = False
skip_div_count = 0
in_skip_mode = False
injected_dynamic = False

while i < len(lines):
    line = lines[i]
    
    # Track which tab pane we are in
    match = re.search(r'id="pills-(\w+)"', line)
    if match and "tabpanel" in lines[i+1]:
        current_tab_id = match.group(1)
        injected_dynamic = False # Reset for new tab pane

    if 'className="course-tabs-row"' in line:
        in_course_tabs_row = True
    
    if in_course_tabs_row and '<div className="column">' in line and i+1 < len(lines) and '<h5>' in lines[i+1]:
        # Start skipping this block
        in_skip_mode = True
        skip_div_count = 1
        
        # Inject the dynamic component here if we haven't already for this tab
        if not injected_dynamic and current_tab_id:
            out.append(f'                                      <DynamicCourseColumns tabId="{current_tab_id}" megaMenuData={{megaMenuData}} />')
            injected_dynamic = True
            
        i += 1
        continue
        
    if in_skip_mode:
        if '<div' in line:
            # Count how many <divs open on this line (naive but works for this formatted HTML)
            skip_div_count += line.count('<div')
        if '</div' in line:
            skip_div_count -= line.count('</div')
            if skip_div_count <= 0:
                in_skip_mode = False
        i += 1
        continue
        
    if in_course_tabs_row and line.strip() == '</div>' and not in_skip_mode:
        # We might have left the course-tabs-row. It has exactly matching div.
        # But to be safe, we just let it copy.
        pass

    out.append(line)
    i += 1

with open(r'd:\1.webashaProject\webashaProject\Header_new.jsx', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
    print("Wrote parsed output to Header_new.jsx temporarily for safety.")
