import { SectionWrapper } from "../hoc";

const Success = ({ successMessage }) => {
  return (
    <div>
      <h1 className="text-4xl text-center text-red-500 font-bold">Success</h1>
      <p className="text-center text-white">{successMessage}</p>
    </div>
  );
};

export default SectionWrapper(Success);

