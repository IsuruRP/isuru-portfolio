import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Github,
  Linkedin,
  Menu,
  X,
} from 'lucide-react'
import { profile, projects, skillGroups, type Project } from './content'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <a className="brand focus-ring" href="#top" aria-label="Isuru Randika, back to top">
        <span className="brand-mark">IR</span>
        <span className="brand-text">Isuru Randika</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className="nav-link focus-ring" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="menu-button focus-ring"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item, index) => (
              <a className="mobile-link focus-ring" href={item.href} key={item.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { y: 24 }}
      whileInView={reduceMotion ? {} : { y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function HeroDiagram() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="hero-diagram" aria-hidden="true">
      <div className="diagram-header">
        <span>SYSTEM / IR—01</span>
        <span className="status-dot">AVAILABLE</span>
      </div>
      <div className="diagram-field">
        <motion.div
          className="diagram-orbit orbit-one"
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          <span />
        </motion.div>
        <motion.div
          className="diagram-orbit orbit-two"
          animate={reduceMotion ? {} : { rotate: -360 }}
          transition={{ duration: 34, ease: 'linear', repeat: Infinity }}
        >
          <span />
        </motion.div>
        <div className="diagram-core">
          <Braces size={27} strokeWidth={1.5} />
          <b>BUILD</b>
        </div>
        <span className="axis axis-x">INTERFACE</span>
        <span className="axis axis-y">SYSTEMS</span>
        <div className="coordinate top-left">12.9276° N</div>
        <div className="coordinate bottom-right">80.2396° E</div>
      </div>
      <div className="diagram-footer">
        <span>REACT / .NET / SQL</span>
        <span>2026</span>
      </div>
    </div>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  const intro = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: reduceMotion ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] as const },
    }),
  }

  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <motion.div className="eyebrow" custom={0} variants={intro} initial="hidden" animate="visible">
          <span className="eyebrow-line" />
          SLIIT undergraduate · Sri Lanka
        </motion.div>
        <motion.h1 custom={1} variants={intro} initial="hidden" animate="visible">
          Thoughtful software,
          <span>built end to end.</span>
        </motion.h1>
        <motion.p className="hero-intro" custom={2} variants={intro} initial="hidden" animate="visible">
          {profile.introduction}
        </motion.p>
        <motion.div className="hero-actions" custom={3} variants={intro} initial="hidden" animate="visible">
          <a className="button button-primary focus-ring" href="#work">
            Explore selected work <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary focus-ring" href="#contact">
            Start a conversation
          </a>
        </motion.div>
      </div>
      <motion.div
        className="hero-visual"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroDiagram />
      </motion.div>
      <div className="hero-rail" aria-label="Profile links">
        <ExternalLink href={profile.github} className="rail-link focus-ring">
          <Github size={17} aria-hidden="true" /> GitHub
        </ExternalLink>
        <ExternalLink href={profile.linkedin} className="rail-link focus-ring">
          <Linkedin size={17} aria-hidden="true" /> LinkedIn
        </ExternalLink>
      </div>
    </section>
  )
}

function SectionHeading({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: string; description: string }) {
  return (
    <Reveal className="section-heading">
      <div className="section-index">{index}</div>
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="section-description">{description}</p>
    </Reveal>
  )
}

function CommerceVisual() {
  return (
    <div className="project-visual commerce-visual" aria-label="Abstract interface map for ShopEase">
      <div className="window-bar"><span /><span /><span /><b>SHOP / INVENTORY</b></div>
      <div className="commerce-layout">
        <div className="mini-sidebar">
          <span className="mini-logo" />
          <i className="active" /><i /><i /><i />
        </div>
        <div className="commerce-main">
          <div className="commerce-top"><span>Products</span><b>+ New item</b></div>
          <div className="metric-row">
            <div><small>CATALOG</small><strong>Product</strong></div>
            <div><small>ACCESS</small><strong>Role</strong></div>
            <div><small>STATUS</small><strong>Live</strong></div>
          </div>
          <div className="product-grid"><span /><span /><span /><span /></div>
        </div>
      </div>
      <div className="visual-caption"><span>CLIENT</span><i /><span>API</span><i /><span>DATA</span></div>
    </div>
  )
}

function DeviceVisual() {
  return (
    <div className="project-visual device-visual" aria-label="Abstract inventory service timeline">
      <div className="device-title"><span>DEVICE / 024</span><b>IN SERVICE</b></div>
      <div className="device-body">
        <div className="device-outline"><span /><span /><b>IT</b></div>
        <div className="service-timeline">
          <div><i /><span><small>REGISTERED</small>Inventory record</span></div>
          <div><i /><span><small>INSPECTED</small>Condition logged</span></div>
          <div className="current"><i /><span><small>SERVICE</small>Maintenance event</span></div>
        </div>
      </div>
      <div className="device-meta"><span>ID / LOCATION / OWNER</span><span>UPDATED</span></div>
    </div>
  )
}

function ProjectArticle({ project, index }: { project: Project; index: number }) {
  const visual = project.name === 'ShopEase' ? <CommerceVisual /> : <DeviceVisual />
  return (
    <Reveal className={`project-article tone-${project.tone}`}>
      <div className="project-meta-row">
        <span>{project.number} / {project.category}</span>
        <span>SELECTED WORK</span>
      </div>
      <div className={`project-layout ${index % 2 ? 'project-layout-reverse' : ''}`}>
        <div className="project-copy">
          <h3>{project.name}</h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-contribution">{project.contribution}</p>
          <div className="evidence-list">
            {project.evidence.map((item) => (
              <span key={item}><Check size={14} aria-hidden="true" />{item}</span>
            ))}
          </div>
          <div className="tech-list" aria-label="Technologies used">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <ExternalLink href={project.github} className="text-link focus-ring">
            View repository <ArrowUpRight size={17} aria-hidden="true" />
          </ExternalLink>
        </div>
        {visual}
      </div>
    </Reveal>
  )
}

function SmallProject({ project }: { project: Project }) {
  return (
    <Reveal className={`small-project tone-${project.tone}`}>
      <div className="small-project-top">
        <span>{project.number}</span>
        <ExternalLink href={project.github} className="icon-link focus-ring">
          <ArrowUpRight aria-label={`Open ${project.name} repository`} />
        </ExternalLink>
      </div>
      <p className="section-kicker">{project.category}</p>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <div className="small-project-footer">
        {project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}
      </div>
    </Reveal>
  )
}

function Work() {
  const featured = projects.filter((project) => project.featured)
  const supporting = projects.filter((project) => !project.featured)
  return (
    <section className="work section-shell" id="work">
      <SectionHeading
        index="01"
        eyebrow="Selected work"
        title="Systems with a reason to exist."
        description="A focused selection of full-stack products and engineering experiments, presented from the public source behind each project."
      />
      <div className="featured-projects">
        {featured.map((project, index) => <ProjectArticle project={project} index={index} key={project.name} />)}
      </div>
      <div className="supporting-grid">
        {supporting.map((project) => <SmallProject project={project} key={project.name} />)}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section-shell" id="about">
      <SectionHeading
        index="02"
        eyebrow="About"
        title="Learning by building the whole system."
        description="I work across the boundaries between interface, server, and data—because the best product decisions usually live in the connections."
      />
      <div className="about-grid">
        <Reveal className="about-statement">
          <p>{profile.about}</p>
          <div className="signature-line"><span>IR</span><i /></div>
        </Reveal>
        <Reveal className="focus-panel" delay={0.08}>
          <p className="section-kicker">Current learning loop</p>
          <ol>
            {profile.currentFocus.map((item, index) => (
              <li key={item}><span>0{index + 1}</span><b>{item}</b></li>
            ))}
          </ol>
          <p className="focus-note">Verified from Isuru's public GitHub profile.</p>
        </Reveal>
        <Reveal className="principles-panel" delay={0.14}>
          <div><span>01</span><p><b>Clarity first.</b> Structure the system so the next decision is easier to make.</p></div>
          <div><span>02</span><p><b>Build through.</b> Understand what happens from the first click to the final data write.</p></div>
          <div><span>03</span><p><b>Verify often.</b> Small, repeatable checks turn working code into dependable software.</p></div>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills section-shell" id="skills">
      <SectionHeading
        index="03"
        eyebrow="Capabilities"
        title="A practical full-stack toolkit."
        description="Technologies evidenced across public repositories, grouped by the part of the product they help deliver."
      />
      <div className="skills-list">
        {skillGroups.map((group, index) => (
          <Reveal className="skill-row" key={group.title} delay={index * 0.05}>
            <span className="skill-number">{group.number}</span>
            <div className="skill-title"><h3>{group.title}</h3><p>{group.description}</p></div>
            <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-shell" id="contact">
      <Reveal className="contact-card">
        <div className="contact-grid-mark" aria-hidden="true" />
        <div className="contact-index">04 / CONTACT</div>
        <p className="section-kicker">Open to internships and junior opportunities</p>
        <h2>Let’s build something<br /><span>worth using.</span></h2>
        <p className="contact-copy">
          If you are building a thoughtful product and need an engineer who wants to understand the whole system, I would like to hear about it.
        </p>
        <div className="contact-actions">
          <ExternalLink href={profile.linkedin} className="button button-light focus-ring">
            Connect on LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
          </ExternalLink>
          <ExternalLink href={profile.github} className="button button-outline-light focus-ring">
            Explore GitHub <Github size={17} aria-hidden="true" />
          </ExternalLink>
        </div>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div><span className="brand-mark">IR</span><p>Designed and built with care.</p></div>
      <p>© {new Date().getFullYear()} Isuru Randika</p>
      <a href="#top" className="back-to-top focus-ring">Back to top <ArrowDown size={15} className="arrow-up" aria-hidden="true" /></a>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
