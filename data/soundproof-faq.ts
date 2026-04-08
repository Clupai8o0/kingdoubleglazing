export const soundproofFaq = [
  {
    q: 'How much noise reduction can I actually expect?',
    a: 'Acoustic laminated double glazing achieves Rw 42 — compared to Rw 26 for a typical single-pane window. That 16 dB improvement reduces perceived loudness by roughly two-thirds. In practice: a tram line that previously forced you to raise your voice becomes background presence. A freeway that woke you at 5 am becomes tolerable. Results vary with frame sealing quality, which we assess and remediate at install.',
  },
  {
    q: 'What is an Rw rating and what does it mean for my home?',
    a: 'Rw (Weighted Sound Reduction Index) is the laboratory-measured ability of a glass unit to reduce airborne noise across the frequency spectrum. Every 10 dB increase halves perceived loudness. A window rated Rw 42 admits roughly half the perceived noise of one rated Rw 32. It\'s the most reliable single number for comparing glazing options — more useful than marketing terms like "soundproof" or "acoustic-grade".',
  },
  {
    q: 'What\'s the difference between standard double glazing and acoustic laminated glass?',
    a: 'Standard double glazing uses two identical panes of glass separated by an air or argon cavity. It reduces noise well across most frequencies but has a resonant frequency weakness — typically around 2,000–4,000 Hz — where transmission actually increases. Acoustic laminated glass has a PVB (polyvinyl butyral) interlayer bonded between two glass plies. This interlayer damps the resonant effect and is particularly effective at mid-frequency noise: voices, traffic rumble, and public transport.',
  },
  {
    q: 'Will it block low-frequency noise like bass, trucks, and train rumble?',
    a: 'Better than standard glazing, yes — but no window eliminates low-frequency noise entirely. Bass frequencies below 100 Hz transmit through building structure as much as through glass, so they\'re partially a wall and floor problem. Acoustic laminated glass with a thick PVB interlayer (1.52 mm or greater, which we use as standard) is the best glass-only solution available. For extreme low-frequency environments (near freight rail or a nightclub wall), we can specify asymmetric pane thicknesses to shift the resonant frequency below the problem range.',
  },
  {
    q: 'Is triple glazing better than acoustic laminated for noise?',
    a: 'Not always. Triple glazing (Rw 40) actually rates lower than acoustic laminated (Rw 42) in our range — the extra pane adds thermal performance, not acoustic performance. For noise reduction as the primary goal, acoustic laminated is the right specification. If you want both maximum thermal and maximum acoustic performance, we can combine laminated glass in a triple-glazed unit — but this is a premium specification at a higher price point.',
  },
  {
    q: 'Can I retrofit acoustic glazing without replacing my existing window frames?',
    a: 'Yes — that\'s the retrofit method. The acoustic laminated unit installs directly into your existing timber or aluminium frame. The frame stays untouched. Most Melbourne frames accommodate the 28–36 mm rebate depth needed for a double-glazed unit; our technician confirms suitability at measure-up. If your frames are slightly shallow, we can often rebate the frame to accept the unit.',
  },
  {
    q: 'Does acoustic glazing also improve thermal performance?',
    a: 'Yes. Acoustic laminated double glazing achieves U-value 2.4 W/m²K — significantly better than single glazing (around 5.8 W/m²K) and comparable to standard double glazing. It is not as thermally efficient as Low-E coated glass (U-value 1.8), but it is a meaningful thermal upgrade in addition to the acoustic improvement. Many customers in Melbourne\'s inner suburbs choose it for both reasons.',
  },
  {
    q: 'What Rw rating do I need for my situation?',
    a: 'As a guide: Rw 35–36 (standard double glazing) is adequate for quiet suburban streets. Rw 38–42 (acoustic laminated) is recommended within 100 m of a tram line, busy arterial road, or flight path. Rw 45+ is available on request for extreme environments — near freeways, entertainment districts, or freight rail. Our technician can assess your specific noise exposure and recommend the right specification.',
  },
  {
    q: 'Will the windows look any different after acoustic glazing?',
    a: 'No. The frame is unchanged. The acoustic laminated unit sits in the same rebate as the original glass. The PVB interlayer is optically clear — there is no visible difference from inside or outside the home. The only difference you might notice on close inspection is the slightly warmer colour temperature of the interlayer in certain light conditions.',
  },
  {
    q: 'How long does the acoustic glazing installation take?',
    a: 'A standard Melbourne home with 8–14 windows is typically complete in one day. The acoustic laminated units are factory-made and arrive on the day ready to fit. Installation is identical to standard retrofit — no structural work, no plaster damage, no multi-day disruption. Most customers are fully installed by mid-afternoon.',
  },
] as const

export type SoundproofFaqItem = (typeof soundproofFaq)[number]
