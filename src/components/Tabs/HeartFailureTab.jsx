// components/Tabs/HeartFailureTab.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const HeartFailureTab = ({ active }) => {
  const { t } = useTranslation();

  if (!active) return null;

  return (
    <div id="tab-2" className="tab-content py-5">
      <div className="container p-4 shadow-lg rounded bg-white">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 text-center">
            <div className="rounded-circle overflow-hidden mx-auto shadow" style={{ width: '300px', height: '300px' }}>
              <img 
                src="src/assets/images/heart.png" 
                alt="Heart Failure" 
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <h2 className="fw-bold text-primary mb-3">{t('heart.title')}</h2>
            <p className="text-muted">{t('heart.description1')}</p>
            <p className="text-muted">{t('heart.description2')}</p>
            <p className="text-muted">{t('heart.description3')}</p>
            <p className="text-muted">{t('heart.description4')}</p>
          </div>
        </div>
      </div>

      {/* How the Normal Heart Works */}
      <div className="container mt-5 p-4 bg-light rounded shadow-sm text-center">
      <div className="container p-4 shadow-lg rounded bg-white">
        <h2 className="text-primary fw-bold mb-4">{t('heart.normalHeart.title')}</h2>
        <p className="text-muted">{t('heart.normalHeart.des1')}</p>
        <img src="src/assets/images/heart_works.png" alt="Heart Function" className="img-fluid shadow rounded w-100"  style={{ maxHeight: '400px' }} />
        <p className="mt-3 text-muted">{t('heart.normalHeart.des2')}</p>
        <p className="mt-3 text-muted">{t('heart.normalHeart.des3')}</p>
        <p className="mt-3 text-muted">{t('heart.normalHeart.des4')}</p>
      </div>
      </div>

       {/* Heart Failure Comparison */}
       <div className="container mt-5 mb-5">
        <h2 className="text-primary mb-4 fw-bold text-center display-6 text-bold mb-4">{t('heart.comparison.title')}</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-primary border-2">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0 text-center">{t('heart.comparison.healthyHeart.title')}</h5>
              </div>
              <div className="card-body text-center">
                <img 
                  src="src/assets/images/img7.png" 
                  className="img-fluid mb-3" 
                  alt="Normal Heart" 
                  style={{ maxHeight: '250px' }} 
                />
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>{t('heart.comparison.healthyHeart.points1')}</li>
                  <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>{t('heart.comparison.healthyHeart.points2')}</li>
                  <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>{t('heart.comparison.healthyHeart.points3')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-danger border-2">
              <div className="card-header bg-danger text-white">
                <h5 className="card-title mb-0 text-center">{t('heart.comparison.heartFailure.title')}</h5>
              </div>
              <div className="card-body text-center">
                <img 
                  src="src/assets/images/img8.png" 
                  className="img-fluid mb-3" 
                  alt="Heart Failure" 
                  style={{ maxHeight: '250px' }} 
                />
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item"><i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>{t('heart.comparison.heartFailure.point1')}</li>
                  <li className="list-group-item"><i className="bi bi-exclamation-triangle-fill text-warning me-2"></i> {t('heart.comparison.heartFailure.point2')}</li>
                  <li className="list-group-item"><i className="bi bi-exclamation-triangle-fill text-warning me-2"></i> {t('heart.comparison.heartFailure.point3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 p-4 bg-white rounded shadow-sm text-center">
        <h2 className="text-primary fw-bold mb-2">{t('heart.compensation.title')}</h2>
        <img src="src/assets/images/img9.png" alt="Compensation Mechanism" className="img-fluid shadow rounded" style={{ maxHeight: '400px', }} />
      </div>

      <div className="container p-3 shadow-lg rounded bg-white">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8">
            <h2 className="fw-bold text-primary mb-3">{t('heart.medications.title')}</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"></li>
              <li className="list-group-item">{t('heart.medications.med1')}</li>
              <li className="list-group-item">{t('heart.medications.med2')}</li>
              <li className="list-group-item">{t('heart.medications.med3')}</li>
              <li className="list-group-item">{t('heart.medications.med4')}</li>
              <li className="list-group-item">{t('heart.medications.med5')}</li>

            </ul>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <img src="src/assets/images/img6.png" alt="Heart Compensation" className="img-fluid rounded shadow" style={{ maxHeight: '300px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartFailureTab;
