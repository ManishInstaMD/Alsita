import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div
      className="rs_banner d-flex align-items-center text-center text-white"
      style={{
        backgroundImage: "url('src/assets/images/home-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="middle_title">
              <h1 className="fw-bold">{t('banner.title')}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
