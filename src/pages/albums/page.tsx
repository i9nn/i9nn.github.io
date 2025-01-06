import Navbar from "@/components/Navbar";
import styles from "@/styles/about.module.css"
import Template from "../template";
import Head from "@/components/Head";
import Album from "@/components/Album";

export default function About() {
	return (
		<>
		    <Head />

			<main className={styles.main}>
				<Template >
					<div className={styles.container}>
						<Navbar></Navbar>

						<Album date="January 2" name="Pop 2" artist="Charli XCX" score={8} />
						<Album date="January 3" name="Karma" artist="Pharaoh Sanders" score={9} />
						<Album date="January 4" name="ロンググッドバイ" artist="Kinokoteikoku" score={8} />
						<Album date="January 5" name="The Rockwood Escape Plan" artist="Devon Hendryx" score={7} />
					</div>
				</Template>
			</main>
		</>
	);
}
