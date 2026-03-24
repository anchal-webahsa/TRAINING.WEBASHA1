import os

def fix_paths(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.js'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    new_content = content.replace('"assets/', '"/assets/').replace("'assets/", "'/assets/")
                    
                    if new_content != content:
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Fixed {path}")
                except Exception as e:
                    print(f"Error processing {path}: {e}")

fix_paths('d:/1.webashaProject/webasha-react/src')
