import About from "components/about/about";
import Layout from "components/MyLayout/MyLayout";
import Skills from "components/skills/Skills";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Rova</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<About />
				<Skills />
			</Layout>
		</>
	);
}
