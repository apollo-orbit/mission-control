# 🚀 Mission Control

A modern Next.js starter with a full component library, ready to ship.

## Stack

- **[Next.js 16](https://nextjs.org/)** — App Router, TypeScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** — 57 accessible, composable components
- **[pnpm](https://pnpm.io/)** — Fast, efficient package manager

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see it running.

## Components

All shadcn/ui components are available under `components/ui/`:

| Component | Component | Component |
|-----------|-----------|-----------|
| Accordion | Alert | Alert Dialog |
| Aspect Ratio | Avatar | Badge |
| Breadcrumb | Button | Button Group |
| Calendar | Card | Carousel |
| Chart | Checkbox | Collapsible |
| Combobox | Command | Context Menu |
| Dialog | Drawer | Dropdown Menu |
| Empty | Field | Form |
| Hover Card | Input | Input Group |
| Input OTP | Item | Kbd |
| Label | Menubar | Navigation Menu |
| Native Select | Pagination | Popover |
| Progress | Radio Group | Resizable |
| Scroll Area | Select | Separator |
| Sheet | Sidebar | Skeleton |
| Slider | Sonner | Spinner |
| Switch | Table | Tabs |
| Textarea | Toggle | Toggle Group |
| Tooltip | | |

## Project Structure

```
mission-control/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── ui/          # shadcn/ui components
├── hooks/
│   └── use-mobile.ts
├── lib/
│   └── utils.ts
└── public/
```

## Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```
