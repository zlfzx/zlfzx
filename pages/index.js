import Head from 'next/head'
import Image from 'next/image'

import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

import { FaLaravel } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

import Header from '../components/Header';

export default function Home() {
  return (
    <div>

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
      <div className="flex flex-col justify-center items-center h-screen py-10 bg-gray-100">
        <h1 className="text-5xl font-bold font-poppins text-gray-900 antialiased animate-pulse">Hello World!</h1>
      </div>

    </div>
  )
}