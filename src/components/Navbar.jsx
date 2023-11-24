import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import DarkTheme from "./DarkTheme";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { avatar, menu, close } from "../assets";

const loadIcons = async () => {
	const { FaGithub, FaLinkedinIn } = await import("react-icons/fa");
	return { FaGithub, FaLinkedinIn };
};

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [icons, setIcons] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		loadIcons().then((loadedIcons) => {
			setIcons(loadedIcons);
		});

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`${
				styles.paddingX
			} w-full flex items-center py-5 fixed top-0 z-20  ${
				scrolled ? "bg-primary" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<DarkTheme />
				<div className="ml-auto flex-1 items-center flex space-x-6 gap-4 justify-end">
					<a
						href="https://github.com/boamatule/"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
						className="text-white hover:text-gray-400 cursor-pointer text-[18px] dark:text-gray-400"
					>
						{icons ? (
							icons.FaGithub && <icons.FaGithub />
						) : (
							<span>Loading...</span>
						)}
					</a>
					<a
						href="https://www.linkedin.com/in/boa-matule-2082b068/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
						className="text-white hover:text-gray-400 cursor-pointer text-[18px] dark:text-gray-400"
					>
						{icons ? (
							icons.FaLinkedinIn && <icons.FaLinkedinIn />
						) : (
							<span>Loading...</span>
						)}
					</a>
					<div className="">
						<img
							src={toggle ? close : menu}
							alt="menu"
							className="w-[20px] h-[20px] object-contain cursor-pointer"
							onClick={() => setToggle(!toggle)}
						/>

						<div
							className={`${
								toggle ? "flex" : "hidden"
							} p-6 black-gradient absolute top-20 right-10 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
						>
							<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
								{navLinks.map((link) => (
									<div
										key={link.id}
										className="flex flex-col items-center gap-5"
									>
										<li
											className="text-white hover:text-gray-400 cursor-pointer text-[18px] font-medium"
											onClick={() => {
												setToggle(!toggle);
												setActive(link.title);
											}}
										>
											<a href={`#${link.id}`}>{link.title}</a>
										</li>
									</div>
								))}
							</ul>
						</div>
					</div>
				</div>

				<ul className="list-none hidden sm:flex flex-row gap-10 sm:hidden">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? "text-white" : "text-gray-400"
							} font-poppins cursor-pointer text-[16px] font-medium`}
							onClick={() => {
								setToggle(!toggle);
								setActive(link.title);
							}}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default React.memo(Navbar);
