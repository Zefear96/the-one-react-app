import { Content } from "antd/es/layout/layout";
import LogoMobile from "../../../assets/images/logo-mobile.png";
import LogoBlur from "../../../assets/images/logo-blur.png";
import Landing from "../../../assets/features/Landing.png";
import LongRightArrow from "../../../assets/images/long-right-arrow.png";
import Shield from "../../../assets/features/shield.png";
import Bitcoin from "../../../assets/features/Bitcoin.png";
import "../../../App.css";
import { Button, Card, Col, Row } from "antd";
import "./contents.css";
import OpenAccountButton from "../../dataEntry/openAccountButton/OpenAccountButton";


export default function ContentHomePage() {
    return (
        <Content style={{
            padding: '0 48px',
            background: '#191919'
        }}>
            <section className="hero-section">
                <div className="container">
                    <Row gutter={[40, 40]} align="middle" justify="space-between">
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
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    {/* Заголовок */}
                    <h2 className="features-title">
                        Мы создаем{" "}
                        <span className="highlight">
                            <br className="desktop-break" />
                            единую экосистему будущего
                        </span>
                    </h2>

                    {/* Мобильный подзаголовок */}
                    <p className="mobile-subtitle">
                        Все продукты работают в едином клиентском интерфейсе — без лишних
                        приложений, переключений, потерь времени и средств на переводах и
                        конвертациях.
                    </p>

                    {/* Горизонтальный скролл */}
                    <div className="scroll-container">
                        {/* Fade справа (desktop only) */}
                        <div className="fade-right" />

                        <div className="scroll-content">
                            {/* Инфо-карточка (desktop only) */}
                            <Card bordered={false} className="info-card">
                                <p>
                                    Все продукты работают в едином клиентском интерфейсе — без
                                    лишних приложений, переключений, потерь времени и средств на
                                    переводах и конвертациях.
                                </p>
                                <div className="arrow-hint">
                                    <span>Вправо&nbsp;&nbsp;&nbsp;</span>
                                    <img
                                        alt="→"
                                        src={LongRightArrow}
                                        className="arrow-img"
                                        draggable={false}
                                    />
                                </div>
                            </Card>

                            {/* Карточка 1 */}
                            <Card bordered={false} className="feature-card">
                                <div className="feature-text">
                                    <h3 className="feature-title">
                                        Лицензии НБКР
                                    </h3>
                                    <p>
                                        Платежная и криптовалютная лицензии, полное юридическое
                                        соответствие.
                                    </p>
                                </div>
                                <img
                                    alt="Shield"
                                    src={Shield}
                                    className="feature-img"
                                />
                            </Card>

                            {/* Карточка 2 */}
                            <Card bordered={false} className="feature-card">
                                <div className="feature-text">
                                    <h3 className="feature-title">
                                        Мультивалютная платформа
                                    </h3>
                                    <p>BTC, ETH, USDT, USD, EUR, KGS — все в одном кошельке.</p>
                                </div>
                                <img
                                    alt="Bitcoin"
                                    src={Bitcoin}
                                    className="feature-img"
                                />
                            </Card>

                            {/* Карточка 3 */}
                            <Card bordered={false} className="feature-card">
                                <div className="feature-text">
                                    <h3 className="feature-title">
                                        Единый интерфейс
                                    </h3>
                                    <p>
                                        Карты, криптовалюты, биржа и платежи — все связано, все
                                        синхронизировано.
                                    </p>
                                </div>
                                <img
                                    alt="Landing"
                                    src={Landing}
                                    className="feature-img"
                                />
                            </Card>
                        </div>
                    </div>

                    {/* Подсказка (мобильная) */}
                    <div className="arrow-hint mobile-only">
                        <span>Вправо&nbsp;&nbsp;&nbsp;</span>
                        <img
                            alt="→"
                            src={LongRightArrow}
                            className="arrow-img"
                            draggable={false}
                        />
                    </div>
                </div>
            </section>

        </Content >
    )
}