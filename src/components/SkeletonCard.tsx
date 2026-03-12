export function SkeletonCard() {
  return (
    <div className="glass rounded-2xl p-5 flex flex-col gap-3">
      <div className="skeleton h-5 w-3/4 rounded-lg" />
      <div className="skeleton h-4 w-1/3 rounded-full" />
      <div className="skeleton h-3 w-full rounded" />
      <div className="skeleton h-3 w-5/6 rounded" />
      <div className="skeleton h-3 w-2/3 rounded" />
      <div className="skeleton h-8 w-1/2 rounded-lg mt-2" />
    </div>
  );
}
