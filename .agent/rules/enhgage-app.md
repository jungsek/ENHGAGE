---
trigger: always_on
---

# AGENTS.md - ENHGAGE APP AI Guide

## 🤖 Context for AI Agents
This document serves as the **source of truth** for any AI agent working on the **Enhgage App**. Follow these guidelines strictly to maintain consistency, code quality, and the specific "premium gamified" aesthetic of the application.

---

## 🛠 Tech Stack
- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: `motion/react` (Framer Motion) & `canvas-confetti`
- **Icons**: `lucide-react`
- **Assets**: Figma plugin imports (handled via `vite.config.ts` aliases)

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
- **Do not** write inline styles for everything; use Tailwind.
- **Do not** make "flat" buttons; use the `Button` component or mimic its 3D style.
- **Do not** import images directly like `import logo from '../assets/logo.png'`. Use `src/constants/assets.ts`.
- **Do not** create large components (>200 lines). Break them down.
