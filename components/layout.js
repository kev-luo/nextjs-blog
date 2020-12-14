import React from "react";
import Link from "next/link";
import Head from "next/head";

import {
  StyledLayout,
  StyledHeader,
  HeaderHomeImg,
  Back,
  HomeHeader,
  HeaderImg,
  NonHomeHeader,
} from "../styles/Styled";

export const siteTitle = 'Next.js Blog'

export default function Layout({ children, home }) {
  return (
    <StyledLayout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StyledHeader>
        {home ? (
          <>
            <HeaderHomeImg src="/images/profile.jpg" alt="kevin" />
            <HomeHeader>Kevin</HomeHeader>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <HeaderImg src="/images/profile.jpg" alt="kevin" />
              </a>
            </Link>
            <NonHomeHeader>
              <Link href="/">
                <a>Kevin</a>
              </Link>
            </NonHomeHeader>
          </>
        )}
      </StyledHeader>
      <main>{children}</main>
      {!home && (
        <Back>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </Back>
      )}
    </StyledLayout>
  );
}
