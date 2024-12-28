import Allianz from "../../assets/brands/allianz.svg";
import Aon from "../../assets/brands/aon.svg";
import Bulklcdparts from "../../assets/brands/bulklcdparts.svg";
import FedaralBank from "../../assets/brands/fedaral_bank.svg";
import LearnFxTrading from "../../assets/brands/learnfxtrading.svg";
import MasterCook from "../../assets/brands/mastercook.svg";
import Shopnbc from "../../assets/brands/shopnbc.svg";
import UnitedHealthCare from "../../assets/brands/united-health-care.svg";
export default function LogoSlider() {
  const logos: string[] = [
    Allianz,
    Aon,
    Bulklcdparts,
    FedaralBank,
    LearnFxTrading,
    MasterCook,
    Shopnbc,
    UnitedHealthCare,
  ];

  return (
    <div className="relative w-full overflow-hidden group slider">
      <div
        className="flex space-x-16 animate-loop-scroll group-hover:paused"
        aria-hidden="true"
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            className="w-28 h-28 object-contain"
            src={logo}
            alt={`Logo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
