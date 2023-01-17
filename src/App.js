import React, { useState } from 'react';

function App() {

  const [togle, setTogle] = useState(false);

  return (
    <div className="App">
      <h1>click to togle:</h1> 
      <div className='wrapperTogle'>
        <div onClick={() => setTogle(!togle)} className='togle'>
          <div className={togle ? 'turnOn' : 'turnOff'}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
