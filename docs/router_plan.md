# Routing & Navigation Architecture Plan

## Goal
Implement `react-router-dom` to enable proper page-based navigation for the main application, separating the "Social" feature into its own dedicated page with a bottom navigation bar.

## User Review Required
> [!IMPORTANT]
> **Onboarding Flow**: We will keep the current `OnboardingStep` state in Zustand for the linear onboarding process (Welcome -> Profile -> etc.) but wrap it in a single `/onboarding` or root route. Once onboarding is complete, we redirect to `/app/home`.
> **Dependencies**: This requires installing `react-router-dom`.

## Proposed Architecture

### 1. Installation
Install the router package:
`npm install react-router-dom`

### 2. Route Structure
We will structure the app URL hierarchy as follows:

| Path | Component | Description |
| :--- | :--- | :--- |
| `/` | `SplashScreen` | Checks auth/onboarding state and redirects. |
| `/onboarding` | `OnboardingFlow` | Wrapper for existing step-based screens. |
| `/app` | `MainLayout` | **Shell component** containing the `BottomNavbar` and `Outlet`. |
| `/app/home` | `HomeScreen` | Dashboard (Icon: Birdhouse). |
| `/app/learn` | `LearningScreen` | Practice/Learning (Icon: Dumbbells/Book). |
| `/app/map` | `MapScreen` | Journey Map (Icon: Map). |
| `/app/social` | `SocialScreen` | Leaderboard/Friends (Icon: Shield/Trophy). |
| `/app/rewards`| `RewardsScreen` | Shop/Chests (Icon: Chest). |
| `/app/profile`| `ProfileScreen` | User Settings (Icon: Avatar). |

### 3. Key Components

#### [NEW] `src/layouts/MainLayout.tsx`
- Renders `<Outlet />` for child routes.
- Renders `<BottomNavbar />` fixed at the bottom.
- Handles shared layout logic (e.g., safe area views, max-width constraints).

#### [NEW] `src/components/common/BottomNavbar.tsx`
- **Visuals**: Gamified 2D Vector Icons (Duolingo style).
- **Structure**: Flex row, fixed bottom, white background, top border.
- **Interactions**:
    - **Active**: Icon is colored, slightly larger or has a background indicator.
    - **Inactive**: Icon is gray/muted.
    - **Press**: 3D depression effect or scale down.

#### [MODIFY] `src/App.tsx`
- Replace conditional rendering with `<BrowserRouter>`.
- Use `Routes` and `Route`.
- Check `useAppStore.hasCompletedOnboarding`:
    - If `false`: Redirect to `/onboarding`.
    - If `true`: Redirect to `/app/home`.

### 4. Integration Steps

1.  **Install**: Run npm install.
2.  **Scaffold**: Create `MainLayout` and `BottomNavbar`.
3.  **Refactor App.tsx**: clear out the giant switch statement and replace with Router.
4.  **Migrate HomeScreen**: Ensure it works as a standalone route.
5.  **Create SocialScreen**: Empty placeholder connected to `/app/social`.

## Verification Plan

### Automated Tests
- Verify `react-router-dom` installs correctly.
- (Future) Test route guards (can't access `/app` without onboarding).

### Manual Verification
1.  **Launch**: App starts.
2.  **Onboarding**: Complete flow (or click "Dev Skip").
3.  **Redirect**: Observe URL changes to `/app/home`.
4.  **Nav Bar**: See the bottom bar.
5.  **Navigate**: Click "Social" icon -> URL changes to `/app/social` -> Layout remains, content changes.
