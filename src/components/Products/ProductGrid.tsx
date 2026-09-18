import { PRODUCTS } from "../../data/products";
import { addToCart } from "../../stores/cart/cartSlice";
import { useAppDispatch } from "../../stores/hooks";

function ProductGrid() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-slate-800 p-6">
      <h2 className="text-center text-2xl font-semibold">Products</h2>
      <ul className="grid grid-cols-2 gap-4">
        {PRODUCTS.map((prod) => (
          <li
            className="flex flex-col gap-4 rounded-xl border border-slate-600/60 bg-slate-700 p-6 shadow-md"
            key={prod.id}
          >
            <div className="flex flex-col gap-0.5">
              <h3 className="font-semibold text-slate-50">
                Name: {prod.title}
              </h3>
              <p className="text-sm text-slate-400">
                Category: {prod.category}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-sky-400">
                Price: ${prod.price}
              </span>
              <button
                onClick={() => dispatch(addToCart(prod))}
                className="cursor-pointer rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-500"
              >
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductGrid;
