const assets = "/assets";

const images = {
  logo: `${assets}/89cbf.png`,
  hero: `${assets}/hero-turtle-unsplash.jpg`,
  mission: `${assets}/outdoor-learning-unsplash.jpg`,
  community: `${assets}/ea05d.png`,
  innovation: `${assets}/3cb59.png`,
  environment: `${assets}/c7326.png`,
  marine: `${assets}/91642.png`,
  channelIslands: `${assets}/91627.png`,
};

const icons = {
  arrowDark: `${assets}/0488b.svg`,
  arrowLight: `${assets}/87f08.svg`,
  users: `${assets}/3c68a.svg`,
  lightbulb: `${assets}/2f469.svg`,
  leaf: `${assets}/eb571.svg`,
  shield: `${assets}/a39f1.svg`,
  graduation: `${assets}/05635.svg`,
  diamond: `${assets}/e7315.svg`,
};

type ButtonLinkProps = {
  children: React.ReactNode;
  light?: boolean;
  outline?: boolean;
  href?: string;
};

function ButtonLink({ children, light, outline, href = "#" }: ButtonLinkProps) {
  return (
    <a
      className={`button ${light ? "button-light" : ""} ${outline ? "button-outline" : ""}`}
      href={href}
    >
      <span>{children}</span>
      <img
        alt=""
        src={light || outline ? icons.arrowDark : icons.arrowLight}
      />
    </a>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="#">
      <img alt="" className="brand-logo" src={images.logo} />
      <span className="brand-wordmark">
        <strong>Scholastic</strong>
        <small>EXPEDITIONS</small>
      </span>
    </a>
  );
}

const themes = [
  {
    title: "Community",
    image: images.community,
    icon: icons.users,
    text: "Interdisciplinary in nature, big picture in thought, and ambitious in scope. For students who wish to innovate socially, create change and make a difference in their world.",
  },
  {
    title: "Innovation",
    image: images.innovation,
    icon: icons.lightbulb,
    text: "Learn innovation, entrepreneurship, and leadership in the thriving hubs of the San Francisco Bay Area and New England Boston Region.",
  },
  {
    title: "Environment",
    image: images.environment,
    icon: icons.leaf,
    text: "Providing students the rich and rewarding experience of doing field work that matters.",
  },
];

const pillars = [
  {
    title: "Safety",
    icon: icons.shield,
    text: "Safety and security are at the forefront of all SE decisions, from program location to design components and content providers. They are an integral part of our programs and operations.",
  },
  {
    title: "Network",
    icon: icons.users,
    text: "Join a thriving network of educators, students, and professionals. Stay connected through alumni events and keep up with the latest initiatives and programs.",
  },
  {
    title: "Professionalism",
    icon: icons.graduation,
    text: "Academically rigorous programs build the skills to be collaborative, communicative and competitive in an increasingly globalized world.",
  },
  {
    title: "Unique",
    icon: icons.diamond,
    text: "Meet and work with researchers, scientists and social entrepreneurs in their fields. Gain hands-on, real-life experience that is transferable to the future.",
  },
];

export default function App() {
  return (
    <main>
      <header className="nav">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#programs">Youth Trips</a>
          <a href="#programs">Adult Trips</a>
        </nav>
        <a className="register" href="#signup">
          Register Now!
        </a>
      </header>

      <section className="hero">
        <img
          alt="A sea turtle crawling across a sandy beach"
          src={images.hero}
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light-text">Scholastic Expeditions</p>
          <h1>Beyond the classroom.</h1>
          <p className="hero-description">
            Exceptional learning opportunities for students of all ages.
          </p>
          <ButtonLink light href="#programs">
            Explore Programs
          </ButtonLink>
        </div>
        <p className="photo-caption">Active learning. Real-world experience.</p>
      </section>

      <section className="split-section mission" id="about">
        <img
          alt="Students and educators learning together on a rocky beach"
          className="feature-image"
          src={images.mission}
        />
        <div className="section-copy">
          <p className="eyebrow">At the forefront of education</p>
          <h2>Active learning. In the field.</h2>
          <p>
            Through our programs, students engage in active learning and hone
            skills in the field alongside distinguished professionals,
            dedicated educators, and like-minded peers.
          </p>
          <div className="button-row">
            <ButtonLink href="#programs">Join a Program</ButtonLink>
            <ButtonLink outline href="#contact">
              Lead a Program
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="themes section-pad" id="programs">
        <div className="section-heading">
          <p className="eyebrow">Explore programs</p>
          <h2>A world of ways to learn.</h2>
        </div>
        <div className="theme-grid">
          {themes.map((theme) => (
            <article className="theme-card" key={theme.title}>
              <img
                alt=""
                className="theme-photo"
                src={theme.image}
              />
              <span className="icon-box">
                <img alt="" src={theme.icon} />
              </span>
              <h3>{theme.title}</h3>
              <p>{theme.text}</p>
              <a className="text-link" href="#">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <p className="eyebrow green-text">
          Education cultivated for the school of modern thought
        </p>
        <h2>
          Discover your passion, pique your curiosity, fuel your imagination,
          and engage critical thinking.
        </h2>
      </section>

      <section className="split-section marine">
        <img
          alt="Students kayaking through a coastal channel"
          className="feature-image"
          src={images.marine}
        />
        <div className="section-copy">
          <p className="eyebrow">Marine science</p>
          <h2>Sea turtles, dolphins, whales and more.</h2>
          <p>
            A longer and more marine-intense option of our Sea Turtles,
            Dolphins and Whales program.
          </p>
          <ButtonLink>Explore Marine Science</ButtonLink>
        </div>
      </section>

      <section className="destinations section-pad">
        <div className="section-heading">
          <p className="eyebrow">Learning through experience</p>
          <h2>Explore in the field.</h2>
        </div>
        <div className="destination-grid">
          <article className="destination-card">
            <img alt="Students exploring a cave" src={images.community} />
            <div>
              <p className="eyebrow green-text">Community</p>
              <h3>Cuba</h3>
              <p>
                Interdisciplinary in nature, big picture in thought, and
                ambitious in scope. For students who wish to innovate socially,
                create change and make a difference in their world.
              </p>
              <ButtonLink>Learn more</ButtonLink>
            </div>
          </article>
          <article className="destination-card">
            <img
              alt="Kayakers in the Santa Barbara Channel Islands"
              src={images.channelIslands}
            />
            <div>
              <p className="eyebrow green-text">Marine science</p>
              <h3>Santa Barbara Channel Islands</h3>
              <p>
                Explore the Santa Barbara Channel Islands with us and discover
                the beauty of the region, sometimes referred to as the
                “American Galapagos”.
              </p>
              <ButtonLink>Learn more</ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <section className="alumni section-pad">
        <img
          alt="A group hiking through a tropical forest"
          src={images.environment}
        />
        <div className="section-copy">
          <p className="eyebrow">Featured alumni</p>
          <h2>Meet Rachel.</h2>
          <strong>Costa Rica expedition</strong>
          <p>
            Meet Rachel, our most recent featured alumni. See for yourself how
            SE programs can impact your future in exciting and meaningful ways.
          </p>
          <ButtonLink outline>See more</ButtonLink>
        </div>
      </section>

      <section className="pillars section-pad">
        <div className="section-heading">
          <p className="eyebrow">Our approach</p>
          <h2>The foundations of every expedition.</h2>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <span className="icon-box">
                <img alt="" src={pillar.icon} />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="invitation">
        <div>
          <p className="eyebrow">Scholastic Expeditions</p>
          <h2>Beyond the classroom.</h2>
        </div>
        <div className="button-row">
          <ButtonLink>Join a Program</ButtonLink>
          <ButtonLink outline>Lead a Program</ButtonLink>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-grid">
          <div className="footer-about">
            <Brand footer />
            <p>
              SE is an experiential education company that designs and provides
              exceptional learning opportunities for students of all ages.
            </p>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <a href="#programs">Explore Programs</a>
            <a href="#">Sign-in</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact / Request info</a>
            <a href="#">Register</a>
            <a href="#">Group Leader Registration</a>
          </div>
          <div className="footer-column">
            <h3>Contact info</h3>
            <address>
              Scholastic Expeditions
              <br />
              5610 Scotts Valley Drive,
              <br />
              Suite 313
              <br />
              Scotts Valley, CA 95066
              <br />
              Phone: (831) 440-1041
              <br />
              info@scholasticexpeditions.org
            </address>
          </div>
          <form className="signup" id="signup">
            <h3>Sign up for updates!</h3>
            <label htmlFor="email">Email *</label>
            <input id="email" placeholder="Enter your email" type="email" />
            <button type="submit">Sign up!</button>
          </form>
        </div>
        <div className="footer-bottom">
          Scholastic Expeditions — Beyond the Classroom
        </div>
      </footer>
    </main>
  );
}
