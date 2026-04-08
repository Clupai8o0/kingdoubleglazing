export const emergencyFaq = [
  {
    q: 'How quickly can you respond to a broken window?',
    a: "Our target dispatch time is 30 minutes from your call within metropolitan Melbourne. Actual arrival depends on your location and time of day — we give you a precise ETA on the phone before we hang up. For inner suburbs during business hours, we are typically on-site within 45–60 minutes. For outer suburbs or peak periods, allow up to 90 minutes. We will not leave you with an unsecured property overnight.",
  },
  {
    q: 'Do you operate nights, weekends and public holidays?',
    a: "Yes — 24 hours a day, 7 days a week, 365 days a year including Christmas and Easter. Emergency glazing calls do not go to voicemail or an answering service. You speak to a King team member every time. After-hours calls are handled by the same licensed glaziers, not a subcontracted crew.",
  },
  {
    q: "What's included in the emergency call-out?",
    a: "The call-out includes: travel to your property, a site assessment, immediate make-safe work (glass removal and temporary boarding if required), a written scope of repair, and a fixed price for the permanent glass replacement. There are no hidden assessment fees. If we can fit the permanent glass on the same visit, we do — no unnecessary return trips.",
  },
  {
    q: 'Can you board up the window until the new glass is ready?',
    a: "Yes — board-up is included in every emergency call-out where same-day permanent glass is not possible (typically large or non-standard units that require factory ordering). The board-up is structural-grade, weather-resistant, and secured to the frame — not a sheet of cardboard. Most standard residential glass sizes can be replaced permanently on the same visit.",
  },
  {
    q: 'Can you provide a report for my insurance claim?',
    a: "Yes. We provide a written statement of damage, cause (where determinable), scope of repair, and a tax invoice — the standard documentation required by all major Australian home insurers. We can address the report to your insurer directly if required. We work with all major insurers and understand their documentation requirements.",
  },
  {
    q: 'Can you replace double-glazed or heritage window units as an emergency?',
    a: "Broken double-glazed units can usually be boarded up on the same visit and replaced with a new factory-sealed unit within 5–7 business days (custom units are made to order). Heritage timber sash units follow the same process. If you have a broken single pane in a standard frame, same-day permanent replacement is almost always possible. We confirm on the call what is achievable for your specific situation.",
  },
  {
    q: 'How do I stay safe until your glazier arrives?',
    a: "Do not attempt to remove broken glass with bare hands — wear thick gloves if you must move any pieces. Keep children and pets away from the area. If the breakage is from a forced entry (burglary), do not disturb the scene more than necessary and notify Victoria Police before touching anything. If the broken glass is creating a weather exposure or security risk, you can place a heavy piece of furniture in front of the opening temporarily — our glazier will work around it.",
  },
  {
    q: 'Is there a surcharge for after-hours or weekend calls?',
    a: "After-hours and weekend call-outs carry a service fee that reflects the true cost of emergency dispatch — we will quote this clearly on the call before any work begins. We do not add hidden charges at the invoice stage. The call-out fee is credited against the total job cost, so you are not paying a separate assessment fee on top of the repair price.",
  },
] as const

export type EmergencyFaqItem = (typeof emergencyFaq)[number]
