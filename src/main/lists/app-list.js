import React from "react";
import AppInList from "./app-in-list";

export default function List() {

    return (
        <div style={{backgroundColor: 'lightblue', width: '80%', display: "flex", flexDirection: 'column'}}>
            {[].map(a => <AppInList key={a.name} app={a}/>)}
        </div>
    );
}
