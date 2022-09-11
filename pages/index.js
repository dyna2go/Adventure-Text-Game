import Head from 'next/head'
import Header from '@components/Header'
//import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dyna2games</title>
        <link rel="icon" href="/favicon.ico" />

        <script>
        let d = new Date();
        
       </script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
        
        </p>
      </main>

      
    </div>
  )
}
