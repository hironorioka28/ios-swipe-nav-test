import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

const Home: NextPage = () => {
  let numArr: number[] = [];
  for (let i = 0; i < 100; i++) {
    numArr.push(i + 1);
  }
  return (
    <>
      <Head>
        <title>iOS Swipe Nav Test</title>
        <meta name="description" content="iOS Swipe Nav Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>iOS Swipe Nav Test</h1>
      <ul>
        {numArr.map((item) => (
          <li key={item}>
            <NextLink href={`/${item}`}>
              <a>link {item}</a>
            </NextLink>
            {/* <a href={`/${item}`}>a tag link {item}</a> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
