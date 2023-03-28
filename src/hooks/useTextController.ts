import { useState } from "react";
import useLanguageStore from "../stores/languageStore";
import { textsAbout, textsHeader } from "../utils/text";


export function useTextController() {

  const { language } = useLanguageStore()
  const lang = language === 'pt' ? 'pt' : 'en'
  const texts = {
    header: textsHeader,
    about: textsAbout
  }

  const controllerTextHeader = (key: keyof typeof textsHeader) => {
    return texts.header[key][lang]
  }

  const controllerTextAbout = ([...key]) => {

    return textsAbout

  }


  return {
    controllerTextHeader,
    controllerTextAbout
  }

}