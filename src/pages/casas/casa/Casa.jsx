import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './casa.css'



export default function Casa({t}) {
    const [house, setHouse] = useState()
    const { id } = useParams();
    const getHouse = () => {
        axios.get('http://localhost:3000/houses/'+ id)
          .then(data => setHouse(data.data))   
    }
    
        
  useEffect(() => { 
    getHouse()
  }, [])
    
  return (
    
    <>
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
                      <h3>{t('SEDE')}</h3>
                      <p>{house.settlement}</p>
                  </div>
                  <div className="texto">
                    <h3>{t('REGION')}</h3>
                    <p>{house.region}</p>
                  </div>
                  <div className="texto">
                    <h3>{t('ALIANZAS')}</h3>
                      {house.alliances.map((alliance, i) =>
                          <p key={i}>{alliance} </p>
                      )}
                  </div>
                  <div className="texto">
                    <h3>{t('RELIGION')}</h3>
                    {house.religions.map((religion, i) =>
                          <p key={i}>{religion} </p>
                      )}
                  </div>
                  <div className="texto">
                      <h3>{t('FUNDACION')}</h3>
                    <p>{house.foundation}</p>
                  </div>
                  <div>

                  </div>
              </div>
          </div>}
    </>
    );
}
