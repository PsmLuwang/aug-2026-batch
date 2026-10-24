import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useGlobalStore } from '../stores/globalStore';


// UseState
const HooksPage = () => {
  const { username, phone } = useGlobalStore(); // import global state
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("test");
  }, [count]);

  return (
    <div>
      <NavBar />

      {/* learn global state */}
      <section className="m-5">
        <h1>Username: {username}</h1>
        <h1>Phone: {phone}</h1>
      </section>


      <h1 className='text-center font-bold text-3xl p-5'>
        Count = {count}
      </h1>
      <button onClick={() => setCount(count+1)} className='bg-blue-400 p-3 mx-auto block'>
        Count
      </button>
      <button onClick={() => setCount(0)} className='bg-red-400 p-3 mx-auto block'>
        Reset
      </button>

      <br />


      <h1 className='text-center font-bold text-3xl p-5'>
        Num = {num}
      </h1>
      <button onClick={() => setNum(num+1)} className='bg-blue-400 p-3 mx-auto block'>
        Count
      </button>
      <button onClick={() => setNum(0)} className='bg-red-400 p-3 mx-auto block'>
        Reset
      </button>
    </div>
  )
}

export default HooksPage