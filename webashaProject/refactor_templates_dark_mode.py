import os
import re

template_dir = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp'

replacements = {
    r'background\s*:\s*#fff\b': 'background:var(--card)',
    r'background\s*:\s*#ffffff\b': 'background:var(--card)',
    r'background\s*:\s*#f8fafc\b': 'background:var(--bg)',
    r'background\s*:\s*#f1f5f9\b': 'background:var(--bg)',
    r'color\s*:\s*#0f172a\b': 'color:var(--text)',
    r'color\s*:\s*#1f2937\b': 'color:var(--text)',
    r'color\s*:\s*#334155\b': 'color:var(--text)',
    r'color\s*:\s*#475569\b': 'color:var(--muted)',
    r'color\s*:\s*#64748b\b': 'color:var(--muted)',
    r'color\s*:\s*#94a3b8\b': 'color:var(--muted)',
    r'border\s*:\s*1px solid #e2e8f0\b': 'border:1px solid var(--border)',
    r'border-bottom\s*:\s*1px solid #e2e8f0\b': 'border-bottom:1px solid var(--border)',
    r'border\s*:\s*1px solid #f1f5f9\b': 'border:1px solid var(--border)',
    r'border-bottom\s*:\s*1px solid #f1f5f9\b': 'border-bottom:1px solid var(--border)',
    r'background\s*:\s*#eff6ff\b': 'background:rgba(59, 130, 246, 0.1)',
}

def update_templates():
    for filename in os.listdir(template_dir):
        if filename.endswith('.html'):
            filepath = os.path.join(template_dir, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for pattern, replacement in replacements.items():
                    new_content = re.sub(pattern, replacement, new_content, flags=re.IGNORECASE)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f'Updated {filename}')
            except Exception as e:
                print(f'Skipped {filename} due to error: {e}')

if __name__ == '__main__':
    update_templates()
