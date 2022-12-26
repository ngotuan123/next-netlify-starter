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
      <div className="description" style="padding:20px ;">
                            <p>Fortnite is one of the most talked-about games in the world, and it is easy to see why. Its exceptional graphics and innovative gameplay give it an edge over its competition. You'll love exploring various challenges, skins, and weapons in this exciting game.</p>
                            <p>Fortnite is a team-based shooter that immerses you in a world filled with intense battles and complex combat mechanics. You must work with your teammates to outsmart enemies and complete objectives like building forts and defending treasure chests.</p>
                            <p>As you play, you'll unlock unique skins and weapons to help you stand out from the crowd and be more powerful in combat. Ensure you combine these items wisely to get maximum effectiveness and make your way to the top of the leaderboard.</p>
                            <p>Additionally, this game packs numerous vehicles to explore the world. You can use trucks, helicopters, and other vehicles to travel between locations quickly. However, you should keep a close eye out for enemies who might try to take your vehicle down.</p>
                            <p>Overall, Fortnite will not disappoint in visuals, gameplay, and overall fun. It is a must-have for any gamer who wants to experience the best of online video gaming. Download it and start exploring your expansive world today.</p>
                        </div>
      </main>

      <Footer />
    </div>
  )
}
