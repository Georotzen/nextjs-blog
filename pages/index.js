import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import utilStyles from './styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a person just like yourself with dreams of a better world 
          where everyone can live and enjoy each day doing what is best 
          for all of us. If there is something valuable in our lives; then, 
          let it be that strong desire to help one another within our communities.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
