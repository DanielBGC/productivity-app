import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light vh-100 p-3 shadow-lg">
      <h2 className="text-center mb-4">Menu</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link text-dark">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link text-dark">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link text-dark">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
