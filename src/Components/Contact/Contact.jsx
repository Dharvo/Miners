import React, { useState } from "react";
import Footer from "./Footer";
import Background from "../Background";
import Pic from "../../Images/Contact_Track.jpg";
import LithiumBg from "../Home/LithiumBg";
import Form from "./Form";
import Highlight from "./Highlight";
import Faqs from "./Faqs";
import Privacy from "./Privacy";
import Terms from "./Terms";

const Contact = () => {
  const [showFaqs, setShowFaqs] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const Props = {
    showFaqs: showFaqs,
    showPrivacy: showPrivacy,
    showTerms: showTerms,
    setShowFaqs: setShowFaqs,
    setShowPrivacy: setShowPrivacy,
    setShowTerms: setShowTerms,
  };
  return (
    <>
      <section id="Contact">
        {/* <Background img={Pic} /> */}
        {/* <div
                className='fakeSpace'
                style={{ backgroundColor: '#fffd', height: 100 }}></div> */}
        <LithiumBg
          img={Pic}
          color={"#eee6"}
          color2={"#fffd"}
          color3={"#fefefedd"}
        />
        <div className="container">
          <Form />
          <div className="footer">
            {/* <Highlight /> */}
            <Footer props={Props} />
          </div>
        </div>
      </section>
      <div className="portal">
        <Faqs showFaqs={showFaqs} setShowFaqs={setShowFaqs} />
        <Privacy showPrivacy={showPrivacy} setShowPrivacy={setShowPrivacy} />
        <Terms showTerms={showTerms} setShowTerms={setShowTerms} />
      </div>
    </>
  );
};

export default Contact;
