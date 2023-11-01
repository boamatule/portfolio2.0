import { GooeyCircleLoader, ElasticCircleLoader, HelixLoader } from "react-loaders-kit";
import Typed from "react-typed";

const Loader = () => {
  const loaderProps = {
    loading: true,
    size: 90,
    duration: 1.5,
    colors: ['#5e22f0', '#f6b93b'],
  };

  return (
    <div className="loader-container">
      <div className="loader">
        <HelixLoader {...loaderProps} />
        <Typed
          className="loader-text"
          strings={["Loading..."]}
          typeSpeed={60}
          backSpeed={0}
        />
      </div>
    </div>
  );
};

export default Loader;
