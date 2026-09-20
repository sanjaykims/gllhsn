export default function Equalizer({ className = "" }: { className?: string }) {
  const bars = [40, 70, 45, 90, 55, 75, 35];
  return (
    <div
      aria-hidden
      className={`flex items-end gap-1 ${className}`}
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="equalizer-bar w-1 rounded-full bg-accent"
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}
