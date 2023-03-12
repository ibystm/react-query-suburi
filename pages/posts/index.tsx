import Layout from "@/components/layout";
import Head from "next/head";

export default function Post() {
  return (
    <Layout home={false}>
      <Head>
        <title>Posts page</title>
      </Head>
      <div>Thins is Post page.</div>
    </Layout>
  );
}
