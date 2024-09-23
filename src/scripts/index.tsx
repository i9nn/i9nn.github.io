import "../css/style.css";

import React from "react";
import { createRoot } from "react-dom/client";

function shorten(str: string, title: boolean) {
    let bound = 20;
    if (!title) bound = 40;

    return (str.length > bound) ? str.substring(0, bound + 1) + "..." : str;
}

function fetchStatus(status: string) {
    if (status === "online") {
        return "rgb(59, 165, 92)";
    } else if (status === "idle") {
        return "rgb(250, 166, 26)";
    } else if (status === "dnd") {
        return "rgb(237, 66, 69)";
    } else if (status === "offline") {
        return "rgb(116, 127, 141)";
    }
}

function Spotify(props: {listening: boolean}) {
    if (props.listening) {
        let songName = json.data.spotify.song;
        let artistName = json.data.spotify.artist + " • " + json.data.spotify.album;

        return (
            <div className="spotify">
                <img className="cover" src={`${json.data.spotify.album_art_url}`}></img>
                <div className="description">
                    <h1>{shorten(songName, true)}</h1>
                    <h2>{shorten(artistName, false)}</h2>
                </div>
            </div>
        )
    }
}

function App(props: { json: Object }) {
    return (
        <div className="container">
            <div className="profile">
                <div className="pfp">
                    <img src={`https://cdn.discordapp.com/avatars/${json.data.discord_user.id}/${json.data.discord_user.avatar}?size=1024`}></img>
                    <div className="circle" style={{backgroundColor: fetchStatus(json.data.discord_status)}}></div>
                </div>
                <div className="info">
                    <h1>{`@${json.data.discord_user.username}`}</h1>
                    <h2>CS student, music producer, graphic designer</h2>

                    <Spotify listening={json.data.listening_to_spotify} />
                </div>
            </div>
        </div>
    )
}

let json = null;
let root = createRoot(document.getElementById("main"));

setInterval(() => {
    (async() => {
        const response = await fetch(
            "https://api.lanyard.rest/v1/users/614954208139149319"
        );
        json = await response.json();
        root.render(<App json={json} />)
    })();
}, 1000);


