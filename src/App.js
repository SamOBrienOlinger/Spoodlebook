import logo from './logo.svg';
// import './App.css';
// import 'src/App.css';

import '/workspaces/Spoodlebook/src/App.css';

// import FunctionalGreeting from './components/FunctionalGreeting';

import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      <FunctionalGreetingWithProps greeting = "How's it going?" age = "40" address = "Saggart" dog = "Benji" wife = "Aline"/>
    </div>
  );
}

export default App;