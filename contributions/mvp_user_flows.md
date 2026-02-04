# MVP User Flow Diagrams

The following diagrams visualize the core user flows of the ENHGAGE application as implemented in the current codebase (`OnboardingFlow.tsx` and `HomeScreen.tsx`).

## 1. Onboarding Flow
This diagram illustrates the step-by-step journey a new user takes from launching the app to reaching the home screen.

```mermaid
graph TD
    Start("App Launch") --> Check{"Has Completed Onboarding?"}
    
    Check -- Yes --> Home["Home Screen"]
    Check -- No --> Splash["Splash Screen (3s Timer)"]
    
    Splash --> Welcome["Welcome Screen"]
    Welcome --> SignIn["Sign In Screen (Phone/OTP)"]
    SignIn --> Profile["Profile Setup Screen (Name, Gender, Age)"]
    Profile --> Interests["Interests Screen"]
    Interests --> Buddy["Buddy Select Screen (Mascot Choice)"]
    Buddy -- "Selects Buddy" --> Widget["Widget Setup Screen"]
    Widget --> Notify["Notifications Screen"]
    Notify --> Health["Connect Health Screen"]
    Health --> Referral["Referral Screen"]
    Referral --> Complete["Complete Screen"]
    
    Complete -- "Let's Go!" --> SetFlag["End Onboarding"]
    SetFlag --> Home
    
    style Start fill:#008080,stroke:#fff,stroke-width:2px,color:#fff
    style Home fill:#FFD700,stroke:#333,stroke-width:2px
    style Check fill:#f9f,stroke:#333,stroke-width:2px
```

## 2. Home Dashboard Structure
This diagram breaks down the different interactive sections and components present on the `HomeScreen`.

```mermaid
classDiagram
    class HomeScreen {
        +Top Bar (AppHeader)
        +Welcome Section
        +Level Progress
        +Streak Widget
        +Today's Progress
        +Daily Quests
        +Continue Learning
    }

    class AppHeader {
        +Gems Count (Nav to Rewards)
        +Streak Count (Open Modal)
    }

    class WelcomeSection {
        +User Greeting
        +Mascot (Animated)
        +Speech Bubble (Motivational)
    }

    class StreakWidget {
        +History (Past 7 days)
        +Current Streak Count
    }

    class TodaysProgress {
        +Progress Bar (Journey Nodes)
        +Milestone Rewards
        +Daily Reward Modal (Chest)
    }

    class DailyQuests {
        +List of QuestItem
        +Quest Status (Complete/Incomplete)
    }

    class ContinueLearning {
        +Featured Lesson Card
        +Progress Indicator (Day 1/3)
        +Continue Button
    }

    HomeScreen *-- AppHeader
    HomeScreen *-- WelcomeSection
    HomeScreen *-- StreakWidget
    HomeScreen *-- TodaysProgress
    HomeScreen *-- DailyQuests
    HomeScreen *-- ContinueLearning

    style HomeScreen fill:#008080,color:#fff,stroke-width:0px
    style AppHeader fill:#66B2B2,color:#fff
    style WelcomeSection fill:#fff,stroke:#333
```
