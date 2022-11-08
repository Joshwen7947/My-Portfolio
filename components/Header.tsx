import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

function Header({}: Props) {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
			<div className="flex flex-row items-center">
				{/* social icons */}
				<SocialIcon
					url="https://www.youtube.com"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.youtube.com"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.youtube.com"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.youtube.com"
					fgColor="gray"
					bgColor="transparent"
				/>
			</div>
			{/* nav */}
			<div className="flex flex-row items-center text-gray-300 cursor-pointer">
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
					Get In Touch
				</p>
			</div>
		</header>
	);
}

export default Header;
