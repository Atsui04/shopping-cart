import type { Product } from "../../data/products";
import CartSection from "./CartSection";
import ProductGrid from "./ProductGrid";

interface ProductsProps {
  products: Product[];
}

function Products({ products }: ProductsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
      <ProductGrid products={products} />
      <CartSection />
    </section>
  );
}

export default Products;
