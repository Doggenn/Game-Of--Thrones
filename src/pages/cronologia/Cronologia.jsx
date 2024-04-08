import axios from 'axios'
import { useEffect, useState } from 'react'
import './cronologia.css'
import { Link } from 'react-router-dom'


export default function Cronologia() {

  const [characters, setCharacters] = useState([])


  const getCharacters = () => {
    axios.get('https://game-of-thrones-json-server-one.vercel.app/characters/')
      // .then(res => res.json())
      .then(data => setCharacters(data.data))
  }

  useEffect(() => {
    getCharacters()
  }, [])

  const [edad, setEdad] = useState(0)


  function ordenarItems(items, ascendente) {
    console.log("hola", ascendente);
    characters.sort(function (a, b) {
      if (ascendente) {
        setEdad(parseInt(b.age))
        return a.age - b.age;
      } else {
        setEdad(parseInt(a.age))

        return b.age - a.age;
      }
    });

    return characters
  }


  const [ascendente, setAscendente] = useState(true);

  const handleClick = () => {
    setAscendente(!ascendente);
    const nuevosItems = ordenarItems([...characters], !ascendente);
    setCharacters(nuevosItems);
  };



  return (
    <>
      <div className='b-cronologia__container'>

        <button className='b-btn--cronologia' type='text' onClick={handleClick}>{edad ? edad : 0}</button>

        <div className='b-cronologia__content'>

          <div className='b-pares'>


            {characters.map((character, index) =>
              character.age && index % 2 === 0 &&
              <Link key={index} to={"/personajes/"+character.id}>
              <div className='character-age'>
                <p className='pm-0'>{character.age}</p>
                <h2>{character.name}</h2>
                <div className='character-age_img'>
                  <img src={character.image}></img>
                </div>
              </div>
              </Link>
            )}

          </div>

          <div className='b-impares'>
            {characters.map((character, index) => character.age && index % 2 !== 0 &&
                <Link key={index} to={"/personajes/"+character.id}>
                  <div className='character-age' >
                    <p className='pm-0'>{character.age}</p>
                    <h2>{character.name}</h2>
                    <div className='character-age_img'>
                      <img src={character.image}></img>
                      </div>
                  </div>
                </Link>


            )}

          </div>
        </div>

      </div>

    </>

  )
}
