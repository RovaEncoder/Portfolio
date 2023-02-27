import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
	return (
		<div className="min-h-[100vh] flex flex-col bg-gray-800">
			<Navbar />
			<div className="flex-auto">{children}</div>
			<Footer />
		</div>
	);
}
