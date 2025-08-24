import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CementerioApp. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
