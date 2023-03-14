import Layout from "@/components/layout";
import { getAllPostds, getPostData } from "@/lib/posts";
import Head from "next/head";

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
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
