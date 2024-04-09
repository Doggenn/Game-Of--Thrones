import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './casa.css'
import Languages from "../../../components/Languages";



export default function Casa({t}) {
    const [house, setHouse] = useState()
    const { id } = useParams();
    const getHouse = () => {
        axios.get('https://game-of-thrones-json-server-one.vercel.app/houses/'+ id)
          .then(data => setHouse(data.data))   
    }
    
        
  useEffect(() => { 
    getHouse()
  }, [])
    
  return (
    
    <>
      <Languages></Languages>
          {house && <div className="casa-container">
              {console.log(house)}
              <div className="info-container">
                  <div className="info-container_img">
                    <img src={house.image} alt={house.name} /> 
                  </div>
                  <h2>{house.name}</h2>
              </div>
              <div className="textos">
                  <div className="texto">
                      <h3>{t('House')}</h3>
                      <p>{house.settlement}</p>
                  </div>
                  <div className="texto">
                    <h3>{t('Region')}</h3>
                    <p>{house.region}</p>
                  </div>
                  <div className="texto">
                    <h3>{t('Alliances')}</h3>
                      {house.alliances.map((alliance, i) =>
                          <p key={i}>{alliance} </p>
                      )}
                  </div>
                  <div className="texto">
                    <h3>{t('Religion')}</h3>
                    {house.religions.map((religion, i) =>
                          <p key={i}>{religion} </p>
                      )}
                  </div>
                  <div className="texto">
                      <h3>{t('Foundation')}</h3>
                    <p>{house.foundation}</p>
                  </div>
                  <div>

                  </div>
              </div>
          </div>}
    </>
    );
}
