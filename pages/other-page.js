import Link from "next/link";

export default function OtherPage () {
  return (
    <>
    <h1>Other page</h1>
    <Link href={"/"}>&laquo;back to home</Link>
    </>
  )
}
