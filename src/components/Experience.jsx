import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "gray" }}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<LazyLoadImage
						src={experience.icon}
						alt={experience.company_name}
						className="w-[60%] h-[60%] 
          	object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold dark:text-gray-400">
					{experience.title}
				</h3>
				<p className="text-secondary text-semibold text-[16px] style={{ margin: 0 }} dark:text-gray-400">
					{experience.company_name}
				</p>
			</div>
			<ul className="mt-5 list-desc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider dark:text-gray-400"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What i have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default React.memo(SectionWrapper(Experience, "experience"));
