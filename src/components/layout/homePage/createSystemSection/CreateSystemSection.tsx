import Landing from "../../../../assets/features/Landing.png";
import LongRightArrow from "../../../../assets/images/long-right-arrow.png";
import Shield from "../../../../assets/features/shield.png";
import Bitcoin from "../../../../assets/features/Bitcoin.png";
import {  Card, Col, Row } from "antd";

export default function CreateSystemSection() {
    return(
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
            {/* <p className="mobile-subtitle" style={{

            }}>
                Все продукты работают в едином клиентском интерфейсе — без лишних
                приложений, переключений, потерь времени и средств на переводах и
                конвертациях.
            </p> */}

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
    )
}