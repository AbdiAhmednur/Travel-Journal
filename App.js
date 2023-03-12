import React from 'react';
import './App.css';
import Header from "./Header";
import data from './data';
import Card from './Props';

function App() {
  const cards = data.map(item => (
    <Card key={item.id} id={item.id} item={item} />
  ));

  return (
    <div>
      <Header />
      < br/>
      {cards}
    </div>
  );
}

export default App;
