import './App.css';
import { useState } from 'react';
import UserCard from './components/UserCard/UserCard';

function App() {

  const [ counter, setCounter ] = useState(0)
  
  return (
    <div className="App">
      <UserCard arrayCount = { counter } />
      <UserCard arrayCount = { counter + 1 } />
    </div>
  );
}

export default App;
