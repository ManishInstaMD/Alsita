import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      <div
        className=" text-white text-center py-5"
        style={{
          backgroundImage: "url('/images/about-empanorm.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="display-5 fw-bold">{t("about.para")}</h1>
        <img
          src="/images/logo5.png"
          alt="logo5"
          className="img-fluid mt-3"
          style={{ maxHeight: "80px" }}
        />
      </div>
      <div className="container my-5">
        {/* Banner Section */}
        {/* Card Content */}
        <div className="card shadow-lg p-4 mb-5">
          <div className="card-body">
            <h2 className="card-title text-center mb-4 text-primary">
              {t("about.title")}
            </h2>

            <div className="mb-4">
              <h5>{t("about.q1")}</h5>
              <p>{t("about.ans1")}</p>
            </div>

            <div className="mb-4">
              <h5>{t("about.q2")}</h5>
              <p>{t("about.ans2")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q3")}</h5>
              <p>{t("about.ans3")}</p>
              <ul>
                <li>{t("about.l1")}</li>
                <li>{t("about.l2")}</li>
                <li>{t("about.l3")}</li>
                <li>{t("about.l4")}</li>
                <li>{t("about.l5")}</li>
                <li>{t("about.l7")}</li>
                <li>
                  {t("about.l8")}
                  <ul>
                    <li>{t("about.l8.1")}</li>
                    <li>{t("about.l8.2")}</li>
                    <li>{t("about.l8.3")}</li>
                  </ul>
                </li>

                <li>{t("about.l9")}</li>
                <li>{t("about.l10")}</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5>{t("about.q4")}</h5>
              <li>{t("about.l11")}</li>
              <li>{t("about.l12")}</li>
              <li>{t("about.l13")}</li>
            </div>
            <div className="mb-4">
              <p>{t("about.ans4")}</p>
              <p>{t("about.ans4.1")}</p>
              <p>{t("about.ans4.2")}</p>
              <p>{t("about.ans4.3")}</p>
              <p>{t("about.ans4.4")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.ans4.5")}</h5>
              <p>{t("about.ans4.6")}</p>
            </div>

            <div className="mb-4">
              <h5>{t("about.q5")}</h5>
              <p>{t("about.ans5")}</p>
              <h5>{t("about.ans5.1")}</h5>
              <p>{t("about.ans5.2")}</p>

              <h5>{t("about.q6")}</h5>
              <li>-{t("about.ans6")}</li>
              <li>{t("about.l6")}</li>
              <li>{t("about.l6_1")}</li>
              <li>{t("about.l6_2")}</li>
              <li>{t("about.l6_3")}</li>
              <li>{t("about.l6_4")}</li>
              <li>{t("about.l6_5")}</li>
              <li>{t("about.l6_6")}</li>
              <li>{t("about.l6_7")}</li>
              <li>{t("about.l6_8")}</li>
              <li>{t("about.l6_9")}</li>
            </div>

            <div className="mb-4">
              <h5>{t("about.q7")}</h5>
              <li>{t("about.ans7")}</li>
              <li>{t("about.ans7_1")}</li>
              <li>{t("about.ans7_2")}</li>
              <li>{t("about.ans7_3")}</li>
            </div>

            <div className="mb-4">
              <h5>{t("about.q8")}</h5>
              <p>{t("about.ans8")}</p>
            </div>

            {/* Image */}
            <div className="text-center mb-4">
              <img
                src="/images/empanorm3.png"
                alt="empanorm1"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="mb-4">
              <h5>{t("about.q9")}</h5>
              <p>{t("about.ans9")}</p>
              <ul>
                <p>{t("about.9.1")}</p>
                <p>{t("about.9.2")}</p>
                <p>{t("about.9.3")}</p>
                <ul>
                  <li>{t("about.9.4")}</li>
                  <li>{t("about.9.5")}</li>
                  <li>{t("about.9.6")}</li>
                  <li>{t("about.9.7")}</li>
                  <li>{t("about.9.8")}</li>
                  <li>{t("about.9.9")}</li>
                  <li>{t("about.9.10")}</li>
                  <li>{t("about.9.11")}</li>
                  <li>{t("about.9.12")}</li>
                </ul>
              </ul>
            </div>

            <div className="mb-4">
              <h5>{t("about.q10")}</h5>
              <p>{t("about.ans10")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q11")}</h5>
              <p>{t("about.ans11")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q12")}</h5>
              <p>{t("about.ans12")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.ans13")}</h5>
              <p>{t("about.ans13")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q14")}</h5>
              <p>{t("about.ans14")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q15")}</h5>
              <ul>
                <li>{t("about.ans15")}</li>
                <li>{t("about.ans15.1")}</li>
                <li>{t("about.ans15.2")}</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5>{t("about.q16")}</h5>
              <p>{t("about.ans16")}</p>
              <ul>
                <li>{t("about.ans16.1")}</li>
                <li>{t("about.ans16.2")}</li>
                <li>{t("about.ans16.3")}</li>
                <li>{t("about.ans16.4")}</li>
              </ul>
              <p>{t("about.ans16.5")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q17")}</h5>
              <ul>
                <li>{t("about.ans17")}</li>
                <li>{t("about.ans17.1")}</li>
                <li>{t("about.ans17.2")}</li>
                <li>{t("about.ans17.3")}</li>
                <li>{t("about.ans17.4")}</li>
                <li>{t("about.ans17.5")}</li>
                <li>{t("about.ans17.6")}</li>
                <li>{t("about.ans17.7")}</li>
                <li>{t("about.ans17.8")}</li>
                <li>{t("about.ans17.9")}</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5>{t("about.q18")}</h5>
              <ul>
                <li>{t("about.ans18")}</li>
                <li>{t("about.ans18.1")}</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5>{t("about.q19")}</h5>
              <ul>
                <li>{t("about.ans19")}</li>
                <li>{t("about.ans19.1")}</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5>{t("about.q20")}</h5>
              <ul>
                <li>{t("about.ans20")}</li>
                <li>{t("about.ans20.1")}</li>
                <li>{t("about.ans20.2")}</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5>{t("about.q21")}</h5>
              <p>{t("about.ans21")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q22")}</h5>
              <p>{t("about.ans22")}</p>
            </div>

             <div className="mb-4">
              <h5>{t("about.q23")}</h5>
              <p>{t("about.ans23")}</p>
              <ul>
                <li>{t("about.l23.1")}</li>
                <li>{t("about.l23.2")}</li>
                <li>{t("about.l23.3")}</li>
                <li>{t("about.l23.4")}</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5>{t("about.q24")}</h5>
              <p>{t("about.ans24")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q25")}</h5>
              <p>{t("about.ans25")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q26")}</h5>
              <p>{t("about.ans26")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q27")}</h5>
              <p>{t("about.ans27")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q28")}</h5>
              <p>{t("about.ans28")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q29")}</h5>
              <p>{t("about.ans29")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q30")}</h5>
              <p>{t("about.ans30")}</p>
            </div>

            {/* Image */}
            <div className="text-center mb-4">
              <img
                src="/images/empanorm4.png"
                alt="empanorm2"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="mb-4">
              <h5>{t("about.reference")}</h5>
              <ul>
                <li>
                  <a
                    href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/204629s033lbl.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Prescribing information Empagliflozin. Available here
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ema.europa.eu/en/documents/product-information/Empagliflozin-epar-product-information_en.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Summary of Product characteristics. Available here
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dchft.nhs.uk/wp-content/uploads/2022/02/Sick-Day-Rules-for-people-with-Type-2-Diabetes.pdf Cited on 14 Oct 2024"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sick Day Rules for people with type 2 diabetes taking a SGLT-2 Inhibitor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
