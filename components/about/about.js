import Image from "next/image";
import Link from "next/link";
import myphoto from "../../public/rova.png";
import bgprofile from "../../public/bgprofile.png";
import {
	FaGithub,
	FaLinkedin,
	FaSun,
	FaMoon,
	FaAt,
	FaMobileAlt,
} from "react-icons/fa";

export default function About() {
	return (
		<>
			<div className="w-full h-3/5 flex bg-gray-800 my-16 py-5 text-white mb-40">
				<div className="w-1/2 flex flex-col pl-40 pt-15 ">
					<p className="my-5 text-2xl">
						Bonjour,<span className="text-blue-500"> je suis</span>{" "}
					</p>
					<h1 className="text-blue-500 my-3 ">Abessolo Christ Rova</h1>
					<p className="w-full text-white md:text-xl my-5">
						Etudiant à l’ECE-Paris, je suis à vos sevice et je suis très
						passioné par le developpement web. Cela dit grace à vous je serai
						capable de mettre en pratique toute mes compétence{" "}
					</p>

					<button className="bg-slate-900 text-white dark:bg-white hover:text-blue-500 dark:hover:text-white hover:bg-white  dark:hover:bg-blue-500  dark:text-black font-semibold  p-2 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-3 w-[25%] mt-10">
						<Link href="/">
							<small>Me connaitre plus ...</small>
						</Link>
					</button>

					<div className=" w-full flex items-center mt-7">
						<p className="mr-10 text-xl">Entrer en contact:</p>
						<div className=" rounded-full hover:rounded-xl   shadow-lg  p-2 cursor-pointer bg-blue-500 mr-3">
							<Link href="https://www.linkedin.com/in/christ-rova-abessolo-903aa1244/">
								<FaLinkedin size={15} className="transform -rotate-1" />
							</Link>
						</div>
						<div className="rounded-full hover:rounded-xl  shadow-lg p-2 cursor-pointer  bg-blue-500 mr-3">
							<Link href="abessolochrist30@gmail.com">
								<FaAt size={15} />
							</Link>
						</div>
						<div className="rounded-full  hover:rounded-xl   shadow-lg  p-2 cursor-pointer bg-blue-500 mr-3">
							<Link href="https://github.com/RovaEncoder">
								<FaGithub size={15} />
							</Link>
						</div>
						<div className="rounded-full  hover:rounded-xl  shadow-lg  p-2 cursor-pointer bg-blue-500 mr-3">
							<Link href="+33605549892">
								<FaMobileAlt size={15} />
							</Link>
						</div>
					</div>
				</div>
				<div className="w-1/3  flex flex-auto justify-center relativ">
					<Image
						className="rounded-md absolute z-30 rounded-bl-[100px] mb-20 "
						src={myphoto}
						width={330}
						height={410}
						alt="roro"
					></Image>
					<Image
						className="rounded-md absolute z-10"
						src={bgprofile}
						width={490}
						height={750}
						alt="roro"
					></Image>
				</div>
			</div>
		</>
	);
}
