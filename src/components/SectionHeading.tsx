export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="kicker text-xs font-medium uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display mt-3 text-3xl font-bold text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-foreground-muted ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
