import "../css/style.css";

/*
import * as THREE from "three";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TeapotGeometry } from "three/examples/jsm/geometries/TeapotGeometry";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { TTFLoader } from "three/examples/jsm/loaders/TTFLoader";
*/

import React from "react";
import { createRoot } from "react-dom/client";

const title = document.getElementById("title");
title.style.fontFamily = "Helvetica";

const alternateText = ["真狗屎", "진짜 음악", "स्वर्गीय", "开发商", "개발자", "反现代人才", "깨우다", "自由世界"]
const alternateFonts = ["Arial", "Helvetica", "Tahoma", "Trebuchet MS", "Courier New", "Georgia", "Palatino", "Baskerville"]

setInterval(() => { 
    let rand = Math.floor(Math.random() * 4);
    if (rand == 3) {
        title.innerHTML = alternateText[Math.floor(Math.random() * alternateText.length)];
        title.style.fontSize = "200px";
    } else {
        title.innerHTML = "i9nn";
        title.style.fontSize = "300px";
    }

    title.style.fontFamily = alternateFonts[Math.floor(Math.random() * alternateFonts.length)]
}, 20)

/*
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x000000, 0 );
document.body.appendChild( renderer.domElement );

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.target.set( 0, 0, 0 );

const dl = new THREE.DirectionalLight(0xffffff, 3);
dl.position.set(0, 5, 5);
scene.add( dl );

const ttfLoader = new TTFLoader();
const fontLoader = new FontLoader();

let pivot, textMesh;
let canMove = false;
let boxY = 0;

ttfLoader.load(
    "Mona-Sans.ttf",
    (json) => {
        const font = fontLoader.parse(json);
        textMesh = new THREE.Mesh(
            new TextGeometry("i9nn", {
                depth: 2,
                size: 10,
                font: font,

                bevelEnabled: true,
		        bevelThickness: 1,
                bevelSize: 0.4,
                bevelOffset: 0,
                bevelSegments: 20

            }),
            new THREE.MeshStandardMaterial({ 
                color: 0xffffff,
            })
        );
       
        textMesh.geometry.computeBoundingBox();
        textMesh.scale.z = 0.2;

        let vec: THREE.Vector3;
        const box = textMesh.geometry.boundingBox.getSize(new THREE.Vector3);
        
        textMesh.position.set(-box.x / 2, -box.y / 2, 0)
        boxY = -box.y / 2;

        pivot = new THREE.Group();
        scene.add(pivot);
        pivot.add(textMesh);

        canMove = true;
    }
)

let pointerX = 0;
let pointerY = 0;

window.addEventListener("mousemove", (e: MouseEvent) => {
    pointerX = e.clientX;
    pointerY = e.clientY;
});

let t = 0;
function animate() {
    if (canMove) {
        pivot.rotation.set(
            (pointerY - window.innerHeight / 2) / 2000, 
            (pointerX - window.innerWidth / 2) / 2000, 
            0
        );
        pivot.position.y = Math.sin(t) / 2 + 0.5;
    }

	renderer.render( scene, camera );
    t += 0.01;
}
renderer.setAnimationLoop( animate );
*/