import { Content } from "antd/es/layout/layout";


import TimelineSections from "./timeline/TimelineSections";
import "../../../App.css";
import "./contents.css";
import ServicesTabs from "./ServicesTabs";
import Marquee from "./marquee/Marquee";
import StatisticSection from "./statisticSection/StatisticSection";
import SystemInfoSection from "./systemSection/SystemInfoSection";
import AboutUsSection from "./aboutUsSection/AboutUsSection";
import CreateSystemSection from "./createSystemSection/CreateSystemSection";


export default function ContentHomePage() {
    return (
        <Content style={{
            // padding: '0 48px',
            background: '#191919'
        }}>
            <AboutUsSection/>
            <CreateSystemSection/>
            <ServicesTabs/>
            <Marquee/>
            <StatisticSection/>
            <SystemInfoSection/>
        </Content >
    )
}