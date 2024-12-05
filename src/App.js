
import './App.css';
import Frase from './components/Frase'
import Hora from './components/Hora'
import { useTranslation } from 'react-i18next';
import './i18n'

function App() {

  const [t, i18n] = useTranslation();
  const changeLanguage = (lng) => {
     i18n.changeLanguage(lng)
  }
    
  return (
    <div className="App">
      <select onChange={(e) => changeLanguage(e.target.value)}>
      <option className="opt" value="en">English</option>
      <option className="opt" value="pt">Português</option>
    </select>
     <Frase />
     <Hora />
    </div>
  );
}

export default App;
