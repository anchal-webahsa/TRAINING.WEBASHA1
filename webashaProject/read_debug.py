import os

file_path = r'd:\1.webashaProject\webashaProject\debug_output.txt'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-16le') as f:
        print(f.read())
else:
    print("File not found.")
