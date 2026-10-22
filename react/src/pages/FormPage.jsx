import { useState } from 'react';
import NavBar from '../components/NavBar'
import { Loader } from 'lucide-react';

const FormPage = () => {
  const [person, setPerson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // delay 3 secs for loading animation #testing
    await new Promise((resolve) => {
      setTimeout( async () => {
        resolve();
      }, 3000);
    })
    
    const newPerson = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value
    }
    
    setPerson(newPerson);
    e.target.reset();

    setIsLoading(false);
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

        {/* Email */}
        <div className='grid gap-2'>
          <label htmlFor="email" className='text-sm font-semibold text-gray-600'>Email</label>
          <input 
            id='email'
            name='email'
            type="email" 
            className='bg-gray-100 px-4 h-10'
            placeholder='Email'
            required
          />
        </div>

        <button 
          disabled={isLoading}
          type='submit' 
          className={`${isLoading ? "bg-gray-400" : "bg-blue-400"} w-full h-10 rounded-md text-white grid place-content-center`}
        >
          {isLoading ? <Loader className='animate-spin' /> : "Submit"}
        </button>

      </form>


      {
        person && 
        <div className='p-5 border border-gray-300 max-w-80 mx-5'>
          <h1>{person.name}</h1>
          <h1>{person.phone}</h1>
          <h1>{person.email}</h1>
        </div>
      }
    </div>
  )
}

export default FormPage