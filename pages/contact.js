import Head from 'next/head'
import Header from '../components/Header';
import Image from 'next/image'
import QRCode from '../public/qrcode.png'

export default function Contact() {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Muhammad Zulfi Izzulhaq</title>
                <meta name="description" content="Web Developer" />
                <meta name="keywords" content="developer,engineer,software,backend,frontend,laravel,react,vue" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="author" content="Muhammad Zulfi Izzulhaq" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zlfzz.me/" />
                <meta property="og:title" content="Muhammad Zulfi Izzulhaq" />
                <meta property="og:description" content="Web Developer" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className="container w-full h-screen grid sm:grid-cols-1 mx-auto px-6">
                <div className="w-full  mx-auto flex flex-row items-center justify-center gap-8">
                    {/* <div className="flex flex-col justify-center"> */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-poppins text-gray-800">Want to connect with me?</h1>
                        {/* <h2 className="text-xs lg:text-lg sm:text-sm font-poppins text-gray-700 font-medium">I&apos;m Muhammad Zulfi Izzulhaq, Fullstack Web Developer from Pekalongan, Indonesia</h2> */}
                    {/* </div> */}
                    <Image
                        src={QRCode}
                        alt='QRCode'
                        width={300}
                        height={300}
                    />
                </div>
            </div>

        </div>
    )
}