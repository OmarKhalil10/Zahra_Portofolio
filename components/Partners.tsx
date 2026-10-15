"use client";
const ROW = ["SFR Altice", "TBWA\\Corporate", "Third Advertising", "Electrad", "MAB Media", "INSEEC", "Sorbonne", "ENSJSI", "GOMYCODE", "Hult Prize", "HEC Alger Alumni"];

export default function Partners() {
  return (
    <section className="overflow-hidden border-y border-espresso/10 bg-cream py-8">
      <div className="flex w-max animate-marquee gap-4 pr-4">
        {[...ROW, ...ROW].map((r, i) => (
          <span key={i} className="whitespace-nowrap rounded-full border border-espresso/15 bg-white px-6 py-2.5 font-display text-sm font-bold">
            {r}
          </span>
        ))}
      </div>
      <div className="mt-4 flex w-max animate-marquee-slow gap-4 pr-4">
        {[...ROW.slice().reverse(), ...ROW.slice().reverse()].map((r, i) => (
          <span key={i} className="whitespace-nowrap rounded-full bg-espresso px-6 py-2.5 text-sm font-bold text-cream">
            {r}
          </span>
        ))}
      </div>
    </section>
  );
}
