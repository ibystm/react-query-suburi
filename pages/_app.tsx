import { AppPageProps, PageProps } from "@/type/app";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppPageProps) {
  return <Component {...pageProps} />;
}
