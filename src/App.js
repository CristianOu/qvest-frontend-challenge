import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ActivityPage from './pages/activity/ActivityPage';

function App() {
  return (
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
