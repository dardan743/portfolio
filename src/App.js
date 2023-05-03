import { useEffect } from "react";
import Aos from "aos";
import {
  HERO,
  CONTACT,
  SERVICES,
  SKILLS,
  PORTFOLIO,
  WORK,
  TESTIMONIALS,
} from "sections";
import { Header, Footer } from "components";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header t={t} />
      <main>
        <HERO t={t} />
        <SKILLS />
        <SERVICES />
        <WORK />
        <PORTFOLIO />
        <TESTIMONIALS />
        <CONTACT />
      </main>
      <Footer />
    </>
  );
}

export default App;
