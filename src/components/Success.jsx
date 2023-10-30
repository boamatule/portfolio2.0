import { SectionWrapper } from "../hoc";

const Success = () => {
	return (
		<div>
			<h1 className="text-4xl text-center text-white font-bold">Success</h1>
		</div>
	);
};
export default SectionWrapper(Success);
