import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div className="description" >
                            <p>Welcome to our website. System is being upgraded.... </p>

                        </div>
      </main>

      <Footer />
    </div>
  )
}
