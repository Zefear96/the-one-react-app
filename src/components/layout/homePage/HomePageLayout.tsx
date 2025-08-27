import { Layout, } from "antd";
import HeaderHomePage from "./HeaderHomePage";
import ContentHomePage from "./ContentHomePage";



export default function HomePageLayout() {

    const { Footer } = Layout;

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
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
}