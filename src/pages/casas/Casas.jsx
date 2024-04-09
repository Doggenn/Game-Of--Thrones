import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export const housesGlobal = React.createContext()
import './casas.css'
import Languages from "../../components/Languages"


export default function Casas({ t }) {
  const [houses, setHouses] = useState()
  const [newHouses, setNewHouses] = useState([]);
  const getHouses = () => {
    axios.get('https://game-of-thrones-json-server-one.vercel.app/houses')
      .then(data => setHouses(data.data))
  }

  useEffect(() => {

    getHouses("")

  }, [])

  // const filtrado = (evento) => {
  //     const nombre = evento.target.value
  //     getHouses(nombre)
  //   }
  const filtrado = (evento) => {
    const valorInput = evento.target.value.toLowerCase();
    filtradoCasas(valorInput);
  }

  const filtradoCasas = (valor) => {
    const filteredHouses = houses.filter(character =>
      character.name.toLowerCase().includes(valor)
    );
    setNewHouses(filteredHouses);
  }

  return (

    <>
      <Languages></Languages>
      <div className='filtro'>
      <img className='search' src= "search_FILL0_wght400_GRAD0_opsz24.svg"></img>
      <input type='text' onChange={(e) => filtrado(e)} className='form-data' placeholder={t('Search House')} /></div>

      <div>{houses &&
        <div className="casas">
          {newHouses.length === 0 ?
            houses.map((house, index) => <Link to={"/casas/" + house.id } key={index}>
              <div className="casa">
                <div className="casa-img">
                  <img src={house.image} alt={house.name} />
                </div>
                <h3>{house.name}</h3>
               

              </div></Link>
            ) :
            newHouses.map((house, index) => <Link to={"/casas/" + house.id } key={index}>
              <div className="search-casa">
                <div className="search-casa_img">
                  <img src={house.image} alt={house.name} />
                </div>
                <h2>{house.name}</h2>
                

              </div></Link>
            )}
        </div>}
      </div></>
  )
}
