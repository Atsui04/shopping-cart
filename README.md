# 🛒 Shopping Cart Sandbox

A minimalist sandbox for comparing and testing state management approaches in **React** (React State, Zustand, Redux Toolkit).

## 🎯 Purpose

To explore and compare mental models, boilerplate code overhead, and re-render optimization techniques across different state managers using a classic **Shopping Cart** use case.

## 🌿 Git Branches

- [`feature/react-state`](https://github.com/Atsui04/shopping-cart/tree/feature/react-state) — Base implementation using `useState` + Prop Drilling.
- [`feature/zustand`](https://github.com/Atsui04/shopping-cart/tree/feature/zustand) — State managed with **Zustand** (+ `persist` middleware).
- [`feature/redux-toolkit`](https://github.com/Atsui04/shopping-cart/tree/feature/redux-toolkit) — State managed with **Redux Toolkit** (`configureStore`, `createSlice`, and Redux DevTools).

## 📊 Findings

Building the same feature three times, with three different tools, made the trade-offs concrete instead of theoretical.

| Criteria            | React State (`useState`)                                            | Zustand                                            | Redux Toolkit                                                 |
| ------------------- | ------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------- |
| Setup / Boilerplate | None (built-in)                                                     | Minimal                                            | Moderate (store, slices, provider)                            |
| Prop Drilling       | Significant — cart handlers passed through several component layers | None — global store, accessed directly             | None — global store via hooks                                 |
| Learning Curve      | None (already familiar)                                             | Low — feels like a natural extension of `useState` | Steepest — new concepts (slices, actions, selectors)          |
| Debugging           | Basic React DevTools only                                           | Basic, lightweight                                 | Redux DevTools — best-in-class state inspection & time-travel |

### My takeaways

**React state + props** was, unsurprisingly, the most tedious to build — passing cart handlers down through several layers of components turned into real prop drilling. In hindsight, the Context API would've been the more appropriate built-in fix for this specific problem — this branch is deliberately left as pure `useState` to feel that pain directly, rather than reach for the "correct" solution right away.

**Zustand** was the most enjoyable by a clear margin. Almost no boilerplate, a mental model that felt like a natural extension of `useState`, and cart CRUD was working here faster than in either of the other two branches.

**Redux Toolkit** was the one genuinely new to me going in, and it showed — I leaned on the official docs and a few tutorials to get the slice/selector pattern right. It took the most upfront investment of the three, but the payoff was real: Redux DevTools made inspecting every state change and action trivial in a way neither of the other approaches offered out of the box.

## 🧪 Scenarios Tested in Each Branch

1. **Cart CRUD:** Add to cart, remove item, update quantity (`+1` / `-1`).
2. **Derived State:** Calculate `Total Price` and `Total Items`.
3. **Filter & Search:** Filter product catalog via local/global state.
4. **Persistence:** Preserve cart state in `localStorage`.

## 🛠 Tech Stack

- **React** + **Vite**
- **TypeScript**
- **Tailwind CSS**
