import React from "react";
import Head from "next/head";
import Image from "next/image";

//about page
const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <Image
          src="/about.jpg"
          alt="Picture of the author"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default about;
