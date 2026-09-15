import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products/Products";
import Search from "./components/Search";
import { PRODUCTS } from "./data/products";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase().trim()),
  );

  return (
    <div className="min-h-dvh bg-slate-900">
      <div className="flex flex-col gap-12 text-slate-50">
        <Header />
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-10">
          <Search searchQuery={searchQuery} onSearch={setSearchQuery} />
          <Products products={filteredProducts} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
