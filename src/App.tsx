import React from 'react';
import Shop from './components/Shop';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to the E-commerce POC</h1>
      <Shop id="1" />
    </div>
  );
};

export default App;
