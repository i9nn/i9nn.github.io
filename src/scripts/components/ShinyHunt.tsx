import React from "react";

export default function ShinyHunt(props: {
    name: string,
    srs: string,
    ongoing?: boolean
}) {
    return (
        <div className="shinyhunt">
            <h3>{props.name}</h3><p>{" - " + props.srs + " encounters" + (props.ongoing ? " (ongoing)" : "")}</p>
        </div>
    )
}