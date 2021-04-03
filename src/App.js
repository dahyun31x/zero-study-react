import './App.css';
import React, { useState } from 'react';

// hook method
export default function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      <div className="App">
        <ul className="menu-bar">
          <li className={selectedTab === 0 ? "selected" : ""} onClick={() => setSelectedTab(0)}>all</li>
          <li className={selectedTab === 1 ? "selected" : ""} onClick={() => setSelectedTab(1)}>images</li>
          <li className={selectedTab === 2 ? "selected" : ""} onClick={() => setSelectedTab(2)}>videos</li>
        </ul>
      </div>
      <div></div>

      {
        selectedTab === 0 ? 
          <div className="first">
            <h1>all</h1>

          </div>
        : selectedTab === 1 ? 
          <div className="second"> {/* 가로로 flex 꽉차게 배치 */}
            <h1>images</h1>
            <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div> 
        : 
        <div className="third">
          <h1>videos</h1>
          <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
          </div>
        </div>

      }
    </>
  );
}

// export default class App extends React.Component {
  
//   constructor(props) {
//     super(props)
//     this.state = { selectedTab: 0 }
//   }

//   render(){
//     return(
//       <>
//         <div className="App">
//           <ul className="menu-bar">
//             <li className={this.state.selectedTab === 0 ? "selected" : ""} onClick={() => this.setState({selectedTab: 0})}>all</li>
//             <li className={this.state.selectedTab === 1 ? "selected" : ""} onClick={() => this.setState({selectedTab: 1})}>images</li>
//             <li className={this.state.selectedTab === 2 ? "selected" : ""} onClick={() => this.setState({selectedTab: 2})}>videos</li>
//           </ul>
//         </div>

//             </>
//     )
//   }
// }




