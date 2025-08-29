import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import Russia from '../../assets/images/russia.png';
import Usa from '../../assets/images/usa.png';
import './langBtnStyle.css'

export default function ButtonLang() {
    const [open, setOpen] = useState(false);

    const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setOpen((prev) => !prev);
    };

    const closeMenu = () => setOpen(false);

    return (
        <div className="language-switcher" onClick={closeMenu}>
            <button onClick={toggleMenu} className="lang-button">
                <img src={Russia} className="lang-flag" alt="RU" />
                RU
                <span className={`arrow ${open ? 'open' : ''}`}><DownOutlined /></span>
            </button>

            <ul className={`lang-menu ${open ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <li>
                    <a href="en.html" className="lang-item">
                        <img src={Usa} className="lang-flag" alt="EN" /> EN
                    </a>
                </li>
            </ul>
        </div>
    )
}