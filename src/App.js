import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserTasksPage from './pages/UserTasksPage';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/user-tasks" element={<UserTasksPage />} /> */}
          {/* Add other routes as you implement the remaining pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
