# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AstaFacile is a React-based landing page that helps first-time real estate buyers in Italy participate in house auctions. This is a frontend-only static site designed for Vercel deployment.

## Technical Architecture

**Stack**: React 18 + Vite, JavaScript, Tailwind CSS, Lucide React icons
**Hosting**: Vercel (configured via vercel.json)
**Domain**: astafacile.it
**Build Tool**: Vite with esbuild minification

The application is a single-page layout with component sections that integrate with external services:
- WhatsApp Click-to-Chat via environment variables
- External form submissions (Google Forms placeholder)
- Email contact via mailto links
- No backend or database dependencies

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production (outputs to dist/)
- `npm run lint` - Run ESLint with React rules
- `npm run preview` - Preview production build locally

## Application Structure

The app follows a single-page layout pattern in src/App.jsx with sequential component sections:
```
Header → Hero → HowItWorks → WhyChooseUs → Testimonials → CTA → FAQ → Footer
```

All components are functional React components using hooks. Common patterns:
- Environment variables accessed via `import.meta.env.VITE_*`
- WhatsApp integration through `VITE_WHATSAPP_URL` and `VITE_EMAIL` env vars
- Tailwind CSS with custom utility classes (container-max, section-padding)
- Lucide React for consistent iconography

## Environment Configuration

Required environment variables for external integrations:
- `VITE_WHATSAPP_URL` - WhatsApp Click-to-Chat base URL
- `VITE_EMAIL` - Contact email for mailto links

## Build & Deployment

Configured for Vercel with automatic deployment:
- Build command: `npm run build`
- Output directory: `dist/`
- Vite handles asset optimization and bundling
- ESLint validation on build with zero warnings tolerance