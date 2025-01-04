import styles from "@/styles/about.module.css"

const ratingColors = [
    "rgb(230, 124, 115)",
    "rgb(235, 142, 113)",
    "rgb(240, 160, 110)",
    "rgb(245, 178, 108)",
    "rgb(250, 196, 105)",
    "rgb(255, 214, 102)",
    "rgb(222, 209, 109)",
    "rgb(188, 204, 116)",
    "rgb(155, 198, 123)",
    "rgb(121, 193, 130)",
    "rgb(87, 187, 138)"
]

export default function Album(props: {
    date: string,
    name: string,
    artist: string,
    score: number
}) {
    return (
        <>
           <a className={styles.title}>
                {props.date + " - " + props.name + " (" + props.artist + ") "}
                <h1 className={styles.rating} style={{color: ratingColors[props.score]}}>
                    {"[" + props.score + "/10]"}
                </h1>
            </a> 
        </>
    )
}