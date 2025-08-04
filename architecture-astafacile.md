# Architecture Document – AstaFacile

## 1. Overview & Purpose

**Overview**  
AstaFacile is a static, web-based platform that helps first-time real estate buyers in Italy participate in house auctions. The platform guides users from discovery (via real estate listings) through auction registration by simplifying the process and handling key touchpoints via external tools. It is built with no backend, using only a modern frontend stack and third-party integrations.

**Purpose**  
This architecture ensures low cost, rapid launch, and maximum simplicity. The goal is to deliver a clear, mobile-first experience that builds trust, provides document guidance, and routes users to secure channels like WhatsApp or Google Forms.

## 2. Technical Stack

**Frontend**  
- Framework: React with Vite
- Languages: JavaScript, HTML, CSS
- Styling: Tailwind CSS or custom utility classes
- Build Tool: Vite

**Hosting**  
- Platform: Vercel or Netlify
- Domain: astafacile.it
- Deployment: GitHub repo → CI/CD pipeline → CDN-delivered static site

**Integrations**  
- WhatsApp Click-to-Chat
- Google Forms / Typeform
- DocuSign / PDFfiller (optional)
- Fallback email: mailto link

## 3. System Diagram & Component Breakdown

**Logical Architecture**

    +-----------------------------+
    |     User’s Device (Web)    |
    |  - Mobile-first responsive |
    |  - React/Vite SPA          |
    +-------------+-------------+
                  |
                  v
    +-----------------------------+
    |     Static Hosting (Vercel) |
    |  - Deploy from GitHub       |
    |  - CDN-delivered HTML/CSS   |
    |  - Auto-build from Vite     |
    +-----------------------------+
                  |
                  v
    +-----------------------------+
    |    Third-Party Integrations |
    |                             |
    |  - WhatsApp CTA link        |
    |  - Google Form / Typeform   |
    |  - DocuSign (optional)      |
    |  - mailto: fallback         |
    +-----------------------------+

**Component Breakdown**

| Component             | Function                                         |
|----------------------|--------------------------------------------------|
| Landing Page          | Explains service, builds trust                   |
| Contact Options       | WhatsApp button, email fallback                  |
| Explainer Section     | Visual flow of “How it Works”                    |
| CTA Section           | "Start Registration" – links to onboarding form  |
| Legal / FAQ           | Brief policies + disclaimers                     |
| Testimonials          | Social proof                                     |
| Form                  | Hosted externally, embedded or linked            |

## 4. Security, Privacy & Compliance

**Security**  
- HTTPS with auto SSL via Vercel/Netlify  
- No backend or custom storage = reduced attack surface  
- External platforms handle form submissions and documents securely

**Privacy**  
- No data stored on-site servers  
- Users submit via secure, hosted forms  
- Site disclaimer: "We do not store your documents. All submissions are through secure third-party services."

**Compliance**  
- GDPR alignment via:
  - Consent checkbox on forms
  - Cookie disclaimer (if needed)
  - Manual data deletion on request via email