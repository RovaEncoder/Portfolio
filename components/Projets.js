import Image from "next/image";
import Link from "next/link";
import tagira from "/public/tagira.png";
import projet1 from "/public/projet1.png";
import projet2 from "/public/projet2.png";
import projet3 from "/public/nest.png";

export default function Projets() {
  return (
    <>
      <div
        id="Projets"
        className="w-full  px-3 md:flex flex-col items-center justify-center md:pt-40 max-[767px]:py-40 "
      >
        <h2 className="text-white max-[767px]:text-center">Projets récents</h2>
        <div className="flex flex-col  w-full  gap-y-8  items-center justify-center  max-[767px]:grid-rows-2  ">
          <div className="flex items-center md:w-[80%] w-full max-[767px]:flex-col text-white md:px-4 md:mt-5  ">
            <div className="md:w-2/3 w-full h-full flex items-center justify-center md:p-3 max-[767px]:order-last  max-[767px]:mt-7">
              <Link href="https://www.tagira.africa/">
                <Image
                  className="rounded-xl border border-white/50 shadow-xl shadow-white/20 bg-white/70 hover:scale-105 ease-in duration-300 cursor-pointer"
                  src={tagira}
                  width={460}
                  height={460}
                  alt="roro"
                ></Image>
              </Link>
            </div>

            <div className="md:w-2/3 w-full  h-full flex items-center justify-center md:p-3 max-[767px]:my-3">
              <div className="flex  flex-col w-full h-full justify-center items-start ">
                <p className="md:text-2xl mb-4 text-xl max-[767px]:text-blue-500">
                  Tagira
                </p>
                <div className="w-full p-2 bg-gray-600 opacity-80 hover:opacity-100 max-[767px]:sm  hover:cursor-pointer">
                  <p className="text-white  max-[767px]:text-justify ">
                    Tagira, une application mobile de gestion de boutique B2B
                    pour le marché africain francophone. Notre objectif est de
                    transformer la manière dont les petites entreprises
                    d’Afrique francophone gèrent leur activité en ligne.
                    <br /> Ce projet m’a apporté une richesse de développement
                    personnel et d’expérience technique. J'ai acquis des
                    techniques essentielles et perfectionné mes compétences en
                    gestion de projet.
                    <Link href="https://www.tagira.africa/">
                      <button className="bg-blue-500 text-white  hover:text-blue-500 dark:hover:text-white hover:bg-white  dark:hover:bg-blue-500  dark:text-black font-semibold  px-4 py-1 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-3  mt-2">
                        <small>Plus...</small>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:flex max-[767px]:flex-col items-center md:w-[80%] w-full   text-white md:px-4">
            <div className="flex  flex-col md:ml-10 md:w-2/3 w-full  justify-center  ">
              <p className="md:text-2xl text-xl mb-4 max-[767px]:text-blue-500 text-red-600 ">
                Projet NestJS
              </p>
              <div className=" w-full  p-2 bg-gray-600 opacity-80 hover:opacity-100  max-[767px]:sm ">
                <p className="text-white max-[767px]:text-justify ">
                  J'ai développé une API CRUD avancée avec NestJS, incluant
                  l'enregistrement, l'authentification et la recherche de
                  produits via l'API OpenFoodFacts, ainsi qu'une mise en cache
                  pour améliorer les performances. Le projet a été dockerisé.
                  NestJS, une plateforme pour Node.js, a permis de développer
                  une API puissante et modulaire, facilement adaptable à divers
                  environnements de production. Cette expérience a été très
                  enrichissante pour découvrir les avantages de NestJS pour les
                  API performantes et robustes.
                  <Link href="https://github.com/RovaEncoder/api-crud-nestjs">
                    <button className="bg-blue-500 text-white  hover:text-blue-500 dark:hover:text-white hover:bg-white  dark:hover:bg-blue-500  dark:text-black font-semibold  px-4 py-1 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-3  mt-2">
                      <small>Plus...</small>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
            <div className="md:w-2/3 w-full  flex items-center justify-center md:p-3 my-6 ">
              <Link href="https://github.com/RovaEncoder/api-crud-nestjs">
                <Image
                  className="rounded-xl border border-white/50 shadow-xl shadow-white/20 hover:scale-105 ease-in duration-300 cursor-pointer "
                  src={projet3}
                  width={460}
                  height={460}
                  alt="roro"
                ></Image>
              </Link>
            </div>
          </div>
          <div className=" md:flex max-[767px]:flex-col items-center md:w-[80%] w-full   text-white md:px-4">
            <div className="md:w-2/3 w-full  flex items-center justify-center md:p-3 my-6 ">
              <Link href="https://school-project-blog-rova.vercel.app/">
                <Image
                  className="rounded-xl border border-white/50 shadow-xl shadow-white/20 hover:scale-105 ease-in duration-300 cursor-pointer "
                  src={projet1}
                  width={460}
                  height={460}
                  alt="roro"
                ></Image>
              </Link>
            </div>
            <div className="flex  flex-col md:ml-10 md:w-2/3 w-full  justify-center  ">
              <p className="md:text-2xl text-xl mb-4 max-[767px]:text-blue-500 ">
                Projet Webtech
              </p>
              <div className=" w-full  p-2 bg-gray-600 opacity-80 hover:opacity-100  max-[767px]:sm ">
                <p className="text-white max-[767px]:text-justify ">
                  Developpement d'un blog: ce projet scolaire m'a aidé à
                  découvrir un framework très riche et puissant de ReactJs
                  —NextJs. Aussi, j'ai été surpris par la richesse de Supabase —
                  qui couvre l'authentification et l'autorisation, le stockage
                  de fichiers, le stockage de données, les notifications temps
                  réel sur mes données.
                  <Link href="https://school-project-blog-rova.vercel.app/">
                    <button className="bg-blue-500 text-white  hover:text-blue-500 dark:hover:text-white hover:bg-white  dark:hover:bg-blue-500  dark:text-black font-semibold px-4 py-1 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-3  mt-2">
                      <small>Plus...</small>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center md:w-[80%] w-full max-[767px]:flex-col text-white md:px-4 md:mt-5  ">
            <div className="md:w-2/3 w-full  h-full flex items-center justify-center md:p-3 max-[767px]:my-3">
              <div className="flex  flex-col w-full h-full justify-center items-end ">
                <p className="md:text-2xl mb-4 text-xl max-[767px]:text-blue-500">
                  Projet Devops
                </p>
                <div className="w-full p-2 bg-gray-600 opacity-80 hover:opacity-100 max-[767px]:sm ">
                  <p className="text-white  max-[767px]:text-justify ">
                    Au cours de ce projet, j'ai acquis des connaissances solides
                    sur la culture DevOps, qui vise à fournir des logiciels de
                    haute qualité aux clients ou utilisateurs de manière rapide
                    et efficace en utilisant l'automatisation pour accélérer et
                    améliorer le processus de développement, de test et de
                    déploiement de logiciels via la livraison continue. Cela
                    garantit que les logiciels sont de qualité, sécurisés et
                    stables, ce qui est essentiel pour répondre aux besoins des
                    clients de manière rapide et fiable.
                    <Link href="https://github.com/RovaEncoder/DevopsGroup-">
                      <button className="bg-blue-500 text-white  hover:text-blue-500 dark:hover:text-white hover:bg-white  dark:hover:bg-blue-500  dark:text-black font-semibold  px-4 py-1 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-3  mt-2">
                        <small>Plus...</small>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 w-full h-full flex items-center justify-center md:p-3 max-[767px]:order-last  max-[767px]:mt-7">
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
          </div>
        </div>
      </div>
    </>
  );
}
