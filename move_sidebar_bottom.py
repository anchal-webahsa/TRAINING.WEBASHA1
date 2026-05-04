import re

path = r'd:\1.webashaProject\webasha-react\src\pages\ExamTemplate.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract Shares & Related Courses
match = re.search(r'(                \{\/\* Shares Mock \*\/\}.*?\{\/\* Course Item 4 \*\/}.*?</div>\n\n                </div>\n)', content, flags=re.DOTALL)
if not match:
    print("Could not find the block.")
    exit(1)

block = match.group(1)

# 2. Delete it from the file completely
content = content.replace(block, '')

# 3. Find the exact bottom insertion point
# We'll insert it right after the Free Red Hat Vanguard banner div closes:
#                     <button className="btn btn-outline-danger fw-bold px-5 py-2 mb-2 bg-white">Enroll Here</button>
#                 </div>

marker = '                    <button className="btn btn-outline-danger fw-bold px-5 py-2 mb-2 bg-white">Enroll Here</button>\n                </div>'
if marker not in content:
    print("Could not find the insertion marker.")
    exit(1)

# 4. Insert at bottom
new_content = content.replace(marker, marker + '\n\n' + block)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Success!")
