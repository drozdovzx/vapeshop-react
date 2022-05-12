import React from 'react';
import logo from '../images/logo2.png';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-gif"/>
            <div className="footer-left">
                <div className="footer-logo-con">
                    <img className="footer-logo" alt="footerLogo" src={ logo }/>
                </div>
                <div className="footer-soc text-to-change">
                    <a href="#" className="md-primoExplore-theme"><i className="fa-brands fa-instagram"/></a>
                    <a href="#" className="md-primoExplore-theme"><i className="fa-brands fa-vk"/></a>
                    <a href="#" className="md-primoExplore-theme"><i className="fa-brands fa-youtube"/></a>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-in">
                    <div className="footer-in-in text-to-change">
                        <span className="footer-menu-head">График работы</span>
                        <div className="footer-avatud-con">
                            <div className="footer-avatud">
                                <div className="text-to-change">
                                    <span>Пн-Пт</span><span>10:00-22:00</span>
                                </div>
                                <div className="text-to-change">
                                    <span>Сб-Вс</span><span>10:00-23:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-in-in">
                        <span className="footer-menu-head">Контакты</span>
                        <div className="footer-text text-to-change">
                            <span>VapeShop, Улица Дачная 11 А, 143404 Красногорск</span>
                            <span>+7(965)-244-76-56</span>
                        </div>
                    </div>
                </div>
                <div className="footer-in">
                    <div className="footer-in-in">
                        <span className="footer-menu-head text-to-change">Сотрудники</span>
                        <div className="footer-text text-to-change">
                            <a href="#" className="md-primoExplore-theme">Владелец</a>
                            <a href="#" className="md-primoExplore-theme">Продавцы</a>
                        </div>
                    </div>
                </div>
                <div className="footer-in">
                    <div className="footer-in-in">
                        <span className="footer-menu-head text-to-change">Полезные ссылки</span>
                        <div className="footer-text text-to-change">
                            <a href="#" className="md-primoExplore-theme">Закон о табачных изделиях</a>
                            <a href="#" className="md-primoExplore-theme">Закон о защите прав потребителя</a>
                            <a href="#" className="md-primoExplore-theme">Политика конфиденциальности</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;