import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import { getAllStudents, addStudent, updateStudent, deleteStudent } from "./api/studentApi";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await getAllStudents();
      setStudents(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to load students. Is the backend running on port 8081?");
    } finally {
      setLoading(false);
    }
  };

  const handleAddOrUpdate = async (formData) => {
    try {
      if (editingStudent) {
        await updateStudent(editingStudent.id, formData);
        setEditingStudent(null);
      } else {
        await addStudent(formData);
      }
      fetchStudents();
    } catch (err) {
      alert("Something went wrong while saving the student.");
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (err) {
      alert("Failed to delete student.");
    }
  };

  return (
    <div className="app-container">
      <h1>Student Management System</h1>

      <StudentForm
        onSubmit={handleAddOrUpdate}
        editingStudent={editingStudent}
        onCancelEdit={handleCancelEdit}
      />

      {loading && <p>Loading students...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <StudentTable students={students} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;