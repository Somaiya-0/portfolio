import { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaResearchgate } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { LuArrowUpRight, LuMenu, LuX } from 'react-icons/lu'
import './App.css'

const email = 'somaiiiyaaa@gmail.com'

const links = [
  { label: 'GitHub', Icon: FaGithub, url: 'https://github.com/Somaiya-0' },
  { label: 'LinkedIn', Icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/somaiya-kazi/' },
  { label: 'ResearchGate', Icon: FaResearchgate, url: 'https://www.researchgate.net/profile/Somaiya-Kazi' },
  { label: 'LeetCode', Icon: SiLeetcode, url: 'https://leetcode.com/u/sumaiyakazi/' },
]

const paper = {
  title:
    'Robust Brain Stroke Prediction via Ensemble Machine Learning with Class Imbalance Handling and Threshold Tuning',
  venue: 'IEEE BECITHCON 2025, November 2025',
  doi: 'https://doi.org/10.1109/BECITHCON69222.2025.11504243',
  rg: 'https://www.researchgate.net/publication/404672592_Robust_Brain_Stroke_Prediction_via_Ensemble_Machine_Learning_with_Class_Imbalance_Handling_and_Threshold_Tuning',
}

const projects = [
  {
    title: 'Saybolt Group redesign',
    text: 'A redesign of a company website in React and TypeScript, with plain CSS and design tokens.',
    tags: 'React, TypeScript, Vite',
    url: 'https://github.com/Somaiya-0/saybolt-redesign',
  },
  {
    title: 'Habit Tracker',
    text: 'Users register, log in and track daily habits. Built with Django and Bootstrap.',
    tags: 'Django, Python',
    url: 'https://github.com/Somaiya-0/Habit_Tracker_django_project',
  },
  {
    title: 'Harrell Orthodontics',
    text: 'A full-stack web app with a JavaScript frontend and backend.',
    tags: 'JavaScript, Node.js',
    url: 'https://github.com/Somaiya-0/Harrell-Orthodontics',
  },
  {
    title: 'Cirqly',
    text: 'A social media web app.',
    tags: 'HTML, CSS',
    url: 'https://github.com/Somaiya-0/Social_media_web_app_-Cirqly-',
  },
  {
    title: 'Employee Management',
    text: 'A Django app for managing employee records.',
    tags: 'Django, Python',
    url: 'https://github.com/Somaiya-0/employee_management_django',
  },
  {
    title: "2x2 Rubik's Cube",
    text: "An interactive 2x2 Rubik's Cube written in C with OpenGL and GLUT.",
    tags: 'C, OpenGL',
    url: 'https://github.com/Somaiya-0/2x2-Rubiks-Cube-opengl-glut-project',
  },
]

const highlights = [
  ['2025', 'ICPC Dhaka Regional, 95th of 300+ teams'],
  ['2025', 'Paper published at IEEE BECITHCON'],
  ['2026', 'Champion, 44th Eastern University Intra-University Programming Contest'],
  ['2026', 'Team lead, NASA Space Apps Challenge'],
  ['2026', 'Led my team in five Inter-University Programming Contests'],
  ['2023', 'Student scholar, Design for Bangladesh (supported by Stanford)'],
  ['', 'IT Secretary and Treasurer, IEEE Student Branch'],
  ['', 'IT Secretary, Rover Scout Group'],
]

const skills = [
  ['Languages', 'Python, C, C++, SQL, R, JavaScript, TypeScript'],
  ['Machine learning', 'scikit-learn, TensorFlow, Keras, PyTorch, XGBoost, LightGBM, CatBoost, SHAP, LIME'],
  ['Data', 'pandas, NumPy, Matplotlib, RNA-seq analysis (edgeR, limma, GSEA)'],
  ['Web', 'React, Django, HTML, CSS, Tailwind, Git, Figma'],
]

const nav = ['about', 'research', 'work', 'contact']

export default function App() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className="top">
        <div className="wrap bar">
          <a href="#top" className="brand" onClick={close}>Somaiya Kazi</a>
          <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <LuX /> : <LuMenu />}
          </button>
          <nav className={open ? 'open' : ''}>
            {nav.map((n) => (
              <a key={n} href={`#${n}`} onClick={close}>{n}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap" id="top">
        <section className="hero">
          <p className="where">Dhaka, Bangladesh</p>
          <h1>
            I'm a computer science graduate who builds machine learning models for medical data, and web apps
            on the side.
          </h1>
          <p className="lede">
            I finished my B.Sc. at Eastern University with a 3.93 CGPA. I'm looking for work in AI, software
            or web development, and for research to join.
          </p>
          <p className="actions">
            <a className="btn" href={`mailto:${email}`}>Email me</a>
            <a className="textlink" href="#work">See my work</a>
          </p>
        </section>

        <section id="about">
          <h2>About</h2>
          <div className="prose">
            <p>
              My research is about making machine learning models reliable on medical data, which means
              handling imbalanced classes, choosing thresholds carefully and explaining predictions with SHAP
              and LIME. I also work with gene expression data in R.
            </p>
            <p>
              Outside research I compete in programming contests and usually lead my team. I was IT Secretary
              and Treasurer of the IEEE Student Branch at Eastern University, and I was a scholar in the
              Stanford-supported Design for Bangladesh program, where I met Condoleezza Rice and the CEO of
              Zoom.
            </p>
          </div>
        </section>

        <section id="research">
          <h2>Research</h2>
          <article className="paper">
            <h3>{paper.title}</h3>
            <p className="meta">{paper.venue}</p>
            <p className="plinks">
              <a href={paper.doi} target="_blank" rel="noreferrer">DOI <LuArrowUpRight /></a>
              <a href={paper.rg} target="_blank" rel="noreferrer">ResearchGate <LuArrowUpRight /></a>
            </p>
          </article>
        </section>

        <section id="work">
          <h2>Selected work</h2>
          <ul className="rows">
            {projects.map((p) => (
              <li key={p.title}>
                <a href={p.url} target="_blank" rel="noreferrer" className="row">
                  <span className="rt">
                    <b>{p.title}</b>
                    <LuArrowUpRight />
                  </span>
                  <span className="rd">{p.text}</span>
                  <span className="rg">{p.tags}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="more">
          <h2>Highlights</h2>
          <ul className="years">
            {highlights.map(([y, t]) => (
              <li key={t}>
                <span>{y}</span>
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section id="skills">
          <h2>Tools</h2>
          <dl className="tools">
            {skills.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="big">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <ul className="social">
            {links.map(({ label, Icon, url }) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noreferrer">
                  <Icon /> {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="wrap">© {new Date().getFullYear()} Somaiya Kazi</footer>
    </>
  )
}
