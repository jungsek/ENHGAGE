# CODE_QUALITY.md - ENHGAGE Code Quality Standards

## 📏 File Size & Modularity Rules

This document defines **mandatory code quality standards** for the ENHGAGE App. All AI agents and developers must follow these rules to maintain a clean, scalable, and maintainable codebase.

---

## 🚨 Critical Rules

### Rule #1: File Size Limits

**HARD LIMIT**: No single code file should exceed **600 lines**.

**IDEAL TARGET**: Keep files between **150-300 lines**.

#### Why?
- Easier to read, review, and debug
- Encourages proper component decomposition
- Reduces merge conflicts
- Improves code navigation and IDE performance
- Makes testing more granular and effective

#### What Counts as "Lines"?
- Total lines in the file (including imports, comments, and blank lines)
- Use the IDE's line counter or `wc -l filename` to check

---

### Rule #2: Component Decomposition

**If a file is approaching 300 lines, STOP and refactor.**

Break down large components into:
1. **Sub-components** (UI pieces)
2. **Custom hooks** (logic extraction)
3. **Utility functions** (shared helpers)
4. **Constants** (configuration/data)

---

## 🏗️ Modularity Best Practices

### 1. One Component Per File

Each component should live in its own file. Group related components in feature folders.

#### ✅ Good Structure
```
components/
├── learning/
│   ├── LessonCard.tsx          # 150 lines
│   ├── LessonProgress.tsx      # 80 lines
│   ├── LessonQuestion.tsx      # 120 lines
│   ├── LessonHeader.tsx        # 60 lines
│   └── hooks/
│       ├── useLessonState.ts   # 100 lines
│       └── useLessonTimer.ts   # 70 lines
```

#### ❌ Bad Structure
```
components/
└── learning/
    └── LessonScreen.tsx        # 800 lines (EVERYTHING IN ONE FILE!)
```

---

### 2. Extract Custom Hooks

When component logic exceeds **~50 lines**, extract it into a custom hook.

#### ✅ Good Example

**Before (280 lines in one file):**
```tsx
// LessonScreen.tsx - TOO MUCH LOGIC
const LessonScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  
  // 100+ lines of business logic here...
  
  return <div>...</div>
}
```

**After (Component: 120 lines, Hook: 80 lines):**
```tsx
// LessonScreen.tsx - Clean and focused
import { useLessonLogic } from './hooks/useLessonLogic';

const LessonScreen = () => {
  const { 
    currentQuestion, 
    answers, 
    timer, 
    score,
    handleAnswer,
    nextQuestion 
  } = useLessonLogic();
  
  return <div>...</div>
}

// hooks/useLessonLogic.ts - Extracted logic
export const useLessonLogic = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  
  // All business logic here
  
  return { currentQuestion, answers, timer, score, handleAnswer, nextQuestion };
}
```

---

### 3. Create Utility Functions

Reusable logic should live in utility files, not duplicated across components.

#### ✅ Good Example

```tsx
// utils/scoreCalculation.ts
export const calculateLessonScore = (
  correctAnswers: number,
  totalQuestions: number,
  timeBonus: number
): number => {
  const baseScore = (correctAnswers / totalQuestions) * 100;
  return Math.round(baseScore + timeBonus);
};

export const calculateTimeBonus = (timeRemaining: number): number => {
  return timeRemaining > 10 ? 10 : timeRemaining;
};

export const calculateXPGain = (score: number, difficulty: string): number => {
  const multipliers = { easy: 1, medium: 1.5, hard: 2 };
  return Math.round(score * multipliers[difficulty]);
};
```

**Import in components:**
```tsx
import { calculateLessonScore, calculateXPGain } from '@/utils/scoreCalculation';
```

---

### 4. Separate Constants and Configuration

Don't hardcode values in components. Extract them to constant files.

#### ✅ Good Example

```tsx
// constants/lessonConfig.ts
export const LESSON_CONFIG = {
  maxTimePerQuestion: 30,
  pointsPerCorrectAnswer: 10,
  streakMultiplier: 1.5,
  minimumPassScore: 70,
} as const;

export const DIFFICULTY_MULTIPLIERS = {
  easy: 1.0,
  medium: 1.5,
  hard: 2.0,
  expert: 3.0,
} as const;
```

**Use in components:**
```tsx
import { LESSON_CONFIG } from '@/constants/lessonConfig';

const timer = LESSON_CONFIG.maxTimePerQuestion;
```

---

## 📋 Refactoring Checklist

When you're writing or reviewing code, ask:

- [ ] Is this file under 300 lines? (If no, refactor immediately)
- [ ] Is this file under 600 lines? (If no, **MUST** refactor)
- [ ] Can I extract any custom hooks?
- [ ] Can I break this component into smaller sub-components?
- [ ] Are there repeated functions I can move to utils?
- [ ] Are there hardcoded values I can extract to constants?
- [ ] Is each function doing ONE thing well?
- [ ] Would a new developer understand this file in < 5 minutes?

---

## 🎯 Practical Refactoring Strategy

### Step 1: Identify Boundaries
Look for logical sections in your component:
- State management → Extract to hook
- API calls → Extract to service/hook
- Calculations → Extract to utils
- UI sections → Extract to sub-components

### Step 2: Extract in Order
1. **Constants first** (easiest, no dependencies)
2. **Utils next** (pure functions)
3. **Hooks** (stateful logic)
4. **Sub-components** (UI pieces)

### Step 3: Test After Each Extraction
Don't refactor everything at once. Test after each extraction to ensure nothing breaks.

---

## 🔧 Component Size Examples

### ✅ Well-Sized Components (Target Range)

| Component | Lines | Status |
|-----------|-------|--------|
| `Button.tsx` | 45 | ✅ Perfect |
| `LessonCard.tsx` | 120 | ✅ Ideal |
| `ProfileScreen.tsx` | 280 | ✅ Acceptable |
| `LearningFlow.tsx` | 350 | ⚠️ Consider refactoring |
| `ComplexDashboard.tsx` | 580 | 🚨 Refactor soon |
| `MonolithComponent.tsx` | 750 | ❌ **VIOLATION** |

---

## 🚫 Anti-Patterns to Avoid

### ❌ The "God Component"
```tsx
// DON'T: Everything in one massive component
const LearningScreen = () => {
  // 200 lines of state
  // 300 lines of functions
  // 200 lines of JSX
  // = 700 lines total 😱
}
```

### ❌ Copy-Paste Programming
```tsx
// DON'T: Duplicate the same logic across files
// File1.tsx
const score = (correct / total) * 100 + timeBonus;

// File2.tsx  
const score = (correct / total) * 100 + timeBonus;

// File3.tsx
const score = (correct / total) * 100 + timeBonus;

// ✅ DO: Create a shared utility
// utils/scoring.ts
export const calculateScore = (correct, total, timeBonus) => 
  (correct / total) * 100 + timeBonus;
```

### ❌ Inline Business Logic in JSX
```tsx
// DON'T:
<div>
  {questions.map((q, i) => {
    const isCorrect = answers[i] === q.correct;
    const points = isCorrect ? 10 : 0;
    const bonus = timer > 10 ? 5 : 0;
    return <div>{points + bonus}</div>
  })}
</div>

// ✅ DO:
const getQuestionPoints = (question, answer, timer) => {
  const basePoints = answer === question.correct ? 10 : 0;
  const bonus = timer > 10 ? 5 : 0;
  return basePoints + bonus;
};

<div>
  {questions.map((q, i) => (
    <div>{getQuestionPoints(q, answers[i], timer)}</div>
  ))}
</div>
```

---

## 📦 Recommended File Organization

For a typical feature module:

```
feature/
├── FeatureScreen.tsx              # Main screen (200-300 lines max)
├── components/
│   ├── FeatureHeader.tsx          # Sub-component (50-150 lines)
│   ├── FeatureCard.tsx            # Sub-component (80-120 lines)
│   ├── FeatureModal.tsx           # Sub-component (100-200 lines)
│   └── FeatureButton.tsx          # Sub-component (40-80 lines)
├── hooks/
│   ├── useFeatureState.ts         # Custom hook (80-150 lines)
│   ├── useFeatureAPI.ts           # API hook (60-120 lines)
│   └── useFeatureTimer.ts         # Timer hook (40-80 lines)
├── utils/
│   ├── featureCalculations.ts     # Pure functions (100-200 lines)
│   └── featureValidation.ts       # Validators (80-150 lines)
└── constants/
    └── featureConfig.ts            # Constants (50-100 lines)
```

**Total: 10-15 files instead of 1-2 massive files**

---

## 🎓 Remember

> **"If you're scrolling for more than 5 seconds to find a function, the file is too long."**

> **"Every file should do ONE thing really well."**

> **"Small files = Happy developers = Better code."**

---

## 🔍 Enforcement

### Automated Checks (Future)
- Consider adding ESLint rules for max file length
- Pre-commit hooks to warn on 600+ line files

### Manual Reviews
- All PR reviews should check file sizes
- Flag any file over 400 lines for discussion
- Reject any file over 600 lines

---

## 📚 Related Documentation

- See `AGENTS.md` for overall architecture guidelines
- See `docs/brand/` for UI/UX standards
- See project structure in `AGENTS.md` for folder organization

---

**Last Updated**: January 2026  
**Applies To**: All TypeScript/TSX files in `src/`
