import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products/Products";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-dvh bg-slate-900">
      <div className="flex flex-col gap-12 text-slate-50">
        <Header />
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-10">
          <Search />
          <Products />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
