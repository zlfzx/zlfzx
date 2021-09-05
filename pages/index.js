import Head from 'next/head'
import Image from 'next/image'

import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

import { FaLaravel } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen py-10 px-3 sm:px-5 bg-gray-100">

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

      <div className="w-full">
        <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
          <div className="w-32 h-32 mx-auto shadow-xl rounded-full">
            <Image src="/profil.jpg" width="128" height="128" className="rounded-full" alt="Muhammad Zulfi Izzulhaq" />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">Muhammad Zulfi</p>
            <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">Web Developer</p>
            <div className="flex align-center justify-center mt-4">
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/zulfizz">
                <FaGithub />
                <span className="sr-only">Github</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://dribbble.com/zulfizz">
                <FaDribbble />
                <span className="sr-only">Dribble</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.instagram.com/zulfizz_">
                <FaInstagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300" href="mailto:zulfi.izzulhaq@gmail.com">
                <FaRegEnvelope />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaCode className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">
            Backend
          </p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaLaravel className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">
            Laravel
          </p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaReact className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">
            ReactJS
          </p>
        </div>
      </div> */}
    </div>
  )
}