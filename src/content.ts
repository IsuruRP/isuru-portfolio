export type Project = {
  number: string
  name: string
  category: string
  summary: string
  contribution: string
  technologies: string[]
  evidence: string[]
  github: string
  tone: 'amber' | 'blue' | 'green' | 'red'
  featured?: boolean
}

export const profile = {
  name: 'Isuru Randika',
  role: 'Software Engineering Undergraduate',
  school: 'SLIIT',
  github: 'https://github.com/IsuruRP',
  linkedin: 'https://www.linkedin.com/in/isuru-randika-797874349',
  introduction:
    'I build full-stack web systems with careful structure—from typed React interfaces to APIs, data models, and the workflows that connect them.',
  about:
    'I am an undergraduate at SLIIT developing practical experience across frontend, backend, and database engineering. My recent work spans commerce, operations, travel, and automated testing—each one a chance to make complex workflows clearer and more dependable.',
  currentFocus: ['Java', 'Web development', 'Database management'],
} as const

export const projects: Project[] = [
  {
    number: '01',
    name: 'ShopEase',
    category: 'Full-stack commerce system',
    summary:
      'An end-to-end commerce application connecting a typed React client to an ASP.NET Core API and SQL Server data layer.',
    contribution:
      'Structured the product as separate API and client applications, with authentication, role-aware protected routes, product and category resources, and query-driven client data fetching.',
    technologies: ['ASP.NET Core', 'React', 'TypeScript', 'SQL Server', 'EF Core', 'React Query'],
    evidence: ['Authentication & roles', 'Product/category APIs', 'Typed client'],
    github: 'https://github.com/IsuruRP/ShopEase',
    tone: 'amber',
    featured: true,
  },
  {
    number: '02',
    name: 'Device Ledger',
    category: 'Inventory & service tracking',
    summary:
      'A JavaScript system for recording office devices and keeping their inventory and service workflows in one place.',
    contribution:
      'Organized the application into dedicated frontend and backend codebases, creating a foundation for operational records and service-log workflows.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Full-stack architecture'],
    evidence: ['Device inventory', 'Service tracking', 'Separated architecture'],
    github: 'https://github.com/IsuruRP/-Office-Device-Inventory-Service-Tracking-System',
    tone: 'blue',
    featured: true,
  },
  {
    number: '03',
    name: 'Ceylon Journey',
    category: 'Travel management platform',
    summary:
      'A PHP-based travel and tourism management project shaped around discovering and organizing Sri Lankan journeys.',
    contribution:
      'Built the web experience across server-rendered PHP, JavaScript interactions, and a responsive CSS presentation layer.',
    technologies: ['PHP', 'JavaScript', 'CSS', 'HTML'],
    evidence: ['Server-rendered flows', 'Travel domain', 'Responsive interface'],
    github: 'https://github.com/IsuruRP/Travel-and-Tourism-Management-System',
    tone: 'green',
  },
  {
    number: '04',
    name: 'Playwright CI Lab',
    category: 'Quality engineering experiment',
    summary:
      'A focused browser-testing repository exploring repeatable Playwright checks inside a continuous integration workflow.',
    contribution:
      'Configured the Playwright test runner, authored browser tests, and connected the suite to a GitHub Actions workflow.',
    technologies: ['Playwright', 'JavaScript', 'GitHub Actions', 'CI'],
    evidence: ['Browser automation', 'CI workflow', 'Repeatable checks'],
    github: 'https://github.com/IsuruRP/playwright-ci-demo',
    tone: 'red',
  },
]

export const skillGroups = [
  {
    number: '01',
    title: 'Interface',
    description: 'Typed, responsive application interfaces with clear states and purposeful interaction.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    number: '02',
    title: 'Systems',
    description: 'Server-side applications, structured APIs, authentication, and domain logic.',
    skills: ['C#', 'ASP.NET Core', 'PHP', 'REST APIs', 'Role-based auth'],
  },
  {
    number: '03',
    title: 'Data & delivery',
    description: 'Relational persistence and the tools used to ship and verify dependable changes.',
    skills: ['SQL Server', 'Entity Framework', 'Git', 'GitHub Actions', 'Playwright'],
  },
]
