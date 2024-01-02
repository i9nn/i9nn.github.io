import "../css/style.css";

import React from "react";
import { createRoot } from "react-dom/client";

import Contents from "./components/Contents";
import Header from "./components/Header";

function Browser() {
    return (
        <div className="container">
            <Header />
            <Contents />
        </div>
    )
}

function Main() {
    return (
        <Browser />
    )
}

const root = createRoot(document.getElementById("main"));
root.render(<Main />)