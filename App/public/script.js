// Theme switching
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
function applyTheme(theme){
  if(theme === 'dark') document.body.classList.add('dark-mode'); else document.body.classList.remove('dark-mode');
}
const stored = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(stored);
themeToggle.addEventListener('click', ()=>{
  const now = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
  applyTheme(now);
  localStorage.setItem('theme', now);
});

// Smooth scroll for internal nav (header links already use anchors)
document.querySelectorAll('.nav-links a, .footer-links a, .btn[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(!href || !href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Project filters
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(f=>f.addEventListener('click', ()=>{
  filters.forEach(x=>x.classList.remove('active'));
  f.classList.add('active');
  const key = f.dataset.filter;
  cards.forEach(c=>{
    if(key === 'all' || c.dataset.cat === key) c.style.display = '';
    else c.style.display = 'none';
  });
}));

// Testimonials slider
const slides = document.querySelectorAll('.slide');
const dotsWrap = document.querySelector('.dots');
let current = 0;
function buildDots(){
  slides.forEach((s,i)=>{
    const b = document.createElement('button');
    b.addEventListener('click', ()=>goTo(i));
    if(i===0) b.classList.add('active');
    dotsWrap.appendChild(b);
  });
}
function goTo(i){
  slides[current].classList.remove('active');
  dotsWrap.children[current].classList.remove('active');
  current = i;
  slides[current].classList.add('active');
  dotsWrap.children[current].classList.add('active');
}
function nextSlide(){
  goTo((current+1)%slides.length);
}
if(slides.length>0){ buildDots(); setInterval(nextSlide,4000); }

// Simple contact CTA behavior
document.getElementById('contactBtn').addEventListener('click', ()=>{
  const email = document.getElementById('email').value;
  if(!email) return alert('Please enter your email');
  alert('Thanks — I will contact you at ' + email);
});

// Hire button scroll to contact
document.getElementById('hireBtn').addEventListener('click', ()=>{
  document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
});
