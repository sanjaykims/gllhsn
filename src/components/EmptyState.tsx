export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-background-alt/60 px-6 py-16 text-center">
      <p className="font-display text-lg font-semibold text-primary">
        {title}
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm text-foreground-muted">
        {description}
      </p>
    </div>
  );
}
