import { useNavigate } from 'react-router-dom';
import './footerStyle.css'
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

export default function FooterTheOne() {
    const navigate = useNavigate();

    return (
        <Footer
            style={{
                backgroundColor: "#1a1a1a",
                color: "white",
                fontSize: "0.875rem", // text-sm
                padding: "3rem 1.5rem", // py-12 px-6
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <Row gutter={[48, 48]}>
                    {/* Меню */}
                    <Col xs={24} md={8}>
                        <h3
                            style={{
                                fontSize: "1.125rem",
                                fontWeight: 600,
                                marginBottom: "1rem",
                                background: "linear-gradient(90deg, #00F0D4, #00FFA3)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Меню
                        </h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {[
                                { label: "Главная", href: "index.html" },
                                {
                                    label: "Для физических лиц",
                                    href: "#tabs-section",
                                    onClick: (e: React.MouseEvent) => {
                                        e.preventDefault();
                                        // тут нужно подставить switchTab('tab1') из твоего проекта
                                        document
                                            .getElementById("tabs-section")
                                            ?.scrollIntoView({ behavior: "smooth" });
                                    },
                                },
                                {
                                    label: "Для бизнеса",
                                    href: "#tabs-section",
                                    onClick: (e: React.MouseEvent) => {
                                        e.preventDefault();
                                        // switchTab('tab2')
                                        document
                                            .getElementById("tabs-section")
                                            ?.scrollIntoView({ behavior: "smooth" });
                                    },
                                },
                                { label: "Контакты", onClick: () => navigate('/contacts') },
                                {
                                    label: "Лицензии",
                                    href: "licenses/CartFly_licenses.pdf",
                                    target: "_blank",
                                },
                                {
                                    label: "Публичная оферта",
                                    href: "licenses/Договор публичной оферты.pdf",
                                    target: "_blank",
                                },
                                {
                                    label: "Политика конфиденциальности",
                                    href: "licenses/Политика конфиденциальности.pdf",
                                    target: "_blank",
                                },
                                {
                                    label: "Согласие на обработку персональных данных",
                                    href: "licenses/Согласие на обработку персональных данных.pdf",
                                    target: "_blank",
                                },
                            ].map((item, index) => (
                                <li key={index} style={{ marginBottom: "0.75rem" }}>
                                    <a
                                        href={item.href}
                                        onClick={item.onClick}
                                        target={item.target}
                                        rel={item.target === "_blank" ? "noopener noreferrer" : ""}
                                        style={{
                                            color: "white",
                                            textDecoration: "none",
                                        }}
                                        onMouseOver={(e) =>
                                            (e.currentTarget.style.color = "#00F0D4")
                                        }
                                        onMouseOut={(e) =>
                                            (e.currentTarget.style.color = "white")
                                        }
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Юридическая информация */}
                    <Col xs={24} md={16} style={{ color: "rgba(255,255,255,0.6)" }}>
                        <p>
                            Общество с ограниченной ответственностью "Карт Флай". ИНН
                            02408202110277. Регистрационный номер 199526-3301-ООО.
                        </p>
                        <p style={{marginTop:"16px"}}>
                            Лицензия № 3060151124, выдана Национальным банком Кыргызской
                            Республики от 15 ноября 2024 года на право осуществлять
                            деятельность в качестве платежной организации по приему и
                            проведению платежей и расчетов за товары и услуги, не являющиеся
                            результатом своей деятельности.
                        </p>
                        <p style={{marginTop:"16px"}}>
                            Лицензия № 2058151124, выдана Национальным банком Кыргызской
                            Республики от 15 ноября 2024 года на право осуществлять
                            деятельность в качестве оператора платежной системы по приему,
                            обработке и выдаче финансовой информации (процессинг, клиринг).
                        </p>
                        <p style={{marginTop:"16px"}}>
                            Работаем в соответствии с законодательством Кыргызской Республики
                            и международными стандартами KYC/AML.
                        </p>
                        <p style={{marginTop:"16px"}}> 
                            Кыргызстан, Бишкек, Первомайский район,
                            <br />
                            Улица Панфилова, 145, офис 20
                        </p>
                        <p
                            style={{
                                borderTop: "1px solid rgba(255,255,255,0.1)",
                                paddingTop: "1rem",
                                marginTop: "1.5rem",
                            }}
                        >
                            © 2025 TheOne — Все права защищены. ОсОО «Карт Флай»
                        </p>
                    </Col>
                </Row>
            </div>
        </Footer>
    )
}