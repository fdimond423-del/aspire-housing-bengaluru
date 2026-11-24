const fs = require('fs');
const path = require('path');
const { getHeader, getFooter, icons } = require('./templates');

// 3. AMRITHA VARSHINI (23-Acre BMRDA Plotted & Villa Community)
const amrithaHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Amritha Varshini | ASPIRE HOUSING — 23-Acre BMRDA Approved Township</title>
  <meta name="description" content="Amritha Varshini beside KHB Suryacity-3, Attibele Guddahatti - 23-Acre BMRDA Approved Plotted Township with 336 plots, luxury villas, 100ft road and 6 parks. Starting ₹6,499/sq.ft.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('amritha')}

  <main style="padding-top:76px;">
    <!-- Project Hero Header Banner -->
    <section class="project-detail-hero">
      <div class="project-detail-hero-bg">
        <img src="assets/images/plot-aerial-master.jpg" alt="Amritha Varshini 23-Acre Plotted & Luxury Villa Development" />
      </div>
      <div class="project-detail-hero-overlay"></div>

      <div class="project-detail-hero-content">
        <div class="breadcrumbs-nav" data-aos="fade-down">
          <a href="index.html">Home</a> <span>/</span>
          <a href="projects.html">Projects</a> <span>/</span>
          <span style="color:#fff;">Amritha Varshini</span>
        </div>

        <div class="hero-badge-pill" style="margin-bottom:1rem;" data-aos="fade-down" data-aos-delay="100">
          <span class="dot"></span>
          <span>BMRDA Approved Layout • APA/LAO No. 142/2012-13</span>
        </div>

        <h1 class="section-title" style="font-size:clamp(2.3rem, 4.8vw, 3.6rem); max-width:960px;" data-aos="fade-up" data-aos-delay="200">
          Amritha Varshini — Inspired Living with Intelligent Design
        </h1>
        <p class="section-subtitle" style="max-width:850px; font-size:1.15rem;" data-aos="fade-up" data-aos-delay="300">
          Exclusive 23-Acre Plotted & Luxury Villa Development in Guddahatti – Attibele, Bengaluru. Adjacent to <strong>KHB Suryacity Phase-3 (970 Acres)</strong> and Upcoming Swift City SEZ. Featuring 336 demarcated villa plots, 100 ft wide main connectivity, 6 themed parks, and grand clubhouse.
        </p>

        <div style="display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap;" data-aos="fade-up" data-aos-delay="400">
          <button class="btn-primary" data-open-modal="visit" data-project-name="Amritha Varshini 23-Acre BMRDA" style="padding:14px 32px; font-size:1rem;">
            Schedule a Site Visit &rarr;
          </button>
          <a href="https://wa.me/919945380337?text=Hi%20Aspire%20Housing,%20I%20am%20interested%20in%20Amritha%20Varshini%20plotted%20development%20beside%20Suryacity-3.%20Please%20share%20the%20cost%20sheet%20and%20layout%20plan." target="_blank" class="btn-secondary" style="padding:14px 28px; font-size:1rem; color:#25d366; border-color:rgba(37,211,102,0.4);">
            ${icons.whatsapp}
            <span>WhatsApp Project Desk</span>
          </a>
          <a href="#layout" class="btn-secondary" style="padding:14px 28px; font-size:1rem;">
            View Master Layout Plan
          </a>
        </div>
      </div>
    </section>

    <!-- Key Stats Ribbon -->
    <section class="section" style="padding:2.5rem 0; background:rgba(255,140,40,0.05); border-bottom:1px solid var(--border-subtle);">
      <div class="section-container">
        <div class="bento-grid" style="text-align:center;">
          <div class="col-3" data-aos="zoom-in" data-aos-delay="100">
            <div style="font-size:2.2rem; font-weight:900; color:#fff;">23 <span style="color:var(--orange);">Acres</span></div>
            <div style="font-size:0.8rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-top:4px;">Integrated Gated Township</div>
          </div>
          <div class="col-3" data-aos="zoom-in" data-aos-delay="200">
            <div style="font-size:2.2rem; font-weight:900; color:#fff;">336</div>
            <div style="font-size:0.8rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-top:4px;">Sanctioned Villa Plots</div>
          </div>
          <div class="col-3" data-aos="zoom-in" data-aos-delay="300">
            <div style="font-size:2.2rem; font-weight:900; color:#fff;">₹6,499<span style="color:var(--orange);">/sq.ft*</span></div>
            <div style="font-size:0.8rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-top:4px;">Transparent Launch Price</div>
          </div>
          <div class="col-3" data-aos="zoom-in" data-aos-delay="400">
            <div style="font-size:2.2rem; font-weight:900; color:#fff;">100% Clear</div>
            <div style="font-size:0.8rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-top:4px;">BMRDA E-Khata & Loan Approved</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Narrative & Strategy -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-7" data-aos="fade-right">
            <span class="section-tag">Prime South Bengaluru Growth Belt</span>
            <h2 style="font-size:2.2rem; font-weight:800; color:#fff; margin-bottom:1.25rem;">
              The Value of Location, Space, and Freedom to Build
            </h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              Envisioned as one of South Bengaluru’s landmark plotted communities, <strong>Amritha Varshini</strong> offers a curated choice of residential villa plots, independent luxury villas, and boutique apartments. Spread across 23 pristine acres, the development seamlessly blends urban connectivity with natural serenity.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1rem;">
              Strategically positioned in Guddahatti, Attibele, the project is directly connected by an existing <strong>100-foot wide main road</strong> leading to the 970-acre KHB Suryanagar Phase-III layout. Being just <strong>1.6 km from the Bangalore–Hosur Express Highway</strong>, residents enjoy frictionless access to Electronic City, Bommasandra, and Koramangala.
            </p>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8;">
              With BMRDA approval under <strong>APA/LAO No. 142/2012-13</strong>, individual electronic e-Khata, and ready registration, Amritha Varshini provides the ideal foundation for immediate home construction or high-yield capital appreciation.
            </p>
          </div>

          <div class="col-5" data-aos="fade-left">
            <div class="glass-card" data-tilt style="border:1px solid var(--orange-border); background:rgba(18,21,30,0.95);">
              <h3 style="font-size:1.35rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">Official Plot Inventory & Pricing</h3>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.9rem; color:var(--text-muted); font-size:0.92rem;">
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Standard Villa Sites (30' x 40'):</span> <strong style="color:#fff;">165 Sites (1,200 sq.ft)</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Large Villa Sites (30' x 50'):</span> <strong style="color:#fff;">52 Sites (1,500 sq.ft)</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Executive Luxury Sites (40' x 60'):</span> <strong style="color:#fff;">08 Sites (2,400 sq.ft)</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Commercial Sites (100ft Road):</span> <strong style="color:var(--orange-bright);">03 Sites (2400-4000 sq.ft)</strong>
                </li>
                <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
                  <span>Odd / Premium Corner Sites:</span> <strong style="color:#fff;">108 Sites</strong>
                </li>
                <li style="display:flex; justify-content:space-between; padding-top:4px;">
                  <span>Total Approved Inventory:</span> <strong style="color:#10b981;">336 Sites (BMRDA Approved)</strong>
                </li>
              </ul>
              <button class="btn-primary" data-open-modal="visit" data-project-name="Amritha Varshini Plot Selection" style="width:100%; margin-top:1.5rem; padding:12px;">
                Download Amritha Varshini Rate Card &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Living Choices Bento Grid -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Diverse Living Choices</span>
          <h2 class="section-title">Designed for Every Lifestyle & Family Need</h2>
          <p class="section-subtitle">Whether building an independent custom villa or acquiring ready luxury housing, Amritha Varshini offers versatile ownership options.</p>
        </div>

        <div class="bento-grid">
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt style="height:100%;">
              <div class="pillar-icon-box">${icons.layers}</div>
              <h3 class="pillar-title">1. Exclusive Villa Plots</h3>
              <p class="pillar-desc">
                For buyers who envision creating a custom family home from the ground up. Standard demarcated dimensions include <strong>30'x40' (1200 sq.ft), 30'x50' (1500 sq.ft), and 40'x60' (2400 sq.ft)</strong>, complete with underground utilities, wide road frontage, and individual BMRDA e-Khata.
              </p>
            </div>
          </div>

          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt style="height:100%;">
              <div class="pillar-icon-box">${icons.building}</div>
              <h3 class="pillar-title">2. Premium Independent Villas</h3>
              <p class="pillar-desc">
                Aesthetically crafted <strong>2 BHK, 3 BHK & 4 BHK contemporary architectural villas</strong> built on 30x40, 30x50, and 40x60 plots. Built-up areas range from 1,500 sq.ft to 2,600 sq.ft with functional double-height layouts, private terrace gardens, and covered car porch.
              </p>
            </div>
          </div>

          <div class="col-6" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt style="height:100%;">
              <div class="pillar-icon-box">${icons.key}</div>
              <h3 class="pillar-title">3. Luxury Apartments</h3>
              <p class="pillar-desc">
                For professionals and modern families seeking refined apartment living within a secure 23-acre gated ecosystem. Offering well-ventilated <strong>Studio, 2 & 3 Bedroom residences</strong> with shared clubhouse access, lifts, and reserved parking.
              </p>
            </div>
          </div>

          <div class="col-6" data-aos="fade-up" data-aos-delay="400">
            <div class="glass-card" data-tilt style="height:100%;">
              <div class="pillar-icon-box">${icons.commercial}</div>
              <h3 class="pillar-title">4. Commercial High-Street Plots</h3>
              <p class="pillar-desc">
                A limited selection of commercial plots fronting the <strong>100-foot wide main road</strong>, ranging from 2,400 to 4,000 sq.ft. Perfectly zoned for supermarkets, clinics, banking branches, and daily convenience shopping serving over 1,500 nearby families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Master Plan & Official Sanction Layout Showcase -->
    <section class="section" id="layout">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Sanctioned Master Layout</span>
          <h2 class="section-title">Official BMRDA Layout Plan & Plot Geometry</h2>
          <p class="section-subtitle">
            Sanctioned under BMRDA Order <strong>APA/LAO No. 142/2012-13</strong>. Every plot boundary, road corridor, and park reserve is legally demarcated and approved. Tap any blueprint or certificate below to inspect in high resolution.
          </p>
        </div>

        <!-- 1. Full-Scale BMRDA Master Drawing -->
        <div class="glass-card" data-tilt style="padding:1.5rem; margin-bottom:2rem; border:1px solid var(--orange-border);" data-aos="fade-up">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <div style="display:inline-flex; align-items:center; gap:8px; background:rgba(16,185,129,0.15); border:1px solid rgba(16,185,129,0.4); padding:4px 14px; border-radius:30px; font-size:0.8rem; font-weight:700; color:#10b981; margin-bottom:6px;">
                <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#10b981;"></span>
                GOVERNMENT APPROVED • BMRDA SANCTION APA/LAO NO. 142/2012-13
              </div>
              <h3 style="font-size:1.35rem; font-weight:800; color:#fff;">Sri Sri Amrutha Varshini Master Sanction Drawing</h3>
            </div>
            <span style="font-size:0.85rem; color:var(--orange-bright); font-weight:600; display:flex; align-items:center; gap:6px;">
              🔍 Click to Zoom Full Resolution
            </span>
          </div>
          <div style="background:#07090e; border-radius:14px; overflow:hidden; border:1px solid rgba(255,255,255,0.08); text-align:center;">
            <img src="assets/images/amritha-layout-plan-bmrda.jpg" data-zoomable="assets/images/amritha-layout-plan-bmrda.jpg" data-caption="Official BMRDA Sanctioned Layout Plan (APA/LAO No. 142/2012-13) — 336 Plots, 6 Parks, 100ft Road" alt="Amritha Varshini Official BMRDA Sanctioned Layout Drawing" style="width:100%; height:auto; max-height:580px; object-fit:contain; cursor:zoom-in; display:block; margin:0 auto;" />
          </div>
          <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; color:var(--text-muted); font-size:0.88rem;">
            <div>Includes BMRDA/LAO-88/2005-06 and APA/LAO-17.63/2008-09 approvals. Complete demarcations for 336 residential plots and 6 parks.</div>
            <button class="btn-primary" data-zoomable="assets/images/amritha-layout-plan-bmrda.jpg" data-caption="Official BMRDA Approved Layout Drawing" style="padding:8px 20px; font-size:0.85rem;">Enlarge Master Plan &rarr;</button>
          </div>
        </div>

        <!-- 2. Plot Details Table & Clean Connectivity Plan -->
        <div class="bento-grid">
          <!-- Col 1: Official Plot Details Table -->
          <div class="col-6" data-aos="fade-right">
            <div class="glass-card" data-tilt style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <span class="section-tag">Government Sanction Schedule</span>
                <h3 style="font-size:1.3rem; font-weight:800; color:#fff; margin:0.4rem 0 0.8rem;">Official Plot Inventory & Dimensions</h3>
                <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1rem;">
                  Exact plot schedule extracted from the BMRDA sanction order. Click the scanned certificate below to enlarge.
                </p>
                <div style="background:#07090e; border-radius:12px; overflow:hidden; border:1px solid rgba(255,255,255,0.08); margin-bottom:1.2rem; text-align:center;">
                  <img src="assets/images/amritha-plot-table.jpg" data-zoomable="assets/images/amritha-plot-table.jpg" data-caption="Amritha Varshini Official Sanctioned Plot Details Table" alt="Official Plot Details Table" style="width:100%; max-height:260px; object-fit:contain; cursor:zoom-in;" />
                </div>
                <!-- Structured High-Contrast Table -->
                <div style="overflow-x:auto;">
                  <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#fff;">
                    <thead>
                      <tr style="background:rgba(255,133,27,0.15); border-bottom:1px solid var(--orange-border); text-align:left;">
                        <th style="padding:10px 14px; color:var(--orange-bright);">Plot Dimension</th>
                        <th style="padding:10px 14px; color:var(--orange-bright);">Metric Size</th>
                        <th style="padding:10px 14px; color:var(--orange-bright); text-align:right;">No. of Sites</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom:1px solid var(--border-subtle);">
                        <td style="padding:10px 14px;"><strong>30' x 40' Villa Plot</strong></td>
                        <td style="padding:10px 14px; color:var(--text-muted);">9.14m x 12.19m (1,200 sq.ft)</td>
                        <td style="padding:10px 14px; text-align:right; font-weight:700; color:#fff;">165 Sites</td>
                      </tr>
                      <tr style="border-bottom:1px solid var(--border-subtle);">
                        <td style="padding:10px 14px;"><strong>30' x 50' Villa Plot</strong></td>
                        <td style="padding:10px 14px; color:var(--text-muted);">9.14m x 15.24m (1,500 sq.ft)</td>
                        <td style="padding:10px 14px; text-align:right; font-weight:700; color:#fff;">52 Sites</td>
                      </tr>
                      <tr style="border-bottom:1px solid var(--border-subtle);">
                        <td style="padding:10px 14px;"><strong>40' x 60' Luxury Plot</strong></td>
                        <td style="padding:10px 14px; color:var(--text-muted);">12.19m x 18.29m (2,400 sq.ft)</td>
                        <td style="padding:10px 14px; text-align:right; font-weight:700; color:#fff;">08 Sites</td>
                      </tr>
                      <tr style="border-bottom:1px solid var(--border-subtle);">
                        <td style="padding:10px 14px;"><strong>Commercial High-Street</strong></td>
                        <td style="padding:10px 14px; color:var(--text-muted);">100 Ft Main Road (2,400-4,000 sq.ft)</td>
                        <td style="padding:10px 14px; text-align:right; font-weight:700; color:var(--orange-bright);">03 Sites</td>
                      </tr>
                      <tr style="border-bottom:1px solid var(--border-subtle);">
                        <td style="padding:10px 14px;"><strong>Odd / Corner Sites *</strong></td>
                        <td style="padding:10px 14px; color:var(--text-muted);">Various Premium Geometry</td>
                        <td style="padding:10px 14px; text-align:right; font-weight:700; color:#fff;">108 Sites</td>
                      </tr>
                      <tr style="background:rgba(16,185,129,0.1); font-weight:800;">
                        <td style="padding:12px 14px; color:#10b981;">Total Sanctioned Plots</td>
                        <td style="padding:12px 14px; color:#10b981;">BMRDA APA/LAO No. 142/2012-13</td>
                        <td style="padding:12px 14px; text-align:right; color:#10b981; font-size:1.05rem;">336 Sites</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style="margin-top:1.2rem; display:flex; gap:0.75rem;">
                <button class="btn-primary" data-open-modal="visit" data-project-name="Amritha Varshini Plot Selection" style="flex:1; padding:10px; font-size:0.88rem;">Check Live Availability &rarr;</button>
                <a href="https://wa.me/919945380337?text=Hi%20Aspire%20Housing,%20please%20send%20me%20the%20cost%20sheet%20and%20plot%20availability%20chart%20for%20Amritha%20Varshini." target="_blank" class="btn-secondary" style="padding:10px 16px; font-size:0.88rem; color:#25d366; border-color:rgba(37,211,102,0.4);">${icons.whatsapp} WhatsApp</a>
              </div>
            </div>
          </div>

          <!-- Col 2: Key Master Plan Connecting to Highway & Suryacity -->
          <div class="col-6" data-aos="fade-left">
            <div class="glass-card" data-tilt style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <span class="section-tag">Connectivity Master Layout</span>
                <h3 style="font-size:1.3rem; font-weight:800; color:#fff; margin:0.4rem 0 0.8rem;">Highway & KHB Suryacity-3 Integration</h3>
                <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1rem;">
                  Layout master plan showing the proposed 30M (100 ft) wide arterial roadway linking directly to Surya Nagar Phase III and Bangalore-Hosur Express Highway.
                </p>
                <div style="background:#07090e; border-radius:12px; overflow:hidden; border:1px solid rgba(255,255,255,0.08); text-align:center;">
                  <img src="assets/images/amritha-layout-clean.jpg" data-zoomable="assets/images/amritha-layout-clean.jpg" data-caption="Amritha Varshini Key Layout Plan showing 30M Wide Road, KHB Layout, and Bangalore-Hosur Highway" alt="Amritha Varshini Key Master Plan" style="width:100%; height:auto; min-height:560px; max-height:85vh; width:100%; object-fit:contain; cursor:zoom-in;" />
                </div>
                <div style="margin-top:1rem; color:var(--text-muted); font-size:0.85rem; line-height:1.6;">
                  • <strong>18.29M (60 Ft)</strong> and <strong>12.19M (40 Ft)</strong> internal feeder corridors.<br>
                  • <strong>Park-1 (1,918 sqm)</strong> & <strong>Park-2 (769 sqm)</strong> landscaped open green zones.<br>
                  • 1.6 km straight connection to Hosur Express Highway via Guddahatti Gate.
                </div>
              </div>
              <div style="margin-top:1.2rem;">
                <button class="btn-secondary" data-zoomable="assets/images/amritha-layout-clean.jpg" data-caption="Key Layout Plan & Road Connectivity" style="width:100%; padding:10px; font-size:0.88rem;">Zoom Key Layout Plan &rarr;</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Location Blueprint & Living Choices Brochure Section -->
        <div class="bento-grid" style="margin-top:2rem;">
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt style="height:100%;">
              <span class="section-tag">Location Connectivity Blueprint</span>
              <h3 style="font-size:1.25rem; font-weight:800; color:#fff; margin:0.4rem 0 0.8rem;">Location Map & Route Guide</h3>
              <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1rem;">
                1.6 km from Bangalore-Hosur Express Highway at Guddahatti Gate. Centered between KHB Suryacity-3, Chandapura, and Attibele.
              </p>
              <div style="background:#07090e; border-radius:12px; overflow:hidden; border:1px solid rgba(255,255,255,0.08); text-align:center;">
                <img src="assets/images/amritha-location-map.jpg" data-zoomable="assets/images/amritha-location-map.jpg" data-caption="Amritha Varshini Official Location Connectivity Map" alt="Amritha Varshini Location Map" style="width:100%; height:auto; min-height:480px; max-height:85vh; width:100%; object-fit:contain; cursor:zoom-in;" />
              </div>
            </div>
          </div>

          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt style="height:100%;">
              <span class="section-tag">Official Brochure Feature</span>
              <h3 style="font-size:1.25rem; font-weight:800; color:#fff; margin:0.4rem 0 0.8rem;">Living Choices & Offerings</h3>
              <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1rem;">
                Demarcated villa plots, 2/3/4 BHK independent luxury villas (1500–2600 sq.ft), luxury apartments, and commercial high-street sites.
              </p>
              <div style="background:#07090e; border-radius:12px; overflow:hidden; border:1px solid rgba(255,255,255,0.08); text-align:center;">
                <img src="assets/images/amritha-living-choices.jpg" data-zoomable="assets/images/amritha-living-choices.jpg" data-caption="Amritha Varshini Official Brochure — Living Choices & Commercial Plots" alt="Amritha Varshini Living Choices" style="width:100%; height:auto; min-height:480px; max-height:85vh; width:100%; object-fit:contain; cursor:zoom-in;" />
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Pinterest-Grade Luxury Plotted Community Visual Gallery -->
        <div style="margin-top:3rem;" data-aos="fade-up">
          <div class="section-header" style="text-align:left; margin-bottom:1.5rem;">
            <span class="section-tag">Authentic Plotted Community Aesthetics</span>
            <h3 style="font-size:1.8rem; font-weight:800; color:#fff;">On-Ground Infrastructure & Architectural Vision</h3>
            <p style="color:var(--text-muted); font-size:0.95rem;">
              Experience the master-planned excellence: wide asphalt boulevards, demarcated plot stones, green avenue trees, and modern civic infrastructure.
            </p>
          </div>

          <div class="bento-grid">
            <div class="col-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
                <img src="assets/images/hero-plotting-main.jpg" data-zoomable="assets/images/hero-plotting-main.jpg" data-caption="40 Ft Wide Asphalt Boulevard with Manicured Lawns, Boundary Stones & Flowering Trees" alt="Plotted Community Avenue" style="width:100%; height:320px; object-fit:cover; cursor:zoom-in;" />
                <div style="padding:1.2rem;">
                  <h4 style="color:#fff; font-size:1.1rem; font-weight:700;">40 Ft Wide Main Boulevard</h4>
                  <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Asphalt paved roadways with white curbs, manicured lawns, and LED street lighting.</p>
                </div>
              </div>
            </div>

            <div class="col-6" data-aos="zoom-in" data-aos-delay="200">
              <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
                <img src="assets/images/plot-aerial-master.jpg" data-zoomable="assets/images/plot-aerial-master.jpg" data-caption="Aerial Drone Perspective of 23-Acre Master-Planned Plotted Township" alt="Plotted Layout Aerial" style="width:100%; height:320px; object-fit:cover; cursor:zoom-in;" />
                <div style="padding:1.2rem;">
                  <h4 style="color:#fff; font-size:1.1rem; font-weight:700;">23-Acre Gated Master Township</h4>
                  <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Aerial view of demarcated villa plots, central park, clubhouse, and internal boulevards.</p>
                </div>
              </div>
            </div>

            <div class="col-6" data-aos="zoom-in" data-aos-delay="300">
              <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
                <img src="assets/images/plot-demarcation-ready.jpg" data-zoomable="assets/images/plot-demarcation-ready.jpg" data-caption="Ready-to-Construct Corner Villa Plot with Numbered Stone Marker" alt="Villa Plot Demarcation" style="width:100%; height:320px; object-fit:cover; cursor:zoom-in;" />
                <div style="padding:1.2rem;">
                  <h4 style="color:#fff; font-size:1.1rem; font-weight:700;">Numbered Plot Boundary Demarcation</h4>
                  <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Corner boundary stone markers, paved walkways, and underground electrical feeder boxes.</p>
                </div>
              </div>
            </div>

            <div class="col-6" data-aos="zoom-in" data-aos-delay="400">
              <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
                <img src="assets/images/amritha-hero-render.jpg" data-zoomable="assets/images/amritha-hero-render.jpg" data-caption="Amritha Varshini 3D Villa Avenue Perspective Render" alt="Amritha Varshini 3D Avenue" style="width:100%; height:320px; object-fit:cover; cursor:zoom-in;" />
                <div style="padding:1.2rem;">
                  <h4 style="color:#fff; font-size:1.1rem; font-weight:700;">Amritha Varshini Villa Boulevard</h4>
                  <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Architectural 3D perspective from the official brochure showing luxury villa construction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- World-Class Infrastructure & Amenities -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Complete Infrastructure</span>
          <h2 class="section-title">Engineered for Generations of Stress-Free Living</h2>
          <p class="section-subtitle">Built to strict BMRDA norms with modern civic utilities and green landscaping.</p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.road}</div>
              <h3 class="pillar-title">100 Ft Main Arterial Road</h3>
              <p class="pillar-desc">Broad, heavy-duty black-top roadway directly connecting Amritha Varshini to KHB Suryanagar Phase-III and Hosur Highway.</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.park}</div>
              <h3 class="pillar-title">6 Landscaped Parks</h3>
              <p class="pillar-desc">Over 6,000+ sqm of landscaped open green spaces including Park-1 (1016 sqm), Park-3 (1299 sqm), and Park-4 (2407 sqm).</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.building}</div>
              <h3 class="pillar-title">Clubhouse & Recreation</h3>
              <p class="pillar-desc">Private community clubhouse featuring indoor games room, fitness gymnasium, multipurpose party hall, and children's activity lounge.</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.eco}</div>
              <h3 class="pillar-title">Sewage & Waste Treatment</h3>
              <p class="pillar-desc">State-of-the-art Sewage Treatment Plant (STP) and organic waste converter ensuring eco-conscious sustainability and zero discharge.</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.water}</div>
              <h3 class="pillar-title">Rainwater Harvesting</h3>
              <p class="pillar-desc">Comprehensive rainwater harvesting pits across all layout avenues designed to sustainably recharge local groundwater tables.</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <div class="pillar-icon-box">${icons.shieldCheck}</div>
              <h3 class="pillar-title">Underground Utilities & Security</h3>
              <p class="pillar-desc">Concealed underground electricity cables, LED street illumination, water supply mains, and 24/7 security with gated entry arch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Advantages & Micro-Market Connectivity -->
    <section class="section">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Micro-Market Connectivity</span>
          <h2 class="section-title">Surrounded by Leading Institutions & Tech Hubs</h2>
          <p class="section-subtitle">Everything your family requires is within an effortless short drive.</p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt>
              <h4 style="color:var(--orange-bright); font-size:1.1rem; margin-bottom:0.75rem;">Healthcare Centers</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.7;">
                • The Oxford Medical College Hospital (1.6 Km)<br>
                • Sri Sai Hospitals / SS Global Hospital (1.7 Km)<br>
                • Narayana Health City & Mazumdar Shaw (12 Mins)<br>
                • Kalppa Virusha Hospital & Hamsaraga Multispeciality
              </p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt>
              <h4 style="color:var(--orange-bright); font-size:1.1rem; margin-bottom:0.75rem;">Educational Institutions</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.7;">
                • St. Philomena's Institutions, Attibele<br>
                • New Baldwin International School (Sarjapura Rd)<br>
                • St. Dominic's School & SVVN PU College<br>
                • Ebenezer International & PES University
              </p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt>
              <h4 style="color:var(--orange-bright); font-size:1.1rem; margin-bottom:0.75rem;">Employment & Commute</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.7;">
                • Electronic City Phase 1 & 2 (15 Mins)<br>
                • Bommasandra & Jigani Industrial Hubs (10 Mins)<br>
                • Attibele Industrial Belt & Upcoming Swift City SEZ<br>
                • Infosys, Wipro, TCS, HCL, Biocon Corridor
              </p>
            </div>
          </div>
        </div>

        <div class="glass-card" data-tilt style="margin-top:3rem; padding:2.5rem; text-align:center; border:1px solid var(--orange-border);" data-aos="zoom-in">
          <span class="section-tag">Direct WhatsApp & Booking Desk</span>
          <h3 style="font-size:1.8rem; font-weight:800; color:#fff; margin:0.5rem 0 1rem;">Reserve Your Plot at Amritha Varshini Today</h3>
          <p style="color:var(--text-muted); font-size:0.95rem; max-width:680px; margin:0 auto 1.8rem; line-height:1.7;">
            Connect with our Senior Property Consultant on <strong>+91 99453 80337</strong> to receive the complete BMRDA sanction dossier, current site availability chart, and complimentary weekend cab inspection.
          </p>
          <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
            <button class="btn-primary" data-open-modal="visit" data-project-name="Amritha Varshini 23-Acre BMRDA" style="padding:14px 34px; font-size:1rem;">
              Book Free Site Inspection Tour &rarr;
            </button>
            <a href="https://wa.me/919945380337?text=Hi%20Aspire%20Housing,%20I%20would%20like%20to%20schedule%20a%20site%20visit%20for%20Amritha%20Varshini%20Beside%20Suryacity-3." target="_blank" class="btn-secondary" style="padding:14px 30px; font-size:1rem; color:#25d366; border-color:rgba(37,211,102,0.4);">
              ${icons.whatsapp}
              <span>Chat on WhatsApp (+91 99453 80337)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;

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
        <img src="assets/images/user-plot-master-plan-72.jpg" alt="KHB Surya City Phase 4 Mega Township Plotted Layout" />
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

    <!-- Master Plan & On-Ground Development Showcase -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Layout Engineering & Ground Reality</span>
          <h2 class="section-title">Authentic Layout Avenues & Approved Master Plan</h2>
          <p class="section-subtitle">
            Demarcated plots with asphalt black-top roads, boundary stones, curb stones, underground electrical lines, and government-approved infrastructure.
          </p>
        </div>
        <div class="bento-grid">
          <div class="col-6" data-aos="fade-right">
            <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
              <img src="assets/images/user-plot-ground-real.jpg" alt="KHB Surya City Plotted Layout Internal Roads & Avenues" style="width:100%; height:380px; object-fit:cover;" />
              <div style="padding:1.25rem;">
                <div style="font-weight:700; color:#fff;">Wide Asphalt Avenues & Tree-Lined Medians</div>
                <div style="font-size:0.85rem; color:var(--orange-bright); margin-top:4px;">Asphalt road, curb stones, and avenue plantation on-site</div>
              </div>
            </div>
          </div>
          <div class="col-6" data-aos="fade-left">
            <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
              <img src="assets/images/user-plot-park-layout.jpg" alt="Approved Engineering Master Plan" style="width:100%; height:380px; object-fit:cover;" />
              <div style="padding:1.25rem;">
                <div style="font-weight:700; color:#fff;">STRRPA & KHB Approved Master Layout Plan</div>
                <div style="font-size:0.85rem; color:var(--orange-bright); margin-top:4px;">Plot demarcations, commercial zones, and civic amenities</div>
              </div>
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
        <img src="assets/images/user-plot-gated-aerial.png" alt="Nandi Urban City Devanahalli Villa Plots Landscape" />
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

    <!-- On-Ground Infrastructure & Demarcated Plots -->
    <section class="section" style="background:var(--bg-pitch);">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-6" data-aos="fade-right">
            <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
              <img src="assets/images/user-plot-overview.png" alt="Nandi Urban City On-Ground Demarcated Plots and Roads" style="width:100%; height:400px; object-fit:cover;" />
            </div>
          </div>
          <div class="col-6" data-aos="fade-left">
            <span class="section-tag">Ground Reality</span>
            <h2 style="font-size:2rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">Ready-To-Construct Demarcated Villa Sites</h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.7; margin-bottom:1.5rem;">
              Every plot at Nandi Urban City comes fully demarcated with precision boundary corner stones, concrete curbs, and wide asphalt internal roads. Complete with underground cabling, water lines, and 7 manicured parks ready for immediate villa construction.
            </p>
            <div style="display:flex; flex-direction:column; gap:0.8rem;">
              <div style="display:flex; align-items:center; gap:10px; color:#fff;">
                <span style="color:#10b981;">&#10003;</span> <strong>100% Clear Title & Individual BIAAPA E-Khata</strong>
              </div>
              <div style="display:flex; align-items:center; gap:10px; color:#fff;">
                <span style="color:#10b981;">&#10003;</span> <strong>30ft & 40ft Wide Black-Top Avenues with Streetlights</strong>
              </div>
              <div style="display:flex; align-items:center; gap:10px; color:#fff;">
                <span style="color:#10b981;">&#10003;</span> <strong>Bank Loan Pre-Approved by SBI, HDFC & ICICI</strong>
              </div>
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
        <img src="assets/images/user-plot-master-plan-72.jpg" alt="AP Township Gated Plotted Community" />
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

    <!-- On-Ground Infrastructure & Demarcated Plots -->
    <section class="section" style="background:var(--bg-pitch);">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-6" data-aos="fade-right">
            <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
              <img src="assets/images/user-plot-ground-real.jpg" alt="AP Township On-Ground Demarcated Plots and Roads" style="width:100%; height:400px; object-fit:cover;" />
            </div>
          </div>
          <div class="col-6" data-aos="fade-left">
            <span class="section-tag">Ground Reality</span>
            <h2 style="font-size:2rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">Ready-To-Construct Demarcated Villa Sites</h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.7; margin-bottom:1.5rem;">
              Every plot at AP Township comes fully demarcated with precision boundary corner stones, concrete curbs, and wide asphalt internal roads. Complete with underground drainage lines and individual water connection pipes ready for immediate construction.
            </p>
            <div style="display:flex; flex-direction:column; gap:0.8rem;">
              <div style="display:flex; align-items:center; gap:10px; color:#fff;">
                <span style="color:#10b981;">&#10003;</span> <strong>100% Clear Title & Individual BMRDA E-Khata</strong>
              </div>
              <div style="display:flex; align-items:center; gap:10px; color:#fff;">
                <span style="color:#10b981;">&#10003;</span> <strong>30ft & 40ft Wide Tarred Internal Road Network</strong>
              </div>
              <div style="display:flex; align-items:center; gap:10px; color:#fff;">
                <span style="color:#10b981;">&#10003;</span> <strong>Bank Loan Pre-Approved by SBI, HDFC & ICICI</strong>
              </div>
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
        <img src="assets/images/user-plot-park-layout.jpg" alt="Habulus Tranquil 5-Acre Residential Campus" />
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

const madhuraHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Madhura Lotus Kaggalipura Kanakapura Road | ASPIRE HOUSING — 6-Acre BMRDA Villa Plots</title>
  <meta name="description" content="Madhura Lotus by The Purple Palms - 6-Acre BMRDA-approved gated villa community in Kaggalipura on Kanakapura Main Road (NH-948), 10 minutes to Silk Institute Metro. 90 exclusive villa plots ready for immediate registration.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('madhura')}

  <main style="padding-top:100px;">
    <!-- Project Hero Banner -->
    <section class="section" style="padding-bottom:3rem; border-bottom:1px solid var(--border-subtle); position:relative; overflow:hidden;">
      <div style="position:absolute; inset:0; opacity:0.18; pointer-events:none;">
        <img src="assets/images/user-plot-pin-land.jpg" alt="Madhura Lotus Background" style="width:100%; height:100%; object-fit:cover;" />
      </div>
      <div class="section-container" style="position:relative; z-index:2;" data-aos="fade-up">
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
          <span class="project-badge-tag" style="position:static; background:#10b981;">BMRDA Approved Layout</span>
          <span class="project-badge-tag" style="position:static; background:#3b82f6;">Completed & Ready to Register</span>
          <span class="project-badge-tag" style="position:static; background:var(--orange);">Electronic A-Khata</span>
        </div>
        <h1 class="section-title" style="font-size:clamp(2.2rem, 4.5vw, 3.5rem); max-width:900px;">
          Madhura Lotus — 6-Acre BMRDA Gated Villa Community
        </h1>
        <div style="display:flex; align-items:center; gap:8px; color:var(--text-muted); font-size:1.05rem; margin-top:0.5rem; margin-bottom:1.5rem;">
          ${icons.mapPin}
          <span>Kaggalipura, Off Kanakapura Main Road (NH-948), Bengaluru South</span>
        </div>
        <p class="section-subtitle" style="max-width:820px; font-size:1.15rem; line-height:1.8;">
          Marketed in strategic partnership with <strong>The Purple Palms</strong>, Madhura Lotus is a meticulously crafted 6-acre gated residential plotted enclave featuring only 90 exclusive villa plots. Positioned directly along the high-growth Kanakapura corridor, adjacent to DAV Public School and just 10 minutes from Silk Institute Metro Station, it offers peaceful green living combined with effortless city connectivity.
        </p>

        <div style="display:flex; flex-wrap:wrap; gap:1rem; margin-top:2rem;">
          <button class="btn-primary" data-open-modal="visit" data-project-name="Madhura Lotus Kaggalipura" style="padding:14px 32px; font-size:1rem;">
            Schedule Private Site Visit &rarr;
          </button>
          <a href="tel:+919945380337" class="btn-secondary" style="padding:14px 28px; font-size:1rem;">
            ${icons.phone}
            <span>Call +91 99453 80337</span>
          </a>
          <a href="https://wa.me/919945380337?text=Hi%20Aspire%20Housing,%20please%20share%20the%20cost%20sheet%20and%20plot%20availability%20for%20Madhura%20Lotus%20Kanakapura%20Road." target="_blank" class="btn-secondary" style="padding:14px 24px; font-size:1rem; color:#25d366; border-color:rgba(37,211,102,0.4);">
            ${icons.whatsapp}
            <span>WhatsApp Details</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Key Metrics Stats Row -->
    <section class="section" style="padding:3.5rem 0; background:var(--bg-main); border-bottom:1px solid var(--border-subtle);">
      <div class="section-container">
        <div class="hero-stats-row" style="margin-top:0;">
          <div class="hero-stat-item" data-aos="fade-up" data-aos-delay="100">
            <div class="hero-stat-number"><span data-counter="6" data-suffix=" Acres">6 Acres</span></div>
            <div class="hero-stat-label">Total Gated Land Extent</div>
          </div>
          <div class="hero-stat-item" data-aos="fade-up" data-aos-delay="200">
            <div class="hero-stat-number"><span data-counter="90" data-suffix=" Plots">90</span></div>
            <div class="hero-stat-label">Exclusive Sanctioned Plots</div>
          </div>
          <div class="hero-stat-item" data-aos="fade-up" data-aos-delay="300">
            <div class="hero-stat-number"><span class="accent">₹</span><span data-counter="62" data-suffix=".39L*">62.39L*</span></div>
            <div class="hero-stat-label">Plots Starting Price (1200 sq.ft)</div>
          </div>
          <div class="hero-stat-item" data-aos="fade-up" data-aos-delay="400">
            <div class="hero-stat-number"><span data-counter="10" data-suffix=" Mins">10 Mins</span></div>
            <div class="hero-stat-label">Silk Institute Metro Station</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Overview & Gallery Bento -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-7" data-aos="fade-right">
            <span class="section-tag">Serene Plotted Living</span>
            <h2 class="section-title">A Boutique Plotted Haven with Seamless Urban Reach</h2>
            <p style="color:var(--text-muted); font-size:1.05rem; line-height:1.8; margin-bottom:1.25rem;">
              Unlike overcrowded mega-layouts, <strong>Madhura Lotus</strong> is planned as an intimate, low-density community of just 90 residential villa sites. Designed for families and discerning investors seeking a pollution-free atmosphere surrounded by lush green coconut groves and fresh air, while maintaining instant connectivity to South Bengaluru's commercial centers.
            </p>
            <p style="color:var(--text-muted); font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
              Every plot is demarcated with clear boundary stones, equipped with individual water connection lines, and supported by wide asphalted internal avenues. With full BMRDA sanction and clear titles, buyers enjoy complete safety, seamless bank loan eligibility, and instant registration.
            </p>

            <div class="project-specs-grid" style="grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));">
              <div class="project-spec-item">
                <span class="spec-label">Approval Authority</span>
                <span class="spec-value" style="color:var(--orange-bright);">BMRDA Sanctioned</span>
              </div>
              <div class="project-spec-item">
                <span class="spec-label">Khata Status</span>
                <span class="spec-value">Electronic A-Khata</span>
              </div>
              <div class="project-spec-item">
                <span class="spec-label">Bank Approvals</span>
                <span class="spec-value">SBI, HDFC, ICICI, LIC</span>
              </div>
              <div class="project-spec-item">
                <span class="spec-label">Project Status</span>
                <span class="spec-value" style="color:#10b981;">Completed / Ready to Move</span>
              </div>
            </div>
          </div>

          <div class="col-5" data-aos="fade-left">
            <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
              <img src="assets/images/user-plot-pin-land.jpg" alt="Madhura Lotus Ground Overview" style="width:100%; height:400px; object-fit:cover;" class="zoomable-plan-img" data-caption="Madhura Lotus 6-Acre Layout Overview" />
              <div style="padding:1.25rem; background:rgba(12,15,22,0.95);">
                <div style="font-size:1.1rem; font-weight:700; color:#fff;">Madhura Lotus Ground Demarcation</div>
                <p style="font-size:0.85rem; color:var(--orange-bright); margin-top:2px;">Completed layout with paved avenues, individual water connections & boundary curbstones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Layout & Plot Configurations Section -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Custom Villa Dimensions</span>
          <h2 class="section-title">Plot Sizes & Living Configurations</h2>
          <p class="section-subtitle">
            Thoughtfully planned plot configurations allowing you to construct bespoke independent duplexes, triplex villas, or low-rise private sanctuaries.
          </p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt style="height:100%; border-top:3px solid var(--orange);">
              <span class="project-badge-tag" style="position:static; margin-bottom:1rem; display:inline-block; background:rgba(255,87,34,0.15); color:var(--orange-bright);">Most Popular</span>
              <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:0.5rem;">30 x 40 Ft</h3>
              <div style="font-size:1.1rem; color:var(--text-dim); margin-bottom:1rem;">1,200 Sq.Ft Villa Plot</div>
              <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.7; margin-bottom:1.5rem;">
                Ideal for contemporary 3 BHK independent villas with private parking and terrace gardens. Optimized for maximum space efficiency and high rental yields.
              </p>
              <div style="padding-top:1rem; border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.85rem; color:var(--text-dim);">Indicative Pricing:</span>
                <span style="font-weight:700; color:var(--orange-bright);">From ₹62.39 Lakhs*</span>
              </div>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt style="height:100%; border-top:3px solid var(--orange-bright);">
              <span class="project-badge-tag" style="position:static; margin-bottom:1rem; display:inline-block; background:rgba(16,185,129,0.15); color:#10b981;">Spacious Living</span>
              <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:0.5rem;">30 x 50 Ft</h3>
              <div style="font-size:1.1rem; color:var(--text-dim); margin-bottom:1rem;">1,500 Sq.Ft Villa Plot</div>
              <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.7; margin-bottom:1.5rem;">
                Generous frontage and depth for expansive 4 BHK luxury duplex homes with internal courtyards, double-height living areas, and home theater space.
              </p>
              <div style="padding-top:1rem; border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.85rem; color:var(--text-dim);">Indicative Pricing:</span>
                <span style="font-weight:700; color:var(--orange-bright);">From ₹77.90 Lakhs*</span>
              </div>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="glass-card" data-tilt style="height:100%; border-top:3px solid #3b82f6;">
              <span class="project-badge-tag" style="position:static; margin-bottom:1rem; display:inline-block; background:rgba(59,130,246,0.15); color:#60a5fa;">Exclusive Mansion</span>
              <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:0.5rem;">40 x 50+ Ft</h3>
              <div style="font-size:1.1rem; color:var(--text-dim); margin-bottom:1rem;">2,000+ Sq.Ft Custom Plots</div>
              <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.7; margin-bottom:1.5rem;">
                Grand corner and park-facing premium plots designed for architectural landmark residences with swimming pool, landscaped lawn, and servant quarters.
              </p>
              <div style="padding-top:1rem; border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.85rem; color:var(--text-dim);">Indicative Pricing:</span>
                <span style="font-weight:700; color:var(--orange-bright);">On Request</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Infrastructure & Amenities Bento -->
    <section class="section">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Ready Infrastructure</span>
          <h2 class="section-title">Engineered for Lasting Reliability</h2>
          <p class="section-subtitle">
            Madhura Lotus features complete, ready-to-use physical and civic infrastructure constructed to strict BMRDA development benchmarks.
          </p>
        </div>

        <div class="bento-grid">
          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.road}</div>
              <h3 class="pillar-title">Paved Blacktop Roads</h3>
              <p class="pillar-desc">Wide internal blacktop asphalt roadways with concrete curbstones, pedestrian walkways, and smooth stormwater runoff camber.</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.water}</div>
              <h3 class="pillar-title">Individual Water Lines</h3>
              <p class="pillar-desc">Direct water connection point provided to the boundary of every single plot from centralized borewell network and overhead reservoir.</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.electricity}</div>
              <h3 class="pillar-title">Underground Electricity</h3>
              <p class="pillar-desc">Safe underground electrical cabling, transformer stations, and automated LED avenue lighting across all streets.</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="100">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.kids}</div>
              <h3 class="pillar-title">Children's Play Park</h3>
              <p class="pillar-desc">Safe, landscaped recreational play zone equipped with swings, slides, multi-play activity stations, and soft rubberized flooring.</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="200">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.running}</div>
              <h3 class="pillar-title">Jogging & Walking Track</h3>
              <p class="pillar-desc">Dedicated perimeter fitness pathways lined with flowering trees and greenery for morning walks and healthy lifestyle.</p>
            </div>
          </div>

          <div class="col-4" data-aos="fade-up" data-aos-delay="300">
            <div class="pillar-card" data-tilt>
              <div class="pillar-icon-box">${icons.shieldCheck}</div>
              <h3 class="pillar-title">24/7 Gated Security</h3>
              <p class="pillar-desc">Grand entrance portal with security kiosk, RFID boom barriers, CCTV surveillance, and full perimeter compound boundary.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Corridor Connectivity -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Strategic South Bengaluru Location</span>
          <h2 class="section-title">Prime Connectivity on Kanakapura Road (NH-948)</h2>
          <p class="section-subtitle">
            Kaggalipura represents the sweet spot of Kanakapura Road: clean air and zero city congestion, yet only minutes away from the metro line and key expressways.
          </p>
        </div>

        <div class="bento-grid">
          <div class="col-6" data-aos="fade-right">
            <div class="glass-card" style="height:100%;">
              <h3 style="font-size:1.3rem; font-weight:800; color:#fff; margin-bottom:1.5rem; display:flex; align-items:center; gap:8px;">
                ${icons.compass}
                <span>Travel Times & Proximity Hubs</span>
              </h3>
              <div style="display:flex; flex-direction:column; gap:1rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#fff; font-weight:600;">DAV Public School</span>
                  <span style="color:var(--orange-bright); font-weight:700;">Adjacent (200m)</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#fff; font-weight:600;">Silk Institute Metro Station (Green Line)</span>
                  <span style="color:var(--orange-bright); font-weight:700;">10 Mins (6.8 Km)</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#fff; font-weight:600;">NICE Road Kanakapura Interchange</span>
                  <span style="color:var(--orange-bright); font-weight:700;">8 Mins (5 Km)</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#fff; font-weight:600;">Art of Living International Center</span>
                  <span style="color:var(--orange-bright); font-weight:700;">5 Mins (3 Km)</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#fff; font-weight:600;">Electronic City (via NICE Road)</span>
                  <span style="color:var(--orange-bright); font-weight:700;">25 Mins</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#fff; font-weight:600;">Banashankari & JP Nagar Metro</span>
                  <span style="color:var(--orange-bright); font-weight:700;">20 Mins</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6" data-aos="fade-left">
            <div class="glass-card" style="height:100%;">
              <h3 style="font-size:1.3rem; font-weight:800; color:#fff; margin-bottom:1rem; display:flex; align-items:center; gap:8px;">
                ${icons.building}
                <span>Social Infrastructure & Schools</span>
              </h3>
              <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.7; margin-bottom:1.5rem;">
                Surrounded by prestigious educational institutions including Kumaran's Children's Home, Edify School, National Public School, and Sri Sri Ravishankar Vidya Mandir. Top-tier medical care is accessible at BGS Gleneagles Global Hospital and Apollo Hospital Bannerghatta Road.
              </p>
              <div style="background:rgba(255,87,34,0.08); border-radius:12px; padding:1.25rem; border:1px solid var(--orange-border);">
                <div style="font-size:1.05rem; font-weight:700; color:#fff; margin-bottom:4px;">Appreciation Potential</div>
                <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
                  With NH-948 widening, peripheral ring connectivity, and the expansion of the Silk Institute Metro line, Kanakapura Road has delivered consistent 18-22% annual capital appreciation for legally cleared BMRDA layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Site Visit Booking & Contact -->
    <section class="section" style="border-top:1px solid var(--border-subtle);">
      <div class="section-container" style="text-align:center;" data-aos="zoom-in">
        <span class="section-tag">Direct Developer Representation</span>
        <h2 class="section-title" style="max-width:700px; margin:0 auto 1.5rem;">
          Reserve Your Villa Plot at Madhura Lotus
        </h2>
        <p style="color:var(--text-muted); max-width:620px; margin:0 auto 2.5rem; font-size:1.05rem;">
          Only limited plots remain available in this boutique 90-unit layout. Contact our dedicated advisory desk to inspect original approvals, review site availability, and schedule your guided on-site visit.
        </p>

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <button class="btn-primary" data-open-modal="visit" data-project-name="Madhura Lotus Kaggalipura" style="padding:14px 34px; font-size:1rem;">
            Book On-Site Inspection &rarr;
          </button>
          <a href="tel:+919945380337" class="btn-secondary" style="padding:14px 30px;">
            ${icons.phone}
            <span>Call +91 99453 80337</span>
          </a>
          <a href="https://wa.me/919945380337?text=Hi%20Aspire%20Housing,%20I%20am%20interested%20in%20visiting%20Madhura%20Lotus%20on%20Kanakapura%20Road." target="_blank" class="btn-secondary" style="padding:14px 26px; color:#25d366; border-color:rgba(37,211,102,0.4);">
            ${icons.whatsapp}
            <span>WhatsApp Lead Desk</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;



fs.writeFileSync(path.join(__dirname, 'madhura-lotus.html'), madhuraHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'amritha-varshini.html'), amrithaHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'khb-suryacity.html'), khbHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'nandi-urban-city.html'), nandiHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'ap-township.html'), apHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'habulus-tranquil.html'), habulusHtml, 'utf8');

console.log('Part 2 updated: Amritha Varshini + 4 projects created.');
