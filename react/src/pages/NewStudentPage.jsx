import { Loader } from 'lucide-react';
import NavBar from '../components/NavBar'
import { useStudentStore } from '../stores/studentStore';
import StudentInfo from '../components/StudentInfo';

const NewStudentPage = () => {
  const { student, students, getStudents, createStudent, error, isLoading } = useStudentStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    }

    await createStudent(newStudent);
  }


  return (
    <div>
      <NavBar />

      <form onSubmit={handleSubmit} className='max-w-80 border border-gray-300 p-4 rounded-xl space-y-5 m-5'>

        {/* Name */}
        <div className='grid gap-2'>
          <label htmlFor="name" className='text-sm font-semibold text-gray-600'>Name</label>
          <input 
            id='name'
            name='name'
            type="text" 
            className='bg-gray-100 px-4 h-10'
            placeholder='Name'
            required
          />
        </div>

        {/* Phone */}
        <div className='grid gap-2'>
          <label htmlFor="phone" className='text-sm font-semibold text-gray-600'>Phone</label>
          <input 
            id='phone'
            name='phone'
            type="text" 
            className='bg-gray-100 px-4 h-10'
            placeholder='Phone'
            required
          />
        </div>

        {/* Address */}
        <div className='grid gap-2'>
          <label htmlFor="address" className='text-sm font-semibold text-gray-600'>Address</label>
          <input 
            id='address'
            name='address'
            type="text" 
            className='bg-gray-100 px-4 h-10'
            placeholder='Address'
            required
          />
        </div>

        {!error && <p className='text-red-400'>{error}</p>}

        <button 
          disabled={isLoading}
          className={`${isLoading ? "bg-gray-400" : "bg-blue-400"} w-full h-10 rounded-md text-white grid place-content-center`}
        >
          {isLoading ? <Loader className='animate-spin text-center' /> : "Create Student"}
        </button>
      </form>

      <button onClick={getStudents} className='bg-blue-400'>
        All Student
      </button>


      <section className='p-5 space-y-4'>
        {student && 
          <StudentInfo student={student} />
        }

        {students.map(student => (
          <StudentInfo key={student.id} student={student} />
        ))}
      </section>
    </div>
  )
}

export default NewStudentPage