# Angular Fundamentals: Data Binding & Directives

A teaching demo from an Angular fundamentals series (Day 2). It's a small product catalog that shows Angular 21's core template features in one place. The commented-out lines in the templates are deliberate: each one shows the older or alternative syntax next to the modern version, for comparison.

## What it covers

- **Data binding:** interpolation, property binding, event binding (`(click)` with `$event`), and two-way binding with `[(ngModel)]`.
- **Built-in control flow:** `@for` with `track` and its context variables (`$index`, `$count`, `$even`, `$odd`, `$first`, `$last`), `@if`, and `@switch`, shown alongside the older `*ngFor`, `*ngIf`, and `[ngSwitch]`.
- **Class and style bindings:** `[class.x]`, `[style.x]`, `[ngClass]`, and `[ngStyle]`.
- **A custom attribute directive:** [`appHighlight`](src/app/directives/highlight.ts) uses `@Input`, `@HostListener`, and `Renderer2` to change a card's background on hover.
- **Typed models** with interfaces for products, categories, and courses.
- **Standalone components:** navbar, home, products, and footer.

## Run it

```bash
npm install
npm start
```

Open http://localhost:4200. Run unit tests with `npm test` (Vitest).

## Project structure

```
src/app/
├── components/   # navbar, home (binding examples), products (catalog), footer
├── directives/   # highlight.ts: custom attribute directive
└── models/       # IProduct, ICategory, ICourse
```

## Author

Mona Soliman, Senior Frontend Engineer (Angular).
[LinkedIn](https://www.linkedin.com/in/mona-soliman-481748bb/) · [YouTube](https://www.youtube.com/@MonaCodingGirl)
