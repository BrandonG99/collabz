import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image 
        src="/empty-search.svg"
        height={140}
        width={140}
        alt="Empty search"
      />
      <h2 className="text-2xl font-semibold mt-6">
        No results
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try a different search
      </p>
    </div>
  );
};