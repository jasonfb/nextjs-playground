import Link from "next/link";
import Head from 'next/head';

export default function OtherPage () {
  return (
    <>
      <Head>
        <title>This is the other page</title>
      </Head>
      <h1>Other page</h1>
      <Link href={"/"}>&laquo;back to home</Link>
    </>
  )
}
