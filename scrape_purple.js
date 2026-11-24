const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 15000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) loc = new URL(loc, url).href;
        return fetchUrl(loc).then(resolve).catch(reject);
      }
      let chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, data: Buffer.concat(chunks).toString('utf-8') }));
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.on('error', reject);
  });
}

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
      return resolve(destPath); // already downloaded
    }
    const file = fs.createWriteStream(destPath);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 20000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return resolve(null);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(destPath));
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      resolve(null);
    });
  });
}

async function scrapeAll() {
  const purpleDir = path.join(__dirname, 'assets', 'images', 'purple');
  if (!fs.existsSync(purpleDir)) {
    fs.mkdirSync(purpleDir, { recursive: true });
  }

  const pages = [
    { name: 'home', url: 'https://thepurplepalms.com/' },
    { name: 'projects', url: 'https://thepurplepalms.com/projects/' },
    { name: 'khb-suryacity', url: 'https://thepurplepalms.com/khb-suryacity-phase-4/' },
    { name: 'nandi-urban', url: 'https://thepurplepalms.com/nandi-urban-city-devanahalli/' },
    { name: 'ap-township', url: 'https://thepurplepalms.com/ap-township/' },
    { name: 'habulus-tranquil', url: 'https://thepurplepalms.com/habulus-tranquil/' },
    { name: 'about', url: 'https://thepurplepalms.com/about-us/' }
  ];

  const extractedData = {};
  const allImagesToDownload = new Set();

  for (const p of pages) {
    console.log('Fetching', p.name, p.url);
    try {
      const res = await fetchUrl(p.url);
      const text = res.data.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                           .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                           .replace(/<[^>]+>/g, ' ')
                           .replace(/\s+/g, ' ');
      extractedData[p.name] = { url: p.url, rawSnippet: text.slice(0, 3000) };

      // Find all image URLs
      const imgRegex = /https:\/\/thepurplepalms\.com\/wp-content\/uploads\/[^"'\s<>]+\.(?:jpg|jpeg|png|webp)/gi;
      let m;
      while ((m = imgRegex.exec(res.data)) !== null) {
        const u = m[0];
        // skip icons / thumbnails if base exists
        if (!u.includes('site-icon') && !u.includes('-150x150') && !u.includes('-32x32')) {
          allImagesToDownload.add(u);
        }
      }
    } catch (e) {
      console.log('Error fetching', p.name, e.message);
    }
  }

  console.log('Total unique images found:', allImagesToDownload.size);
  const downloadedFiles = [];
  for (const imgUrl of allImagesToDownload) {
    const filename = path.basename(new URL(imgUrl).pathname);
    const dest = path.join(purpleDir, filename);
    const res = await downloadImage(imgUrl, dest);
    if (res) {
      downloadedFiles.push(filename);
      console.log('Downloaded:', filename);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'purple_scraped_data.json'), JSON.stringify({ extractedData, downloadedFiles }, null, 2));
  console.log('Saved purple_scraped_data.json with', downloadedFiles.length, 'images.');
}

scrapeAll().catch(console.error);
