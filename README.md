# TechnoNews

A technology news site built with Next.js (frontend) and Django REST + MongoDB (backend).

## Local Development

1. Clone repo
2. `docker-compose up --build`
3. Frontend: http://localhost:3000
4. API: http://localhost:8000/api/articles/

## Deployment

- Push to GitHub (version control)
- Configure Render:
  - MongoDB via external add-on or Atlas
  - Two services: backend (build from `backend/`), frontend (build from `frontend/`)
- Set environment variables (`DJANGO_SECRET_KEY`, `MONGO_URI`, `MONGO_DB_NAME`)