import DevJson from "./../public/lotties/dev.json"
import { Player } from '@lottiefiles/react-lottie-player';

export default function DevAnimation() {

    return (
        <div className="lg:flex flex-col justify-center">
            <Player
                autoplay
                loop
                src={DevJson}
                style={{ height: '400px', width: '400px' }}
            />
        </div>
    )
}