import Head from 'next/head';
import Title from '../components/title';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aprendamos NextJS</title>
        <meta name="description" content="En este curso aprenderas sobre NextJS"/>
      </Head>
      <Title>Home Page</Title>
      <p>Aprendamos NextJS!</p>
      <style>
        {`
          p {
            color: darkgray;
          }
          p:hover {
            color: darkred;
          }
        `}
      </style>
    </>
  )
}