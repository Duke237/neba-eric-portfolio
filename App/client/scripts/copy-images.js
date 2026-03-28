const fs = require('fs');
const path = require('path');

const appImageDir = path.join(__dirname, '..', '..', 'image');
const publicDir = path.join(__dirname, '..', 'public');

const copyPlan = {
  'logo.png': ['logo.png'],
  'footer.png': ['footer.png', 'logo.png'],
  'hero.png': ['hero.png'],
  'about.png': ['about.png'],
  'aboutt.png': ['aboutt.png', 'about.png'],
  'avatar1.jpg': ['avatar1.jpg', 'about.png', 'hero.png'],
  'avatar2.jpg': ['avatar2.jpg', 'hero.png', 'about.png'],
  'avatar3.jpg': ['avatar3.jpg', 'about.png', 'hero.png'],
  'thumb1.jpg': ['thumb1.jpg', 'hero.png', 'aboutt.png'],
  'thumb2.jpg': ['thumb2.jpg', 'aboutt.png', 'about.png'],
  'thumb3.jpg': ['thumb3.jpg', 'about.png', 'hero.png'],
  'thumb4.jpg': ['thumb4.jpg', 'footer.png', 'aboutt.png'],
  'placeholder-profile.jpg': ['placeholder-profile.jpg', 'hero.png', 'about.png'],
  'placeholder-avatar.jpg': ['placeholder-avatar.jpg', 'about.png', 'hero.png'],
};

if(!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, {recursive:true});

console.log('Copying images from', appImageDir, 'to', publicDir);

Object.entries(copyPlan).forEach(([destName, candidates]) => {
  const sourceName = candidates.find((candidate) => fs.existsSync(path.join(appImageDir, candidate)));
  const destPath = path.join(publicDir, destName);

  if (!sourceName) {
    console.warn('missing:', destName, '(no matching source found)');
    return;
  }

  try {
    const sourcePath = path.join(appImageDir, sourceName);
    fs.copyFileSync(sourcePath, destPath);
    console.log('copied', sourceName, '->', destName);
  } catch (error) {
    console.warn('copy failed for', destName, '-', error.message);
  }
});

console.log('Done.');
