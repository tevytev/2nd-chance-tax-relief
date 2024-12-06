import "./OurServices.css";

export default function OurServices() {
  return (
    <section className="our-services-section">
      <div className="our-services-container">
        <div className="our-services-container-left">
          <div className="about-tag">
            <h4>OUR SERVICES</h4>
          </div>
          <div className="about-landing-header-container">
            <h2>Welcome to 2nd Chance Tax Relief</h2>
            <p>
              At 2nd Chance Tax Relief, we believe in second chances. We’re here
              to help individuals, companies, and HIGH-VALUE -NET WORTH
              INDIVIDUALS(HVNIs) navigate complex tax issues. With over 15 years
              of experience and a diverse team of tax specialists, including
              Spanish-speaking representatives, we’re committed to providing
              comprehensive tax relief solutions. <br />
              <br />
              No matter the size of your tax problem, we’re here to help.
            </p>
            <h2>We offer a wide range of tax relief services, including:</h2>
          </div>
        </div>
        <div className="our-services-container-right">
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <h3>Installment agreements</h3>
            </div>
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <h3>Offers in compromise</h3>
            </div>
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <h3>Penalty abatement</h3>
            </div>
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <h3>Innocent spouse relief</h3>
            </div>
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <h3>Tax audits</h3>
            </div>
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <h3>Tax liens and levies</h3>
            </div>
        </div>
      </div>
    </section>
  );
}
