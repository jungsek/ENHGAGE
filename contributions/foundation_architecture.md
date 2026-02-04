# Phase 2: Foundation & Architecture Visualization

This document visualizes the technical foundation established for the ENHGAGE application.

## 1. Technology Stack Architecture
The application is built on a modern, performance-focused stack centered around React and Vite.

```mermaid
graph TD
    subgraph Build_Tooling [Build & Tooling]
        Vite[⚡ Vite<br/>Fast Dev Server]
        TS[TypeScript<br/>Type Safety]
        PostCSS[PostCSS]
    end

    subgraph Core_Framework [Frontend Framework]
        React[React 18<br/>UI Library]
        Router[React Router<br/>Navigation]
        Zustand[Zustand<br/>State Management]
    end

    subgraph Styling_System [Styling & Design]
        Tailwind[Tailwind CSS v4<br/>Utility Classes]
        Nunito[Font: Nunito<br/>Typography]
        Framer[Motion<br/>Animations]
        Confetti[Canvas Confetti<br/>Effects]
    end

    Build_Tooling --> Core_Framework
    Core_Framework --> Styling_System
    
    style Vite fill:#646CFF,color:#fff
    style React fill:#61DAFB,color:#000
    style Tailwind fill:#38B2AC,color:#fff
```

## 2. Project Directory Structure
The codebase follows a scalable feature-based architecture, utilizing absolute imports (`@/`) for cleaner code.

```mermaid
graph LR
    Root["src/"] --> Assets["📂 assets/<br/>Images & Icons"]
    Root --> Components["📂 components/"]
    
    Components --> Common["📂 common/<br/>(Atoms)"]
    Components --> Features["📂 home/ map/ social/<br/>(Feature Widgets)"]
    
    Root --> Screens["📂 screens/<br/>(Pages)"]
    Root --> Store["📂 store/<br/>(Global State)"]
    Root --> Const["📂 constants/<br/>(Data & Config)"]
    
    subgraph Atomic_Lib [Component Library]
        Common -.-> Button["Button.tsx<br/>(3D Style)"]
        Common -.-> Card["Card.tsx<br/>(Rounded)"]
        Common -.-> ProgressBar["ProgressBar.tsx<br/>(Glossy)"]
    end
    
    style Root fill:#eee,stroke:#333
    style Atomic_Lib fill:#fff,stroke:#008080,stroke-dasharray: 5 5
```

## 3. Core Component Design ("The Juice")
We implemented a specific "Juicy" interaction model for our core UI components.

```mermaid
classDiagram
    class Button3D {
        +rounded-2xl
        +border-b-4 (Depth)
        +active:translate-y (Press Effect)
    }

    class GameCard {
        +rounded-3xl
        +shadow-md
        +border-2
    }

    class ProgressBar {
        +height-4
        +rounded-full
        +glossy-overlay (Highlight)
    }
    
    note for Button3D "Mimics physical button press"
    note for ProgressBar "Visually satisfying progress"
```
