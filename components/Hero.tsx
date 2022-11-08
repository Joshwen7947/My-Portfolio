import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { motion } from 'framer-motion';
type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: ['Hi, My name is Josh', 'Developer', 'Designer', 'Creator'],
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
			<div>
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					Software Engineer
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="orange" />
				</h1>
				<div>
					<button className="heroButton">About</button>
					<button className="heroButton">Expereicne</button>
					<button className="heroButton">Skills</button>
					<button className="heroButton">Contact</button>
				</div>
			</div>
		</motion.div>
	);
}
