import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import Logo from "./logo.png";
import { FaFlagUsa, FaUserCircle, FaSearch, FaCartPlus } from "react-icons/fa";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="abc">
          <div className="logo">
            <img className="logo" src={Logo} alt="Logo123" />
          </div>
          <div className="search_bar">
            <input type="text" placeholder="What are you looking for?" />
            <div>
              <a href="#">
                <FaSearch />
              </a>
            </div>
          </div>
          <div className="headings">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
              
            </ul>
          </div>
          <div className="icons">
            <ul>
              <li>
                <a href="#">
                  <FaFlagUsa />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaCartPlus />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaUserCircle />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr></hr>

      <Outlet />
    </>
  );
};

export default Layout;
