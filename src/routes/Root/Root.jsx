import NavBar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import  './Root.css'

export default function Root() {

    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        const root = document.getElementById("root-container");
        const nav = document.getElementById("mobile-nav");

        if (navActive) {
            root.style.transform = "translateX(-65vw)"
            nav.style.right = "0"
        } else {
            root.style.transform = "translateX(0)"
            nav.style.right = "-65vw"
        }
    }, [navActive])

    return (
        <>
        <div onClick={() => {
            if (navActive) {
                setNavActive(false);
            }
        }} id="root-container" className="root-container">
            <NavBar navActive={navActive} setNavActive={setNavActive} />
            <Outlet />
            <Footer />
        </div>
        <nav id="mobile-nav" className="mobile-nav">
          <ul className="nav-ul">
            <li>
              <a onClick={() => {setNavActive(false)}} href="#home-section">Home</a>
            </li>
            <li>
              <a onClick={() => {setNavActive(false)}} href="#about-section">About</a>
            </li>
            <li>
              <a onClick={() => {setNavActive(false)}} href="#contact-form">Contact</a>
            </li>
          </ul>
        </nav>
        </>
    )
}