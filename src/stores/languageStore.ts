import { create } from 'zustand';

interface ILanguageState {
  language: string;
  setLanguage: (language: string) => void;
};

const useLanguageStore = create<ILanguageState>(
  
  (set) => ({
    language: 'en',
    setLanguage: (language) => set({ language }),
  })
);

export default useLanguageStore;