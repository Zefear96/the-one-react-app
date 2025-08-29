import { Layout, } from "antd";
import HeaderHomePage from "./header/HeaderHomePage";
import ContentHomePage from "./ContentHomePage";
import FooterTheOne from "./footer/FooterTheOne";



export default function HomePageLayout() {

    // const items = [
    //     {
    //         key: 'home',
    //         label: 'Главная',
    //     },
    //     {
    //         key: 'retail',
    //         label: 'Для физических лиц',
    //     },
    //     {
    //         key: 'business',
    //         label: 'Для бизнеса',
    //     },
    //     {
    //         key: 'main',
    //         label: 'Главная',
    //     },

    // ]


    return (
        <Layout style={{background: '#191919'}}>
            <HeaderHomePage />
            <ContentHomePage/>
            <FooterTheOne/>
        </Layout>
    )
}