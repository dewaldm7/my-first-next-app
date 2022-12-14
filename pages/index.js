import Head from "next/head";
import Image from "next/image";

//homepage
const Home = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div>
        <Image
          src="/homepage.jpg"
          alt="Picture of the author"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default Home;
