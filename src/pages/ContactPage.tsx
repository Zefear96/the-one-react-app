import ContactForm from "../components/layout/homePage/contactSection/ContactForm";
import FooterTheOne from "../components/layout/homePage/footer/FooterTheOne";
import HeaderHomePage from "../components/layout/homePage/header/HeaderHomePage";

export default function ContactPage() {
    return (
        <>
            <HeaderHomePage />
            {/* <!-- Контакты --> */}
            <section className="pt-24 px-6 md:px-10 max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-16 items-start">
                    <div className="flex-1 space-y-6">
                        <div>

                            <h2 className="text-2xl font-light mb-2">Телефоны</h2>
                            <p className="text-white/80">+996 (222) 38-22-23</p>
                            {/* <!-- <p className="text-white/80">+996 700 000 000</p> --> */}
                        </div>
                        <div>
                            <h2 className="text-2xl font-light mb-2">Почта</h2>
                            <p className="text-white/80">info@theone.kg</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-light mb-2">Адрес</h2>
                            <p className="text-white/80">Кыргызстан, Бишкек, Первомайский район,<br />Улица Панфилова, 145, офис 20</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <ContactForm />
                    </div>
                </div>
            </section><br />

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
        </>
    )
}