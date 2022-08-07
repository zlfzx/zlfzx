import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Header from '../components/Header';
import Link from 'next/link'

const FrontPageAnimation = dynamic(() => import('../components/FrontPageAnimation'));

export default function Home() {

  return (
    <div className="bg-white">
      <Head>
        <title>Muhammad Zulfi Izzulhaq</title>
        <meta name="description" content="I'm Muhammad Zulfi Izzulhaq, Backend Developer from Pekalongan, Indonesia" />
        <meta name="keywords" content="developer,engineer,software,backend,frontend,laravel,react,vue" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Muhammad Zulfi Izzulhaq" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zlfzx.xyz/" />
        <meta property="og:title" content="Muhammad Zulfi Izzulhaq" />
        <meta property="og:description" content="I'm Muhammad Zulfi Izzulhaq, Backend Developer from Pekalongan, Indonesia" />
      </Head>

      <Header/>
      <div className="container w-full h-screen grid lg:grid-cols-2 sm:grid-cols-1 mx-auto px-6">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-poppins text-gray-800">Hello <span className="font-bold">World!</span></h1>
          <h2 className="text-xs lg:text-lg sm:text-sm font-poppins text-gray-700 font-medium">I&apos;m Muhammad Zulfi Izzulhaq, Backend Developer from Pekalongan, Indonesia</h2>

          <p className="font-poppins text-gray-700 text-xs lg:text-sm mt-5">
          Experienced as a Laravel Backend Developer for 2 years and interested in web development using PHP and Javascript Language. Based on this experience, I was able to adapt to the culture of working in a team or individually and build a character who is quick to learn new things.
          </p>
          <div className="flex flex-row justify-center items-center mt-6">
            <Link href="https://profile.zlfzx.xyz">
              <a target="_blank" rel="noreferrer" className="font-poppins px-6 py-2 duration-200 uppercase rounded-full bg-gray-800 text-white border-2 border-gray-800 mr-4">Profile</a>
            </Link>
            <Link href="/project">
              <a className="font-poppins px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Project</a>
            </Link>
          </div>
        </div>
        <FrontPageAnimation />
      </div>

    </div>
  )
}