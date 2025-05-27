import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const CKDTab = ({ active }) => {
  const { t } = useTranslation();
  
  if (!active) return null;

  const causes = [
    t('ckd.causes.highBloodPressure'),
    t('ckd.causes.diabetes'),
    t('ckd.causes.highCholesterol'),
    t('ckd.causes.kidneyInfections'),
    t('ckd.causes.glomerulonephritis'),
    t('ckd.causes.pkd'),
    t('ckd.causes.urineBlockages'),
    t('ckd.causes.medicationUse')
  ];

  const causeDescriptions = [
    t('ckd.causeDescriptions.highBloodPressure'),
    t('ckd.causeDescriptions.diabetes'),
    t('ckd.causeDescriptions.highCholesterol'),
    t('ckd.causeDescriptions.kidneyInfections'),
    t('ckd.causeDescriptions.glomerulonephritis'),
    t('ckd.causeDescriptions.pkd'),
    t('ckd.causeDescriptions.urineBlockages'),
    t('ckd.causeDescriptions.medicationUse')
  ];

  return (
    <div id="tab-3" className="tab-content py-5">
      <div className="container p-4 shadow-lg rounded bg-white">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8">
            <h2 className="fw-bold text-primary mb-3">
              {t('ckd.title')}
            </h2>
            <ul className="list-group list-group-flush border rounded shadow-sm">
              {t('ckd.description', { returnObjects: true }).map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <img
              src="src/assets/images/img10.png"
              alt={t('ckd.title')}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Symptoms Section */}
      <div className="container mt-5 text-center p-4 bg-light rounded shadow-sm">
        <h2 className="text-primary mb-4">{t('ckd.symptoms.title')}</h2>
        <p className="text-muted">
          {t('ckd.symptoms.description')}
        </p>
        <img
          src="src/assets/images/ckd1.png"
          alt={t('ckd.symptoms.title')}
          className="img-fluid d-block mx-auto shadow rounded"
          style={{ maxHeight: "400px" }}
        />
      </div>

      {/* Causes of CKD */}
      <div className="container mt-5 p-4 bg-white rounded shadow-lg">
        <h2 className="text-primary text-center mb-4">{t('ckd.causes.title')}</h2>
        <div className="row g-4">
          {causes.map((cause, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-12">
              <div className="card border-0 shadow-sm p-3 rounded bg-light">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px", fontSize: "20px" }}
                  >
                    {index + 1}
                  </div>
                  <h5 className="mb-0">{cause}</h5>
                </div>
                <p className="mt-2 text-muted">
                  {causeDescriptions[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Treatments for CKD */}
      <div className="container mt-5 p-4 bg-light rounded shadow-sm">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8">
            <h2 className="fw-bold text-primary mb-3">{t('ckd.treatments.title')}</h2>
            <p className="text-muted">
              {t('ckd.treatments.description')}
            </p>
            <ul className="list-group list-group-flush border rounded shadow-sm">
              {t('ckd.treatments.items', { returnObjects: true }).map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <img
              src="src/assets/images/img12.png"
              alt={t('ckd.treatments.title')}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="row">
            <div className="container mt-5 p-4 shadow-lg rounded bg-white">
              <h2 className="text-primary text-center mb-4">{t('ckd.outlook.title')}</h2>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <img
                    src="src/assets/images/img13.png"
                    alt={t('ckd.outlook.title')}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className="list-group list-group-flush border rounded shadow-sm">
                    {t('ckd.outlook.items', { returnObjects: true }).map((item, index) => (
                      <p key={index} className="list-group-item">{item}</p>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CKDTab;