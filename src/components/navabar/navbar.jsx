import './navbar.css'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="navbar">

      <ul className="nav-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Menu</li>
      </ul>
      <div className="nav-right">
      <FaSearch style={{ marginRight: "10px", cursor: "pointer" }} />
      <FaShoppingCart style={{ marginRight: "10px", cursor: "pointer" }} />
         <button>Sign in</button>      </div>
    </div>
  )
}

export default Navbar