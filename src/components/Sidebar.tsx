import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaUser, FaCog } from 'react-icons/fa'; // Importar ícones necessários

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
          <li className="nav-item text-md hover:text-xl hover:font-bold hover:text-blue-700 transition-all">
            <Link
              to="/"
              className="flex items-center no-underline"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaHome className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="nav-item text-md hover:text-xl hover:font-bold hover:text-blue-700 transition-all">
            <Link
              to="/profile"
              className="flex items-center no-underline"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaUser className="mr-2" />
              Profile
            </Link>
          </li>
          <li className="nav-item text-md hover:text-xl hover:font-bold hover:text-blue-700 transition-all">
            <Link
              to="/settings"
              className="flex items-center no-underline"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
