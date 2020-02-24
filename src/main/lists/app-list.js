import React from "react";
import App from "../../shared/app/app";

export default function List() {
    function getAppsFromServer(category) {
        return [{name: 'X', description: 'app'}, {name: 'YYY', description: 'app'}, {name: 'III'}, {name: 'XX'}, {name: 'Game'}]
    }

    return (
        <div style={{backgroundColor: 'lightblue', width: '80%'}}>
            {getAppsFromServer('bla-bla').map(a => <App key={a.name} app={a}/>)}
        </div>
    );
}
