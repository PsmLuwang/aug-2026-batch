import { create } from 'zustand';
import { axiosInstance } from '../utils/axios';

export const useReviewStore = create((set) => ({
  reviews: [],
  isLoading: false,

  getReviews: async () => {
    set({ isLoading: true });
    const response = await axiosInstance.get(`https://free-api-six.vercel.app/api/review/get?page=1&&limit=10`);
    set({ reviews: response.data.data })
    set({ isLoading: false });
  }

})) 