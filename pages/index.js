import Head from 'next/head';
import Title from '../components/title';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS</title>
        <meta name="description" content="NextJS"/>
      </Head>
      <Title>Home Page</Title>
      <p>NextJS!</p>
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