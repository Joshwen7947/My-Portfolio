import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/Link';
type Props = {};

function Header({}: Props) {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				{/* social icons */}
				<SocialIcon
					url="https://www.linkedin.com/in/josh-wenner/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/Joshwen7947"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.behance.net/joshjwenner"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.instagram.com/tall_kid_goes_places/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.youtube.com/channel/UCXy7Wtat_aXL31oM3okN-1g"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>
			{/* nav */}
			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<Link href="#contact">
					<SocialIcon
						className="cursor-pointer"
						network="email"
						fgColor="gray"
						bgColor="transparent"
					/>

					<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
						<span className="decoration-[#F7AB0A]/50 underline">
							Get In Touch
						</span>
					</p>
				</Link>
			</motion.div>
		</header>
	);
}

export default Header;
