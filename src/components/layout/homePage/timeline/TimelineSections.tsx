import { Card, Col, Row, Timeline } from "antd";

export default function TimelineSections() {
    const timelineItems = [
        {
            year: "2024",
            month: "",
            desc: "Получение необходимых лицензий и создание технической инфраструктуры"
        },
        {
            year: "2025",
            month: "(сентябрь)",
            desc: "Запуск на рынках Кыргызстана"
        },
        {
            year: "2025",
            month: "(октябрь)",
            desc: "Масштабирование на MENA"
        },
        {
            year: "2026",
            month: "(октябрь)",
            desc: "Лицензия в ОАЭ (ADGM/DIFC)"
        },
        {
            year: "2026",
            month: "(сентябрь)",
            desc: "Партнёрские интеграции с банками, криптобиржами"
        },
        {
            year: "2027",
            month: "",
            desc: "BaaS-платформа для глобальных финтехов"
        },
    ]

    return (
        <Row style={{
            paddingTop: "4rem",
        }} align="top">
            {/* Заголовок слева */}
            <Col xs={24} md={12} style={{ position: "sticky", top: 100 }}>
                <h2 style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: 300,
                    lineHeight: "1"
                }}>
                    Единое ... <br />
                    <span style={{ color: "#00F0D4" }}>
                        и быстрорастущее <br /> финансовое решение
                    </span>
                </h2>
            </Col>

            {/* Таймлайн справа */}
            <Col xs={24} md={12}>
                <Timeline
                    mode="left"
                    items={timelineItems.map((item) => ({
                        dot: (
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    background:
                                        "linear-gradient(90deg, #32FFB1 0%, #00F0D4 100%)",
                                    boxShadow: "0 0 10px rgba(0, 240, 212, 0.6)",
                                }}
                            />
                        ),
                        children: (
                            <Card
                                style={{
                                    background: "#262626",
                                    color: "#fff",
                                    borderRadius: "16px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                }}
                            >
                                <div style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "600",
                                    lineHeight: "2rem",
                                    marginBottom: "0.25rem"
                                }}>
                                    {item.year} <span style={{
                                        fontSize: "0.875rem",
                                    }}>{item.month}</span>
                                </div>
                                <div style={{ fontSize: "0.95rem" }}>{item.desc}</div>
                            </Card>
                        ),
                    }))}
                />
            </Col>
        </Row>
    )
}