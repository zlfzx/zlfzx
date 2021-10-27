import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';
import programmer from "../public/lotties/programmer.json"

import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

import { FaLaravel } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

import Header from '../components/Header';

export default function Home() {

  const lottieOption = {
    loop: true,
    autoplay: true,
    animationData: programmer
  }

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

      <Header/>
      {/* <div className="flex flex-col justify-center items-center h-screen py-10 bg-gray-100">
        <h1 className="text-5xl font-poppins text-gray-900 antialiased animate-pulse">Hello <span className="font-bold">World!</span></h1>
      </div> */}

      <div className="container w-full h-screen grid lg:grid-cols-2 sm:grid-cols-1 mx-auto px-6">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-poppins text-gray-800">Hello <span className="font-bold">World!</span></h1>
          <h2 className="text-xs lg:text-lg sm:text-sm font-poppins text-gray-700 font-medium">I&apos;m Muhammad Zulfi Izzulhaq, Fullstack Web Developer from Pekalongan, Indonesia</h2>

          <p className="font-poppins text-gray-700 text-xs lg:text-sm mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat neque eu tellus accumsan, quis dignissim ligula feugiat. Donec eget facilisis ligula. Morbi eget cursus magna. Mauris mollis rhoncus dolor, tristique pellentesque quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam et risus tellus.
          </p>
        </div>
        <div className="lg:flex flex-col justify-center sm:hidden hidden">
          <Lottie options={lottieOption} width={400} height={400} />
        </div>
      </div>

    </div>
  )
}