const fs = require('fs');
const path = require('path');
const { getHeader, getFooter, icons } = require('./templates');

// 8. SERVICES.HTML
const servicesHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Real Estate Services & Advisory | ASPIRE HOUSING — End-to-End Solutions</title>
  <meta name="description" content="Aspire Housing Strategic Real Estate Services: Investment Advisory, Regulatory Liaison & Approvals, Project Feasibility, Legal Due Diligence, and Property Management.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('services')}

  <main style="padding-top:100px;">
    <!-- Page Header Banner -->
    <section class="section" style="padding-bottom:3rem; border-bottom:1px solid var(--border-subtle);">
      <div class="section-container" data-aos="fade-up">
        <span class="section-tag">Strategic Real Estate Solutions</span>
        <h1 class="section-title" style="font-size:clamp(2.2rem, 4.5vw, 3.4rem); max-width:850px;">
          Building Better, Together.
        </h1>
        <p class="section-subtitle" style="max-width:820px;">
          At Aspire Housing, we deliver actionable insights for individuals, families, and businesses in Bengaluru, covering every phase from site selection to project launch with meaningful data analysis. With a deep understanding of RERA compliance, market demand, infrastructure connectivity, and land use regulations, our team helps maximize project value while reducing risk for our clients.
        </p>
      </div>
    </section>

    <!-- Vertical 1: Investment Advisory -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-6" data-aos="fade-right">
            <span class="section-tag">Vertical 01</span>
            <h2 style="font-size:2rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">
              Real Estate and Investment Advisory
            </h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1.5rem;">
              Strategic investment guidance is available for high-growth corridors and premium micro-markets that offer strong appreciation and rental yields.
            </p>
            <div style="display:flex; flex-direction:column; gap:1rem;">
              <div class="glass-card" data-tilt style="padding:1.2rem;">
                <strong style="color:var(--orange-bright);">Investment Advisory:</strong> Pinpointing Bengaluru’s high-growth corridors, major infrastructure projects, and prime micro-markets, helping developers and investors unlock maximum appreciation and secure robust rental returns.
              </div>
              <div class="glass-card" data-tilt style="padding:1.2rem;">
                <strong style="color:var(--orange-bright);">Residential Advisory:</strong> End-to-end support for homebuyers, with choice curation of premier residential projects and favorable negotiation, ensuring a seamless purchase experience.
              </div>
              <div class="glass-card" data-tilt style="padding:1.2rem;">
                <strong style="color:var(--orange-bright);">Commercial & Land Advisory:</strong> Specialized guidance for acquiring commercial assets, plotting developments, and strategic land investments tailored for Bengaluru’s evolving business landscape.
              </div>
              <div class="glass-card" data-tilt style="padding:1.2rem;">
                <strong style="color:var(--orange-bright);">Portfolio Management:</strong> Comprehensive portfolio solutions that diversify and optimize real estate holdings, designed to drive sustainable growth and minimize risks.
              </div>
            </div>
          </div>
          <div class="col-6" data-aos="fade-left">
            <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
              <img src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80" alt="Investment Advisory" style="width:100%; height:450px; object-fit:cover;" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vertical 2: Project Feasibility -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-6" data-aos="fade-right">
            <div class="glass-card" data-tilt style="padding:0; overflow:hidden;">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Project Feasibility" style="width:100%; height:450px; object-fit:cover;" />
            </div>
          </div>
          <div class="col-6" data-aos="fade-left">
            <span class="section-tag">Vertical 02</span>
            <h2 style="font-size:2rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">
              Project Feasibility & Market Analysis
            </h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1.5rem;">
              Clear, comprehensive feasibility studies are essential to navigating the complex maze of Bengaluru’s dynamic real estate environment.
            </p>
            <div style="display:flex; flex-direction:column; gap:1rem;">
              <div class="glass-card" data-tilt style="padding:1rem;">
                <strong style="color:#fff;">Comprehensive Market Analysis:</strong> In-depth evaluation of Bengaluru’s real estate landscape, demand-supply dynamics, target customer segments, and competitor benchmarking.
              </div>
              <div class="glass-card" data-tilt style="padding:1rem;">
                <strong style="color:#fff;">Financial Feasibility:</strong> Detailed projections covering sales potential, operational costs, IRR, ROI, break-even points, and cash flow.
              </div>
              <div class="glass-card" data-tilt style="padding:1rem;">
                <strong style="color:#fff;">Technical Assessment:</strong> Land suitability, design requirements, infrastructure connectivity, and local development compliance.
              </div>
              <div class="glass-card" data-tilt style="padding:1rem;">
                <strong style="color:#fff;">SWOT & Risk Analysis:</strong> Identifying market, regulatory, technical, and financial risks with actionable mitigation strategies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vertical 3 & 4: Regulatory & Marketing -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid">
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt style="height:100%;">
              <span class="section-tag">Vertical 03</span>
              <h2 style="font-size:1.8rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">
                Regulatory Liaison & Project Approvals
              </h2>
              <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.7; margin-bottom:1.5rem;">
                We believe smooth project approval processes are critical. Our team handles end-to-end liaison, securing land conversion, zoning approvals, RERA registration, and occupancy certificates without the hassle of following up.
              </p>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.9rem; color:var(--text-muted); font-size:0.92rem;">
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> Land conversion and complete zoning approvals</li>
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> Building plan sanction & NOC procurement</li>
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> RERA registration & compliance support</li>
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> Environmental clearances & occupancy certificates</li>
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> Direct liaison with BDA, BBMP, BMRDA, STRRPA, BIAAPA authorities</li>
              </ul>
            </div>
          </div>

          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt style="height:100%;">
              <span class="section-tag">Vertical 04</span>
              <h2 style="font-size:1.8rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">
                Project Marketing & Sales Enablement
              </h2>
              <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.7; margin-bottom:1.5rem;">
                Targeted marketing that aligns with Bengaluru’s evolving infrastructure and customer preferences, enhancing absorption rates and asset value.
              </p>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.9rem; color:var(--text-muted); font-size:0.92rem;">
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> End-to-end market research & competitor analysis</li>
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> Premium branding, brochures, and digital creative services</li>
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> Strategic project launch campaigns (online & offline)</li>
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> Channel partner & broker network activation</li>
                <li style="display:flex; gap:10px; align-items:center;"><span style="color:var(--orange);">${icons.check}</span> Sales support, lead management, and CRM integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vertical 5 & 6: Legal & Lease Management -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container">
        <div class="bento-grid">
          <div class="col-6" data-aos="fade-up" data-aos-delay="100">
            <div class="glass-card" data-tilt style="height:100%;">
              <span class="section-tag">Vertical 05</span>
              <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin:0.5rem 0 1rem;">Legal Documentation & Compliance</h3>
              <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.7; margin-bottom:1.5rem;">
                Accuracy and compliance with local property laws are non-negotiable for complete peace of mind.
              </p>
              <h4 style="color:var(--orange-bright); font-size:1rem; margin-bottom:0.5rem;">Drafting & Vetting</h4>
              <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1rem;">Sale Deeds, Gift Deeds, Lease Deeds, Rental Agreements, JDAs, Power of Attorney (GPA/SPA), Construction Agreements.</p>
              <h4 style="color:var(--orange-bright); font-size:1rem; margin-bottom:0.5rem;">Title Verification & Due Diligence</h4>
              <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1rem;">Title deed scrutiny, encumbrance checks, litigation search, land use zoning compliance, and government NOC verifications.</p>
              <h4 style="color:var(--orange-bright); font-size:1rem; margin-bottom:0.5rem;">Registration Support</h4>
              <p style="color:var(--text-muted); font-size:0.88rem;">End-to-end assistance at Sub-Registrar Offices and stamp duty calculations.</p>
            </div>
          </div>

          <div class="col-6" data-aos="fade-up" data-aos-delay="200">
            <div class="glass-card" data-tilt style="height:100%;">
              <span class="section-tag">Vertical 06</span>
              <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin:0.5rem 0 1rem;">Lease & Rental Management</h3>
              <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.7; margin-bottom:1.5rem;">
                Fine-tuned for commercial and residential developers, ensuring transparency and optimized yields for all Bengaluru-based assets.
              </p>
              <h4 style="color:var(--orange-bright); font-size:1rem; margin-bottom:0.5rem;">Commercial Leasing</h4>
              <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1rem;">Office spaces, coworking hubs, IT parks, retail outlets, showrooms, and warehouses with short and long-term leasing solutions.</p>
              <h4 style="color:var(--orange-bright); font-size:1rem; margin-bottom:0.5rem;">Property Rentals & Support</h4>
              <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1rem;">Fully furnished, semi-furnished options, rent negotiation, agreement drafting, and dedicated property managers.</p>
              <h4 style="color:var(--orange-bright); font-size:1rem; margin-bottom:0.5rem;">End-to-End Property Management</h4>
              <p style="color:var(--text-muted); font-size:0.88rem;">Tenant screening, rent collection, maintenance coordination, and regular occupancy reporting.</p>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:3.5rem;" data-aos="fade-up">
          <button class="btn-primary" data-open-modal="visit" data-project-name="Real Estate Advisory Consultation" style="padding:14px 34px; font-size:1rem;">
            Consult with Our Advisory Leadership &rarr;
          </button>
        </div>
      </div>
    </section>
  </main>

  ${getFooter()}
</body>
</html>`;

// 9. CAREERS.HTML
const careersHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Careers & Company Culture | ASPIRE HOUSING</title>
  <meta name="description" content="Join Aspire Housing - Build the future of transparent real estate in Bengaluru. Explore current openings and our high-performance workplace culture.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('careers')}

  <main style="padding-top:100px;">
    <!-- Page Header Banner -->
    <section class="section" style="padding-bottom:3rem; border-bottom:1px solid var(--border-subtle);">
      <div class="section-container" data-aos="fade-up">
        <span class="section-tag">Talent & Culture</span>
        <h1 class="section-title" style="font-size:clamp(2.2rem, 4.5vw, 3.4rem); max-width:850px;">
          Build the Future of Transparent Real Estate.
        </h1>
        <p class="section-subtitle" style="max-width:800px;">
          At Aspire Housing, our most valuable resource is our dedicated and driven team. If you’re a self-starter who shares our passion for turning our vision into reality while advancing your career, we invite you to discover a range of career opportunities with us.
        </p>
      </div>
    </section>

    <!-- Culture & Core Values -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid" style="align-items:center;">
          <div class="col-6" data-aos="fade-right">
            <span class="section-tag">Why Aspire Housing</span>
            <h2 style="font-size:2rem; font-weight:800; color:#fff; margin-bottom:1.2rem;">
              A Culture Grounded in Meritocracy and Ethics
            </h2>
            <p style="color:var(--text-muted); font-size:1rem; line-height:1.8; margin-bottom:1.5rem;">
              We believe in empowering individuals with the autonomy, data tools, and executive support needed to deliver extraordinary outcomes. When you work with Aspire Housing, you are not just selling properties; you are shaping Bengaluru's landscape and building generational trust for thousands of families.
            </p>
            <div style="display:flex; flex-direction:column; gap:1rem;">
              <div class="glass-card" data-tilt style="padding:1rem;">
                <strong style="color:var(--orange-bright);">High-Growth Impact:</strong> Direct exposure to 2400-acre mega townships, high-net-worth investors, and prominent development bodies.
              </div>
              <div class="glass-card" data-tilt style="padding:1rem;">
                <strong style="color:var(--orange-bright);">Continuous Learning:</strong> RERA regulatory masterclasses, advanced CRM intelligence, and high-stakes negotiation training.
              </div>
              <div class="glass-card" data-tilt style="padding:1rem;">
                <strong style="color:var(--orange-bright);">Competitive Rewards:</strong> Industry-leading compensation packages with high-yield performance incentives.
              </div>
            </div>
          </div>

          <div class="col-6" data-aos="fade-left">
            <div class="glass-card" data-tilt style="border:1px solid var(--orange-border); padding:2.5rem;">
              <h3 style="font-size:1.5rem; font-weight:800; color:#fff; margin-bottom:0.75rem;">Join Our Team</h3>
              <p style="color:var(--text-muted); font-size:0.92rem; margin-bottom:1.5rem;">
                Please forward your resume along with a brief message explaining your reasons for wanting to join our team.
              </p>
              <form onsubmit="event.preventDefault(); alert('Thank you! Your application has been submitted to info@thepurplepalms.com. Our HR team will reach out to you.'); this.reset();">
                <div class="form-input-group">
                  <label class="form-label">Full Name *</label>
                  <input type="text" class="form-control" placeholder="Your name" required />
                </div>
                <div class="form-input-group">
                  <label class="form-label">Email Address *</label>
                  <input type="email" class="form-control" placeholder="your.email@example.com" required />
                </div>
                <div class="form-input-group">
                  <label class="form-label">Target Role *</label>
                  <select class="form-control" style="background:#111520;">
                    <option>Senior Real Estate Investment Consultant</option>
                    <option>Regulatory Liaison Officer (BMRDA / RERA)</option>
                    <option>Digital Marketing & Campaign Specialist</option>
                    <option>Legal Documentation & Title Associate</option>
                    <option>Customer Relationship Manager</option>
                  </select>
                </div>
                <div class="form-input-group">
                  <label class="form-label">Cover Note & LinkedIn / Portfolio URL</label>
                  <textarea class="form-control" rows="3" placeholder="Briefly describe your experience and reasons for joining..."></textarea>
                </div>
                <button type="submit" class="btn-primary" style="width:100%; padding:14px; border-radius:12px;">Submit Application &rarr;</button>
              </form>
              <div style="margin-top:1.25rem; font-size:0.8rem; color:var(--text-dim); text-align:center;">
                Or email direct: <a href="mailto:info@thepurplepalms.com" style="color:var(--orange);">info@thepurplepalms.com</a>
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

// 10. CONTACT.HTML (Contact Us & Corporate Office Directory)
const contactHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us & Corporate Office Directory | ASPIRE HOUSING</title>
  <meta name="description" content="Contact Aspire Housing Corporate Office in Jayanagar, Bangalore. Call +91 70905 32343, WhatsApp, or schedule an in-person meeting with our investment team.">
  <link rel="icon" type="image/svg+xml" href="assets/logo-icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('contact')}

  <main style="padding-top:100px;">
    <!-- Page Header Banner -->
    <section class="section" style="padding-bottom:3rem; border-bottom:1px solid var(--border-subtle);">
      <div class="section-container" data-aos="fade-up">
        <span class="section-tag">Bengaluru Corporate Headquarters</span>
        <h1 class="section-title" style="font-size:clamp(2.2rem, 4.5vw, 3.4rem); max-width:850px;">
          Connect With Aspire Housing.
        </h1>
        <p class="section-subtitle" style="max-width:800px;">
          Our corporate advisory office in Jayanagar welcomes property buyers, institutional developers, and investors for detailed portfolio consultations and on-ground site inspections.
        </p>
      </div>
    </section>

    <!-- Contact & Details Grid -->
    <section class="section">
      <div class="section-container">
        <div class="bento-grid">
          <!-- Corporate Directory Card -->
          <div class="col-5" data-aos="fade-right">
            <div class="glass-card" data-tilt style="height:100%; border-color:var(--orange-border);">
              <span class="section-tag">Executive Headquarters</span>
              <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin:0.5rem 0 1.5rem;">Corporate Office Directory</h3>
              
              <div style="margin-bottom:1.6rem;">
                <div style="font-size:0.75rem; color:var(--orange-bright); font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Registered Office Address</div>
                <div style="color:#fff; font-size:1.05rem; font-weight:600; line-height:1.6;">
                  Aspire Housing Corporate HQ<br>
                  Lakshmi Enclave, #1571, 2nd Floor,<br>
                  East End Main Road, Jayanagar 9th Block,<br>
                  Bangalore – 560069, Karnataka, India
                </div>
              </div>

              <div style="margin-bottom:1.6rem;">
                <div style="font-size:0.75rem; color:var(--orange-bright); font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Direct Telephone & WhatsApp</div>
                <div style="font-size:1.35rem; font-weight:900;">
                  <a href="tel:+917090532343" style="color:#fff; text-decoration:none;">+91 70905 32343</a>
                </div>
                <p style="color:var(--text-dim); font-size:0.82rem; margin-top:4px;">Available Monday – Sunday (9:00 AM – 7:30 PM IST)</p>
              </div>

              <div style="margin-bottom:1.6rem;">
                <div style="font-size:0.75rem; color:var(--orange-bright); font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Official Email Desk</div>
                <div style="font-size:1.05rem; font-weight:600;">
                  <a href="mailto:info@thepurplepalms.com" style="color:var(--orange); text-decoration:none;">info@thepurplepalms.com</a>
                </div>
              </div>

              <div style="margin-bottom:1.8rem;">
                <div style="font-size:0.75rem; color:var(--orange-bright); font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Official Web Portal</div>
                <div style="font-size:0.95rem; color:var(--text-muted);">
                  https://thepurplepalms.com/
                </div>
              </div>

              <div style="display:flex; gap:1rem; margin-top:2rem;">
                <a href="https://wa.me/917090532343?text=Hi%20Aspire%20Housing,%20I%20would%20like%20to%20inquire%20about%20your%20properties" target="_blank" class="btn-primary" style="flex:1; padding:12px; font-size:0.9rem; text-align:center;">
                  ${icons.whatsapp}
                  <span>WhatsApp</span>
                </a>
                <a href="tel:+917090532343" class="btn-secondary" style="flex:1; padding:12px; font-size:0.9rem; text-align:center;">
                  ${icons.phone}
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Priority Inquiry Form -->
          <div class="col-7" data-aos="fade-left">
            <div class="glass-card" data-tilt style="border:1px solid var(--border-medium); padding:2.5rem;">
              <span class="section-tag">Direct Inquiry Flow</span>
              <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin:0.5rem 0 0.8rem;">Request Comprehensive Information</h3>
              <p style="color:var(--text-muted); font-size:0.92rem; margin-bottom:1.8rem;">
                Fill out the form below to receive official project brochures, RERA legal dossier, and rate sheets directly on WhatsApp.
              </p>

              <form onsubmit="event.preventDefault(); alert('Thank you! Your information request has been received. Our senior property advisor will call you within 15 minutes.'); this.reset();">
                <div class="bento-grid" style="gap:1rem; margin-bottom:1.25rem;">
                  <div class="col-6">
                    <div class="form-input-group" style="margin-bottom:0;">
                      <label class="form-label">Full Name *</label>
                      <input type="text" class="form-control" placeholder="Your full name" required />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-input-group" style="margin-bottom:0;">
                      <label class="form-label">Phone Number (WhatsApp) *</label>
                      <input type="tel" class="form-control" placeholder="+91 98765 43210" required />
                    </div>
                  </div>
                </div>

                <div class="form-input-group">
                  <label class="form-label">Email Address *</label>
                  <input type="email" class="form-control" placeholder="your.email@example.com" required />
                </div>

                <div class="form-input-group">
                  <label class="form-label">Development Project of Interest</label>
                  <select class="form-control" style="background:#111520;">
                    <option>KHB Surya City Phase-4 (Bannerghatta Road Jigani - ₹46.80L+)</option>
                    <option>Nandi Urban City (Devanahalli Airport Corridor - 12 Acres)</option>
                    <option>AP Township (Near Electronic City - 30 Acres BMRDA)</option>
                    <option>Habulus Tranquil (Neo Town 2 & 3 BHK - ₹90L+)</option>
                    <option>Institutional Real Estate Advisory & Liaison</option>
                  </select>
                </div>

                <div class="form-input-group">
                  <label class="form-label">Specific Questions or Plot Size Requirements</label>
                  <textarea class="form-control" rows="3" placeholder="Tell us your investment timeline, preferred plot dimensions (30x40, 40x60) or questions..."></textarea>
                </div>

                <button type="submit" class="btn-primary" style="width:100%; padding:14px; font-size:1rem; border-radius:12px;">
                  Submit Priority Inquiry &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Map & Location Guidance -->
    <section class="section" style="background:var(--bg-main);">
      <div class="section-container" data-aos="fade-up">
        <div class="section-header">
          <span class="section-tag">Convenient Accessibility</span>
          <h2 class="section-title">Visit Our Jayanagar Corporate Office</h2>
          <p class="section-subtitle">Located conveniently in Lakshmi Enclave, Jayanagar 9th Block with dedicated visitor parking and executive briefing lounge.</p>
        </div>

        <div class="glass-card" style="padding:0; overflow:hidden; border:1px solid var(--border-medium);">
          <div style="background:#161922; padding:1.8rem 2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="color:var(--orange);">${icons.mapPin}</span>
              <div>
                <div style="font-size:1.15rem; font-weight:700; color:#fff;">Lakshmi Enclave, East End Main Road</div>
                <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">Jayanagar 9th Block, Bangalore – 560069 | Near Ragigudda Temple & Silk Board Junction</div>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Jayanagar+9th+Block+Bangalore" target="_blank" class="btn-secondary" style="font-size:0.85rem;">
              Open in Google Maps &rarr;
            </a>
          </div>
          <div style="height:350px; background:#0b0d14; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80" alt="Bangalore City Map Overview" style="width:100%; height:100%; object-fit:cover; opacity:0.35;" />
            <div style="position:absolute; background:rgba(8,10,15,0.88); backdrop-filter:blur(12px); padding:1.8rem 2.4rem; border-radius:18px; border:1px solid var(--orange-border); text-align:center;">
              <div style="color:var(--orange-bright); margin-bottom:0.6rem; display:flex; justify-content:center;">${icons.building}</div>
              <div style="font-size:1.2rem; font-weight:800; color:#fff;">ASPIRE HOUSING CORPORATE HQ</div>
              <div style="font-size:0.85rem; color:var(--orange-bright); margin-top:4px; font-weight:600;">Lakshmi Enclave, Jayanagar 9th Block, Bangalore</div>
              <div style="font-size:0.82rem; color:var(--text-dim); margin-top:8px;">Direct Line: +91 70905 32343</div>
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
fs.writeFileSync(path.join(__dirname, 'services.html'), servicesHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'careers.html'), careersHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'contact.html'), contactHtml, 'utf8');

console.log('Part 3 updated with vector SVG icons.');
