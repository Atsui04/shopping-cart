function CartSection() {
  return (
    <div className="sticky top-6 flex flex-col gap-6 rounded-xl bg-slate-800 p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-slate-100">Cart</h2>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 rounded-lg border border-slate-600/40 bg-slate-700/60 p-3">
          <div className="flex items-center justify-between">
            <p className="font-medium text-slate-100">
              Keyboards <span className="text-sm text-slate-400">x1</span>
            </p>
            <div className="flex items-center gap-3">
              <span className="font-bold text-sky-400">$120</span>
              <button className="cursor-pointer text-slate-400 transition hover:text-red-400">
                ❌
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-slate-600 font-bold text-slate-100 transition hover:bg-slate-500">
              -
            </button>
            <span className="w-6 text-center text-sm font-semibold">1</span>
            <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-slate-600 font-bold text-slate-100 transition hover:bg-slate-500">
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-slate-600/40 bg-slate-700/60 p-3">
          <div className="flex items-center justify-between">
            <p className="font-medium text-slate-100">
              Mouse <span className="text-sm text-slate-400">x2</span>
            </p>
            <div className="flex items-center gap-3">
              <span className="font-bold text-sky-400">$120</span>
              <button className="cursor-pointer text-slate-400 transition hover:text-red-400">
                ❌
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-slate-600 font-bold text-slate-100 transition hover:bg-slate-500">
              -
            </button>
            <span className="w-6 text-center text-sm font-semibold">2</span>
            <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-slate-600 font-bold text-slate-100 transition hover:bg-slate-500">
              +
            </button>
          </div>
        </div>
      </div>

      <hr className="border-slate-700" />

      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-sm text-slate-400">
          <span>Total items:</span>
          <span className="font-semibold text-slate-200">3</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-slate-100">
          <span>Total price:</span>
          <span className="text-sky-400">$240</span>
        </div>
        <button className="mt-2 cursor-pointer rounded-lg border border-red-500/20 bg-red-500/10 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20">
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartSection;
