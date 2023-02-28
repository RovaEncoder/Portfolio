import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Notfound() {
	const route = useRouter();
	useEffect(() => {
		setTimeout(() => {
			route.push("/");
		}, 3000);
	}, []);

	return (
		<div className="w-full md:h-screen flex items-center justify-center flex-col dark:text-white pt-20">
			<h1>Oups</h1>
			<p className="mt-2">
				Cette page n'existe pas: redirection automatique dans 3s ! 😎
			</p>
			<p className="mt-2">
				Retour à l'
				<Link href="/">Accueil</Link>
			</p>
		</div>
	);
}
