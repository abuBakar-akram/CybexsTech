# PRODUCT.md

Project: Cybexs Tech — Website (marketing)
Source: Converted from InfiniteCS-Website starter repo and client brief provided by the stakeholder.
Created: 2026-10-19

## Executive summary
Cybexs Tech positions itself as a premium South-Asian talent and operations partner for businesses that need to scale inbound sales, BPO, and operational capacity while reducing operating costs. The website is a concise, single-page marketing site that communicates credibility, technical competence, and measurable business value.

Primary proposition: "Deploy the infrastructure. Decrease the spend."

## Business context
- Company: Cybexs Tech
- Sectors: Technology, Sales, Operations
- Core services: Inbound Sales Support; BPO & Operational Support; Technology & AI (practical automation and technical support).
- Target customers: business owners, founders, executives, sales/operations managers seeking cost-effective scaling with high-quality South Asian resources.

## Goals (what success looks like)
- Primary: Lead generation — qualified contact inquiries from businesses evaluating outsourcing/ops-scale solutions.
- Secondary: Brand trust and credibility; reduce friction to schedule discovery calls; demonstrate technical competence and conservative, enterprise-grade design.
- Metrics: contact form submissions (demo gating until live), click-throughs on CTAs, time-on-page for case/strategy sections, mobile/desktop performance and accessibility scores.

## Constraints & non-goals
- Do not invent or publish real contact details, client names, certifications, or performance claims. Unknown fields remain placeholders until provided.
- Preserve existing working site functionality (static build, GSAP choreography, demo-mode form). Prefer incremental edits over full rewrite.
- Maintain accessibility, SEO scaffolding, and no-tracking policy unless the client requests analytics.

## Audience & personas
- Founder / CEO evaluating cost vs quality tradeoffs — cares about credibility, security, and predictable working models.
- Head of Sales / Ops — wants scalable inbound sales support, integration with CRM/processes, and measurable ramp timelines.
- Procurement / Operations manager — wants pricing signals, security assurances, and flexibility in staffing models.

## Messaging priorities
1. Primary headline: "Deploy the infrastructure. Decrease the spend." (hero)
2. Supporting themes: Quality resources; lean operating model; measurable cost reduction; flexible South-Asian talent; practical AI/tech to remove repetitive work.
3. Tone: professional, restrained, confident — avoid hype and generic outsourcing language.

## Content & structure (map to existing site sections)
- Hero: headline, short subheadline, two CTAs (Schedule discovery / View services). Use restrained hero visuals and a short animated stats pill.
- Marquee: subtle brand motion or messaging strip — non-essential for conversion; keep lightweight.
- About/Value props: three to four value props with concise bullet copy.
- Impact/Stats: conservative counters and illustrative charts; avoid fabricated performance numbers — use illustrative labels or placeholders.
- Services: clear services (Inbound Sales Support; BPO & Operational Support; Technology & AI) with concise offerings and outcomes.
- Strategy: 4-step process (Discover / Design / Deploy / Optimize) framed as the engagement model.
- Global Command Center: present as architecture/ops capability (locations & cloud nodes) but avoid specific client claims.
- Testimonials & FAQ: keep placeholders / demo disclaimers; do not invent client names or details.
- Contact: demo-mode contact form with clear demo banner; collect only necessary fields; placeholders for live contact info.
- Pre-footer CTA + Footer: single conversion push & legal / privacy placeholders.

## Design & implementation notes
- Preserve design tokens in `src/styles/variables.css`; use tokens for colors, radii, spacing, and shadows.
- Typography: Playfair Display for hero headings, Inter for body and UI — keep current loading strategy (preconnect + google fonts) unless client supplies a license font.
- Animations: keep GSAP-based scroll choreography but limit heavy motion on low-end devices; respect `prefers-reduced-motion`.
- Accessibility: maintain semantic HTML (`<details>`/`<summary>` for FAQ), keyboard navigation, and aria labels for interactive controls.
- Performance: preserve static, no-tracking policy; avoid adding third-party analytics unless requested.

## Technical implementation
- Repo is a Vite static site using vanilla JS + GSAP. Continue to use existing `src/main.js` orchestration and `src/styles/` CSS modules.
- Reuse components: hero, service cards, glass cards, contact form (demo-mode). Keep toast demo behavior until client provides an endpoint.
- Deployment: static build via Vite; typical targets: Vercel, Netlify, GitHub Pages.

## Assets & placeholders
- Contact details: leave placeholders (e.g., `hello@your-domain.com`) until client supplies.
- Client logos / case studies: do not add real logos or fabricate results. Use generic placeholders with explicit captions.
- Hero imagery / screenshots: use existing SVG blobs and tokens; client may supply brand photography later.

## Open questions (placeholders left intentionally)
1. Confirm company contact email, phone, and preferred CTA (Schedule a call vs. Contact us). Provide only when ready to publish.
2. Any customer logos or case studies that may be published? If yes, provide signed permission and assets.
3. Do you want analytics (e.g., Google Analytics, Plausible) added, or keep no-tracking policy?

## Next steps for the Impeccable workflow
1. Author agrees to PRODUCT.md contents or provides clarifications above.
2. If approved, run `/impeccable document` to generate DESIGN.md from the existing implementation (optional), or request a specific refinement command: `audit`, `polish`, `typeset`, `layout`, etc.
3. Supply contact details and any approved client assets for final copy replacement and live contact form wiring.

Maintainer: Cybexs Tech (content owner) — edits to PRODUCT.md should be made only with stakeholder approval.

---
Generated from: `index.html`, `src/main.js`, and `src/styles/*` in the existing repository.
