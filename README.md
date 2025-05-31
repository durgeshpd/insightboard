# 🎯 InsightBoard Dashboard

A full-stack analytics dashboard for visualizing exam results using Node.js, Express, PostgreSQL, React, and Chart.js.

---

## 📦 Tech Stack

### 🔧 Backend
- **Node.js** – JavaScript runtime for server-side logic
- **Express.js** – Web framework for creating RESTful APIs
- **PostgreSQL** – Relational database to store users and exams
- **pg** – Node.js client for PostgreSQL
- **dotenv** – Load environment variables
- **cors** – Enable Cross-Origin Resource Sharing

### 💻 Frontend
- **React** – UI library for building user interfaces
- **Axios** – Promise-based HTTP client for API communication
- **Chart.js + react-chartjs-2** – For rendering Pie and Bar charts
- **React Router DOM** – Handles client-side routing

---

## 🧠 Features

### 🔹 Backend API (Node + Express + PostgreSQL)
- `GET /api/users` – Fetch all users
- `GET /api/exams` – Fetch all exams with user info
- `GET /api/analytics` – Returns:
  - Total exams
  - Passed exams
  - Failed exams
  - Average score

### 🔹 Frontend (React)
- **User Table** – Displays all users
- **Exam Table** – Displays exam scores with user info and status
- **Analytics Charts** – Visualizes:
  - 📊 Pass/Fail distribution (Pie Chart)
  - 📈 Total, Passed, Failed exams (Bar Chart)

---

## 🚀 Getting Started

### 📁 Prerequisites
- Node.js
- PostgreSQL

### 🔧 Backend Setup
1. Clone the repository
2. Go to `/backend` folder
3. Create a `.env` file and add:
PG_URI=your_postgres_connection_string
PORT=5000

4. Install dependencies:

- npm install
Start the server:

- npm run dev

💻 Frontend Setup
Go to /frontend folder

Install dependencies:

- npm install
Start the development server:

- npm run dev

📊 Sample Charts
✅ Pie Chart – Passed vs Failed

📊 Bar Chart – Total Exams, Passed, Failed
