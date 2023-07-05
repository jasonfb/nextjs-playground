import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'
import Image from 'next/image'
import Alert from "../components/alert";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <Alert>
        <p>Hello world next js</p>
        <p>
          <Link href={"other-page"}>Other page</Link>

          <Image
            src="/images/Morgan-Lee-Avatar.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Morgan Lee"
          />
        </p>
        </Alert>
      </section>
    </Layout>
  );
}

