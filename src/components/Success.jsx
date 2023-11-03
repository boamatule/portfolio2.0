import { LazyLoadImage } from "react-lazy-load-image-component";
import { SectionWrapper } from "../hoc";
import { love } from "../assets";
const Success = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center flex-col">
			<LazyLoadImage
				src={love}
				alt="Success"
				className="font-bold text-7xl mb-5 text-center w-1/2 h-1/2 object-contain"
			/>
			<p to="/" className="font-poppins text-center">
				Your message has been sent successfully. I will contact you soon!
			</p>
		</div>
	);
};

export default SectionWrapper(Success);
