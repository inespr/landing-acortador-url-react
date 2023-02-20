import { PromoCard } from "./PromoCard";
import iconBrandRecognition from "../images/iconBrandRecognition.svg";
import iconDetailedRecords from "../images/iconDetailedRecords.svg";
import iconFullyCustomizable from "../images/iconFullyCustomizable.svg";

export function FeatureSection() {
  const tittle = [
    "Brand Recognition",
    "Detailed Records",
    "Fully Customizable",
  ];
  const text = [
    "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    "Gain insights into who is clicking your links. Knowing when and where people engage with yout content helps inform better decisions.",
    "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  ];

  const img = [
    iconBrandRecognition,
    iconDetailedRecords,
    iconFullyCustomizable,
  ];

  return (
    <div className="statistics__header">
      <section className="statistics__text">
        <p className="statistics__title">Advanced Statistics</p>
        <p className="statistics__description">
          Track how your links are performing across the web with our advancod
          statistics dashboard.
        </p>
      </section>

      <div className="statistics__cards">
        <PromoCard img={img[0]} title={tittle[0]} text={text[0]} />
        <PromoCard img={img[1]} title={tittle[1]} text={text[1]} />
        <PromoCard img={img[2]} title={tittle[2]} text={text[2]} />
      </div>
    </div>
  );
}
