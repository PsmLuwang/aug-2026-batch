import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { useGlobalStore } from "../stores/globalStore";
import { axiosInstance } from "../utils/axios";

const CardsPage = () => {
  const { username, phone } = useGlobalStore(); // import global state

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      // const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=10`)
      // const data = await response.json();
      // setUsers(prev => [...prev, ...data.data.data]);

      const response = await axiosInstance.get(`/api/v1/public/randomusers?page=${page}&limit=10`);
      setUsers(prev => [...prev, ...response.data.data.data]);
    }
    
    getUsers();
  }, [page])
  
  
  return (
    <div>
      <NavBar />

      {/* learn global state */}
      <section className="m-5">
        <h1>Username: {username}</h1>
        <h1>Phone: {phone}</h1>
      </section>





      <section>
        {
          users.map((user, index) => (
            <h1 key={index}>Name: {user?.name?.first}</h1>
          ))
        }
        <button onClick={() => setPage(page+1)}>Load more</button>
      </section>
    </div>
  )
}

export default CardsPage