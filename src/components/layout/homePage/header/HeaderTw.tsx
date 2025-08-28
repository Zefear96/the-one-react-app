
import { Link } from 'react-router-dom';

interface NavigationProps {
    switchTab: (tabId: string) => void;
}

export default function HeaderTw({ switchTab }: NavigationProps) {

    const scrollToTabs = (tabId: string) => {
        switchTab(tabId);
        const tabsSection = document.getElementById('tabs-section');
        if (tabsSection) {
            tabsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full px-6 md:px-10 py-4 z-20 backdrop-blur-md bg-black/0">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <a href="index.html">
                        <img alt="CardFly Logo" className="h-10" src="assets/images/logo_white.png" />
                    </a>
                </div>

                <nav className="hidden md:flex gap-14 text-sm text-white">
                    <Link className="text-[#00F0D4]" to='/'>Главная</Link>
                    <Link to="/#tabs-section" className="hover:text-[#00F0D4]" onClick={() => scrollToTabs('tab1')}>Для физических лиц</Link>
                    <Link to="/#tabs-section" className="hover:text-[#00F0D4]" onClick={() => scrollToTabs('tab2')}>Для бизнеса</Link>
                    <Link className="hover:text-[#00F0D4]" to="/contacts">Контакты</Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* <!-- Языковой переключатель --> */}
                    <div className="relative text-white text-sm">
                        {/* <!-- Кнопка --> */}
                        <button id="langButton" className="flex items-center gap-1 focus:outline-none">
                            <img src="assets/images/russia.png" className="w-5 h-5 rounded-full" />
                            RU
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>

                        {/* <!-- Меню --> */}
                        <ul id="langMenu"
                            className="absolute left-0 top-full mt-1 rounded-md shadow-lg min-w-full origin-left transition-transform duration-300 opacity-0 pointer-events-none">
                            <li>
                                <a href="en.html" className="flex items-center gap-2 py-2 hover:text-[#00F0D4]">
                                    <img src="assets/images/usa.png" className="w-5 h-5 rounded-full" />EN
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* <!-- Кнопка --> */}
                    <a className="cta-button hidden md:inline-block" href="#contact">Подать заявку</a>

                    {/* <!-- Бургер для мобилки --> */}
                    <div className="relative md:hidden">
                        <button className="burger-menu relative z-10" id="menuToggle">
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}