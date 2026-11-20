const fs = require('fs');
const path = require('path');
const { getHeader, getFooter, icons } = require('./templates');

// 4. KHB SURYA CITY PHASE-4
const khbHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KHB Surya City Phase-4 | ASPIRE HOUSING — 2400-Acre Mega Township</title>
  <meta name="description" content="KHB Surya City Phase-4 Bannerghatta Road Jigani - Asia's biggest residential township developed by Karnataka Housing Board. Plots from ₹46.80L (₹3900/sq.ft).">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('khb')}

  <main style="padding-top:76px;">
    <!-- Project Hero Header Banner -->
    <section class="project-detail-hero">
      <div class="project-detail-hero-bg">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85" alt="KHB Surya City Phase 4 Mega Township Plotted Layout" />
      </div>
      <div class="project-detail-hero-overlay"></div>

      <div class="project-detail-hero-content">
        <div class="breadcrumbs-nav" data-aos="fade-down">
          <a href="index.html">Home</a> <span>/</span>
          <a href="projects.html">Projects</a> <span>/</span>
          <span style="color:#fff;">KHB Surya City Phase-4</span>
        </div>

        <h1 class="section-title" style="font-size:clamp(2.4rem, 5vw, 3.8rem); max-width:960px;" data-aos="fade-up" data-aos-delay="200">
          Asia’s Biggest Residential Township — KHB Surya City Phase-4
        </h1>
        <p class="section-subtitle" style="max-width:850px; font-size:1.15rem;" data-aos="fade-up" data-aos-delay="300">
          Experience a New Lifestyle on Bannerghatta Road, Jigani, Bengaluru. Live Smart, Invest Wise with BBMP-Approved Township with <strong>No Lease Period & Electronic A Khata</strong>.
        </p>

        <div style="display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap;" data-aos="fade-up" data-aos-delay="400">
          <button class="btn-primary" data-open-modal="visit" data-project-name="KHB Surya City Phase-4" style="padding:14px 32px; font-size:1rem;">
            Schedule a Site Visit &rarr;
          </button>
          <a href="#amenities" class="btn-secondary" style="padding:14px 28px; font-size:1rem;">
            Explore 60-Acre Sports Club
          </a>
        </div>
      </div>
    </section>

    <!-- Key Stats Banner -->
    <section class="section" style="padding:2.5rem 0; background:rgba(255,87,34,0.04); border-bottom:1px solid var(--border-subtle);">
      <div class="section-container">
        <div class="bento-grid" style="text-align:center;">
          <div class="col-3" data-aos="zoom-in" data-aos-delay="100">
            <div style="font-size:2.2rem; font-weight:900; color:#fff;">2,400 <span style="color:var(--orange);">Acres</span></div>
            <div style="font-size:0.8rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-top:4px;">Mega Township Extent</div>
          </div>
          <div class="col-3" data-aos="zoom-in" data-aos-delay="200">
            <div style="font-size:2.2rem; font-weight:900; color:#fff;">36,000</div>
            <div style="font-size:0.8rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-top:4px;">Residential Villa Plots</div>
          </div>
          <div class="col-3" data-aos="zoom-in" data-aos-delay="300">
            <div style="font-size:2.2rem; font-weight:900; color:#fff;">₹3,900<span style="color:var(--orange);">/sq.ft*</span></div>
            <div style="font-size:0.8rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-top:4px;">Unbeatable South Bengaluru Price</div>
          </div>
          <div class="col-3" data-aos="zoom-in" data-aos-delay="400">
            <div style="font-size:2.2rem; font-weight:900; color:#fff;">100% Clear</div>
            <div style="font-size:0.8rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-top:4px;">STRRPA & BBMP Electronic A-Khata</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Narrative & Government Promise -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-7" data-aos="fade-right">
            <span class="section-tag">Government-Backed Security</span>
            <h2 style="font-size:2.2rem; font-weight:800; color:#fff; margin-bottom:1.25rem;">
              Why Invest in KHB Surya City – A Promise of Comfort & Growth
            </h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              When it comes to choosing a home or investment, trust and security matter most. KHB Surya City, developed under the <strong>Karnataka Housing Board (KHB)</strong>, offers the rare advantage of a government-approved layout — ensuring legal transparency, guaranteed infrastructure, and long-term value appreciation.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              Located in the heart of Bangalore’s growth corridor, this project brings together urban sophistication and tranquil living. Each villa plot is part of a meticulously planned township, complete with wide black-top roads, streetlights, <strong>Cauvery water connection</strong>, and underground utilities — all built to strict government standards.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8;">
              Whether you’re planning to build your dream home or seeking a safe, high-return investment, KHB Surya City offers you both — the assurance of a government project and the lifestyle of modern Bangalore.
            </p>
          </div>

          <div class="col-5" data-aos="fade-left">
            <div class="glass-card" data-tilt style="border:1px solid var(--orange-border); background:rgba(18,21,30,0.95);">
              <h3 style="font-size:1.35rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">Plot Dimensions & Pricing</h3>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:1rem; color:var(--text-muted); font-size:0.95rem;">
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Compact Villa Sites:</span> <strong style="color:#fff;">30' x 40' (1200 sq.ft)</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Standard Villa Sites:</span> <strong style="color:#fff;">30' x 50' (1500 sq.ft)</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Executive Luxury Sites:</span> <strong style="color:#fff;">40' x 60' (2400 sq.ft)</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Starting Price:</span> <strong style="color:var(--orange-bright);">₹46.80 Lakh*</strong>
                </li>
                <li style="display:flex; justify-content:space-between; padding-top:4px;">
                  <span>Title & Khata:</span> <strong style="color:#10b981;">Electronic A-Khata Ready</strong>
                </li>
              </ul>
              <button class="btn-primary" data-open-modal="visit" data-project-name="KHB Surya City Phase-4 Plot Selection" style="width:100%; margin-top:1.8rem; padding:12px;">
                Download Rate Card & Plot Layout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Amenities Grid -->
    <section class="section" id="amenities" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">World-Class Infrastructure</span>
          <h2 class="section-title">Government-Developed Amenities for Modern Living</h2>
          <p class="section-subtitle">
            KHB Surya City is steadily taking shape — each structure built with precision, quality, and care, reflecting our promise of a modern, sustainable township.
          </p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.trophy}</div>
              <h3 class="pillar-title">60 Acres Sports Club</h3>
              <p class="pillar-desc">A sprawling 60-acre dedicated sports complex offering indoor and outdoor sports, athletics, tennis courts, and athletic facilities for all age groups.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.commercial}</div>
              <h3 class="pillar-title">Commercial Complex</h3>
              <p class="pillar-desc">Shop, dine, and work at the heart of the township’s vibrant high-street commercial hub and retail arcade.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.water}</div>
              <h3 class="pillar-title">Cauvery Water Assured</h3>
              <p class="pillar-desc">Assured access to clean, dependable Cauvery municipal water supply delivered to every individual plot threshold.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.electricity}</div>
              <h3 class="pillar-title">Underground Electricity</h3>
              <p class="pillar-desc">Ensures safe, reliable, and 100% clutter-free underground power cabling and smart grid distribution throughout.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.water}</div>
              <h3 class="pillar-title">Rain Water Harvesting</h3>
              <p class="pillar-desc">Eco-conscious sustainable drainage systems designed to recharge groundwater aquifers naturally.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.eco}</div>
              <h3 class="pillar-title">Sewage Treatment Plant</h3>
              <p class="pillar-desc">Advanced STP facility designed to treat and recycle wastewater for verdant landscaping and clean eco-living.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.road}</div>
              <h3 class="pillar-title">Wide Paved Roads</h3>
              <p class="pillar-desc">Broad black-top asphalt avenues with pedestrian walkways, tree-lined medians, and LED illumination.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.park}</div>
              <h3 class="pillar-title">Well Maintained Parks</h3>
              <p class="pillar-desc">Manicured community green parks, gazebos, and seating zones perfect for evening family strolls.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.play}</div>
              <h3 class="pillar-title">Children Play Area</h3>
              <p class="pillar-desc">Safe, rubberized fun-filled play spaces where children can socialize, explore, and play safely.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Connectivity -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-6" data-aos="fade-right">
            <span class="section-tag">Strategic Hub</span>
            <h2 style="font-size:2rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">Location Advantages & Connectivity</h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.7; margin-bottom:1.5rem;">
              Located near Electronic City, Jigani, and Bommasandra, Surya City Phase-4 enjoys seamless multi-lane connectivity through Hosur Road, NICE Road, and the upcoming Metro Phase-II extension.
            </p>
            <div style="display:flex; flex-direction:column; gap:1rem;">
              <div style="background:var(--bg-card); padding:1.2rem; border-radius:14px; border:1px solid var(--border-subtle);">
                <strong style="color:var(--orange-bright);">Proximity to Workplaces:</strong> Electronic City Phase 1 & 2 (15 Mins), Jigani Industrial Area (5 Mins), Bommasandra Tech Park (10 Mins).
              </div>
              <div style="background:var(--bg-card); padding:1.2rem; border-radius:14px; border:1px solid var(--border-subtle);">
                <strong style="color:var(--orange-bright);">Healthcare Centers:</strong> Narayana Hrudayalaya, Mazumdar Shaw Medical Center, SPARSH Hospital within quick drive.
              </div>
              <div style="background:var(--bg-card); padding:1.2rem; border-radius:14px; border:1px solid var(--border-subtle);">
                <strong style="color:var(--orange-bright);">Top Education:</strong> Sherwood High, Christ Academy, Sarala Birla Academy, Ryan International.
              </div>
            </div>
          </div>

          <div class="col-6" data-aos="fade-left">
            <div class="glass-card" data-tilt style="padding:2.5rem; text-align:center; border:1px solid var(--orange-border);">
              <span class="section-tag">Direct Booking Desk</span>
              <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin:0.5rem 0 1rem;">Schedule Your KHB Surya City Site Visit</h3>
              <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">
                Free executive cab pick-up available from Jayanagar HQ or Silk Board for prospective plot buyers.
              </p>
              <button class="btn-primary" data-open-modal="visit" data-project-name="KHB Surya City Phase-4" style="width:100%; padding:14px;">
                Book Free Inspection Tour &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;

// 5. NANDI URBAN CITY DEVANAHALLI
const nandiHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nandi Urban City Devanahalli | ASPIRE HOUSING — Airport Corridor Plotted Community</title>
  <meta name="description" content="Nandi Urban City Devanahalli - 12-Acre BIAAPA-approved plotted community 10 minutes from Kempegowda International Airport and surrounded by Nandi Hills.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('nandi')}

  <main style="padding-top:76px;">
    <!-- Project Hero Header Banner -->
    <section class="project-detail-hero">
      <div class="project-detail-hero-bg">
        <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=85" alt="Nandi Urban City Devanahalli Villa Plots Landscape" />
      </div>
      <div class="project-detail-hero-overlay"></div>

      <div class="project-detail-hero-content">
        <div class="breadcrumbs-nav" data-aos="fade-down">
          <a href="index.html">Home</a> <span>/</span>
          <a href="projects.html">Projects</a> <span>/</span>
          <span style="color:#fff;">Nandi Urban City Devanahalli</span>
        </div>

        <h1 class="section-title" style="font-size:clamp(2.4rem, 5vw, 3.8rem); max-width:960px;" data-aos="fade-up" data-aos-delay="200">
          Nandi Urban City – Craft Your Dream Home
        </h1>
        <p class="section-subtitle" style="max-width:850px; font-size:1.15rem;" data-aos="fade-up" data-aos-delay="300">
          Own Your Luxury Villa Plot in Devanahalli — Premium 12-Acre Community Near Kempegowda International Airport @ <strong>Exclusive Launch Pricing!</strong> Invest in North Bengaluru’s Most Promising Growth Destination.
        </p>

        <div style="display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap;" data-aos="fade-up" data-aos-delay="400">
          <button class="btn-primary" data-open-modal="visit" data-project-name="Nandi Urban City Devanahalli" style="padding:14px 32px; font-size:1rem;">
            Schedule a Site Visit &rarr;
          </button>
          <a href="#highlights" class="btn-secondary" style="padding:14px 28px; font-size:1rem;">
            View 147 Villa Plots
          </a>
        </div>
      </div>
    </section>

    <!-- Project Overview & Planning -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-7" data-aos="fade-right">
            <span class="section-tag">Where Planning Meets Possibility</span>
            <h2 style="font-size:2.2rem; font-weight:800; color:#fff; margin-bottom:1.25rem;">
              North Bengaluru's Foremost Plotted Sanctuary
            </h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              At Nandi Urban City, thoughtful planning meets modern convenience. Spread across <strong>12 acres</strong>, this <strong>BIAAPA-approved</strong> plotted development is designed to maximize open spaces with <strong>7 beautifully landscaped parks</strong>, wide RCC internal roads, and advanced underground infrastructure (UGD & STP).
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              Located in Devanahalli — the heart of New Bengaluru, the project benefits from rapid growth driven by major <strong>KIADB developments spanning over 15,000 acres</strong>. With Kempegowda International Airport just 10 minutes away, and seamless connectivity to National Highways and the Satellite Town Ring Road (STRR), residents enjoy unmatched accessibility.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8;">
              Its well-demarcated villa plots provide a safe, organized, and future-ready living environment surrounded by scenic views of Nandi Hills.
            </p>
          </div>

          <div class="col-5" data-aos="fade-left">
            <div class="glass-card" id="highlights" data-tilt style="border:1px solid var(--orange-border); background:rgba(18,21,30,0.95);">
              <h3 style="font-size:1.35rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">Project Highlights</h3>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.95rem; color:var(--text-muted); font-size:0.95rem;">
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Plotted Extent:</span> <strong style="color:#fff;">12 Acres Gated</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Total Villa Plots:</span> <strong style="color:#fff;">147 Well-Demarcated Sites</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Luxury Villa Plots:</span> <strong style="color:#fff;">1,200 – 2,400 sq.ft</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Mansion Plots:</span> <strong style="color:#fff;">3,000+ sq.ft</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Standard Dimensions:</span> <strong style="color:#fff;">30' x 40' & 40' x 60'</strong>
                </li>
                <li style="display:flex; justify-content:space-between; padding-top:4px;">
                  <span>Parks & Greens:</span> <strong style="color:var(--orange-bright);">7 Landscaped Theme Parks</strong>
                </li>
              </ul>
              <button class="btn-primary" data-open-modal="visit" data-project-name="Nandi Urban City Plot Selection" style="width:100%; margin-top:1.8rem; padding:12px;">
                Request Master Plan & Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Amenities Section -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Enriched Lifestyle</span>
          <h2 class="section-title">Amenities That Add New Dimensions To Fine-Living</h2>
          <p class="section-subtitle">Crafted for wellness, recreation, and community living under clean North Bengaluru skies.</p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.meditation}</div>
              <h3 class="pillar-title">Meditation Zone</h3>
              <p class="pillar-desc">A calm, quiet corner created to help residents unwind, reflect, and rejuvenate amidst native trees and soothing water elements.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.cycling}</div>
              <h3 class="pillar-title">Cycling Track</h3>
              <p class="pillar-desc">A dedicated, traffic-free track that encourages daily fitness, leisure morning rides, and an active outdoor lifestyle.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.gym}</div>
              <h3 class="pillar-title">Outdoor Gym</h3>
              <p class="pillar-desc">A well-equipped open-air fitness space supporting calisthenics, cross-training, and healthy living for residents.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.senior}</div>
              <h3 class="pillar-title">Senior Citizen Heaven</h3>
              <p class="pillar-desc">A peaceful haven with comfortable reflexology pathways, shaded gazebos, and greenery, perfect for relaxation and socializing.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.park}</div>
              <h3 class="pillar-title">Garden with Sit-outs</h3>
              <p class="pillar-desc">Beautifully landscaped gardens with cosy seating areas for precious family time, stargazing, and evening relaxation.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.play}</div>
              <h3 class="pillar-title">Kids Play Area</h3>
              <p class="pillar-desc">A safe, vibrant zone designed for children to explore, play, build motor skills, and make lifelong childhood friends.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Advantages -->
    <section class="section">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Devanahalli Growth Corridor</span>
          <h2 class="section-title">Live At The Center of Bengaluru's Fastest-Growing Corridor</h2>
          <p class="section-subtitle">A 12-acre plotted development designed with wide roads, parks, and future-ready infrastructure with unmatched connectivity.</p>
        </div>

        <div class="bento-grid">
          <div class="col-6" data-aos="fade-right">
            <div class="glass-card" data-tilt style="height:100%;">
              <h3 style="color:#fff; font-size:1.35rem; font-weight:700; margin-bottom:1.2rem;">High-Growth Economic Triggers</h3>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:1.2rem; color:var(--text-muted); font-size:0.95rem;">
                <li style="display:flex; gap:12px; align-items:flex-start;">
                  <span style="color:var(--orange);">${icons.plane}</span>
                  <div><strong>Kempegowda International Airport (BLR):</strong> Just 10 minutes away via signal-free expressway.</div>
                </li>
                <li style="display:flex; gap:12px; align-items:flex-start;">
                  <span style="color:var(--orange);">${icons.building}</span>
                  <div><strong>KIADB Aerospace & IT Park:</strong> Over 15,000 acres powering thousands of high-tech jobs.</div>
                </li>
                <li style="display:flex; gap:12px; align-items:flex-start;">
                  <span style="color:var(--orange);">${icons.road}</span>
                  <div><strong>Satellite Town Ring Road (STRR):</strong> Seamless connectivity to Hoskote, Whitefield, and Tumkur.</div>
                </li>
                <li style="display:flex; gap:12px; align-items:flex-start;">
                  <span style="color:var(--orange);">${icons.train}</span>
                  <div><strong>Upcoming Airport Metro:</strong> Fast transit linking Devanahalli directly to Central Bengaluru.</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6" data-aos="fade-left">
            <div class="glass-card" data-tilt style="height:100%; display:flex; flex-direction:column; justify-content:center; text-align:center; border:1px solid var(--orange-border);">
              <span class="section-tag">Pre-Launch Privilege</span>
              <h3 style="font-size:1.8rem; font-weight:800; color:#fff; margin:0.5rem 0;">Book Exclusive Launch Pricing Today</h3>
              <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:1.5rem;">
                Secure early-mover capital gains before the upcoming commercial corridor price revisions.
              </p>
              <button class="btn-primary" data-open-modal="visit" data-project-name="Nandi Urban City Devanahalli" style="padding:14px 28px;">
                Lock Launch Pricing & Plot Selection &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;

// 6. AP TOWNSHIP
const apHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AP Township | ASPIRE HOUSING — 30-Acre BMRDA & RERA Approved Community</title>
  <meta name="description" content="AP Township near Electronic City - 30-Acre BMRDA & RERA approved township with 500 premium plots, 18,000+ trees, 8 themed parks, and 50+ lifestyle amenities.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('ap')}

  <main style="padding-top:76px;">
    <!-- Project Hero Header Banner -->
    <section class="project-detail-hero">
      <div class="project-detail-hero-bg">
        <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1920&q=85" alt="AP Township Gated Plotted Community" />
      </div>
      <div class="project-detail-hero-overlay"></div>

      <div class="project-detail-hero-content">
        <div class="breadcrumbs-nav" data-aos="fade-down">
          <a href="index.html">Home</a> <span>/</span>
          <a href="projects.html">Projects</a> <span>/</span>
          <span style="color:#fff;">AP Township</span>
        </div>

        <h1 class="section-title" style="font-size:clamp(2.4rem, 5vw, 3.8rem); max-width:960px;" data-aos="fade-up" data-aos-delay="200">
          AP Township – Live Where Comfort Meets Everyday Luxury
        </h1>
        <p class="section-subtitle" style="max-width:850px; font-size:1.15rem;" data-aos="fade-up" data-aos-delay="300">
          Premium 30-acre BMRDA & RERA-approved villa township with 8 themed parks, grand clubhouse, swimming pool, and modern infrastructure strategically located near Electronic City for high growth and long-term value.
        </p>

        <div style="display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap;" data-aos="fade-up" data-aos-delay="400">
          <button class="btn-primary" data-open-modal="visit" data-project-name="AP Township BMRDA" style="padding:14px 32px; font-size:1rem;">
            Schedule a Site Visit &rarr;
          </button>
          <a href="#amenities" class="btn-secondary" style="padding:14px 28px; font-size:1rem;">
            Explore 50+ Amenities
          </a>
        </div>
      </div>
    </section>

    <!-- Project Overview -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-7" data-aos="fade-right">
            <span class="section-tag">Modern Living in a Lush Green Township</span>
            <h2 style="font-size:2.2rem; font-weight:800; color:#fff; margin-bottom:1.25rem;">
              Crafted For Families, Designed for Generations
            </h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              At AP Township, exceptional planning blends seamlessly with modern living. Spread across <strong>30 acres</strong>, this BMRDA & RERA-approved premium villa township is crafted to offer a refined lifestyle with <strong>wide 30 & 40 ft concrete roads</strong>, underground utilities, and thoughtfully curated theme parks.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              Designed with <strong>over 18,000 trees and 48% open green spaces</strong>, AP Township prioritizes health, nature, and recreation. Residents enjoy access to multiple theme parks, sports facilities, jogging tracks, kids’ play areas, senior zones, an amphitheatre, and a fully equipped clubhouse — all planned to elevate everyday living.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8;">
              The development includes <strong>500 well-demarcated villa plots</strong>, ensuring a safe, organized, and future-ready community for families and investors alike.
            </p>
          </div>

          <div class="col-5" data-aos="fade-left">
            <div class="glass-card" data-tilt style="border:1px solid var(--orange-border); background:rgba(18,21,30,0.95);">
              <h3 style="font-size:1.35rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">Township Highlights</h3>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.95rem; color:var(--text-muted); font-size:0.95rem;">
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Statutory Approval:</span> <strong style="color:var(--orange-bright);">BMRDA & RERA Approved</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Township Area:</span> <strong style="color:#fff;">30 Acres Planned</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Total Villa Plots:</span> <strong style="color:#fff;">500 Premium Plots</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Themed Parks:</span> <strong style="color:#fff;">8 Themed Parks</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Eco Density:</span> <strong style="color:#fff;">18,000+ Trees (48% Green)</strong>
                </li>
                <li style="display:flex; justify-content:space-between; padding-top:4px;">
                  <span>Lifestyle Amenities:</span> <strong style="color:var(--orange-bright);">50+ Dedicated Amenities</strong>
                </li>
              </ul>
              <div style="margin-top:1.2rem; font-size:0.75rem; color:var(--text-dim); text-align:center;">
                Project RERA # PRM/KA/RERA/1251/308/PR/220118/004642
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Amenities Grid -->
    <section class="section" id="amenities" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Fine-Living Standard</span>
          <h2 class="section-title">Amenities That Add New Dimensions To Fine-Living</h2>
          <p class="section-subtitle">Crafted for wellness, recreation, and community living with over 50+ luxury features.</p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.building}</div>
              <h3 class="pillar-title">Clubhouse & Multipurpose Room</h3>
              <p class="pillar-desc">A vibrant, high-ceiling architectural space for community celebrations, indoor recreation, fitness, and family functions.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.pool}</div>
              <h3 class="pillar-title">Swimming Pool & Guest Suites</h3>
              <p class="pillar-desc">Resort-style infinity edge pool with poolside sun loungers, change rooms, and dedicated luxury guest suites for visiting family.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.theatre}</div>
              <h3 class="pillar-title">Private Mini Theatre</h3>
              <p class="pillar-desc">An acoustic-treated private cinema zone for high-definition screenings, movie nights, and sports match viewings.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.park}</div>
              <h3 class="pillar-title">Theme Parks & Nature Viewpoints</h3>
              <p class="pillar-desc">Beautifully landscaped horticultural gardens and elevated sit-out viewpoints promoting outdoor wellness and calmness.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.road}</div>
              <h3 class="pillar-title">Walking & Jogging Tracks</h3>
              <p class="pillar-desc">Scenic shaded tree-lined pathways that support daily morning jogs, cardiovascular fitness, and brisk evening strolls.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.sports}</div>
              <h3 class="pillar-title">All-Weather Sports Facilities</h3>
              <p class="pillar-desc">Dedicated courts and practice areas for cricket nets, basketball, badminton, tennis, and active recreational games.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Advantages -->
    <section class="section">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Electronic City Corridor</span>
          <h2 class="section-title">Live at the Epicenter of Bengaluru’s High-Growth Zone</h2>
          <p class="section-subtitle">Surrounded by leading tech giants, international schools, and premier hospitals.</p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <h4 style="color:var(--orange-bright); font-size:1.1rem; margin-bottom:0.75rem;">Corporate & Tech Hubs</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.6;">Infosys, Wipro, TCS, Tech Mahindra, Biocon, HP, and Electronic City Phase 1 & 2 campuses just minutes away.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <h4 style="color:var(--orange-bright); font-size:1.1rem; margin-bottom:0.75rem;">Reputed Schools & Colleges</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.6;">Delhi Public School, Ebenezer International, Treamis World School, PES University, and Azim Premji University.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <h4 style="color:var(--orange-bright); font-size:1.1rem; margin-bottom:0.75rem;">Super-Specialty Healthcare</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.6;">Narayana Health City, Mazumdar Shaw Cancer Centre, Kauvery Hospital, and Apollo Clinic within close reach.</p>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:3.5rem;" data-aos="fade-up">
          <button class="btn-primary" data-open-modal="visit" data-project-name="AP Township BMRDA" style="padding:14px 34px; font-size:1rem;">
            Book Your AP Township Plot Inspection &rarr;
          </button>
        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;

// 7. HABULUS TRANQUIL
const habulusHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Habulus Tranquil | ASPIRE HOUSING — 2 & 3 BHK Ultra Luxury Apartments</title>
  <meta name="description" content="Habulus Tranquil Neo Town Electronic City - Ultra-luxury 2, 2.5 & 3 BHK apartments ₹90L onwards. B+S+16 floors, 25,000 sq.ft clubhouse, MIVAN construction.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('habulus')}

  <main style="padding-top:76px;">
    <!-- Project Hero Header Banner -->
    <section class="project-detail-hero">
      <div class="project-detail-hero-bg">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=85" alt="Habulus Tranquil 5-Acre Residential Campus" />
      </div>
      <div class="project-detail-hero-overlay"></div>

      <div class="project-detail-hero-content">
        <div class="breadcrumbs-nav" data-aos="fade-down">
          <a href="index.html">Home</a> <span>/</span>
          <a href="projects.html">Projects</a> <span>/</span>
          <span style="color:#fff;">Habulus Tranquil</span>
        </div>

        <h1 class="section-title" style="font-size:clamp(2.4rem, 5vw, 3.8rem); max-width:960px;" data-aos="fade-up" data-aos-delay="200">
          Habulus Tranquil — Rise To A Life Of Prestige
        </h1>
        <p class="section-subtitle" style="max-width:850px; font-size:1.15rem;" data-aos="fade-up" data-aos-delay="300">
          Spread across 5 Acres of Land, Habulus Tranquil is a premium gated community in Neo Town, Electronic City – designed for comfort, convenience, and class. <strong>2, 2.5 & 3 BHK Ultra-Luxury Apartments ₹90L onwards (Total flats 496).</strong>
        </p>

        <div style="display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap;" data-aos="fade-up" data-aos-delay="400">
          <button class="btn-primary" data-open-modal="visit" data-project-name="Habulus Tranquil Apartments" style="padding:14px 32px; font-size:1rem;">
            Schedule a Site Visit &rarr;
          </button>
          <a href="#amenities" class="btn-secondary" style="padding:14px 28px; font-size:1rem;">
            View 25,000 Sq.Ft Clubhouse
          </a>
        </div>
      </div>
    </section>

    <!-- Project Overview -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-7" data-aos="fade-right">
            <span class="section-tag">Thoughtfully Designed for Happy Family Living</span>
            <h2 style="font-size:2.2rem; font-weight:800; color:#fff; margin-bottom:1.25rem;">
              Experience Luxury. Embrace Freedom.
            </h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              Habulus Tranquil offers a rare blend of smart investment and elevated living. <strong>RERA-approved and BDA-approved</strong>, the project features premium specifications, modern design, and <strong>40+ lifestyle amenities</strong>. Located in a fast-growing residential corridor with excellent connectivity, it ensures strong capital appreciation, high rental demand, and long-term value for homeowners and investors alike.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              The project features an <strong>Earthquake Resistant – Seismic Zone II–compliant RCC framed structure</strong>, engineered for strength, safety, and long-term durability. All walls are constructed using <strong>cast-in-situ RCC with Aluminium Formwork (MIVAN) technology</strong>, ensuring superior structural precision, smoother finishes, and enhanced build quality.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8;">
              A generous floor-to-floor height of approximately <strong>3000 mm</strong> provides well-ventilated, airy living spaces and a majestic sense of openness throughout the residences.
            </p>
          </div>

          <div class="col-5" data-aos="fade-left">
            <div class="glass-card" data-tilt style="border:1px solid var(--orange-border); background:rgba(18,21,30,0.95);">
              <h3 style="font-size:1.35rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">Architectural Highlights</h3>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.95rem; color:var(--text-muted); font-size:0.95rem;">
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Building Structure:</span> <strong style="color:#fff;">B + S + 16 Floor High-Rise</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Towers:</span> <strong style="color:#fff;">4 Elegant Residential Towers</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Total Flats:</span> <strong style="color:#fff;">496 Exclusive Units</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Clubhouse Size:</span> <strong style="color:var(--orange-bright);">25,000 Sq. Ft. Grand Club</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Vastu Compliance:</span> <strong style="color:#fff;">100% Vastu-Compliant</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Privacy Design:</span> <strong style="color:#fff;">No Common Walls</strong>
                </li>
                <li style="display:flex; justify-content:space-between; padding-top:4px;">
                  <span>Legal Compliance:</span> <strong style="color:var(--orange-bright);">RERA & BDA Approved</strong>
                </li>
              </ul>
              <button class="btn-primary" data-open-modal="visit" data-project-name="Habulus Tranquil Floorplans" style="width:100%; margin-top:1.8rem; padding:12px;">
                Download 2 & 3 BHK Floor Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- World Class Amenities Grid -->
    <section class="section" id="amenities" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">World-Class Amenities</span>
          <h2 class="section-title">Where Luxury Meets Thoughtful Living</h2>
          <p class="section-subtitle">Over 40+ carefully curated lifestyle, wellness, and sporting amenities for all family generations.</p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.pool}</div>
              <h3 class="pillar-title">3-Tier Pool Experience</h3>
              <p class="pillar-desc">Adult Lap Swimming Pool, shallow protected Kids Pool, and dedicated heated Elders’ Pool for therapy and relaxation.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.gym}</div>
              <h3 class="pillar-title">Fitness Center & Yoga</h3>
              <p class="pillar-desc">State-of-the-art cardiovascular and strength gym equipment, coupled with a serene indoor open-air yoga deck.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.sports}</div>
              <h3 class="pillar-title">Pickleball & Sand Volleyball</h3>
              <p class="pillar-desc">Modern tournament-grade Pickleball courts, beach-sand volleyball arena, and table tennis lounge.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.road}</div>
              <h3 class="pillar-title">Jogging Track & Skating</h3>
              <p class="pillar-desc">Continuous rubber-cushioned running track alongside a smooth roller-skating rink for youngsters.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.theatre}</div>
              <h3 class="pillar-title">Amphitheatre & Party Hall</h3>
              <p class="pillar-desc">Open-air cultural performance amphitheatre and grand banquet party hall with catering staging pantry.</p>
            </div>
          </div>
          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.park}</div>
              <h3 class="pillar-title">Pet Park & Greens</h3>
              <p class="pillar-desc">Dedicated fenced pet exercise park, shaded pergola seating, and lush manicured landscape greens.</p>
            </div>
          </div>
        </div>

        <!-- Safety & Sustainability -->
        <div style="margin-top:3.5rem;">
          <h3 style="font-size:1.6rem; font-weight:800; color:#fff; text-align:center; margin-bottom:2rem;" data-aos="fade-up">
            Designed for Safety, Comfort & Sustainability
          </h3>
          <div class="bento-grid">
            <div class="col-4" data-aos="fade-up" data-aos-delay="100">
              <div class="glass-card" data-tilt>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:0.6rem;">
                  <span style="color:var(--orange);">${icons.electricity}</span>
                  <h4 style="color:var(--orange-bright); font-size:1.05rem;">EV Charging Points</h4>
                </div>
                <p style="color:var(--text-muted); font-size:0.88rem;">Future-ready infrastructure supporting eco-friendly electric vehicle mobility.</p>
              </div>
            </div>
            <div class="col-4" data-aos="fade-up" data-aos-delay="200">
              <div class="glass-card" data-tilt>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:0.6rem;">
                  <span style="color:var(--orange);">${icons.shieldCheck}</span>
                  <h4 style="color:var(--orange-bright); font-size:1.05rem;">Round-the-Clock Security</h4>
                </div>
                <p style="color:var(--text-muted); font-size:0.88rem;">24/7 manned security with CCTV surveillance, intercom access, and solar perimeter fencing.</p>
              </div>
            </div>
            <div class="col-4" data-aos="fade-up" data-aos-delay="300">
              <div class="glass-card" data-tilt>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:0.6rem;">
                  <span style="color:var(--orange);">${icons.eco}</span>
                  <h4 style="color:var(--orange-bright); font-size:1.05rem;">Eco-Friendly STP & OWC</h4>
                </div>
                <p style="color:var(--text-muted); font-size:0.88rem;">Organic Waste Converter, rainwater harvesting, and state-of-the-art sewage treatment.</p>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:3.5rem;" data-aos="fade-up">
          <button class="btn-primary" data-open-modal="visit" data-project-name="Habulus Tranquil Apartments" style="padding:14px 34px; font-size:1rem;">
            Book Your Show Flat Tour &rarr;
          </button>
        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;

// Write them to workspace
fs.writeFileSync(path.join(__dirname, 'khb-suryacity.html'), khbHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'nandi-urban-city.html'), nandiHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'ap-township.html'), apHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'habulus-tranquil.html'), habulusHtml, 'utf8');

console.log('Part 2 updated with vector SVG icons.');
