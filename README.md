# Tri Dashboard

A modern React dashboard starter built with Vite, TypeScript, Tailwind CSS, and a shadcn-inspired component library.

## Overview

This project is a responsive dashboard shell featuring:
- Sidebar navigation and top navigation
- Dashboard panels for courses, schedule, progress, and tasks
- Toast notifications, tooltips, and dialog components
- Client-side routing with React Router
- Localized text support with `react-i18next`
- React Query for async state management

## Technologies

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Radix UI primitives
- shadcn-style component patterns
- React Router DOM
- React Query
- i18next / react-i18next
- Vitest for testing

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

Preview the production build:

```bash
bun run preview
```

Run tests:

```bash
bun run test
```

## Project Structure

- `src/main.tsx` - application entry point
- `src/App.tsx` - app shell with providers and routing
- `src/pages/Index.tsx` - dashboard page
- `src/components/` - feature panels and layout components
- `src/components/ui/` - reusable UI primitives and custom components
- `src/lib/` - utilities and i18n provider

## Notes

This repo is a good starting point for building an admin dashboard or productivity app with modern React tooling. Customize components and routes as needed.
