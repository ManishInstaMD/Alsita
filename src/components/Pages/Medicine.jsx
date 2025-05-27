import React from "react";
import { useTranslation } from "react-i18next";

const Medicine = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("hello")}</h2>
      <h2>{t("i am from medicine")}</h2>
    </div>
  );
};

export default Medicine;
