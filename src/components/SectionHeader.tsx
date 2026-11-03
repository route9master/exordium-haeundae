import Reveal from "./Reveal";

export default function SectionHeader({
  overline,
  title,
  lead,
  dark = false,
}: {
  overline: string;
  title: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="max-w-[720px]">
      <p className={`eyebrow ${dark ? "text-goldl" : "text-gold"}`}>{overline}</p>
      <h2 className={`mt-4 font-serif text-[30px] font-semibold leading-[1.3] md:text-[42px] ${dark ? "text-pearl" : "text-text"}`}>
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-[16px] leading-[1.8] md:text-[17px] ${dark ? "text-pearl/70" : "text-mute"}`}>{lead}</p>
      )}
    </Reveal>
  );
}
