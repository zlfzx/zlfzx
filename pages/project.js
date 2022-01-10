import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";

export default function Project() {

    const projects = [
        {
            name: 'Ujian CBT SMK',
            platform: 'Web',
            role: 'Fullstack',
            description:
                'Aplikasi ujian berbasis web untuk jenjang SMK dengan framework Codeigniter 3',
            image: 'ujian.jpeg',
            source: 'https://github.com/zulfizz/ujian-cbt',
            tags: ['Codeigniter', 'Bootstrap', 'MySQL', 'PHP'],
            status: true,
        },
        {
            name: 'E-Voting',
            platform: 'Web',
            role: 'Fullstack',
            description:
                'Aplikasi voting berbasis web dengan framework Codeigniter 3',
            image: 'evoting.jpeg',
            source: 'https://github.com/zulfizz/evoting',
            tags: ['Codeigniter', 'Bootstrap', 'MySQL', 'PHP'],
            status: true,
        },
        {
            name: 'Bobola App',
            platform: 'Web',
            role: 'Frontend',
            description:
                'Aplikasi Klasemen Liga Inggris berbasis PWA (Progressive Web Application)',
            image: 'bobola.png',
            source: 'https://github.com/zulfizz/bobola',
            preview: 'https://bobola-pwa.web.app',
            tags: ['PWA', 'HTML', 'CSS', 'Javascript', 'Firebase'],
            status: true,
        },
        {
            name: 'Nyateti',
            platform: 'Web',
            role: 'Frontend',
            description:
                'Sebuah aplikasi yang memiliki fitur catatan pribadi, todo list, kalender, dan pencatat kegiatan rutin. Dibuat menggunakan VueJS dan Firebase',
            image: 'nyateti.png',
            source: 'https://github.com/zulfizz/nyateti',
            preview: 'https://nyateti.web.app',
            tags: ['Vue', 'Bootstrap', 'Javascript', 'Firebase', 'Frontend'],
            status: true,
        },
        {
            name: 'Materi Ajar dan Ujian',
            platform: 'Web',
            role: 'Fullstack',
            description:
                'Aplikasi ini akan memfasilitasi guru untuk membuat, menyimpan, menyebarkan, dan memanfaatkan materi ajar dan soal ujian, sesuai dengan kebutuhan.',
            image: 'mau.png',
            preview: 'https://mau.schoolmedia.id',
            tags: ['Codeigniter', 'Bootstrap', 'MySQL'],
            status: false,
        },
        {
            name: 'News Schoolmedia',
            platform: 'Web',
            role: 'Fullstack',
            description:
                'Website portal berita yang didalamnya juga memuat seputar dunia pendidikan Indonesia',
            image: 'news.png',
            preview: 'https://news.schoolmedia.id',
            tags: ['Codeigniter', 'Bootstrap', 'PostgreSQL', 'Backend'],
            status: true,
        },
        {
            name: 'CMS Sekolah',
            platform: 'Web',
            role: 'Fullstack',
            description:
                'Website CMS untuk sekolah berbasis SaaS yang penggunanya tersebar hampir diseluruh Indonesia',
            image: 'cms.png',
            tags: [
                'Laravel',
                'Bootstrap',
                'Javascript',
                'PostgreSQL',
                'Fullstack',
            ],
            status: true,
        },
        {
            name: 'Manajemen CMS Sekolah',
            platform: 'Web',
            role: 'Fullstack',
            description: 'Aplikasi untuk manajemen semua client',
            image: 'admincms.png',
            tags: ['Laravel', 'Bootstrap', 'Javascript', 'Fullstack'],
            status: true,
        },
        {
            name: 'User Management',
            platform: 'Web',
            role: 'Backend',
            description:
                'Aplikasi yang digunakan sekolah untuk manajemen user baik guru, siswa, orang tua/wali, serta mengatur penugasan dan jawal pelajaran.',
            image: 'um.png',
            tags: ['Laravel', 'PostgreSQL', 'Backend'],
            status: true,
        },
        {
            name: 'Njajan',
            platform: 'Android',
            // role: 'Fullstack',
            description: 'Aplikasi catatan pengeluaran sederhana',
            image: 'njajan.png',
            source: 'https://github.com/zulfizz/njajan',
            tags: ['Android', 'Kotlin', 'Room'],
            status: true,
        },
        {
            name: 'Shipstock',
            platform: 'Web',
            role: 'Fullstack',
            description: 'Aplikasi managemen sparepart kapal',
            image: 'shipstock.png',
            tags: ['Laravel', 'Bootstrap', 'MySQL', 'Backend'],
            status: true,
        },
    ]

    return (
        <div className="bg-white">
            <Head>
                <title>Project - Muhammad Zulfi Izzulhaq</title>
            </Head>
            <Header />

            <div className="w-full grid sm:grid-cols-1 px-12">
                <div className="container mx-auto pt-12">
                    <div className="relative p-4">

                        {projects.reverse().map(function (item, index) {
                            return <div key={index} className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-start my-8 p-8">
                                <div className="relative px-12 mb-4 w-full h-auto">
                                    <Image src={'/projects/' + item.image} alt={item.name} width={550} height={300} quality={100} className="mx-auto shadow-lg rounded" />
                                </div>
                                <div className="lg:max-w-2xl">
                                    <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                                        {item.platform} {!!item.role ? '- ' + item.role : ''}
                                    </p>
                                    <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                                        {item.name}
                                    </h4>
                                    
                                    <div className="my-4">
                                        {!!item.preview ? <a href={`${item.preview}`} target="_blank" rel="noreferrer" className=" px-3 py-1 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none mr-2">
                                            Preview
                                        </a> : ''}
                                        {!!item.source ? <a href={`${item.source}`} target="_blank" rel="noreferrer" className=" px-3 py-1 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                            Source Code
                                        </a> : ''}
                                    </div>

                                    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                        {item.description}
                                    </p>
                                    <ul className="mt-4 md:grid md:grid-cols-2 gap-6">
                                        {item.tags.map((tag, indexTag) => {
                                            return <li key={indexTag} className="mt-2 lg:mt-0">
                                            <div className="flex">
                                                <span
                                                    className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent"
                                                >
                                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span
                                                    className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"
                                                >
                                                    {tag}
                                                </span>
                                            </div>
                                        </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        })}


                    </div>
                </div>
            </div>
        </div>
    )
}