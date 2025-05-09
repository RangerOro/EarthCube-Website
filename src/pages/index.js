import React, { useEffect, useState, useRef } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './styles.module.css';


// Component for animated gradient text
const GradientText = ({ children, tagName = 'span', className = '', style = {} }) => {
  const textRef = useRef(null);
  const [spans, setSpans] = useState([]);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current.textContent;
      const characters = text.split('');
      setSpans(characters);
      textRef.current.textContent = '';
    }
  }, [children]);

  const TagName = tagName;

  return (
    <TagName ref={textRef} className={`gradient-text ${className}`} style={style}>
      {spans.map((char, index) => (
        <span key={index} className="gradient-char">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </TagName>
  );
};

// Feature card component
const FeatureCard = ({ image, title, description }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureImg}>
      {image ? (
        <img src={image} alt={title} />
      ) : (
        <img src="/api/placeholder/600/400" alt={title} />
      )}
    </div>
    <div className={styles.featureContent}>
      <h3 className={styles.accentH3}>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

// Section title component
const SectionTitle = ({ children, centered = true }) => (
  <div className={`${styles.sectionTitle} ${centered ? styles.centered : ''}`}>
    <h2 className={styles.gradientSectionTitle}>{children}</h2>
  </div>
);

export default function EarthCubeMinecraftServer() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    // Server status states
    const [isOnline, setIsOnline] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [lastChecked, setLastChecked] = useState(null);
  
    // Copy to clipboard function
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert(`Copied: ${text}`);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    };
    
    // Server status check function
    const checkServerStatus = async () => {
      setIsLoading(true);
      try {
        // Example API endpoint - replace with your actual endpoint
        const response = await fetch('https://api.mcsrvstat.us/3/play.earthcubemc.net', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          setIsOnline(data.online === true);
        } else {
          setIsOnline(false);
        }
        setLastChecked(new Date());
      } catch (error) {
        console.error('Error checking server status:', error);
        setIsOnline(false);
      } finally {
        setIsLoading(false);
      }
    };
  
    // Check status on component mount and periodically
    useEffect(() => {
      // Check status when component mounts
      checkServerStatus();
      
      // Set up periodic checking (every 60 seconds)
      const intervalId = setInterval(checkServerStatus, 60000);
      
      // Clean up interval on unmount
      return () => clearInterval(intervalId);
    }, []);

  // Mouse position tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle gradient effect animation
  useEffect(() => {
    const calculateDistance = (x1, y1, x2, y2) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    const updateGradientEffect = () => {
      const headers = document.querySelectorAll(".gradient-text");
      
      headers.forEach((header) => {
        if (!header) return;

        const rect = header.getBoundingClientRect();
        const headerVisible = 
          rect.top < window.innerHeight && 
          rect.bottom > 0;
          
        if (!headerVisible) return;

        const baseX = rect.left;
        const baseY = rect.top + rect.height / 2;
        const maxEffectRadius = 300;

        const spans = header.querySelectorAll(".gradient-char");

        spans.forEach((span, i) => {
          const letterX = baseX + (span.offsetLeft || 0) + (span.offsetWidth || 0) / 2;
          const letterY = baseY;
          
          const distance = calculateDistance(
            mousePosition.x, 
            mousePosition.y, 
            letterX, 
            letterY
          );

          let effectStrength = Math.max(0, 1 - distance / maxEffectRadius);
          effectStrength = Math.pow(effectStrength, 1.5); // Enhance effect curve

          // Different colors based on section
          const isTitle = header.tagName === "H1";
          const isSubtitle = header.tagName === "H2";

          let defaultColor = isTitle 
            ? [255, 255, 255] // White for H1
            : isSubtitle 
              ? [220, 220, 220] // Light gray for H2
              : [200, 200, 200]; // Default for other text
              
          // Light blue to green gradient
          let gradientColor = isTitle 
            ? [140, 230, 255] // Bright blue for H1
            : [100, 210, 130]; // Green for H2

          let red = Math.floor(defaultColor[0] + (gradientColor[0] - defaultColor[0]) * effectStrength);
          let green = Math.floor(defaultColor[1] + (gradientColor[1] - defaultColor[1]) * effectStrength);
          let blue = Math.floor(defaultColor[2] + (gradientColor[2] - defaultColor[2]) * effectStrength);

          span.style.color = `rgb(${red}, ${green}, ${blue})`;
          span.style.textShadow = effectStrength > 0.5 
            ? `0 0 ${Math.floor(effectStrength * 10)}px rgba(${gradientColor[0]}, ${gradientColor[1]}, ${gradientColor[2]}, ${effectStrength * 0.8})` 
            : 'none';
        });
      });

      requestAnimationFrame(updateGradientEffect);
    };

    const animationFrame = requestAnimationFrame(updateGradientEffect);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);
  return (
    <Layout
      className={styles.darkTheme}
    >

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroParallax} style={{
            transform: `translateY(${scrollPosition * 0.3}px)`
          }}></div>
        </div>
        
        <div className={styles.heroContent}>
          <GradientText tagName="h1" className={styles.heroTitle}>
            Welcome to EarthCube
          </GradientText>
          
          <div className={styles.heroLogo}>
            <img 
              src={require('./img/EarthCube logo.png').default}
              alt="EarthCube"
              className={styles.heroLogoImage}
            />
          </div>
          
          <p className={styles.heroSubtitle}>
            Explore a 1:750 scale version of the real world, build your own town, and engage in politics and warfare!
          </p>
          
          <div className={styles.heroCta}>
            <Link to="#join" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
              Join Server
            </Link>
            <Link to="#features" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLarge}`}>
              Learn More
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className={styles.features} id="features">
        <div className={styles.container}>
          <SectionTitle>Server Features</SectionTitle>
          <p className={styles.sectionIntro}>
            Discover what makes EarthCube the ultimate Minecraft Earth experience
          </p>
          
          <div className={styles.featuresGrid}>
            <FeatureCard 
              image="/img/coast.jpg"
              title="1:750 Earth Map"
              description="Explore the real world scaled down in Minecraft. Visit famous landmarks, trek through realistic biomes, and discover your hometown!"
            />
            
            <FeatureCard 
              image="/img/town.png"
              title="Build Your Town"
              description="Claim land, establish your own city or business. Recruit residents, set taxes, and watch your settlement grow!"
            />
            
            <FeatureCard 
              image="/img/quickshop.png"
              title="Economy & Gold"
              description="Use our currency, gold, to buy and sell resources, land, and services in our thriving player-driven economy."
            />
            
            <FeatureCard 
              image="/img/footballpitch.jpg"
              title="Organizations"
              description="Create sports leagues, marketing teams or even space missions to become the most popular group in the world."
            />
            
            <FeatureCard 
              image="/img/war.webp"
              title="EventWar"
              description="Test your might in large-scale battles. Lead a revolt, conquer other towns - or even entire nations!"
            />
            
            <FeatureCard 
              image="/img/mars.png"
              title="Planets"
              description="Explore new thrilling worlds like the Moon and Mars! But be careful... who knows what exists in space!"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className={styles.about} id="about">
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <img 
                src="/img/europemap.png" 
                alt="EarthCube Europe Map" 
                className={styles.floatingImage}
              />
            </div>
            
            <div className={styles.aboutText}>
              <SectionTitle centered={false}>About EarthCube</SectionTitle>
              
              <div className={styles.aboutParagraphs}>
                <p>EarthCube is a unique Minecraft multiplayer experience that combines the joy of exploration with the strategy of town-building and politics.</p>
                
                <p>Our server features a meticulously crafted 1:750 scale map of Earth, allowing players to explore and build in recreations of real-world locations. Whether you want to rebuild your hometown, establish a trading empire, or conquer the world through diplomacy or war, EarthCube offers endless possibilities.</p>
                
                <p>We've been running since October 2024, with a dedicated team of administrators and moderators ensuring a fair and enjoyable experience for all players. Our community spans the globe, with players from every continent building and playing together in harmony... or conflict!</p>
                
                <Link 
                  to="/docs"
                  className={`${styles.btn} ${styles.btnOutline}`}
                >
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Server Section */}
        <section className={styles.join} id="join">
          <div className={styles.container}>
            <SectionTitle>How to Join EarthCube</SectionTitle>
            
            <p className={styles.sectionIntro}>
          Follow these simple steps to begin your adventure
            </p>
            
            <div className={styles.joinSteps}>
          <div className={styles.step}>
            <div className={styles.stepIcon}>1</div>
            <h3 className={styles.accentH3}>Get Minecraft</h3>
            <p>You'll need the Java/Bedrock Edition of Minecraft (version 1.21.4 recommended) to join our server.</p>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepIcon}>2</div>
            <h3 className={styles.accentH3}>Add Our Server</h3>
            <p>Launch Minecraft, click on "Multiplayer," then "Add Server," and enter our server address.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepIcon}>3</div>
            <h3 className={styles.accentH3}>Start Playing</h3>
            <p>Join the server, read the starter guide, and begin your journey on EarthCube!</p>
          </div>
            </div>

            <div className={styles.serverInfo}>
          <div className={styles.serverInfoCard}>
            <div className={styles.serverInfoHeader}>
              <h4>Server Information</h4>
              <div className={styles.serverStatus}>
            {isLoading ? (
              <span className={styles.statusLoading}>Checking status...</span>
            ) : isOnline ? (
              <span className={styles.statusOnline}>
                <span className={styles.statusDot}></span> Online
              </span>
            ) : (
              <span className={styles.statusOffline}>
                <span className={styles.statusDot}></span> Offline
              </span>
            )}
            {lastChecked && (
              <span className={styles.statusTimestamp}>
                Last checked: {lastChecked.toLocaleTimeString()}
              </span>
            )}
            <button 
              className={styles.refreshButton}
              onClick={checkServerStatus}
              disabled={isLoading}
              aria-label="Refresh server status"
            >
              <svg viewBox="0 0 24 24" className={`${styles.refreshIcon} ${isLoading ? styles.spinning : ''}`}>
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </button>
              </div>
            </div>
            
            <div className={styles.serverInfoItem}>
              <div className={styles.serverInfoLabel}>Address:</div>
              <div className={styles.serverInfoValue}>
            <code>play.earthcubemc.net</code>
            <button 
              className={styles.copyButton}
              onClick={() => copyToClipboard("play.earthcubemc.net")}
              aria-label="Copy server address"
            >
              <svg viewBox="0 0 16 16" className={styles.copyIcon}>
                <path d="M4 1H12V12H4V1Z" />
                <path d="M1 4H3V15H11V16H1V4Z" />
              </svg>
            </button>
              </div>
            </div>
            
            <div className={styles.serverInfoItem}>
              <div className={styles.serverInfoLabel}>Bedrock Port:</div>
              <div className={styles.serverInfoValue}>
            <code>19132</code>
            <button 
              className={styles.copyButton}
              onClick={() => copyToClipboard("19132")}
              aria-label="Copy port number"
            >
              <svg viewBox="0 0 16 16" className={styles.copyIcon}>
                <path d="M4 1H12V12H4V1Z" />
                <path d="M1 4H3V15H11V16H1V4Z" />
              </svg>
            </button>
              </div>
            </div>

            <div className={styles.serverInfoItem}>
              <Link to="/docs/join" className={styles.serverInfoDocument}>
            Detailed Documentation on How to Join
              </Link>
            </div>
          </div>
            </div>
          </div>
        </section>
        
        {/* Community Section */}
              <section className={styles.community} id="community">
              <div className={styles.container}>
                <div className={styles.communityContent}>
              <div className={styles.communityText}>
                <SectionTitle centered={false}>{"Join Our Community"}</SectionTitle>
                
                <p>EarthCube is more than just a Minecraft server - it's a vibrant community of players from around the world!</p>
                
                <p>Join our Discord server to connect with other players, find towns to join, discuss strategies, and stay updated on server events and updates.</p>
                
                <p>We regularly host special events, building competitions, sport matches, and more. Our active staff team is always available to help with any questions or issues you might have.</p>
                
                <div className={styles.communityCta}>
                <a 
                href="https://discord.earthcubemc.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.btn} ${styles.btnPrimary}`}
                >
                <svg viewBox="0 0 24 24" className={styles.discordIcon}>
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord
                </a>
                
                <a 
                href="/blog" 
                className={`${styles.btn} ${styles.btnSecondary}`}
                >
                Visit Our Blog
                </a>
                </div>
              </div>
              
              <div className={styles.communityImage}>
                <iframe 
                src="https://discord.com/widget?id=1311029259220815892&theme=dark&username=default&chatChannels=1" 
                width="500" 
                height="500" 
                allowtransparency="true" 
                frameBorder="0" 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className={styles.discordEmbed}
                />
              </div>
                </div>
              </div>
              </section>
              
              {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <img src="/img/EarthCube logo-favicon.png" alt="EarthCube" />
              <div className={styles.footerLogoText}>
                <h3 className={styles.accentH3}>EarthCube</h3>
                <p>One Unique Towny</p>
              </div>
            </div>
            
            <div className={styles.footerLinks}>
              <div className={styles.footerLinksColumn}>
                <h3 className={styles.accentH3}>Guides</h3>
                <ul>
                  <li><Link to="/docs/towns">Towny</Link></li>
                  <li><Link to="/docs/economy">Economy</Link></li>
                  <li><Link to="/docs/join">Joining</Link></li>
                  <li><Link to="/docs/planets">Planets</Link></li>
                </ul>
              </div>
              
              <div className={styles.footerLinksColumn}>
                <h3 className={styles.accentH3}>Resources</h3>
                <ul>
                  <li><Link to="/docs">Documentation</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><a href="http://map.earthcubemc.net/" target="_blank" rel="noopener noreferrer">Live Map</a></li>
                </ul>
              </div>
              
              <div className={styles.footerLinksColumn}>
                <h3 className={styles.accentH3}>Community</h3>
                <ul>
                  <li><a href="https://dsc.gg/earthcube" target="_blank" rel="noopener noreferrer">Discord</a></li>
                  <li><a href="https://store.earthcubemc.net/" target="_blank" rel="noopener noreferrer">Store</a></li>
                  <li><a href="https://www.youtube.com/@EarthCubeMC" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} EarthCube - All rights reserved</p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}