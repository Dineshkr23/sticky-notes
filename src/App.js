import React from 'react';
import './App.css';
import Header from "./components/Header";
import HeroPane from "./components/HeroPane";
function App() {
  return (
    <div className="app">
     <Header/>
     <HeroPane />
    </div>
  );
}

export default App;
