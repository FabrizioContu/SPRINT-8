import { useTranslation } from "react-i18next";
import enFlag from "../assets/img/enFlag.png";
import casFlag from "../assets/img/casFlag.png";
import catFlag from "../assets/img/catFlag.png";

type Locales = {
  [key: string]: {
    flag: string;
    title: string;
  };
};

const locales: Locales = {
  en: { flag: enFlag, title: "English" },
  cas: { flag: casFlag, title: "Spanish" },
  cat: { flag: catFlag, title: "Catalan" },
};
const Languages: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-3 justify-end my-3">
      {Object.keys(locales).map((locale) => (
        <div key={locale} className="w-11">
          <button type="submit" onClick={() => i18n.changeLanguage(locale)}>
            <img src={locales[locale].flag} alt={locales[locale].title} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Languages;
