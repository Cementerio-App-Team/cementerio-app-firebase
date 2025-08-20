import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();

  const Item = ({ to, label }: { to: string; label: string }) => (
    <li>
      <Link to={to} className={`chip ${pathname === to ? "chip-active" : ""}`}>
        {label}
      </Link>
    </li>
  );

  return (
    <header className="header">
      <nav className="container">
        <ul className="nav-list">
          <Item to="/" label="Home" />
          <Item to="/login" label="Login" />
          <Item to="/register" label="Registro" />
          <Item to="/panel" label="Panel" />
        </ul>
      </nav>
    </header>
  );
}
