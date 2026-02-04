# Feature User Flow Diagrams

This document visualizes the detailed user flows for the core engagement features of ENHGAGE: **Learning**, **Rewards**, and **Map Activity**.

## 1. Learning Flow (The Education Loop)
This flow details how a user selects a lesson, progresses through cards, and earns certification.

```mermaid
graph TD
    Start("Open Learning Tab") --> List["Lesson List (Grouped by Pillar)"]
    List --> Select{"Select Lesson"}
    
    Select -- Locked --> Error["Show Lock Icon"]
    Select -- Unlocked --> Content["Active Lesson Experience"]
    
    subgraph Lesson_Content [Educational Cards]
        Content --> Hook["Hook Card (Intro)"]
        Hook --> Learn["Learn Card (Content)"]
        Learn --> Quiz{"Check Card (Quiz)"}
        Quiz -- Incorrect --> Retry["Try Again"]
        Quiz -- Correct --> Apply["Apply Card (Practical)"]
        Apply --> Connect["Connect Card (Summary)"]
    end
    
    Connect --> Complete["Lesson Complete Screen"]
    Complete -- "Claim XP" --> Points["Add Points & Gems"]
    
    Points --> QuestCheck{"Quest Completed?"}
    QuestCheck -- Yes --> QuestScreen["Quest Success Modal"]
    QuestCheck -- No --> PillarCheck{"Pillar Certified?"}
    
    QuestScreen --> PillarCheck
    
    PillarCheck -- Yes --> CertModal["Pillar Certified Modal"]
    CertModal -- "Share" --> Share["LinkedIn Share Modal"]
    PillarCheck -- No --> Return["Return to Lesson List"]
    Share --> Return
    
    style Start fill:#008080,stroke:#fff,color:#fff
    style Content fill:#E0F2F1,stroke:#00897B
    style Complete fill:#FFD700,stroke:#333
```

## 2. Rewards Flow (The Redemption Loop)
This flow shows how users browse, filter, and redeem their hard-earned points.

```mermaid
graph TD
    Start("Open Rewards Tab") --> Browse["Browse Rewards Grid"]
    Browse --> Filter{"Filter Category"}
    Filter -- "Voucher/Activity" --> FilteredList["Update Grid"]
    
    FilteredList --> ClickRedeem{"Click 'Redeem'"}
    
    ClickRedeem --> CheckPoints{"Has Enough Points?"}
    
    CheckPoints -- No --> Error["Disable Button / Alert"]
    CheckPoints -- Yes --> Deduct["Deduct Points"]
    
    Deduct --> Success["Show Success Modal"]
    Success --> Code["Display Voucher Code"]
    Code --> Close["Close & Return to Grid"]
    
    style Start fill:#008080,stroke:#fff,color:#fff
    style Success fill:#98FF98,stroke:#333
    style CheckPoints fill:#f9f,stroke:#333
```

## 3. Map & Activity Flow (The Physical Loop)
This flow covers the exploration mode and tracking physical activities.

```mermaid
graph TD
    Start("Open Map Tab") --> MapView["Map Container (Live Location)"]
    
    MapView --> Mode{"Select Mode"}
    
    subgraph Discovery_Mode [Discovery]
        Mode -- "Browse" --> BottomSheet["Discovery Bottom Sheet"]
        BottomSheet --> ViewDetails["View Activity Details"]
        Mode -- "FAB Click" --> SportSelect["Sport Selector Modal"]
    end
    
    subgraph Activity_Mode [Active Tracking]
        SportSelect -- "Start" --> Telemetry["Activity Telemetry Deck<br/>(Timer/Distance)"]
        Telemetry --> OnGoing["Tracking..."]
        OnGoing -- "Stop Button" --> Stop{"Confirm Stop"}
    end
    
    Stop -- Yes --> Summary["Activity Summary Modal"]
    Summary -- "Done" --> MapView
    Summary --> Points["Award Points"]
    
    style Start fill:#008080,stroke:#fff,color:#fff
    style Telemetry fill:#FF7F50,stroke:#333,color:#fff
    style Summary fill:#FFD700,stroke:#333
```
