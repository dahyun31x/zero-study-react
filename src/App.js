import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="App">
      <ul className="menu-bar">
        <li className={selectedTab === 0 ? "selected" : ""} onClick={() => setSelectedTab(0)}>all</li>
        <li className={selectedTab === 1 ? "selected" : ""} onClick={() => setSelectedTab(1)}>images</li>
        <li className={selectedTab === 2 ? "selected" : ""} onClick={() => setSelectedTab(2)}>videos</li>
      </ul>
    </div>

  );
}

export default App;
