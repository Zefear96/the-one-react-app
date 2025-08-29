import CtaButton from '../../../dataEntry/ctaButton/CtaButton'
import ButtonLang from '../../../dataEntry/ButtonLang'
import Logo from '../../../../assets/images/logo_white.png'
import '././header.css';
import "../../../../App.css";
import { useState } from 'react'
import { useAuth } from '../../../../hooks/useAuth';



export default function HeaderHomePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { login } = useAuth();

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Логотип */}
                <div className="logo">
                    <a href="/">
                        <img alt="CardFly Logo" src={Logo} />
                    </a>
                </div>

                {/* Навигация для десктопа */}
                <nav className="nav">
                    <a className="active" href="/">Главная</a>
                    <a onClick={() => scrollToSection("tab1")}>Для физических лиц</a>
                    <a onClick={() => scrollToSection("tab2")}>Для бизнеса</a>
                    <a href="/contacts">Контакты</a>
                </nav>

                {/* Кнопки справа */}
                <div className="header-buttons">
                    <ButtonLang />
                    <CtaButton text="Подать заявку" />
                    <CtaButton text="Войти" />
                </div>

                {/* Бургер для мобилки */}
                <div className="burger">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Мобильное меню */}
            {menuOpen && (
                <div className="mobile-menu">
                    <a href="/" onClick={() => setMenuOpen(false)}>Главная</a>
                    <a onClick={() => scrollToSection("tab1")}>Для физических лиц</a>
                    <a onClick={() => scrollToSection("tab2")}>Для бизнеса</a>
                    <a href="/contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
                    <a href="#contact" className="cta-button" onClick={() => setMenuOpen(false)}>Подать заявку</a>
                    <a className="cta-button" onClick={() => {setMenuOpen(false); login()}}>Войти</a>
                </div>
            )}
        </header>
    )
}