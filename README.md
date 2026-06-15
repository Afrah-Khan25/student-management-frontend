# Student Management System — Frontend

React application for managing student records, connected to a Spring Boot backend.

## Tech Stack
- React (Vite)
- Axios

## Features
- Add a new student via form
- View all students in a table
- Edit existing student details
- Delete a student record

## Local Setup

```bash
npm install
npm run dev
```
Runs on http://localhost:5173

Make sure the backend is running on http://localhost:8081 before starting this app.

## Project Structure
```
src/
├── api/studentApi.js       # Axios calls to backend
├── components/
│   ├── StudentForm.jsx     # Add/Edit form
│   └── StudentTable.jsx    # Display table
├── App.jsx                  # Main component
└── App.css                  # Styling
```