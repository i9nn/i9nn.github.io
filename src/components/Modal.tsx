import { useEffect, useState } from "react";
import styles from "@/styles/index.module.css"
import Navbar from "./Navbar";
import Spotify from "./Spotify";

const statusColors = new Map<string, string>();
statusColors.set("online", "rgb(59, 165, 92)");
statusColors.set("idle", "rgb(250, 166, 26)")
statusColors.set("dnd", "rgb(237, 66, 69)")
statusColors.set("offline", "rgb(116, 127, 141)")

export default function Model() {
    const [json, setJSON] = useState({
        data: {
            discord_status: "",
            discord_user: {
                avatar: "",
                display_name: "",
                global_name: "",
                id: "",
                username: ""
            },
            listening_to_spotify: false,
            spotify : {
                album: "",
                album_art_url: "",
                artist: "",
                song: "",
                timestamps: {
                    end: 1,
                    start: 1
                },
                track_id: ""
            }
        }
    });
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        if (!loaded) {
            setInterval(() => {
                (async() => {
                    const response = await fetch(
                        "https://api.lanyard.rest/v1/users/614954208139149319"
                    );
                    let result = await response.json();
                    // console.log(result);
                    setJSON(result);
                    setLoaded(true);
                    
                })();
            }, 1000);
        }
    });

    return (loaded &&
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.pfp}>
                    <img src={`https://cdn.discordapp.com/avatars/${json.data.discord_user.id}/${json.data.discord_user.avatar}?size=1024`}></img>
                    <div className={styles.circle} style={{backgroundColor: statusColors.get(json.data.discord_status)}}></div>
                </div>
                <div className={styles.info}>
                    <h1>{`${json.data.discord_user.display_name} (@${json.data.discord_user.username})`}</h1>
                    <h2>CS student, music producer, graphic designer</h2>

                    <Spotify json={json} />
                </div>
            </div>
            <Navbar />
        </div>
    )
}
