import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.sendForm(
				"service_1q2q9qf",
				"template_1q2q9qf",
				formRef.current,
				"user_1q2q9qf",
			)
			.then(
				(result) => {
					console.log(result.text);
					setLoading(false);
				},
				(error) => {
					console.log(error.text);
					setLoading(false);
				},
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-12"
      >

      <label className="flex flex-col">
      <span className="text-white font-medium mb-4">Your Name</span>
      <input
        className="bg-tertiary rounded-lg py-4 px-6 text-white outline-none placeholder:text-secondary border-none font-medium"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="What's your name"
      />
      </label>

		   <label className="flex flex-col">
      <span className="text-white font-medium mb-4">Your Email</span>
      <input
        className="bg-tertiary rounded-lg py-4 px-6 text-white outline-none placeholder:text-secondary border-none font-medium"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="What's your Email"
      />
      </label>

			<label className="flex flex-col">
      <span className="text-white font-medium mb-4">Your Message</span>
      <textarea
        className="bg-tertiary rounded-lg py-4 px-6 text-white outline-none placeholder:text-secondary border-none font-medium"
				rows="7"
        type="text"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="What are you looking for today?"
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
    </div>
	);
};

export default SectionWrapper(Contact, "contact");
