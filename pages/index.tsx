import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Practice</title>
      </Head>
      <div>
        <div>This is Home page.</div>
        <div>
          If you need to check posts page, Go to{" "}
          <Link href="/posts">posts page</Link>.
        </div>
      </div>
    </>
  );
}
