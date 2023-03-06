import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="min-h-[100vh] min-w-[100vw] flex flex-col bg-gray-800 overflow-clip">
			<Navbar />
			<div>{children}</div>
			<Footer />
		</div>
	);
}
