import Lottie from "react-lottie"
import DevJson from "./../public/lotties/dev.json"

export default function DevAnimation() {

    return (
        <div className="lg:flex flex-col justify-center">
            <Lottie options={{
                loop: true,
                autoplay: true,
                animationData: DevJson
            }} width={400} height={400} />
        </div>
    )
}