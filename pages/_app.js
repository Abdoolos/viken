import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }){
  return (
    <>
      <Head>
        {/* Netlify Identity Widget */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script src="/netlify-identity-init.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
