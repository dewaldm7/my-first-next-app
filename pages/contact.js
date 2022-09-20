import React from "react";
import Head from "next/head";
import Image from "next/image";

//contact page
const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <Image
          src="/contact.jpg"
          alt="Picture of the author"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default contact;
