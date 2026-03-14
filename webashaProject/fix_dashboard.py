
import os

path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\dashboard.html'
with open(path, 'r') as f:
    content = f.read()

# Fix the template tags
content = content.replace('{{ revenue_data| safe }', '{{ revenue_data|safe }}')
content = content.replace('{{ status_data| safe }', '{{ status_data|safe }}')

# Also ensure trailing commas for JS objects if needed
# Actually, let's just do a more robust replacement for the whole logic

with open(path, 'w') as f:
    f.write(content)

print("Fixed dashboard.html")
