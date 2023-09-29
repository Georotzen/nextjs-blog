import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
    <Layout>
        <Head>
      <title>NextJS Framework for ReactJS Web Applications</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h2>NextJS Framework for ReactJS Web Applications 2023</h2>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      </Layout>
    </>
  );
}