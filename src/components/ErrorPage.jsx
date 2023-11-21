import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="font-bold text-7xl mb-5 text-center">404</h1>
      <Link to="/" className="hover:text-red-400 font-roboto-mono text-center">
        Something went extremely wrong - Click here to reload.
      </Link>
    </div>
  );
};

export default ErrorPage;
