interface SearchProps {
  searchQuery: string;
  onSearch: (value: string) => void;
}

function Search({ searchQuery, onSearch }: SearchProps) {
  return (
    <div className="flex items-center justify-center">
      <input
        value={searchQuery}
        className="w-full max-w-100 rounded-4xl border border-slate-500 bg-slate-700 px-6 py-4"
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
