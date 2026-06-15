import { useState, useEffect } from "react";

function StudentForm({ onSubmit, editingStudent, onCancelEdit }) {
  const [formData, setFormData] = useState({
    name: "",
    gradeLevel: "",
    email: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        gradeLevel: editingStudent.gradeLevel,
        email: editingStudent.email,
      });
    } else {
      setFormData({ name: "", gradeLevel: "", email: "" });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.gradeLevel || !formData.email) {
      alert("Please fill in all fields");
      return;
    }
    onSubmit(formData);
    setFormData({ name: "", gradeLevel: "", email: "" });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{editingStudent ? "Update Student" : "Add Student"}</h2>

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter student name"
      />

      <label>Grade Level</label>
      <input
        type="text"
        name="gradeLevel"
        value={formData.gradeLevel}
        onChange={handleChange}
        placeholder="e.g. Grade 10"
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="student@example.com"
      />

      <div className="form-actions">
        <button type="submit">{editingStudent ? "Update" : "Add"}</button>
        {editingStudent && (
          <button type="button" className="cancel-btn" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;