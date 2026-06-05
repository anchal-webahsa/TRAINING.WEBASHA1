# Why Does the Server Stop When You Turn Off Your PC?

Since your server is hosted in the cloud (Oracle Cloud VPS at `144.24.150.39`), it should run 24/7. If it stops when you shut down your computer, it is usually due to one of two reasons:

---

## Reason 1: Starting Django in the SSH Terminal (SIGHUP)
If you log into your server via SSH (using Git Bash, PuTTY, CMD, or the aaPanel terminal page) and start the backend using a command like:
```bash
python manage.py runserver
```
or 
```bash
gunicorn webashaProject.wsgi
```
This process only lives inside that active terminal session. When you turn off your PC, the SSH connection disconnects, sending a "Hang Up" signal (**SIGHUP**) that immediately terminates your Django server.

### How to Fix This:
* **The Best Way:** Start the application directly from the **aaPanel Python Manager UI** instead of the terminal. In the Python Manager popup (as shown in your screenshot), click the green **Start** triangle under the **Operate** column. This runs Django as a background daemon/system service that remains active even when you log out.
* **If starting manually via terminal:** Run the process in the background using `nohup` so it ignores terminal disconnects:
  ```bash
  nohup python manage.py runserver 0.0.0.0:8000 > django_run.log 2>&1 &
  ```

---

## Reason 2: The Server is Running Out of Memory (RAM)
Your Oracle Cloud VPS likely has a limited amount of RAM (e.g., 1GB). When running aaPanel, Nginx, MySQL, and Django simultaneously, the RAM can fill up. 

When the server hits 100% RAM usage, the Linux kernel triggers the **OOM (Out Of Memory) Killer** to protect the system. It automatically terminates the process using the most memory, which is usually your Django/Gunicorn process.

### How to Fix This (Add Swap Memory):
Adding Swap space allows your VPS to use a portion of the hard drive as extra virtual RAM, preventing processes from being killed.

1. Go to **aaPanel** -> **App Store**.
2. Search for and install the **Linux Toolbox** plugin.
3. Open **Linux Toolbox** and go to the **Swap** setting.
4. Set the Swap Size to **2048 MB** (2 GB) or **4096 MB** (4 GB) and click **Apply**.
5. Alternatively, you can check if your server was killed due to low memory by running this command in the aaPanel Terminal:
   ```bash
   dmesg -T | grep -i -E 'oom|kill'
   ```

---

## 🔍 How to Check the Error Log
If the project stops inside Python Manager on its own, you can view the exact crash logs:
1. Open the **Python Manager** in the aaPanel App Store.
2. Next to your project name, click on the **Log** link.
3. Scroll to the bottom of the log file to see the exact error message or crash traceback.
