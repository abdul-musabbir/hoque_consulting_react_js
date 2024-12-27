import L from "../../assets/logos/l.svg";

export default function LogoSlider() {
  const logos: string[] = [L, L, L, L, L, L, L];

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
