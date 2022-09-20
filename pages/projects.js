import React from "react";
import Head from "next/head";
import Image from "next/image";

//projects page

const projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <h1 className="projects-heading">Projects</h1>
      <h4 className="projects-sub-heading">
        Click on the link below or use the QR code to visit my Github page
      </h4>
      <a href="https://github.com/dewaldm7" target="blank">
        <i className="fa fa-github"></i>Github
      </a>
      <style>{`
   
        i {
          margin-right: 5px;
          
        }
        .projects-container {
          margin-top: 20px;
        }
        .projects-heading {
          text-align: center;
        }
        .projects-sub-heading {
          text-align: center;
        }

      `}</style>

      <div className="projects-container">
        <Image
          src="/projects.jpg"
          alt="Picture of the author"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default projects;
