import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => (
  <li className="nav-item text-md hover:text-xl hover:font-bold hover:text-blue-700 transition-all">
    <Link
      to={to}
      className="flex items-center no-underline"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {icon}
      {label}
    </Link>
  </li>
);

export default NavItem;
