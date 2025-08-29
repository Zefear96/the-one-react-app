import { useEffect, useState } from 'react';
import './contactSectionStyle.css'
import axios from "axios";
import { notification } from 'antd';

export default function ContactForm() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (message: string) => () => {
        api.open({
            message: message,
            description: message,
            showProgress: true,
            pauseOnHover: true,
        });
    };

    useEffect(() => {
        if (error) {
            openNotification(error);
        }
    }, [error]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await axios.post("https://formspree.io/f/mrbqlvzv", formData, {
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.status === 200) {
                e.currentTarget.reset();
                setShowSuccess(true);

                setTimeout(() => {
                    setShowSuccess(false);
                }, 4000);
            } else {
                setError("Ошибка при отправке. Попробуйте позже.")
            }
        } catch {
            setError("Ошибка при подключении к серверу.")
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                <input name="name" placeholder="Имя*" required type="text" />
                <input name="email" placeholder="E-mail*" required type="email" />
                <input name="phone" placeholder="Телефон" type="text" />
                <input name="company" placeholder="Компания / сайт" type="text" />
                <textarea name="message" placeholder="Комментарий"></textarea>
                <input name="_gotcha" style={{ display: "none" }} type="text" />
                <div className="contact-submit">
                    <button className="cta-button" type="submit" disabled={loading}>
                        {loading ? "Отправка..." : "Подать заявку"}
                    </button>
                    <p className="disclaimer">
                        Подавая заявку вы соглашаетесь на обработку персональных данных.
                    </p>
                </div>
            </form>

            {/* Сообщение об отправке */}
            {showSuccess && (
                <div className="form-success-popup" id="formSuccess">
                    <div className="form-popup-inner">
                        <button
                            className="close-popup"
                            onClick={() => setShowSuccess(false)}
                            type="button"
                        >
                            ×
                        </button>
                        <div className="icon-check">✔</div>
                        <h3>Заявка отправлена</h3>
                        <p>Мы скоро с вами свяжемся.</p>
                    </div>
                </div>
            )}
        </>
    )
}