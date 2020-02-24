import React from "react";

export default function App(props) {
    return (
        <div style={{display: "inline-block", backgroundColor: 'green', margin: '10px', width: '100px'}}>
            <h3>{props.app.name}</h3>
            <p>{props.app.description || 'description'}</p>
        </div>
    );
}
