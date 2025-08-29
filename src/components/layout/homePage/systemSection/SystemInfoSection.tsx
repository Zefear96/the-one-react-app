import { Card, Col, Row } from "antd";
import TheOne from '../../../../assets/cards-logo/theone.png'
import CardFly from '../../../../assets/cards-logo/cardfly.png'
import Ofex from '../../../../assets/cards-logo/ofex.png'
import Rectangle from '../../../../assets/cards-logo/rectangle.png'
import './flipCard.css'

export default function SystemInfoSection() {
    const cardsData = [
        {
            logo: TheOne,
            title: "Единый финансовый интерфейс",
            items: [
                "Хранение всех активов (фиат + крипта)",
                "Управление счетами, картами и операциями (бизнеса и личными)",
                "Мгновенная конвертация валют",
                "Финансовые услуги",
            ],
        },
        {
            logo: CardFly,
            title: "Сервис приёма платежей для бизнеса внутри экосистемы TheOne",
            items: [
                "Проведение оплат в любой валюте в один клик",
                "Автоконвертация при оплате",
                "Приём платежей от клиентов по всему миру",
                "Интеграция с кошельками в TheOne и криптовалютными активами в Ofex",
            ],
        },
        {
            logo: Ofex,
            title: "Криптовалютная биржа внутри экосистемы TheOne",
            items: [
                "Торговля 150+ криптовалютами",
                "Моментальное пополнение с кошелька TheOne (или любого другого)",
                "Обслуживание криптовалютных операций Card Fly",
                "Создание криптопортфеля, автопокупки, отслеживание",
            ],
        },
    ];

    return (
        <section style={{
            padding: "4rem 2rem",
            background: "white",
            width: "100%"
        }}>
            <div style={{
                color: "black"
            }}>
                <h2 style={{
                    fontSize: "3rem",
                    lineHeight: "1",
                    fontWeight: "300",
                }}>Как работает <br /> экосистема TheOne
                </h2>

                <div style={{
                    color: "black",
                    lineHeight: "1.625",
                    marginTop: "1rem",
                    fontSize: "1.25rem",
                    marginBottom: "3rem"
                }}>
                    <p style={{
                        color: "black"
                    }}>
                        <a href="#" style={{ color: "black" }}>Единый интерфейс</a> — бесконечные возможности.<br />Всё связано. Всё синхронизировано.<br />
                        <a href="#" style={{ fontWeight: "700", color: "black" }}>Всё — в одной экосистеме.</a>
                    </p>
                </div>
            </div>

            <Row gutter={[24, 24]} style={{
                minHeight: "500px"
            }}>
                {cardsData.map((card, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <div className="flip-card">
                            <div className="flip-card-inner">

                                {/* Front */}
                                <Card
                                    bodyStyle={{
                                        backgroundColor: "white",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                        height: "400px",
                                        padding: "1.5rem"
                                    }}
                                    variant="outlined"
                                    className="flip-card-front"
                                    hoverable
                                    cover={
                                        <div
                                            style={{
                                                backgroundColor: "black",
                                                // borderTopRightRadius: "1rem",
                                                // borderTopLeftRadius: "1rem",
                                                display: "flex",
                                                alignItems: "center",
                                                padding: "0 1.5rem",
                                                height: "5rem",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",

                                            }}>
                                            <img
                                                src={card.logo}
                                                alt={card.logo}
                                            // className={card.logo === "theone.png" ? "h-12" : "h-10"}
                                            />
                                        </div>
                                    }
                                >
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        height: "calc(100% - 80px)"
                                    }}>
                                        <p style={{ color: "black", fontSize: "1.5rem", lineHeight: "2rem", fontWeight: "500" }}>
                                            {card.title}</p>
                                        <div style={{ display: "flex", justifyContent: "end" }}>
                                            <div style={{
                                                borderRadius: "50%",
                                                backgroundColor: "#00F0D4",
                                                height: "1.75rem",
                                                width: "1.75rem",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: "black"
                                            }}>→</div>
                                        </div>
                                    </div>
                                </Card>

                                {/* Back */}
                                <Card
                                    bodyStyle={{
                                        backgroundColor: "black",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                        color: "white",
                                        height: "400px",
                                    }}

                                    className="flip-card-back"
                                    hoverable
                                    cover={
                                        <div
                                            style={{
                                                backgroundColor: "black",
                                                // borderTopRightRadius: "1rem",
                                                // borderTopLeftRadius: "1rem",
                                                display: "flex",
                                                alignItems: "center",
                                                padding: "0 1.5rem",
                                                height: "5rem",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                            }}>
                                            <img
                                                src={card.logo}
                                                alt={card.logo}
                                            // className={card.logo === "theone.png" ? "h-12" : "h-10"}
                                            />
                                        </div>
                                    }
                                >
                                    <div
                                        style={{
                                            backgroundColor: "black",
                                            color: "white"
                                        }}
                                    >
                                        {card.items.map((text, i) => (
                                            <p key={i} className="text-base flex items-start gap-2">
                                                <img
                                                    src={Rectangle}
                                                    className="w-2.5 h-2.5 mt-1 object-contain"
                                                />
                                                <span> {text}</span>
                                            </p>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </section>
    )
}