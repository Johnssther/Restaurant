const Header = (props) => {
  const { balance } = props;
  return (
    <nav className="nav">
      <p>John Alejandro Hernandez R</p>
      <p className="balance">{new Intl.NumberFormat().format(balance)}</p>
    </nav>
  );
};

export default Header;
