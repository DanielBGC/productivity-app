import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Screens */
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

/* Components */
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
