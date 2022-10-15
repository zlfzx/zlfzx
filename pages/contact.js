import Head from 'next/head'
import Header from '../components/Header';
import Image from 'next/image'
import QRCode from '../public/qrcode.png'

export default function Contact() {

    function goToLinkedin() {
        window.open('https://www.linkedin.com/in/muhammadzulfi/', '_blank');
    }

    return (
        <div className="bg-white">
            <Head>
                <title>Contact - Muhammad Zulfi Izzulhaq</title>
                <meta name="title" content="Contact - Muhammad Zulfi Izzulhaq" />
                <meta name="description" content="Experienced as a Laravel Backend Developer for 3 years and interested in web development using PHP and Javascript" />
                <meta name="keywords" content="developer,engineer,software,backend,frontend,laravel,react,vue" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="author" content="Muhammad Zulfi Izzulhaq" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zlfzx.xyz/contact" />
                <meta property="og:title" content="Contact - Muhammad Zulfi Izzulhaq" />
                <meta property="og:description" content="Experienced as a Laravel Backend Developer for 3 years and interested in web development using PHP and Javascript" />
            </Head>

            <Header />
            <div className="container w-full h-screen grid sm:grid-cols-1 mx-auto px-6">
                <div className="w-full  mx-auto flex flex-row items-center justify-center gap-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-poppins text-gray-800">Scan to connect with me 👉</h1>
                    <Image
                        src={QRCode}
                        alt='QRCode'
                        width={300}
                        height={300}
                        className="cursor-pointer"
                        onClick={goToLinkedin}
                    />
                </div>
            </div>

        </div>
    )
}