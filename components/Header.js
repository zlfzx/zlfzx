import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header() {
    const [show, setShow] = useState(false)

    const showNavbar = () => {
        setShow(!show)
    }

    const router = useRouter()
    const link = 'py-2 px-6 flex hover:text-black'
    const linkActive = link + ' font-bold'

    const linkMobile = 'hover:text-black hover:bg-gray-100 block px-6 py-1'
    const linkActiveMobile = linkMobile + ' font-bold'

    return (
        <header className="h-16 sm:h-20 flex flex-col w-full absolute z-50">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-gray-700 font-medium text-3xl flex items-center">
                    <svg width="25" height="25" viewBox="0 0 1792 1792" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z">
                        </path>
                    </svg>
                    <span className="text-sm ml-3 mt-1 font-poppins">
                        <a href="mailto:zulfi.izzulhaq@gmail.com">zulfi.izzulhaq@gmail.com</a>
                    </span>
                </div>
                <div className="flex items-center">
                    <nav className="font-poppins font-medium text-gray-700 text-lg lg:flex items-center hidden">
                        <Link href="/" className={router.pathname == '/' ? linkActive : link}>
                            Home
                        </Link>
                        <Link href="https://profile.zlfzx.xyz" className="py-2 px-6 flex hover:text-black" target="_blank">
                            Profile
                        </Link>
                        <Link href="/project" className={router.pathname == '/project' ? linkActive : link}>
                                Project
                        </Link>
                        {/* <Link href="/cv.pdf">
                            <a className="py-2 px-6 flex hover:text-black" target="_blank">
                            Resume
                            </a>
                        </Link> */}
                        <Link href="/contact" className={router.pathname == '/contact' ? linkActive : link}>
                            Contact
                        </Link>
                        {/* <Link href="https://blog.zlfzx.xyz" className="py-2 px-6 flex hover:text-black" target='_blank'>
                            Blog
                        </Link> */}
                        <Link href="/myjson" className={router.pathname == '/myjson' ? linkActive : link}>
                            MyJson
                        </Link>
                    </nav>
                    <button className="lg:hidden flex flex-col ml-4" aria-label="Menu" onClick={showNavbar}>
                        <span className="w-6 h-1 bg-gray-800">
                        </span>
                        <span className="w-6 h-1 bg-gray-800">
                        </span>
                        <span className="w-6 h-1 bg-gray-800">
                        </span>
                    </button>
                </div>
            </div>
            <div className={`${show ? '' : 'hidden'} lg:hidden bg-white`}>
                <div className="container mx-auto pb-4 space-y-1 sm:px-3 text-right font-poppins font-medium text-gray-700 shadow-lg">
                    <Link href="/" className={router.pathname== '/' ? linkActiveMobile : linkMobile}>
                        Home
                    </Link>
                    <Link href="https://profile.zlfzx.xyz"  className={linkMobile} target="_blank">
                        Profile
                    </Link>
                    <Link href="/project" className={router.pathname== '/project' ? linkActiveMobile : linkMobile}>
                        Project
                    </Link>
                    {/* <Link href="/cv.pdf">
                        <a className={linkMobile} target="_blank">
                        Resume
                        </a>
                    </Link> */}
                    <Link href="/contact" className={router.pathname== '/contact' ? linkActiveMobile : linkMobile}>
                        Contact
                    </Link>
                    {/* <Link href="https://blog.zulfizz.my.id" className={linkMobile} target="_blank">
                        Blog
                    </Link> */}
                    <Link href="/myjson" className={router.pathname == '/myjson' ? linkActive : link}>
                        MyJson
                    </Link>
                    </div>
            </div>
        </header>
    )
}