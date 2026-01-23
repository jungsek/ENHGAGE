# ENHGAGE Map Feature Plan (v3)

## Overview

The Map feature combines **ClassPass-style programme discovery** with **Strava-style activity tracking** into a unified map experience. Users can browse nearby NHG programmes and track physical activities (walk, run, cycle) on the same map canvas.

---

## Mode Overview

### Discovery Mode (Default)
- NHG programme pins visible on map (NHG logo markers)
- Bottom sheet for browsing programmes
- FAB: "Start Activity" button in corner

### Activity Mode (When tracking)
- GPS tracking, route polyline drawing
- Programme pins remain visible
- Bottom sheet transforms to telemetry deck
- Pause/Stop controls

---

## Programme Filtering Logic

### Default Filters Applied
1. **Location** - Programmes sorted by proximity to user's current location
2. **Preferences** - Prioritise programmes from user's top 3 pillars (selected during onboarding)
3. **Time** - Programmes displayed in chronological order by session time

### The 6 Health Pillars

| ID | Pillar | Icon | Color |
|----|--------|------|-------|
| 1 | Stress & Mental Wellness | 🧘 | #7C3AED |
| 2 | Nutrition | 🥗 | #10B981 |
| 3 | Fitness | 🏃 | #F59E0B |
| 4 | Chronic Disease Prevention | ❤️‍🩹 | #EF4444 |
| 5 | Caregiver Skills | 🤝 | #3B82F6 |
| 6 | Community Volunteering | 🌱 | #06B6D4 |

---

## Bottom Sheet States (Discovery Mode)

| State | Height | Content |
|-------|--------|---------|
| **Collapsed** | ~5% | Handle bar + Filter row only. No programmes visible. |
| **Half** | 60-70% | Filter row + Date selector + Programme list (chronological). Map partially visible. |
| **Expanded** | 90-95% | Full programme list. Map hidden. |

---

## Date Selector Design

```
┌─────────────────────────────────────────────────────────────────┐
│  Today      Tomorrow    Sat         Sun         Mon         Tue │
│  23 Jan     24 Jan      25 Jan      26 Jan      27 Jan      28  │
│    ▔▔▔                                                          │
└─────────────────────────────────────────────────────────────────┘
                              ← scroll →
```

### Behavior
- Horizontal scrollable
- Shows day name + date
- "Today" and "Tomorrow" as labels for first two days
- Subsequent days show weekday name
- Selected date highlighted with underline
- Selecting a date refreshes programme list for that day

---

## Bottom Sheet Content Structure (Discovery Mode)

```
┌─────────────────────────────────────────────────┐
│ ═══════════ (handle)                            │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ [⚙️ 2] [Sort by ▼] [Pillar ▼] [Distance ▼] │ │  ← Filter Row
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ Today    Tomorrow   Sat       Sun       Mon │ │  ← Date Selector
│ │ 23 Jan   24 Jan     25 Jan    26 Jan    27  │ │
│ │   ▔▔▔                                       │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ ─────────────────────────────────────────────── │
│                                                 │
│ 9:00 AM ─────────────────────────────────────── │  ← Time Header
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ [img] Moving Free                      🏃   │ │
│ │       Serangoon Stadium • 0.8 km            │ │
│ │       9:00 AM - 10:00 AM                    │ │
│ └─────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────┐ │
│ │ [img] Morning Yoga                     🧘   │ │
│ │       Ang Mo Kio CC • 1.2 km                │ │
│ │       9:30 AM - 10:30 AM                    │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ 10:00 AM ────────────────────────────────────── │  ← Time Header
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ [img] Walking Foodpedia                🥗   │ │
│ │       Toa Payoh Hub • 2.1 km                │ │
│ │       10:00 AM - 12:00 PM                   │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ 2:00 PM ─────────────────────────────────────── │  ← Time Header
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ [img] Stress Relief Workshop           🧘   │ │
│ │       Bishan CC • 1.5 km                    │ │
│ │       2:00 PM - 3:30 PM                     │ │
│ └─────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────┐ │
│ │ [img] Diabetes Prevention Talk         ❤️‍🩹  │ │
│ │       Serangoon CC • 0.9 km                 │ │
│ │       2:30 PM - 4:00 PM                     │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│              See more programmes ▼              │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Programme Card Design (List View)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌───────┐  Programme Name               [🧘]  │  ← Pillar icon
│  │       │  Venue Name • X.X km                 │
│  │ [img] │  9:00 AM - 10:00 AM                  │  ← Session time
│  │       │                                      │
│  └───────┘                                      │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Card Elements
- Programme thumbnail image
- Programme name
- Pillar icon (top right)
- Venue name
- Distance from user
- Session start and end time

---

## Map Pin Interaction

### Tapping a pin on the map shows Mini Card:

```
┌─────────────────────────────────────────────────┐
│                                                 │
│         MAP CANVAS                              │
│                                                 │
│              📍 ←── User taps pin               │
│               │                                 │
│               ▼                                 │
│     ┌─────────────────────────┐                 │
│     │ [img] Moving Free  🏃  │ ← Mini Card     │
│     │ Serangoon Stadium      │   (appears)     │
│     │ 0.8 km • 9:00 AM       │                 │
│     │ ─────────────────────  │                 │
│     │ [View Details]         │                 │
│     └─────────────────────────┘                 │
│                                                 │
│                              [FAB 🏃]           │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Mini Card Elements
- Programme thumbnail
- Programme name
- Pillar icon
- Venue name
- Distance
- Next available session time
- "View Details" button → opens Programme Detail Screen

### Mini Card Behavior
- Appears as overlay near the tapped pin
- Tapping elsewhere on map dismisses mini card
- Tapping "View Details" opens full Programme Detail Screen
- Tapping the card itself also opens Programme Detail Screen

---

## Programme Detail Screen

```
┌─────────────────────────────────────────────────┐
│ ← Back                                          │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │                                             │ │
│ │              [Hero Image]                   │ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ Moving Free                               🏃    │  ← Programme name + pillar
│                                                 │
│ 📍 Serangoon Stadium                            │  ← Venue
│    123 Serangoon Ave 3, Singapore 556789        │
│    0.8 km away                                  │
│                                                 │
│ 🗓️ Today, 23 Jan • 9:00 AM - 10:00 AM           │  ← Date & time
│                                                 │
│ ─────────────────────────────────────────────── │
│                                                 │
│ About this programme                            │
│                                                 │
│ Moving Free is a low-impact exercise program    │
│ designed for adults of all fitness levels.      │
│ Join us for a fun morning of guided stretching  │
│ and light cardio exercises in a supportive      │
│ group environment.                              │
│                                                 │
│ What to bring:                                  │
│ • Comfortable exercise attire                   │
│ • Water bottle                                  │
│ • Towel                                         │
│                                                 │
│ ─────────────────────────────────────────────── │
│                                                 │
│ 🎯 +30 points upon attendance                   │  ← Points indicator
│                                                 │
│ ─────────────────────────────────────────────── │
│                                                 │
│ Other sessions                                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│ │ Tomorrow │ │ Sat 25   │ │ Mon 27   │         │  ← Other available
│ │ 9:00 AM  │ │ 9:00 AM  │ │ 9:00 AM  │         │     sessions
│ └──────────┘ └──────────┘ └──────────┘         │
│                                                 │
│ ─────────────────────────────────────────────── │
│                                                 │
│ Location                                        │
│ ┌─────────────────────────────────────────────┐ │
│ │                                             │ │
│ │        [Mini Map with pin]                  │ │
│ │                                             │ │
│ │            [Get Directions]                 │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │                                             │ │
│ │              [ Book Now ]                   │ │  ← Primary CTA
│ │                                             │ │     (instant booking)
│ └─────────────────────────────────────────────┘ │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Programme Detail Elements
- Hero image
- Programme name + pillar icon
- Venue name, address, distance
- Selected session date & time
- Programme description
- What to bring / requirements
- Points earned upon attendance
- Other available sessions (tappable chips to switch)
- Mini map with venue pin
- "Get Directions" button (opens maps app)
- "Book Now" button (sticky at bottom)

---

## Booking Flow

```
[User taps "Book Now"]
     │
     ▼
┌─────────────────────────────────────┐
│  BOOKING CONFIRMATION (Modal)       │
│                                     │
│  ✓ You're booked!                   │
│                                     │
│  Moving Free                        │
│  Today, 23 Jan • 9:00 AM            │
│  Serangoon Stadium                  │
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 📅 Add to Calendar              ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │      [ View My Bookings ]       ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │         [ Done ]                ││
│  └─────────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘
```

### Booking Behavior
- Booking is instant - one tap confirms
- User can add to device calendar
- "View My Bookings" goes to bookings list
- "Done" returns to previous screen

---

## Filter Options

### Sort By
- Distance (default)
- Time (earliest first)
- Popularity

### Pillar
- All Pillars
- Stress & Mental Wellness
- Nutrition
- Fitness
- Chronic Disease Prevention
- Caregiver Skills
- Community Volunteering

### Distance
- Within 1 km
- Within 3 km
- Within 5 km
- Any distance

### Active Filters Indicator
- The filter icon shows count of active non-default filters (e.g., [⚙️ 2])

---

## User Flow (Complete - Discovery)

```
[User opens Map tab]
     │
     ▼
┌─────────────────────────────────────┐
│  MAP VIEW (Collapsed sheet - 5%)    │
│  - Full map visible                 │
│  - NHG pins on map                  │
│  - Filter row visible               │
│  - FAB in corner                    │
└─────────────────────────────────────┘
     │
     ├──[Drags sheet up]──────────────────┐
     │                                    ▼
     │               ┌─────────────────────────────────────┐
     │               │  HALF VIEW (60-70%)                 │
     │               │  - Partial map visible              │
     │               │  - Date selector visible            │
     │               │  - Programme list (chronological)   │
     │               └─────────────────────────────────────┘
     │                                    │
     │               ┌────────────────────┼────────────────┐
     │               │                    │                │
     │               ▼                    ▼                ▼
     │    [Taps date]           [Taps programme]    [Drags up more]
     │         │                      │                    │
     │         ▼                      ▼                    ▼
     │    Refreshes list      Programme Detail      Expanded View
     │    for that date            Screen              (90%)
     │                                │
     │                                ▼
     │                         [Taps "Book Now"]
     │                                │
     │                                ▼
     │                      Booking Confirmation
     │
     ├──[Taps a map pin]──────────────────┐
     │                                    ▼
     │               ┌─────────────────────────────────────┐
     │               │  MINI CARD (overlay on map)         │
     │               │  - Programme thumbnail              │
     │               │  - Name, venue, distance, time      │
     │               │  - "View Details" button            │
     │               └─────────────────────────────────────┘
     │                                    │
     │                          [Taps card/button]
     │                                    │
     │                                    ▼
     │                          Programme Detail Screen
     │
     └──[Taps FAB]────────────────────────┐
                                          ▼
                               ┌─────────────────────────────────────┐
                               │  ACTIVITY MODE                      │
                               │  (See Activity Flow below)          │
                               └─────────────────────────────────────┘
```

---

## Activity Mode Flow

```
[Taps FAB]
     │
     ▼
┌─────────────────────────────────────┐
│  SPORT SELECTOR (Modal)             │
│                                     │
│  Choose Activity                    │
│  ┌──────┐ ┌──────┐ ┌──────┐        │
│  │ 🚶   │ │ 🏃   │ │ 🚴   │        │
│  │ Walk │ │ Run  │ │ Cycle│        │
│  └──────┘ └──────┘ └──────┘        │
│                                     │
│        [ Start Activity ]           │
└─────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────┐
│  ACTIVITY MODE                      │
│                                     │
│  ┌─────────────────────────────────┐│
│  │         MAP (full)              ││
│  │    [NHG pins still visible]     ││
│  │                                 ││
│  │    ~~~~ route polyline ~~~~     ││
│  │              ◉                  ││
│  │                   [Re-center]   ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │           Walk                  ││
│  │                                 ││
│  │   05:32      5'42"      0.97    ││
│  │   Time    Avg pace    Distance  ││
│  │                                 ││
│  │   [⏸️ Pause]    [⏹️ Stop]       ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
     │
     │ [Taps Stop]
     ▼
┌─────────────────────────────────────┐
│  ACTIVITY SUMMARY                   │
│                                     │
│  ┌─────────────────────────────────┐│
│  │    MAP (route review)           ││
│  │    🟢───────────────🏁          ││
│  │    [Save Route]                 ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │  Walk Complete! 🎉              ││
│  │                                 ││
│  │  12:45 duration                 ││
│  │  1.2 km distance                ││
│  │  +XX points earned              ││
│  │                                 ││
│  │  [Discard]  [Save Activity]     ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
     │
     │ [Saves]
     ▼
┌─────────────────────────────────────┐
│  BACK TO DISCOVERY MODE             │
│  (Collapsed state)                  │
└─────────────────────────────────────┘
```

---

## Component Inventory

### Map Layer
- Base map (Apple Maps / Google Maps style)
- NHG logo pins for programme locations
- User location dot (blue with accuracy halo)
- Activity route polyline (orange)
- Start marker (green dot)
- End marker (checkered flag)
- Mini card overlay (when pin tapped)

### Bottom Sheet - Discovery Mode
- Drag handle
- Filter row: Filter icon with count, Sort by, Pillar, Distance
- Date selector: Day name + date, horizontal scroll
- Time headers: Group programmes by start hour
- Programme cards: Thumbnail, name, pillar icon, venue, distance, time range

### Programme Detail Screen
- Hero image
- Programme info (name, pillar, venue, address, distance, time)
- Description
- What to bring
- Points indicator
- Other sessions chips
- Mini map with directions
- "Book Now" button (sticky)

### Booking Confirmation Modal
- Success message
- Booking summary
- Add to calendar option
- View bookings / Done buttons

### Bottom Sheet - Activity Mode
- Activity type label
- Telemetry: Time, Avg Pace, Distance
- Pause/Stop buttons

### Controls
- FAB: Start Activity button
- Sport selector modal
- Re-center button (during activity)

---
