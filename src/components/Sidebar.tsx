import { FaBars, FaHome, FaUser, FaCog } from 'react-icons/fa';
import NavItem from './NavItem';

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <>
      {/* Ícone fixo para abrir/fechar o menu */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 text-xl ${
          isOpen ? 'text-red-500' : 'text-blue-500'
        }`}
      >
        {isOpen ? <FaBars /> : <FaBars />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-light p-3 shadow-lg duration-500 w-64 z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="nav flex-col lg:flex lg:space-y-8 mt-10">
          <NavItem
            to="/"
            icon={<FaHome className="mr-2" />}
            label="Dashboard"
          />
          <NavItem
            to="/profile"
            icon={<FaUser className="mr-2" />}
            label="Profile"
          />
          <NavItem
            to="/settings"
            icon={<FaCog className="mr-2" />}
            label="Settings"
          />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
