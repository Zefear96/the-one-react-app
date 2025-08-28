import { Tabs, Carousel, Collapse } from "antd";
import CardServicesTabs from "./CardServicesTabs";
import Image3 from "../../../assets/images/image3.png";
import Image4 from "../../../assets/images/image4.png";
import Image5 from "../../../assets/images/image5.png";
import Image6 from "../../../assets/images/image6.png";
import Image7 from "../../../assets/images/image7.png";
import Image8 from "../../../assets/images/image8.png";
import Image9 from "../../../assets/images/image9.png";
import Image12 from "../../../assets/images/image12.png";
import Image13 from "../../../assets/images/image13.png";
import Image14 from "../../../assets/images/image14.png";
import Image15 from "../../../assets/images/image15.png";
import Image16 from "../../../assets/images/image16.png";
import Image17 from "../../../assets/images/image17.png";
import LongRightArrow from "../../../assets/images/long-right-arrow.png";
import CardFeatures from "./CardFeatures";


const { TabPane } = Tabs;

const forIndividuals = [
    {
        img: Image3,
        title: "Частным пользователям, путешественникам",
        desc: "Свободно оплачивайте покупки по всему миру без комиссии и с моментальной конвертацией валют.",
        title2: "Специалистам, работающим за границей",
        desc2: "Свободно отправляйте деньги на Родину в удобной валюте и без комиссии."
    },
    {
        img: Image4,
        title: "Цифровым кочевникам, фрилансерам",
        desc: "Принимайте платежи от клиентов по всему миру и распоряжайтесь средствами в любом месте.",
        title2: "Тем, кто работает с криптовалютой и фиатом",
        desc2: "Моментально приобретайте, обменивайте и инвестируйте средства с рынка криптовалют."
    },
    {
        img: Image5,
        title: "Тем, кто хочет освободиться от банковских ограничений",
        desc: "Получите современный финансовый сервис для управления средствами без бюрократии.",
        title2: null,
        desc2: null
    }
];

const forBusiness = [
    {
        img: Image3,
        title: "Бизнес счета и кошельки",
        desc: "Управление финансами бизнеса в едином аккаунте. Хранение средств, зарплатные проекты, отчёты.",
        title2: "Платформам подписок и маркетплейсам",
        desc2: "Подключите регулярные платежи с поддержкой разных валют."
    },
    {
        img: Image4,
        title: "Прием платежей для бизнеса",
        desc: "Встроенный платёжный сервис с поддержкой карт, Apple Pay, Google Pay и криптовалют.",
        title2: "Платежным сервисам и финтехам, ищущим партнёрскую платформу",
        desc2: "Запускайте свой сервис на нашей инфраструктуре с готовыми лицензиями."
    },
    {
        img: Image5,
        title: "White-label решения",
        desc: "Запустите финтех под своим брендом: счета, карты, платежи и биржа — всё по API.",
        title2: "Тем, кто работает с криптовалютой и фиатом",
        desc2: "Моментально приобретайте, обменивайте и инвестируйте средства с рынка криптовалют."
    }
];

const forIndividualsCard = [
    {
        img: Image6,
        title: "Платежные карты",
        desc: "Мультивалютные карты TheOne. Оплата в магазинах, снятие наличных, автоматическая конвертация при оплате.",
        label: "для физических лиц"
    },
    {
        img: Image7,
        title: "Моментальные переводы",
        desc: "Мгновенный перевод средств между счетами и клиентами. Отправляйте деньги родственникам, друзьям и клиентам в любые точки мира.",
        label: "для физических лиц"
    },
    {
        img: Image8,
        title: "Обмен фиатных валют и криптовалют",
        desc: "Встроенный обменник и биржевые курсы внутри интерфейса. Без скрытых комиссий. Прозрачные конвертации между всеми активами.",
        label: "для физических лиц"
    },
    {
        img: Image9,
        title: "Аналитика и управление активами",
        desc: "Отчетность, история операций, контроль за движением средств. Все прозрачно: от графиков до выгрузки отчетов в удобном формате.",
        label: "для физических лиц"
    }
];

const forBusinessCard = [
    {
        img: Image12,
        title: "Бизнес счета и кошельки",
        desc: "Управление финансами вашего бизнеса в едином аккаунте. Хранение средств, мультивалютные зарплатные проекты, налоговые отчёты и т.д.",
        label: "для бизнеса"
    },
    {
        img: Image13,
        title: "Прием платежей для бизнеса",
        desc: "Встроенный платёжный сервис с высокой конверсией. Поддержка карт, Apple Pay, Google Pay, кошельков и криптовалют.",
        label: "для бизнеса"
    },
    {
        img: Image14,
        title: "White-label решения",
        desc: "Запустите финтех под своим брендом. Счета, карты, приём платежей, биржа — всё по API и франшизной модели.",
        label: "для бизнеса"
    },
    {
        img: Image15,
        title: "Моментальная конвертация валют",
        desc: "Встроенная конвертация внутри вашего бизнес-счета. Выставляйте счета и получайте средства в удобной для вас валюте, вне зависимости от того, в какой валюте клиент оплачивает счёт.",
        label: "для бизнеса"
    },
    {
        img: Image16,
        title: "Аналитика, отчёты, выгрузки",
        desc: "Полный контроль над движением средств и API для интеграций. Возможность выгрузки детальной аналитики в удобном формате для бухгалтерии, налоговой или других целей.",
        label: "для бизнеса"
    },
    {
        img: Image17,
        title: "Инфраструктура для бизнеса (API + SDK)",
        desc: "Подключите TheOne к своему продукту. Платёжные шлюзы, аналитика, KYC/AML, отчётность и настройка потоков.",
        label: "для бизнеса"
    }
];

export default function ServicesSection() {
    return (
        <section className="bg-[#191919] text-white px-6 md:px-10 py-16" style={{
            padding: "0 2.5rem"
        }}>
            <div className="max-w-screen-xl mx-auto">

                <Tabs defaultActiveKey="1" centered size="large" tabBarStyle={{ borderBottom: "none" }} >
                    <TabPane tab="для физических лиц" key="1" >
                        {/* Desktop */}
                        <div className="flex justify-between items-center mb-6"
                            style={{
                                marginTop: "3rem",
                                marginBottom: "1.5rem",
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                                justifyContent: "space-between"

                            }}>
                            <h2 className="text-3xl md:text-4xl font-light">Кому подойдёт:</h2>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem"
                            }}>
                                <span>Вправо&nbsp;&nbsp;&nbsp;</span>
                                <img alt="→" className="h-14 w-auto" draggable="false" src={LongRightArrow} />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Carousel style={{
                                display: "flex",
                                gap: "2rem",
                                alignItems: "stretch",
                                overflowX: "auto",
                                cursor: "grab"
                            }} dots adaptiveHeight draggable >
                                {forIndividuals.map((item, idx) => (
                                    <CardServicesTabs key={idx} {...item} index={idx} mode="desktop" />
                                ))}
                            </Carousel>
                        </div>

                        {/* Mobile */}
                        {/* <div className="md:hidden">
              <Collapse accordion>
                {forIndividuals.map((item, idx) => (
                  <CardServicesTabs key={idx} {...item} index={idx} mode="mobile" />
                ))}
              </Collapse>
            </div> */}
                        <section style={{
                            paddingTop: "10rem",
                            paddingBottom: "5rem",
                            textAlign: "center"
                        }}>
                            {forIndividualsCard.map((item, idx) => (
                                <CardFeatures key={idx} {...item} index={idx} mode="desktop" />
                            ))}
                        </section>
                    </TabPane>

                    <TabPane tab="для бизнеса" key="2">
                        <div className="hidden md:block">
                            <Carousel dots>
                                {forBusiness.map((item, idx) => (
                                    <CardServicesTabs key={idx} {...item} index={idx} mode="desktop" />
                                ))}
                            </Carousel>
                        </div>
                        {/* <div className="md:hidden">
              <Collapse accordion>
                {forBusiness.map((item, idx) => (
                  <CardServicesTabs key={idx} {...item} index={idx} mode="mobile" />
                ))}
              </Collapse>
            </div> */}
                        <section style={{
                            paddingTop: "10rem",
                            paddingBottom: "5rem",
                            textAlign: "center"
                        }}>
                            {forBusinessCard.map((item, idx) => (
                                <CardFeatures key={idx} {...item} index={idx} mode="desktop" />
                            ))}
                        </section>
                    </TabPane>
                </Tabs>
            </div>
        </section>
    );
}
