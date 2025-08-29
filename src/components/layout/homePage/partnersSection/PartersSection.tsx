import Visa from '../../../../assets/images/visa.png';
import MasterCard from '../../../../assets/images/mastercard.png';
import Elcart from '../../../../assets/images/elcart.png';

export default function PartnersSection() {
    return (
        <section style={{
            padding:"4rem 2.5rem 8rem"
        }}>
            <div style={{
                maxWidth:"1280px",
                overflowX:"auto",
                margin:"auto"
            }}>
                <div style={{
                    minWidth:"max-content",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-around",
                }}>
                    <img style={{objectFit:"contain", height:"6rem"}} src={Visa} alt="Visa" />
                    <img style={{objectFit:"contain", height:"6rem"}} src={MasterCard} alt="MasterCard" />
                    <img style={{objectFit:"contain", height:"6rem"}} src={Elcart} alt="Элкарт" />
                </div>
            </div>
        </section>
    )
}