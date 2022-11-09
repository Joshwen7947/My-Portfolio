import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About Me
			</h3>
			<motion.img
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				src="/images/me2.png"
				alt=""
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
			/>
			<div className="space-y-10 px-2 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here's a little background...
				</h4>
				<p className="text-base leading-loose">
					You've made it this far! My name is Josh, originally from
					Philadelphia, USA. I've called Southeast Asia home for over 4 years
					now with my home base in Ho Chi Minh City, Vietnam. I don't come from
					the usual software engineering background. Over the last few years I
					spent most of my free time focusing on coding and development. What
					started as a passion, has become a full-time career! Currently amongst
					freelance projects, I currently teach Python for an international
					coding school. We focus on 0 to 100 development. Begininng at the
					nothing and working up to Web applications, Databases and 3D games in
					Python. Searching for a new journey in software. Let's get in touch if
					that's something you're searching for.
				</p>
				<h4 className="text-2xl font-thin tracking-wide text-[#F7AB0A]">
					"Code is art that does something"
				</h4>
			</div>
		</motion.div>
	);
}

export default About;
