import { useCartStore } from "../../stores/store";

function CartSection() {
  const cart = useCartStore((state) => state.cart);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const cartLength = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  const cartPrice = cart.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );

  return (
    <div className="sticky top-6 flex flex-col gap-6 rounded-xl bg-slate-800 p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-slate-100">Cart</h2>

      {cartLength > 0 && (
        <div className="flex flex-col gap-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 rounded-lg border border-slate-600/40 bg-slate-700/60 p-3"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-100">{item.title} </p>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-sky-400">${item.price}</span>
                  <button
                    onClick={() => deleteFromCart(item.id)}
                    className="cursor-pointer text-slate-400 transition hover:text-red-400"
                  >
                    ❌
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrementItem(item.id)}
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-slate-600 font-bold text-slate-100 transition hover:bg-slate-500"
                >
                  -
                </button>
                <span className="w-6 text-center text-sm font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => incrementItem(item.id)}
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-slate-600 font-bold text-slate-100 transition hover:bg-slate-500"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartLength > 0 && <hr className="border-slate-700" />}

      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-sm text-slate-400">
          <span>Total items:</span>
          <span className="font-semibold text-slate-200">{cartLength}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-slate-100">
          <span>Total price:</span>
          <span className="text-sky-400">${cartPrice}</span>
        </div>
        <button
          onClick={clearCart}
          className="mt-2 cursor-pointer rounded-lg border border-red-500/20 bg-red-500/10 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartSection;
