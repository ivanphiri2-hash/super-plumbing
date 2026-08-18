export const siteConfig = {
  name: 'Super Plumbing & Electrical Services',
  shortName: 'Super Plumbing & Electrical',
  phoneDisplay: '076 222 2862',
  phoneRaw: '+27762222862',
  // WhatsApp uses international format without the leading +
  whatsapp: '27762222862',
  email: 'info@superplumbingelectrical.co.za',
  address: {
    line1: '460 Mokwena St, Tlhabane Unit B',
    line2: 'Tlhabane, 0299',
    region: 'North West',
    country: 'South Africa',
  },
  mapQuery: '460 Mokwena St, Tlhabane Unit B, Tlhabane, 0299, South Africa',
  serviceAreas: [
    'Tlhabane',
    'Rustenburg',
    'Boitekong',
    'Phokeng',
    'Geelhout Park',
    'Cashan',
  ],
} as const

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Hours', href: '#hours' },
  { label: 'Contact', href: '#contact' },
] as const
