import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products/Products";
import Search from "./components/Search";
import { PRODUCTS, type CartProduct, type Product } from "./data/products";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartProduct[]>([]);

  const filteredProducts = PRODUCTS.filter((prod) =>
    prod.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );
  const cartLength = cart.length;
  const totalPrice = cart.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );

  function handleAddToCart(product: Product) {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function handleDeleteFromCart(cartProductId: number) {
    setCart((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== cartProductId),
    );
  }

  function handleIncrementItem(cartProductId: number) {
    setCart((prev) =>
      prev.map((cartProduct) =>
        cartProduct.id === cartProductId
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct,
      ),
    );
  }

  function handleDecrementItem(cartProductId: number) {
    setCart((prev) =>
      prev
        .map((cartProduct) =>
          cartProduct.id === cartProductId
            ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
            : cartProduct,
        )
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  }

  function handleClearCart() {
    setCart([]);
  }

  return (
    <div className="min-h-dvh bg-slate-900">
      <div className="flex flex-col gap-12 text-slate-50">
        <Header length={cartLength} />
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-10">
          <Search searchQuery={searchQuery} onSearch={setSearchQuery} />
          <Products
            products={filteredProducts}
            cart={cart}
            onAddToCart={handleAddToCart}
            onDeleteFromCart={handleDeleteFromCart}
            totalPrice={totalPrice}
            totalItems={cartLength}
            onAddItem={handleIncrementItem}
            onDeleteItem={handleDecrementItem}
            onClearCart={handleClearCart}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
