import Image from "next/image";
import { Link } from "react-scroll";
import myphoto from "/public/rova.png";

import { FaGithub, FaLinkedin, FaAt, FaMobileAlt } from "react-icons/fa";

export default function Accueil() {
	return (
		<>
			<div
				id="Accueil"
				className="w-full h-full flex   text-white py-40 max-[767px]:flex-col max-[767px]:bg-black "
			>
				<div className="w-1/2 flex flex-col pl-40 max-[767px]:pl-0  max-[767px]:w-full pt-15 ">
					<p className="my-5 text-2xl max-[767px]:text-md">
						Bonjour,<span className="text-blue-500"> je suis</span>{" "}
					</p>
					<h1 className="text-blue-500 my-3 ">Abessolo Christ Rova</h1>
					<p className="w-full text-white md:text-xl my-5">
						Actuellement étudiant en Master 1 en école d’ingénieur dans la
						spécialité systèmes d’information, je suis à vos services. En effet,
						grace à vous je serai capable de mettre en pratique toute mes
						compétences.{" "}
					</p>
					<Link to="A propos" smooth duration={400}>
						<button
							// onClick={() => push("/# Apropos")}
							className="bg-blue-500 text-white  hover:text-blue-500 dark:hover:text-white hover:bg-white  dark:hover:bg-blue-500  dark:text-black font-semibold  px-6 py-2 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-3  mt-10"
						>
							<small>Plus...</small>
						</button>
					</Link>

					<div className=" w-full flex items-center mt-7">
						<p className="mr-10 text-xl">Entrer en contact:</p>
						<div className=" rounded-full hover:bg-yellow-600 shadow-md shadow-white  p-2 cursor-pointer bg-blue-500 mr-3  hover:scale-105 ease-in duration-300">
							<Link to="https://www.linkedin.com/in/christ-rova-abessolo-903aa1244/">
								<FaLinkedin size={25} className="" />
							</Link>
						</div>
						<div className="rounded-full hover:bg-yellow-600 shadow-md shadow-white   p-2 cursor-pointer  bg-blue-500 mr-3 hover:scale-105 ease-in duration-300">
							<Link to="abessolochrist30@gmail.com">
								<FaAt size={25} />
							</Link>
						</div>
						<div className="rounded-full  hover:bg-yellow-600   shadow-md shadow-white  p-2 cursor-pointer bg-blue-500 mr-3 hover:scale-105 ease-in duration-300">
							<Link to="https://github.com/RovaEncoder">
								<FaGithub size={25} />
							</Link>
						</div>
						<div className="rounded-full  hover:bg-yellow-600   shadow-md shadow-white   p-2 cursor-pointer bg-blue-500 mr-3 hover:scale-105 ease-in duration-300">
							<Link to="+33605549892">
								<FaMobileAlt size={25} />
							</Link>
						</div>
					</div>
				</div>
				<div className="w-1/2 flex justify-center items-center  ">
					<div className="w-[410px] flex ml-3 items-center justify-center animate-bounce duration-100  ">
						<Image
							className=" border-4 rounded-[100%] border-blue-800"
							src={myphoto}
							width={260}
							height={150}
							alt="roro"
						></Image>
					</div>
				</div>
			</div>
		</>
	);
}
