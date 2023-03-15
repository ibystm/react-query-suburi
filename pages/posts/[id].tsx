import Date from "@/components/date";
import Layout from "@/components/layout";
import { getAllPostds, getPostData } from "@/lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    id: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

interface Params {
  params: { id: string };
}

export async function getStaticPaths() {
  const paths = getAllPostds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: Params) => {
  if (!params) return;
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
