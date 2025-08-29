import { Col, Row } from "antd";
import ContactForm from "../components/layout/homePage/contactSection/ContactForm";
import FooterTheOne from "../components/layout/homePage/footer/FooterTheOne";
import HeaderHomePage from "../components/layout/homePage/header/HeaderHomePage";

export default function ContactPage() {
    return (
        <section style={{}}>
            <HeaderHomePage />
            <section style={{
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                padding: "8rem 2.5rem 0",
            }} className="text-center px-6 md:px-10 pt-32">
                <h2 style={{
                    fontSize: window.innerWidth >= 768 ? "3rem" : "1.875rem", // md:text-5xl / text-3xl
                    fontWeight: 300, // font-light
                    lineHeight: 1.33, // leading-snug
                }}
                >
                    Остались вопросы?<br />
                    <span className="text-gradient">Свяжитесь с нами удобным способом</span>
                </h2>
                <p style={{
                    color: "rgba(255, 255, 255, 0.8)", // text-white/80
                    fontSize: "1.125rem",               // text-lg
                    marginTop: "1rem",                  // mt-4
                    maxWidth: "42rem",                  // max-w-2xl ≈ 672px
                    marginLeft: "auto",
                    marginRight: "auto",                // mx-auto
                }}>
                    Мы готовы ответить на любые ваши запросы и поможем вам подключить TheOne под ваш бизнес.
                </p>
            </section>
           {/* Контакты */}
           <section style={{ backgroundColor: 'black', paddingTop: '6rem', paddingBottom: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <Row gutter={[32, 32]} justify="space-between" align="top">
                        <Col xs={24} md={12}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'white' }}>
                                <div>
                                    <h2 style={{ fontWeight: 300, marginBottom: '0.5rem', color: 'white' }}>
                                        Телефоны
                                    </h2>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 0 }}>
                                        +996 (222) 38-22-23
                                    </p>
                                </div>
                                <div>
                                    <h2 style={{ fontWeight: 300, marginBottom: '0.5rem', color: 'white' }}>
                                        Почта
                                    </h2>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 0 }}>
                                        info@theone.kg
                                    </p>
                                </div>
                                <div>
                                    <h2 style={{ fontWeight: 300, marginBottom: '0.5rem', color: 'white' }}>
                                        Адрес
                                    </h2>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 0 }}>
                                        Кыргызстан, Бишкек, Первомайский район,<br />
                                        Улица Панфилова, 145, офис 20
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} md={12}>
                            <ContactForm />
                        </Col>
                    </Row>
                </div>
            </section>

            {/* <!-- 🌍 Карта Google --> */}
            <section className="w-full">
                <iframe
                    src="https://www.google.com/maps?q=42.864673,74.600841&z=16&output=embed"
                    width="100%"
                    height="500"
                    style={{ border: "0" }}
                    // allowfullscreen
                    loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>

            </section>
            <FooterTheOne />
        </section>
    )
}