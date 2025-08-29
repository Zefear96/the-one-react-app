import { Row, Col, Typography, Statistic } from "antd";
import CountUp from 'react-countup';
import React from 'react';
import type { StatisticProps } from 'antd';
import { useInView } from "react-intersection-observer";
import Title from "antd/es/typography/Title";
import TimelineSections from "../timeline/TimelineSections";


const formatter: StatisticProps['formatter'] = (value) => (
    <CountUp
        end={value as number} separator="."
        decimals={Number.isInteger(value) ? 0 : 1} // ← количество знаков после запятой
        // ← количество знаков после запятой
        decimal="."  // ← символ разделителя (по умолчанию ".")
    />
);

const { Paragraph } = Typography;


export default function StatisticSection() {
    const items = [
        {
            value: 150,
            suffix: "+",
            description: "валют и криптовалют",
        },
        {
            value: "Кыргызстан",
            suffix: "",
            description: "национальное покрытие",
        },
        {
            value: 10,
            suffix: "+",
            description: "способов приема платежей",
        },
        {
            value: 99.8,
            suffix: "%",
            description: "аптайм платформы",
        },
        {
            value: 100,
            suffix: "%",
            description: "соответствие PCI DSS, ISO 27001 и GDPR",
        },
    ];

    const itemsCard = [
        {
            title: "Лицензии НБКР",
            desc: "Регистрация как платёжная организация и криптовалютная биржа в Кыргызстане."
        },
        {
            title: "KYC / AML модули",
            desc: "Проверка пользователей и транзакций через Sumsub и HermesPro."
        },
        {
            title: "2FA и биометрия",
            desc: "Двухфакторная аутентификация, вход по отпечатку и Face ID."
        },
        {
            title: "Безопасность хранения",
            desc: "Оффлайн-хранилище криптоактивов с функцией задержки вывода и шифрованием."
        },
        {
            title: "Международные стандарты",
            desc: "Полное соответствие PCI DSS, ISO 27001, GDPR."
        },
        {
            title: "Защита данных и серверов",
            desc: "Серверы в сертифицированных дата-центрах, резервное копирование, мониторинг 24/7."
        },
    ]

    const { ref, inView } = useInView({
        triggerOnce: false, // анимация запускается 
        threshold: 0.2,    // сработает, когда 20% блока видно
    });

    return (
        <section style={{
            padding: "6rem 2.5rem"
        }}>
            <h2 style={{
                fontSize: "3rem",
                color: "white",
                // fontWeight:"300",
                marginBottom: "4rem"
            }}>Единое <span style={{ color: "#00F0D4" }}>финансовое <br /> решение</span></h2>

            <div style={{ paddingBottom: "6rem" }} ref={ref}>
                <Row
                    gutter={[32, 32]}
                    justify="space-between"
                    style={{ textAlign: "start", color: "white" }}
                >
                    {items.map((item, index) => (
                        <Col
                            key={index}
                            xs={24} // ≤576px → 2 колонки
                            sm={12} // ≥576px → 2 колонки
                            md={4}  // ≥768px → ~5 колонок (4/24 ширины = 1/6, близко к 5 колонкам)
                            style={{
                                borderLeft: index === 0 ? "none" : "1px solid rgba(255,255,255,0.8)",
                                paddingLeft: index === 0 ? 0 : "1.5rem",
                            }}
                        >
                            {typeof item.value === "string" ? (
                                <Title style={{
                                    fontSize: "1.875rem",
                                    marginBottom: "0.25rem",
                                    color: "#00F0D4",
                                    lineHeight: "2.25rem",
                                    fontWeight: "500"
                                }}>
                                    {item.value}
                                </Title>
                            ) : (
                                <Statistic
                                    formatter={formatter}
                                    value={inView ? item.value : 0}
                                    suffix={item.suffix}
                                    valueStyle={{
                                        color: "#00F0D4",
                                        fontSize: "1.875rem",
                                        fontWeight: 500,
                                        lineHeight: "2.25rem",
                                        // fontWeight: "500"
                                    }}
                                />
                            )}
                            <Paragraph style={{ fontSize: "1.25rem", margin: 0, color: "white" }}>
                                {item.description}
                            </Paragraph>
                        </Col>
                    ))}
                </Row>
            </div>

            <h2 style={{
                fontSize: "3rem",
                color: "white",
                // fontWeight:"300",
                marginBottom: "4rem"
            }}>Единое и надёжное <br /> <span style={{ color: "#00F0D4" }}>финансовое решение</span></h2>


            <Row
                // gutter={[32, 32]}
                justify="center"
                style={{
                    gap: "1.5rem",
                    marginBottom: "6rem"
                }}
            >
                {itemsCard.map((item, index) => (
                    <Col
                        key={index}
                        xs={24} // 1 колонка
                        sm={12} // 2 колонки
                        md={6}  // 3 колонки
                        style={{
                            padding: "1.5rem",
                            backgroundColor: "white",
                            borderRadius: "1.5rem",
                            textAlign: "start",
                        }}
                    >
                        <Title style={{
                            fontSize: "1.5rem",
                            marginBottom: "0.5rem",
                            color: "black",
                            lineHeight: "2rem",
                            fontWeight: "500"
                        }}>
                            {item.title}
                        </Title>
                        <Paragraph style={{
                            fontSize: "1.25rem",
                            margin: 0,
                            color: "black"
                        }}>
                            {item.desc}
                        </Paragraph>
                    </Col>
                ))}
            </Row>
            <TimelineSections />
        </section>
    )
}