import { useEffect } from "react";
import Aos from "aos";
import { HERO, CONTACT, SERVICES, SKILLS, PORTFOLIO, WORK } from "sections";
import { Header, Footer } from "components";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <HERO />
        <SKILLS />
        <SERVICES />
        <WORK />
        <PORTFOLIO />
        <CONTACT />
      </main>
      <Footer />
    </>
  );
}

export default App;
