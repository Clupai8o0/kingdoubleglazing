export interface SuburbData {
  name: string
  slug: string
  postcode: string
  region: string
}

export const suburbs: SuburbData[] = [
  { name: 'Balwyn', slug: 'balwyn', postcode: '3103', region: 'Inner East' },
  { name: 'Balwyn North', slug: 'balwyn-north', postcode: '3104', region: 'Inner East' },
  { name: 'Box Hill', slug: 'box-hill', postcode: '3128', region: 'Inner East' },
  { name: 'Brighton', slug: 'brighton', postcode: '3186', region: 'Bayside' },
  { name: 'Burwood', slug: 'burwood', postcode: '3125', region: 'Inner East' },
  { name: 'Camberwell', slug: 'camberwell', postcode: '3124', region: 'Inner East' },
  { name: 'Canterbury', slug: 'canterbury', postcode: '3126', region: 'Inner East' },
  { name: 'Caulfield', slug: 'caulfield', postcode: '3162', region: 'Bayside' },
  { name: 'Doncaster', slug: 'doncaster', postcode: '3108', region: 'Outer East' },
  { name: 'Eltham', slug: 'eltham', postcode: '3095', region: 'Outer East' },
  { name: 'Fitzroy', slug: 'fitzroy', postcode: '3065', region: 'Inner North' },
  { name: 'Glen Iris', slug: 'glen-iris', postcode: '3146', region: 'Inner East' },
  { name: 'Glen Waverley', slug: 'glen-waverley', postcode: '3150', region: 'Outer East' },
  { name: 'Hawthorn', slug: 'hawthorn', postcode: '3122', region: 'Inner East' },
  { name: 'Kew', slug: 'kew', postcode: '3101', region: 'Inner East' },
  { name: 'Malvern', slug: 'malvern', postcode: '3144', region: 'Inner East' },
  { name: 'Mitcham', slug: 'mitcham', postcode: '3132', region: 'Outer East' },
  { name: 'Mont Albert', slug: 'mont-albert', postcode: '3127', region: 'Inner East' },
  { name: 'Nunawading', slug: 'nunawading', postcode: '3131', region: 'Outer East' },
  { name: 'Richmond', slug: 'richmond', postcode: '3121', region: 'Inner Melbourne' },
  { name: 'Ringwood', slug: 'ringwood', postcode: '3134', region: 'Outer East' },
  { name: 'South Yarra', slug: 'south-yarra', postcode: '3141', region: 'Inner South' },
  { name: 'Templestowe', slug: 'templestowe', postcode: '3106', region: 'Outer East' },
  { name: 'Toorak', slug: 'toorak', postcode: '3142', region: 'Inner South' },
  { name: 'Vermont', slug: 'vermont', postcode: '3133', region: 'Outer East' },
  { name: 'Wantirna', slug: 'wantirna', postcode: '3152', region: 'Outer East' },
  { name: 'Wheelers Hill', slug: 'wheelers-hill', postcode: '3150', region: 'Outer East' },
]

/** O(1) slug lookup for suburb detail pages */
export const suburbBySlug: Record<string, SuburbData> = Object.fromEntries(
  suburbs.map((s) => [s.slug, s]),
)
