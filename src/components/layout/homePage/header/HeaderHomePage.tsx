import { Header } from 'antd/es/layout/layout'
import { Menu } from 'antd'
import CtaButton from '../../../dataEntry/ctaButton/CtaButton'
import ButtonLang from '../../../dataEntry/ButtonLang'
import Logo from '../../../../assets/images/logo_white.png'
import '././header.css';
import "../../../../App.css";



export default function HeaderHomePage() {

    const items = [
        {
            key: 'home',
            label: 'Главная',
        },
        {
            key: 'retail',
            label: 'Для физических лиц',
        },
        {
            key: 'business',
            label: 'Для бизнеса',
        },
        {
            key: 'main',
            label: 'Главная',
        },

    ]

    return (
        <Header className='header'>
            <div style={{
                gap: '0.5rem',
                display: 'flex',
                alignItems: 'center'
            }}>
                <a href='/'>
                    <img alt="CardFly Logo" className='logo' src={Logo} />
                </a>
            </div>
            <Menu className='menu'
                // theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items}
                style={{
                    // width: '100%'
                }}
            />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
            }}>
                <ButtonLang />
                <CtaButton text="Подать заявку"/>
                <CtaButton text="Войти"/>
            </div>

        </Header>
    )
}