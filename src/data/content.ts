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
    period: '2023 – Present',
    company: 'Fhenix & Arcium',
    role: 'FHE Infrastructure Specialist',
    description: 'Operating validator nodes for Fully Homomorphic Encryption (FHE) networks, enabling confidential smart contracts and privacy-preserving computation at scale.',
    tags: ['FHE', 'Privacy Layer', 'Node Ops'],
    align: 'right' as const,
  },
  {
    period: '2022 – 2023',
    company: 'Celestia & Cosmos',
    role: 'Data Availability Node Operator',
    description: 'Running light nodes and validators on Celestia\'s modular data availability layer, and participating in Cosmos IBC ecosystem governance.',
    tags: ['Modular', 'IBC', 'DA Layer'],
    align: 'left' as const,
  },
  {
    period: '2020 – 2022',
    company: 'Ethereum Validator',
    role: 'Solo Staker & Educator',
    description: 'Early solo-staker on the Ethereum Beacon Chain post-Merge. Created educational content helping hundreds of users set up their own validators.',
    tags: ['ETH 2.0', 'PoS', 'Education'],
    align: 'right' as const,
  },
]

export const PORTFOLIO = [
  {
    type: 'Article',
    typeIcon: 'article',
    title: 'Modular vs Monolithic: The Great Blockchain Debate',
    description: 'A deep-dive into the architectural trade-offs between monolithic blockchains and modular stacks like Celestia + rollups.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx3g0P2LJzQKmGLSZhxhEbzI9qNAY5GbXIVNxbJq4fGGMq_PkKQj-VGgJqT_3RFRy4A3Rqh0i5pVrOlYT3jIRyOHJg3XLQ8XOC6V8C8OVfNLr4Jn0WExibqZzLwetQxZN4hbC4IFVCPnZfGqSsD8S0S2JC3u3nxkLLvhS4N87nz6SfEpTt3J--x2IaXR1sFCB9AJP7oPEDXGkYq6YNk3IqSXbH4zyGvfq-LPiJ_Pb0XyYRaaxj8tDpHFAF0OhYrRkMFvT93cY6NIRmhlH3BGKAQbh4KJkJSK8BPuTHPT5V4ZZ_9a-fT6TiSS7qZEH4OzKVa-eFthh8Lqf-jZXpGUj26b_dFIlv6MFCuPi9rI6dTGHpf0Q',
    accent: 'cyan',
  },
  {
    type: 'Video',
    typeIcon: 'play_circle',
    title: 'FHE & Privacy: The Next Frontier in Web3',
    description: 'An explainer video covering Fully Homomorphic Encryption and how it enables confidential computation on public blockchains.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa8P6k1JvEJsqfBhYJBbFHV78EB_aVqkFGZzJ9lIKMaUG3rAVIgSEZIovJlJBh0l3CmI4JgSmN5YxiWEqJQFMkiIiLq6TMD_vfMHV6j1cDOkiD5aB7GVzfMY-vPygHRRrz_UXgTuQlc4NhO1UJUbq8nywPM0K7-8G_xEEMUV5z6z1eGXgxr_TUVVZqMpywjNGE9s7NuK8j5boBuDlRCsEdePbj3t2MSaZnGcYn4vN3SqSjwdvfEHqoFf2LPJB3jdMRzh-oc0OQNAJM3D2pWKJGmcpGHJaLaFioTZDEv0aTGgPTkJFmq4xmEk7rHqoKMzp3zPzNYJyf7IqrAzVP9bqfAYJhpM5IIyIFWCUC5oVlTjVJ76zN-6A',
    accent: 'green',
  },
  {
    type: 'Thread',
    typeIcon: 'forum',
    title: 'DAO Governance: Lessons from 3 Years On-Chain',
    description: 'A viral thread covering insights from participating in governance across multiple DAOs — what works, what fails, and why voter apathy is a solvable problem.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJPzJWA3pIRKJ2s3GCbPvIlk6Oi-0Lzf7J1IJL-G7XKRZ8mAaCFpnH7LYLB_yJ_F-H1UMuGJmHLJVs9MYpFVhU6oHkdv-1RHTONg3nfgzS5WLgFWCbhm9gg8I17S_ZWPA93uJPg4OM7CWGMrTEfJb5bU8PfNUbhbELBhEd-t5P3I-hCaQXXC3-hGy4ZRfKMCFWPHU_1GrJVKR1dI2rMbFPiDwTnnXizpzrJBIDfkwWJrQM0pqSe_4dP0_O19u7MbfM37sGVgOJNdVMSIMmqIhH4LG0Kf9tSSLJ0a9K5H5zZ4WyKlv_d77-wCUOkPlGaGE6HH3H5TZGO1KJvB5X5cE4FhxB_dJvC5xCCrXPFe4P1fq6Dg',
    accent: 'yellow',
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
