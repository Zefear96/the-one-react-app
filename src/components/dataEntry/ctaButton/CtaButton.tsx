import type React from "react";
import { useAuth } from "../../../hooks/useAuth";
import './cta-button.css'

type CustomButtonProps = {
    text: string;
};

const CtaButton: React.FC<CustomButtonProps> = ({ text }) => {
    const { login } = useAuth();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (text === "Войти") {
            e.preventDefault();
            login();
        }
    }

    return (
        <a className="cta-button hidden md:inline-block" type="submit" href={text === "Подать заявку" ? "#contact" : "#"}
            onClick={handleClick}>{text}
        </a>
    )
}

export default CtaButton;