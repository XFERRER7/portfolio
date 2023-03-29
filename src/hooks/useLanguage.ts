import useLanguageStore from "../stores/languageStore"
import { en } from "../utils/en"
import { pt } from "../utils/pt"


export const useLanguage = () => {
  const { language, } = useLanguageStore()

  const tranlations = language == 'en' ? en : pt

  return {
    tranlations,
  }
}