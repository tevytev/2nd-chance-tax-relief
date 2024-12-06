import "./Home.css";

import IconItem from "../../components/IconItem/IconItem";
import Contact from "../../components/Contact/Contact";
import OurServices from "../../components/OurServices/OurServices";
import OurTeam from "../../components/OurTeam/OurTeam";
import DynastyProgram from "../../components/DynastyProgram/DynastyProgram";
import WhatSetsUsApart from "../../components/WhatSetsUsApart/WhatSetsUsApart";
import OurPromise from "../../components/OurPromise/OurPromise";
import hero from "../../assets/tax-resolution-agents.jpg";
import teamImg from "../../assets/img4.jpg";

export default function Home() {
  return (
    <main id="home-section" className="landing">
      <section className="hero-section">
        <div className="hero-text-container fade-in-left">
          <div className="hero-text-inner-container">
            <span className="hero-accent"></span>
            <p>Let us help you!</p>
            <h1>
              The IRS Is Not On <br className="head-br" />
              Your Side. <em className="emph">But We Are</em>.
            </h1>
            <h2>
              We assist taxpayers and businesses navigating <br className="head-br" />disputes with the IRS or state authorities.
              {/* We advocate for taxpayers and companies <br className="head-br" />
              in distress dealing with the IRS or the state. */}
            </h2>
          </div>
          <a className="hero-contact" href="#contact-form">
            GET STARTED
          </a>
        </div>
        <div className="hero-img-container slide-left">
          <img src={hero} alt="2nd Chance Tax Relief agents smiling." />
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
                "I cannot express enough how much 2nd Chance Tax Relief saved me
                during one of the most overwhelming times of my life. I had
                fallen behind on taxes for years, and the constant fear of
                garnishments and IRS threats was unbearable. After contacting
                2nd Chance, I felt a sense of relief I hadn’t experienced in
                years. From day one, their team was compassionate,
                understanding, and most importantly, professional. They didn’t
                just treat me like another client — they treated me like a
                person who deserved a second chance. They negotiated a
                manageable settlement with the IRS, and the stress that had
                consumed my life for so long was finally lifted. I honestly
                can’t thank them enough for giving me the fresh start I needed!"
              </p>
              <small>A Lifesaver in a Time of Crisis</small>
            </div>
            <div className="testimonial-container">
              <div>
                <i class="fa-solid fa-quote-left fa-2xl"></i>
              </div>
              <p>
                "After struggling for years with tax debt that kept spiraling
                out of control, I felt like I had nowhere to turn. That’s when I
                found 2nd Chance Tax Relief, and it was the best decision I ever
                made. From the very first phone call, I felt a sense of trust
                and hope I hadn’t felt in years. They took the time to
                understand my situation, explained every step of the process,
                and gave me the confidence I needed to face the IRS head-on.
                They worked tirelessly on my behalf and helped reduce my debt
                significantly. It’s rare to find a company that genuinely cares
                about its clients, but 2nd Chance went above and beyond. I’m
                forever grateful for their dedication and support."
              </p>
              <small>A Company That Truly Cares</small>
            </div>
            <div className="testimonial-container">
              <div>
                <i class="fa-solid fa-quote-left fa-2xl"></i>
              </div>
              <p>
                "I was drowning in tax debt, feeling hopeless, and had no idea
                how I was going to get out from under it. That’s when I reached
                out to 2nd Chance Tax Relief. What I received was far more than
                just a service — it was a lifeline. The team at 2nd Chance
                provided me with clear, honest guidance and helped me create a
                plan to tackle my debt. They were patient, answered all my
                questions, and gave me the peace of mind I had been desperately
                seeking. I’m now on the path to financial freedom, and it’s all
                thanks to them. If you’re struggling with tax debt, do yourself
                a favor and contact them — they gave me a new beginning."
              </p>
              <small>A New Beginning Thanks to 2nd Chance</small>
            </div>
          </div>
        </div>
      </section>
      <Contact></Contact>
    </main>
  );
}
