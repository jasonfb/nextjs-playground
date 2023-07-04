import Link from "next/link";
import Image from 'next/image';
export default function Home() {
  return (
    <><h1>Hello Next JS</h1>

      <Link href={"other-page"}>Other page</Link>

      <Image
        src="/images/Morgan-Lee-Avatar.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Morgan Lee"
      />
    </>
  )
}
