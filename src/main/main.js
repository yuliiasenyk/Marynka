import React from "react";
import AppInList from "./lists/app-in-list";

 class MainPart extends React.Component {
     constructor(props) {
         super(props);
         this.state = {list: []};
         this.categories = ['Important', 'bla-bla', 'Games'];
         this.getAppsFromServer = this.getAppsFromServer.bind(this);
     }

     getAppsFromServer(category) {
        let imp = [{name: 'imp', description: 'important'}, {name: 'YYY', description: 'app'}, {name: 'III'}, {name: 'XX'}, {name: 'Game'}];
        let bla = [{name: 'bla', description: 'app'},  {name: 'bla bla bla'}, {name: 'blaaaaaaa'}];
        let games = [{name: 'game 1'}, {name: 'game 2', description: 'app'}];
        let categoryList = category === 'Important' ? imp : category === 'bla-bla' ? bla : category === 'Games' ?  games : [];
        this.setState({list: categoryList});
    }

     render() {
         return (
             <div style={{backgroundColor: "pink"}}>
                 <div style={{display: "flex", justifyContent: 'space-between'}}>

                     <div style={{backgroundColor: 'lightgreen', width: '20%'}}>
                         <h3>Categories</h3>
                         {this.categories.map(i =>
                             <div key={i}
                                  style={{backgroundColor: 'orange', margin: '5px'}}
                                  onClick={() => this.getAppsFromServer(i)}> {i}
                             </div>)}
                     </div>


                     <div
                         style={{backgroundColor: 'lightblue', width: '80%', display: "flex", flexDirection: 'column'}}>
                         {this.state.list.map(a => <AppInList key={a.name} app={a}/>)}
                     </div>

                 </div>
             </div>
         );
     }
}

export default MainPart;
