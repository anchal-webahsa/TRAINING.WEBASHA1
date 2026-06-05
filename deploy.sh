#!/bin/bash
# -----------------------------------------------------------------------------
# WebAsha One-Click Deployment Script
# Description: Pulls latest code from GitHub, deploys React frontend, runs Django
#              migrations, and restarts the backend process on aaPanel.
# -----------------------------------------------------------------------------

# Exit immediately if any command fails
set -e

# Configuration (Verify these paths match your server configuration)
PROJECT_ROOT="/www/wwwroot/backend_api/webashaProject"
FRONTEND_WEBROOT="/www/wwwroot/support.webasha.com"

echo "=================================================="
echo "🚀 Starting Deployment Process..."
echo "=================================================="

# 1. Navigate to the Git repository root
cd "$PROJECT_ROOT"

# 2. Pull the latest commits from GitHub
echo "Step 1: Pulling latest changes from GitHub..."
git stash || true
git pull origin main

# 3. Deploy Frontend Assets
echo "Step 2: Checking for built React assets..."
if [ -d "$PROJECT_ROOT/webasha-react/dist" ]; then
    echo "Deploying React build to web root ($FRONTEND_WEBROOT)..."
    # Create webroot if it doesn't exist
    mkdir -p "$FRONTEND_WEBROOT"
    # Copy compiled files over
    cp -r "$PROJECT_ROOT/webasha-react/dist/"* "$FRONTEND_WEBROOT/"
    echo "✅ Frontend deployed successfully!"
else
    echo "⚠️ Warning: webasha-react/dist directory not found. Please build locally and push to Git first."
fi

# 4. Detect Python Virtual Environment and Run Django Tasks
echo "Step 3: Finding Python environment and running backend tasks..."

# Find the virtual environment directory created by aaPanel
VENV_DIR=$(find . -maxdepth 2 -type d -name "*_venv" | head -n 1)

if [ -n "$VENV_DIR" ]; then
    PYTHON_EXEC="$VENV_DIR/bin/python"
    echo "Found virtual environment: $VENV_DIR"
else
    PYTHON_EXEC="python"
    echo "Warning: No virtual environment folder found. Using default system python."
fi

# Run migrations
echo "Running database migrations..."
$PYTHON_EXEC manage.py migrate

# Collect static files
echo "Collecting static files..."
$PYTHON_EXEC manage.py collectstatic --noinput

# 5. Restart Django Gunicorn Project via systemd
echo "Step 4: Restarting Django Gunicorn service..."
if systemctl list-units --type=service | grep -q "webasha_api_pymanager"; then
    sudo systemctl restart webasha_api_pymanager
    echo "✅ Django service restarted successfully!"
else
    echo "⚠️ Warning: systemd service 'webasha_api_pymanager' not found. Please restart via aaPanel Python Manager UI."
fi

echo "=================================================="
echo "🎉 Deployment Completed Successfully!"
echo "=================================================="
