const Header = (props) => {
  const { balance } = props;
  return (
    <nav className="nav slidein">
      <p>John Alejandro Hernandez R</p>
      <p className="balance">$ {new Intl.NumberFormat().format(balance)}</p>
      <i class="bi bi-cart-fill">
        <span>11</span>
      </i>
    </nav>
  );
};

export default Header;
