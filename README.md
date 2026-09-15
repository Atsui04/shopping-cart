# 🛒 Shopping Cart Sandbox

A minimalist sandbox for comparing and testing state management approaches in **React** (React State, Zustand, Redux Toolkit).

## 🎯 Purpose

To explore and compare mental models, boilerplate code overhead, and re-render optimization techniques across different state managers using a classic **Shopping Cart** use case.

## 🌿 Git Branches

- **`main`** — Pure UI template (Tailwind CSS, static data, no state logic).
- **`feature/react-state`** — Base implementation using `useState` + Prop Drilling.
- **`feature/zustand`** — State managed with **Zustand** (+ `persist` middleware).
- **`feature/redux-toolkit`** — State managed with **Redux Toolkit** (`configureStore`, `createSlice`, `createSelector`, and Redux DevTools).

## 🧪 Scenarios Tested in Each Branch

1. **Cart CRUD:** Add to cart, remove item, update quantity (`+1` / `-1`).
2. **Derived State:** Calculate `Total Price` and `Total Items`.
3. **Filter & Search:** Filter product catalog via local/global state.
4. **Persistence:** Preserve cart state in `localStorage`.

## 🛠 Tech Stack

- **React** + **Vite**
- **TypeScript**
- **Tailwind CSS**
