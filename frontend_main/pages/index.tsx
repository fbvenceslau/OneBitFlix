import Head from "next/head";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import styles from '../styles/homeNoAuth.module.scss';
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import CardsSection from "@/src/components/homeNoAuth/cardsSection";
import SlideSection from "@/src/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/src/service/courseService";
import { ReactNode, useEffect } from "react";
import Footer from "@/src/components/common/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = function ({course}: IndexPageProps) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og: title" content="OneBitFlix" key="title"/>
        <meta name="description" content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"/>
      </Head>
      <main>
        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="3000">
          <HeaderNoAuth/>
          <PresentationSection/>  
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
         <CardsSection/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={course}/>
        </div>
        <Footer/>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return{
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24 // Atualização a cada 24 horas
  }
};

export default HomeNoAuth