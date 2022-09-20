import Layout from "../components/Layout";
import "../styles/globals.css";

//Layout component wraps around MyApp component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
