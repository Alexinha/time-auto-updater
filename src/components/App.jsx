import React from "react";

function App() {
  function time() {
    let time = new Date().toLocaleTimeString();
    return time;
  }

  //setState is a function in an Array
  const [state, setState] = React.useState(time);

  //update the state by using setState();
  function currentTime() {
    time();
    return setState(time);
  }

  // write the numbers first to avoid crash
  setInterval(currentTime, 1000);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
