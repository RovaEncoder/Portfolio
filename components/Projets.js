import Image from "next/image";
import Link from "next/link";
import projet1 from "/public/projet1.png";
import projet2 from "/public/projet2.png";

export default function Projets() {
	return (
		<>
			<div
				id="Projets"
				className="w-full  px-3 flex items-center justify-center mt-40 flex-col pt-40 "
			>
				<h2 className="text-white">Projets récents</h2>
				<div className=" flex items-center w-[80%] h-80  text-white px-4 ">
					<div className="flex  flex-col ml-10 w-2/3 h-full justify-center ">
						<p className="text-2xl mb-4">Projet Webtech</p>
						<div className=" w-full  p-2 bg-gray-600 opacity-60 hover:opacity-100">
							<p className="text-white ">
								Developpement d'un blog: ce projet scolaire m'a aidé à découvrir
								un framework très riche et puissant de ReactJs —NextJs. Aussi,
								j'ai été surpris par la richesse de Supabase — qui couvre
								l'authentification et l'autorisation, le stockage de fichiers,
								le stockage de données, les notifications temps réel sur mes
								données.
							</p>
						</div>
					</div>
					<div className="w-2/3  h-full flex items-center justify-center p-3">
						<Link href="https://ece-wepapp-abessolo-affadjene.vercel.app/">
							<Image
								className="rounded-xl border border-white/50 shadow-xl shadow-white/20 hover:scale-105 ease-in duration-300 cursor-pointer "
								src={projet1}
								width={460}
								height={460}
								alt="roro"
							></Image>
						</Link>
					</div>
				</div>
				<div className="flex items-center w-[80%] h-80  text-white px-4 mt-5">
					<div className="w-2/3  h-full flex items-center justify-center p-3 ">
						<Link href="https://github.com/RovaEncoder/DevopsGroup-">
							<Image
								className="rounded-xl border border-white/50 shadow-xl shadow-white/20 bg-white/70 hover:scale-105 ease-in duration-300 cursor-pointer"
								src={projet2}
								width={460}
								height={460}
								alt="roro"
							></Image>
						</Link>
					</div>
					<div className="w-2/3  h-full flex items-center justify-center p-3  ">
						<div className="flex  flex-col w-full h-full justify-center items-end ">
							<p className="text-2xl mb-4">Projet Devops</p>
							<div className=" w-full  p-2 bg-gray-600 opacity-60 hover:opacity-100">
								<p className="text-white  ">
									Au cours de ce projet, j'ai acquis des connaissances solides
									sur la culture DevOps, qui vise à fournir des logiciels de
									haute qualité aux clients ou utilisateurs de manière rapide et
									efficace en utilisant l'automatisation pour accélérer et
									améliorer le processus de développement, de test et de
									déploiement de logiciels via la livraison continue. Cela
									garantit que les logiciels sont de qualité, sécurisés et
									stables, ce qui est essentiel pour répondre aux besoins des
									clients de manière rapide et fiable.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
