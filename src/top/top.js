import React from "react";
import App from './app';

export default function TopAppsBar() {
    // fetch from server
    let topApps = [{name: 'app1', description: 'the best'}, {name: 'app2'}, {name: 'app3'}, {name: 'app4'}, {name: 'app5'}];

    return (
        <div style={{backgroundColor: 'purple'}}>
            <h2>top bar</h2>
            {topApps.map(a => <App key={a.name} app={a}/>)}
        </div>
    );
}
