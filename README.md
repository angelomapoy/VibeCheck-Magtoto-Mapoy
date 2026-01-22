```md
# 🚦 VibeCheck 411L

A lightweight **Node.js + Express** web application that delivers
developer humor, mood-based feedback, and interactive API responses.
Built as a **CPE 411L** project demonstrating RESTful APIs and frontend–backend interaction.

---

## 📌 Project Overview

**VibeCheck 411L** is a simple full-stack web app where users can:
- Get random **fortunes** and **programming jokes**
- Check their current **coding mood**
- Interact with a live **smash counter**
- Unlock a **secret endpoint** for bonus vibes

The project focuses on **clarity, simplicity, and proper Git workflow**.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **API Format:** JSON
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```

VibeCheck-Magtoto-Mapoy/
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   └── app.js
│
└── README.md

````

---

## 🚀 How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
````

### 2️⃣ Start the backend server

```bash
node server.js
```

Server will run at:

```
http://localhost:3000
```

### 3️⃣ Open the frontend

Open `index.html` in your browser
(or use Live Server if available)

---

## 🔌 API Endpoints

| Method | Endpoint                                | Description                |
| ------ | --------------------------------------- | -------------------------- |
| GET    | `/api/fortune`                          | Returns a random fortune   |
| GET    | `/api/joke`                             | Returns a programming joke |
| GET    | `/api/vibe?mood=happy\|tired\|stressed` | Returns mood response      |
| POST   | `/api/smash`                            | Increments smash counter   |
| GET    | `/api/smashes`                          | Returns smash count        |
| GET    | `/api/secret?code=411L`                 | Unlocks secret message     |

---

## 🎨 Frontend Features

* App-style centered layout
* Responsive button grid
* Console-style output display
* Dynamic content using `fetch()`
* User-friendly feedback and animations

---

## 🧪 Sample Output

```json
{
  "mood": "happy",
  "emoji": "😄",
  "message": "Keep going — you're shipping greatness!",
  "status": "vibe-verified ✅"
}
```

---

## 👨‍💻 Authors

* **Magtoto**
* **Mapoy**

*CPE 411L — Computer Engineering*

---

## 📄 License

This project is for **academic purposes** only.
Feel free to explore and modify for learning.

---

## 💡 Notes

* No database is used (in-memory data only)
* Designed for clarity and demonstration
* Follows proper Git branching and pull request workflow

---

✨ *No bad vibes. Only clean commits.*

```
