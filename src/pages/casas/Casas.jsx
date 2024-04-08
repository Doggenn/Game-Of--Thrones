import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './casas.css'


export default function Casas({t}) {
  const [houses, setHouses] = useState()
  const [newHouses, setNewHouses] = useState([]);
  const getHouses = () => {
    axios.get('https://game-of-thrones-json-server-one.vercel.app/houses')
      .then(data => setHouses(data.data))
  }

  useEffect(() => {

    getHouses("")

  }, [])

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
      <input type='text' placeholder={t("Buscar casa")} onChange={(e) => filtrado(e)} className='form-data' />

      <div>{houses &&
        <div className="casas">
          {newHouses.length === 0 ?
            houses.map((house, index) => <Link key={index} to={"/casas/"+house.id}>
              <div className="casa">
                <div className="casa-img">
                  <img src={house.image} alt={house.name} />
                </div>
                <h3>{house.name}</h3>
               

              </div></Link>
            ) :
            newHouses.map((house, index) => <Link key={index} to={house.id}>
              <div>
                <div>
                  <img src={house.image} alt={house.name} />
                </div>
                <h2>{house.name}</h2>
                <p></p>

              </div></Link>
            )}
        </div>}
      </div></>
  )
}
