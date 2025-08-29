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
        <a
            style={{
                display: "inline-block", // вместо hidden/md:inline-block
                // padding: "10px 20px",
                // textDecoration: "none",
                // fontSize: "14px",
                // fontWeight: 500,
                // cursor: "pointer",
                // transition: "background-color 0.3s ease",
            }} 
            className="cta-button" type="submit" href={text === "Подать заявку" ? "#contact" : "#"}
            onClick={handleClick}>{text}
        </a>
    )
}

export default CtaButton;