import React, { useState } from 'react'

export default function Filtro({personajes, setCharacters}) {
    const [data, setData] = useState()
    console.log(data)


    const filtrado = (evento) => {
        setData(evento.target.value)
    }

  return (
    <div>
    <input type='text' onChange={(e) => filtrado(e)} className='form-data'></input>

      
    </div>
  )
}
