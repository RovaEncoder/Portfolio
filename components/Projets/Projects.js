import Image from "next/image";
import projet1 from "/public/projet1.png";
import projet2 from "/public/projet2.png";

export default function Project() {
	return (
		<>
			<div className="w-full  p-3 flex items-center justify-center mt-40 flex-col ">
				<h2 className="text-white">Projets recents</h2>
				<div className=" flex items-center w-[80%] h-80  text-white px-4 ">
					<div className="flex  flex-col ml-10 w-2/3 h-full justify-center ">
						<h2 className="">Projet Webtech</h2>
						<div className=" w-full  p-2 bg-gray-600 opacity-60">
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
							width={700}
							height={600}
							alt="roro"
						></Image>
					</div>
				</div>
				<div className="flex items-center w-[80%] h-80  text-white px-4 mt-10">
					<div className="w-2/3  h-full flex items-center justify-center p-3 ">
						<Image
							className="rounded-xl border border-white/50 shadow-xl shadow-white/20 bg-white/70"
							src={projet2}
							width={700}
							height={600}
							alt="roro"
						></Image>
					</div>
					<div className="w-2/3  h-full flex items-center justify-center p-3  ">
						<div className="flex  flex-col w-full h-full justify-center items-end ">
							<h2 className="">Projet Devops</h2>
							<div className=" w-full  p-2 bg-gray-600 opacity-60">
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
