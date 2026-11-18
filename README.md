# arigami-bench-app

Small test app for the Arigami restricted-sessions benchmark. Not a product.

- `npm run dev` — local dev server
- `npm test` — unit tests (CI runs these on every PR)

Known seeded bug (U02/U04): open order **C-300** → `TypeError: Cannot read properties of undefined (reading 'map')` in `describeOrder` (`src/orders.ts`).
