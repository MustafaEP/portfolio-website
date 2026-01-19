# Recommended Folder Structure

```
portfolio/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── LoadingScreen/       # Initial loading screen
│   │   │   ├── LoadingScreen.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Navbar/              # Navigation bar (main component)
│   │   │   ├── Navbar.tsx       # Main navbar component
│   │   │   ├── DesktopNav.tsx   # Desktop navigation links
│   │   │   ├── MobileMenu.tsx   # Mobile menu drawer
│   │   │   ├── LanguageSwitcher.tsx  # TR/EN toggle
│   │   │   ├── ThemeToggle.tsx  # Dark mode toggle
│   │   │   ├── NavLink.tsx      # Reusable nav link
│   │   │   └── index.ts         # Barrel export
│   │   │
│   │   ├── Hero/                # Hero/landing section
│   │   │   ├── Hero.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Footer/              # Site footer
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── sections/            # Page sections
│   │       ├── About/
│   │       │   ├── About.tsx
│   │       │   └── index.ts
│   │       │
│   │       ├── Experience/
│   │       │   ├── Experience.tsx        # Main section
│   │       │   ├── ExperienceCard.tsx    # Individual card
│   │       │   └── index.ts
│   │       │
│   │       ├── Projects/
│   │       │   ├── Projects.tsx          # Main section
│   │       │   ├── ActiveProjectCard.tsx # Active projects
│   │       │   ├── FeaturedProjectCard.tsx # Featured projects
│   │       │   ├── OtherProjectCard.tsx  # Other projects
│   │       │   └── index.ts
│   │       │
│   │       ├── Skills/
│   │       │   ├── Skills.tsx
│   │       │   └── index.ts
│   │       │
│   │       ├── Certifications/
│   │       │   ├── Certifications.tsx    # Main section
│   │       │   ├── CourseList.tsx        # Expandable course list
│   │       │   └── index.ts
│   │       │
│   │       └── Contact/
│   │           ├── Contact.tsx
│   │           └── index.ts
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useTheme.ts          # Dark mode management
│   │   ├── useLanguage.ts       # Language selection
│   │   ├── useScroll.ts         # Scroll position tracking
│   │   ├── useIntersectionObserver.ts  # Fade-in animations
│   │   ├── useMobileMenu.ts     # Mobile menu state
│   │   ├── useLoading.ts        # Loading screen state
│   │   └── index.ts             # Barrel export
│   │
│   ├── utils/                   # Utility functions
│   │   └── storage.ts           # LocalStorage helpers
│   │
│   ├── types/                   # TypeScript type definitions
│   │   └── index.ts             # Shared types (Lang, NavigationItem, etc.)
│   │
│   ├── App.tsx                  # Main app component (refactored from 841 to ~65 lines)
│   ├── main.tsx                 # App entry point
│   ├── i18n.ts                  # Translations (updated to import Lang from types)
│   └── index.css                # Global styles
│
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── REFACTOR_SUMMARY.md          # This documentation
```

## Component Organization Rationale

### Why This Structure?

1. **components/** - Main UI building blocks
   - Each component in its own folder for scalability
   - `index.ts` barrel exports for clean imports
   - Related components grouped (e.g., Navbar sub-components)

2. **components/sections/** - Page sections
   - Separated from reusable components
   - Each section is self-contained
   - Sub-components live alongside their parent (e.g., ExperienceCard with Experience)

3. **hooks/** - Custom React hooks
   - Single responsibility per hook
   - Reusable across components
   - Easy to test in isolation

4. **utils/** - Pure utility functions
   - No React dependencies
   - Can be used anywhere
   - Easy to unit test

5. **types/** - TypeScript definitions
   - Shared types prevent duplication
   - Single source of truth
   - Easy to find and update

## Example Component Split

### Before (in App.tsx):
```typescript
// 841 lines of mixed components, hooks, and logic all together
function App() {
  // ... 100+ lines of hooks and state
  // ... 200+ lines of navbar JSX
  // ... 150+ lines of hero JSX
  // ... etc.
}
```

### After:
```typescript
// App.tsx - ~65 lines, clean and readable
function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { lang, handleChangeLang } = useLanguage();
  // ... other hooks
  
  return (
    <div>
      <Navbar {...navbarProps} />
      <Hero translations={t.hero} lang={lang} />
      <About translations={t.about} />
      {/* ... other sections */}
    </div>
  );
}
```

## Import Examples

### Before:
```typescript
// Everything in one file, no imports needed
```

### After:
```typescript
// Clean, organized imports
import { useTheme, useLanguage } from "./hooks";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/sections/About";
```

## Benefits Summary

✅ **Single Responsibility** - Each file has one clear purpose  
✅ **Reusability** - Components and hooks can be reused  
✅ **Maintainability** - Easy to find and modify code  
✅ **Testability** - Each piece can be tested independently  
✅ **Scalability** - Easy to add new features  
✅ **Type Safety** - Shared types prevent errors  
✅ **Developer Experience** - Better IDE navigation and autocomplete  
