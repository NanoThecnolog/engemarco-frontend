import { homeSEO } from "@/common/SEO/home";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.scss";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import SEO from '../../next-seo.config'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo {...SEO} />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>;
}
