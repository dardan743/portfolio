import { HERO, CONTACT, SERVICES, SKILLS, PORTFOLIO, WORK } from "sections";
import { Header, Footer } from "components";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Header t={t} />
      <main>
        <HERO t={t} />
        <SKILLS />
        <SERVICES />
        <WORK />
        <PORTFOLIO />
        {/* <TESTIMONIALS /> */}
        <CONTACT />
      </main>
      <Footer />
    </>
  );
}

export default Home;
