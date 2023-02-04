import Head from 'next/head'
import Header from '../components/Header'

export default function MyJson() {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            data: e.target.data.value
        }

        try {
            await fetch('/api/myjson', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if (data.status == 'success') {
                    alert('Successfully serve in ' + data.url)
                    window.open(data.url, '_blank')
                    e.target.data.value = ''
                }
            })
        } catch (e) {
            return alert(e.message)
        }
    }

    return (
        <div className="bg-white">
            <Head>
                <title>MyJSON - A simple JSON server</title>
                <meta name="description" content="A simple JSON server" />
                <meta name="keywords" content="json,json server,json hosting,developer,engineer,software,backend,frontend,laravel,react,vue" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="author" content="Muhammad Zulfi Izzulhaq" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zlfzx.xyz/myjson" />
                <meta property="og:title" content="MyJSON - A simple JSON server" />
                <meta property="og:description" content="A simple JSON server" />
            </Head>

            <Header/>

            <div className="container w-full h-screen grid sm:grid-cols-1 mx-auto px-6">
                <div className=" mx-auto flex flex-col items-start justify-center w-3/5">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-poppins text-gray-800">MY JSON</h1>
                    <p className='mb-8'>A simple JSON server</p>

                    <form onSubmit={handleSubmit} className="w-full">
                    <label className="text-gray-700 w-full" htmlFor="name">
                        <textarea className=" appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" id="data" placeholder="Enter your JSON" name="data" rows="10" cols="40">
                        </textarea>
                    </label>

                    <button type="submit" className="mt-6 py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                        Save
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}