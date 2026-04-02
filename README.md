# WebAsha Technologies - Full Stack Learning Management System

This project is a full-stack web application designed for WebAsha Technologies. It features a modern React (Vite) frontend and a robust Django (DRF) backend, integrating a dynamic student placement management system, a course catalog, and an administrative dashboard.

---

## 🚀 Key Features

- **Dynamic Placements**: Real-time management of student placement records, statistics, and hiring partners via the Django Admin.
- **Course Catalog**: Interactive course browsing with category-based filtering.
- **Admin Dashboard**: Comprehensive management interface for courses, ebooks, instructors, and student enquiries.
- **Responsive Design**: Premium UI with dark mode support and modern micro-animations.

---

## 🛠️ Tech Stack

- **Frontend**: React 19 (Vite), Axios, Bootstrap 5, React Slick.
- **Backend**: Django 5.x, Django REST Framework, MySQL (Production) / SQLite (Dev).
- **Deployment**: Nginx (Reverse Proxy), Gunicorn (App Server), SSL (Let's Encrypt).

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18+)
- Python 3.10+
- MySQL Server (Ensure `webasha_db` exists)

### Quick Start
You can launch both the frontend and backend concurrently using a single command from the React root:

```bash
cd webasha-react
npm install
npm run start:all
```

*Note: The `start:all` script handles starting the React dev server on port 5173 and the Django server on port 8000.*

---

## 📄 Managing Content (Admin)

To manage dynamic content, log into the Administrative Dashboard at:
**URL**: `http://localhost:8000/admin/`

### Adding Placed Students
1.  Navigate to **Placed Students** -> **Add Placed Student**.
2.  Fill in the student's name, course, role, company, and package.
3.  Set the **Order** if you want them to appear in a specific sequence.
4.  Save and refresh the frontend "Placed Students" page to see the update.

### Managing Hiring Partners
- Add/Update logos under the **Hiring Partners** section in the admin.

---

## 🌐 API Documentation

The backend provides the following key endpoints:

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/placements/` | `GET` | Fetches all student placements, stats, and partners. |
| `/api/courses/` | `GET` | Lists all active courses. |
| `/api/enquiry/` | `POST` | Submits a new lead generation form. |

---

## 🚢 Production Deployment

For detailed production setup instructions using Nginx and Gunicorn, please consult the **[Deployment Guide](./.gemini/antigravity/brain/32ac419b-36cc-4874-96ea-ea627767668d/deployment_guide.md)**.

### Build Assets
Before deploying, always build your frontend assets:
```bash
cd webasha-react
npm run build
```

---

## 📝 Maintenance

- **Static Files**: Run `python manage.py collectstatic` after updating CSS/Images in the backend.
- **Migrations**: Always run `python manage.py makemigrations` and `python manage.py migrate` after updating `models.py`.
