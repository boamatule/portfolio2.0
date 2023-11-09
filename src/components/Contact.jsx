import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import emailValidator from "email-validator";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		
		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Boa Matule",
					from_email: form.email,
					to_email: "boa.matule@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
			)
			.then(
				() => {
					setLoading(false);
					navigate("/Success");
					setTimeout(() => {
						navigate("/");
					}, 3000);

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error.text);
					alert("Ops! Something went terribly wrong, please try again");
				},
			);
		// e.target.reset();
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<h2 className={`${styles.sectionHeadText} dark:text-gray-400`}>
					Get in touch.
				</h2>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 mt-12"
				>
					<label className="flex flex-col">
						<input
							className="bg-tertiary rounded-lg py-4 px-6 text-white outline-none placeholder:text-secondary border-none font-medium"
							type="text"
							name="name"
							id="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name"
							autoComplete="on"
							required
						/>
					</label>

					<label className="flex flex-col">
						<input
							className="bg-tertiary rounded-lg py-4 px-6 text-white outline-none placeholder:text-secondary border-none font-medium"
							type="email"
							name="email"
							id="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your Email"
							autoComplete="on"
							required
						/>
					</label>

					<label className="flex flex-col">
						<textarea
							className="bg-tertiary rounded-lg py-4 px-6 text-white outline-none placeholder:text-secondary border-none font-medium"
							rows="7"
							type="text"
							name="message"
							id="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What are you looking for today?"
							autoComplete="on"
							required
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary rounded-xl py-3 px-8 text-white outline-none border-none font-medium shadow-md shadow-primary w-fit"
					>
						{loading ? "Sending..." : "Send Message"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h.auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default React.memo(SectionWrapper(Contact, "contact"));
