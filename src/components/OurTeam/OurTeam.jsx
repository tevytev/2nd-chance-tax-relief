import "./OurTeam.css";
import teamImg from "../../assets/tax-resolution-team-agreement.jpg";
import teamImg2 from "../../assets/tax-resolution-team.jpg";

export default function OurTeam() {
  return (
    <section className="our-team-section">
      <div className="our-team-header-container">
        <h2 className="our-team-header">
          Tax Resolution Professionals You Can Count On
        </h2>
      </div>
      <img className="team-img-2" src={teamImg2} alt="" />
      <div className="about-culture-container">
        {/* <div className="culture-img"></div> */}
        <img src={teamImg} className="team-img" alt="" />
        <div className="about-culture-text-container">
          <div className="culture-tag">
            <h4>OUR TEAM</h4>
          </div>
          <h5>
            {/* We will help fight for your <span className="emph">forgiveness</span>. */}
            Our team of tax specialists is dedicated to helping you find the
            best possible solution for your unique tax situation. We have a
            proven track record of success, and we're confident that we can help
            you get back on track.
          </h5>
          <p>
            <span
              style={{
                fontWeight: 600,
              }}
            >
              Our team includes:
            </span>{" "}
            <br />
            <br />
            <span style={{ fontWeight: 600 }}>Attorneys</span>: Legal experts
            who can represent you in court and negotiate with the IRS. <br />
            <br />
            <span style={{ fontWeight: 600 }}>Enrolled Agents</span>: Federally
            authorized tax practitioners who can represent taxpayers before the
            IRS.
            <br />
            <br />
            <span style={{ fontWeight: 600 }}>Paralegals</span>: Legal
            professionals who assist attorneys in various legal tasks.
            <br />
            <br />
            <span style={{ fontWeight: 600 }}>Administrative Staff</span>:
            Dedicated support staff who handle paperwork, communication, and
            other administrative duties.
            <br />
            <br />
            By combining these specialized roles, we ensure that your tax case
            is handled efficiently and effectively.
            <br />
            <br />
          </p>
          <a href="#contact-form" className="culture-btn">CONTACT US</a>
        </div>
      </div>
    </section>
  );
}
