import re
import os

file_path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\base.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all template tags
tags = re.findall(r'\{%\s*(\w+)', content)
print("Tags found in base.html:")
print(set(tags))

# Find potential typos (tags not followed by space or end of tag)
suspicious = re.findall(r'\{%[^\s].*?%\}', content)
if suspicious:
    print("\nSuspicious tags (no space after {%):")
    for s in suspicious:
        print(s)

# Find all blocks and their ends to check for balance
blocks = re.findall(r'\{%\s*(if|for|block|with|comment|spaceless)', content)
endblocks = re.findall(r'\{%\s*end(if|for|block|with|comment|spaceless)', content)
print(f"\nBlocks: {len(blocks)}, EndBlocks: {len(endblocks)}")
if len(blocks) != len(endblocks):
    from collections import Counter
    print("Block counts:", Counter(blocks))
    print("Endblock counts:", Counter(endblocks))
