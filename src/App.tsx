import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BatteryCharging,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Gauge,
  Leaf,
  Menu,
  PlugZap,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/9799740/pexels-photo-9799740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const chargingImage = 'https://images.pexels.com/photos/34800929/pexels-photo-34800929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

type ComparisonMode = 'powertrain' | 'ownership';

const glossary = [
  { icon: Gauge, title: 'How cars move', copy: 'From combustion cycles and transmissions to motors and instant torque.' },
  { icon: BatteryCharging, title: 'Battery basics', copy: 'Learn cells, packs, energy density, range, and charging speeds.' },
  { icon: Leaf, title: 'The EV transition', copy: 'Understand emissions, efficiency, and the full vehicle lifecycle.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparisonMode, setComparisonMode] = useState<ComparisonMode>('powertrain');
  const [activeTopic, setActiveTopic] = useState('EV fundamentals');

  const comparison = useMemo(() => comparisonMode === 'powertrain' ? [
    ['Energy source', 'Petrol / diesel', 'Electricity'],
    ['Energy conversion', 'Combustion engine', 'Electric motor'],
    ['Refuelling / charging', '3–5 minutes', '20–60 minutes'],
    ['Moving parts', 'Hundreds', 'Fewer than 50'],
  ] : [
    ['Routine maintenance', 'More frequent', 'Generally lower'],
    ['Energy efficiency', '20–30%', '70–90%'],
    ['Driving feel', 'Gears and engine note', 'Quiet, instant torque'],
    ['Tailpipe emissions', 'Present', 'None while driving'],
  ], [comparisonMode]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Torque home"><span className="logo-mark"><Zap size={16} fill="currentColor" /></span><span>torque<span className="logo-dot">.</span></span></a>
        <nav className={`site-nav ${menuOpen ? 'site-nav-open' : ''}`} aria-label="Main navigation">
          <a href="#learn" onClick={() => setMenuOpen(false)}>Learn</a><a href="#compare" onClick={() => setMenuOpen(false)}>Compare</a><a href="#glossary" onClick={() => setMenuOpen(false)}>Glossary</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <div className="header-actions"><button className="help-action"><CircleHelp size={17} /> Learning guide</button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy"><div className="kicker"><span className="kicker-line" /> Automobile & electric vehicles</div><h1>Understand the machine<br /><em>shaping our roads.</em></h1><p>A clear, visual guide to how modern vehicles work — from the first spark in an engine to the quiet power of an electric motor.</p><div className="hero-actions"><a className="dark-button" href="#learn">Start learning <ArrowRight size={17} /></a><button className="quiet-button" onClick={() => setActiveTopic('EV fundamentals')}><span className="play-icon">▶</span> Explore EV basics</button></div><div className="hero-proof"><div className="proof-avatars"><span>AM</span><span>RK</span><span>+</span></div><p><strong>Built for curious minds</strong><br />Learn the essentials, one system at a time.</p></div></div>
          <div className="hero-visual"><img src={heroImage} alt="Electric vehicle connected to a charging station" /><div className="hero-tag"><span className="pulse-dot" /><span>Lesson 01</span><strong>Energy, motion<br />and the road ahead</strong><ArrowRight size={18} /></div><div className="hero-stamp"><Sparkles size={17} /><span>Field notes<br /><b>2024 / 25</b></span></div></div>
        </section>

        <section className="stats-strip" aria-label="Automotive facts"><div><strong>01</strong><span>Core powertrains</span></div><div><strong>04</strong><span>Key EV systems</span></div><div><strong>07</strong><span>Guides to explore</span></div><div><strong>100%</strong><span>Beginner-friendly</span></div></section>

        <section className="learn-section" id="learn"><div className="section-intro"><div><p className="section-label">The essential primer</p><h2>Start with the<br /><em>big picture.</em></h2></div><p>Vehicles can look complex from the outside. Break them into a few simple systems and the story becomes much easier to follow.</p></div><div className="topic-grid">{glossary.map(({ icon: Icon, title, copy }, index) => <button className={`topic-card ${activeTopic === title ? 'selected' : ''}`} key={title} onClick={() => setActiveTopic(title)}><div className="topic-number">0{index + 1}</div><div className="topic-icon"><Icon size={21} /></div><h3>{title}</h3><p>{copy}</p><span className="topic-link">Read guide <ArrowRight size={15} /></span></button>)}</div></section>

        <section className="feature-section" id="about"><div className="feature-image"><img src={chargingImage} alt="Person charging an electric vehicle outdoors" /><div className="image-caption"><PlugZap size={17} /><span>Charging is not fuelling.<br /><b>It is energy management.</b></span></div></div><div className="feature-copy"><p className="section-label">Featured guide</p><h2>What makes an<br /><em>EV different?</em></h2><p className="feature-lede">An electric vehicle replaces the combustion engine and fuel tank with a battery pack, inverter, and motor. That one shift changes how energy moves through the car.</p><div className="feature-list"><div><span>01</span><p><strong>Battery pack</strong><br />Stores energy as direct current.</p></div><div><span>02</span><p><strong>Inverter</strong><br />Converts energy for the motor.</p></div><div><span>03</span><p><strong>Electric motor</strong><br />Turns electricity into motion.</p></div></div><button className="outline-button" onClick={() => setActiveTopic('EV fundamentals')}>Read the full guide <ArrowRight size={16} /></button></div></section>

        <section className="compare-section" id="compare"><div className="compare-heading"><div><p className="section-label">See the difference</p><h2>ICE vs <em>electric.</em></h2></div><div className="toggle-group"><button className={comparisonMode === 'powertrain' ? 'active' : ''} onClick={() => setComparisonMode('powertrain')}>Powertrain</button><button className={comparisonMode === 'ownership' ? 'active' : ''} onClick={() => setComparisonMode('ownership')}>Ownership</button></div></div><div className="comparison-table"><div className="table-head"><span>Topic</span><span className="ice-label">ICE vehicle</span><span className="ev-label">Electric vehicle</span></div>{comparison.map(([topic, ice, ev]) => <div className="table-row" key={topic}><strong>{topic}</strong><span>{ice}</span><span>{ev}</span></div>)}</div></section>

        <section className="path-section" id="glossary"><div className="path-copy"><p className="section-label">Your learning path</p><h2>Keep asking<br /><em>better questions.</em></h2><p>Good automotive knowledge is not about memorising every part. It is about understanding how the parts work together.</p><a href="#learn" className="text-link">Browse all topics <ArrowRight size={16} /></a></div><div className="path-card"><div className="path-card-top"><BookOpen size={20} /><span>Next up</span><ChevronDown size={18} /></div><h3>Regenerative braking</h3><p>How an EV turns slowing down into useful energy.</p><div className="path-progress"><span /><b>2 min read</b></div></div></section>
      </main>
      <footer className="site-footer"><a className="logo" href="#top"><span className="logo-mark"><Zap size={14} fill="currentColor" /></span><span>torque<span className="logo-dot">.</span></span></a><p>Clear notes for the road ahead.</p><div><a href="#learn">Learn</a><a href="#compare">Compare</a><a href="#about">About</a></div></footer>
    </div>
  );
}

export default App;
