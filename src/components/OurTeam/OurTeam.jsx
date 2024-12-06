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
      <img className="team-img-2" src={teamImg2} alt="2nd Chance Tax Relief team standing in solidarity." />
      <div className="about-culture-container">
        <img src={teamImg} className="team-img" alt="2nd Chance Tax Relief agents having a business meeting." />
        <div className="about-culture-text-container">
          <div className="culture-tag">
            <h4>OUR TEAM</h4>
          </div>
          <h5>
            Our team of tax specialists is dedicated to helping you find the
            best possible solution for your unique tax situation. We have a
            proven track record of success, and we're confident that we can help
            you get back on track.
          </h5>
          <div className="team-list-container">
            <h6
              style={{
                fontWeight: 600,
              }}
            >
              Our team includes:
            </h6>
            <p><span style={{ fontWeight: 600 }}>Attorneys</span>: Legal experts
            who can represent you in court and negotiate with the IRS.</p>

            <p><span style={{ fontWeight: 600 }}>Enrolled Agents</span>: Federally
            authorized tax practitioners who can represent taxpayers before the
            IRS.</p>
            
            <p><span style={{ fontWeight: 600 }}>Paralegals</span>: Legal
            professionals who assist attorneys in various legal tasks.</p>
            
            <p><span style={{ fontWeight: 600 }}>Administrative Staff</span>:
            Dedicated support staff who handle paperwork, communication, and
            other administrative duties.</p>
            
            <p>By combining these specialized roles, we ensure that your tax case
            is handled efficiently and effectively.</p>
            
          </div>
          <a href="#contact-form" className="culture-btn">CONTACT US</a>
        </div>
      </div>
    </section>
  );
}
