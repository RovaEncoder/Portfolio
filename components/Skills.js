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
  SiNestjs,
  SiVagrant,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { GrHadoop } from "react-icons/gr";

export default function Skills() {
  return (
    <>
      <div
        id="Skills"
        className="my-100 w-full h-full flex items-center justify-center flex-col  pt-40 pb-5 "
      >
        <p className="text-3xl font-semibold mb-10 text-white">
          Langages & Outils
        </p>
        <div className="grid md:gap-x-20 gap-x-5 md:gap-y-4 gap-y-8 grid-cols-3   w-[80%] p-2">
          <div className="bg-white p-3 flex flex-col justify-center  items-center text-orange-500 shadow-md shadow-orange-500 hover:opacity-100 rounded-md hover:scale-105 ease-in duration-150">
            <p>HML</p>
            <FaHtml5 size={35} />
          </div>
          <div className="bg-white p-3 flex flex-col justify-center items-center text-blue-800 shadow-md shadow-blue-800 hover:opacity-100 rounded-md hover:scale-105 ease-in duration-150">
            <p>CSS</p>
            <FaCss3 size={35} />
          </div>
          <div className="bg-white p-3 flex flex-col justify-center items-center text-yellow-500 shadow-md shadow-yellow-500  hover:opacity-100 rounded-md hover:scale-105 ease-in duration-150">
            <p>Javascript</p>
            <SiJavascript size={35} />
          </div>{" "}
          <div className="bg-white text-black p-3 flex flex-col justify-center items-center text-blue-150 shadow-md shadow-blue-150 hover:opacity-100 rounded-md hover:scale-105 ease-in duration-150">
            <p>React</p>
            <FaReact size={35} />
          </div>
          <div className="bg-white text-black p-3 flex flex-col justify-center items-center shadow-md shadow-yellow-800 ty-50 hover:opacity-100 rounded-md  hover:scale-105 ease-in duration-150">
            <p>NextJs</p>
            <SiNextdotjs size={35} />
          </div>
          <div className="bg-white p-3 flex flex-col justify-center items-center text-green-800 shadow-md shadow-green-800  hover:opacity-100 rounded-md  hover:scale-105 ease-in duration-150">
            <p>NodeJs</p>
            <FaNodeJs size={35} />
          </div>
          <div className="bg-white p-3 text-red-600 flex flex-col justify-center items-center  hover:opacity-100 rounded-md  hover:scale-105 ease-in duration-150">
            <p>NestJs</p>
            <SiNestjs size={35} />
          </div>
          <div className="bg-white p-3 text-black flex flex-col justify-center items-center  hover:opacity-100 rounded-md  hover:scale-105 ease-in duration-150">
            <p>Python</p>
            <FaPython size={35} />
          </div>
          <div className="bg-white p-3 flex flex-col justify-center items-center text-black shadow-md shadow-black hover:opacity-100 rounded-md  hover:scale-105 ease-in duration-150">
            <p>React Native</p>
            <FaReact size={35} />
          </div>
          <div className="bg-white p-3 flex flex-col justify-center items-center text-orange-600 shadow-md shadow-orange-600 hover:opacity-100 rounded-md  hover:scale-105 ease-in duration-150">
            <p>Git</p>
            <FaGitAlt size={35} />
          </div>
          <div className="bg-white p-3 flex flex-col justify-center text-black items-center shadow-md shadow-yellow-800 hover:opacity-100 rounded-md hover:scale-105 ease-in duration-150">
            <p>SQL</p>
            <SiMysql size={35} />
          </div>
          <div className="bg-white p-3 flex flex-col justify-center items-center text-green-800 shadow-md shadow-green-800  hover:opacity-100 rounded-md hover:scale-105 ease-in duration-150">
            <p>MongoDB</p>
            <SiMongodb size={35} />
          </div>
          <div className="bg-white p-3 flex flex-col justify-center items-center text-blue-600 shadow-md shadow-blue-600  hover:opacity-100 rounded-md hover:scale-105 ease-in duration-150">
            <p>Docker</p>
            <SiDocker size={35} />
          </div>
        </div>
      </div>
    </>
  );
}
