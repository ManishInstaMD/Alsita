import React from "react";
import { useTranslation } from "react-i18next";

// PDF lists per language
const PDFData = {
  en: [
    { calories: 1200, link: "/images/en_1200_Final.pdf" },
    { calories: 1400, link: "/images/en_1400_Final.pdf" },
    { calories: 1600, link: "/images/en_1600_Final.pdf" },
    { calories: 1800, link: "/images/en_1800_Final.pdf" },
  ],
  bn: [
    { calories: 1200, link: "/images/bn_1200_Final.pdf" },
    { calories: 1400, link: "/images/bn_1400_Final.pdf" },
    { calories: 1600, link: "/images/bn_1600_Final.pdf" },
    { calories: 1800, link: "/images/bn_1800_Final.pdf" },
  ],
  gu: [
    { calories: 1200, link: "/images/gu_1200_Final.pdf" },
    { calories: 1400, link: "/images/gu_1400_Final.pdf" },
    { calories: 1600, link: "/images/gu_1600_Final.pdf" },
    { calories: 1800, link: "/images/gu_1800_Final.pdf" },
  ],
  hi: [
    { calories: 1200, link: "/images/hi_1200_Final.pdf" },
    { calories: 1400, link: "/images/hi_1400_Final.pdf" },
    { calories: 1600, link: "/images/hi_1600_Final.pdf" },
    { calories: 1800, link: "/images/hi_1800_Final.pdf" },
  ],
  kn: [
    { calories: 1200, link: "/images/kn_1200_Final.pdf" },
    { calories: 1400, link: "/images/kn_1400_Final.pdf" },
    { calories: 1600, link: "/images/kn_1600_Final.pdf" },
    { calories: 1800, link: "/images/kn_1800_Final.pdf" },
  ],
  ml: [
    { calories: 1200, link: "/images/ml_1200_Final.pdf" },
    { calories: 1400, link: "/images/ml_1400_Final.pdf" },
    { calories: 1600, link: "/images/ml_1600_Final.pdf" },
    { calories: 1800, link: "/images/ml_1800_Final.pdf" },
  ],
  mr: [
    { calories: 1200, link: "/images/mr_1200_Final.pdf" },
    { calories: 1400, link: "/images/mr_1400_Final.pdf" },
    { calories: 1600, link: "/images/mr_1600_Final.pdf" },
    { calories: 1800, link: "/images/mr_1800_Final.pdf" },
  ],
  or: [
    { calories: 1200, link: "/images/or_1200_Final.pdf" },
    { calories: 1400, link: "/images/or_1400_Final.pdf" },
    { calories: 1600, link: "/images/or_1600_Final.pdf" },
    { calories: 1800, link: "/images/or_1800_Final.pdf" },
  ],
  pa: [
    { calories: 1200, link: "/images/pa_1200_Final.pdf" },
    { calories: 1400, link: "/images/pa_1400_Final.pdf" },
    { calories: 1600, link: "/images/pa_1600_Final.pdf" },
    { calories: 1800, link: "/images/pa_1800_Final.pdf" },
  ],
    ta: [
    { calories: 1200, link: "/images/ta_1200_Final.pdf" },
    { calories: 1400, link: "/images/ta_1400_Final.pdf" },
    { calories: 1600, link: "/images/ta_1600_Final.pdf" },
    { calories: 1800, link: "/images/ta_1800_Final.pdf" },
  ],
      te: [
    { calories: 1200, link: "/images/te_1200_Final.pdf" },
    { calories: 1400, link: "/images/te_1400_Final.pdf" },
    { calories: 1600, link: "/images/te_1600_Final.pdf" },
    { calories: 1800, link: "/images/te_1800_Final.pdf" },
  ],
    as: [
    { calories: 1200, link: "/images/as_1200_Final.pdf" },
    { calories: 1400, link: "/images/as_1400_Final.pdf" },
    { calories: 1600, link: "/images/as_1600_Final.pdf" },
    { calories: 1800, link: "/images/as_1800_Final.pdf" },
  ],
};

const DietChart = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Fallback to English if no PDF data found for selected language
  const selectedPlans = PDFData[currentLang] || PDFData["en"];

  return (
    <div>
      {/* Hero Banner */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/about-empanorm.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <h2 className="fw-bold display-6">{t("dietChart.title")}</h2>
      </div>

      {/* PDF Cards */}
      <div className="container my-5">
        <div
          className="bg-white rounded-4 shadow p-4 mx-auto"
          style={{ maxWidth: "1000px" }}
        >
          <div className="row justify-content-center">
            {selectedPlans.map((plan, idx) => (
              <div key={idx} className="col-6 col-md-3 mb-4">
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="bg-light rounded-4 p-3 h-100 text-center">
                    <img
                      src="/images/pdf.png"
                      alt="PDF"
                      className="img-fluid mb-2"
                      style={{ maxWidth: "60px" }}
                    />
                    <div className="fw-bold">
                      {plan.calories} {t("dietChart.Calories")}
                    </div>
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
