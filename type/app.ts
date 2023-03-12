import { AppProps } from "next/app";
export type PageProps = {
  title: string;
  logData: {
    screenName: string;
  };
};

export type AppPageProps = Omit<AppProps<PageProps>, "pageProps"> & {
  pageProps: PageProps;
};
