
import { Layout, theme } from 'antd';
import PersonalPageHeader from './PersonalPageHeader';
import React from 'react';
import PersonalPageSider from './PersonalPageSider';

const { Content, Footer } = Layout;

export default function PersonalPageLayout() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout hasSider>
            <PersonalPageSider />
            <Layout>
                <PersonalPageHeader />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <h1>Добро пожаловать в личный кабинет The One</h1>
                        {
                            // indicates very long content
                            Array.from({ length: 100 }, (_, index) => (
                                <React.Fragment key={index}>
                                    {index % 20 === 0 && index ? 'more' : '...'}
                                    <br />
                                </React.Fragment>
                            ))
                        }
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    The One ©2025 Created by The One
                </Footer>
            </Layout>
        </Layout>
    )
}