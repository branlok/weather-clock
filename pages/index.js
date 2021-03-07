import Head from 'next/head'

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export default function Home({data}) {


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {data}
      </main>

      <footer>
      </footer>
    </div>
  )
}
