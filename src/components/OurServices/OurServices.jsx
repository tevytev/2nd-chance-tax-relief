import "./OurServices.css";

export default function OurServices() {
  return (
    <section className="our-services-section">
      <div className="our-services-container">
        <div className="our-services-container-left">
          <div className="about-tag">
            <h3>OUR SERVICES</h3>
          </div>
          <div className="about-landing-header-container">
            <h4>Welcome to 2nd Chance Tax Relief</h4>
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
            <h4>We offer a wide range of tax relief services, including:</h4>
          </div>
        </div>
        <div className="our-services-container-right">
          <div className="col-1">
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <p>Installment agreements</p>
            </div>
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <p>Offers in compromise</p>
            </div>
          </div>
          <div className="col-2">
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <p>Penalty abatement</p>
            </div>
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <p>Innocent spouse relief</p>
            </div>
          </div>
          <div className="col-3">
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <p>Tax audits</p>
            </div>
            <div className="service-card-container">
              <i class="fa-regular fa-square-check fa-xl"></i>
              <p>Tax liens and levies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
