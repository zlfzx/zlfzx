import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Image from 'next/image'

import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

import { FaLaravel } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

export default function MyCarousel() {
  return (
    <Carousel
      plugins={[
        'centered',
        'infinite',
        'clickToChange',
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 2,
          },
        },
        {
          resolve: slidesToScrollPlugin,
          options: {
            numberOfSlides: 1,
          },
        },
      ]}
    >
      <div className="flex flex-col justify-center max-w-md mx-auto bg-white shadow-xl rounded-xl p-5 border-2 border-gray-50">
        <div className="w-32 h-32 mx-auto shadow-xl rounded-full mt-3">
          <Image src="/profil.jpg" width="128" height="128" className="rounded-full" alt="Muhammad Zulfi Izzulhaq" />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-base font-semibold text-gray-900">Muhammad Zulfi Izzulhaq</p>
          <p className="text-xs sm:text-sm text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">Web Developer</p>
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

      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 border-2 border-gray-50">
        <div className="mt-5">
          <p className="text-center text-xl sm:text-2xl font-semibold text-gray-900">Profil</p>
          <p className="text-xs sm:text-base text-gray-800 pt-2 pb-4 px-5 w-auto inline-block">Hello world! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum leo ac odio pellentesque venenatis. Quisque lacinia elit ut urna lacinia, at molestie mi ullamcorper.</p>
        </div>
      </div>

      <div className="flex flex-col justify-center max-w-md mx-auto bg-white shadow-xl rounded-xl p-5 border-2 border-gray-50">
        <FaLaravel className="text-4xl mx-auto inline-block" />
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">Laravel</p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="flex flex-col justify-center max-w-md mx-auto bg-white shadow-xl rounded-xl p-5 border-2 border-gray-50">
        <FaCode className="text-4xl mx-auto inline-block" />
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">Backend Developer</p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </Carousel>
  )
}