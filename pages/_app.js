import Layout from "../components/Layout";
import "../styles/globals.css";
import Script from "next/script";

//Layout component wraps around MyApp component
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-334KVN4N66"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-334KVN4N66', {
page_path: window.location.pathname,
});
`,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
