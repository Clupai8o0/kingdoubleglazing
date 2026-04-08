export const glassTypesFaq = [
  {
    q: "What's the most popular glass type for Melbourne homes?",
    a: "Tinted Low-E double glazing is the most commonly specified option for Melbourne homes. It delivers 69% less heat loss than single glazing (U-value 1.8 W/m²K), strong solar control for west and north-facing rooms, and qualifies for the VEU rebate — all at $595/m². It's the right call for most properties prioritising energy bills and year-round comfort. Standard clear double glazing is the starting point for budget-focused projects or rooms with minimal solar exposure.",
  },
  {
    q: 'Can I choose different glass types for different windows in my home?',
    a: "Yes — and this is often the best approach. West-facing rooms benefit most from Tinted Low-E for solar control. Rooms facing a busy road or tram line are better served by Acoustic Laminated for noise reduction. South-facing windows that receive no direct sun may be fine with Standard Clear. A mixed specification costs no more to install than a single type — the factory makes each unit to order. We can advise per-elevation during the quote process.",
  },
  {
    q: "What's the real difference between standard double glazing and Low-E?",
    a: "Standard double glazing (U 2.7) creates a sealed air cavity that slows conductive heat transfer. Low-E double glazing adds a metallic oxide coating to the inner face of the outer pane. This coating reflects long-wave infrared radiation — the heat radiated from warm surfaces — back toward the source. In winter, it reflects indoor heat back inside. In summer, it reflects solar infrared back out. The coating adds roughly $100/m² and improves the U-value from 2.7 to 1.8 — a 33% improvement in thermal resistance.",
  },
  {
    q: 'Is acoustic laminated glass also thermally effective?',
    a: "Yes, though it's not the primary specification for energy efficiency. Acoustic Laminated glass achieves U 2.4 W/m²K — meaningfully better than single pane (U 5.8) and comparable to standard double glazing. The PVB interlayer adds acoustic performance without a significant thermal penalty. If noise and thermal comfort are both priorities, Acoustic Laminated is a solid all-rounder. If energy efficiency is the main goal and noise is secondary, Tinted Low-E is the better specification.",
  },
  {
    q: 'Does argon gas fill make a meaningful difference?',
    a: "A small but real one. Argon fill improves the U-value of a standard air-filled double-glazed unit from roughly 2.8 to 2.7 W/m²K — about a 4% improvement. All our units include argon as standard at no extra charge. The larger gains come from the glass specification itself (standard vs Low-E vs triple) rather than the gas fill. Krypton fill, used in some triple-glazed units, provides a more significant improvement and is available on request for high-performance specifications.",
  },
  {
    q: 'What is SHGC and does it matter in Melbourne?',
    a: "Solar Heat Gain Coefficient (SHGC) measures the fraction of solar radiation that passes through the glass into the room. SHGC 0.86 (single pane) lets in almost all solar heat. SHGC 0.32 (Tinted Low-E) blocks about 63% of solar heat gain. In Melbourne's climate, low SHGC is valuable for west and north-facing glazing where summer afternoon sun is the primary discomfort driver. For south-facing glazing, where passive solar gain in winter is welcome, a higher SHGC may actually be preferable — we can specify per elevation if required.",
  },
  {
    q: 'Which glass types qualify for VEU rebates?',
    a: "The Victorian Energy Upgrades (VEU) program requires a minimum U-value threshold to qualify for the rebate. Tinted Low-E (U 1.8) and Triple Glazed (U 1.0) both comfortably qualify. Standard Clear Double Glazing (U 2.7) currently sits at the margin — eligibility depends on the specific unit specification and the home's heating zone. Acoustic Laminated (U 2.4) may qualify in higher heating zones. We confirm VEU eligibility for your specific address and specification at quote stage.",
  },
  {
    q: 'Is triple glazing worth the premium for Melbourne?',
    a: "For most Melbourne metro homes: no, on energy savings alone. Low-E double glazing (U 1.8) captures roughly 85% of the thermal benefit of triple glazing (U 1.0) at about 65% of the cost. The ROI on the additional spend over Low-E is typically 12–15 years on energy savings. Triple glazing makes clear economic sense if you're in the Dandenong Ranges or Yarra Valley where heating degree days are substantially higher, if your home is targeting 8+ NatHERS stars, or if you have a very large glass area on an exposed elevation.",
  },
  {
    q: 'How do I choose between acoustic laminated and triple glazed for noise?',
    a: "Acoustic Laminated (Rw 42) outperforms Triple Glazed (Rw 40) for noise reduction in our standard range. The extra glass pane in triple glazing adds mass but doesn't provide the resonance-damping effect of the PVB interlayer in acoustic laminated glass. For noise as the primary concern, Acoustic Laminated is the right specification. If you want maximum thermal AND strong acoustic performance, we can combine a laminated pane within a triple-glazed unit — a premium specification available on request.",
  },
  {
    q: 'Is more expensive glass always the right choice?',
    a: "No. The right glass is the one that solves your specific problem at the best cost-to-benefit ratio. Standard Clear at $495/m² is completely adequate for a south-facing bedroom in a quiet street. Specifying triple glazing in that same room would deliver marginal extra benefit at nearly double the cost. We aim to specify down, not up — the Instant Estimate tool lets you compare all four options side-by-side so you can make an informed decision rather than one driven by a sales conversation.",
  },
] as const

export type GlassTypesFaqItem = (typeof glassTypesFaq)[number]
