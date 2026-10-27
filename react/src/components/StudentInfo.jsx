

const StudentInfo = ({ student }) => {
  return (
    <div className='p-5 border border-gray-300'>
      <h1>ID: {student.id}</h1>
      <h1>Name: {student.name}</h1>
      <h1>Phone: {student.phone}</h1>
      <h1>Address: {student.address}</h1>
    </div>
  )
}

export default StudentInfo