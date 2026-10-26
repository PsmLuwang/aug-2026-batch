import { create } from 'zustand';
import { axiosInstance } from '../utils/axios'

export const useProductStore = create((set) => ({
  products: [],
  product: null,
  isLoading: false,
  error: null,

  getProducts: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get(`/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches`);
      set({ products: response.data.data.data })

    } catch (error) {
      set({ error: error.message })
      console.log("Error : ", error);
    } finally {
      set({ isLoading: false })
    }
  }
}))