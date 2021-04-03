import './App.css';
import React, { useState } from 'react';

// hook method
// function App() {
//   const [selectedTab, setSelectedTab] = useState(0);
//   return (
//     <div className="App">
//       <ul className="menu-bar">
//         <li className={selectedTab === 0 ? "selected" : ""} onClick={() => setSelectedTab(0)}>all</li>
//         <li className={selectedTab === 1 ? "selected" : ""} onClick={() => setSelectedTab(1)}>images</li>
//         <li className={selectedTab === 2 ? "selected" : ""} onClick={() => setSelectedTab(2)}>videos</li>
//       </ul>
//     </div>
//   );
// }

export default class App extends React.Component {
  
  state = {
    selectedTab: 0
  }

  render(){
    return(
      <div className="App">
        <ul className="menu-bar">
          <li className={this.state.selectedTab === 0 ? "selected" : ""} onClick={() => this.setState({selectedTab: 0})}>all</li>
          <li className={this.state.selectedTab === 1 ? "selected" : ""} onClick={() => this.setState({selectedTab: 1})}>images</li>
          <li className={this.state.selectedTab === 2 ? "selected" : ""} onClick={() => this.setState({selectedTab: 2})}>videos</li>
        </ul>
      </div>
    )
  }
}




