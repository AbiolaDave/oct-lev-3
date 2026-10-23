import "./navbar.css";
import myPersonalStyle from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logo = {
    color: "green",
    display: "flex",
  };
  const internal = {
    width: "80px",
    height: "40px",
    backgroundColor: "white",
    color: "blue",
    border: "1px solid blue",
    borderRadius: "12px",
  };

  return (
    <>
      <div
        className={`nav ${myPersonalStyle.navbar}`}
        style={{ color: "blue" }}
      >
        <div style={logo}>
          <img
            src="https://img.magnific.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
            alt=""
            width={40}
            height={40}
          />
          <h3>SQI</h3>
        </div>
        <div
          className={`${myPersonalStyle.links} ${myPersonalStyle.sqi} ${myPersonalStyle.abc}`}
        >
          <Link className={`${myPersonalStyle.xyz}`} to="/about">
            <h3>About</h3>
          </Link>
          <Link className={`${myPersonalStyle.xyz}`} to="/contact">
            <h3>Contact</h3>
          </Link>
          <Link className={`${myPersonalStyle.xyz}`} to="/service">
            <h3>Service</h3>
          </Link>
        </div>
        <div className={`${myPersonalStyle.btn}`}>
          <button style={internal}>Sign Up</button>
          <button className={`${myPersonalStyle.login}`}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
