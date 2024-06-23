import i18n from "i18next";
import {initReactI18next} from 'react-i18next'
import enTranslation from "./en.json"
import ptTranslation from "./pt.json"

i18n
.use(initReactI18next)
.init({
    lng: 'en', //Definir linguagem inicial
    fallbacklng: 'pt',
    resources: { 
    en: {
        translation: enTranslation,
    },
    pt: {
        translation: ptTranslation,
    }
},
interpolation:{
    escapeValue: false
},
});

export default i18n;