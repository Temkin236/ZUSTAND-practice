// src/store.jsx
import { create } from 'zustand';

const useFormStore = create((set) => ({
  personalInfo: { name: '', email: '', age: '', phone: '' },
  contactInfo: { telegram: '' },
  aboutYou: { description: '', hobbies: '', university: '', department: '', yearOfStudy: '', interests: '' },
  setPersonalInfo: (data) => set({ personalInfo: data }),
  setContactInfo: (data) => set({ contactInfo: data }),
  setAboutYou: (data) => set({ aboutYou: data }),
  resetForm: () => set({ personalInfo: {}, contactInfo: {}, aboutYou: {} }),
}));

export default useFormStore;