
// import styles from "./page.module.css";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Spacer from "@/components/Common/Spacer";

export default function Home() {
  return (
    <main className='main'>
      <Spacer />
      <HeroBanner />
      <Spacer />
      <About />
      <Spacer />
      <Stack />
      <Spacer />
      <Projects />
      <Spacer />
      <Experience />
      <Spacer />
      <Contact />
      <Spacer />
      <Footer />
    </main>
  );
}
