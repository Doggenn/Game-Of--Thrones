import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './personaje.css'
import Languages from "../../../components/Languages";




export default function Personaje({ t }) {

  const [character, setCharacter] = useState()
  const { id } = useParams();
  const getCharacter = () => {
    axios.get('https://game-of-thrones-json-server-one.vercel.app/characters/' + id)
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
  
      <Languages></Languages>
      {character && <div className="character-main">

        <div className='character-img'>
          <img src={character.image} alt={character.name} />
        </div>
        <h2>{character.name}</h2>
        <div className="character-info">
        <div className="info-texto">
            <h3>{character.house}</h3>
            <div className="info-texto_img">
            <img src={pintarCasa(character.house)} alt="" /></div>
          </div>
        <div className="info-texto">
        <h3>{t('Alliances')}</h3>
            <nav>
           {character.alliances.map((alliance, episodeAlliance) => (
             <li key={episodeAlliance}>{alliance}</li>
              ))}
            </nav>
          </div>
        <div className="info-texto">
        <h3>{t('Episodes')}</h3>
        <nav>
          {character.episodes.map((episode, episodeIndex) => (
            <li key={episodeIndex}>{episode}</li>
          ))}
        </nav></div>
          {console.log(character.episodes)}
        <div className="info-texto">
        <h3>{t('Parents')}</h3>
        <nav>
          {character.parents.map((parent, parentIndex) => (
            <li key={parentIndex}>{parent}</li>
          ))}
            </nav>
        </div>
        <div className="info-texto">
        <h3>{t('Siblings')}</h3>
        <nav>
          {character.siblings.map((sibling, siblingIndex) => (
            <li key={siblingIndex}>{sibling}</li>
          ))}
            </nav>
          </div>
        <div className="info-texto">
        <h3>{t('Titles')}</h3>
        <nav>
          {character.titles.map((title, titleIndex) => (
            <li key={titleIndex}>{title}</li>
          ))}
            </nav>
        </div>
        </div>
      </div>}

    </>
  );
}
