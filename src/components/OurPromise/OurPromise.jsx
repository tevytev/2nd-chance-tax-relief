import "./OurPromise.css";
import img from "../../assets/2nd-chance-client-agreement.jpg";

export default function OurPromise() {
  return (
    <>
      <div className="our-promise-container">
        <h2>Expert Tax Solutions with Transparent Pricing</h2>
        <img src={img} alt="" />
          <div className="our-promise-text-container-top">
            <div className="our-promise-text-header">
              <div className="promise-icon-container">
                <i class="fa-solid fa-handshake fa-2xl"></i>
              </div>
              <h3>Our Promise</h3>
            </div>
            <p id="promise-subheader">
              Here’s a combined promise incorporating the best of both worlds:
            </p>
            <p>
              "Your peace of mind is our priority. We promise to provide
              personalized, expert tax relief tailored to your unique needs,
              guiding you through every step of the process. Whether it’s a
              simple tax return or a complex tax dispute, we’ll fight for you to
              achieve the best possible outcome. With our team of experienced
              professionals, you’ll get a second chance and a stress-free tax
              resolution."
            </p>
          </div>
          <div className="our-promise-text-container-bottom">
            <div className="our-promise-text-header">
              <div className="promise-icon-container">
              <i class="fa-solid fa-money-check-dollar fa-2xl"></i>
              </div>
              <h3>Transparency in Pricing</h3>
            </div>
            <p id="promise-subheader">
              At 2nd Chance Tax Relief, we believe in complete transparency.
              We'll provide you with a clear, upfront breakdown of all fees
              associated with your tax resolution. No hidden costs, no
              surprises.
            </p>
            <p>
              Our goal is to build long-term relationships with our clients,
              based on trust and honesty. By understanding your financial
              situation and providing transparent pricing, we aim to alleviate
              the stress and uncertainty often associated with tax problems.
            </p>
          </div>
      </div>
    </>
  );
}
