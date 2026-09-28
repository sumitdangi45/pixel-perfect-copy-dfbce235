import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BarChart3, Box, Clock3, Code2, Github, Headphones, HeartHandshake, Instagram, Leaf, Lightbulb, LockKeyhole, Mail, MapPin, Menu, MessageSquare, Phone, Rocket, ShieldCheck, UserRound, Youtube } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import airbnbImage from "../assets/airbnb-prediction.png";
import locationImage from "../assets/bhopal-location.png";
import officeImage from "../assets/contact-office.png";
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

const contactDetails = [
  { Icon: MapPin, title: "Our Office", detail: "Bhopal, Madhya Pradesh, India" },
  { Icon: Mail, title: "Email Us", detail: "hello@anniwebsolutions.com" },
  { Icon: Phone, title: "Call Us", detail: "+91 98765 43210" },
  { Icon: Clock3, title: "Working Hours", detail: "Mon - Sat, 10:00 AM - 7:00 PM" },
];

function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <h2>Tell Us About Your Project</h2>
      <p>Fill in the details and we’ll get back to you within 24 hours.</p>
      <div className="form-grid">
        <label>Your Name <b>*</b><input required placeholder="Enter your name" /></label>
        <label>Your Email <b>*</b><input required type="email" placeholder="Enter your email" /></label>
        <label>Your Phone <b>*</b><input required type="tel" placeholder="Enter your phone number" /></label>
        <label>Business/Company (Optional)<input placeholder="Enter company name" /></label>
        <label className="form-wide">Service You Need <b>*</b><select required defaultValue=""><option value="" disabled>Select a service</option><option>Website Development</option><option>Web Application</option><option>Mobile App Development</option><option>AI &amp; ML Solutions</option></select></label>
        <label className="form-wide">Project Details <b>*</b><textarea required placeholder="Tell us about your project, goals and requirements..." /></label>
        <label>Estimated Budget (Optional)<select defaultValue=""><option value="" disabled>Select budget range</option><option>₹25k – ₹50k</option><option>₹50k – ₹1L</option><option>₹1L+</option></select></label>
        <label>Preferred Timeline (Optional)<select defaultValue=""><option value="" disabled>Select timeline</option><option>1 month</option><option>2–3 months</option><option>3+ months</option></select></label>
      </div>
      <Button type="submit" className="send-button">Send Message <ArrowRight /></Button>
      <small><LockKeyhole /> Your information is safe with us. We respect your privacy.</small>
    </form>
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
        <a className="primary-button header-cta" href="#contact">
          <span>Get a Free Quote</span><ArrowRight className="header-arrow" size={17} /><Menu className="menu-icon" size={24} />
        </a>
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
          <div><strong>50+</strong><span className="desktop-stat-label">Projects Delivered</span><span className="mobile-stat-label">Projects</span></div>
          <div><strong>30+</strong><span className="desktop-stat-label">Happy Clients</span><span className="mobile-stat-label">Clients</span></div>
          <div><strong>5+</strong><span className="desktop-stat-label">Industries Served</span><span className="mobile-stat-label">Industries</span></div>
          <div><strong>100%</strong><span className="desktop-stat-label">Client Satisfaction</span><span className="mobile-stat-label">Satisfaction</span></div>
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

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <div className="eyebrow">GET IN TOUCH <span /></div>
          <h2>Let’s Discuss<br /><em>Your Project</em></h2>
          <p>Have an idea in mind? We’d love to hear about it. Share your requirements and our team will get back to you with the best solution.</p>
          <div className="contact-details">
            {contactDetails.map(({ Icon, title, detail }) => (
              <div key={title}><span><Icon /></span><p><strong>{title}</strong><small>{detail}</small></p></div>
            ))}
          </div>
          <div className="scribble contact-note">Let’s<br />Build<br />Together<i /></div>
        </div>
        <ContactForm />
        <aside className="contact-visual">
          <img src={officeImage} alt="Modern Anni Web Solutions office workspace" />
          <div className="consultation"><span><Headphones /></span><p><strong>Free Consultation</strong><small>Talk to our experts and get the right guidance for your project.</small></p></div>
        </aside>
      </section>

      <section className="location-section">
        <img src={locationImage} alt="Map showing the Anni Web Solutions office in Bhopal" />
        <div className="location-copy">
          <div className="eyebrow">OUR LOCATION <span /></div>
          <h2>Visit Us at <em>Our Office</em></h2>
          <p>We’re based in Bhopal, India. Let’s meet and turn your ideas into reality.</p>
          <a className="location-button" href="https://maps.google.com/?q=Bhopal+Madhya+Pradesh" target="_blank" rel="noreferrer">Get Directions <ArrowRight /></a>
        </div>
        <div className="map-pin"><MapPin /><p><strong>Anni Web Solutions</strong><span>Bhopal, Madhya Pradesh</span></p></div>
      </section>

      <footer className="site-footer">
        <div className="footer-about"><BrandMark /><p>Helping businesses grow with modern websites, web apps and custom software.</p><div className="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram"><Instagram /></a><a href="#" aria-label="YouTube"><Youtube /></a><a href="#" aria-label="GitHub"><Github /></a></div></div>
        <div><h3>Quick Links</h3>{['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
        <div><h3>Our Services</h3>{['Website Development', 'Web Application', 'Mobile App Development', 'Custom Software', 'AI & ML Solutions', 'Digital Consulting'].map((item) => <span key={item}>{item}</span>)}</div>
        <div className="footer-contact"><h3>Contact Us</h3><span><MapPin /> Bhopal, India</span><a href="mailto:hello@anniwebsolutions.com"><Mail /> hello@anniwebsolutions.com</a><a href="tel:+919876543210"><Phone /> +91 98765 43210</a><span><Clock3 /> Mon - Sat, 10AM - 7PM</span></div>
        <div className="footer-bottom"><span>© 2026 Anni Web Solutions Pvt. Ltd. All rights reserved.</span><nav><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Sitemap</a></nav></div>
      </footer>
    </main>
  );
}