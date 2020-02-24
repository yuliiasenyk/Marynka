import React from 'react';
import './App.css';
import Header from './header/header'
import TopAppsBar from './top/top'
import MainPart from './main/main'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TopAppsBar></TopAppsBar>
      <MainPart></MainPart>
    </div>
  );
}

export default App;
