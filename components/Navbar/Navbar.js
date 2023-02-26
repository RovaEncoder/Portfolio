import Link from "next/link";
import React, { useState } from "react";
import {
	FaGithub,
	FaLinkedin,
	FaSun,
	FaMoon,
	FaAt,
	FaMobileAlt,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
	const [navbar, setNavbar] = useState(false);
	const handleNav = () => {
		setNavbar(!navbar);
	};

	return (
		<div className="flex w-full md:h-20">
			<div className="md:flex w-full h-full md:pl-5 pr-2 px-6 2xl:px-16 dark:!bg-slate-900 bg-white  text-black dark:!text-white items-center justify-between ">
				<div className="w-1/3 h-full flex items-center max-[767px]:justify-between max-[767px]:w-full max-[767px]:py-6 ">
					<Link href="/">
						{/* <Image src={logo} width={90} height={50} /> */}
						<span className="cursor-pointer min-[394px]:p-0  text-white min-[394px]:text-2xl  ">
							Portfolio
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
				<div className="md:flex w-2/3 bg-black md:justify-between">
					<ul className="md:flex md:gap-x-[3vw] gap-y-[100vh] md:gap-y-0 md:pl-20 font-semibold md:items-center  w-full md:w-auto md:py-0 py-4 md:p1-0 p1-7  transition-all ease-in duration-500 max-[767px]:hidden">
						<Link href="/">
							<li className="">Accueil</li>
						</Link>
						<Link href="About">
							<li className="">About</li>
						</Link>
						<Link href="Skills">
							<li className="">Skills</li>
						</Link>
						<Link href="Projects">
							<li className="">Projects</li>
						</Link>
						<Link href="Conctact">
							<li className="">Conctact</li>
						</Link>
					</ul>
				</div>
				<FaSun size={20} className="max-[767px]:hidden " />
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
									<li className=" text-sm cursor-pointer py-4">Acueil</li>
								</Link>
								<Link href="/about">
									<li className="text-sm cursor-pointer py-4 ">A propos</li>
								</Link>
								<Link href="/projects">
									<li className=" text-sm cursor-pointer py-4">Projets</li>
								</Link>
								<Link href="/contact">
									<li className=" text-sm cursor-pointer py-4">Contact</li>
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
