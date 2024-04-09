import React, { useState } from 'react'
import './filtro.css'
export default function Filtro({personajes, setCharacters}) {
    const [data, setData] = useState()
    console.log(data)


    const filtrado = (evento) => {
        setData(evento.target.value)
    }

  return (
    <>
    <div className='filtro'>
    <input type='text' onChange={(e) => filtrado(e)}></input>

      
    </div>
    
    </>
  )
}
