import { create } from 'zustand';
import { customAxiosInstance } from '../utils/axios'


export const useStudentStore = create((set) => ({
  students: [],
  student: null,
  error: null,
  isLoading: false,

  createStudent: async (newStudent) => {
    set({ isLoading: true, error: null })
    try {
      const response = await customAxiosInstance.post(`/createStudent`, newStudent);
      set({ student: response?.data?.student })
    } catch (error) {
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  getStudents: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await customAxiosInstance.get(`/getStudents`, {});
      set({ students: response?.data?.students })
    } catch (error) {
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  }
}))