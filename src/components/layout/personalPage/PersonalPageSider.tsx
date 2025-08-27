import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Divider, Layout, Menu, type MenuProps } from 'antd';
import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
};

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: ` Раздел ЛК ${index + 1}`,
}));

export default function PersonalPageSider() {

    const { logout } = useAuth()
    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

    return (
        <Sider style={siderStyle} breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            <Divider style={{ borderColor: 'white' }} />

            <Button onClick={logout}
                type="text" block
                style={{
                    height: "40px",
                    color: 'white',
                    width: "calc(100% - 8px)",
                    paddingLeft: "24px",
                    margin: "4px",
                    borderRadius: "8px",
                    justifyContent: "start"
                }}>Выйти
            </Button>
        </Sider>
    )
}