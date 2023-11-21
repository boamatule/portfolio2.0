import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import emailValidator from "email-validator";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Footer = () => {
	const currentDate = new Date().getFullYear();

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<h1 className="text-sm font-bold xl:text-left text-white-100 dark:text-gray-400">
				&copy; {currentDate} Boa Matule. All rights reserved.
			</h1>
		</div>
	);
};

export default React.memo(SectionWrapper(Footer, ""));