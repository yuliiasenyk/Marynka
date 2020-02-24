import React from "react";

export default function CategoryItem(props) {

    function getAppsFromServer(category) {
        let imp = [{name: 'imp', description: 'importsnt'}, {name: 'YYY', description: 'app'}, {name: 'III'}, {name: 'XX'}, {name: 'Game'}];
        let bla = [{name: 'bla', description: 'app'},  {name: 'bla bla bla'}];
        let games = [{name: 'game 1'}, {name: 'game 2', description: 'app'}];
        console.log(category);
        return category === 'Important' ? imp : category === 'bla-bla' ? bla : category === 'Games' ?  games : []
    }

    return (
        <div style={{backgroundColor: 'orange', margin: '5px'}} onClick={() => getAppsFromServer(props.category)}>
            {props.category}
        </div>
    );
}
