import React from "react";
import { useState } from "react";

import ShinyHunt from "./ShinyHunt"

const itemsList = {
    "about me": (
        <div className="item">
            <h1>hello my name is ian</h1>
            <hr></hr>
            <p>
                i am a web + software developer who currently specializes in front-end UI/UX design.
                i am currently trying to build desktop applications for games + other specialized
                software. i am fluent in multiple languages, including lua, java, typescript + react,
                sass, c++, and a little bit of python.

                please take a look around my website ok
            </p>
        </div>
    ),
    "projects": (
        <div className="item">
            <p>
                i am currently working on a variety of projects ranging from opengl graphics to 
                web design boilerplates to custom video game logic
            </p>
            <br />
            <p>
                i would put them here, but my github account uses my real name and i am devoted to complete
                and total internet privacy. you can take it with a grain of salt i guess (if you want to see them
                and i know you, then message me on discord and i'll give you a link)
            </p>
        </div>
    ),
    "shiny hunts": (
        <div className="item">
            <p>
                i like to shiny hunt for legendaries in pokemon games. here are some of my hunts:
            </p>
            <hr></hr>
            <ShinyHunt name="Regice" srs="856" />
            <ShinyHunt name="Raikou" srs="2785" ongoing={true} />
        </div>
    ),
    "music": (
        <div className="item">
            <p>
                below are some of my favorite artists. i like listening to lots of different genres
                so feel free to give me recommendations
            </p>
            <hr></hr>
            <div className="music-grid">
                <div className="col">
                    <h3>hip hop / rap</h3>
                    <p>Kanye West</p>
                    <p>Ecco2k</p>
                    <p>Travis Scott</p>
                    <p>Kendrick Lamar</p>
                    <p>JPEGMAFIA</p>
                </div>
                <div className="col">
                    <h3>rnb</h3>
                    <p>Sampha</p>
                    <p>Lauryn Hill</p>
                    <p>Miguel</p>
                </div>
                <div className="col">
                    <h3>rock</h3>
                    <p>Radiohead</p>
                    <p>Parannoul</p>
                    <p>King Crimson</p>
                    <p>Fishmans</p>
                    <p>Neutral Milk Hotel</p>
                </div>
            </div>
        </div>
    )
}

function Button(props: {
    setItem: Function,
    name: string
}) {
    return (
        <button onClick={() => {
            let el = document.getElementById("items");
            el.classList.remove("click-pulse");
            
            props.setItem(itemsList[props.name]);
            setTimeout(() => {
                el.classList.add("click-pulse");
            }, 5);
        }}>{props.name}</button>
    )
}

export default function Contents() {
    const [item, setItem] = useState((<div></div>));

    const buttonsList = ["about me", "projects", "shiny hunts", "music"];
    let buttons = [];

    for (let i = 0; i < buttonsList.length; i++) {
        buttons.push(<Button name={buttonsList[i]} setItem={setItem} />)
    }

    return (
        <div className="contents">
            <nav id="buttons">
                <p>nav sidebar</p>
                {buttons}
            </nav>
            <div id="items" className="items">
                {item}
            </div>
        </div>
    )
}