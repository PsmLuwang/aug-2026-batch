import { useEffect } from 'react';
import NavBar from '../components/NavBar'
import { useProductStore } from '../stores/productStore'
import { Loader } from 'lucide-react';

const AxiosPage = () => {
  const { products, getProducts, isLoading, error } = useProductStore();

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <NavBar />

      <section>
        {products.map((product, index) => (
          <h1 key={index}>{product.title}</h1>
        ))}

        {isLoading && <Loader className='animate-spin' />}
        {error && <p className='text-red-400'>{error}</p>}

        <img src="./imggg.webp" alt="" />
      </section>
    </div>
  )
}

export default AxiosPage