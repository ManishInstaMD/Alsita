import React, { useState } from 'react';
import DietChart from './DietChart'; 
import {useTranslation} from 'react-i18next';

const Patient = () => {
  const {t} = useTranslation();
  const [showDietChart, setShowDietChart] = useState(false);

  if (showDietChart) {
    return <DietChart onBack={() => setShowDietChart(false)} />;
  }

  return (
    <div>
      <div
        className="bg-image text-white text-center py-5"
        style={{
          backgroundImage: "url('src/assets/images/about-empanorm.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold">
            {t("patient.title")}
          </h1>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-3">
            <div
              role="button"
              className="text-decoration-none text-center d-block border rounded p-4 shadow-sm h-100"
              onClick={() => setShowDietChart(true)}
            >
              <img
                src="src/assets/images/diet.png"
                alt="Diet Chart"
                className="img-fluid mb-3"
              />
              <h5 className="fw-bold"> {t("patient.h1")}</h5>
              <p className="text-muted mb-0"> {t("patient.h2")}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="text-center border rounded p-4 shadow-sm h-100">
              <img
                src="src/assets/images/dose.png"
                alt="Dosage Reminder"
                className="img-fluid mb-3"
              />
              <h5 className="fw-bold">{t("patient.h3")}</h5>
              <p className="text-muted mb-0">{t("patient.h4")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
