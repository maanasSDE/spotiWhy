interface CategoryButtonProps {
  text: string;
  active?: boolean;
}

function CategoryButton({ text, active }: CategoryButtonProps) {
  return (
    <button
      className={`px-4 py-1 rounded-3xl text-sm font-medium whitespace-nowrap overflow-x-visible
        ${
          active
            ? "bg-[#3ebe55] text-black"
            : "bg-[#282828] text-white hover:bg-[#333]"
        }`}
    >
      {text}
    </button>
  );
}

export function MobileCategories() {
  return (
    <div className="lg:hidden -mx-4 px-6 pt-4 overflow-x-visible">
      <div className="overflow-x-auto">
        <div className="flex gap-2 pb-4">
          <CategoryButton text="All" active />
          <CategoryButton text="Music" />
          <CategoryButton text="Podcasts" />
          <div className="border-pink-500 border-2 rounded-3xl">
            <CategoryButton text="Wrapped" />
          </div>
          <CategoryButton text="Live Events" />
          <CategoryButton text="Made For You" />
          <CategoryButton text="New Releases" />
        </div>
      </div>
    </div>
  );
}
