import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import DevAnimation from '../components/DevAnimation';

export default function Home() {

  return (
    <div className="bg-white">
      <Head>
      <title>Muhammad Zulfi Izzulhaq</title>
        <meta name="title" content="Muhammad Zulfi Izzulhaq" />
        <meta name="description" content="Experienced as a Laravel Backend Developer for 3 years and interested in web development using PHP and Javascript" />
        <meta name="keywords" content="developer,engineer,software,backend,php,javascript,go,laravel,codeigniter,frontend,react,vue" />
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
    </div>
  )
}