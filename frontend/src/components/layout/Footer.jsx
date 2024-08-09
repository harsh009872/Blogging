import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
          Welcome to The Daily Muse – a space where ideas come to life,
          stories unfold, and knowledge is shared. Our blog is a hub for curious
          minds, creative thinkers, and passionate learners. Whether you’re here
          for inspiration, insights, or just a moment of reflection, we’ve got
          something for everyone.
          </p>
          <p>
            <span>Email:</span> vardhansingh500@gmail.com
          </p>
          <p>
            <span>Phone:</span>7982025626
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">The Daily<span> Muse</span></div>
        <div className="links">
          <Link to={"/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://github.com/harsh009872"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.linkedin.com/in/harsh-vardhan-singh-95324a229/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
