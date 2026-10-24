import { create } from 'zustand';

export const useGlobalStore = create((set) => ({
  username: "Priyansu",
  phone: "",


  setUsername: (newUsername) => {
    set({ username: newUsername })
  },

  
}))


