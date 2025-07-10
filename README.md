# 📝 To-do App

A simple full-stack task manager (to-do list) application built using **React**, **Node.js + Express**, and **MySQL**.  
This project allows users to create, view, update, and delete tasks with details like title, status, priority, due date, and comments.


---

## 🔧 Tech Stack

- **Frontend:** React, Bootstrap, React-Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **ORM:** Sequelize
- **API Testing:** Postman (optional)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ravilesh442/-ng-training--assignmentName-To-do-List
cd task-manager
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
📄 Create .env file
env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=taskdb
PORT=5000
✅ Run Server
bash
Copy
Edit
npm run dev


sql
Copy
Edit
CREATE DATABASE taskdb;
Then create the tasks table:

sql
Copy
Edit
USE taskdb;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  assignedTo VARCHAR(100),
  status VARCHAR(50),
  dueDate DATE,
  priority VARCHAR(20),
  comments TEXT
);
3️⃣ Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm start
The frontend runs on:
📍 http://localhost:3000



📦 Features
View task list

Add a new task

Edit a task

Delete a task

Status & Priority tags

Uses React Bootstrap UI components

Responsive & clean UI

📸 UI Preview
Include screenshots here if available.

🧑‍💻 Author
Ravilesh Kashyap
Feel free to fork and improve. Contributions are welcome!

