import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Screens */
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

/* Components */
import Sidebar from './components/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex flex-col lg:flex-row">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main
          className={`flex-grow px-10 py-0 duration-500 bg-gray-100 h-screen
            ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
