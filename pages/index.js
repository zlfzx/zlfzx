import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Header from '../components/Header';
import Link from 'next/link'
import DevAnimation from '../components/DevAnimation';

const FrontPageAnimation = dynamic(() => import('../components/FrontPageAnimation'));

export default function Home() {

  return (
    <div className="bg-white">
      <Head>
        <title>Muhammad Zulfi Izzulhaq</title>
        <meta name="title" content="Muhammad Zulfi Izzulhaq" />
        <meta name="description" content="Experienced as a Laravel Backend Developer for 3 years and interested in web development using PHP and Javascript" />
        <meta name="keywords" content="developer,engineer,software,backend,frontend,laravel,react,vue" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Muhammad Zulfi Izzulhaq" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zlfzx.xyz/" />
        <meta property="og:title" content="Muhammad Zulfi Izzulhaq" />
        <meta property="og:description" content="Experienced as a Laravel Backend Developer for 3 years and interested in web development using PHP and Javascript" />
      </Head>

      <Header/>
      <div className='container w-full h-screen mx-auto'>
        <div className='flex flex-col justify-center items-center h-full'>
          <DevAnimation/>
          <div>
            <h1 className='lg:text-5xl text-4xl font-mono' data-tooltip-target="tooltip-default"><span className='underline'>Hello</span> <span className='font-bold italic'>World!</span></h1>
          </div>
        </div>
      </div>

      {/* <div className="container w-full h-screen grid lg:grid-cols-2 sm:grid-cols-1 mx-auto px-6">
        <DevAnimation />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-mono text-gray-800">Hello <span className="font-bold">World!</span></h1>

          <p className="font-poppins text-gray-700 text-xs lg:text-sm mt-5">
          Experienced as a Laravel Backend Developer for 2 years and interested in web development using PHP and Javascript Language. Based on this experience, I was able to adapt to the culture of working in a team or individually and build a character who is quick to learn new things.
          </p>
        </div>
      </div> */}

    </div>
  )
}