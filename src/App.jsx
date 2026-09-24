import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import DemoPhone from "./components/DemoPhone.jsx";
import Features from "./components/Features.jsx";
import InstallSteps from "./components/InstallSteps.jsx";
import DownloadPanel from "./components/DownloadPanel.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <section id="demo" className="border-y border-violet/15 bg-paper-raised dark:border-white/10 dark:bg-paper-dark-raised">
        <div className="py-16 md:py-[68px]">
          <DemoPhone />
        </div>
      </section>
      <Features />
      <InstallSteps />
      <DownloadPanel />
      <Footer />
    </>
  );
}
