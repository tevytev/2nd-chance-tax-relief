import "./WhatSetsUsApart.css";
import IconItem from "../IconItem/IconItem";
import img from "../../assets/img9.jpg";

export default function WhatSetsUsApart() {
  return (
    <>
      <div className="icon-about-container">
        {/* <i id="wsua-accent" class="fa-solid fa-globe fa-2xl"></i> */}
        <div className="icon-header-container">
          <h4>What Sets Us Apart</h4>
        </div>
        <div className="icon-bottom-container">
          <div className="icon-bottom-text-container">
            <h5>At 2nd Chance Tax Relief, we're different because:</h5>
            <ul>
                <li><p>We have over 15 years of experience helping people with tax problems.</p></li>
                <li><p>We have a team of tax specialists who are dedicated to helping you find the best possible solution for your unique tax situation.</p></li>
                <li><p>We offer a wide range of tax relief services.</p></li>
                <li><p>We specialize in dynasty programs to help you protect your wealth and pass it on to your heirs.</p></li>
                <li><p>We are committed to providing excellent customer service.</p></li>

            </ul>
          </div>
          <img src={img} alt="" />
        </div>
        <div className="icon-card-container">
          <IconItem
            title={"Diverse Expertise"}
            icon={<i class="fa-solid fa-user-tie fa-2xl"></i>}
            description={
              "Our team is composed of experienced professionals, including Spanish-speaking representatives, to cater to a diverse clientele."
            }
          ></IconItem>
          <IconItem
            title={"Comprehensive Solutions"}
            icon={<i class="fa-brands fa-think-peaks fa-2xl"></i>}
            description={
              "We offer a wide range of tax relief services, from simple tax returns to complex tax disputes."
            }
          ></IconItem>
          <IconItem
            title={"Personalized Approach"}
            icon={<i class="fa-solid fa-fingerprint fa-2xl"></i>}
            description={
              "We tailor our services to your specific needs, ensuring a customized solution."
            }
          ></IconItem>
          <IconItem
            title={"Post-Resolution Support"}
            icon={<i class="fa-solid fa-headset fa-2xl"></i>}
            description={
              "Our maintenance program provides ongoing support for one year after resolution to minimize the risk of future tax issues."
            }
          ></IconItem>
        </div>
      </div>
    </>
  );
}
