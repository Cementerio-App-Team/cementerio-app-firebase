import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f3f4f6', display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Registro</Link>
      <Link to="/panel">Panel</Link>
    </nav>
  );
};

export default Navbar;
