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
                            <p>Fortnite is one of the most talked-about games in the world, and it is easy to see why. 
    Its exceptional graphics and innovative gameplay give it an edge over its competition. </p>

                        </div>
      </main>

      <Footer />
    </div>
  )
}
