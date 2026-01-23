# ENHGAGE Programme Data Store

## Overview

This document describes the fake data store created for the ENHGAGE app Map feature prototype.

**Data Period:** Week of 23-29 January 2026  
**Total Programmes:** 36 unique programmes  
**Total Venues:** 12 locations  
**Total Sessions:** 137 scheduled sessions across 7 days

---

## Data Structure

### 1. Pillars (6)

| ID | Name | Icon | Color |
|----|------|------|-------|
| 1 | Stress & Mental Wellness | 🧘 | #7C3AED |
| 2 | Nutrition | 🥗 | #10B981 |
| 3 | Fitness | 🏃 | #F59E0B |
| 4 | Chronic Disease Prevention | ❤️‍🩹 | #EF4444 |
| 5 | Caregiver Skills | 🤝 | #3B82F6 |
| 6 | Community Volunteering | 🌱 | #06B6D4 |

---

### 2. Programmes by Pillar

#### 🧘 Pillar 1: Stress & Mental Wellness (6 programmes)

| ID | Programme Name | Duration | Points |
|----|----------------|----------|--------|
| p1 | Moving Free | 60 min | 35 |
| p2 | Mindfulness Meditation | 45 min | 25 |
| p3 | Art Therapy Session | 90 min | 40 |
| p4 | mindSET! | 90 min | 45 |
| p5 | Social Connection Group | 60 min | 30 |
| p6 | Youth Mental Health First Aid | 180 min | 75 |

#### 🥗 Pillar 2: Nutrition (6 programmes)

| ID | Programme Name | Duration | Points |
|----|----------------|----------|--------|
| p7 | Walking Foodpedia | 120 min | 50 |
| p8 | Make It Siew Dai | 90 min | 40 |
| p9 | Eat Right, Smile Bright | 75 min | 35 |
| p10 | Healthy Cooking Demo | 90 min | 40 |
| p11 | Hawker Centre Tour | 90 min | 45 |
| p12 | Supermarket Smart Shopping | 75 min | 35 |

#### 🏃 Pillar 3: Fitness (8 programmes)

| ID | Programme Name | Duration | Points |
|----|----------------|----------|--------|
| p13 | KpopX Fitness | 60 min | 40 |
| p14 | Zumba | 60 min | 40 |
| p15 | Piloxing | 60 min | 45 |
| p16 | Yoga | 60 min | 35 |
| p17 | Kickboxing | 60 min | 45 |
| p18 | Brisk Walking Group | 45 min | 25 |
| p19 | Strength Training Basics | 60 min | 40 |
| p20 | Tai Chi | 60 min | 30 |

#### ❤️‍🩹 Pillar 4: Chronic Disease Prevention (6 programmes)

| ID | Programme Name | Duration | Points |
|----|----------------|----------|--------|
| p21 | Diabetes Management Workshop | 150 min | 60 |
| p22 | Heart Health Workshop | 150 min | 60 |
| p23 | Health Screening | 30 min | 25 |
| p24 | SEED Healthy Living | 90 min | 45 |
| p25 | Know Your BP | 60 min | 30 |
| p26 | Chronic Disease Self-Management | 120 min | 50 |

#### 🤝 Pillar 5: Caregiver Skills (5 programmes)

| ID | Programme Name | Duration | Points |
|----|----------------|----------|--------|
| p27 | Create a Safer Home | 90 min | 40 |
| p28 | Medication Management | 180 min | 65 |
| p29 | Wheelchair Handling | 180 min | 70 |
| p30 | CPR & First Aid | 180 min | 75 |
| p31 | Caregiver Support Group | 90 min | 35 |

#### 🌱 Pillar 6: Community Volunteering (5 programmes)

| ID | Programme Name | Duration | Points |
|----|----------------|----------|--------|
| p32 | My HealthHub Buddy | 120 min | 60 |
| p33 | Health Ambassador Training | 180 min | 80 |
| p34 | Befriending Service | 90 min | 45 |
| p35 | Community Health Event Support | 240 min | 85 |
| p36 | Intergenerational Activities | 120 min | 50 |

---

### 3. Venues (12)

| ID | Venue Name | Area |
|----|------------|------|
| v1 | Serangoon Community Club | Serangoon |
| v2 | Ang Mo Kio Community Centre | Ang Mo Kio |
| v3 | Bishan Community Club | Bishan |
| v4 | Toa Payoh Hub | Toa Payoh |
| v5 | Woodlands Health Campus | Woodlands |
| v6 | Hougang Community Club | Hougang |
| v7 | Khoo Teck Puat Hospital | Yishun |
| v8 | Sengkang Community Club | Sengkang |
| v9 | Punggol Community Club | Punggol |
| v10 | Yishun Community Hospital | Yishun |
| v11 | ActiveSG Serangoon Stadium | Serangoon |
| v12 | FairPrice Hub Joo Koon | Joo Koon |

---

### 4. Sessions per Day

| Date | Day | Sessions |
|------|-----|----------|
| 2026-01-23 | Thursday (Today) | 16 |
| 2026-01-24 | Friday (Tomorrow) | 16 |
| 2026-01-25 | Saturday | 19 |
| 2026-01-26 | Sunday | 20 |
| 2026-01-27 | Monday | 19 |
| 2026-01-28 | Tuesday | 24 |
| 2026-01-29 | Wednesday | 23 |

---

## Session Schema

```json
{
  "id": "s1",
  "programme_id": "p1",
  "venue_id": "v1",
  "date": "2026-01-23",
  "start_time": "09:00",
  "end_time": "10:00",
  "slots_total": 12,
  "slots_available": 5
}
```

---

## Programme Schema

```json
{
  "id": "p1",
  "name": "Moving Free",
  "pillar_id": 1,
  "description": "...",
  "duration_mins": 60,
  "group_size": "8-12 pax",
  "what_to_bring": ["Comfortable clothing", "Water bottle"],
  "points_earned": 35,
  "image_url": "https://placeholder.com/moving-free.jpg",
  "source": "NHG Health"
}
```

---

## Time Slot Distribution

Sessions are distributed across typical community programme timings:

**Morning (6:00 AM - 12:00 PM)**
- Early bird fitness: 6:30 AM - 8:00 AM
- Mid-morning workshops: 9:00 AM - 12:00 PM

**Afternoon (12:00 PM - 6:00 PM)**
- Lunch-time options: 12:00 PM - 2:00 PM
- Afternoon workshops: 2:00 PM - 5:00 PM

**Evening (6:00 PM - 9:00 PM)**
- After-work fitness: 6:00 PM - 8:00 PM
- Evening classes: 7:00 PM - 9:00 PM

---

## Usage Notes for Prototype

1. **Filtering by Location**: Use venue lat/lng coordinates to calculate distance from user
2. **Filtering by Pillar**: Join programmes.pillar_id with user preferences
3. **Chronological Sorting**: Sort sessions by start_time within each date
4. **Availability Display**: Show slots_available / slots_total for booking status
5. **Points Display**: Show programme.points_earned on detail screen and booking confirmation

---

## Sample Queries

### Get all sessions for Today (23 Jan), sorted by time:
```javascript
sessions
  .filter(s => s.date === "2026-01-23")
  .sort((a, b) => a.start_time.localeCompare(b.start_time))
```

### Get sessions for user's preferred pillars (e.g., Fitness & Nutrition):
```javascript
const preferredPillars = [2, 3]; // Nutrition, Fitness
const programmeIds = programmes
  .filter(p => preferredPillars.includes(p.pillar_id))
  .map(p => p.id);

sessions.filter(s => programmeIds.includes(s.programme_id))
```

### Build programme card with all details:
```javascript
const session = sessions.find(s => s.id === "s7");
const programme = programmes.find(p => p.id === session.programme_id);
const venue = venues.find(v => v.id === session.venue_id);
const pillar = pillars.find(pl => pl.id === programme.pillar_id);

// Result:
{
  name: "KpopX Fitness",
  venue: "Serangoon Community Club",
  time: "18:00 - 19:00",
  pillar_icon: "🏃",
  pillar_color: "#F59E0B",
  points: 40,
  slots_available: 10
}
```
