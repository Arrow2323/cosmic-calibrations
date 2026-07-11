# Rhonda's Master Todo — Cosmic Calibrations Website

## Before Launch (P0)

- [ ] **Photos** — need 3-5 professional photos. Hero portrait in your treatment space, hands working (close-up), treatment room wide shot, studio details (plants, textures, lighting). Phone photos are fine for now — replace with pro photos later.
- [ ] **Google Calendar booking link** — create an Appointment Schedule at [calendar.google.com](https://calendar.google.com) with your Gmail. Set title "Free 15-Min Consult", duration 15 min, pick your available hours. Paste the public link into `src/utils/constants.ts` → `BOOKING.url`.
- [ ] **Web3Forms key** — sign up at [web3forms.com](https://web3forms.com) (free, 250 submissions/month). Paste the access key into `src/components/ui/ContactForm.astro` (search for `YOUR_WEB3FORMS_ACCESS_KEY`).
- [ ] **Stripe account** — create at [stripe.com](https://stripe.com). You don't need to activate it yet — just have the account ready. Create Payment Links from your Stripe dashboard for invoice payments.
- [ ] **NPI number** — go to [nppes.cms.hhs.gov](https://nppes.cms.hhs.gov), create account, apply as Type 1 Individual. Use taxonomy code `225700000X` (Massage Therapist). Free, 15 minutes. Paste your NPI into the superbill generator.
- [ ] **Review all placeholder text** — particularly the About page bio, Services page session descriptions, and FAQ answers. Everything is written in your voice from your old intake questionnaire, but you should verify it before going live.
- [ ] **Set access key for practitioner portal** — change `cosmic-stars-2026` in `src/pages/dashboard.astro` line ~395 and `src/pages/stars-client.astro` line ~85 to a key only you know.

## After First Few Clients (P1)

- [ ] **Testimonials** — ask clients if they'd provide a quote after completing sessions. Replace the placeholder quotes in `src/utils/constants.ts` → `PLACEHOLDERS.testimonials`.
- [ ] **Before/after posture photos** — take side-profile photos at session 1 and session 10 (with written client consent). Add to `/testimonials` page.
- [ ] **Google Business Profile** — claim your listing at [business.google.com](https://business.google.com). Paste the link in `src/utils/constants.ts` → `SOCIAL.googleBusiness`. This is critical for local search ("structural integration near me").
- [ ] **Real client data in dashboard** — start adding actual clients with their birth data. The SI predictions get better as you confirm/deny them with real clinical observation.

## Content to Fill In Over Time (P2)

- [ ] **Blog posts** — 6 topics are scaffolded at `/blog`. Write or dictate content for any of them as you have time. Topics: desk fascia, 10-series order, fascia vs muscle, breathing changes, post-surgical recovery, tech neck.
- [ ] **Social media accounts** — create Instagram and/or Facebook when ready. Paste links in `src/utils/constants.ts` → `SOCIAL.instagram` and `SOCIAL.facebook`.
- [ ] **Video intro** — record a 1-2 minute video introducing yourself and the treatment space. A phone video is fine. Add to the `/testimonials` page video placeholder.
- [ ] **Gift certificates** — set up how you want to handle these (digital certificate design, redemption process). The FAQ already mentions they're available.

## Nice to Have (P3)

- [ ] **Custom logo** — the site currently uses a styled CSS text wordmark ("Cosmic Calibrations" in Crimson Text). A custom SVG logo would replace this.
- [ ] **Professional photoshoot** — upgrade phone photos to professional images of you and your practice space.
- [ ] **Custom domain** — if you want `cosmiccalibrations.com` instead of `cosmiccalibrations.madmanwithabox.org`, buy it at [namecheap.com](https://namecheap.com) and point nameservers to Cloudflare.
- [ ] **Insurance credentialing** — after getting your NPI, consider enrolling as an out-of-network provider with BCBS, Aetna, and Cigna for better client reimbursement rates.

## Site Access

- **Public site**: https://cosmiccalibrations.madmanwithabox.org
- **Practitioner portal**: https://cosmiccalibrations.madmanwithabox.org/dashboard (access key: `cosmic-stars-2026` — change this!)
- **Stars client tool**: https://cosmiccalibrations.madmanwithabox.org/stars-client (same access key)
- **GitHub repo**: https://github.com/Arrow2323/cosmic-calibrations
