import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { getCurrentTime } from './CurrentTime';
import { useTranslation } from 'react-i18next';



function Hora(){
      const {t} = useTranslation()
     const [hora, setHora] = useState(getCurrentTime());
     
     useEffect(() => {
        const intervalo = setInterval(() => {
           const currentTime = getCurrentTime();
           setHora(currentTime);
        }, 1000)
        return () => clearInterval(intervalo)
     }, [])

     
    return(  
    <div className="hora">
      <h2>{t('hora.greeting')}<FontAwesomeIcon className="icone_moon" icon={faMoon} /></h2>
   
      <h1>{hora}</h1>
      
     <h3>{t('hora.local')}</h3>
      
    </div>
    )
}

export default Hora;