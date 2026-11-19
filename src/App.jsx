import { useEffect, useState } from 'react'
import {
  LuFileText, LuMedal, LuTrophy, LuUsers, LuRocket, LuZap, LuTent, LuGraduationCap,
  LuFolderGit2, LuArrowUpRight, LuCheck, LuMail, LuMenu, LuX, LuBookOpen,
} from 'react-icons/lu'
import { FaGithub, FaLinkedinIn, FaResearchgate } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import './App.css'

const data = {
  name: 'Somaiya Kazi',
  title: 'CSE Graduate · Machine Learning & Web Developer',
  tagline:
    'I build reliable ML models for medical data and ship web apps with React and Django.',
  about:
    "I'm a Computer Science and Engineering graduate from Eastern University, passionate about AI and technology. I want to help solve global challenges in healthcare, sustainability and technology using machine learning, programming and human-centered design. My research focuses on reliable ML models for medical data, and I'm looking for hands-on opportunities in AI, software and web development, and for research collaborations.",
  stats: [
    { value: '3.93', label: 'CGPA / 4.00' },
    { value: '8', label: 'Contests, 2025 to 2026' },
    { value: 'IEEE', label: 'Published paper' },
    { value: '5+', label: 'Inter-university contests' },
  ],
  highlights: [
    { icon: LuFileText, text: 'Published at IEEE BECITHCON 2025 on brain stroke prediction' },
    { icon: LuMedal, text: 'ICPC Asia Dhaka Regional 2025: 96th of 313 teams' },
    { icon: LuTrophy, text: 'Champion, 44th Eastern University Intra-University Programming Contest' },
    { icon: LuUsers, text: 'Led my team in five Inter-University Programming Contests' },
    { icon: LuRocket, text: 'Led a team in the NASA Space Apps Challenge 2026' },
    { icon: LuZap, text: 'IT Secretary and Treasurer, IEEE Student Branch' },
    { icon: LuTent, text: 'IT Secretary, Rover Scout Group' },
    { icon: LuGraduationCap, text: 'Scholar, Stanford-supported Design for Bangladesh program' },
  ],
  publication: {
    title:
      'Robust Brain Stroke Prediction via Ensemble Machine Learning with Class Imbalance Handling and Threshold Tuning',
    venue:
      '2025 IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)',
    date: 'November 2025',
    doi: 'https://doi.org/10.1109/BECITHCON69222.2025.11504243',
    researchgate:
      'https://www.researchgate.net/publication/404672592_Robust_Brain_Stroke_Prediction_via_Ensemble_Machine_Learning_with_Class_Imbalance_Handling_and_Threshold_Tuning',
  },
  skills: [
    { group: 'Languages', items: ['Python', 'C', 'C++', 'SQL', 'R', 'JavaScript', 'TypeScript'] },
    {
      group: 'ML & AI',
      items: ['scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'XGBoost', 'LightGBM', 'CatBoost', 'SHAP', 'LIME'],
    },
    { group: 'Data & Bioinformatics', items: ['pandas', 'NumPy', 'Matplotlib', 'RNA-seq', 'edgeR', 'limma', 'GSEA'] },
    { group: 'Web & Tools', items: ['React', 'Django', 'HTML & CSS', 'Tailwind', 'Git', 'Figma'] },
  ],
  projects: [
    {
      title: 'Saybolt Group Redesign',
      description: 'A website redesign built with React, TypeScript and Vite, using plain CSS with design tokens.',
      tags: ['React', 'TypeScript', 'Vite'],
      link: 'https://github.com/Somaiya-0/saybolt-redesign',
    },
    {
      title: 'Harrell Orthodontics',
      description: 'A full-stack web app with a JavaScript frontend and backend.',
      tags: ['JavaScript', 'Node.js'],
      link: 'https://github.com/Somaiya-0/Harrell-Orthodontics',
    },
    {
      title: 'Cirqly',
      description: 'A social media web app.',
      tags: ['HTML', 'Web App'],
      link: 'https://github.com/Somaiya-0/Social_media_web_app_-Cirqly-',
    },
    {
      title: 'Habit Tracker',
      description: 'A Django app where users register, log in and track daily habits, with a Bootstrap UI.',
      tags: ['Django', 'Python', 'Bootstrap'],
      link: 'https://github.com/Somaiya-0/Habit_Tracker_django_project',
    },
    {
      title: 'Employee Management',
      description: 'A Django application for managing employee records.',
      tags: ['Django', 'Python'],
      link: 'https://github.com/Somaiya-0/employee_management_django',
    },
    {
      title: "2x2 Rubik's Cube",
      description: "An interactive 2x2 Rubik's Cube built in C with OpenGL and GLUT.",
      tags: ['C', 'OpenGL'],
      link: 'https://github.com/Somaiya-0/2x2-Rubiks-Cube-opengl-glut-project',
    },
  ],
  email: 'somaiiiyaaa@gmail.com',
  links: [
    { label: 'GitHub', Icon: FaGithub, url: 'https://github.com/Somaiya-0' },
    { label: 'LinkedIn', Icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/somaiya-kazi/' },
    { label: 'ResearchGate', Icon: FaResearchgate, url: 'https://www.researchgate.net/profile/Somaiya-Kazi' },
    { label: 'LeetCode', Icon: SiLeetcode, url: 'https://leetcode.com/u/sumaiyakazi/' },
  ],
}


const post = (id) => `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`

const contests = [
  {
    id: 'icpc-dhaka-2025',
    event: 'ICPC Asia Dhaka Regional 2025',
    team: 'EU_parina_kichu',
    rank: '96th',
    of: 'of 313 teams',
    solved: 3,
    badge: 'Biggest Rank Climber & Biggest Rating Gainer',
    note: 'Qualified from the online preliminary (2 solved), then finished 96th onsite. We topped the Biggest Rank Climber and Biggest Rating Gainer boards on the BCS IUPC Slots Allocation leaderboard, and our team name won 3rd prize.',
  },
  {
    id: 'eu-intra-44',
    event: '44th Eastern University Intra-University Programming Contest (Level 2)',
    team: 'Champion',
    rank: '1st',
    of: 'Champion',
    solved: 'All',
    badge: 'Champion',
    note: 'Solved every problem and won. It was my last intra-university contest.',
    url: post('7498867853144666112'),
  },
  {
    id: 'nasa-space-apps',
    event: 'NASA Space Apps Challenge 2026',
    team: 'Confused Unga Bunga',
    rank: 'Lead',
    of: 'Team lead',
    badge: 'Team lead · Voice-over',
    note: 'Led a team of five building Mission Mohakash, a 3D space survival game that trains junior astronauts through six missions on the Moon and Mars using NASA open data. I coordinated the team and recorded the voice-over for our videos.',
    url: post('7527369380809125889'),
  },
  {
    id: 'ieeextreme-19',
    event: 'IEEEXtreme 19.0',
    team: '24-hour global contest',
    rank: '27th',
    of: 'in Bangladesh',
    badge: '4204th globally',
    note: 'A 24-hour programming contest with teams from around the world.',
  },
  {
    id: 'duet-iupc-2026',
    event: 'DUET IUPC 2026',
    team: 'Love_DZB',
    rank: '82nd',
    of: 'of 140 teams',
    solved: 5,
    note: 'Our strongest inter-university result by problems solved.',
    url: post('7477289934949847040'),
  },
  {
    id: 'ndub-iupc',
    event: 'NDUB Inter-University Programming Contest',
    team: 'EU_meow',
    rank: '40th',
    of: 'of 85 teams',
    solved: 3,
    note: 'Helped Eastern University climb to 31st in the BCS IUPC Slots Allocation university ranking.',
  },
  {
    id: 'buet-iupc-2026',
    event: 'BUET IUPC 2026',
    team: 'EU_parina_kichu',
    rank: '85th',
    of: 'of 110 teams',
    solved: 4,
    note: 'A tough, highly competitive field.',
  },
  {
    id: 'sust-iupc-2026',
    event: 'SUST IUPC 2026',
    team: 'Eastern University',
    rank: '92nd',
    of: 'of 130 teams',
    solved: 2,
    note: 'My last IUPC. We did not perform as we hoped, but I learned a lot.',
    url: post('7482431983672033280'),
  },
]

const photos = import.meta.glob('./assets/contests/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
const photoFor = (id) => Object.entries(photos).find(([k]) => k.includes(`/${id}`))?.[1]

const sections = ['about', 'highlights', 'contests', 'research', 'skills', 'projects', 'contact']

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Title({ children, n }) {
  return (
    <div className="title reveal">
      <span className="num">0{n}</span>
      <h3>{children}</h3>
      <span className="line" />
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useReveal()

  return (
    <>
      <div className="bg" aria-hidden="true">
        <i className="blob b1" />
        <i className="blob b2" />
        <i className="blob b3" />
        <i className="grid-bg" />
      </div>

      <header className="nav">
        <a href="#top" className="logo">
          <span className="logo-mark">SK</span>
          {data.name}
        </a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <LuX /> : <LuMenu />}
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          {sections.map((s) => (
            <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}>
              {s}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <span className="pill">
            <i className="dot" /> Open to AI, software & research opportunities
          </span>
          <h1>
            Hi, I'm <span className="grad">{data.name}</span>
          </h1>
          <h2>{data.title}</h2>
          <p className="tagline">{data.tagline}</p>
          <div className="cta">
            <a className="btn primary" href="#projects">View my work</a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
          <div className="stats">
            {data.stats.map((s) => (
              <div className="stat" key={s.label}>
                <b className="grad">{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about">
          <Title n={1}>About me</Title>
          <div className="glass about reveal">
            <p>{data.about}</p>
          </div>
        </section>

        <section id="highlights">
          <Title n={2}>Highlights</Title>
          <div className="hl-grid">
            {data.highlights.map((h, i) => (
              <div className="glass hl reveal" style={{ transitionDelay: `${i * 50}ms` }} key={h.text}>
                <span className="ico"><h.icon /></span>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contests">
          <Title n={3}>Contest journey</Title>
          <p className="intro reveal">
            Competitive programming has been a big part of my university life. I led my team in every contest
            I entered.
          </p>
          <div className="cp-grid">
            {contests.map((c) => {
              const img = photoFor(c.id)
              return (
                <article className="glass cp reveal" key={c.id}>
                  {img && <img className="cp-img" src={img} alt={c.event} loading="lazy" />}
                  <div className="cp-head">
                    <div className="cp-rank">
                      <b className="grad">{c.rank}</b>
                      <span>{c.of}</span>
                    </div>
                    <div className="cp-meta">
                      <h4>{c.event}</h4>
                      <p className="cp-team">Team {c.team}</p>
                    </div>
                  </div>
                  <ul className="chips small">
                    {c.solved !== undefined && (
                      <li><LuCheck /> {c.solved === 'All' ? 'Solved all problems' : `${c.solved} problems solved`}</li>
                    )}
                    {c.badge && <li>{c.badge}</li>}
                  </ul>
                  <p>{c.note}</p>
                  {c.url && (
                    <a className="cp-link" href={c.url} target="_blank" rel="noreferrer">
                      <FaLinkedinIn /> View post <LuArrowUpRight />
                    </a>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section id="research">
          <Title n={4}>Research</Title>
          <article className="glass paper reveal">
            <span className="badge">IEEE · {data.publication.date}</span>
            <h4>{data.publication.title}</h4>
            <p>{data.publication.venue}</p>
            <div className="cta">
              <a className="btn primary sm" href={data.publication.doi} target="_blank" rel="noreferrer"><LuBookOpen /> Read via DOI</a>
              <a className="btn ghost sm" href={data.publication.researchgate} target="_blank" rel="noreferrer"><FaResearchgate /> ResearchGate</a>
            </div>
          </article>
        </section>

        <section id="skills">
          <Title n={5}>Skills</Title>
          <div className="skill-grid">
            {data.skills.map((g, i) => (
              <div className={`glass skill c${i % 4} reveal`} key={g.group}>
                <h4>{g.group}</h4>
                <ul className="chips">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <Title n={6}>Projects</Title>
          <div className="grid">
            {data.projects.map((p, i) => (
              <article className={`glass card c${i % 4} reveal`} key={p.title}>
                <div className="card-top">
                  <span className="folder"><LuFolderGit2 /></span>
                  <a href={p.link} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`}><LuArrowUpRight /></a>
                </div>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <ul className="chips small">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <Title n={7}>Contact</Title>
          <div className="glass contact reveal">
            <h4>Let's build something great together</h4>
            <p>Looking for an AI, software or research opportunity? My inbox is open.</p>
            <a className="btn primary" href={`mailto:${data.email}`}><LuMail /> {data.email}</a>
            <div className="socials">
              {data.links.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                  <l.Icon /> {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} {data.name} · Built with React
      </footer>
    </>
  )
}
