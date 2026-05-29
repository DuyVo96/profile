export const NAV = {
  brand: 'PROFILE',
  links: ['About', 'Skills', 'Experience', 'Portfolio', 'Contact'],
}

export const HERO = {
  name: 'DANIEL N.',
  subtitle: 'Web3 Builder · Node Operator · Content Creator',
  ctaPrimary: { label: 'VIEW WORK', href: '#portfolio' },
  ctaSecondary: { label: 'CONTACT ME', href: '#contact' },
}

export const ABOUT = {
  heading: 'Building the Decentralized Future',
  dividerLabel: '// ABOUT ME',
  paragraphs: [
    'I\'m a dedicated Web3 infrastructure specialist with deep expertise in blockchain node operations, validator management, and decentralized network maintenance. From Ethereum\'s proof-of-stake transition to cutting-edge FHE privacy layers.',
    'Beyond infrastructure, I bridge technical complexity with clear, engaging content — creating educational resources that help communities understand and participate in the evolving Web3 landscape.',
  ],
  stats: [
    { label: 'Networks\nValidated', value: 10, suffix: '+' },
    { label: 'Years\nExperience', value: 5, suffix: '' },
    { label: 'Languages', value: 3, suffix: '' },
  ],
}

export const SKILLS = [
  {
    title: 'Infrastructure',
    borderColor: 'border-[#00dce5]',
    iconColor: 'text-primary-fixed-dim',
    icon: 'dns',
    items: ['Ethereum', 'Celestia', 'Fhenix', 'Arcium', 'Cosmos', 'Solana', 'Node Operations', 'Validator Setup'],
  },
  {
    title: 'Content Creation',
    borderColor: 'border-[#2ff801]',
    iconColor: 'text-secondary-container',
    icon: 'edit_note',
    items: ['Technical Writing', 'Video Production', 'Thread Crafting', 'Community Building', 'DeFi Education', 'Research Reports'],
  },
  {
    title: 'Research',
    borderColor: 'border-[#e7c427]',
    iconColor: 'text-tertiary-fixed-dim',
    icon: 'manage_search',
    items: ['Protocol Analysis', 'Tokenomics', 'Security Audits', 'DAO Governance', 'Market Research', 'On-chain Analytics'],
  },
]

export const EXPERIENCE = [
  {
    period: '2023 - Present',
    company: 'Fhenix & Arcium',
    statusLabel: 'CURRENT',
    statusColor: 'text-secondary-fixed-dim',
    description: 'Node Operator & Technical Contributor focusing on Fully Homomorphic Encryption (FHE) infrastructures.',
    cardSide: 'left' as const,
  },
  {
    period: '2022 - 2023',
    company: 'Celestia & Cosmos',
    statusLabel: 'PREVIOUS',
    statusColor: 'text-on-surface-variant',
    description: 'Infrastructure lead for modular data availability and cross-chain communication relaying.',
    cardSide: 'right' as const,
  },
  {
    period: '2020 - 2022',
    company: 'Ethereum Validator',
    statusLabel: 'FOUNDATION',
    statusColor: 'text-on-surface-variant',
    description: 'Operating solo-staking infrastructure since the Beacon Chain launch.',
    cardSide: 'left' as const,
  },
]

export const PORTFOLIO = [
  {
    type: 'ARTICLE',
    accentColor: 'text-primary-fixed-dim',
    icon: 'open_in_new',
    iconHover: 'group-hover:rotate-45',
    title: 'Modular vs Monolithic: The Future of Scalability',
    publisher: 'Published on Mirror.xyz',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxYB97GKrAMtzeC_OVy0jhPOax2Dz3nzra-cNaNC1Vb3LKHyGblwUMqvVfRYO4tOxb_R8PC6JkiBJZ5GYxAufV6m2vR624HQ-ry7JvHm5Q94b8jHqmNTXKnEHmAoZZnhKv474vwpLcVZ5VRwOPyOIQhVXPhm4vqZb_0wRR_Xc21lGOvVDbOSoq6F1RLrqVSfwNFpSOGQejQrcbNI5AdAiXgyNYb8pi8U9VyU_h7dU1zF8DYtL398g6LUfgcR-dt3VAwFpCh4cLCNw',
  },
  {
    type: 'VIDEO',
    accentColor: 'text-secondary-fixed-dim',
    icon: 'play_circle',
    iconHover: 'group-hover:scale-125',
    title: 'Demystifying FHE: Privacy in Plain Sight',
    publisher: 'Featured on YouTube',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqa67mlcsIqx1GLFUXB5kZDMRQGk3SJlMXL8--SFNi7BbZuZoio521T2ZhK66fTqH1w-4iEljH-ntPAdAuJtJu3xQfiH6S8qEWT5oACW0XReM27Tx9O6GES8Bx9MX5DP32ik0mcOFNbBjnqptPOdvKdQaPcm3SCvpDomAr8BP9je6p89NN3xGcPXr5v4PxryZ_ChA43GxWewrZj3W1spP9IOfKmoykwhjqMwft6VgRKSVN6XHX57UAHYmepvsX8j9RH3zqLeiwWcI',
  },
  {
    type: 'THREAD',
    accentColor: 'text-tertiary-fixed-dim',
    icon: 'chat',
    iconHover: 'group-hover:-translate-y-1',
    title: 'DAO Governance: Lessons from the Frontlines',
    publisher: 'Viral Analysis on X',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCdaFIzb7g6HvWDHU6HiXzrtJqw_2-vNreyKvdaw_2oFSdrlnkMUuJCIYmc_0xsnRwMspY_jPE8CxxLAPIHZNrq1G_et51LzNbwunU5UzqEbjGlAhplCHPljV71qHelNU_WDZN8bk9KFV2qTJyBcAesd-rMYGbQo679B-Agl_s47WBiHdjwPQvqEbI968lQ3awUL1Z4OQcDLbrrgVMIX_5yCfhUh_8TDFaRHMeczbQRXiMHrSfuSEqy8Ta1y6brXhwVbedWV8w7Us',
  },
]

export const CONTACT = {
  label: '// CONTACT',
  heading: "LET'S BUILD\nTOGETHER",
  email: 'hello@danieln.eth',
  socials: [
    { icon: 'X', label: 'Twitter / X', href: '#' },
    { icon: 'TG', label: 'Telegram', href: '#' },
    { icon: 'IN', label: 'LinkedIn', href: '#' },
  ],
}

export const FOOTER = {
  copy: '© 2024 Daniel N. — Built on the decentralized web.',
  links: [
    { label: 'Explorer', href: '#' },
    { label: 'Github', href: '#' },
    { label: 'Smart Contract', href: '#' },
  ],
}
