import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Badge } from 'react-bootstrap';
import { Pencil, Trash, PlusCircle } from 'react-bootstrap-icons';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    assignedTo: '',
    status: 'Not Started',
    dueDate: '',
    priority: 'Normal',
    comments: ''
  });
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const API_URL = 'http://localhost:5000/api/tasks';

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  //Fetch All Task
  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setNewTask({
      title: '',
      assignedTo: '',
      status: 'Not Started',
      dueDate: '',
      priority: 'Normal',
      comments: ''
    });
    setEditId(null);
    setShowModal(false);
  };


  //Save the Task
  const saveTask = async () => {
    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, newTask);
      } else {
        await axios.post(API_URL, newTask);
      }
      handleCloseModal();
      fetchTasks();
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  //Edit or update the Task
  const editTask = (task) => {
    setEditId(task.id);
    setNewTask(task);
    setShowModal(true);
  };

  //Delete the Task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'completed now':
        return <Badge bg="success">{status}</Badge>;
      case 'in progress':
        return <Badge bg="warning" text="dark">{status}</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return <Badge bg="danger">{priority}</Badge>;
      case 'low':
        return <Badge bg="info">{priority}</Badge>;
      default:
        return <Badge bg="primary">{priority}</Badge>;
    }
  };

  return (
    <div className="container my-5" style={{ backgroundColor: '#eee7e0', padding: '20px', borderRadius: '8px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">📝 To-DO List</h2>
        <Button variant="success" onClick={handleShowModal}>
          <PlusCircle className="me-2" /> New Task
        </Button>
      </div>

      {tasks.length === 0 ? (
        <div className="alert alert-info">No tasks available.</div>
      ) : (
        <div className="row">
          {tasks.map((task) => (
            <div className="col-md-6 mb-4" key={task.id}>
              <div className="card shadow-sm" style={{ backgroundColor: '#f7f9fc', borderLeft: '5px solid #0d6efd' }}>
                <div className="card-body">
                  <h5 className="card-title text-primary">{task.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Assigned to: {task.assignedTo}</h6>
                  <p className="card-text"><strong>Due:</strong> {task.dueDate}</p>
                  <p className="card-text"><strong>Comments:</strong> {task.comments}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {getStatusBadge(task.status)}{' '}
                      {getPriorityBadge(task.priority)}
                    </div>
                    <div>
                      <Button variant="outline-primary" size="sm" onClick={() => editTask(task)}>
                        <Pencil />
                      </Button>{' '}
                      <Button variant="outline-danger" size="sm" onClick={() => deleteTask(task.id)}>
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Edit Task' : 'Add New Task'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" value={newTask.title} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control name="assignedTo" value={newTask.assignedTo} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Status</Form.Label>
              <Form.Select name="status" value={newTask.status} onChange={handleInputChange}>
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" name="dueDate" value={newTask.dueDate} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Priority</Form.Label>
              <Form.Select name="priority" value={newTask.priority} onChange={handleInputChange}>
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Comments</Form.Label>
              <Form.Control as="textarea" name="comments" rows={3} value={newTask.comments} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={saveTask}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskApp;
