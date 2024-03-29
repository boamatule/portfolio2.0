import React, { lazy } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violent-gradient bg-[#915eff]" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} dark:text-gray-400`}>
						Hi, I'm <span className="text-[#915eff]">Boa Matule.</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100 dark:text-gray-400`}>
						I'm a Full Stack Software Developer based in Oslo, Norway.{" "}
						<br className="sm:block hidden" />Specialized in crafting scalable, secure and highly performant web
						applications.
					</p>
				</div>
			</div>
			<ComputersCanvas />
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about" aria-label="scroll to section">
					<div
						className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ 
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 bg-secondary rounded-full mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
