import React from 'react';
import {Footer, Header} from './Components/';
import {Home, List, Cart} from "./pages";
import {Route} from 'react-router-dom';
import {IntlProvider} from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'

function App() {
    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.ENGLISH
    }
    const [currentLocale, setCurrentLocale] = React.useState(getInitialLocale());
    const handleChange = ({ target: { alt } }) => {
        setCurrentLocale(alt);
        localStorage.setItem('locale', alt)
    }

    return (
        <IntlProvider messages={messages[getInitialLocale()]} locale={getInitialLocale()} defaultLocale='LOCALES.ENGLISH'>
            <Header currentLocale={currentLocale} handleChange={handleChange}/>
            <div className="back">
                <Route exact path='/' component={Home}/>
                <Footer/>
            </div>
        </IntlProvider>

    );
}

export default App;
