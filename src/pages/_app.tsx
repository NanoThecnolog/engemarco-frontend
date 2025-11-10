import { homeSEO } from "@/common/SEO/home";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.scss";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import SEO from '../../next-seo.config'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo {...SEO} />
    <Header />
    <Component {...pageProps} />
    <ToastContainer autoClose={3500} position="top-left" />
    <Footer />
  </>;
}
