# Git-Based One-Click Deployment Guide

Using GitHub to update your website is the **correct, safest, and most efficient way** to manage updates. Instead of manually zipping and uploading folders, you can build your frontend locally, push it to GitHub, and run a single command on your server to update the entire stack.

---

## 🛠️ How it Works

The workflow is split into two parts:

### Part 1: On Your Local Computer (Your PC)
Whenever you make updates to the website:
1. **Build the Frontend:** Open your terminal in the `webasha-react` folder and compile the production build:
   ```bash
   npm run build
   ```
   *(This updates the files inside the `webasha-react/dist` folder).*
2. **Push to GitHub:** Commit your code changes and the newly compiled build, then push them:
   ```bash
   git add .
   git commit -m "Update website features"
   git push origin main
   ```

---

### Part 2: On the Server (aaPanel)
We have created a deployment script named `deploy.sh` at the root of your project. This script:
1. Navigates to your project directory.
2. Pulls the latest changes from your GitHub repository.
3. Automatically copies the built frontend files (`webasha-react/dist/*`) into your active web directory.
4. Detects your Django virtual environment and runs database migrations.
5. Collects Django admin static files.
6. Restarts the Django service to apply all updates.

---

## 🚀 How to Run the Deployment on the Server

You have two easy ways to run the deployment script:

### Option A: The 1-Click Method (Via aaPanel Cron - Recommended)
You can configure a button in aaPanel that lets you deploy in one click without using a terminal:
1. In aaPanel, click on the **Cron** tab in the left-hand menu.
2. Create a new task:
   * **Type of Task:** `Shell Script`
   * **Name of Task:** `Deploy Website Updates`
   * **Execution Cycle:** Set it to `N Minutes` -> `30` (or any long duration; we will trigger it manually).
   * **Script Content:** Paste the following command:
     ```bash
     bash /www/wwwroot/backend_api/webashaProject/deploy.sh
     ```
3. Click **Add Task**.
4. **How to update:** Whenever you push changes to GitHub, go to your **Cron** list in aaPanel and click **Execute** next to this task. The server will pull your updates and apply them automatically in seconds! You can view the logs to see the success message.

### Option B: The SSH Terminal Method
If you are logged into your server terminal via SSH:
1. Navigate to your project folder:
   ```bash
   cd /www/wwwroot/backend_api/webashaProject/
   ```
2. Make sure the script has execution permissions (you only need to run this command once):
   ```bash
   chmod +x deploy.sh
   ```
3. Run the script:
   ```bash
   ./deploy.sh
   ```
