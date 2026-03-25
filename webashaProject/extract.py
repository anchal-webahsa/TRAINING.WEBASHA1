import re

with open(r'd:\1.webashaProject\webasha-react\src\components\layout\Header.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Find the Red Hat tab pane
start_str = 'id="pills-02m"'
start = text.find(start_str)
end = text.find('id="pills-03m"', start)

if start != -1 and end != -1:
    with open('redhat_tab.txt', 'w', encoding='utf-8') as out:
        out.write(text[start:end])
    print("Extracted redhat_tab.txt")
else:
    print("Could not find start/end")
