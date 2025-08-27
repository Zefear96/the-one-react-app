import LoaderVideo from '../assets/videos/logo-anim.gif'

export default function Preloader() {
    return (
        <div id="preloader">
            <video id="preloader-video">
                <source src={LoaderVideo} type="video/webm" />
            </video>
        </div>
    )
}