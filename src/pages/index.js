import Heading from "@/components/Heading";
import Socials from "@/components/Socials";
import styles from '@/styles/Home.module.scss';
import Head from "next/head";

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {socials: data}
    }
  } catch {
    return {
      props: {socials: null}
    }
  }
}

const Home = ({socials}) => {
  return (
    <div className={styles.wrapper}>
      <Head>
          <title>Home</title>
      </Head>
      <Heading text='Hello world!'/>
      <Socials socials={socials} />
    </div>
  )
}

export default Home;