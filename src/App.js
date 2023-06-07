import { useEffect, useState } from "react";
import Aos from "aos";
import {
  HERO,
  CONTACT,
  SERVICES,
  SKILLS,
  PORTFOLIO,
  WORK,
  // TESTIMONIALS,
} from "sections";
import { Header, Footer, Loader } from "components";
import { useTranslation } from "react-i18next";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <Loader />;
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

export default App;
