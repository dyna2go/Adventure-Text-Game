import Head from 'next/head'
import Header from '@components/Header'
//import Footer from '@components/Footer'
//
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dyna2games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script>
        document.getElementById("demo").innerHTML = "My First JavaScript";
      </script>
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
        
        </p>
      </main>

      
    </div>
  )
}
