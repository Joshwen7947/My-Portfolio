import type {NextPage} from "next"
import Head from 'next/head';
import Header from "../components/Header";
import Hero from "../components/Hero"
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const Home: NextPage = () => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Head>
				<title>Josh's Portfolio</title>
			</Head>
      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero/>
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About/>
      </section>
      {/* Expereices */}
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>
      {/* Project */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>
      {/* contact me */}
      <section id="contact" className="snap-end">
        <ContactMe/>
      </section>
		</div>
	);
};

export default Home;