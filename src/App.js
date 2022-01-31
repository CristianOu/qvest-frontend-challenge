import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ActivityPage from './pages/activity/ActivityPage';
import Header from './components/Header/Header';

function App() {


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
        
        
    //   </header>
      
    // </div>
    // <div>
    //   <Card/>
    // </div>
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<ActivityPage />}/>          
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
