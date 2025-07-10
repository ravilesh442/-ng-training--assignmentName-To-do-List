CREATE DATABASE taskdb;

USE taskdb;

CREATE TABLE tasks (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  assignedTo VARCHAR(100),
  status VARCHAR(50),
  dueDate DATE,
  priority VARCHAR(20),
  comments TEXT
);

INSERT INTO tasks (title, assignedTo, status, dueDate, priority, comments)
VALUES
('Design Homepage', 'Ravilesh', 'In Progress', '2025-07-12', 'High', 'Create wireframes first'),
('Setup Backend API', 'Anjali', 'Not Started', '2025-07-14', 'Normal', 'Start with Express setup'),
('Database Schema Design', 'Ravilesh', 'Completed', '2025-07-10', 'High', 'ERD finalized'),
('Integrate Login Module', 'Karan', 'In Progress', '2025-07-13', 'Normal', 'JWT setup needed'),
('Write Documentation', 'Ayesha', 'Not Started', '2025-07-15', 'Low', 'Cover only public APIs'),
('Deploy to Server', 'Ravilesh', 'Not Started', '2025-07-18', 'High', 'Use AWS EC2 instance'),
('Bug Fixing Round 1', 'Simran', 'In Progress', '2025-07-16', 'Normal', 'Reported from testing team'),
('Unit Testing', 'Ravilesh', 'Not Started', '2025-07-17', 'Normal', 'Use Jest or Mocha');
