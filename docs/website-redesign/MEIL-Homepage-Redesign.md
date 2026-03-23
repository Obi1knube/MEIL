# MEIL Website Redesign Plan (v1)

## Objective

Transform the current MEIL website from a basic layout into a high-trust, modern industrial services site that:

- reflects engineering credibility
- clearly communicates services
- introduces MEIL360 as a product
- improves conversion (calls, demos, enquiries)

---

## Current Problems (Observed)

1. Weak layout structure (sections feel disconnected)
2. Hero section lacks clear message and CTA
3. Typography and spacing inconsistent
4. Client section looks unstructured and reduces credibility
5. Overuse of visual noise (particle background)
6. No strong connection between company services and MEIL360

---

## Design Direction

### Visual Style

- Primary: Dark navy / charcoal
- Background: White / light grey
- Accent: Deep red (existing brand)
- Clean, minimal animations
- Industrial, modern, trustworthy

---

## Homepage Structure (Target)

### 1. Header / Navigation

- Logo (left)
- Links:
  - Home
  - Services
  - MEIL360
  - Clients
  - About
  - Contact

- CTA Button (right):
  - "Talk to Us"

---

### 2. Hero Section

**Headline:**
Electrical, Mechanical and Reliability Support for Modern Manufacturing

**Subheadline:**
Helping factories reduce downtime and improve maintenance performance through practical engineering support and digital tools.

**Buttons:**
- Talk to Us
- Explore MEIL360

**Notes:**
- Remove or reduce particle animation
- Use real industrial background or clean gradient

---

### 3. Services Section

Create 3–4 cards:

- Electrical Maintenance Support  
- Mechanical Maintenance Support  
- Breakdown & Fault Finding  
- Reliability Improvement  

Each card:
- title
- 1 sentence outcome
- link/button

---

### 4. MEIL360 Section (CRITICAL)

**Headline:**
MEIL360 – Downtime Logging for Modern Factories

**Description:**
MEIL360 enables fast downtime capture, structured fault data, and real-time visibility for engineering teams.

**Buttons:**
- Open MEIL360 (external link)
- Request a Demo

---

### 5. About Section (Shortened)

Reduce current text to:
- who we help
- industries served
- what makes MEIL different

Add "Read more" link

---

### 6. Clients Section (Rebuild)

Rules:
- consistent logo sizes
- grid layout
- no long descriptions
- optional short caption only

Goal:
Build trust visually, not text-heavy

---

### 7. Contact Section

Two-column layout:

Left:
- phone
- email
- short message

Right:
- form

---

### 8. Footer

- company info
- navigation
- MEIL360 link
- contact details
- copyright

---

## Design System Rules

- Max width: 1200px
- Section padding: ~80px vertical
- Consistent button styles
- Consistent card styles (radius + shadow)
- Limit text width for readability
- Use clear heading hierarchy

---

## Phase Plan

### Phase 1 (Immediate)

- Replace Hero
- Add MEIL360 section
- Add CTA button to navbar
- Clean client logos
- Remove excessive visual noise

### Phase 2

- Rebuild About section
- Redesign Contact section
- Improve spacing & typography globally

### Phase 3

- Add testimonials / case studies
- Improve service pages
- Strengthen conversion messaging

---

## Technical Notes

- Keep React structure modular
- Separate sections into components:
  - HeroSection
  - ServicesSection
  - Meil360Section
  - ClientsSection
  - ContactSection

- Ensure responsiveness (desktop, tablet, mobile)

---

## Success Criteria

- Clear value proposition within 5 seconds
- Visible link to MEIL360
- Professional, industrial look
- Improved enquiry / demo conversion