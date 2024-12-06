import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Root.css";

export default function Root() {
  const [navActive, setNavActive] = useState(false);
  const [userScrollY, setUserScrollY] = useState(window.scrollY);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 768) setNavActive(false);
  }, [windowWidth]);

  window.addEventListener("scroll", (e) => {
    setUserScrollY(window.scrollY);
  });

  useEffect(() => {
    const header = document.getElementById("header");
    const nav = document.getElementById("mobile-nav");
    if (userScrollY > 0) {
      header.style.boxShadow = "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px";
      header.style.height = "75px";
    } else {
      header.style.boxShadow = null;
      header.style.height = null;
    }
  }, [userScrollY]);

  useEffect(() => {
    const root = document.getElementById("root-container");
    const nav = document.getElementById("mobile-nav");
    const header = document.getElementById("header");
    const burger = document.getElementById("toggle");
    if (navActive) {
      root.style.transform = "translateX(-65vw)";
      header.style.transform = "translateX(-65vw)";
      nav.style.right = "0";
      burger.checked = true;
    } else {
      root.style.transform = null;
      header.style.transform = null;
      nav.style.right = "-65vw";
      burger.checked = false;
    }
  }, [navActive]);

  return (
    <>
      <div
        onClick={() => {
          if (navActive) {
            setNavActive(false);
          }
        }}
        id="root-container"
        className="root-container"
      >
        <Outlet />
        <Footer />
      </div>
      <div className="nav-container">
        <NavBar navActive={navActive} setNavActive={setNavActive} />
      </div>
      <nav id="mobile-nav" className="mobile-nav">
        <ul className="nav-ul">
          <li>
            <a
              onClick={() => {
                setNavActive(false);
              }}
              href="#home-section"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setNavActive(false);
              }}
              href="#about-section"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setNavActive(false);
              }}
              href="#contact-form"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
