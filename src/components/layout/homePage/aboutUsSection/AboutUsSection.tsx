import { Col, Row } from "antd";
import OpenAccountButton from "../../../dataEntry/openAccountButton/OpenAccountButton";
import LogoMobile from "../../../../assets/images/logo-mobile.png";
import LogoBlur from "../../../../assets/images/logo-blur.png";

export default function AboutUsSection() {
    return (
        <section className="hero-section">
            <Row align="middle" justify="space-between" style={{
            }}>
                {/* Левая часть */}
                <Col xs={24} lg={12} className="hero-left">
                    <div className="text-block">
                        <h1 className="hero-title">
                            <span className="gradient-title">TheOne –</span>
                            <br />
                            <span className="nowrap">Единое финансовое</span> решение
                        </h1>
                        <p className="hero-subtitle">
                            Финансовая экосистема нового поколения: лицензированный банк,
                            мультивалютная платформа и криптобиржа в едином интерфейсе
                        </p>
                        <OpenAccountButton />
                    </div>
                </Col>

                {/* Правая часть */}
                <Col xs={24} lg={12} className="hero-right">
                    {/* Мобильное изображение */}
                    <img
                        src={LogoMobile}
                        alt="TheOne mobile visual"
                        className="hero-image mobile"
                    />

                    {/* Десктопное изображение */}
                    <img
                        src={LogoBlur}
                        alt="TheOne desktop visual"
                        className="hero-image desktop"
                    />
                </Col>
            </Row>
        </section>
    )
}