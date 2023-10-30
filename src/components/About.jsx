import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 h-[280px] flex justify-evenly items-center flex-col"
				>
					<LazyLoadImage
						src={icon}
						alt={title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold mt-5 text-center dark:text-gray-400">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="max-w-3full text-[17px] text-secondary leading-[30px] dark:text-gray-400"
				>
					I am a full stack developer with a passion for building beautiful and
					functional web applications. I have experience working with React,
					TyspeScript, Next.js, Redux, Node, Express, MongoDB, and PostgreSQL. I
					am currently looking for a full time position as a software engineer.
				</motion.p>
			</div>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
