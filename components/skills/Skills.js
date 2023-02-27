import {
	FaHtml5,
	FaCss3,
	FaReact,
	FaNodeJs,
	FaPython,
	FaGitAlt,
} from "react-icons/fa";
import {
	SiJavascript,
	SiNextdotjs,
	SiScala,
	SiMongodb,
	SiMysql,
	SiCsharp,
	SiPhp,
	SiVagrant,
	SiDocker,
	SiKubernetes,
} from "react-icons/si";
import { GrHadoop } from "react-icons/gr";
import { TbLetterC } from "react-icons/tb";

export default function Skills() {
	return (
		<>
			<div className="my-100 w-full flex items-center flex-col ">
				<p className="text-3xl font-semibold mb-10 text-white">
					Languages & Outils
				</p>
				<div className="grid gap-x-20 gap-y-4 grid-cols-3   w-[80%] p-2">
					<div className="bg-white p-3 flex  justify-center text-orange-500 opacity-80 hover:opacity-100 rounded-md">
						<FaHtml5 size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-blue-800 opacity-80 hover:opacity-100 rounded-md">
						<FaCss3 size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-yellow-500 opacity-80  hover:opacity-100 rounded-md">
						<SiJavascript size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-blue-300 opacity-80 hover:opacity-100 rounded-md">
						<FaReact size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center opacity-80 ty-50 hover:opacity-100 rounded-md">
						<SiNextdotjs size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-green-800 opacity-80  hover:opacity-100 rounded-md">
						<FaNodeJs size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center opacity-50 hover:opacity-100 rounded-md">
						<FaPython size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-red-600 opacity-80  hover:opacity-100 rounded-md">
						<SiScala size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-yellow-800 opacity-80  hover:opacity-100 rounded-md">
						<GrHadoop size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-orange-600 opacity-80  hover:opacity-100 rounded-md">
						<FaGitAlt size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center opacity-80 hover:opacity-100 rounded-md">
						<SiMysql size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-green-800 opacity-80  hover:opacity-100 rounded-md">
						<SiMongodb size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center font-bold opacity-80 hover:opacity-100 rounded-md">
						<TbLetterC size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-green-800 opacity-80  hover:opacity-100 rounded-md">
						<SiCsharp size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-purple-900 opacity-80  hover:opacity-100 rounded-md">
						<SiPhp size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-blue-600 opacity-80  hover:opacity-100 rounded-md">
						<SiVagrant size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-blue-600 opacity-80  hover:opacity-100 rounded-md">
						<SiDocker size={35} />
					</div>
					<div className="bg-white p-3 flex  justify-center text-blue-600 opacity-80  hover:opacity-100 rounded-md">
						<SiKubernetes size={35} />
					</div>
				</div>
			</div>
		</>
	);
}
