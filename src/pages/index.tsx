import styles from "@/styles/index.module.css"

import Head from "@/components/Head";
import Modal from "@/components/Modal";
import Template from "./template";

export default function Landing() {
	return (
        <>
            <Head />
            <div className={styles.bg}>
                <Template>
                    <main className={styles.main}>
                        <Modal />
                    </main>
                </Template>
            </div>
        </>
	);
}
