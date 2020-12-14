import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import { StyledSection } from "../styles/Styled";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <StyledSection>
        <p>
          Hi, my name is Kevin luo and this is my blog site built using Next.js. You can connect with me on{" "}
          <a href="https://www.linkedin.com/in/kevinluo49/">LinkedIn</a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </StyledSection>
    </Layout>
  );
}
