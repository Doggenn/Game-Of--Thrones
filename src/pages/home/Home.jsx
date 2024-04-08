import React from 'react'
import './home.css'
// import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'


export default function Home({t}) {
  return (
    <div className='body'>
      <div className='languages'></div>
      <div className='titular'>
        <h1>{t('Game Of Thrones')}</h1>
      </div>

    </div>
  )
}
