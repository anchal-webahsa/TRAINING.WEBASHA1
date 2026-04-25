import re

path = r'd:\1.webashaProject\webashaProject\webashaApp\models.py'
with open(path, 'r') as f:
    content = f.read()

# Pattern to find ExamReview class and its first field
pattern = r'(class ExamReview\(models\.Model\):\n\s+exam = models\.ForeignKey\(Exam, related_name=\'reviews\', on_delete=models\.CASCADE\)\n)'
replacement = r'\1    title = models.CharField(max_length=255, blank=True, help_text="e.g. Perfect Exam Blueprint")\n'

new_content = re.sub(pattern, replacement, content)

if new_content != content:
    with open(path, 'w') as f:
        f.write(new_content)
    print("Successfully updated models.py")
else:
    print("Could not find the target pattern in models.py")
    # Try with tabs just in case
    pattern_tabs = r'(class ExamReview\(models\.Model\):\n\texam = models\.ForeignKey\(Exam, related_name=\'reviews\', on_delete=models\.CASCADE\)\n)'
    replacement_tabs = r'\1\ttitle = models.CharField(max_length=255, blank=True, help_text="e.g. Perfect Exam Blueprint")\n'
    new_content_tabs = re.sub(pattern_tabs, replacement_tabs, content)
    if new_content_tabs != content:
        with open(path, 'w') as f:
            f.write(new_content_tabs)
        print("Successfully updated models.py using tabs")
    else:
        print("Still could not find the target pattern")
