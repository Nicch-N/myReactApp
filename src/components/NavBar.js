import {Link} from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar ">
      <Link to={"/"} className="link-dark nav-item mx-3" >Home</Link>
      <Link to={"TicTacToe"} className="link-dark nav-item mx-3" >TicTacToe</Link>
    </nav>
  );
}

export default NavBar;
