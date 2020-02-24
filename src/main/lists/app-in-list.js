import React from "react";

export default function AppInList(props) {
    return (
        <div style={{display: "inline-block", backgroundColor: 'cyan', margin: '10px', width: '300px'}}>
            <h3>{props.app.name}</h3>
        </div>
    );
}
