import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import Personajes from './pages/personajes/Personajes'
import Casas from './pages/casas/Casas'
import Cronologia from './pages/cronologia/Cronologia'
import Personaje from './pages/personajes/personaje/Personaje'
import Casa from './pages/casas/casa/Casa'
import { useTranslation } from 'react-i18next';
import Languages from './components/Languages'



function App() {

  const { t } = useTranslation();
  return (
    <>
      <Router>

    
        <header className='header'>
          

          <nav className='nav'>
            <Link className='a' to="/">{t('Home')}</Link>
            <Link className='a' to="/personajes">{t('Characters')}</Link>
            <Link className='a' to="/casas">{t('Houses')}</Link>
            <Link className='a' to="/cronologia">{t('Chronology')}</Link>

          </nav>
        </header>

        <Routes>


          <Route path="/" element={<Home t={t} />} />
          <Route path="/personajes" element={<Personajes t={t} />} />
          <Route path="/casas" element={<Casas t={t} />} />
          <Route path="/casas/:id" element={<Casa t={t} />} />
          <Route path="/cronologia" element={<Cronologia t={t} />} />
          <Route path="/personajes/:id" element={<Personaje t={t} />} />


        </Routes>

      </Router>


    </>
  )
}

export default App
