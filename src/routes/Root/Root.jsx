import NavBar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"
import  './Root.css'

export default function Root() {
    return (
        <>
        <div className="root-container">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
        </>
    )
}