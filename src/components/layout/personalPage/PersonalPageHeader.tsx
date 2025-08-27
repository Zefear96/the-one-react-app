import { theme } from "antd";
import { Header } from "antd/es/layout/layout";
import UserAvatar from "../../dataDisplay/UserAvatar";
import { useAuth } from "../../../hooks/useAuth";

export default function PersonalPageHeader() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { user } = useAuth();

    return (
        <Header style={{ padding: 0, background: colorBgContainer, display:'flex', justifyContent:'end'}}>
            <div style={{
                display:'flex',
                alignItems:'center',
                padding: '10px'
            }}>
                <p style={{
                    margin: '10px',
                    fontWeight:'bold'
                }}>{user?.name ? user.name : 'User NA'}</p>
                <UserAvatar/>
            </div>
        </Header >
    )
}