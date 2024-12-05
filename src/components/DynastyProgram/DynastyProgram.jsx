import "./DynastyProgram.css";
import img from "../../assets/img8.jpg";

export default function DynastyProgram() {
  return (
    <>
      <div className="dynasty-container">
        <h4 className="dynasty-header">Protect What Matters Most</h4>
        {/* <i id="dynasty-bg-accent" class="fa-solid fa-file-contract"></i> */}
        <div className="dynasty-img-container">
          <img src={img} alt="" />
        </div>

        <div className="dynasty-text-container">
          <h4>Dynasty Programs</h4>
          <p>
            We also specialize in dynasty programs, which are designed to help
            you protect your wealth and pass it on to your heirs. Our dynasty
            programs can help you minimize your tax liability and ensure that
            your loved ones inherit as much of your estate as possible.
          </p>
          <a href="#contact-form">START NOW</a>
          {/* <i id="dynasty-bg-accent" class="fa-solid fa-file-signature"></i> */}
          {/* <i id="dynasty-bg-accent" class="fa-solid fa-people-roof"></i> */}
        </div>
        <div className="border-accent"></div>
      </div>
    </>
  );
}
