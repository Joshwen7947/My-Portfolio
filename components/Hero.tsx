import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { motion } from 'framer-motion';
import Link from 'next/Link';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Hi, The name is Josh',
			'<Developer/>',
			'Web Designer',
			'`Adventurer who likes ${code}`',
			'Web3 geek',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<img
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src="/me.jpg"
				alt=""
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					Software Engineer
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="orange" />
				</h1>
				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">
							<b>About</b>
						</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">
							<b>Skills</b>
						</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">
							<b>Projects</b>
						</button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
