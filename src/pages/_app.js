import Navbar from '@/component/module/navbar/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Bootstrap RTL */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css"
        />
      </Head>

      <div dir="rtl" lang="fa" className="app-container">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
