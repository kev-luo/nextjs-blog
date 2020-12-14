import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

import Layout, { siteTitle } from "../components/layout";
import {
  HeroSection,
  PostsSection,
  PostsTitle,
  PostsList,
  PostItem,
} from "../styles/Styled";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeroSection>
        <p>
          Hi, my name is Kevin luo and this is my blog site built using Next.js.
          You can connect with me on{" "}
          <a href="https://www.linkedin.com/in/kevinluo49/">LinkedIn</a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </HeroSection>
      <PostsSection>
        <PostsTitle>Blog</PostsTitle>
        <PostsList>
          {allPostsData.map((post) => (
            <PostItem key={post.id}>
              {post.title} <br />
              {post.id} <br />
              {post.date}
            </PostItem>
          ))}
        </PostsList>
      </PostsSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
