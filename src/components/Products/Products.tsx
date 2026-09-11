import CartSection from "./CartSection";
import ProductGrid from "./ProductGrid";

function Products() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
      <ProductGrid />
      <CartSection />
    </section>
  );
}

export default Products;
