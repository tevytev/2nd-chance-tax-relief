import "./Footer.css";
import logo from "../../assets/2.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top-container">
          <h6>
            Get started now <br />
            with <span className="emph">2nd Chance Tax Relief</span>
          </h6>
          <img src={logo} alt="" />
        </div>
        <div className="footer-socials-container">
          <div className="social-container">
            <i class="fa-solid fa-envelope fa-2xl"></i>
            <a href="mailto:info@2ndchancetaxrelief.com">INFO@2NDCHANCETAXRELIEF.COM</a>
          </div>
          <div className="social-container">
            <i class="fa-brands fa-square-facebook fa-2xl"></i>
            <a href="">2ND CHANCE TAX RELIEF</a>
          </div>
          <div className="social-container">
            <i class="fa-brands fa-square-instagram fa-2xl"></i>
            <a href="">2NDCHANCETAXRELIEF</a>
          </div>
        </div>
        <div className="footer-bottom-container">
          <p>
            ©2nd Chance Tax Relief 2024 | Designed By Tevin Cheatham | All
            Rights Reserved. | Everyone deserves a 2nd Chance
          </p>
        </div>
      </div>
    </>
  );
}
