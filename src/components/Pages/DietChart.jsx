import React from 'react';
import {useTranslation} from 'react-i18next'

const dietPlans = [
  { calories: 1200, link: 'src/assets/images/en_1200_Final.pdf' },
  { calories: 1400, link: 'src/assets/images/en_1400_Final.pdf' },
  { calories: 1600, link: 'src/assets/images/en_1600_Final.pdf' },
  { calories: 1800, link: 'src/assets/images/en_1800_Final.pdf' },
];

const DietChart = () => {
  const {t} = useTranslation();
  return (
    <div>
      {/* Hero Banner */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('src/assets/images/about-empanorm.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      >
        <h2 className="fw-bold display-6">{t("dietChart.title")}</h2>
      </div>

      {/* PDF Cards */}
      <div className="container my-5">
        <div className="bg-white rounded-4 shadow p-4 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="row justify-content-center">
            {dietPlans.map((plan, idx) => (
              <div key={idx} className="col-6 col-md-3 mb-4">
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="bg-light rounded-4 p-3 h-100 text-center">
                    <img
                      src="src/assets/images/pdf.png"
                      alt="PDF"
                      className="img-fluid mb-2"
                      style={{ maxWidth: '60px' }}
                    />
                    <div className="fw-bold">{plan.calories} {t("dietChart.Calories")}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietChart;
