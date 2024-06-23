
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';

function Frase(){
    const {t, i18n} = useTranslation()
    const [frases, setFrases] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const fetchFrases = async () => {
          const fetchedFrases = await t('frases', { returnObjects: true });
          setFrases(fetchedFrases);
        };
        fetchFrases();
    }, [i18n.language, t]);
  
    useEffect(() => {
        if (frases.length > 0) {
          setFrase(frases[currentIndex].texto);
          setAutor(frases[currentIndex].autor);
        }
      }, [currentIndex, frases]);

      const [frase, setFrase] = useState('');
      const [autor, setAutor] = useState('');
  // Atualizar frase e autor com base no currentIndex



  function Clicar(){
    
      const newIndex = (currentIndex + 1) % frase.length;
     

      setCurrentIndex(newIndex)
 
    
  }

    
    return (
     <div className="frase">
       
       <span>"{frase}"</span>
       <h4>{autor}</h4>
      <FontAwesomeIcon className="icone" onClick={Clicar} icon={faSpinner} />
     </div>
    )
}

export default Frase;