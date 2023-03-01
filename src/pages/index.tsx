import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Icepop</title>
        <meta
          name="description"
          content="A fun way to chat with your friends."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello, World!</h1>
      </main>
    </>
  );
};

export default Home;
