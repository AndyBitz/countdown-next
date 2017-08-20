import Head from 'next/head'

export default ({ children }) => (
  <main>
    <Head>
      <title>Countdown</title>
    </Head>
    { children }
    <style jsx>
    {`
      main {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
    </style>
    <style jsx global>
    {`
      html, body {
        margin: 0;
        background-color: white;
        font-family: monospace;
        font-size: 18px;
        background-color: darkslategray;
      }
    `}
    </style>
  </main>
)
