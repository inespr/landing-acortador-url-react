import React from "react";
import { Header } from "./components/Header";
import { SendForm } from "./components/SendForm";
import { PromoCard } from "./components/PromoCard";
import { Footer } from "./components/Footer";
import {MemoSearch} from "./components/MemoSearch";
import { FeatureSection } from "./components/FeatureSection";

function App() {
  return (
    <div className="App">
      <section className="sectionheader__wrapper">
        <div className="sectionheader">
          <Header/>
        </div>
      </section>
      <section className="sectionform__wrapper">
        <div className="sectionform">
          <SendForm/>
        </div>
        <div className="memoformsearch">
        </div>
      </section>
      <section className="sectionstatistics__wrapper">
        <div className="sectionstatistics">
          <FeatureSection/>
        </div>
      </section>
      <section className="sectionfooter__wrapper">
        <div className="sectionfooter">
          <Footer/>
        </div>
      </section>
    </div>
  );
}

export default App;
