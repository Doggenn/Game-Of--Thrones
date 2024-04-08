import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";



export default function Personaje({ t }) {

  const [character, setCharacter] = useState()
  const { id } = useParams();
  const getCharacter = () => {
    axios.get('http://localhost:3000/characters/' + id)
      .then(data => setCharacter(data.data))

  }


  const pintarCasa = (casa) => {
    if (casa === "Stark") {
      return "/images/houses/01.webp"
    } else if (casa === "Lannister") {
      return "/images/houses/02.webp"
    } else if (casa === "Baratheon") {
      return "/images/houses/03.webp"
    } else if (casa === "Targaryen") {
      return "/images/houses/04.webp"
    } else if (casa === "Tyrell") {
      return "/images/houses/05.webp"
    } else if (casa === "Greyjoy") {
      return "/images/houses/06.webp"
    } else if (casa === "Martell") {
      return "/images/houses/07.webp"
    } else if (casa === "Tully") {
      return "/images/houses/08.webp"
    } else if (casa === "Arryn") {
      return "/images/houses/09.webp"
    } else if (casa === "Bolton") {
      return "/images/houses/10.webp"
    } else if (casa === "Frey") {
      return "/images/houses/11.webp"
    } else if (casa === "Mormont") {
      return "/images/houses/12.webp"
    } else if (casa === "Tarly") {
      return "/images/houses/13.webp"
    } else if (casa === "Seaworth") {
      return "/images/houses/14.webp"
    } else if (casa === "Tarth") {
      return "/images/houses/15.webp"
    }

  }

  useEffect(() => {

    getCharacter()
  }, [])

  return (
    <>


      {character && <div>

        <div className='character-img'>
          <img src={"/public" + character.image} alt={character.name} />
        </div>
        <h2>{character.name}</h2>
        <h3>{t('House')}: {character.house}</h3>
        <img src={pintarCasa(character.house)} alt="" />
        <h3>{t('Alliances')}:</h3>
        <ul>
          {character.alliances}
        </ul>
        <h3>{t('Episodes')}:</h3>
        <ul>
          {character.episodes.map((episode, episodeIndex) => (
            <li key={episodeIndex}>{episode}</li>
          ))}
        </ul>
        {console.log(character.episodes)}
        <h3>{t('Parents')}:</h3>
        <ul>
          {character.parents.map((parent, parentIndex) => (
            <li key={parentIndex}>{parent}</li>
          ))}
        </ul>
        <h3>{t('Siblings')}:</h3>
        <ul>
          {character.siblings.map((sibling, siblingIndex) => (
            <li key={siblingIndex}>{sibling}</li>
          ))}
        </ul>
        <h3>{t('Titles')}:</h3>
        <ul>
          {character.titles.map((title, titleIndex) => (
            <li key={titleIndex}>{title}</li>
          ))}
        </ul>
      </div>}

    </>
  );
}
