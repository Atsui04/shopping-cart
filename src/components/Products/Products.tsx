import type { CartProduct, Product } from "../../data/products";
import CartSection from "./CartSection";
import ProductGrid from "./ProductGrid";

interface ProductsProps {
  products: Product[];
  cart: CartProduct[];
  onAddToCart: (product: Product) => void;
  onDeleteFromCart: (cartProductId: number) => void;
  totalPrice: number;
  totalItems: number;
  onAddItem: (cartProductId: number) => void;
  onDeleteItem: (cartProductId: number) => void;
  onClearCart: () => void;
}

function Products({
  products,
  cart,
  onAddToCart,
  onDeleteFromCart,
  totalPrice,
  totalItems,
  onAddItem,
  onDeleteItem,
  onClearCart,
}: ProductsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
      <ProductGrid products={products} onAddToCart={onAddToCart} />
      <CartSection
        cart={cart}
        onDeleteFromCart={onDeleteFromCart}
        totalPrice={totalPrice}
        totalItems={totalItems}
        onAddItem={onAddItem}
        onDeleteItem={onDeleteItem}
        onClearCart={onClearCart}
      />
    </section>
  );
}

export default Products;
