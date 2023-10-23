import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { github, globe } from "../assets";
import { projects } from "../constants";

import { SectionWrapper } from "../hoc";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	source_deployed_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="w-full bg-tertiary rounded-2xl shadow-xl p-5 sm:w-[360px]"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex flex-row justify-between m-3 card-img_hover items-end">
						<div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient">
							<div
								onClick={() => window.open(source_code_link, "_blank")}
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							>
								<img
									src={github}
									alt="source code"
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						</div>
						<div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient">
							<div
								onClick={() => window.open(source_deployed_link, "_blank")}
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							>
								<img
									src={globe}
									alt="deployed website"
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="mt-5 text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-sm text-secondary text-[14px]">
						{description}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My projects</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="max-w-3full text-[17px] text-secondary leading-[30px]"
				>
					I have worked on a few projects, some of which are open source and
					available on my GitHub. I am currently working on a few more projects
					which will be available on my GitHub soon.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
