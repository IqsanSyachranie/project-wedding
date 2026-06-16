# Design System Knowledge — Wedding Website (Batak Simalungun Aesthetic)

> Referensi: https://github.com/christ-saragih/web-wedding-abang  
> Stack: Astro + React + Tailwind CSS v4 + shadcn/ui + Radix UI

---

## 1. Identitas Visual & Estetika

Desain website ini mengusung estetika **Luxury Ethnic / Refined Heritage** — perpaduan antara keanggunan pernikahan adat Batak Simalungun dengan sentuhan modern yang elegan. Setiap elemen harus memancarkan kehormatan, kemewahan, dan kehangatan budaya.

**Tone & Feel:**
- Mewah tapi hangat, bukan dingin
- Etnik tapi tidak kuno
- Romantis tapi tidak berlebihan
- Formal tapi tetap personal

---

## 2. Color System (Palet Warna)

### Token Utama (CSS Custom Properties)

```css
--color-primary: #a63a3a;  /* Merah bata — warna dominan, elemen aksi */
--color-dark:    #1c1c1c;  /* Hitam kayu — background gelap, teks utama */
--color-gold:    #d4af37;  /* Kuning emas — aksen premium, ornamen */
--color-cream:   #f7edd9;  /* Putih krem — background terang, teks di atas gelap */
--color-gray:    #6b7280;  /* Abu — teks sekunder, keterangan */
```

### Aturan Penggunaan Warna

| Elemen | Warna |
|--------|-------|
| Background section terang | `--color-cream` (#f7edd9) |
| Background section gelap | `--color-dark` (#1c1c1c) |
| Heading utama di bg gelap | `--color-gold` (#d4af37) |
| Heading utama di bg terang | `--color-primary` (#a63a3a) |
| Teks body di bg gelap | `cream/80` atau `cream/90` (dengan opacity) |
| Tombol CTA utama | `--color-primary` dengan gradient |
| Garis dekoratif / ornamen | `--color-gold` |
| Border emas | `border-gold/30` hingga solid `border-gold` |
| Teks sekunder | `text-gray-600` atau `text-dark/70` |

### Alterasi Warna (Opacity Utilities)
Gunakan opacity Tailwind untuk variasi halus:
- `text-cream/70`, `text-cream/80`, `text-cream/90`
- `bg-white/5`, `bg-white/10`
- `bg-gold/10`, `bg-gold/20`, `bg-gold/30`
- `from-primary to-primary/80` (gradient tombol)

---

## 3. Typography

### Font Families

```css
--font-heading: "Libre Baskerville", serif;  /* Judul, nama, kutipan */
--font-body:    "Rubik", sans-serif;         /* Body, UI, keterangan */
```

Import Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

### Skala Tipografi

| Konteks | Class |
|--------|-------|
| Hero nama pasangan | `text-4xl md:text-6xl lg:text-7xl font-bold font-heading italic` |
| Section heading | `text-4xl md:text-5xl font-bold font-heading` |
| Sub-heading kartu | `text-2xl md:text-3xl font-semibold font-heading` |
| Name badge / label | `text-xl md:text-2xl font-heading` |
| Body teks | `text-base leading-relaxed` |
| Keterangan kecil | `text-sm tracking-wider uppercase` |
| Kutipan ayat/quote | `text-base md:text-lg leading-relaxed italic font-light` |
| Sumber kutipan | `font-heading text-lg md:text-xl not-italic` |

### Pola Khusus Typography
- Nama pasangan di Hero: selalu **italic, bold, font-heading**
- Simbol `&` antar nama: `text-gold inline-block animate-pulse-slow`
- Tracking lebar untuk label: `tracking-[0.3em]` atau `tracking-wider`
- Teks uppercase untuk label kecil: `uppercase text-xs tracking-[0.1em]`

---

## 4. Layout & Spacing

### Container
```html
<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">  <!-- Hero -->
<div class="max-w-6xl mx-auto px-4">                   <!-- Sections umum -->
<div class="max-w-4xl mx-auto">                         <!-- Section sempit (form, gift) -->
<div class="max-w-3xl mx-auto">                         <!-- Kutipan/ayat -->
```

### Section Padding
```
py-16 md:py-24   <!-- Hero & section utama -->
py-20 px-4       <!-- Section standar -->
```

### Alternasi Background Section
Sections wajib bergantian antara gelap dan terang untuk ritme visual:
1. **Hero** → `bg-cream` (gradient cream)
2. **Couple** → `bg-dark`
3. **Our Story** → `bg-cream`
4. **Adat** → `bg-dark` + pattern overlay
5. **Event** → `bg-cream`
6. **Gallery** → `bg-dark`
7. **Gift / Wishes / RSVP** → `bg-cream`
8. **Footer** → `bg-dark`

---

## 5. Ornamen & Dekorasi

### Divider Ornamen (wajib di setiap awal section)
```html
<!-- Divider dengan diamond center -->
<div class="flex items-center justify-center gap-3 mb-10 md:mb-14">
  <span class="h-[2px] w-16 md:w-24 bg-gradient-to-r from-primary to-gold rounded-full"></span>
  <span class="w-2 h-2 rotate-45 bg-gold"></span>
  <span class="h-[2px] w-16 md:w-24 bg-gradient-to-l from-primary to-gold rounded-full"></span>
</div>

<!-- Divider sederhana untuk sub-section -->
<div class="flex items-center gap-4 mb-4">
  <div class="h-[2px] w-8 md:w-12 bg-gradient-to-r from-transparent via-gold to-gold"></div>
  <p class="font-heading text-xs tracking-[0.1em] uppercase"> ... </p>
  <div class="h-[2px] w-8 md:w-12 bg-gradient-to-l from-transparent via-gold to-gold"></div>
</div>

<!-- Underline section title -->
<div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
```

### Pattern Background (Adat/Gelap Section)
```html
<div class="absolute inset-0 pattern-hiou opacity-10"></div>
<!-- atau -->
<div class="absolute inset-0 opacity-[0.03] pointer-events-none 
  bg-[url('/images/patterns/01.svg')] bg-[length:240px] md:bg-[length:300px] bg-repeat">
</div>
```

### Wave Divider Antar Section
```html
<div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
  <svg class="relative block w-full h-[80px] md:h-[120px]" 
       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill="currentColor" fill-opacity="0.15" class="text-gold"
      d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,202.7..."/>
    <path fill="currentColor" fill-opacity="0.3" class="text-primary" .../>
    <path fill="currentColor" class="text-cream" fill-opacity="1" .../>
  </svg>
</div>
```

### Glowing Ring Effect (untuk gambar/foto)
```html
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
     w-[110%] h-[110%] rounded-full 
     bg-gradient-to-r from-gold/20 via-primary/20 to-gold/20 
     blur-2xl animate-pulse-slow">
</div>
```

### Radial Glow (Hero background effect)
```css
.hero::after {
  content: "";
  position: absolute;
  inset: -10% auto auto -10%;
  width: min(60vw, 800px);
  height: min(60vw, 800px);
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(212,175,55,0.18), rgba(139,69,19,0.08) 40%, rgba(212,175,55,0) 70%);
  filter: blur(50px);
  pointer-events: none;
  z-index: 0;
}
```

---

## 6. Komponen UI

### Section Title (Pola Standar)
```html
<div class="text-center mb-16 fade-in">
  <h2 class="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
    Judul Section
  </h2>
  <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
  <p class="text-gray-600 text-lg max-w-2xl mx-auto">
    Sub-keterangan section
  </p>
</div>
```
*(Ganti `text-primary` dengan `text-gold` jika background gelap)*

### Tombol CTA Utama
```html
<a href="#target"
   class="w-fit text-sm md:text-base group 
          bg-gradient-to-r from-primary to-primary/90 
          text-white py-3 px-10 rounded-full font-semibold 
          shadow-xl hover:shadow-2xl hover:-translate-y-1 
          transition-all duration-300 
          flex items-center gap-2 
          border-2 border-transparent hover:border-white/30">
  <Icon class="w-5 h-5 animate-bounce" />
  <span>Label Tombol</span>
</a>
```

### Tombol RSVP/Navbar
```html
<a href="#rsvp"
   class="bg-primary text-cream px-6 py-2 rounded-full 
          font-semibold hover:bg-primary/90 
          transition-smooth hover:scale-105">
  RSVP
</a>
```

### Kartu dengan Glow
```html
<div class="relative">
  <!-- Background glow -->
  <div class="absolute inset-0 bg-gradient-to-br from-gold/5 via-primary/5 to-gold/5 
              rounded-2xl blur-xl"></div>
  <!-- Content -->
  <div class="relative px-6 md:px-12 py-8 md:py-10">
    <!-- isi konten -->
  </div>
</div>
```

### Quote Box (Ayat/Kutipan)
```html
<div class="bg-white/5 border border-gold/30 rounded-lg p-6">
  <p class="text-gold italic text-lg mb-3">"Kutipan di sini"</p>
  <p class="text-cream/60 text-sm leading-relaxed">Keterangan kutipan</p>
</div>
```

### Countdown Timer Box
```html
<div class="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl shadow-2xl p-4 md:p-8">
  <p class="text-center text-xl mb-6">Label teks</p>
  <div class="grid grid-cols-4 gap-4 text-center">
    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <div id="days" class="text-2xl md:text-4xl font-bold mb-2">00</div>
      <div class="text-sm uppercase tracking-wider">Hari</div>
    </div>
    <!-- ulangi untuk jam, menit, detik -->
  </div>
</div>
```

### Badge Floating
```html
<div class="absolute -bottom-8 left-1/2 -translate-x-1/2 
     bg-gradient-to-r from-primary via-gold to-primary 
     text-white px-6 py-2 rounded-full shadow-xl 
     font-heading text-sm tracking-wider 
     whitespace-nowrap flex items-center space-x-1">
  <Icon class="w-4 h-4 text-yellow-500" />
  <span>Teks Badge</span>
  <Icon class="w-4 h-4 text-yellow-500" />
</div>
```

### Social Media Icon Button
```html
<a href="..." class="inline-flex items-center justify-center w-9 h-9 
                     rounded-full bg-cream/90 shadow 
                     hover:shadow-md hover:-translate-y-0.5 transition">
  <InstagramLogoIcon class="w-5 h-5 text-primary" />
</a>

<!-- Versi footer (dark bg) -->
<a href="..." class="w-10 h-10 bg-white/10 rounded-full 
                     flex items-center justify-center 
                     hover:bg-gold hover:text-dark transition-smooth">
  <Icon size={20} />
</a>
```

### Foto Profil Bulat dengan Border Emas
```html
<div class="relative p-3 rounded-full 
     bg-gradient-to-br from-white/80 via-white/70 to-gold/30 
     shadow-2xl backdrop-blur-sm">
  <div class="relative p-2 rounded-full bg-white/60 backdrop-blur-sm">
    <div class="rounded-full overflow-hidden border-[6px] border-gold shadow-2xl">
      <img src="/foto.jpg" alt="nama"
           class="w-[240px] h-[240px] md:w-[380px] md:h-[380px] 
                  object-cover rounded-full animate-float">
    </div>
  </div>
</div>
```

### Heart-Shaped Image (SVG clipPath)
```html
<svg viewBox="0 0 500 450" class="w-[300px] md:w-[360px] lg:w-[420px] h-auto drop-shadow-2xl">
  <defs>
    <clipPath id="heartClip" clipPathUnits="userSpaceOnUse">
      <path d="M250 450 L220 420 C120 320 0 260 0 150 C0 80 60 20 130 20 
               C170 20 210 40 250 80 C290 40 330 20 370 20 C440 20 500 80 500 150 
               C500 260 380 320 280 420 L250 450 Z"/>
    </clipPath>
    <linearGradient id="heartStroke" x1="0" x2="1">
      <stop offset="0%" stop-color="#a63a3a"/>
      <stop offset="100%" stop-color="#d4af37"/>
    </linearGradient>
  </defs>
  <image href="/foto.jpg" x="0" y="0" width="500" height="450"
         preserveAspectRatio="xMidYMid slice" clip-path="url(#heartClip)"/>
  <path d="M250 450 L220 420 C120 320 0 260 0 150 C0 80 60 20 130 20 
           C170 20 210 40 250 80 C290 40 330 20 370 20 C440 20 500 80 500 150 
           C500 260 380 320 280 420 L250 450 Z"
        fill="none" stroke="url(#heartStroke)" stroke-width="12"/>
</svg>
```

### Masonry Gallery Grid
```css
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}
@media (min-width: 768px)  { .masonry-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .masonry-grid { grid-template-columns: repeat(3, 1fr); } }

.masonry-column { display: flex; gap: 1.5rem; flex-direction: column; }
.masonry-tall   { height: 480px; }   /* @mobile: 380px */
.masonry-medium { height: 320px; }   /* @mobile: 280px */
.masonry-short  { height: 240px; }   /* @mobile: 220px */
```

---

## 7. Animasi & Transisi

### CSS Animations (definisikan di global.css atau `<style>`)

```css
/* Scroll fade-in (trigger via IntersectionObserver) */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in.show { opacity: 1; transform: translateY(0); }

/* Versi Tailwind (untuk data-reveal pattern) */
/* Initial: opacity-0 translate-y-4 */
/* Triggered: opacity-100 translate-y-0 */

/* Float (foto hero) */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }

/* Slow pulse (elemen & di nama, glowing ring) */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%       { opacity: 0.8; transform: scale(1.02); }
}
.animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }

/* Slow bounce (icon dekoratif floating) */
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

/* Glow pulse (radial bg effect) */
@keyframes pulse-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.8; transform: scale(1.05); }
}

/* Floating particles (blob shapes) */
@keyframes float-particle {
  0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
  25%       { transform: translate(20px, -30px) rotate(90deg); opacity: 0.4; }
  50%       { transform: translate(-10px, -50px) rotate(180deg); opacity: 0.3; }
  75%       { transform: translate(-30px, -20px) rotate(270deg); opacity: 0.5; }
}

/* FadeInUp (untuk elemen dengan animation-delay) */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-in-animated {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}
```

### Transition Utilities
```css
.transition-smooth { transition: all 0.3s ease-in-out; }
```
Atau ekuivalen Tailwind: `transition-all duration-300 ease-in-out`

### IntersectionObserver Pattern (Scroll Reveal)
```javascript
// Pattern 1: via class .fade-in → .show
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Pattern 2: via data-reveal (Tailwind remove/add)
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-4');
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer2.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-reveal]').forEach(el => observer2.observe(el));
```

### Staggered Animation (gunakan style animation-delay)
```html
<div class="fade-in" style="animation-delay: 0.2s;">...</div>
<div class="fade-in" style="animation-delay: 0.4s;">...</div>
<div class="fade-in" style="animation-delay: 0.6s;">...</div>

<!-- Atau Tailwind delay -->
<div class="opacity-0 translate-y-4 transition-all duration-700 ease-out" data-reveal>...</div>
<div class="opacity-0 translate-y-4 transition-all duration-700 ease-out delay-150" data-reveal>...</div>
<div class="opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200" data-reveal>...</div>
```

---

## 8. Navbar

```
Position: fixed top-0 z-50
Background: bg-dark (solid setelah scroll) / transparent (awal)
Transisi: transition-all duration-300
Efek hide: opacity-0 -translate-y-6 pointer-events-none → opacity-100 translate-y-0
Logo: rounded-full bg-gold shadow-lg shadow-gold/50 → gambar/ikon
Nav links: text-cream hover:text-gold transition-smooth
Active link: text-gold
CTA button: bg-primary text-cream px-6 py-2 rounded-full hover:scale-105
Mobile: hamburger → slide-down menu dengan bg-dark/95 backdrop-blur
```

---

## 9. Footer

```
Background: bg-dark text-cream py-16 px-4
Layout: grid md:grid-cols-3 gap-12
Kolom 1: Nama pasangan (font-heading text-2xl text-gold) + tagline
Kolom 2: Quote box dengan border-gold/30 dan bg-white/5
Kolom 3: Kontak + social media icons
Divider: border-t border-cream/20
Credit: text-cream/60 text-sm
Scroll-to-top: w-12 h-12 bg-gold rounded-full hover:scale-110
```

---

## 10. Particles / Blob Dekoratif

```html
<!-- Floating particles di Hero -->
<div class="absolute inset-0 overflow-hidden pointer-events-none">
  <div class="ulos-particle ulos-particle-1"></div>
  <div class="ulos-particle ulos-particle-2"></div>
  <div class="ulos-particle ulos-particle-3"></div>
</div>

<style>
.ulos-particle {
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(212,175,55,0.1), rgba(139,69,19,0.1));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: float-particle 20s ease-in-out infinite;
}
.ulos-particle-1 { top: 10%; right: 15%; animation-delay: 0s; }
.ulos-particle-2 { bottom: 20%; left: 10%; animation-delay: 5s; width: 60px; height: 60px; }
.ulos-particle-3 { top: 60%; right: 5%; animation-delay: 10s; width: 100px; height: 100px; }
</style>
```

---

## 11. Aturan Desain Umum (DOs & DON'Ts)

### ✅ DO
- Selalu gunakan `font-heading` (Libre Baskerville) untuk nama, judul, dan kutipan sakral
- Selalu ada ornamen garis + diamond di awal/akhir setiap section penting
- Gunakan `rounded-full` untuk tombol CTA
- Tambahkan `shadow-xl` atau `shadow-2xl` pada elemen melayang (foto, badge, tombol)
- Pakai `backdrop-blur-sm` pada overlay transparan
- Gunakan gradient dua arah (primary → gold atau gold → primary) untuk elemen premium
- Animasikan foto utama dengan `.animate-float` (naik-turun halus)
- Berikan `will-change-transform` pada elemen animasi berat
- Gunakan `object-cover` untuk semua gambar dalam container fixed-size

### ❌ DON'T
- Jangan gunakan warna selain palet utama tanpa alasan
- Jangan gunakan font Inter, Roboto, atau Arial
- Jangan gunakan border radius tanggung (gunakan `rounded-lg`, `rounded-2xl`, atau `rounded-full`)
- Jangan menempatkan teks putih langsung di atas background cream (gunakan `text-dark`)
- Jangan menggunakan shadow tipis pada elemen utama — pakai `shadow-2xl` atau lebih
- Jangan gunakan warna solid untuk background gradient section — gunakan `bg-gradient-to-br`
- Jangan lupa `pointer-events-none` pada elemen dekoratif overlay

---

## 12. Pola Halaman Lengkap (Page Structure)

```
[Navbar — fixed, bg-dark]
[Hero — min-h-screen, bg-gradient-to-br from-cream via-cream/95 to-gold/10]
  └── Wave divider (absolute bottom)
[Couple Section — bg-dark]
[Our Story — bg-cream]
[Adat Section — bg-dark + pattern overlay]
[Event Details — bg-cream]
[Gallery — bg-dark]
[Gift Section — bg-cream]
[Guest Wishes — bg-cream]
[RSVP — bg-cream]
[Footer — bg-dark]
```

Setiap section selalu memiliki:
1. Ornamen divider di atas heading
2. Section title (font-heading + gold underline)
3. Konten utama (grid / card / timeline)
4. `.fade-in` atau `data-reveal` pada elemen yang scroll-animate

---

## 13. Dependencies & Tech Stack

```json
{
  "framework": "Astro 5 + React",
  "styling": "Tailwind CSS v4",
  "ui-components": "shadcn/ui + Radix UI",
  "icons": ["lucide-react", "@phosphor-icons/react"],
  "carousel": "embla-carousel-react + embla-carousel-autoplay",
  "map": "leaflet + react-leaflet",
  "notifications": "sonner",
  "animations": "tw-animate-css",
  "database": "@supabase/supabase-js",
  "utils": ["clsx", "tailwind-merge", "class-variance-authority"]
}
```

---

## 14. Responsive Breakpoints

Ikuti pola Tailwind standar dengan fokus pada:
- `md:` = 768px (tablet, perubahan layout utama)
- `lg:` = 1024px (desktop, tipografi lebih besar)

Pola umum:
```
text-4xl md:text-5xl           → heading section
text-3xl md:text-4xl           → sub-heading
w-[240px] md:w-[380px]         → foto bulat
py-16 md:py-24                 → padding section
px-4 md:px-6 lg:px-8           → horizontal padding
grid-cols-1 md:grid-cols-2/3   → grid layout
hidden md:block / md:hidden     → show/hide per breakpoint
```

---

*Knowledge ini digunakan sebagai panduan untuk LLM dalam menghasilkan frontend yang konsisten dengan estetika wedding website adat Batak Simalungun — mewah, etnik, romantis, dan modern.*
