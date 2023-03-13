import Layout from "@/components/layout";
import { getAllPostds, getPostData } from "@/lib/posts";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    id: string;
    date: string;
  };
}) {
  return (
    <Layout home={false}>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
