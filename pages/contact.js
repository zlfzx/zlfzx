import Head from 'next/head'
import Header from '../components/Header';
import Image from 'next/image'
import QRCode from '../public/qrcode.png'

export default function Contact() {
    return (
        <div className="bg-white">
            <Head>
                <title>Contact - Muhammad Zulfi Izzulhaq</title>
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