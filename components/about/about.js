import Image from "next/image";
import console from "/public/console.png";
import hat from "/public/graduation-hat.png";
import dev from "/public/developpement-web.png";
import essai from "/public/essai.png";

export default function Home() {
	return (
		<>
			<div
				id="A propos"
				className="w-full flex items-center justify-center pt-36 pb-10"
			>
				<div className="w-3/4 md:flex flex-col flex items-center  ">
					<h2 className="uppercase text-white text-center">
						<span className="text-blue-800">À</span> propos{" "}
						<span className="text-blue-800">de moi:</span>{" "}
					</h2>
					<div className="flex items-start flex-col bg-slate-900 p-9 ">
						<p className="text-yellow-600 font-semibold text-xl my-2 italic">
							Je suis rigoureux, organisé, collaboratif et éfficace.
						</p>
						<p className=" rounded-xl  text-white whitespace-normal  items-center pr-20">
							En tant qu'étudiant en école d'ingénieur, j'ai développé des
							compétences techniques solides en programmation, en analyse de
							données et en modélisation. De plus, j'ai travaillé sur de
							nombreux projets en groupe, ce qui m'a permis d'améliorer mes
							compétences en communication et de travailler efficacement avec
							mes collègues pour atteindre nos objectifs communs.{" "}
						</p>
					</div>
					<div className="w-full  flex gap-8 justify-center items-center text-white mt-24 group ">
						<div className="flex w-1/4 h-full   p-10 py-5 first-line:justify-center shadow-lg flex-col group-hover:blur-sm hover:!blur-none items-center  bg-slate-900">
							<Image className="" src={hat} width={85} height={85} alt="hat" />
							<p className="text-center text-sm  mt-2 ">
								ECE-PAris, école d'ingénieurs. Diplomé en 2024.
							</p>
						</div>
						<div className=" w-1/4 h-full flex px-10 py-7 first-line:justify-center shadow-lg flex-col group-hover:blur-sm hover:!blur-none items-center bg-slate-900">
							<Image
								className="  "
								src={dev}
								width={85}
								height={85}
								alt="dev"
							/>
							<p className="text-center text-sm  mt-2">
								Je suis passioné des nouvelles technoligies.
							</p>
						</div>
						<div className=" w-1/4 h-full flex px-4 py-5 first-line:justify-center shadow-lg flex-col group-hover:blur-sm hover:!blur-none items-center bg-slate-900">
							<Image
								className=" "
								src={essai}
								width={85}
								height={85}
								alt="essai"
							/>
							<p className="text-center text-sm  mt-2">
								Aucune connaissance n'est absolue ! Toujours entrain
								d'apprendre.
							</p>
						</div>
						<div className="w-1/4 h-full flex px-10 py-5 first-line:justify-center shadow-lg flex-col group-hover:blur-sm hover:!blur-none items-center  bg-slate-900">
							<Image
								className=" "
								src={console}
								width={85}
								height={85}
								alt="console"
							/>
							<p className="text-center text-sm mt-2">
								J'aime les jeux vidéo - Chess, Fifa, Call of duty, etc.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
