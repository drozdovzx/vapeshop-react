import React, {useState} from 'react';
import { LOCALES } from "../i18n/locales";
import logo from '../images/logo2.png';


const languages = [
    { name: 'eng', valueLang:"en-US", code: LOCALES.ENGLISH },
    { name: 'est', valueLang:"et-EE", code: LOCALES.ESTONIAN },
    { name: 'rus', valueLang:"ru-RU", code: LOCALES.RUSSIAN }
]

const Header = () => {
    return (
        <header>
            <div className="header-text">
                <div className="header-logo-con">
                    <img className="header-logo" alt="headerLogo" src={ logo }/>
                </div>
                <span>Vape Guild</span>
            </div>
        </header>
    )
}
export default Header;