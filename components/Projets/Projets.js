import Image from "next/image";
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
								A web app for visualizing personalized Spotify data. View your
								top artists, top tracks, recently played tracks, and detailed
								audio information about each track. Create and save new
								playlists of recommended tracks based on your existing playlists
								and more.
							</p>
						</div>
					</div>
					<div className="w-2/3  h-full flex items-center justify-center p-3">
						<Image
							className="rounded-xl border border-white/50 shadow-xl shadow-white/20 "
							src={projet1}
							width={460}
							height={460}
							alt="roro"
						></Image>
					</div>
				</div>
				<div className="flex items-center w-[80%] h-80  text-white px-4 mt-5">
					<div className="w-2/3  h-full flex items-center justify-center p-3 ">
						<Image
							className="rounded-xl border border-white/50 shadow-xl shadow-white/20 bg-white/70"
							src={projet2}
							width={460}
							height={460}
							alt="roro"
						></Image>
					</div>
					<div className="w-2/3  h-full flex items-center justify-center p-3  ">
						<div className="flex  flex-col w-full h-full justify-center items-end ">
							<p className="text-2xl mb-4">Projet Devops</p>
							<div className=" w-full  p-2 bg-gray-600 opacity-60 hover:opacity-100">
								<p className="text-white  ">
									A web app for visualizing personalized Spotify data. View your
									top artists, top tracks, recently played tracks, and detailed
									audio information about each track. Create and save new
									playlists of recommended tracks based on your existing
									playlists and more.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
