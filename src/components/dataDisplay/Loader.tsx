import LogoAnim from '../../assets/videos/logo-anim.webm';

export default function Loader() {
    return(
        <div id="preloader">
            <video id="preloader-video">
                <source src={LogoAnim} type="video/webm" />
            </video>
        </div>
    )
}