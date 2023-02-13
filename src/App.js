import react from "react";
import { Header } from "./components/Header";
import { SendForm } from "./components/SendForm";
import { PromoCard } from "./components/PromoCard";
import { Footer } from "./components/Footer";
import iconBrandRecognition from "./images/iconBrandRecognition.svg";
import iconDetailedRecords from "./images/iconDetailedRecords.svg";
import iconFullyCustomizable from "./images/iconFullyCustomizable.svg";

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
      </section>
      <section className="sectionstatistics__wrapper">
        <div className="sectionstatistics">
          <div className="statistics__header">
            <p className="statistics__title">
              Advanced Statistics
            </p>
            <p className="statistics__description">
            Track how your links are performing across the web with 
            </p>
            <p className="statistics__description">
            our advancod statistics dashboard.
            </p>
            <div className="statistics__cards">
              <PromoCard 
              img={iconBrandRecognition}
              title="Brand Recognition" 
              text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
              />
              <PromoCard 
              img={iconDetailedRecords}
              title="Detailed Records" 
              text='Gain insights into who is clicking your links. Knowing when and where people engage with yout content helps inform better decisions.'
              />
              <PromoCard 
              img={iconFullyCustomizable}
              title="Fully Customizable" 
              text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              />
            </div>
          </div>
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
