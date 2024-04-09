import React from 'react'
import { useTranslation } from 'react-i18next';
import  './languages.css'

export default function Languages() {
  const { t, i18n } = useTranslation();


  const cambiarIdioma = (idioma) => {
    i18n.changeLanguage(idioma)
  }

  return (
    <div>
       <button className='idioma-en' onClick={() => cambiarIdioma('en')}>{t('EN')}</button>
      <button className='idioma-es' onClick={() => cambiarIdioma('es')}>{t('ES')}</button>
      
    </div>
  )
}
