type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#A27A3F]">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#20291F] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-xl text-sm leading-7 text-[#77796F] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
