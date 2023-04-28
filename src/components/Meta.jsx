import React from "react";
import Head from "next/head";

const Meta = ({ title, description, keywords, src, ...props }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:image" content={src} />
    </Head>
  );
};

export default Meta
