import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = (props) => {
  const { balance } = props;
  return (
    <nav className="nav">
      <p>John Alejandro Hernandez R</p>
      <p className="balance">$ {new Intl.NumberFormat().format(balance)}</p>
      <i class="bi bi-cart-fill">
        <span>11</span>
      </i>
      <Link to="/" style={{color:'white', textDecoration:'none'}}>Home</Link>
      <Link to="/products" style={{color:'white', textDecoration:'none'}}>Productos</Link>
    </nav>
  );
};

export default Header;
