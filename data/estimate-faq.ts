export const estimateFaq = [
  {
    q: 'How accurate is the instant estimate?',
    a: 'Within ±10% of the final invoice price for standard retrofit jobs. The estimate uses your window count, typical glass area, and the same base rates we charge on site. The only variable that can shift the final price is if a site measure reveals an unusual frame condition — which we flag before ordering any glass.',
  },
  {
    q: 'Do I have to give my email to see the estimate?',
    a: 'No. Your estimate appears the moment you hit Calculate — no email, no phone number, no obligation. We believe in showing you the number first. You can optionally enter your email if you want a formal PDF quote sent to you.',
  },
  {
    q: 'What window sizes should I enter?',
    a: "Select the size category closest to your typical window. Standard casement and sash windows in Melbourne are usually 0.9–1.0 m². If you have a mix of sizes, pick the most common one — the ±10% accuracy absorbs small variations. A precise measure-up during the free assessment confirms the final area.",
  },
  {
    q: 'Which glass type should I choose?',
    a: 'Standard Clear is the best starting point for most Melbourne homes. Upgrade to Tinted Low-E if you have west-facing rooms that overheat, Acoustic Laminated if you live near a main road or flight path, or Triple Glazed for maximum thermal performance. The calculator shows you the price difference in real time.',
  },
  {
    q: 'Is the estimate inclusive of installation?',
    a: 'Yes. Every estimate includes the glass unit, professional installation, frame preparation, safe disposal of your old glass, and cleanup. There are no separate labour charges. The only potential extras are scaffolding for inaccessible upper-storey windows (rare) and frame remediation if a frame is structurally compromised (very rare).',
  },
  {
    q: 'How do I go from estimate to installed windows?',
    a: "After the estimate, book a free on-site assessment. A King technician measures each window precisely, confirms the spec, and provides a binding written quote (usually within 24 hours). Once you sign off, we order the glass and install within 2–3 weeks. The whole process from estimate to installation typically takes 3–4 weeks.",
  },
  {
    q: 'Does the estimate include the VEU government rebate?',
    a: 'The base estimate shows full price so you understand worst case. VEU rebates for eligible properties typically offset $300–$900 on a standard home job. We calculate and lodge your rebate paperwork — you receive a reduced invoice, not a claim to chase yourself.',
  },
  {
    q: 'Can I estimate a single room rather than the whole house?',
    a: "Absolutely. Enter only the windows you want done now. There's no minimum order size. Many customers start with one west-facing or street-facing room and add the rest later once they experience the difference. Per-m² pricing is the same regardless of quantity.",
  },
] as const

export type EstimateFaqItem = (typeof estimateFaq)[number]

// Process steps specific to the instant estimate page
export const estimateProcessSteps = [
  {
    title: 'Enter Your Details',
    body: 'Window count, typical size, and glass type. Takes under 90 seconds on any device.',
  },
  {
    title: 'See Your Number',
    body: 'Your estimate appears immediately. No email required. Accurate within ±10% of the final invoice.',
  },
  {
    title: 'Book Your Assessment',
    body: 'When ready, a King technician visits for a precise measure-up and locks in your contractual price.',
  },
] as const
