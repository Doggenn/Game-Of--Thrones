import { useEffect, useState } from 'react'
import axios from 'axios'
import './personajes.css'
import { Link } from 'react-router-dom'
import Languages from '../../components/Languages';
import Filtro from '../../components/Filtro';




export default function Personajes({ t }) {


  const [characters, setCharacters] = useState([]);
  const [newCharacters, setNewCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    axios.get('https://game-of-thrones-json-server-one.vercel.app/characters/')
      .then(data => setCharacters(data.data));
  }

  const filtrado = (evento) => {
    const valorInput = evento.target.value.toLowerCase();
    filtradoPersonajes(valorInput);
  }

  const filtradoPersonajes = (valor) => {
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(valor)
    );
    setNewCharacters(filteredCharacters);
  }
  //
  //  const filtradoPersonajes = (valor) => {
  //   // const data2 = characters.filter(characters => characters.name.toLowerCase() == valor.toLowerCase())
  //      characters.name.toLowerCase().includes(valor).toLowerCase()


  //   setNewCharacters(data)

  // }
  // if (valor === undefined) {
  // // console.log(valor)
  // // const data2 = characters.filter(characters => characters.name == valor)
  //   // setNewCharacters(data2)
  //   setNewCharacters([...characters])

  // // console.log(data2)
  //   console.log(newCharacters)
  // } else {
  //   const data2 = characters.filter(characters => characters.name == valor)
  //   setNewCharacters(data2)
  return (
    <>
      <Languages></Languages>
      <div className='filtro'>
      <img className='search' src= "search_FILL0_wght400_GRAD0_opsz24.svg"></img>
      <input type='text' onChange={(e) => filtrado(e)} className='form-data' placeholder={t('Search Character')} /></div>
      <div className='characters'>
        {newCharacters.length === 0 ?
          characters.map((character, index) => (
           <Link to={"/personajes/" + character.id } key={index}>
              <div className='character'>
                <div className='character-img'>
                  <img src={character.image} alt={character.name} />
                </div>
                <h3>{character.name}</h3>
                {/* <p>{t('House')}: {character.house}</p>
                <p>{t('Parents')}: {character.parents}</p>
                <p>{t('Siblings')}: {character.siblings}</p> */}
              </div>
            </Link>
          )) :
          newCharacters.map((character, index) => (
           <Link to={"/personajes/" + character.id } key={index}>
              <div className='character'>
                <div className='character-img'>
                  <img src={character.image} alt={character.name} />
                </div>
                <h3>{character.name}</h3>
                {/* <p>{t('House')}: {character.house}</p>
                <p>{t('Parents')}: {character.parents}</p>
                <p>{t('Siblings')}: {character.siblings}</p> */}
              </div>
            </Link>
          ))
        }
      </div>
    </>
  );

}