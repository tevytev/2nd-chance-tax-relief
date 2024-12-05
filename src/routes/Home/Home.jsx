import "./Home.css";

import IconItem from "../../components/IconItem/IconItem";
import Contact from "../../components/Contact/Contact";
import OurServices from "../../components/OurServices/OurServices";
import OurTeam from "../../components/OurTeam/OurTeam";
import DynastyProgram from "../../components/DynastyProgram/DynastyProgram";
import WhatSetsUsApart from "../../components/WhatSetsUsApart/WhatSetsUsApart";
import OurPromise from "../../components/OurPromise/OurPromise";
import hero from "../../assets/hero2.jpg";
import teamImg from "../../assets/img4.jpg"

export default function Home() {
  return (
    <main id="home-section" className="landing">
      <section className="hero-section">
        <div className="hero-text-container fade-in-left">
          <div className="hero-text-inner-container">
            <span className="hero-accent"></span>
            <p>Let us help you!</p>
            <h1>
              The IRS Is Not On <br />
              Your Side. <span className="emph">But We Are</span>.
            </h1>
            <h2>
              We advocate for taxpayers and companies <br className="head-br" />
              in distress dealing with the IRS or the state.
            </h2>
          </div>
          <a className="hero-contact" href="#contact-form">
            GET STARTED
          </a>
        </div>
        <div className="hero-img-container slide-left">
          <img src={hero} alt="" />
        </div>
      </section>
      <section id="about-section" className="landing-about-section">
        <OurServices />
        <OurTeam />
        <DynastyProgram />
        <WhatSetsUsApart />
        <OurPromise />
       

        <div className="testimonial-section">
          <div className="testimonial-top">
            <h3>Don't just take our word for it.</h3>
          </div>
          <div className="testimonial-bottom">
            <div className="testimonial-container">
              <div>
                <i class="fa-solid fa-quote-left fa-2xl"></i>
              </div>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate temporibus laborum sapiente accusamus vitae esse
                quasi quibusdam consequatur eveniet quidem soluta in, doloremque
                asperiores maxime. Laborum necessitatibus iste quam asperiores?
              </p>
              <small>John Doe, Client</small>
            </div>
            <div className="testimonial-container">
              <div>
                <i class="fa-solid fa-quote-left fa-2xl"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate temporibus laborum sapiente accusamus vitae esse
                quasi quibusdam consequatur eveniet quidem soluta in, doloremque
                asperiores maxime. Laborum necessitatibus iste quam asperiores?
              </p>
              <small>Jane Doe, Client</small>
            </div>
            <div className="testimonial-container">
              <div>
                <i class="fa-solid fa-quote-left fa-2xl"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate temporibus laborum sapiente accusamus vitae esse
                quasi quibusdam consequatur eveniet quidem soluta in, doloremque
                asperiores maxime. Laborum necessitatibus iste quam asperiores?
              </p>
              <small>John Doe, Client</small>
            </div>
          </div>
        </div>
      </section>
      <Contact></Contact>
    </main>
  );
}
