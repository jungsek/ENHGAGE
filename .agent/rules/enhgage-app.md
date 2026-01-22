# AGENTS.md - ENHGAGE APP AI Guide

## 🤖 Context for AI Agents
This document serves as the **source of truth** for any AI agent working on the **Enhgage App**. Follow these guidelines strictly to maintain consistency, code quality, and the specific "premium gamified" aesthetic of the application.

---

## 📖 Brand Guidelines Reference (MANDATORY)

**CRITICAL**: Before creating any new features, UI components, illustrations, or copy, **you MUST consult** the brand documentation located in:

```
docs/brand/
```

### Brand Documentation Index

| Document | When to Reference |
|----------|-------------------|
| `ENHGAGE Brand Identity.md` | Logo usage, core colors (Deep Teal `#008080`, Light Teal `#66B2B2`), typography rules, icon guidelines, and brand family |
| `ENHGAGE Illustration Guide.md` | Character design, shape language (rounded rectangles, circles, rounded triangles), illustration colors, mascot guidelines |
| `ENHGAGE Writing Guide.md` | Voice & tone (Expressive, Playful, Embracing, Worldly), in-app copy, error messages, success messages, microcopy |
| `ENHGAGE Marketing Guide.md` | Taglines, CTAs, promotional messaging, social media tone |
| `ENHGAGE Resources.md` | Color specifications, approved emoji list, typography specs |

### Mandatory Reference Checklist

Before implementing, ask yourself:

- [ ] **Creating UI copy or notifications?** → Read `ENHGAGE Writing Guide.md` for voice/tone
- [ ] **Adding colors?** → Check `ENHGAGE Brand Identity.md` for the official palette
- [ ] **Designing illustrations or characters?** → Follow `ENHGAGE Illustration Guide.md`
- [ ] **Writing success/error messages?** → Use the tone guidelines in `ENHGAGE Writing Guide.md`
- [ ] **Using emoji?** → Only use approved emoji from `ENHGAGE Resources.md`

### Quick Reference: Core Brand Values

| Value | Meaning |
|-------|---------|
| **Expressive** | Brief, active voice, direct, excited |
| **Playful** | Friendly, jolly, creative, clever in quick doses |
| **Embracing** | Supportive, gender-neutral, uses contractions, clear |
| **Worldly** | Interested, knowledgeable, universal, multilingual-aware |

---

## 📐 Code Quality Standards (MANDATORY)

**CRITICAL**: Before writing any code, consult `CODE_QUALITY.md` for file size limits and modularity requirements.

### Key Rules:
- ⚠️ **Hard Limit**: No file should exceed **600 lines**
- ✅ **Ideal Range**: Keep files between **150-300 lines**
- 🔧 **One Component Per File**: Don't lump multiple components together
- 🎯 **Extract Logic**: Use custom hooks, utils, and constants
- 📦 **Modular & Reusable**: Create small, focused functions

See `CODE_QUALITY.md` for complete guidelines, examples, and refactoring strategies.

---

## 🛠 Tech Stack
- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: `motion/react` (Framer Motion) & `canvas-confetti`
- **Icons**: Custom SVG icons in `src/assets/icons/` (preferred) or `lucide-react` (fallback only)
- **Assets**: Figma plugin imports (handled via `vite.config.ts` aliases)

### Icon Usage (IMPORTANT)
1. **ALWAYS** check `src/assets/icons/` first for existing SVG icons before using any icon library.
2. **Only use `lucide-react`** as a fallback if the required icon does not exist in the assets folder.
3. Import SVG icons via `src/constants/assets.ts` for consistency.

---

## 📂 Project Structure

The project follows a **feature-based** modular structure. Do not put everything in `App.tsx`.

```text
src/
├── assets/                 # Raw image assets (do not import directly in components)
├── components/
│   ├── common/             # Reusable UI primitives (Button, Card, ProgressBar, Logo)
│   ├── ui/                 # Shadcn/Radix primitives (if generated)
│   └── [Feature]/          # Feature-specific components (e.g., StreakModal)
├── constants/
│   ├── assets.ts           # CENTRALIZED ASSET EXPORTS. Import all images here.
│   └── data.ts             # Static data (interests, referral options, config)
├── screens/                # Full-page screen components (Welcome, Home, etc.)
├── types/
│   ├── assets.d.ts         # Type definitions for assets
│   └── index.ts            # Shared app types (UserProfile, OnboardingStep)
├── App.tsx                 # Main Router & Global State Manager
└── main.tsx                # Entry point
```

---

## 🎨 Design System & UI Rules

**CRITICAL**: This app mimics a **gamified, premium aesthetic** (similar to Duolingo/Headspace).
**DO NOT** create flat, boring, or standard "Bootstrap-looking" UIs.

### 1. Typography
We use **Nunito** for a friendly, rounded feel.
- **Headers**: `font-feather` (Custom class for Nunito ExtraBold/Black).
- **UI Text**: `font-din` (Custom class for Nunito Bold).
- **Body**: Default `font-sans` (Nunito).

### 2. Color Palette
- **Primary (Teal)**: `#00897B` (Brand color).
- **Success (Green)**: `#58cc02` (Duolingo green).
- **Streak (Orange)**: `#ff9600` (Energy/Fire).
- **Backgrounds**: `bg-white` or `bg-gray-50`.
- **Text**: `text-gray-700` (Primary), `text-gray-400` (Muted/Labels).

### 3. UI Patterns (The "Juice")
Every interactive element must feel "tactile".

- **Buttons**:
  - Must have a **3D effect** using `border-b-4`.
  - On active/press: `border-b-0` and `translate-y`.
  - **Shape**: `rounded-2xl` or `rounded-xl`.
  
  ```tsx
  // Example Class Structure
  "rounded-2xl border-2 border-b-4 active:border-b-0 active:translate-y-[4px] transition-all"
  ```

- **Cards**:
  - Use `rounded-2xl` or `rounded-3xl`.
  - Selected state: Thick colored border + light background tint.
  - Unselected state: Gray border + white background.

- **Progress Bars**:
  - Thick, rounded, with a "glossy" highlight strip on top.

### 4. Animations
- Use `<AnimatePresence mode="wait">` for screen transitions.
- Use `motion.div` for entrance animations (fade-in, scale-up).
- Micro-interactions (e.g., heart pulse, confetti) are encouraged.

---

## ✍️ Writing & Copy Guidelines

All in-app text must follow the ENHGAGE voice. Reference `docs/brand/ENHGAGE Writing Guide.md` for full details.

### Quick Rules for UI Copy

| Context | Tone | Example |
|---------|------|---------|
| Success states | Celebrate! Use exclamation points | "Awesome work!" not "You have successfully passed" |
| Error/failure states | Supportive, encouraging | "Not quite correct. Try again!" not "Incorrect." |
| Notifications | Brief, excited, direct | "You're on a 5-day streak! 🔥" |
| Buttons | All caps, no punctuation | `CONTINUE`, `LET'S GO`, `TRY AGAIN` |

### Copy Don'ts
- ❌ Don't be long-winded or passive voice
- ❌ Don't use gendered pronouns (use they/them)
- ❌ Don't be sarcastic, smug, or mean-spirited
- ❌ Don't use slang or references not everyone knows

---

## 🎭 Illustration & Character Rules

Reference `docs/brand/ENHGAGE Illustration Guide.md` for full details.

### Shape Language
- All illustrations use **rounded rectangles**, **circles**, and **rounded triangles**
- **No pointy shapes** – they are off-brand
- Shadows are **pill-shaped**, never ovals

### Character Design
- Keep characters simple (~15 shapes ideal)
- Eyes: round, glasses, almond, linear, or dots (geometric only, no ovals)
- Hands: Keep abstract as circles, max 4 fingers if needed
- Always pose characters – no static, expressionless states

---

## 📝 Development Workflows

### Adding a New Screen
1.  **Create Wrapper**: Create `src/screens/NewScreen.tsx`.
2.  **Define Props**: Accept `nextStep` prop if part of a flow.
3.  **Register Step**: Add step name to `OnboardingStep` type in `src/types/index.ts`.
4.  **Add to App**: Import in `App.tsx` and add conditional render block.

### Adding an Image/Asset
1.  **Place File**: Put the file in `src/assets/`.
2.  **Export Constant**: Add it to the `IMAGES` object in `src/constants/assets.ts`.
    *   *Why?* Centralizes paths and makes refactoring easier.
3.  **Import**: Use `import { IMAGES } from "@/constants/assets"` in your component.

### Modifying Global State
- `App.tsx` holds the single source of truth for `UserProfile`.
- Pass updater functions (`updateProfile`) down to screens.

---

## 🚫 Anti-Patterns (What NOT to do)

### Code Anti-Patterns
- **Do not** create files exceeding 600 lines (see `CODE_QUALITY.md`).
- **Do not** create large components (>300 lines ideal, >600 lines forbidden). Break them down.
- **Do not** write inline styles for everything; use Tailwind.
- **Do not** make "flat" buttons; use the `Button` component or mimic its 3D style.
- **Do not** import images directly like `import logo from '../assets/logo.png'`. Use `src/constants/assets.ts`.
- **Do not** duplicate logic across files; extract to utils or hooks.
- **Do not** use `lucide-react` icons without first checking `src/assets/icons/` for an existing SVG icon.

### Design Anti-Patterns
- **Do not** use colors outside the brand palette without checking `docs/brand/`.
- **Do not** write copy without referencing the Writing Guide.
- **Do not** create pointy shapes in illustrations.
- **Do not** use gray as a base color in illustrations (use light pastels).
- **Do not** use emojis in the UI. Use SVG icons from `src/assets/icons/` instead.
- **Do not** use gradients. Use solid colors from the brand palette.

### Brand Anti-Patterns
- **Do not** change logo colors, proportions, or spacing.
- **Do not** use unapproved emoji (see `docs/brand/ENHGAGE Resources.md`).
- **Do not** use passive voice or long-winded sentences.
- **Do not** be sarcastic, smug, or mean-spirited in any copy.
