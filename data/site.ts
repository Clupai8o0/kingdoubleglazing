// Single source of truth for all business contact & identity details.
export const siteConfig = {
  name: 'King Double Glazing',
  legalName: 'Brooklyn Glass Pty Ltd t/a King Double Glazing',
  domain: 'https://kingdoubleglazing.com.au',
  phone: '0406 470 595',
  phoneTel: '+61406470595', // E.164 format for JSON-LD schema
  phoneHref: 'tel:+61406470595', // ready-to-use href for <a> tags
  email: 'info@kingdoubleglazing.com.au',
  licenseNumber: '', // VIC Glazier Licence — awaiting Tas
  address: {
    street: '',
    suburb: 'Melbourne',
    state: 'VIC',
    postcode: '',
    country: 'AU',
    display: 'Melbourne, VIC, Australia',
  },
  geo: {
    latitude: -37.8136,
    longitude: 144.9631,
  },
  social: {
    facebook: '',
    instagram: '',
    google: ''
  },
} as const
