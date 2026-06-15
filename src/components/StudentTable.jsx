function StudentTable({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return <p className="empty-message">No students found. Add one above.</p>;
  }

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Grade Level</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.gradeLevel}</td>
            <td>{student.email}</td>
            <td>{new Date(student.createdAt).toLocaleString()}</td>
            <td>
              <button onClick={() => onEdit(student)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(student.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;