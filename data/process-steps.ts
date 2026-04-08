export const processSteps = [
  {
    title: 'Measure Online',
    body: 'Enter your window dimensions into our Instant Estimate Tool. Get a transparent price in 60 seconds — no site visit required.',
  },
  {
    title: 'Confirm Your Quote',
    body: 'A King technician reviews your submission. You receive an itemised quote within 24 hours. No vague estimates, no pressure.',
  },
  {
    title: 'We Install',
    body: 'Our crew fits new double-glazed units directly into your existing frames. One day. No structural work. No mess.',
  },
  {
    title: 'You Save',
    body: 'Lower energy bills from day one. Quieter rooms. Government rebate paperwork handled by us.',
  },
] as const

export type ProcessStep = (typeof processSteps)[number]
