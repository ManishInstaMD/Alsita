// components/Tabs/DiabetesTab.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const DiabetesTab = ({ active }) => {
  const { t } = useTranslation();
  if (!active) return null;

  return (
    <div id="tab-1" className="tab-content py-5">
      <div className="container p-4 shadow-sm rounded bg-light">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8">
            <h2 className="fw-bold text-primary mb-3">
              {t("diabetes.keyFacts.title")}
            </h2>
            <ul className="list-group list-group-flush border rounded shadow-sm">
              {t("diabetes.keyFacts.facts", { returnObjects: true }).map(
                (fact, index) => (
                  <li className="list-group-item" key={index}>
                    {fact}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <img
              src="src/assets/images/img1.png"
              alt="Diabetes facts"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container p-4 shadow-lg rounded bg-white ">
        <h2 className="text-black text-center mb-4 fw-bold">
          {t("diabetes.overview.title")}
        </h2>
        {t("diabetes.overview.paragraphs", { returnObjects: true }).map(
          (paragraph, index) => (
            <p key={index} className="text-muted">
              {paragraph}
            </p>
          )
        )}
        <br />
        <br />
      </div>

      {/* Symptoms Section */}
      <div className="container mt-5 p-4 bg-light rounded shadow-sm text-center">
        <h2 className="fw-bold text-primary">{t("diabetes.symptoms.title")}</h2>
        {t("diabetes.symptoms.paragraphs", { returnObjects: true }).map(
          (paragraph, index) => (
            <p key={index} className="text-muted">
              {paragraph}
            </p>
          )
        )}
        <br />
        <img
          src="src/assets/images/info1.png"
          alt="Diabetes Info"
          className="img-fluid d-block mx-auto rounded shadow"
        />
      </div>
      <br />

      {/* Types of Diabetes */}
      <div className="container mt-5 p-4 bg-white rounded shadow-lg">
        <h3 className="text-primary text-center mb-4">
          {t("diabetes.types.title")}
        </h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div
              className="border rounded p-4 shadow-sm border border-primary"
              style={{ background: "#F4F3FF" }}
            >
              <h4 className="fw-bold text-primary">
                {t("diabetes.types.type1.title")}
              </h4>
              <p>{t("diabetes.types.type1.description")}</p>
              <br />
              <br />
              <br />
              <img src="src/assets/images/diabetes.png" alt="Diabetes" />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="border rounded p-4 shadow-sm border border-primary"
              style={{ background: "#F4F3FF" }}
            >
              <h4 className="fw-bold text-primary">
                {t("diabetes.types.type2.title")}
              </h4>
              <p>{t("diabetes.types.type2.description")}</p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* Gestational Diabetes */}
      <div className="container mt-5 p-4 bg-light rounded shadow-sm">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 text-center">
            <img
              src="src/assets/images/img2.png"
              className="img-fluid rounded shadow"
              alt="Gestational Diabetes"
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <h2 className="fw-bold text-primary">
              {t("diabetes.gestational.title")}
            </h2>
            {t("diabetes.gestational.paragraphs", { returnObjects: true }).map(
              (paragraph, index) => (
                <p key={index} className="text-muted">
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </div>

      {/* Prevention Section */}
      <div className="container mt-5 p-4 bg-white rounded shadow-lg">
        <h3 className="text-center text-primary fw-bold">
          {t("diabetes.prevention.title")}
        </h3>
        <p className="text-muted text-center">
          {t("diabetes.prevention.description1")}
        </p>
        <p className="text-muted text-center">
          {t("diabetes.prevention.description2")}
        </p>
        <div className="row text-center g-4">
          {t("diabetes.prevention.tips", { returnObjects: true }).map(
            (tip, index) => (
              <div className="col-md-3" key={index}>
                <img
                  src={`src/assets/images/icon${index + 1}.png`}
                  className="img-fluid"
                />
                <p>{tip.title}</p>
              </div>
            )
          )}
        </div>
      </div>
      <div>
        <div id="tab-1" className="tab-content py-5">
          <div className="container p-4 shadow-sm rounded bg-light">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8 col-sm-12 col-12 my-auto">
                <div className="middle_row">
                  <h2 className="fw-bold text-primary mb-3 text-bold">
                    {t("diabetes.diagnosis.title")}
                  </h2>
                  <ul className="list-group list-group-flush border rounded shadow-sm p-3">
                    {t("diabetes.diagnosis.paragraphs", {
                      returnObjects: true,
                    }).map((paragraph, index) => (
                      <p key={index} className="text-muted">
                        {paragraph}
                      </p>
                    ))}
                    <ul className="inside_met list-unstyled ms-3">
                      {t("diabetes.diagnosis.medications", {
                        returnObjects: true,
                      }).map((paragraph, index) => (
                        <p key={index} className="text-muted">
                          {paragraph}
                        </p>
                      ))}
                    </ul>
                    <p className="list-group-item">
                      {t("diabetes.diagnosis.treat1")}
                    </p>
                    <p className="list-group-item fw-bold text-primary text-bold">
                      {t("diabetes.diagnosis.treat2")}
                    </p>
                  </ul>
                </div>
                <div className="row text-center mt-4">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="rs_text_set">
                      <img
                        src="src/assets/images/icon5.png"
                        className="img-fluid mb-2"
                        alt="Foot Care"
                      />
                      <p>{t("diabetes.diagnosis.care1")}</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="rs_text_set">
                      <img
                        src="src/assets/images/icon6.png"
                        className="img-fluid mb-2"
                        alt="Kidney Screening"
                      />
                      <p>{t("diabetes.diagnosis.care2")}</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="rs_text_set">
                      <img
                        src="src/assets/images/icon7.png"
                        className="img-fluid mb-2"
                        alt="Eye Exams"
                      />
                      <p>{t("diabetes.diagnosis.care3")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
                <div className="rs_round_set border rounded shadow-sm p-2">
                  <img
                    src="src/assets/images/img4.png"
                    className="img-fluid rounded"
                    alt="Diagnosis"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabetesTab;
