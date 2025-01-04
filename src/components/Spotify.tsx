import styles from "@/styles/index.module.css"
import JSON from "@/classes/JSON";

function millisToTimestamp(m: number) {
    const duration = Math.round(m);
    const mins = Math.floor(duration / 60);
    const secs = Math.floor(duration % 60);

    let seconds = secs.toString();
    if (secs < 10) seconds = "0" + seconds;

    return mins + ":" + seconds;
}

function shorten(str: string, title: boolean) {
    let bound = 20;
    if (!title) bound = 35;

    return (str.length > bound) ? str.substring(0, bound + 1) + "..." : str;
}

function Time(props: {json: JSON}) {
    if (props.json.data.listening_to_spotify) {
        const start = Math.round(props.json.data.spotify!.timestamps.start / 1000);
        const end = Math.round(props.json.data.spotify!.timestamps.end / 1000);
        const now = Math.round(Date.now() / 1000);

        return (
            <div className={styles.time}>
                <p className={styles.t1}>{millisToTimestamp(now - start)}</p>
                <div className={styles.bar}>
                    <div className={styles.fill} style={{width: (100 - ((end - now) / (end - start) * 100)) + "%"}}></div>
                </div>
                <p className={styles.t2}>{millisToTimestamp(end - start)}</p>
            </div>
        )
    }
}


export default function Spotify(props: {json: JSON}) {
    if (props.json.data.listening_to_spotify) {
        const songName = props.json.data.spotify!.song;
        const artistName = props.json.data.spotify!.artist + " • " + props.json.data.spotify!.album;

        return (
            <div className={styles.spotify}>
                <img className={styles.cover} src={`${props.json.data.spotify!.album_art_url}`}></img>
                <div className={styles.description}>
                    <h1>{shorten(songName, true)}</h1>
                    <h2>{shorten(artistName, false)}</h2>
                    <Time json={props.json}/>
                </div>
            </div>
        )
    }
}