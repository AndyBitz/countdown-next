import { Head } from 'next/head'

export default ({ children }) => {
  <main>
    <Head>
      <title>Countdown</title>
    </Head>
    { children }
    <style jsx global>
    {`
      html, body {
        margin: 0;
        background-color: white;
      }
    `}
    </style>
  </main>
}