import "./DynastyProgram.css";
import img from "../../assets/dynasty-program-client.jpg";

export default function DynastyProgram() {
  return (
    <>
      <div className="dynasty-container">
        <h2 className="dynasty-header">Protect What Matters Most</h2>
        <div className="dynasty-img-container">
          <img src={img} alt="elderly man playing cards with his middle aged daughter." />
        </div>

        <div className="dynasty-text-container">
          <h3>Dynasty Programs</h3>
          <p>
            We also specialize in dynasty programs, which are designed to help
            you protect your wealth and pass it on to your heirs. Our dynasty
            programs can help you minimize your tax liability and ensure that
            your loved ones inherit as much of your estate as possible.
          </p>
          <a href="#contact-form">START NOW</a>
        </div>
        <div className="border-accent"></div>
      </div>
    </>
  );
}
