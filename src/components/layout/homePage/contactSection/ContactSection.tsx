import ContactForm from "./ContactForm";
import './contactSectionStyle.css'
import { useInView } from "react-intersection-observer";


export default function ContactSection() {
    const { ref, inView } = useInView({
        triggerOnce: false, // анимация запускается 
        threshold: 0.2,    // сработает, когда 20% блока видно
    });

    return (
        <section className="contact-wrapper" id="contact">
            <div ref={ref}
                className={`contact-section ${inView ? "visible" : ""}`}>
                <div className="contact-container">
                    <div className="contact-text">
                        <h2 style={{
                            color: "white"
                        }} className="text-white font-light mt-0">
                            Единое платёжное решение, <span className="text-gradient">которое следует подключить уже сегодня</span>
                        </h2>
                        <p className="contact-subtitle">
                            Заполните форму — и наш менеджер свяжется с вами в течение рабочего дня.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
            <div className="contact-glow"></div>
        </section>
    )
}