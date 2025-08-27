import RightArrow from '../../../assets/images/right-arrow.png'
import './custom-cta-button.css'

export default function OpenAccountButton() {
    return (
        <a className="custom-cta-button" href="#contact">
            <span>Открыть счет</span>
            <img alt="Arrow" src={RightArrow} />
        </a>
    )
}