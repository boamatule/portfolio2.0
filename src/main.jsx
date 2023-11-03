import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

const ErrorPage = lazy(() => import("./components/ErrorPage"));
const Success = lazy(() => import("./components/Success"));

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/Success" element={<Success />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
