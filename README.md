# Mustafa Erhan Portakal — Portfolio

Kişisel portfolio web sitesi. Backend & Full-Stack geliştirici profili, projeler, deneyim ve iletişim bilgilerini sunar.

## Teknolojiler

- **React 19** + **TypeScript**
- **Vite** — derleme ve geliştirme
- **Tailwind CSS** — stiller
- **i18n** — Türkçe / İngilizce dil desteği

## Özellikler

- Hero, Hakkımda, Deneyim, Projeler, Beceriler, Sertifikalar, Technical Footprint (GitHub), İletişim bölümleri
- Karanlık / aydınlık tema
- Dil değiştirici (TR / EN)
- Responsive tasarım ve mobil menü
- Yükleme ekranı ve scroll animasyonları
- SEO meta etiketleri ve Open Graph

## Geliştirme

```bash
npm install
npm run dev
```

Geliştirme sunucusu varsayılan olarak `http://localhost:5173` adresinde açılır.

## Build

```bash
npm run build
npm run preview   # production önizleme
```

## Yayınlama

Site, GitHub’a commit ve push yapıldıktan sonra otomatik olarak güncellenir (CI/CD).

## Proje Yapısı

- `src/components/` — Navbar, Hero, Footer, LoadingScreen
- `src/components/sections/` — About, Experience, Projects, Skills, Certifications, TechnicalFootprint, Contact
- `src/hooks/` — useTheme, useLanguage, useScroll, useLoading, useMobileMenu, useIntersectionObserver
- `src/i18n.ts` — çeviri metinleri
- `public/` — favicon, CV PDF, manifest, robots.txt, sitemap

---

© Mustafa Erhan Portakal — [mustafaerhanportakal.com](https://mustafaerhanportakal.com)
