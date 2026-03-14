import os
import time

path = r'd:\1.webashaProject\webashaProject\webashaApp\templates\webashaApp\add_ebook.html'
last_mtime = os.stat(path).st_mtime

print(f"Monitoring {path} for changes...")
start_time = time.time()
while time.time() - start_time < 30: # monitor for 30s
    current_mtime = os.stat(path).st_mtime
    if current_mtime != last_mtime:
        print(f"File changed at {time.ctime(current_mtime)}")
        last_mtime = current_mtime
    time.sleep(1)
print("Monitoring complete.")
