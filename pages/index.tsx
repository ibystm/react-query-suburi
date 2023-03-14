import Layout, { siteTitle } from "@/components/layout";
import { getSortedPostsData } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Date from "@/components/date";

interface Props {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Tonny Stark known as a Iron Man.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <Link href="https://nextjs.org/learn">our Next.js tutorial</Link>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
