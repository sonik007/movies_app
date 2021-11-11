import React from 'react';
// import Potato from './potato';

function Potato({like}){
  // console.log(props.like);
  return(    
    <h3>i linke {like}</h3>
  );
}


function App() {
  return (
    <div className="App">
      hello!!ttt
      <Potato like="potato"/>
      <Potato like="kimchi" />
    </div>
  );
}

export default App;
