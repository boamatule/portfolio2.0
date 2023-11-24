import React from "react";
import { SectionWrapper } from "../hoc";


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

export default React.memo(SectionWrapper(Footer, "footer"));