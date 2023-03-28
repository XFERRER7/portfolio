import { create } from 'zustand';

interface ILanguageState {
  language: string;
  setLanguage: (language: string) => void;
};

const useLanguageStore = create<ILanguageState>(
  
  (set) => ({
    language: 'pt',
    setLanguage: (language) => set({ language }),
  })
);

export default useLanguageStore;