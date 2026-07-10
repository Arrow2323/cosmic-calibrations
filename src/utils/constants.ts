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

export const CALENDLY = {
  /** Rhonda's Calendly username. Create a free account at calendly.com
   *  and set up a "Structural Integration Consult" event type.
   *  Calendly syncs 2-way with Google Calendar automatically. */
  username: "rhonda-roberts-bcsi",
  /** The event type slug for booking a consultation */
  eventType: "free-consult",
  /** Color override for the Calendly widget (matches brand teal) */
  primaryColor: "005F73",
} as const;

export const NAV = {
  main: [
    { label: "The 10-Series", href: "/#ten-series" },
    { label: "About", href: "/about" },
    { label: "What to Expect", href: "/what-to-expect" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Book a Session", href: "#book" },
} as const;

export const SOCIAL = {
  // Add social links when available
} as const;
