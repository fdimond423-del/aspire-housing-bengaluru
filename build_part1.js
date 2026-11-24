const fs = require('fs');
const path = require('path');
const { getHeader, getFooter, icons } = require('./templates');

// Helper to generate a project slider image box
function makeProjectSlider(images, badgeText, badgeBg, priceText) {
  const slidesHtml = images.map((img, i) => {
    const isPlan = /layout|plan|blueprint|drawing/i.test(img.src) || /plan|layout/i.test(img.alt);
    return `<img src="${img.src}" alt="${img.alt}" class="project-slide ${isPlan ? 'plan-fit' : ''} ${i === 0 ? 'active' : ''}" />`;
  }).join('\n                ');

  const dotsHtml = images.map((_, i) => 
    `<span class="slider-dot ${i === 0 ? 'active' : ''}"></span>`
  ).join('');

  return `
              <div class="project-card-image-box project-slider">
                <div class="project-slides-track">
                ${slidesHtml}
                </div>
                <button class="slider-fullscreen-btn" type="button" title="View Full Size High-Res Blueprint">⛶ Full Size</button>
                <button class="slider-arrow-btn prev" aria-label="Previous Image">&lsaquo;</button>
                <button class="slider-arrow-btn next" aria-label="Next Image">&rsaquo;</button>
                <div class="slider-indicators">
                  ${dotsHtml}
                </div>
                <span class="slider-counter-tag">1 / ${images.length}</span>
                <span class="project-badge-tag" style="background:${badgeBg};">${badgeText}</span>
                <span class="project-price-tag">${priceText}</span>
              </div>`;
}

// 1. INDEX.HTML (Home Page)
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASPIRE HOUSING | Who We Are & What We Are — Bengaluru Plotted Specialists</title>
  <meta name="description" content="Aspire Housing in strategic association with The Purple Palms. Who we are: Bengaluru's premier plotted land developers. What we are: 100% government-approved (BMRDA, STRRPA, BIAAPA) layouts with Electronic A-Khata, Cauvery water, and bank approvals.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('home')}

  <main>
    <!-- Hero Section: Who We Are & What We Are -->
    <section class="hero-section">
      <div class="hero-bg-media">
        <img src="assets/images/hero-plotting-main.jpg" alt="Aspire Housing Premier Plotted Townships" class="hero-bg-img" />
        <div class="hero-bg-overlay"></div>
      </div>

      <div class="hero-container">
        <div class="hero-split-grid">
          <!-- Left Column: Hero Text & Counters -->
          <div>
            <div class="hero-badge-pill" data-aos="fade-down" data-aos-duration="600">
              <span class="dot" style="background:#10b981;"></span>
              <span>In Strategic Association with The Purple Palms</span>
            </div>

            <h1 class="hero-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              Who We Are & <span class="highlight text-shimmer">What We Are</span> in Bengaluru Real Estate.
            </h1>

            <div class="hero-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" style="display:flex; flex-direction:column; gap:0.9rem;">
              <p>
                <strong>Who We Are:</strong> Aspire Housing is an emerging, value-driven land development enterprise operating in strategic alliance with <strong>The Purple Palms</strong> (<a href="https://thepurplepalms.com/" target="_blank" rel="noopener" style="color:var(--orange-bright); text-decoration:underline;">thepurplepalms.com</a>). Founded on uncompromising ethics, our core mission is to bring structural order, total transparency, and legal certainty to Bengaluru’s fragmented real estate market.
              </p>
              <p>
                <strong>What We Are:</strong> We are specialized master-planners of government-approved plotted communities (BMRDA, STRRPA, BIAAPA, KHB, BBMP). Every project we curate delivers individual <strong>Electronic A-Khata</strong>, legally scrutinized titles, leading bank approvals (SBI, HDFC, ICICI), and complete physical infrastructure—wide asphalted blacktop roads, underground electricity, Cauvery water integration, and lush landscaped parks.
              </p>
            </div>

            <div style="display:flex; flex-wrap:wrap; gap:1rem;" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              <a href="#projects" class="btn-primary" style="padding:14px 32px; font-size:1rem;">Explore All Project Segments &rarr;</a>
              <button class="btn-secondary" data-open-modal="visit" data-project-name="General Inquiry" style="padding:14px 28px; font-size:1rem;">Schedule On-Site Inspection</button>
            </div>

            <!-- Hero Stats Row -->
            <div class="hero-stats-row" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <div class="hero-stat-item">
                <div class="hero-stat-number"><span data-counter="2400" data-suffix="+">2,400+</span> <span class="accent">Acres</span></div>
                <div class="hero-stat-label">Township Footprint</div>
              </div>
              <div class="hero-stat-item">
                <div class="hero-stat-number"><span data-counter="36500" data-suffix="+">36,500+</span></div>
                <div class="hero-stat-label">Demarcated Villa Plots</div>
              </div>
              <div class="hero-stat-item">
                <div class="hero-stat-number"><span data-counter="100" data-suffix="%">100%</span></div>
                <div class="hero-stat-label">BMRDA, STRRPA & BIAAPA</div>
              </div>
              <div class="hero-stat-item">
                <div class="hero-stat-number"><span class="accent">₹</span><span data-counter="46" data-suffix=".80L*">46.80L*</span></div>
                <div class="hero-stat-label">Plots Starting Price</div>
              </div>
            </div>
          </div>

          <!-- Right Column: 3D Showcase Image Card -->
          <div class="hero-visual-container" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="200">
            <!-- Main Showcase Image Card with Image Reel -->
            <div class="hero-visual-card" data-tilt>
              <img src="assets/images/plot-aerial-master.jpg" alt="Aspire Housing Plotted Developments" class="hero-visual-img" />
              <div class="hero-visual-gradient"></div>
              <div class="hero-visual-content">
                <span class="hero-visual-tag">Bespoke Plotted Communities</span>
                <div class="hero-visual-title">Completed &bull; Ongoing &bull; Upcoming Portfolios</div>
                <div class="hero-visual-desc">BMRDA &bull; STRRPA &bull; BIAAPA &bull; Clear Titles &bull; Direct Developer Representation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ticker Rail -->
    <div class="ticker-wrap">
      <div class="ticker-track">
        <div class="ticker-item"><span>★ Amritha Varshini 23-Acre BMRDA</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Madhura Lotus (6 Acres BMRDA Kanakapura Rd)</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>KHB Surya City Phase-4 (2,400 Acres)</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Nandi Urban City Devanahalli</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>AP Township BMRDA & RERA (30 Acres)</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Habulus Tranquil 2 & 3 BHK Neo Town</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Direct WhatsApp Lead Desk: +91 99453 80337</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>100% Electronic A-Khata Ready</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>The Purple Palms Group Affiliation</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Cauvery Water Connectivity</span> <span class="dot"></span></div>
      </div>
    </div>

    <!-- Master Projects Section: Completed, Ongoing, Upcoming Segments -->
    <section class="section" id="projects">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up" data-aos-duration="700">
          <span class="section-tag">Bengaluru Master Developments</span>
          <h2 class="section-title">Projects Portfolio: Completed, Ongoing & Upcoming</h2>
          <p class="section-subtitle">
            Explore our curated developments under three clear categories. Every project card features interactive scrolling images so you can inspect authentic ground infrastructure, master layout plans, and aerial progress.
          </p>

          <!-- Interactive Segment Filter Tabs -->
          <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:0.75rem; margin-top:2rem;">
            <button class="filter-tab-btn btn-secondary active" data-filter="all" style="padding:10px 22px; font-size:0.9rem;">
              All Developments (8)
            </button>
            <button class="filter-tab-btn btn-secondary" data-filter="completed" style="padding:10px 22px; font-size:0.9rem; color:var(--orange-bright); border-color:var(--orange-border);">
              ★ Completed Projects (4)
            </button>
            <button class="filter-tab-btn btn-secondary" data-filter="ongoing" style="padding:10px 22px; font-size:0.9rem; color:#10b981; border-color:rgba(16,185,129,0.35);">
              ★ Ongoing Flagships (2)
            </button>
            <button class="filter-tab-btn btn-secondary" data-filter="upcoming" style="padding:10px 22px; font-size:0.9rem; color:#60a5fa; border-color:rgba(59,130,246,0.35);">
              ★ Upcoming Launches (2)
            </button>
          </div>
        </div>

        <div class="bento-grid">
          <!-- =================================================================
               SEGMENT 1: ONGOING DEVELOPMENTS
               ================================================================= -->
          
          <!-- Ongoing 1: Amritha Varshini (Flagship 23-Acre BMRDA Layout) -->
          <div class="col-12" data-category="ongoing" data-aos="fade-up" data-aos-delay="50" style="margin-bottom:1.5rem;">
            <span class="segment-header-pill ongoing">● Ongoing Master Township</span>
            <div class="project-card" data-tilt style="display:flex; flex-direction:column; overflow:hidden;">
              <div style="width:100%;">
                ${makeProjectSlider([
                  { src: 'assets/images/amritha-layout-clean.jpg', alt: 'Amritha Varshini 336 Approved Sites Master Plan' },
                  { src: 'assets/images/amritha-hero-render.jpg', alt: 'Amritha Varshini Grand Gated Entrance' },
                  { src: 'assets/images/amritha-villa-avenue-render.jpg', alt: 'Amritha Varshini Luxury Villa Avenue' },
                  { src: 'assets/images/amritha-living-choices.jpg', alt: 'Amritha Varshini Villa Styles & Living Choices' }
                ], 'BMRDA Approved • APA/LAO No. 142/2012-13', '#10b981', '₹6,499 / sq.ft* • 23 Acres')}
              </div>
              
              <div class="project-card-body" style="padding:2.2rem 2.5rem;">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Guddahatti – Attibele, Beside KHB Suryacity Phase-3, Bengaluru</span>
                </div>
                <h3 class="project-card-title" style="font-size:1.6rem;">
                  <a href="amritha-varshini.html">Amritha Varshini — 23-Acre Plotted & Luxury Villa Township</a>
                </h3>
                <p class="project-description">
                  Developed by Sri Sri Constructions, Amritha Varshini is a premier 23-acre BMRDA-approved integrated community beside KHB Suryacity Phase-3 and Upcoming Swift City SEZ. Features 336 demarcated villa plots (30x40, 30x50, 40x60), independent luxury 2/3/4 BHK villas, 100 ft wide main roadway connecting to Suryacity-3, 6 landscaped parks, and grand clubhouse.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Segment</span>
                    <span class="spec-value" style="color:#10b981;">Ongoing Flagship</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Approved Sites</span>
                    <span class="spec-value">336 Villa Plots</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Approval</span>
                    <span class="spec-value">BMRDA Sanctioned</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Main Roadway</span>
                    <span class="spec-value">100 Ft Master Road</span>
                  </div>
                </div>
                <div class="project-card-footer" style="margin-top:1.5rem; display:flex; flex-wrap:wrap; gap:0.75rem;">
                  <a href="amritha-varshini.html" class="btn-primary" style="font-size:0.9rem; padding:10px 22px;">Explore Layout & Floorplans &rarr;</a>
                  <button class="btn-secondary" data-open-modal="visit" data-project-name="Amritha Varshini 23-Acre BMRDA" style="font-size:0.9rem; padding:10px 20px;">Book Site Inspection</button>
                  <a href="https://wa.me/919945380337?text=Hi%20Aspire%20Housing,%20please%20share%20details%20for%20Amritha%20Varshini." target="_blank" class="btn-secondary" style="font-size:0.9rem; padding:10px 16px; color:#25d366; border-color:rgba(37,211,102,0.4);">${icons.whatsapp} WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Ongoing 2: AP Township (30-Acre BMRDA & RERA Layout near E-City) -->
          <div class="col-6" data-category="ongoing" data-aos="fade-up" data-aos-delay="100">
            <span class="segment-header-pill ongoing">● Ongoing Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/purple/AP-Township.jpg', alt: 'AP Township Entrance & Greenery' },
                { src: 'assets/images/purple/AP-Township-collage.png', alt: 'AP Township Master Collage' },
                { src: 'assets/images/purple/IMG_20251123_105340-scaled.jpg', alt: 'AP Township Ground Avenue' },
                { src: 'assets/images/purple/master-plan-and-key-amenities-scaled.jpg', alt: 'AP Township Master Plan & Amenities' }
              ], 'BMRDA & RERA Approved', '#10b981', '30 Acres • 500 Plots')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Near Electronic City, Bengaluru</span>
                </div>
                <h3 class="project-card-title">
                  <a href="ap-township.html">AP Township – Live Where Comfort Meets Luxury</a>
                </h3>
                <p class="project-description">
                  A BMRDA & RERA-approved 30-acre township featuring 500 premium plots. Located in the high-growth corridor near Electronic City, featuring 18,000+ trees, 48% open green space, 8 themed parks, and over 50+ lifestyle amenities including clubhouse and swimming pool.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Segment</span>
                    <span class="spec-value" style="color:#10b981;">Ongoing</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Open Green</span>
                    <span class="spec-value">48% Greenery</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">RERA ID</span>
                    <span class="spec-value">PRM/KA/...4642</span>
                  </div>
                </div>
                <div class="project-card-footer">
                  <a href="ap-township.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Explore Amenities &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="AP Township" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- =================================================================
               SEGMENT 2: COMPLETED DEVELOPMENTS
               ================================================================= -->

          <!-- Completed 1: Madhura Lotus (6-Acre BMRDA Villa Plots Kanakapura Road) -->
          <div class="col-6" data-category="completed" data-aos="fade-up" data-aos-delay="150">
            <span class="segment-header-pill completed">✓ Completed Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/user-plot-pin-land.jpg', alt: 'Madhura Lotus Aerial Layout' },
                { src: 'assets/images/user-plot-park-layout.jpg', alt: 'Madhura Lotus Park Layout' },
                { src: 'assets/images/user-plot-ground-real.jpg', alt: 'Madhura Lotus Demarcated Plots' },
                { src: 'assets/images/plot-layout-avenue.jpg', alt: 'Madhura Lotus Paved Internal Avenue' }
              ], 'BMRDA Approved Layout', 'var(--orange)', 'From ₹62.39L* • 6 Acres')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Kaggalipura, Kanakapura Road (NH-948), Bengaluru South</span>
                </div>
                <h3 class="project-card-title">
                  <a href="madhura-lotus.html">Madhura Lotus – Boutique 6-Acre Gated Community</a>
                </h3>
                <p class="project-description">
                  Sourced in alliance with The Purple Palms, Madhura Lotus is a completed 6-acre BMRDA-approved plotted layout with 90 exclusive villa plots. Located on NH-948 next to DAV Public School, 10 mins from Silk Institute Metro Station with asphalt roads, individual water lines, and Electronic A-Khata.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Segment</span>
                    <span class="spec-value" style="color:var(--orange-bright);">Completed</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Total Units</span>
                    <span class="spec-value">90 Villa Plots</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Metro Distance</span>
                    <span class="spec-value">10 Mins (Silk Inst)</span>
                  </div>
                </div>
                <div class="project-card-footer">
                  <a href="madhura-lotus.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">View Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Madhura Lotus Kaggalipura" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Completed 2: KHB Surya City Phase-4 (2,400-Acre Mega Township) -->
          <div class="col-6" data-category="completed" data-aos="fade-up" data-aos-delay="200">
            <span class="segment-header-pill completed">✓ Completed Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/purple/suryacity-1.jpg', alt: 'KHB Surya City Phase 4 Entrance & Layout' },
                { src: 'assets/images/purple/khb-1-1.jpg', alt: 'KHB Surya City Phase 4 Master Avenue' },
                { src: 'assets/images/purple/Gallery-1.jpg', alt: 'KHB Surya City Phase 4 Infrastructure' },
                { src: 'assets/images/user-plot-ground-real.jpg', alt: 'KHB Surya City Demarcated Plots' }
              ], 'Government Backed • KHB & STRRPA', 'var(--orange)', 'From ₹46.80L* (₹3900/sq.ft)')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Bannerghatta Road, Jigani, Bengaluru</span>
                </div>
                <h3 class="project-card-title">
                  <a href="khb-suryacity.html">KHB Surya City Phase – 4</a>
                </h3>
                <p class="project-description">
                  Asia’s Largest Residential Layout: Bengaluru’s 2400-Acre Mega Township developed under Karnataka Housing Board. 36,000 residential villa plots developed in collaboration with farmers with Cauvery water, 60-acre Sports Club, and STRRPA approval. Electronic A-Khata ready for immediate registration.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Segment</span>
                    <span class="spec-value" style="color:var(--orange-bright);">Completed</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Township Size</span>
                    <span class="spec-value">2,400 Acres</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Approval</span>
                    <span class="spec-value">STRRPA / BBMP</span>
                  </div>
                </div>
                <div class="project-card-footer">
                  <a href="khb-suryacity.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">View Layout Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="KHB Surya City Phase-4" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Completed 3: Nandi Urban City Devanahalli -->
          <div class="col-6" data-category="completed" data-aos="fade-up" data-aos-delay="250">
            <span class="segment-header-pill completed">✓ Completed Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/purple/nandi-urban-banner.jpg', alt: 'Nandi Urban City Entrance Banner' },
                { src: 'assets/images/purple/urban-nandi-collage.jpg', alt: 'Nandi Urban City Parks & Amenities' },
                { src: 'assets/images/purple/gallery-1.jpeg', alt: 'Nandi Urban City Avenue Trees' },
                { src: 'assets/images/purple/master-plan.jpg', alt: 'Nandi Urban City Master Layout Plan' }
              ], 'Airport Corridor • BIAAPA Approved', 'var(--orange)', 'Exclusive Launch Pricing')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Devanahalli, North Bengaluru (10 Mins to Airport)</span>
                </div>
                <h3 class="project-card-title">
                  <a href="nandi-urban-city.html">Nandi Urban City – Where Weekends Begin Every Day</a>
                </h3>
                <p class="project-description">
                  Located in Devanahalli, North Bengaluru — Nandi Urban City is a serene 12-acre BIAAPA-approved plotted community, just minutes from Kempegowda International Airport and surrounded by Nandi Hills, offering the ideal blend of nature, connectivity, and ready infrastructure with 7 landscaped parks.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Segment</span>
                    <span class="spec-value" style="color:var(--orange-bright);">Completed</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Land Extent</span>
                    <span class="spec-value">12 Acres Gated</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Total Units</span>
                    <span class="spec-value">147 Villa Plots</span>
                  </div>
                </div>
                <div class="project-card-footer">
                  <a href="nandi-urban-city.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">View Master Plan &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Nandi Urban City Devanahalli" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Completed 4: Habulus Tranquil Neo Town -->
          <div class="col-6" data-category="completed" data-aos="fade-up" data-aos-delay="300">
            <span class="segment-header-pill completed">✓ Completed Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/purple/habulus-carasoul-1.jpg', alt: 'Habulus Tranquil Tower Facade' },
                { src: 'assets/images/purple/habulus-tranquil.jpg', alt: 'Habulus Tranquil Campus' },
                { src: 'assets/images/purple/gallery-1.jpg', alt: 'Habulus Tranquil Living Space' },
                { src: 'assets/images/purple/habulus-location.jpg', alt: 'Habulus Tranquil Neo Town Route' }
              ], 'Neo Town High-Rise • BDA Approved', 'var(--orange)', '₹90L Onwards • 2 & 3 BHK')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Neo Town, Next to Electronic City</span>
                </div>
                <h3 class="project-card-title">
                  <a href="habulus-tranquil.html">Habulus Tranquil – Rise To A Life Of Prestige</a>
                </h3>
                <p class="project-description">
                  Spread across 5 Acres of Land, Habulus Tranquil is a premium gated community in Neo Town, Electronic City – designed for comfort, convenience, and class. Features 4 elegant towers of B+S+16 floors, 496 premium flats, 25,000 sq.ft clubhouse, 100% Vastu compliance, and zero common walls.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Segment</span>
                    <span class="spec-value" style="color:var(--orange-bright);">Completed</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Structure</span>
                    <span class="spec-value">B+S+16 Floors</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Grand Club</span>
                    <span class="spec-value">25,000 Sq.Ft</span>
                  </div>
                </div>
                <div class="project-card-footer">
                  <a href="habulus-tranquil.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Floor Plans & Specs &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Habulus Tranquil" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- =================================================================
               SEGMENT 3: UPCOMING DEVELOPMENTS
               ================================================================= -->

          <!-- Upcoming 1: Sarjapur STRR Corridor Plotted Enclave -->
          <div class="col-6" data-category="upcoming" data-aos="fade-up" data-aos-delay="100">
            <span class="segment-header-pill upcoming">✦ Upcoming Launch</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/user-plot-aerial-fields.png', alt: 'Sarjapur STRR Corridor Aerial Land Bank' },
                { src: 'assets/images/user-plot-overview.png', alt: 'Sarjapur STRR Enclave Layout Model' },
                { src: 'assets/images/plot-aerial-master.jpg', alt: 'Sarjapur STRR Plotted Development' },
                { src: 'assets/images/plotting-infrastructure.jpg', alt: 'Future Infrastructure Preview' }
              ], 'Upcoming BMRDA Layout', '#3b82f6', 'Pre-Launch Expression of Interest')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Sarjapur – Attibele STRR Express Corridor, Bengaluru</span>
                </div>
                <h3 class="project-card-title">
                  <a href="projects.html#upcoming">Aspire Palm Meadows – Sarjapur STRR Corridor</a>
                </h3>
                <p class="project-description">
                  An upcoming 40-acre master-planned gated residential enclave strategically positioned along the Satellite Town Ring Road (STRR) and upcoming Swift City industrial corridor. Planned with 600+ demarcated villa sites, underground smart utilities, and extensive green tree cover.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Segment</span>
                    <span class="spec-value" style="color:#60a5fa;">Upcoming</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Proposed Area</span>
                    <span class="spec-value">40 Acres</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Expected Sanction</span>
                    <span class="spec-value">BMRDA / STRRPA</span>
                  </div>
                </div>
                <div class="project-card-footer">
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Sarjapur STRR Corridor (Pre-Launch)" style="font-size:0.85rem; padding:8px 18px; width:100%;">Register Pre-Launch EOI &rarr;</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Upcoming 2: North Bengaluru Aerospace Plotted Hub -->
          <div class="col-6" data-category="upcoming" data-aos="fade-up" data-aos-delay="200">
            <span class="segment-header-pill upcoming">✦ Upcoming Launch</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/user-plot-overview.png', alt: 'North Bangalore Aerospace Enclave' },
                { src: 'assets/images/user-plot-aerial-fields.png', alt: 'KIADB Aerospace Corridor Land' },
                { src: 'assets/images/plot-layout-avenue.jpg', alt: 'Aerospace Corridor Layout Design' },
                { src: 'assets/images/user-plot-park-aerial.jpg', alt: 'Green Park Concept' }
              ], 'Upcoming BIAAPA Sanctioned', '#3b82f6', 'Exclusive Pre-Booking')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>KIADB Aerospace & IT Park Corridor, Devanahalli</span>
                </div>
                <h3 class="project-card-title">
                  <a href="projects.html#upcoming">North Bengaluru Aerospace Plotted Enclave</a>
                </h3>
                <p class="project-description">
                  A high-conviction 25-acre plotted enclave tailored for IT, aviation, and aerospace professionals near Devanahalli SEZ and Kempegowda International Airport. Designed with sustainable solar avenue lighting, EV charging pods, and high capital growth vectors.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Segment</span>
                    <span class="spec-value" style="color:#60a5fa;">Upcoming</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Proposed Area</span>
                    <span class="spec-value">25 Acres</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Airport Access</span>
                    <span class="spec-value">8 Mins Direct</span>
                  </div>
                </div>
                <div class="project-card-footer">
                  <button class="btn-primary" data-open-modal="visit" data-project-name="North Bengaluru Aerospace Hub (Pre-Launch)" style="font-size:0.85rem; padding:8px 18px; width:100%;">Register Pre-Launch EOI &rarr;</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Strategic Services Overview Section -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">End-to-End Excellence</span>
          <h2 class="section-title">Building better, together.</h2>
          <p class="section-subtitle">
            At Aspire Housing, we deliver actionable insights for individuals, families, and businesses across Bengaluru, covering every phase from site selection to project launch.
          </p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.chart}</div>
              <h3 class="pillar-title">Real Estate & Investment Advisory</h3>
              <p class="pillar-desc">
                Pinpointing Bengaluru’s high-growth corridors, major infrastructure projects, and prime micro-markets to unlock maximum appreciation and secure robust rental returns.
              </p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.building}</div>
              <h3 class="pillar-title">Regulatory Liaison & Approvals</h3>
              <p class="pillar-desc">
                Securing land conversion, zoning approvals, RERA registration, and occupancy certificates directly with Bengaluru regulatory authorities without follow-up hassles.
              </p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.layers}</div>
              <h3 class="pillar-title">Project Feasibility & Analysis</h3>
              <p class="pillar-desc">
                In-depth evaluation of demand-supply dynamics, price trends, competitor benchmarking, financial modeling (IRR, ROI, break-even), and rigorous risk mitigation.
              </p>
            </div>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.legal}</div>
              <h3 class="pillar-title">Legal Documentation & Due Diligence</h3>
              <p class="pillar-desc">
                Drafting & vetting of Sale Deeds, JDAs, Lease Deeds, Power of Attorney, complete title deed scrutiny, encumbrance checks, and sub-registrar liaison.
              </p>
            </div>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.key}</div>
              <h3 class="pillar-title">Lease & Rental Management</h3>
              <p class="pillar-desc">
                End-to-end commercial leasing for IT parks/coworking hubs, tenant screening, rent collection, and property maintenance ensuring optimized rental yields.
              </p>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:3rem;" data-aos="fade-up">
          <a href="services.html" class="btn-primary" style="padding:12px 28px;">Discover All 5 Strategic Verticals &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Interactive EMI & Investment Calculator Section -->
    <section class="section">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Financial Clarity</span>
          <h2 class="section-title">Plot & Home Loan EMI Estimator</h2>
          <p class="section-subtitle">
            Plan your property investment with real-time financial projections for Bengaluru's high-yield plotted townships and apartments.
          </p>
        </div>

        <div class="calculator-box" data-aos="zoom-in" data-aos-duration="750">
          <div class="calc-grid">
            <div>
              <div class="calc-range-group">
                <div class="calc-label-row">
                  <span>Total Property Value:</span>
                  <span class="calc-val-badge" id="valAmount">₹50.0 Lakhs</span>
                </div>
                <input type="range" class="calc-slider" id="calcAmount" min="2000000" max="25000000" step="100000" value="5000000" />
              </div>

              <div class="calc-range-group">
                <div class="calc-label-row">
                  <span>Down Payment:</span>
                  <span class="calc-val-badge" id="valDown">₹10.0 Lakhs</span>
                </div>
                <input type="range" class="calc-slider" id="calcDown" min="500000" max="10000000" step="100000" value="1000000" />
              </div>

              <div class="calc-range-group">
                <div class="calc-label-row">
                  <span>Loan Tenure (Years):</span>
                  <span class="calc-val-badge" id="valTenure">20 Years</span>
                </div>
                <input type="range" class="calc-slider" id="calcTenure" min="5" max="30" step="1" value="20" />
              </div>

              <div class="calc-range-group">
                <div class="calc-label-row">
                  <span>Annual Interest Rate (%):</span>
                  <span class="calc-val-badge" id="valRate">8.5%</span>
                </div>
                <input type="range" class="calc-slider" id="calcRate" min="6.5" max="14" step="0.1" value="8.5" />
              </div>
            </div>

            <div class="calc-result-card" data-tilt>
              <span style="font-size:0.85rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px;">Estimated Monthly Installment</span>
              <div class="emi-amount-large" id="calcEmiMonthly">₹34,713/mo</div>
              <div style="display:flex; justify-content:space-around; margin-top:1.5rem; padding-top:1.5rem; border-top:1px solid var(--border-subtle);">
                <div>
                  <div style="font-size:0.75rem; color:var(--text-dim);">Principal Loan</div>
                  <div style="font-size:1.15rem; font-weight:700; color:#fff;" id="calcPrincipalTotal">₹40.00 L</div>
                </div>
                <div>
                  <div style="font-size:0.75rem; color:var(--text-dim);">Total Interest</div>
                  <div style="font-size:1.15rem; font-weight:700; color:var(--orange-bright);" id="calcInterestTotal">₹43.31 L</div>
                </div>
              </div>
              <button class="btn-primary" data-open-modal="visit" data-project-name="Loan Eligibility Consultation" style="margin-top:2rem; width:100%;">
                Get Bank Loan Pre-Approval &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Verified Testimonials Section -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Client Testimonials</span>
          <h2 class="section-title">What Our Buyers Say</h2>
          <p class="section-subtitle">
            Authentic experiences from plot investors and homeowners who chose Aspire Housing for transparency and disciplined execution.
          </p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="testimonial-card" data-tilt>
              <div>
                <div class="testimonial-stars" style="display:flex; gap:3px;">
                  ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
                </div>
                <h4 style="color:#fff; font-size:1.1rem; margin:0.8rem 0 0.6rem;">Awesome Experience</h4>
                <p class="testimonial-quote">
                  "The site purchase was smooth with assistance from Aspire Housing. The project was well explained and the rate was finalised at the site location. Overall the experience was good."
                </p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">NR</div>
                <div>
                  <div class="author-name">Narayan Rao</div>
                  <div class="author-role">Plotted Land Investor • Surya City</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="testimonial-card" data-tilt>
              <div>
                <div class="testimonial-stars" style="display:flex; gap:3px;">
                  ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
                </div>
                <h4 style="color:#fff; font-size:1.1rem; margin:0.8rem 0 0.6rem;">Extremely Happy</h4>
                <p class="testimonial-quote">
                  "Extremely happy we approached Aspire Housing to purchase a plot. Delighted with the services of the staff. Very polite and professional in all interaction and dealing. The whole process of dealing, documentation and communication has been very disciplined and smooth."
                </p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">NK</div>
                <div>
                  <div class="author-name">Narendra Kumar</div>
                  <div class="author-role">Villa Plot Owner • AP Township</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="testimonial-card" data-tilt>
              <div>
                <div class="testimonial-stars" style="display:flex; gap:3px;">
                  ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
                </div>
                <h4 style="color:#fff; font-size:1.1rem; margin:0.8rem 0 0.6rem;">Transparent Documentation</h4>
                <p class="testimonial-quote">
                  "The legal due diligence and STRRPA verification provided by the Aspire team gave us total peace of mind. Getting Electronic A-Khata without any middleman hassle is unheard of in Bangalore real estate."
                </p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">SK</div>
                <div>
                  <div class="author-name">Suresh Krishnan</div>
                  <div class="author-role">Homebuyer • Devanahalli Corridor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Let's Build Together CTA -->
    <section class="section" style="border-top:1px solid var(--border-subtle);">
      <div class="section-container" style="text-align:center;" data-aos="zoom-in">
        <span class="section-tag">Let’s Build Together</span>
        <h2 class="section-title" style="max-width:700px; margin:0 auto 1.5rem;">
          Ready to Secure Your Piece of Bengaluru’s Next Growth Story?
        </h2>
        <p style="color:var(--text-muted); max-width:620px; margin:0 auto 2.5rem; font-size:1.05rem;">
          Whether you seek government-backed plots in KHB Surya City, airport proximity in Nandi Urban City, or boutique tranquility in Madhura Lotus on Kanakapura Road, we guide every milestone with integrity.
        </p>

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <button class="btn-primary" data-open-modal="visit" data-project-name="General Inquiry" style="padding:14px 34px; font-size:1rem;">
            Schedule Site Visit Today &rarr;
          </button>
          <a href="tel:+919945380337" class="btn-secondary" style="padding:14px 30px;">
            ${icons.phone}
            <span>Call +91 99453 80337</span>
          </a>
          <a href="contact.html" class="btn-secondary" style="padding:14px 30px;">
            Visit Corporate Office
          </a>
        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;

// 2. ABOUT.HTML (About Us)
const aboutHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | ASPIRE HOUSING — Vision, Mission & Key Pillars</title>
  <meta name="description" content="Learn how Aspire Housing brings order to the fragmented real estate sector through structured, transparent, customer-first property development and advisory.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('about')}

  <main style="padding-top:100px;">
    <!-- Page Header Banner -->
    <section class="section" style="padding-bottom:3rem; border-bottom:1px solid var(--border-subtle);">
      <div class="section-container" data-aos="fade-up">
        <span class="section-tag">Our Origin & Ethos</span>
        <h1 class="section-title" style="font-size:clamp(2.2rem, 4.5vw, 3.4rem); max-width:850px;">
          Redefining Real Estate through <span class="highlight text-shimmer">Uncompromising Transparency</span> & Vision.
        </h1>
        <p class="section-subtitle" style="max-width:780px;">
          The Route of the company lies in the shared passion for bringing order to a highly disorganised Real Estate sector.
        </p>
      </div>
    </section>

    <!-- Company Origin & Narrative -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-7" data-aos="fade-right">
            <h2 style="font-size:2rem; font-weight:800; color:#fff; margin-bottom:1.5rem;">
              About ASPIRE HOUSING
            </h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1.25rem;">
              The journey started when we discussed reimagining the Real Estate space with new ways of working. In strategic alliance with <strong>The Purple Palms</strong>, our common ethics and values laid the foundation of <strong>ASPIRE HOUSING’s</strong> value-oriented culture with a clear focus on bringing about transparency in the Real Estate sector.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1.25rem;">
              The idea was to deliver more than just properties, it was about bringing solutions and experiences. The roadmap was to boost transparency and improve communication between all buyers or investors in the Real Estate industry. This would eventually lead to more informed decision-making. Since the early days, we have been working towards this broader goal.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8;">
              Having successfully predicted the real estate boom in India that has been evident for the last few years, we formed ASPIRE HOUSING based on this belief and scaled it up to divisions across different value proposals in Real Estate. We have grown from being a residential property-focused company to operating across multiple real estate activity verticals, with a marked presence across all segments of the value chain.
            </p>
          </div>

          <div class="col-5" data-aos="fade-left">
            <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
              <img src="assets/images/about-advisory.jpg" alt="Aspire Housing Land Banking & Township Development" style="width:100%; height:440px; object-fit:cover;" />
              <div style="padding:1.5rem; background:rgba(12,15,22,0.95);">
                <div style="font-size:1.2rem; font-weight:800; color:#fff;">Formidable Industry Force</div>
                <p style="font-size:0.85rem; color:var(--orange-bright); margin-top:4px;">Deploying bespoke tools & technology across all business lines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission Cards -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="bento-grid">
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt style="height:100%; border-left:4px solid var(--orange);">
              <span class="section-tag">Guiding Horizon</span>
              <h3 style="font-size:1.8rem; font-weight:800; color:#fff; margin:0.5rem 0 1.25rem;">The Vision</h3>
              <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
                Our vision is to create enduring value through strategic development, innovative marketing, and deep commitment to building <strong>sustainable communities</strong> where transparency, ethics, and innovation lead every step of the real estate journey, empowering individuals and communities alike.
              </p>
              <p style="color:var(--text-muted); font-size:1rem; line-height:1.8;">
                We aim to improve the lives of clients, tenants, and employees by delivering uncompromising, high-quality real estate services across every touchpoint.
              </p>
            </div>
          </div>

          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt style="height:100%; border-left:4px solid var(--orange-bright);">
              <span class="section-tag">Active Purpose</span>
              <h3 style="font-size:1.8rem; font-weight:800; color:#fff; margin:0.5rem 0 1.25rem;">The Mission</h3>
              <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
                Our mission is to transform land into thriving communities through strategic development, transparent practices, and ethical engagement. We are committed to delivering legally clear, well-planned, and future-ready plots that offer enduring value, ensuring timely execution, customer satisfaction, and sustainable growth.
              </p>
              <div style="background:rgba(255,87,34,0.08); border-radius:12px; padding:1.2rem; border:1px solid var(--orange-border); margin-top:1.5rem;">
                <div style="font-size:1.15rem; font-weight:800; color:#fff; font-style:italic;">
                  "Turning ‘For Sale’ signs into Home Sweet Home and Sold stories."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7 Key Pillars (Core Values) -->
    <section class="section" id="values">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Core Value Architecture</span>
          <h2 class="section-title">The 7 Pillars of Aspire Housing</h2>
          <p class="section-subtitle">
            Honesty, integrity, and professionalism are placed above all else. We understand that we are here to deliver measurable results and exceed client expectations.
          </p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.shieldCheck}</div>
              <h3 class="pillar-title">1. Transparency</h3>
              <p class="pillar-desc">Open, honest, and clear communication with every stakeholder — from initial landowners to first-time homebuyers and institutional investors.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.legal}</div>
              <h3 class="pillar-title">2. Integrity</h3>
              <p class="pillar-desc">Ethical conduct is the foundation of our business. We uphold the highest standards of honesty, full statutory compliance, and executive accountability.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.senior}</div>
              <h3 class="pillar-title">3. Customer Centricity</h3>
              <p class="pillar-desc">We prioritize customer needs, preferences, and long-term satisfaction. Every decision is shaped to protect and grow our client's wealth.</p>
            </div>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.eco}</div>
              <h3 class="pillar-title">4. Sustainability</h3>
              <p class="pillar-desc">We champion responsible land use, rainwater harvesting, underground utilities, and environmentally conscious development, creating sustainable communities that are future-ready.</p>
            </div>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.electricity}</div>
              <h3 class="pillar-title">5. Innovation</h3>
              <p class="pillar-desc">We embrace technological advancements and bespoke digital tools to enhance value across the entire property development and investment lifecycle.</p>
            </div>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.trophy}</div>
              <h3 class="pillar-title">6. Quality Excellence</h3>
              <p class="pillar-desc">We never compromise on quality — whether it is township layout planning, blacktop roads, Cauvery water integration, or the overall customer experience.</p>
            </div>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.building}</div>
              <h3 class="pillar-title">7. Trust & Long-Term Value</h3>
              <p class="pillar-desc">We earn trust through reliability, legal security, and compounding value appreciation over time, cultivating lifelong relationships with our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;

// 3. PROJECTS.HTML (Master Directory)
const projectsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects Portfolio | ASPIRE HOUSING — Completed, Ongoing & Upcoming Directory</title>
  <meta name="description" content="Explore Aspire Housing's premier real estate developments across Bengaluru: Completed (Madhura Lotus, KHB Surya City, Nandi Urban, Habulus Tranquil), Ongoing (Amritha Varshini, AP Township), and Upcoming Enclaves.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('projects')}

  <main style="padding-top:100px;">
    <!-- Page Header Banner -->
    <section class="section" style="padding-bottom:3rem; border-bottom:1px solid var(--border-subtle);">
      <div class="section-container" data-aos="fade-up">
        <span class="section-tag">Bengaluru Master Directory</span>
        <h1 class="section-title" style="font-size:clamp(2.2rem, 4.5vw, 3.4rem); max-width:850px;">
          Curated Residential Townships & Luxury Living.
        </h1>
        <p class="section-subtitle" style="max-width:800px;">
          We believe smooth project approval processes are critical for our clients. In partnership with The Purple Palms, our team handles end-to-end regulatory approvals, securing BMRDA, STRRPA, BIAAPA, and RERA certifications so you invest with complete peace of mind.
        </p>

        <!-- Filter Tabs -->
        <div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:2.5rem;">
          <button class="filter-tab-btn btn-secondary active" data-filter="all" style="padding:10px 20px; font-size:0.88rem;">All Developments</button>
          <button class="filter-tab-btn btn-secondary" data-filter="completed" style="padding:10px 20px; font-size:0.88rem; color:var(--orange-bright);">★ Completed Projects (4)</button>
          <button class="filter-tab-btn btn-secondary" data-filter="ongoing" style="padding:10px 20px; font-size:0.88rem; color:#10b981;">★ Ongoing Flagships (2)</button>
          <button class="filter-tab-btn btn-secondary" data-filter="upcoming" style="padding:10px 20px; font-size:0.88rem; color:#60a5fa;">★ Upcoming Enclaves (2)</button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid">
          
          <!-- ONGOING 1: Amritha Varshini -->
          <div class="col-12" data-category="ongoing" data-aos="fade-up" data-aos-delay="50" style="margin-bottom:1.5rem;">
            <span class="segment-header-pill ongoing">● Ongoing Master Township</span>
            <div class="project-card" data-tilt style="display:flex; flex-direction:column; overflow:hidden;">
              <div style="width:100%;">
                ${makeProjectSlider([
                  { src: 'assets/images/amritha-layout-clean.jpg', alt: 'Amritha Varshini 336 Approved Sites Master Plan' },
                  { src: 'assets/images/amritha-hero-render.jpg', alt: 'Amritha Varshini Grand Gated Entrance' },
                  { src: 'assets/images/amritha-villa-avenue-render.jpg', alt: 'Amritha Varshini Luxury Villa Avenue' },
                  { src: 'assets/images/amritha-living-choices.jpg', alt: 'Amritha Varshini Villa Styles & Living Choices' }
                ], 'BMRDA Approved • APA/LAO No. 142/2012-13', '#10b981', '₹6,499 / sq.ft* • 23 Acres')}
              </div>

              <div class="project-card-body" style="padding:2.2rem 2.5rem;">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Guddahatti – Attibele, Adjacent to KHB Suryacity Phase-3</span>
                </div>
                <h2 class="project-card-title"><a href="amritha-varshini.html">Amritha Varshini — 23-Acre BMRDA Plotted Township</a></h2>
                <p class="project-description">
                  Developed by Sri Sri Constructions, featuring 336 approved villa plots (30x40, 30x50, 40x60), independent luxury 2/3/4 BHK villas, apartments, 100 ft wide main road connecting to KHB Suryanagar Phase-III, and 6 landscaped parks.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item"><span class="spec-label">Segment</span><span class="spec-value" style="color:#10b981;">Ongoing</span></div>
                  <div class="project-spec-item"><span class="spec-label">Extent</span><span class="spec-value">23 Acres</span></div>
                  <div class="project-spec-item"><span class="spec-label">Sanctioned</span><span class="spec-value">336 Plots</span></div>
                </div>
                <div class="project-card-footer" style="display:flex; flex-wrap:wrap; gap:0.75rem; margin-top:1.2rem;">
                  <a href="amritha-varshini.html" class="btn-primary" style="font-size:0.85rem; padding:8px 18px;">Full Details & Master Plan &rarr;</a>
                  <button class="btn-secondary" data-open-modal="visit" data-project-name="Amritha Varshini 23-Acre BMRDA" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                  <a href="https://wa.me/919945380337?text=Hi%20Aspire%20Housing,%20please%20send%20me%20the%20cost%20sheet%20and%20layout%20plan%20for%20Amritha%20Varshini." target="_blank" class="btn-secondary" style="font-size:0.85rem; padding:8px 16px; color:#25d366; border-color:rgba(37,211,102,0.4);">${icons.whatsapp} WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          <!-- ONGOING 2: AP Township -->
          <div class="col-6" data-category="ongoing" data-aos="fade-up" data-aos-delay="100">
            <span class="segment-header-pill ongoing">● Ongoing Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/purple/AP-Township.jpg', alt: 'AP Township Entrance & Greenery' },
                { src: 'assets/images/purple/AP-Township-collage.png', alt: 'AP Township Master Collage' },
                { src: 'assets/images/purple/IMG_20251123_105340-scaled.jpg', alt: 'AP Township Ground Avenue' },
                { src: 'assets/images/purple/master-plan-and-key-amenities-scaled.jpg', alt: 'AP Township Master Plan & Amenities' }
              ], 'BMRDA & RERA Approved', '#10b981', '30 Acres • 500 Plots')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Near Electronic City, Bengaluru</span>
                </div>
                <h2 class="project-card-title"><a href="ap-township.html">AP Township – Everyday Luxury</a></h2>
                <p class="project-description">
                  A BMRDA & RERA-approved 30-acre township featuring 500 premium plots. Designed with over 18,000 trees and 48% open green space, 8 themed parks, 50+ lifestyle amenities, clubhouse with swimming pool, mini theatre, and 30 & 40 ft concrete roads.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item"><span class="spec-label">Segment</span><span class="spec-value" style="color:#10b981;">Ongoing</span></div>
                  <div class="project-spec-item"><span class="spec-label">Township Size</span><span class="spec-value">30 Acres</span></div>
                  <div class="project-spec-item"><span class="spec-label">Approval</span><span class="spec-value">BMRDA / RERA</span></div>
                </div>
                <div class="project-card-footer">
                  <a href="ap-township.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="AP Township" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- COMPLETED 1: Madhura Lotus -->
          <div class="col-6" data-category="completed" data-aos="fade-up" data-aos-delay="150">
            <span class="segment-header-pill completed">✓ Completed Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/user-plot-pin-land.jpg', alt: 'Madhura Lotus Aerial Layout' },
                { src: 'assets/images/user-plot-park-layout.jpg', alt: 'Madhura Lotus Park Layout' },
                { src: 'assets/images/user-plot-ground-real.jpg', alt: 'Madhura Lotus Demarcated Plots' },
                { src: 'assets/images/plot-layout-avenue.jpg', alt: 'Madhura Lotus Paved Internal Avenue' }
              ], 'BMRDA Approved Layout', 'var(--orange)', 'From ₹62.39L* • 6 Acres')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Kaggalipura, Kanakapura Road (NH-948), Bengaluru South</span>
                </div>
                <h2 class="project-card-title"><a href="madhura-lotus.html">Madhura Lotus – 6-Acre Gated Community</a></h2>
                <p class="project-description">
                  A completed 6-acre BMRDA-approved plotted layout with 90 exclusive villa plots. Located on NH-948 next to DAV Public School, 10 mins from Silk Institute Metro Station with asphalt roads, individual water lines, and Electronic A-Khata.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item"><span class="spec-label">Segment</span><span class="spec-value" style="color:var(--orange-bright);">Completed</span></div>
                  <div class="project-spec-item"><span class="spec-label">Total Units</span><span class="spec-value">90 Villa Plots</span></div>
                  <div class="project-spec-item"><span class="spec-label">Metro Distance</span><span class="spec-value">10 Mins (Silk Inst)</span></div>
                </div>
                <div class="project-card-footer">
                  <a href="madhura-lotus.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Madhura Lotus Kaggalipura" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- COMPLETED 2: KHB Surya City Phase-4 -->
          <div class="col-6" data-category="completed" data-aos="fade-up" data-aos-delay="200">
            <span class="segment-header-pill completed">✓ Completed Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/purple/suryacity-1.jpg', alt: 'KHB Surya City Phase 4 Entrance & Layout' },
                { src: 'assets/images/purple/khb-1-1.jpg', alt: 'KHB Surya City Phase 4 Master Avenue' },
                { src: 'assets/images/purple/Gallery-1.jpg', alt: 'KHB Surya City Phase 4 Infrastructure' },
                { src: 'assets/images/user-plot-ground-real.jpg', alt: 'KHB Surya City Demarcated Plots' }
              ], 'Government Backed • KHB & STRRPA', 'var(--orange)', 'From ₹46.80L* (₹3900/sq.ft)')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Jigani, Bannerghatta Road, South Bengaluru</span>
                </div>
                <h2 class="project-card-title"><a href="khb-suryacity.html">KHB Surya City Phase – 4</a></h2>
                <p class="project-description">
                  Asia’s Largest Residential Layout Bengaluru’s 2400-Acre Mega Township. 36,000 residential plots, modern infrastructure, and government trust. Developed under STRRPA approval in collaboration with farmers with Cauvery water connection and 60-acre sports club.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item"><span class="spec-label">Segment</span><span class="spec-value" style="color:var(--orange-bright);">Completed</span></div>
                  <div class="project-spec-item"><span class="spec-label">Area</span><span class="spec-value">2400 Acres</span></div>
                  <div class="project-spec-item"><span class="spec-label">Approval</span><span class="spec-value">STRRPA / BBMP</span></div>
                </div>
                <div class="project-card-footer">
                  <a href="khb-suryacity.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="KHB Surya City Phase-4" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- COMPLETED 3: Nandi Urban City Devanahalli -->
          <div class="col-6" data-category="completed" data-aos="fade-up" data-aos-delay="250">
            <span class="segment-header-pill completed">✓ Completed Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/purple/nandi-urban-banner.jpg', alt: 'Nandi Urban City Entrance Banner' },
                { src: 'assets/images/purple/urban-nandi-collage.jpg', alt: 'Nandi Urban City Parks & Amenities' },
                { src: 'assets/images/purple/gallery-1.jpeg', alt: 'Nandi Urban City Avenue Trees' },
                { src: 'assets/images/purple/master-plan.jpg', alt: 'Nandi Urban City Master Layout Plan' }
              ], 'BIAAPA Approved', 'var(--orange)', 'Exclusive Launch Pricing')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Devanahalli, North Bengaluru (Near Kempegowda Airport)</span>
                </div>
                <h2 class="project-card-title"><a href="nandi-urban-city.html">Nandi Urban City – Devanahalli</a></h2>
                <p class="project-description">
                  A serene 12-acre BIAAPA-approved plotted development, just minutes from Kempegowda International Airport and surrounded by Nandi Hills. Features 147 villa plots (1200–2400 sq.ft & 3000+ sq.ft mansion plots) with 7 landscaped parks and cycling track.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item"><span class="spec-label">Segment</span><span class="spec-value" style="color:var(--orange-bright);">Completed</span></div>
                  <div class="project-spec-item"><span class="spec-label">Land Size</span><span class="spec-value">12 Acres</span></div>
                  <div class="project-spec-item"><span class="spec-label">Total Units</span><span class="spec-value">147 Plots</span></div>
                </div>
                <div class="project-card-footer">
                  <a href="nandi-urban-city.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Nandi Urban City Devanahalli" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- COMPLETED 4: Habulus Tranquil Neo Town -->
          <div class="col-6" data-category="completed" data-aos="fade-up" data-aos-delay="300">
            <span class="segment-header-pill completed">✓ Completed Development</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/purple/habulus-carasoul-1.jpg', alt: 'Habulus Tranquil Tower Facade' },
                { src: 'assets/images/purple/habulus-tranquil.jpg', alt: 'Habulus Tranquil Campus' },
                { src: 'assets/images/purple/gallery-1.jpg', alt: 'Habulus Tranquil Living Space' },
                { src: 'assets/images/purple/habulus-location.jpg', alt: 'Habulus Tranquil Neo Town Route' }
              ], 'RERA & BDA Approved', 'var(--orange)', '₹90L Onwards • 2 & 3 BHK')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Neo Town, Next to Electronic City, Bengaluru</span>
                </div>
                <h2 class="project-card-title"><a href="habulus-tranquil.html">Habulus Tranquil – Ultra-Luxury</a></h2>
                <p class="project-description">
                  Spread across 5 Acres of Land, Habulus Tranquil is a premium gated community featuring 4 elegant residential towers of B+S+16 floors, 496 units, 25,000 sq.ft clubhouse, MIVAN aluminum formwork, 100% Vastu compliance, and zero common walls.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item"><span class="spec-label">Segment</span><span class="spec-value" style="color:var(--orange-bright);">Completed</span></div>
                  <div class="project-spec-item"><span class="spec-label">Structure</span><span class="spec-value">B+S+16 Floors</span></div>
                  <div class="project-spec-item"><span class="spec-label">Clubhouse</span><span class="spec-value">25,000 Sq.Ft</span></div>
                </div>
                <div class="project-card-footer">
                  <a href="habulus-tranquil.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Habulus Tranquil" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- UPCOMING 1: Sarjapur STRR Corridor -->
          <div class="col-6" data-category="upcoming" data-aos="fade-up" data-aos-delay="100">
            <span class="segment-header-pill upcoming">✦ Upcoming Launch</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/user-plot-aerial-fields.png', alt: 'Sarjapur STRR Corridor Aerial Land Bank' },
                { src: 'assets/images/user-plot-overview.png', alt: 'Sarjapur STRR Enclave Layout Model' },
                { src: 'assets/images/plot-aerial-master.jpg', alt: 'Sarjapur STRR Plotted Development' },
                { src: 'assets/images/plotting-infrastructure.jpg', alt: 'Future Infrastructure Preview' }
              ], 'Upcoming BMRDA Layout', '#3b82f6', 'Pre-Launch EOI')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Sarjapur – Attibele STRR Express Corridor, Bengaluru</span>
                </div>
                <h2 class="project-card-title"><a href="projects.html#upcoming">Aspire Palm Meadows – STRR Corridor</a></h2>
                <p class="project-description">
                  An upcoming 40-acre master-planned gated residential enclave strategically positioned along the Satellite Town Ring Road (STRR). Planned with 600+ demarcated villa sites, underground smart utilities, and extensive green tree cover.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item"><span class="spec-label">Segment</span><span class="spec-value" style="color:#60a5fa;">Upcoming</span></div>
                  <div class="project-spec-item"><span class="spec-label">Area</span><span class="spec-value">40 Acres</span></div>
                  <div class="project-spec-item"><span class="spec-label">Status</span><span class="spec-value">Pre-Launch EOI</span></div>
                </div>
                <div class="project-card-footer">
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Sarjapur STRR Corridor (Pre-Launch)" style="font-size:0.85rem; padding:8px 18px; width:100%;">Register Pre-Launch EOI &rarr;</button>
                </div>
              </div>
            </div>
          </div>

          <!-- UPCOMING 2: North Bengaluru Aerospace Plotted Hub -->
          <div class="col-6" data-category="upcoming" data-aos="fade-up" data-aos-delay="200">
            <span class="segment-header-pill upcoming">✦ Upcoming Launch</span>
            <div class="project-card" data-tilt>
              ${makeProjectSlider([
                { src: 'assets/images/user-plot-overview.png', alt: 'North Bangalore Aerospace Enclave' },
                { src: 'assets/images/user-plot-aerial-fields.png', alt: 'KIADB Aerospace Corridor Land' },
                { src: 'assets/images/plot-layout-avenue.jpg', alt: 'Aerospace Corridor Layout Design' },
                { src: 'assets/images/user-plot-park-aerial.jpg', alt: 'Green Park Concept' }
              ], 'Upcoming BIAAPA Sanctioned', '#3b82f6', 'Pre-Booking Phase')}

              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>KIADB Aerospace & IT Park Corridor, Devanahalli</span>
                </div>
                <h2 class="project-card-title"><a href="projects.html#upcoming">North Bengaluru Aerospace Enclave</a></h2>
                <p class="project-description">
                  A high-conviction 25-acre plotted enclave tailored for IT, aviation, and aerospace professionals near Devanahalli SEZ and Kempegowda International Airport. Designed with sustainable solar avenue lighting and EV charging pods.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item"><span class="spec-label">Segment</span><span class="spec-value" style="color:#60a5fa;">Upcoming</span></div>
                  <div class="project-spec-item"><span class="spec-label">Area</span><span class="spec-value">25 Acres</span></div>
                  <div class="project-spec-item"><span class="spec-label">Airport</span><span class="spec-value">8 Mins Direct</span></div>
                </div>
                <div class="project-card-footer">
                  <button class="btn-primary" data-open-modal="visit" data-project-name="North Bengaluru Aerospace Hub (Pre-Launch)" style="font-size:0.85rem; padding:8px 18px; width:100%;">Register Pre-Launch EOI &rarr;</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;

// Write them to workspace
fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'about.html'), aboutHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'projects.html'), projectsHtml, 'utf8');

console.log('Part 1 updated with Who We Are/What We Are, 3 segments, and scrolling image carousels.');
