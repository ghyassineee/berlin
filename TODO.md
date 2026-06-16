# TODO – UI fixes (Light mode, Navbar scroll, Background consistency)

## Navbar (responsive + scroll offset)
- [ ] Update `src/components/Navbar.tsx`:
  - [ ] Intercept menu link clicks
  - [ ] Smooth scroll to target with offset for fixed header
  - [ ] Close mobile menu after navigation
- [ ] Add scroll offset helpers to section roots:
  - [ ] `src/components/Hero.tsx` section `#home`
  - [ ] `src/components/Services.tsx` section `#services`
  - [ ] `src/components/About.tsx` section `#about`
  - [ ] `src/components/Testimonials.tsx` section `#testimonials`
  - [ ] `src/components/ContactForm.tsx` section `#contact`

## Light mode + background consistency
- [ ] Fix major light-mode mismatch in `src/components/ContactForm.tsx` (left panel background currently stays dark).
- [ ] Replace hardcoded light backgrounds in:
  - [ ] `src/components/Hero.tsx`
  - [ ] `src/components/About.tsx`
  - [ ] `src/components/Services.tsx`
  - [ ] `src/components/Testimonials.tsx`
  - [ ] `src/components/ContactForm.tsx`
  with token-based classes (`bg-background`, `bg-card`, `bg-muted`, `border-border`) so responsive (mobile/desktop) matches.

## Business contact strings
- [ ] Update `src/data/content.ts` phone format to `+49 1735750202`
- [ ] Ensure WhatsApp button uses the updated formatting correctly (no leading plus in wa.me number).
