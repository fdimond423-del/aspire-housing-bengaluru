const fs = require('fs');
const path = require('path');
const { getHeader, getFooter, icons } = require('./templates');

// 1. INDEX.HTML (Home Page)
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASPIRE HOUSING | Built on Trust. Backed by Transparency.</title>
  <meta name="description" content="Aspire Housing - Delivering clients more project clarity & greater insight across Bengaluru's premier plotted townships and luxury residential developments.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('home')}

  <main>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg-media">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85" alt="Aspire Housing Premier Plotted Townships" class="hero-bg-img" />
        <div class="hero-bg-overlay"></div>
      </div>

      <div class="hero-container">
        <div class="hero-split-grid">
          <!-- Left Column: Hero Text & Counters -->
          <div>
            <div class="hero-badge-pill" data-aos="fade-down" data-aos-duration="600">
              <span class="dot"></span>
              <span>Bengaluru's Premier Real Estate Advisory</span>
            </div>

            <h1 class="hero-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              Delivering our clients more <span class="highlight text-shimmer">project clarity</span> & greater insight.
            </h1>

            <p class="hero-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Aspire Housing was founded as an emerging entity in the Real Estate sector, motivated by a shared ambition to introduce order to this frequently tumultuous industry. Our journey commenced with conversations focused on re-imagining the Real Estate environment through innovative approaches. The shared ethics and values we adhere to have formed the culture at Aspire Housing, which prioritizes transparency in the industry.
            </p>

            <div style="display:flex; flex-wrap:wrap; gap:1rem;" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              <a href="projects.html" class="btn-primary" style="padding:14px 32px; font-size:1rem;">Explore Master Projects &rarr;</a>
              <button class="btn-secondary" data-open-modal="visit" data-project-name="General Inquiry" style="padding:14px 28px; font-size:1rem;">Book a Private Site Tour</button>
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
                <div class="hero-stat-label">RERA & STRRPA Approved</div>
              </div>
              <div class="hero-stat-item">
                <div class="hero-stat-number"><span class="accent">₹</span><span data-counter="46" data-suffix=".80L*">46.80L*</span></div>
                <div class="hero-stat-label">Plots Starting Price</div>
              </div>
            </div>
          </div>

          <!-- Right Column: 3D Showcase Image Card with Floating Badges -->
          <div class="hero-visual-container" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="200">
            <!-- Floating Badge Top -->
            <div class="hero-floating-badge">
              <span style="width:10px; height:10px; border-radius:50%; background:#10b981; box-shadow:0 0 10px #10b981; display:inline-block;"></span>
              <div>
                <div style="font-size:0.72rem; color:#94a3b8; font-weight:700; text-transform:uppercase;">Government Mega Layout</div>
                <div style="font-size:0.92rem; color:#fff; font-weight:800;">KHB Surya City • 2,400 Acres</div>
              </div>
            </div>

            <!-- Main Showcase Image Card -->
            <div class="hero-visual-card" data-tilt>
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85" alt="Aspire Housing Demarcated Villa Plots & Townships" class="hero-visual-img" />
              <div class="hero-visual-gradient"></div>
              <div class="hero-visual-content">
                <span class="hero-visual-tag">Featured Plotted Township</span>
                <div class="hero-visual-title">Demarcated Villa Plots & Strategic Plotted Land</div>
                <div class="hero-visual-desc">Electronic A-Khata • Zero Lease Period • Cauvery Water Guaranteed</div>
              </div>
            </div>

            <!-- Floating Badge Bottom -->
            <div class="hero-floating-badge-bottom">
              <div style="background:var(--orange-soft); color:var(--orange-bright); border-radius:10px; width:36px; height:36px; display:flex; align-items:center; justify-content:center; border:1px solid var(--orange-border);">
                ${icons.shieldCheck}
              </div>
              <div>
                <div style="font-size:0.72rem; color:#94a3b8; font-weight:700; text-transform:uppercase;">RERA & BDA Approved</div>
                <div style="font-size:0.92rem; color:#fff; font-weight:800;">Plots Starting ₹3,900 / sq.ft*</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ticker Rail -->
    <div class="ticker-wrap">
      <div class="ticker-track">
        <div class="ticker-item"><span>KHB Surya City Phase-4</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Nandi Urban City Devanahalli</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>AP Township BMRDA & RERA Approved</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Habulus Tranquil 2 & 3 BHK</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Electronic A-Khata</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Zero Lease Period</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Cauvery Water Connectivity</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>KHB Surya City Phase-4</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>Nandi Urban City Devanahalli</span> <span class="dot"></span></div>
        <div class="ticker-item"><span>AP Township BMRDA & RERA Approved</span> <span class="dot"></span></div>
      </div>
    </div>

    <!-- Featured Master Projects Section -->
    <section class="section" id="projects">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up" data-aos-duration="700">
          <span class="section-tag">Bengaluru Flagship Portfolio</span>
          <h2 class="section-title">Our Prime Real Estate Developments</h2>
          <p class="section-subtitle">
            Explore meticulously planned residential townships and luxury gated communities offering supreme legal clarity, government-backed infrastructure, and soaring capital appreciation.
          </p>
        </div>

        <div class="bento-grid">
          <!-- Project 1: KHB Surya City Phase-4 -->
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="project-card" data-tilt>
              <div class="project-card-image-box">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" alt="KHB Surya City Phase 4 Mega Plotted Township" class="project-card-img" />
                <span class="project-badge-tag">Government Backed • KHB</span>
                <span class="project-price-tag">From ₹46.80L* (₹3900/sq.ft)</span>
              </div>
              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Bannerghatta Road, Jigani, Bengaluru</span>
                </div>
                <h3 class="project-card-title">
                  <a href="khb-suryacity.html">KHB Surya City Phase – 4</a>
                </h3>
                <p class="project-description">
                  Surya City Phase-4: Asia’s Largest Residential Layout Bengaluru’s 2400-Acre Mega Township. We are thrilled to announce the launch of 36,000 residential villa plots developed in collaboration with farmers under Karnataka Housing Board with Cauvery water, 60-acre Sports Club, and STRRPA approval.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Township Size</span>
                    <span class="spec-value">2,400 Acres</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Plot Dimensions</span>
                    <span class="spec-value">30x40 to 40x60</span>
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

          <!-- Project 2: Nandi Urban City Devanahalli -->
          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="project-card" data-tilt>
              <div class="project-card-image-box">
                <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80" alt="Nandi Urban City Devanahalli Villa Plots" class="project-card-img" />
                <span class="project-badge-tag">Airport Corridor • BIAAPA</span>
                <span class="project-price-tag">Exclusive Launch Pricing</span>
              </div>
              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Devanahalli, North Bengaluru (10 Mins to Airport)</span>
                </div>
                <h3 class="project-card-title">
                  <a href="nandi-urban-city.html">Nandi Urban City – Where Weekends Begin Every Day</a>
                </h3>
                <p class="project-description">
                  Located in Devanahalli, North Bengaluru — Nandi Urban City is a serene 12-acre BIAAPA-approved plotted development, just minutes from Kempegowda International Airport and surrounded by Nandi Hills, offering the ideal blend of nature, connectivity, and future-ready infrastructure with 7 landscaped parks.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Land Extent</span>
                    <span class="spec-value">12 Acres Gated</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Total Units</span>
                    <span class="spec-value">147 Villa Plots</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Mansion Plots</span>
                    <span class="spec-value">3,000+ sq.ft</span>
                  </div>
                </div>
                <div class="project-card-footer">
                  <a href="nandi-urban-city.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">View Master Plan &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Nandi Urban City Devanahalli" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 3: AP Township -->
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="project-card" data-tilt>
              <div class="project-card-image-box">
                <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1200&q=80" alt="AP Township Gated Plotted Community" class="project-card-img" />
                <span class="project-badge-tag">RERA & BMRDA Approved</span>
                <span class="project-price-tag">High Growth Corridor</span>
              </div>
              <div class="project-card-body">
                <div class="project-location">
                  ${icons.mapPin}
                  <span>Near Electronic City, Bengaluru</span>
                </div>
                <h3 class="project-card-title">
                  <a href="ap-township.html">AP Township – Live Where Comfort Meets Luxury</a>
                </h3>
                <p class="project-description">
                  A BMRDA & RERA-approved 30-acre township featuring 500 premium plots and exceptional infrastructure. Strategically located near Electronic City for high growth, featuring 18,000+ trees, 48% open green space, 8 themed parks, and over 50+ lifestyle amenities including clubhouse and swimming pool.
                </p>
                <div class="project-specs-grid">
                  <div class="project-spec-item">
                    <span class="spec-label">Open Green</span>
                    <span class="spec-value">48% Greenery</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Total Trees</span>
                    <span class="spec-value">18,000+ Trees</span>
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

          <!-- Project 4: Habulus Tranquil -->
          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="project-card" data-tilt>
              <div class="project-card-image-box">
                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" alt="Habulus Tranquil 5-Acre Master Campus" class="project-card-img" />
                <span class="project-badge-tag">Neo Town High-Rise</span>
                <span class="project-price-tag">₹90L Onwards • 2 & 3 BHK</span>
              </div>
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
                    <span class="spec-label">Structure</span>
                    <span class="spec-value">B+S+16 Floors</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Grand Club</span>
                    <span class="spec-value">25,000 Sq.Ft</span>
                  </div>
                  <div class="project-spec-item">
                    <span class="spec-label">Technology</span>
                    <span class="spec-value">MIVAN Formwork</span>
                  </div>
                </div>
                <div class="project-card-footer">
                  <a href="habulus-tranquil.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Floor Plans & Specs &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Habulus Tranquil" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
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
          Whether you seek government-backed plots in KHB Surya City, airport proximity in Nandi Urban City, or luxury high-rise living in Neo Town, we guide every milestone with integrity.
        </p>
        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <button class="btn-primary" data-open-modal="visit" data-project-name="General Inquiry" style="padding:14px 34px; font-size:1rem;">
            Schedule Site Visit Today &rarr;
          </button>
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
              The journey started when we discussed reimagining the Real Estate space with new ways of working. Our common ethics and values laid the foundation of <strong>ASPIRE HOUSING’s</strong> value-oriented culture with a clear focus on bringing about transparency in the Real Estate sector.
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
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80" alt="Aspire Housing Land Banking & Township Development" style="width:100%; height:440px; object-fit:cover;" />
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
  <title>Projects Portfolio | ASPIRE HOUSING — Master Development Directory</title>
  <meta name="description" content="Explore Aspire Housing's premier real estate developments across Bengaluru: KHB Surya City Phase-4, Nandi Urban City, AP Township, and Habulus Tranquil.">
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
          We believe smooth project approval processes are critical for our clients. Our team of experts handle end-to-end liaison, securing land conversion, zoning approvals, RERA registration, and occupancy certificates as and when required without the hassle of following up.
        </p>

        <!-- Filter Tabs -->
        <div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:2.5rem;">
          <button class="filter-tab-btn btn-secondary active" data-filter="all" style="padding:8px 18px; font-size:0.85rem;">All Projects</button>
          <button class="filter-tab-btn btn-secondary" data-filter="mega" style="padding:8px 18px; font-size:0.85rem;">Government Mega Townships</button>
          <button class="filter-tab-btn btn-secondary" data-filter="airport" style="padding:8px 18px; font-size:0.85rem;">Airport / North Corridor</button>
          <button class="filter-tab-btn btn-secondary" data-filter="ecity" style="padding:8px 18px; font-size:0.85rem;">Electronic City Corridors</button>
          <button class="filter-tab-btn btn-secondary" data-filter="apartments" style="padding:8px 18px; font-size:0.85rem;">Ultra-Luxury High-Rise</button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid">
          <!-- 1. KHB Surya City Phase-4 -->
          <div class="col-6" data-category="mega ecity" data-aos="fade-up" data-aos-delay="100">
            <div class="project-card" data-tilt>
              <div class="project-card-image-box">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" alt="KHB Surya City Phase 4 Mega Plotted Township" class="project-card-img" />
                <span class="project-badge-tag">Government Backed • KHB</span>
                <span class="project-price-tag">From ₹46.80L* (₹3900/sq.ft)</span>
              </div>
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
                  <div class="project-spec-item"><span class="spec-label">Area</span><span class="spec-value">2400 Acres</span></div>
                  <div class="project-spec-item"><span class="spec-label">Approval</span><span class="spec-value">STRRPA / BBMP</span></div>
                  <div class="project-spec-item"><span class="spec-label">Status</span><span class="spec-value">Ready To Register</span></div>
                </div>
                <div class="project-card-footer">
                  <a href="khb-suryacity.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="KHB Surya City Phase-4" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Nandi Urban City Devanahalli -->
          <div class="col-6" data-category="airport" data-aos="fade-up" data-aos-delay="200">
            <div class="project-card" data-tilt>
              <div class="project-card-image-box">
                <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80" alt="Nandi Urban City Devanahalli Villa Plots" class="project-card-img" />
                <span class="project-badge-tag">BIAAPA Approved</span>
                <span class="project-price-tag">Exclusive Launch Pricing</span>
              </div>
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
                  <div class="project-spec-item"><span class="spec-label">Land Size</span><span class="spec-value">12 Acres</span></div>
                  <div class="project-spec-item"><span class="spec-label">Total Units</span><span class="spec-value">147 Plots</span></div>
                  <div class="project-spec-item"><span class="spec-label">Airport Proximity</span><span class="spec-value">10 Mins Drive</span></div>
                </div>
                <div class="project-card-footer">
                  <a href="nandi-urban-city.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Nandi Urban City Devanahalli" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. AP Township -->
          <div class="col-6" data-category="ecity" data-aos="fade-up" data-aos-delay="100">
            <div class="project-card" data-tilt>
              <div class="project-card-image-box">
                <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1200&q=80" alt="AP Township Gated Plotted Community" class="project-card-img" />
                <span class="project-badge-tag">BMRDA & RERA Approved</span>
                <span class="project-price-tag">500 Premium Plots</span>
              </div>
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
                  <div class="project-spec-item"><span class="spec-label">Township Size</span><span class="spec-value">30 Acres</span></div>
                  <div class="project-spec-item"><span class="spec-label">Amenities</span><span class="spec-value">50+ Lifestyle</span></div>
                  <div class="project-spec-item"><span class="spec-label">Approval</span><span class="spec-value">BMRDA / RERA</span></div>
                </div>
                <div class="project-card-footer">
                  <a href="ap-township.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="AP Township" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. Habulus Tranquil -->
          <div class="col-6" data-category="apartments ecity" data-aos="fade-up" data-aos-delay="200">
            <div class="project-card" data-tilt>
              <div class="project-card-image-box">
                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" alt="Habulus Tranquil 5-Acre Master Campus" class="project-card-img" />
                <span class="project-badge-tag">RERA & BDA Approved</span>
                <span class="project-price-tag">₹90L Onwards • 2 & 3 BHK</span>
              </div>
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
                  <div class="project-spec-item"><span class="spec-label">Structure</span><span class="spec-value">B+S+16 Floors</span></div>
                  <div class="project-spec-item"><span class="spec-label">Clubhouse</span><span class="spec-value">25,000 Sq.Ft</span></div>
                  <div class="project-spec-item"><span class="spec-label">Configuration</span><span class="spec-value">2, 2.5 & 3 BHK</span></div>
                </div>
                <div class="project-card-footer">
                  <a href="habulus-tranquil.html" class="btn-secondary" style="font-size:0.85rem; padding:8px 18px;">Full Details &rarr;</a>
                  <button class="btn-primary" data-open-modal="visit" data-project-name="Habulus Tranquil" style="font-size:0.85rem; padding:8px 18px;">Book Site Visit</button>
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

console.log('Part 1 updated with SVG icons and zero emojis.');
