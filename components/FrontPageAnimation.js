import Lottie from 'react-lottie'
import ProgrammerJson from './../public/lotties/programmer.json'

export default function FrontPageAnimation() {

    const lottieOption = {
        loop: true,
        autoplay: true,
        animationData: ProgrammerJson
    }

    return (
        <div className="lg:flex flex-col justify-center sm:hidden hidden">
            <Lottie options={lottieOption} width={400} height={400} />
        </div>
    )
}