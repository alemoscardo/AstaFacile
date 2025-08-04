# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AstaFacile is a static, web-based platform that helps first-time real estate buyers in Italy participate in house auctions. This is a frontend-only project with no backend, designed to be hosted on static hosting platforms like Vercel or Netlify.

## Technical Architecture

**Stack**: React with Vite, JavaScript/HTML/CSS, Tailwind CSS
**Hosting**: Static hosting (Vercel/Netlify recommended)
**Domain**: astafacile.it
**Deployment**: GitHub → CI/CD → CDN-delivered static site

The platform operates as a Single Page Application (SPA) that routes users to external tools for form submissions and document handling. All user interactions are handled through third-party integrations:
- WhatsApp Click-to-Chat for direct communication
- Google Forms/Typeform for data collection
- DocuSign/PDFfiller for document processing
- Email fallback via mailto links

## Development Commands

**Note**: This repository currently contains only documentation files. When the React/Vite application is implemented, typical commands will be:
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Key Components Structure

The application should be organized around these main components:
- **Landing Page**: Service explanation and trust building
- **Contact Options**: WhatsApp button and email fallback
- **Explainer Section**: Visual "How it Works" flow
- **CTA Section**: Links to external onboarding forms
- **Legal/FAQ**: Policies and disclaimers
- **Testimonials**: Social proof elements

## Security & Privacy Considerations

- HTTPS enforced via hosting platform
- No sensitive data storage (all handled externally)
- GDPR compliance through consent checkboxes and privacy disclaimers
- External form submissions only (no custom backend)

## Target User Context

Primary users are first-time Italian property buyers who need assistance with auction registration. The interface should be:
- Mobile-first responsive design
- Simple and trust-building focused
- Clear navigation to WhatsApp and form integrations
- Italian language optimized

## Integration Requirements

When implementing features, ensure compatibility with:
- WhatsApp deep linking for instant communication
- External form embedding or linking (Google Forms/Typeform)
- Optional document signing integrations
- Email fallback mechanisms