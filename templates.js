const fs = require('fs');
const path = require('path');
const icons = require('./icons');

// Common components
function getHeader(activePage = 'home') {
  const isHome = (activePage === 'home');
  const preloaderHtml = isHome ? `
  <!-- Animated Logo Preloader (Only Logo - High Impact Presentation) -->
  <div id="logoIntroPreloader">
    <div class="intro-ambient-glow"></div>
    <div class="intro-logo-box">
      <svg class="intro-logo-svg" viewBox="0 0 320 280">
        <defs>
          <linearGradient id="introSunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF6B00" />
            <stop offset="50%" stop-color="#FF5100" />
            <stop offset="100%" stop-color="#E53900" />
          </linearGradient>
          <linearGradient id="introGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFA040" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#FF3D00" stop-opacity="0" />
          </linearGradient>
          <filter id="introSunFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Centered Glowing Sun Disc -->
        <circle cx="160" cy="98" r="58" fill="url(#introSunGrad)" />
        <circle cx="160" cy="98" r="68" fill="url(#introGlow)" filter="url(#introSunFilter)" opacity="0.35" />

        <!-- Symmetrical 3-Tier Architectural Chevron Peak -->
        <polygon points="160,24 184,80 160,70 136,80" fill="#0D0E12" stroke="#FFFFFF" stroke-width="1.8" stroke-linejoin="round" />
        <polygon points="160,24 184,80 160,70" fill="#181B22" />

        <polygon points="160,54 200,108 160,96 120,108" fill="#0D0E12" stroke="#FFFFFF" stroke-width="1.8" stroke-linejoin="round" />
        <polygon points="160,54 200,108 160,96" fill="#1C2028" />

        <polygon points="160,78 218,136 160,122 102,136" fill="#0D0E12" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" />
        <polygon points="160,78 218,136 160,122" fill="#222733" />

        <!-- Symmetrical Center Spine -->
        <line x1="160" y1="24" x2="160" y2="122" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" />

        <!-- Perfectly Centered Typography -->
        <text x="162" y="196" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="900" letter-spacing="4" fill="#FFFFFF">ASPIRE</text>
        <text x="166" y="234" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="12" fill="#FF5500">HOUSING</text>
        <text x="161.5" y="258" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="600" letter-spacing="3" fill="#94A3B8">BUILT ON TRUST. BACKED BY TRANSPARENCY.</text>
      </svg>
      <div class="intro-loading-bar">
        <div class="intro-loading-progress"></div>
      </div>
    </div>
  </div>
  ` : '';

  return `
  ${preloaderHtml}

  <!-- Header & Navigation -->
  <header class="site-header">
    <div class="nav-container">
      <a href="index.html" class="brand-logo-link" title="Aspire Housing Home">
        <img src="assets/logo-icon.svg" alt="Aspire Housing Logo" class="brand-logo-img" />
        <div class="brand-text-block">
          <span class="brand-title">ASPIRE</span>
          <span class="brand-subtitle">HOUSING</span>
        </div>
      </a>

      <nav class="main-nav">
        <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
        <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">About Us</a>
        
        <div class="nav-item-dropdown">
          <a href="projects.html" class="nav-link dropdown-trigger ${['projects', 'amritha', 'khb', 'nandi', 'ap', 'habulus'].includes(activePage) ? 'active' : ''}">
            Projects
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="dropdown-menu">
            <a href="projects.html" class="dropdown-item">
              <span class="dropdown-title">All Master Developments</span>
              <span class="dropdown-sub">Complete Bengaluru Portfolio</span>
            </a>
            <a href="amritha-varshini.html" class="dropdown-item">
              <span class="dropdown-title">Amritha Varshini (New)</span>
              <span class="dropdown-sub">23-Acre BMRDA Township • 336 Sites & Luxury Villas</span>
            </a>
            <a href="khb-suryacity.html" class="dropdown-item">
              <span class="dropdown-title">KHB Surya City Phase-4</span>
              <span class="dropdown-sub">2400-Acre Mega Township (₹46.80L+)</span>
            </a>
            <a href="nandi-urban-city.html" class="dropdown-item">
              <span class="dropdown-title">Nandi Urban City</span>
              <span class="dropdown-sub">12-Acre Plotted Community near Airport</span>
            </a>
            <a href="ap-township.html" class="dropdown-item">
              <span class="dropdown-title">AP Township</span>
              <span class="dropdown-sub">30-Acre BMRDA & RERA Approved</span>
            </a>
            <a href="habulus-tranquil.html" class="dropdown-item">
              <span class="dropdown-title">Habulus Tranquil</span>
              <span class="dropdown-sub">2 & 3 BHK Ultra Luxury (₹90L+)</span>
            </a>
          </div>
        </div>

        <a href="services.html" class="nav-link ${activePage === 'services' ? 'active' : ''}">Services</a>
        <a href="careers.html" class="nav-link ${activePage === 'careers' ? 'active' : ''}">Careers</a>
        <a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact Us</a>
      </nav>

      <div class="nav-actions">
        <a href="tel:+919945380337" class="header-phone">
          ${icons.phone}
          <span>+91 99453 80337</span>
        </a>
        <button class="btn-primary" data-open-modal="visit">
          <span>Schedule Visit</span>
        </button>
        <button class="mobile-toggle" id="mobileMenuToggle" aria-label="Toggle navigation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="mobile-drawer" id="mobileDrawer">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
      <span style="font-weight:800; font-size:1.2rem; color:#fff;">ASPIRE HOUSING</span>
      <button id="mobileDrawerClose" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
    </div>
    <a href="index.html" class="mobile-nav-link ${activePage === 'home' ? 'active' : ''}">Home &rarr;</a>
    <a href="about.html" class="mobile-nav-link ${activePage === 'about' ? 'active' : ''}">About Us &rarr;</a>
    <a href="projects.html" class="mobile-nav-link ${activePage === 'projects' ? 'active' : ''}">All Projects &rarr;</a>
    <div style="padding-left:1rem; display:flex; flex-direction:column; gap:0.6rem; border-left:2px solid var(--orange-border); margin:0.5rem 0;">
      <a href="amritha-varshini.html" style="color:var(--orange-bright); text-decoration:none; font-size:0.95rem; font-weight:700;">★ Amritha Varshini (23 Acres BMRDA)</a>
      <a href="khb-suryacity.html" style="color:var(--text-muted); text-decoration:none; font-size:0.95rem;">• KHB Surya City Phase-4</a>
      <a href="nandi-urban-city.html" style="color:var(--text-muted); text-decoration:none; font-size:0.95rem;">• Nandi Urban City Devanahalli</a>
      <a href="ap-township.html" style="color:var(--text-muted); text-decoration:none; font-size:0.95rem;">• AP Township BMRDA</a>
      <a href="habulus-tranquil.html" style="color:var(--text-muted); text-decoration:none; font-size:0.95rem;">• Habulus Tranquil Luxury</a>
    </div>
    <a href="services.html" class="mobile-nav-link ${activePage === 'services' ? 'active' : ''}">Strategic Services &rarr;</a>
    <a href="careers.html" class="mobile-nav-link ${activePage === 'careers' ? 'active' : ''}">Careers & Culture &rarr;</a>
    <a href="contact.html" class="mobile-nav-link ${activePage === 'contact' ? 'active' : ''}">Contact & Office &rarr;</a>
    <div style="margin-top:2rem;">
      <a href="tel:+919945380337" class="btn-primary" style="width:100%; text-align:center;">Call +91 99453 80337</a>
    </div>
  </div>
  `;
}

function getFooter() {
  return `
  <!-- Footer -->
  <footer class="site-footer">
    <div class="section-container">
      <div class="footer-top">
        <div>
          <a href="index.html" class="brand-logo-link" style="margin-bottom:1.2rem;">
            <img src="assets/logo-icon.svg" alt="Aspire Housing Logo" style="width:40px; height:40px;" />
            <div class="brand-text-block">
              <span class="brand-title">ASPIRE</span>
              <span class="brand-subtitle">HOUSING</span>
            </div>
          </a>
          <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.7; max-width:340px; margin-bottom:1.5rem;">
            Built on Trust. Backed by Transparency. Delivering clients more project clarity, government-approved layouts, and high-growth real estate investments across Bengaluru.
          </p>
          <div style="display:flex; gap:0.75rem;">
            <a href="tel:+919945380337" class="btn-secondary" style="font-size:0.8rem; padding:8px 16px;">
              ${icons.phone}
              <span>+91 99453 80337</span>
            </a>
            <a href="https://wa.me/919945380337" target="_blank" class="btn-secondary" style="font-size:0.8rem; padding:8px 16px; color:#25d366; border-color:rgba(37,211,102,0.4);">
              ${icons.whatsapp}
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Portfolio</h4>
          <ul class="footer-links-list">
            <li><a href="amritha-varshini.html" class="footer-link" style="color:var(--orange-bright); font-weight:600;">★ Amritha Varshini (23-Acre BMRDA)</a></li>
            <li><a href="khb-suryacity.html" class="footer-link">KHB Surya City Phase-4</a></li>
            <li><a href="nandi-urban-city.html" class="footer-link">Nandi Urban City</a></li>
            <li><a href="ap-township.html" class="footer-link">AP Township BMRDA</a></li>
            <li><a href="habulus-tranquil.html" class="footer-link">Habulus Tranquil Apartments</a></li>
            <li><a href="projects.html" class="footer-link">All Projects Directory</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">Company</h4>
          <ul class="footer-links-list">
            <li><a href="about.html" class="footer-link">About Aspire Housing</a></li>
            <li><a href="about.html#values" class="footer-link">7 Core Value Pillars</a></li>
            <li><a href="services.html" class="footer-link">Strategic Advisory Services</a></li>
            <li><a href="careers.html" class="footer-link">Careers & Culture</a></li>
            <li><a href="contact.html" class="footer-link">Corporate Office Directory</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">Corporate Office</h4>
          <p style="color:var(--text-muted); font-size:0.88rem; line-height:1.6; margin-bottom:1rem;">
            <strong>Aspire Housing Corporate HQ</strong><br>
            Lakshmi Enclave, #1571, 2nd Floor, East End Main Road, Jayanagar 9th Block, Bangalore – 560069
          </p>
          <p style="color:var(--text-dim); font-size:0.82rem;">
            Email: <a href="mailto:info@thepurplepalms.com" style="color:var(--orange);">info@thepurplepalms.com</a><br>
            Direct: <a href="tel:+919945380337" style="color:var(--orange);">+91 99453 80337</a>
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 ASPIRE HOUSING. All Rights Reserved. Built with bespoke architectural craftsmanship.</div>
        <div style="display:flex; gap:1.5rem; margin-top:0.5rem;">
          <a href="contact.html" class="footer-link">Privacy Policy</a>
          <a href="contact.html" class="footer-link">RERA Approvals</a>
          <a href="contact.html" class="footer-link">Site Map</a>
        </div>
      </div>

      <div class="footer-legal-note">
        <strong>Disclaimer:</strong> The content is for informational purposes only and does not constitute an offer or commitment. Prices, specifications and property availability are subject to change without prior notice. By sharing your contact details, you consent to receive communication via Call, SMS, Email, or WhatsApp, even if DND is active. RERA Approvals: PRM/KA/RERA/1251/308/PR/220118/004642 (AP Township), APA/LAO No. 142/2012-13 (Amritha Varshini BMRDA), and STRRPA / BIAAPA sanctions.
      </div>
    </div>
  </footer>

  <!-- Floating Quick Actions -->
  <div class="floating-actions">
    <a href="https://wa.me/919945380337?text=Hi%20Aspire%20Housing,%20I%20would%20like%20details%20on%20your%20Bangalore%20plotted%20projects" target="_blank" class="floating-btn whatsapp" title="Chat on WhatsApp">
      ${icons.whatsapp}
    </a>
    <a href="tel:+919945380337" class="floating-btn phone" title="Call Us Directly">
      ${icons.phone}
    </a>
  </div>

  <!-- Modal Booking Dialog -->
  <div class="modal-overlay" id="siteVisitModal">
    <div class="modal-dialog">
      <button class="modal-close-btn" id="closeModalBtn">&times;</button>
      <div style="margin-bottom:1.5rem;">
        <span class="section-tag">Direct Developer Access</span>
        <h3 style="color:#fff; font-size:1.5rem; font-weight:800; margin-top:4px;">Schedule an Exclusive Site Visit</h3>
        <p style="color:var(--text-muted); font-size:0.88rem; margin-top:4px;">Experience the layout, examine original approvals, and inspect infrastructure in person.</p>
      </div>

      <form id="modalVisitForm">
        <div class="form-input-group">
          <label class="form-label">Select Development Project</label>
          <select id="modalProjectField" class="form-control" style="background:#111520; font-weight:600; color:var(--orange-bright);">
            <option value="Amritha Varshini (23-Acre BMRDA Layout)">Amritha Varshini (23-Acre BMRDA Layout • Attibele / Suryacity-3)</option>
            <option value="KHB Surya City Phase-4">KHB Surya City Phase-4 (2,400-Acre Mega Township)</option>
            <option value="Nandi Urban City Devanahalli">Nandi Urban City (12-Acre BIAAPA near Airport)</option>
            <option value="AP Township BMRDA">AP Township (30-Acre BMRDA near E-City)</option>
            <option value="Habulus Tranquil Neo Town">Habulus Tranquil (Ultra-Luxury Apartments)</option>
          </select>
        </div>
        <div class="form-input-group">
          <label class="form-label">Full Name *</label>
          <input type="text" class="form-control" placeholder="e.g. Rahul Sharma" required />
        </div>
        <div class="form-input-group">
          <label class="form-label">Email Address *</label>
          <input type="email" class="form-control" placeholder="rahul@example.com" required />
        </div>
        <div class="form-input-group">
          <label class="form-label">Mobile Number (WhatsApp Enabled) *</label>
          <input type="tel" class="form-control" placeholder="+91 98765 43210" required />
        </div>
        <div class="form-input-group">
          <label class="form-label">Preferred Date & Message</label>
          <textarea class="form-control" rows="2" placeholder="Tell us your preferred day/time or specific plot dimensions (e.g. 30x40, 40x60)..."></textarea>
        </div>
        <button type="submit" class="btn-primary" style="width:100%; padding:14px; font-size:1rem; border-radius:12px;">Confirm Site Visit Booking &rarr;</button>
      </form>
    </div>
  </div>

  <!-- High Resolution Lightbox Modal for Blueprints & Plans -->
  <div class="modal-overlay" id="planLightboxModal">
    <div style="position:relative; max-width:96vw; max-height:92vh; display:flex; flex-direction:column; align-items:center; justify-content:center;">
      <button class="modal-close-btn" id="closeLightboxBtn" style="position:absolute; top:-16px; right:-16px; z-index:20; background:var(--orange); color:#000; font-weight:800; font-size:1.4rem;">&times;</button>
      <img id="lightboxImg" src="" alt="Plan Enlargement" style="max-width:94vw; max-height:82vh; object-fit:contain; border-radius:12px; border:1px solid rgba(255,255,255,0.15); box-shadow:0 20px 60px rgba(0,0,0,0.9); background:#0a0c12;" />
      <div id="lightboxCaption" style="color:#fff; font-size:0.95rem; font-weight:600; margin-top:0.8rem; text-align:center; background:rgba(18,21,30,0.85); padding:6px 18px; border-radius:30px; border:1px solid rgba(255,255,255,0.1);"></div>
    </div>
  </div>

  <!-- AOS Animation Script (High-speed CDN) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
  <!-- Core Interaction Script -->
  <script src="js/main.js"></script>
  `;
}

// Export helpers
module.exports = { getHeader, getFooter, icons };
