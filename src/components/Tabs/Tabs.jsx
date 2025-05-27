// components/Tabs/Tabs.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import DiabetesTab from "./DiabetesTab";
import HeartFailureTab from "./HeartFailureTab";
import CKDTab from "./CKDTab";
import { useTranslation } from "react-i18next";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab-2");
  const { t } = useTranslation();

  const tabData = [
    {
      id: "tab-2",
      image: "/images/heart-failure.png",
      alt: "Heart Failure",
      label: t("heartFailure"),
      component: <HeartFailureTab active={activeTab === "tab-2"} />,
    },
    {
      id: "tab-3",
      image: "/images/ckd.png",
      alt: "CKD",
      label: t("ckdLabel"),
      component: <CKDTab active={activeTab === "tab-3"} />,
    },
    {
      id: "tab-1",
      image: "/images/diabetes.png",
      alt: "Diabetes",
      label: t("diabetesLabel"),
      component: <DiabetesTab active={activeTab === "tab-1"} />,
    },
  ];

  return (
    <div className="rs_diabetes py-4 top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rs_view_tab text-center">
              <ul className="nav nav-pills justify-content-center border rounded-4 shadow-sm p-3 bg-white">
                {tabData.map((tab) => (
                  <li className="nav-item" key={tab.id}>
                    <button
                      className={`nav-link tab-button d-flex flex-column align-items-center justify-content-center ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                    >
                      <img
                        src={tab.image}
                        alt={tab.alt}
                        className="tab-image mb-2"
                      />
                      <span className="tab-label">{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rs_tab_details mt-4">
        {tabData.map((tab) => (
          <React.Fragment key={tab.id}>
            {activeTab === tab.id && tab.component}
          </React.Fragment>
        ))}
      </div>
      <style>
        {`
         .tab-button.active .tab-label {
  color: white;
}
        `}
      </style>
    </div>
  );
};

export default Tabs;
