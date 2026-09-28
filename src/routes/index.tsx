import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BarChart3, Box, Clock3, Code2, HeartHandshake, Leaf, Lightbulb, MessageSquare, Rocket, ShieldCheck, UserRound } from "lucide-react";
import { useRef } from "react";

import airbnbImage from "../assets/airbnb-prediction.png";
import cryptoImage from "../assets/crypto-identification.png";
import kisanImage from "../assets/kisan-sathi.png";
import teamImage from "../assets/anni-team.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Featured Projects | Anni Web Solutions" },
      {
        name: "description",
        content: "Explore custom platforms, websites, and AI solutions built by Anni Web Solutions.",
      },
      { property: "og:title", content: "Featured Projects | Anni Web Solutions" },
      {
        property: "og:description",
        content: "Explore custom platforms, websites, and AI solutions built by Anni Web Solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "KisanSathi",
    description: "AI-powered agricultural assistant platform to help farmers with crop recommendations, disease detection, weather alerts and more.",
    image: kisanImage,
    label: "AI/ML Solution",
    tone: "green",
    icon: Leaf,
    tags: ["React", "TypeScript", "Flask", "MongoDB", "AI/ML"],
  },
  {
    title: "Airbnb Price Prediction System",
    description: "Machine learning based platform to predict Airbnb property prices using 20,000+ listings and multiple ML models.",
    image: airbnbImage,
    label: "Machine Learning",
    tone: "gold",
    icon: BarChart3,
    tags: ["Python", "Machine Learning", "Flask", "Data Analysis"],
  },
  {
    title: "AI-based Crypto Primitive Identification",
    description: "AI/ML solution to identify and classify crypto primitives from smart contracts, built for SIH 2025.",
    image: cryptoImage,
    label: "AI / Blockchain",
    tone: "teal",
    icon: Box,
    tags: ["Python", "AI/ML", "NLP", "Smart Contracts", "SIH 2025"],
  },
] as const;

const processSteps = [
  { number: "01", Icon: MessageSquare, title: "Discover", text: "We understand your goals, requirements and challenges." },
  { number: "02", Icon: Lightbulb, title: "Plan", text: "We create a clear roadmap with the right technology and strategy." },
  { number: "03", Icon: Code2, title: "Develop", text: "Our team builds, tests and keeps you updated at every step." },
  { number: "04", Icon: Rocket, title: "Launch & Grow", text: "We deploy and support you even after launch to help you grow." },
];

function BrandMark() {
  return (
    <a href="#" className="brand" aria-label="Anni Web Solutions home">
      <span className="brand-symbol" aria-hidden="true"><i /><b /></span>
      <span><strong>Anni</strong><small>WEB SOLUTIONS PVT. LTD.</small></span>
    </a>
  );
}

function Index() {
  const scroller = useRef<HTMLDivElement>(null);
  const move = (direction: number) => scroller.current?.scrollBy({ left: direction * 360, behavior: "smooth" });

  return (
    <main className="site-shell">
      <header className="topbar">
        <BrandMark />
        <nav className="nav-links" aria-label="Main navigation">
          {['Home', 'About', 'Services', 'Projects', 'Why Us', 'Blog', 'Contact'].map((item) => (
            <a key={item} className={item === 'Home' ? 'active' : ''} href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
          ))}
        </nav>
        <a className="primary-button header-cta" href="#contact">Get a Free Quote <ArrowRight size={17} /></a>
      </header>

      <section className="projects-section" id="projects">
        <div className="section-head">
          <div>
            <div className="eyebrow">FEATURED PROJECTS <span /></div>
            <h1>Work That <em>Speaks for Itself.</em></h1>
            <p>Explore some of our most impactful custom platforms, websites, and<br className="desktop-break" /> AI solutions built for real-world business needs.</p>
          </div>
          <div className="scribble scribble-top">Ideas<br />Build<br />Better<br />Businesses<i /></div>
          <a className="outline-button" href="#project-list">View All Projects <ArrowRight size={18} /></a>
        </div>

        <div className="carousel-wrap" id="project-list">
          <button className="circle-button previous" onClick={() => move(-1)} aria-label="Previous projects"><ArrowLeft size={22} /></button>
          <div className="project-grid" ref={scroller}>
            {projects.map(({ title, description, image, label, tone, icon: Icon, tags }) => (
              <article className="project-card" key={title}>
                <div className="project-image">
                  <img src={image} alt={`${title} project preview`} />
                  <span className={`project-label ${tone}`}><Icon size={15} /> {label}</span>
                </div>
                <div className="card-body">
                  <div className="title-row"><h2>{title}</h2><ArrowRight size={20} /></div>
                  <p>{description}</p>
                  <div className="tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="primary-button card-cta" href="#contact">View Case Study <ArrowRight size={17} /></a>
                </div>
              </article>
            ))}
          </div>
          <button className="circle-button next" onClick={() => move(1)} aria-label="Next projects"><ArrowRight size={22} /></button>
        </div>

        <div className="impact-bar">
          <div className="impact-intro">
            <div className="impact-icon"><BarChart3 size={28} /></div>
            <div><h2>Driven by Real Impact</h2><p>Projects that solve real problems and create value for businesses.</p></div>
          </div>
          <div className="metric"><strong>10+</strong><span>Projects Delivered</span></div>
          <div className="metric"><strong>5+</strong><span>Domains Covered</span></div>
          <div className="metric"><strong>100%</strong><span>Client Satisfaction</span></div>
          <div className="scribble scribble-bottom">Same<br />Team<br />Bigger<br />Goals<i /></div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-copy">
          <div className="eyebrow">ABOUT US <span /></div>
          <h2 className="about-title">A Team That<br /><em>Builds for Impact.</em></h2>
          <p>Anni Web Solutions Pvt. Ltd. is a tech company focused on creating high-quality websites, web apps and custom software that help businesses grow. We combine clean design, solid development and a practical approach to deliver real results.</p>
          <div className="values">
            <div><UserRound /><span>Client-Centric<br />Approach</span></div>
            <div><ShieldCheck /><span>Quality &amp;<br />Transparency</span></div>
            <div><Clock3 /><span>On-Time<br />Delivery</span></div>
            <div><HeartHandshake /><span>Long-Term<br />Partnerships</span></div>
          </div>
          <div className="about-actions">
            <a className="primary-button story-button" href="#process">Our Story <ArrowRight size={16} /></a>
            <div className="scribble about-note">People<br />Ideas<br />Technology<br />Growth<i /></div>
          </div>
        </div>
        <div className="team-photo">
          <img src={teamImage} alt="Anni Web Solutions team collaborating around a laptop" />
        </div>
        <div className="about-stats">
          <div><strong>50+</strong><span>Projects Delivered</span></div>
          <div><strong>30+</strong><span>Happy Clients</span></div>
          <div><strong>5+</strong><span>Industries Served</span></div>
          <div><strong>100%</strong><span>Client Satisfaction</span></div>
          <blockquote>“Great team, clear communication<br />and amazing results. Highly recommended!”<cite>— Our Client</cite></blockquote>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-head">
          <div>
            <div className="eyebrow">OUR PROCESS <span /></div>
            <h2>From Idea to <em>Impact</em></h2>
            <p>A simple and transparent process to bring your ideas to life.</p>
          </div>
          <div className="scribble process-note">Ideas<br />into<br />Reality<i /></div>
        </div>
        <div className="process-grid">
          {processSteps.map(({ number, Icon, title, text }) => (
            <article className="process-card" key={number}>
              <div className="process-card-top"><span>{number}</span><Icon size={25} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
          <a className="primary-button start-button" href="#contact">Start Your Project <ArrowRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}