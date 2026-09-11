function Search() {
  return (
    <div className="flex items-center justify-center">
      <input
        className="w-full max-w-100 rounded-4xl border border-slate-500 bg-slate-700 px-6 py-4"
        type="text"
        placeholder="Search products..."
      />
    </div>
  );
}

export default Search;
