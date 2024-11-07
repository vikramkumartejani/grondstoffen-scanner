import styles from "./ExploreHeader.module.css";
import { FaChevronRight } from "react-icons/fa";
import i18next from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const ExploreHeader = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  useEffect(() => {
    if (lang && lang !== i18next.language) {
      i18next.changeLanguage(lang);
    }
  }, [lang]);
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.texts}>
          <div className={styles.textsinner}>
            <nav className={styles.breadcrumb}>
              <Link to={`/home`} className={styles.breadcrumbLink}>
                {t("exploreheader.header.home")}
              </Link>
              <FaChevronRight className={styles.breadcrumbIcon} />
              <span className={styles.breadcrumbCurrent}>
                {" "}
                {t("exploreheader.header.current")}
              </span>
            </nav>
            <div>
              <h2 className={styles.stepOne}>
                {" "}
                {t("exploreheader.header.stap")}
              </h2>
              <h2 className={styles.heading1}>
                {t("exploreheader.header.title")}
              </h2>
              <p className={styles.para1}>
                {t("exploreheader.header.paragraph")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;