export const BUSINESS = {
  name: "Cosmic Calibrations LLC",
  tagline: "Structural Integration — Recalibrate Your Physical Existence",
  practitioner: "Rhonda Roberts",
  credentials: "BCSI",
  credentialsFull: "Board Certified Structural Integrator",
  location: "Austin, TX",
  email: "rhonda@cosmiccalibrations.com",
  phone: "", // Add when available
  address: "", // Add when available
} as const;

export const PRICING = {
  singleSession: 165,
  tenSeries: 1500,
  singleSessionLabel: "Single Session",
  tenSeriesLabel: "10-Series Package",
  sessionDuration: "75–90 minutes",
  savings: 150,
} as const;

export const BOOKING = {
  /**
   * Google Calendar Appointment Schedule URL.
   *
   * Rhonda creates this once in Google Calendar (no new account needed):
   *   1. Open calendar.google.com with rhonda.c.roberts@gmail.com
   *   2. Click "Create" → "Appointment schedule"
   *   3. Set title ("Free 15-Min Consult"), duration (15 min), availability
   *   4. Copy the public booking link and paste it here
   *
   * The URL looks like:
   *   https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ...
   */
  url: "https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_SCHEDULE_ID",
  /** Label shown on booking buttons */
  label: "Book a Free Consult",
} as const;

export const NAV = {
  main: [
    { label: "The 10-Series", href: "/#ten-series" },
    { label: "About SI", href: "/about-si" },
    { label: "About", href: "/about" },
    { label: "What to Expect", href: "/what-to-expect" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Book a Session", href: "#book" },
  portal: { label: "Portal", href: "/dashboard" },
} as const;

export const SOCIAL = {
  // Add social links when available
} as const;
