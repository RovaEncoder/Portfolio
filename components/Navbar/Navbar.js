import Link from "next/link";
import { links } from "/data";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
	FaGithub,
	FaLinkedin,
	FaSun,
	FaMoon,
	FaAt,
	FaMobileAlt,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import roro from "/public/emy.png";

export default function Header() {
	const [navbar, setNavbar] = useState(false);
	const [shadow, setShadow] = useState(false);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 30) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	const handleNav = () => {
		setNavbar(!navbar);
	};

	return (
		<div
			className={
				shadow
					? "flex fixed w-full shadow-xl z-[100] md:h-20 items-center bg-gray-800 "
					: "fixed flex w-full md:h-20 items-center bg-gray-800 "
			}
		>
			<div className="md:flex w-full h-full md:pl-5 pr-2 px-6  dark:!bg-gray-800  dark:!text-white items-center justify-center ">
				<div className="w-1/3 flex items-center pl-32  max-[767px]:justify-between max-[767px]:w-full max-[767px]:py-6 ">
					<Link href="/#Accueil">
						<span className="cursor-pointer min-[394px]:p-0  text-yellow-600 min-[394px]:text-2xl  ">
							<Image src={roro} width={80} height={80} alt="roro" />
						</span>
					</Link>
					<span>
						<AiOutlineMenu
							className="min-[768px]:hidden cursor-pointer"
							size={25}
							onClick={handleNav}
						/>
					</span>
				</div>
				<div className="flex w-2/3  justify-center">
					<ul className="md:flex md:gap-x-[3vw]   md:text-2xl  md:pl-20  md:items-center  w-full md:w-auto md:py-0 py-4 md:p1-0 p1-7  transition-all ease-in duration-500 max-[767px]:hidden">
						{links.map(({ id, link }) => (
							<li key={id} className="cursor-pointer hover:text-blue-500 ">
								<Link href={"/#" + link} duration={200}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div
				className={
					navbar
						? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
						: ""
				}
			>
				<div
					className={
						navbar
							? "md:hidden fixed left-0 top-0 w-[85%] opacity-80 sm:w-[60%] md:w-[45%] h-screen bg-black text-white p-5 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<h2 className="max-[767px]:text-xl pt-10 mx-5">Portfo</h2>
							<div
								className="rounded-full shadow-lg shadow-white/20 p-3 cursor-pointer hover:bg-slate-100 transition duration-500 ease-out mx-5"
								onClick={handleNav}
							>
								<AiOutlineClose className="text-bolded" />
							</div>
						</div>

						<div className="py-1 flex flex-col items-center mt-6">
							<ul className="uppercase font-semibold ">
								<Link href="/">
									<li className=" text-xl cursor-pointer py-4">Acueil</li>
								</Link>
								<Link href="/about">
									<li className="text-xl cursor-pointer py-4 ">A propos</li>
								</Link>
								<Link href="/projects">
									<li className=" text-xl cursor-pointer py-4">Projets</li>
								</Link>
								<Link href="/contact">
									<li className=" text-xl cursor-pointer py-4">Contact</li>
								</Link>
							</ul>
						</div>
					</div>

					<div className="w-full h-60 mt-[20vh]">
						<p className="mt-2 flex justify-center uppercase font-bold">
							Me contacter
						</p>
						<div className=" flex items-center justify-center  mt-[6vh] max-[767px]:gap-5 ">
							<div className="rounded-full shadow-lg shadow-white/20 p-3 cursor-pointer hover:bg-slate-300">
								<Link href="https://www.linkedin.com/in/christ-rova-abessolo-903aa1244/">
									<FaLinkedin size={20} />
								</Link>
							</div>
							<div className="rounded-full shadow-lg shadow-white/20 p-3 cursor-pointer  hover:bg-slate-100">
								<Link href="abessolochrist30@gmail.com">
									<FaAt size={20} />
								</Link>
							</div>
							<div className="rounded-full shadow-lg shadow-white/20 p-3 cursor-pointer hover:bg-slate-100">
								<Link href="https://github.com/RovaEncoder">
									<FaGithub size={20} />
								</Link>
							</div>
							<div className="rounded-full shadow-lg shadow-white/20 p-3 cursor-pointer hover:bg-slate-100">
								<Link href="+33605549892">
									<FaMobileAlt size={20} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
