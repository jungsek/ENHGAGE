# ENHGAGE Learning Feature: Complete Lesson Plan

## Document Overview

This document provides a comprehensive plan for transforming 18 NHG programmes into engaging micro-learning "Lesson Cards" for the ENHGAGE app. Each lesson follows a consistent 5-7 card structure inspired by Duolingo's approach.

---

# PART 1: DESIGN SYSTEM

## 1.1 Visual Design Language (Duolingo-Inspired)

### Core Design Principles

| Principle | Implementation |
|-----------|----------------|
| **Flat 2D Illustration** | No gradients, shadows, or 3D effects. Clean vector shapes. |
| **Bold Color Palette** | Primary: NHG brand colors + vibrant accents (lime green, coral, sky blue, golden yellow) |
| **Geometric Characters** | Simple shapes, big expressive eyes, rounded features |
| **High Contrast** | Dark mode friendly, WCAG AA accessible |
| **Playful Motion** | Subtle bounce animations, celebratory confetti on completion |

### Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **NHG Teal** | #00A3AD | Primary brand, headers, CTAs |
| **Success Green** | #58CC02 | Correct answers, completion states |
| **Warm Coral** | #FF6B6B | Alerts, health warnings, streaks |
| **Golden Yellow** | #FFC800 | XP badges, achievements, highlights |
| **Sky Blue** | #1CB0F6 | Information cards, tips |
| **Soft Purple** | #CE82FF | Mental wellness pillar accent |
| **Dark Background** | #131F24 | Card backgrounds (dark mode) |
| **Light Background** | #FFFFFF | Card backgrounds (light mode) |


### Illustration Style Guidelines

**Character Design:**
- Round heads with simple facial features
- 2-3 colors per character maximum
- Expressive through body posture and simple eye shapes
- Diverse representation (skin tones, ages, clothing styles)
- Singapore-specific elements (hawker attire, HDB settings, local food)

**Scene Composition:**
- Centered focal point
- Simple backgrounds (solid color or minimal environment)
- Maximum 3-4 elements per scene
- Clear visual hierarchy

**Icon Style:**
- Consistent 2px stroke weight
- Rounded corners (4px radius)
- Filled or outlined, never mixed in same context

---

## 1.2 Standard Lesson Card Structure

Each lesson follows this 5-7 card flow:

```
┌─────────────────────────────────────────┐
│  CARD 1: HOOK                           │
│  • Attention-grabbing question/stat     │
│  • Full-bleed illustration              │
│  • Tap to continue                      │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  CARDS 2-4: LEARN (2-3 cards)           │
│  • Core educational content             │
│  • Illustration + text combo            │
│  • Tap to continue                      │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  CARD 5: CHECK                          │
│  • Interactive quiz/poll/scenario       │
│  • Multiple choice or tap selection     │
│  • Immediate feedback                   │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  CARD 6: APPLY                          │
│  • Real-world micro-action prompt       │
│  • Connects learning to daily life      │
│  • Optional: Link to habit tracker      │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  CARD 7: CONNECT                        │
│  • CTA to actual NHG programme          │
│  • Deep link to Health Kampung          │
│  • "Lesson Complete" celebration        │
└─────────────────────────────────────────┘
```

### Card UI Components

**Progress Bar** (top of screen)
- Segmented progress showing cards completed
- Fills with Success Green as user progresses

**XP Counter** (lesson completion)
- Total XP earned for lesson (base: 10 XP)
- Accuracy bonus (+5 XP for 100% quiz accuracy)
- Speed bonus (+3 XP for completing under 90 seconds)

**Mascot Reactions** (post-lesson)
- Olah/Lylah/Ellah celebrates with user
- Decorative only, not tied to specific content

---

# PART 2: LESSON PLANS BY PILLAR

---

## PILLAR 1: STRESS & MENTAL WELLNESS

### 1.1 ALERT Programme

**Lesson Title:** "Know Your Warning Signs"
**Duration:** ~2.5 minutes | **Cards:** 6 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Question + Stat
**Text:** "1 in 3 youth in Singapore report feeling stressed 'most of the time.' Do you know what signs to look out for?"
**Illustration:** Young person at desk surrounded by floating thought bubbles with question marks, clock showing late hour

#### Card 2: LEARN
**Type:** Information
**Text:** "Your mind sends signals when it's struggling. Depression might show up as feeling hopeless, losing interest in things you used to enjoy, or changes in sleep and appetite."
**Illustration:** Character lying in bed during daytime, room is dim, phone notifications ignored

#### Card 3: LEARN
**Type:** Information
**Text:** "Anxiety can feel like constant worry, racing thoughts, or physical symptoms like a tight chest or upset stomach. These feelings lasting more than 2 weeks are worth checking out."
**Illustration:** Character with visible thought spirals around head, hand on chest, worried expression

#### Card 4: LEARN
**Type:** Information
**Text:** "The good news? Help is available at every NHG Polyclinic through the ALERT programme. It's confidential, and you'll work with doctors and counsellors who get it."
**Illustration:** Friendly medical professional (diverse, young) giving thumbs up in polyclinic setting

#### Card 5: CHECK
**Type:** Multiple Choice Quiz
**Question:** "Which of these could be a warning sign worth checking out?"
**Options:**
- A) Feeling sad for a day after a bad exam (Incorrect)
- B) Losing interest in friends and hobbies for several weeks (Correct)
- C) Feeling nervous before a presentation (Incorrect)
- D) Having trouble sleeping the night before something big (Incorrect)
**Feedback (Correct):** "That's right! Persistent changes lasting 2+ weeks are worth discussing with someone."
**Feedback (Incorrect):** "Not quite. Short-term reactions to events are normal. Look for changes lasting 2+ weeks."

#### Card 6: APPLY
**Type:** Micro-action
**Text:** "This week, check in with yourself: How have you been sleeping? Eating? Feeling? If something's been off for a while, it's okay to talk to someone."
**CTA Button:** "Add 'Self Check-In' to Habits"

#### Card 7: CONNECT
**Type:** Programme Link
**Text:** "Need to talk to someone? The ALERT programme at NHG Polyclinics offers free, confidential mental health support for youth."
**CTA Button:** "Learn About ALERT →"
**Deep Link:** mindline.sg or NHG ALERT programme page

**Completion Screen:**
- "Lesson Complete!"
- XP earned: 10-18
- Mascot celebration animation
- "Share with a friend who might need this" (optional)

---

### 1.2 Moving Free

**Lesson Title:** "Move Your Mood"
**Duration:** ~2 minutes | **Cards:** 5 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Question
**Text:** "What if you could shake off stress—literally? Movement isn't just exercise. It's medicine for your mind."
**Illustration:** Character mid-dance/stretch with colorful emotion icons flowing out (stress clouds becoming happy icons)

#### Card 2: LEARN
**Type:** Information
**Text:** "When we move freely without counting reps or watching form, our body releases tension we didn't even know we were holding. It's not about fitness—it's about feeling."
**Illustration:** Character doing expressive arm movements, wavy lines showing flow and release

#### Card 3: LEARN
**Type:** Information
**Text:** "Moving Free uses guided movement and improvisation to help you tune into your body, process emotions, and find calm. No dance experience needed—just willingness to move!"
**Illustration:** Small group of diverse characters moving freely in circle, facilitator guiding

#### Card 4: CHECK
**Type:** Interactive Poll
**Question:** "When you're stressed, what does your body do?"
**Options:**
- Shoulders tense up
- Jaw clenches
- Stomach feels tight
- I hold my breath
**Feedback:** "You're already more aware than you think! Movement helps release exactly these physical stress responses."

#### Card 5: APPLY
**Type:** Micro-action
**Text:** "Try this now: Stand up, shake out your hands for 10 seconds, then roll your shoulders back 3 times. Notice how your body feels different."
**CTA Button:** "Done! ✓"

#### Card 6: CONNECT
**Type:** Programme Link
**Text:** "Want to explore more? Moving Free runs 5-session workshops in community centres across Singapore."
**CTA Button:** "Find Sessions Near Me →"
**Deep Link:** Health Kampung - Moving Free

---

### 1.3 mindSET! Series

**Lesson Title:** "The Power of 'Yet'"
**Duration:** ~2 minutes | **Cards:** 5 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Question
**Text:** "What's the difference between 'I can't do this' and 'I can't do this YET'? One tiny word changes everything."
**Illustration:** Two versions of same character - one slumped with X above head, one standing tall with lightbulb, connected by the word "YET"

#### Card 2: LEARN
**Type:** Information
**Text:** "A growth mindset means believing your abilities can develop through effort and learning. It's not about being positive all the time—it's about seeing challenges as chances to grow."
**Illustration:** Brain character lifting weights, getting stronger, with progress chart behind

#### Card 3: LEARN
**Type:** Information
**Text:** "When things get hard, a fixed mindset says 'I'm not smart enough.' A growth mindset says 'What can I try differently?' This shift helps you bounce back faster."
**Illustration:** Split screen - left shows character giving up at wall, right shows character finding ladder/creative solution

#### Card 4: CHECK
**Type:** Scenario Selection
**Question:** "Your project gets harsh feedback. Which response shows growth mindset?"
**Options:**
- A) "I knew I wasn't good at this." (Fixed)
- B) "The feedback stings, but what can I learn from it?" (Growth - Correct)
- C) "They just don't understand my work." (Fixed)
**Feedback:** "Growth mindset doesn't mean ignoring disappointment—it means learning from it."

#### Card 5: APPLY
**Type:** Micro-action
**Text:** "Next time you think 'I can't,' add 'yet' to the end. 'I can't code'—becomes 'I can't code yet.' Try it with one thing you're struggling with."
**CTA Button:** "I'll Try This ✓"

#### Card 6: CONNECT
**Type:** Programme Link
**Text:** "The mindSET! Series helps build these skills in schools and communities through NHG's Healthier Minds programme."
**CTA Button:** "Explore Healthier Minds →"

---

## PILLAR 2: NUTRITION & HEALTHY EATING

### 2.1 Walking Foodpedia

**Lesson Title:** "Hawker Centre Hacks"
**Duration:** ~3 minutes | **Cards:** 7 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Stat + Question
**Text:** "The average hawker meal can range from 400 to 1,200 calories. Can you spot the healthier choices?"
**Illustration:** Aerial view of hawker centre with various stalls, magnifying glass highlighting different dishes

#### Card 2: LEARN
**Type:** Information
**Text:** "Start by scanning the stall for 'Healthier Choice' logos. But even without the logo, you can make smarter picks by knowing what to look for."
**Illustration:** Close-up of hawker stall signage with Healthier Choice symbol highlighted, friendly hawker character

#### Card 3: LEARN
**Type:** Information
**Text:** "The 'My Healthy Plate' rule: Fill half with veggies, quarter with protein, quarter with carbs. At hawker centres, this might mean: Yong tau foo with lots of veg, soup-based instead of fried."
**Illustration:** Plate divided into sections with hawker food examples - vegetables, chicken, rice in correct proportions

#### Card 4: LEARN
**Type:** Information
**Text:** "Cooking methods matter! Steamed, boiled, or grilled > fried or braised in gravy. Asking for 'less oil' or 'gravy separate' is totally normal—hawkers hear it all the time."
**Illustration:** Side-by-side comparison - steamed fish (✓) vs deep fried fish (X), with calorie indicators

#### Card 5: CHECK
**Type:** Image Selection Quiz
**Question:** "You're at the economic rice stall. Which combination is the healthier choice?"
**Options:**
- A) Sweet & sour pork + fried egg + white rice (Incorrect)
- B) Steamed fish + stir-fried vegetables + brown rice (Correct)
- C) Curry chicken + tofu + white rice (Incorrect)
**Illustration:** Three plates shown as options
**Feedback:** "Steamed fish with veggies and brown rice wins! Less oil, more fibre, balanced nutrition."

#### Card 6: APPLY
**Type:** Micro-action
**Text:** "Next time you're at a hawker centre, try asking for one modification: 'less oil,' 'gravy on the side,' or swap to brown rice. Small changes add up!"
**CTA Button:** "I'll Try This Week ✓"

#### Card 7: CONNECT
**Type:** Programme Link
**Text:** "Want to learn more in person? Walking Foodpedia takes you on guided tours of hawker centres with a Health Coach!"
**CTA Button:** "Join Walking Foodpedia →"
**Deep Link:** Health Kampung - Walking Foodpedia

---

### 2.2 Make It Siew Dai

**Lesson Title:** "Bubble Tea Reality Check"
**Duration:** ~2.5 minutes | **Cards:** 6 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Shocking Stat
**Text:** "A regular bubble tea with pearls = 38g of sugar. That's almost 10 teaspoons in one cup. 😱"
**Illustration:** Bubble tea cup with sugar cubes stacking up next to it (10 cubes), shocked character face

#### Card 2: LEARN
**Type:** Information
**Text:** "High sugar intake is linked to Type 2 Diabetes, and Singapore has one of the highest rates in developed Asia. But you don't have to quit your favorites—just make smarter orders."
**Illustration:** Simple infographic showing sugar → blood glucose spike → health impacts, but with hopeful twist

#### Card 3: LEARN
**Type:** Information
**Text:** "'Siew dai' means 'less sweet' in Hokkien—and it's your secret weapon. Most shops can do 0%, 25%, 50%, or 75% sugar. Try going one level lower than your usual!"
**Illustration:** Sugar level slider graphic showing different percentages, friendly bubble tea shop character

#### Card 4: LEARN
**Type:** Information
**Text:** "Skip the pearls for fewer calories, or try healthier toppings like aloe vera or white pearls. Milk tea > fruit tea for sugar (fruit syrups are sneaky!)."
**Illustration:** Comparison of toppings with calorie indicators - pearls vs aloe vera vs coconut jelly

#### Card 5: CHECK
**Type:** Order Builder Quiz
**Question:** "Build the lower-sugar bubble tea order:"
**Options (Sugar Level):** 100% / 50% / 25% / 0%
**Options (Toppings):** Pearls / Aloe Vera / Extra Pearls / No Toppings
**Best Answer:** 25-50% sugar + Aloe Vera or No Toppings
**Feedback:** "Nice! That's about 60% less sugar than a regular order. Your body thanks you."

#### Card 6: APPLY
**Type:** Micro-action
**Text:** "Challenge: Next bubble tea run, order one sugar level lower than usual. Can you even taste the difference? Most people can't after a few tries!"
**CTA Button:** "Accept the Challenge ✓"

#### Card 7: CONNECT
**Type:** Programme Link
**Text:** "Make It Siew Dai workshops teach practical skills to prevent diabetes through daily food choices."
**CTA Button:** "Learn More →"
**Deep Link:** Health Kampung - Make It Siew Dai

---

### 2.3 Eat Right, Smile Bright

**Lesson Title:** "Your Teeth Know What You Eat"
**Duration:** ~2 minutes | **Cards:** 5 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Surprising Connection
**Text:** "What you eat doesn't just affect your waistline—it shows up in your smile. Your teeth are basically nutrition detectives."
**Illustration:** Smiling tooth character holding magnifying glass, looking at plate of food

#### Card 2: LEARN
**Type:** Information
**Text:** "Foods high in sugar and acid (yes, that includes bubble tea and citrus drinks) feed bacteria that cause cavities. But calcium-rich foods like milk and cheese actually help protect enamel!"
**Illustration:** Battle scene between good bacteria (cheese, milk shields) vs bad bacteria (sugar, acid attacks) on tooth surface

#### Card 3: LEARN
**Type:** Information
**Text:** "The My Healthy Plate approach isn't just for your body—it's for your teeth too. Crunchy vegetables like carrots help clean teeth naturally. Dairy provides calcium for strong enamel."
**Illustration:** Healthy plate with dental benefits labeled - veggies (natural cleaning), dairy (calcium), protein (repair)

#### Card 4: CHECK
**Type:** True/False
**Question:** "Which helps your teeth MORE?"
**Option A:** "Drinking orange juice throughout the day" (False - acid exposure!)
**Option B:** "Eating cheese after a sweet snack" (True - neutralizes acid)
**Feedback:** "Cheese is a teeth superhero! It neutralizes acids and provides calcium."

#### Card 5: APPLY
**Type:** Micro-action
**Text:** "Try this: End your next snack with a small piece of cheese or a sip of milk to protect your enamel. Your dentist will wonder what changed!"
**CTA Button:** "I'll Remember This ✓"

#### Card 6: CONNECT
**Type:** Programme Link
**Text:** "Eat Right, Smile Bright workshops combine nutrition and oral health tips with dietitians and dental therapists."
**CTA Button:** "Find a Workshop →"

---

## PILLAR 3: FITNESS & PHYSICAL ACTIVITY

### 3.1 KpopX Fitness

**Lesson Title:** "Dance Your Way Fit"
**Duration:** ~2 minutes | **Cards:** 5 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Fun Fact
**Text:** "What burns as many calories as running but feels like a party? K-pop dance workouts! 50 minutes = 400-600 calories gone. 🔥"
**Illustration:** Energetic characters dancing in K-pop style, colorful stage lights, heart rate and calorie counters floating

#### Card 2: LEARN
**Type:** Information
**Text:** "KpopX Fitness combines popular K-pop choreography with cardio intervals. No dance experience needed—the moves are designed to be catchy AND effective for fitness."
**Illustration:** Step-by-step silhouettes showing simple K-pop dance moves, with labels like "Easy to follow!"

#### Card 3: LEARN
**Type:** Information
**Text:** "Why it works: You're so focused on getting the moves right and vibing to the music that you forget you're exercising. That's the secret to actually sticking with fitness!"
**Illustration:** Brain character enjoying music vs brain character dreading treadmill - comparison showing enjoyment boosts consistency

#### Card 4: CHECK
**Type:** Poll
**Question:** "What's your biggest barrier to exercise?"
**Options:**
- It's boring
- I don't have time
- I feel awkward at gyms
- I don't know where to start
**Feedback:** "Whatever your answer, dance fitness addresses it—it's fun, social, and welcoming to beginners!"

#### Card 5: APPLY
**Type:** Micro-action
**Text:** "Put on your favorite K-pop song and just move for one song. No choreo needed—just let your body respond to the beat. That's the first step!"
**CTA Button:** "Done Dancing! 💃"

#### Card 6: CONNECT
**Type:** Programme Link
**Text:** "KpopX Fitness classes run weekly at Woodlands Health and community centres across Singapore. Join the party!"
**CTA Button:** "Find Classes Near Me →"
**Deep Link:** Health Kampung - KpopX Fitness

---

### 3.2 Resistance Band Training

**Lesson Title:** "Gym-Free Strength"
**Duration:** ~2.5 minutes | **Cards:** 6 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Myth Buster
**Text:** "Think you need a gym membership to build strength? A $10 resistance band can give you the same muscle workout—anywhere, anytime."
**Illustration:** Character working out in small HDB room with resistance band, equals sign to character in fancy gym, both showing same muscle growth

#### Card 2: LEARN
**Type:** Information
**Text:** "Resistance bands create tension throughout the entire movement—unlike dumbbells where gravity only works one direction. This means better muscle activation with lower injury risk."
**Illustration:** Diagram showing band tension (arrows in both directions) vs dumbbell (arrow only down)

#### Card 3: LEARN
**Type:** Information
**Text:** "Start with 3 basic moves: Bicep curls (arms), Squats with band above knees (legs), and Band pull-aparts (back/shoulders). 3 sets of 10 reps each = complete upper AND lower body workout."
**Illustration:** Three panels showing each exercise with simple stick figure demonstration

#### Card 4: LEARN
**Type:** Information
**Text:** "Band colors = resistance levels. Start light (yellow/red), progress to medium (green/blue), then heavy (black/silver). When 15 reps feels easy, move up!"
**Illustration:** Rainbow of resistance bands arranged by difficulty with character progressively moving up

#### Card 5: CHECK
**Type:** Matching Quiz
**Question:** "Match the benefit to the right exercise:"
**Items:**
- Bicep curls → Arm strength
- Banded squats → Leg power + stability
- Pull-aparts → Posture + shoulder health
**Feedback:** "You've got it! These three cover your whole body."

#### Card 6: APPLY
**Type:** Micro-action
**Text:** "No band yet? Try this: Clasp your hands together and pull outward for 10 seconds. You just did an isometric pull-apart! Feel that back engage?"
**CTA Button:** "Felt It! ✓"

#### Card 7: CONNECT
**Type:** Programme Link
**Text:** "Learn proper form with Resistance Band Training workshops through Health Kampung."
**CTA Button:** "Find a Workshop →"

---

### 3.3 Mobility Workshops

**Lesson Title:** "Move Better, Move More"
**Duration:** ~2 minutes | **Cards:** 5 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Self-Assessment
**Text:** "Can you touch your toes? Squat with heels flat? Turn your head fully both ways? Mobility = freedom to move without pain."
**Illustration:** Character attempting these movements with question marks, some showing stiffness

#### Card 2: LEARN
**Type:** Information
**Text:** "Mobility isn't just flexibility—it's your joints' ability to move through their full range with control. Poor mobility from sitting all day leads to back pain, injury risk, and moving like you're 60 at 25."
**Illustration:** Timeline showing desk worker gradually getting stiffer, with prevention arrow breaking the cycle

#### Card 3: LEARN
**Type:** Information
**Text:** "Good news: Mobility improves fast with consistency. Just 5 minutes of daily movement snacks (hip circles while waiting for MRT, shoulder rolls at your desk) makes a real difference."
**Illustration:** Clock showing "5 min" with various micro-mobility moves illustrated around it - office chair, MRT platform, home settings

#### Card 4: CHECK
**Type:** Select All That Apply
**Question:** "Which are signs you could benefit from mobility work?"
**Options:**
- ✓ Lower back aches after sitting
- ✓ Stiff neck from looking at phone
- ✓ Knees crack when you squat
- ✓ Shoulders round forward
**Feedback:** "If you checked any of these, you're not alone—and mobility work can help!"

#### Card 5: APPLY
**Type:** Micro-action
**Text:** "Try this now: Sit tall, drop your chin to chest, slowly roll your head in a circle 3 times each direction. That's a mobility snack! Set a reminder to do this hourly."
**CTA Button:** "Done! Set Reminder? 🔔"

#### Card 6: CONNECT
**Type:** Programme Link
**Text:** "NHG's Mobility Workshops with physiotherapists teach you a complete routine for lifelong movement freedom."
**CTA Button:** "Join a Workshop →"

---

## PILLAR 4: CHRONIC DISEASE PREVENTION

### 4.1 CDM - Diabetes

**Lesson Title:** "Know Your Numbers: Blood Sugar"
**Duration:** ~2.5 minutes | **Cards:** 6 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Startling Stat
**Text:** "1 in 3 Singaporeans will develop diabetes in their lifetime. But here's the thing—you can see it coming years in advance if you know what to look for."
**Illustration:** Three silhouette figures, one highlighted, with preventive shield appearing around it

#### Card 2: LEARN
**Type:** Information
**Text:** "Blood sugar (glucose) is fuel for your cells. But too much, too often, damages blood vessels and nerves over time. That's diabetes—and it affects eyes, kidneys, heart, and feet."
**Illustration:** Simple blood vessel diagram showing healthy vs damaged from high sugar, with organ icons affected

#### Card 3: LEARN
**Type:** Information
**Text:** "Key numbers to know: Fasting blood sugar under 6.0 mmol/L is normal. 6.1-6.9 is 'pre-diabetes' (warning zone). 7.0+ indicates diabetes. A simple blood test tells you where you stand."
**Illustration:** Number line/meter showing zones in green (normal), yellow (pre-diabetes), red (diabetes)

#### Card 4: LEARN
**Type:** Information
**Text:** "The earlier you catch pre-diabetes, the easier it is to reverse through diet and exercise. That's why screening matters—even if you feel fine."
**Illustration:** Two paths from pre-diabetes: one leading to reversal (healthy habits), one to diabetes (no changes)

#### Card 5: CHECK
**Type:** Number Recognition Quiz
**Question:** "Your friend's fasting blood sugar result is 6.5 mmol/L. What does this mean?"
**Options:**
- A) Normal, no worries (Incorrect)
- B) Pre-diabetes, time to take action (Correct)
- C) Diabetes, needs medication (Incorrect)
**Feedback:** "6.5 is in the pre-diabetes range—a critical window where lifestyle changes can prevent progression!"

#### Card 6: APPLY
**Type:** Micro-action
**Text:** "Do you know your last blood sugar reading? If not, it might be time for a health screening. Screen for Life covers this for Singaporeans!"
**CTA Button:** "Remind Me to Check"

#### Card 7: CONNECT
**Type:** Programme Link
**Text:** "NHG's Diabetes Management workshops teach you to monitor blood sugar and make sustainable lifestyle changes."
**CTA Button:** "Learn More →"

---

### 4.2 CDM - Cholesterol & Blood Pressure

**Lesson Title:** "The Silent Health Thieves"
**Duration:** ~2.5 minutes | **Cards:** 6 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Warning
**Text:** "High blood pressure and cholesterol are called 'silent killers' because you can't feel them—until something serious happens. Let's learn to outsmart them."
**Illustration:** Ninja-like characters (representing BP and cholesterol) sneaking toward heart, with spotlight revealing them

#### Card 2: LEARN
**Type:** Information
**Text:** "Blood pressure measures the force of blood against artery walls. Normal is below 120/80. High BP (140/90+) makes your heart work overtime and damages vessels over time."
**Illustration:** Simple pipe/pump diagram showing normal pressure vs high pressure stress on the system

#### Card 3: LEARN
**Type:** Information
**Text:** "Cholesterol isn't all bad—your body needs it. But too much LDL ('bad' cholesterol) builds up in arteries like gunk in a pipe. HDL ('good' cholesterol) helps clear it away."
**Illustration:** Artery cross-section showing LDL build-up vs HDL clearing, plumber character cleaning pipe

#### Card 4: LEARN
**Type:** Information
**Text:** "What raises your risk: Too much salt (BP), saturated fats (cholesterol), sitting all day (both). What helps: Movement, vegetables, fiber, managing stress."
**Illustration:** Scale showing risk factors on one side, protective factors on other

#### Card 5: CHECK
**Type:** Matching Quiz
**Question:** "Match the number to the right reading:"
**Items:**
- 120/80 → Healthy blood pressure
- Below 5.2 mmol/L → Healthy total cholesterol
- 140/90+ → High blood pressure (see doctor)
**Feedback:** "Knowing these numbers helps you understand your health screening results!"

#### Card 6: APPLY
**Type:** Micro-action
**Text:** "This week, try reducing one high-sodium food: instant noodles, canned soup, or processed meat. Your blood pressure will notice!"
**CTA Button:** "I'll Try This ✓"

#### Card 7: CONNECT
**Type:** Programme Link
**Text:** "Learn to monitor your own BP and understand cholesterol at NHG's CDM workshops."
**CTA Button:** "Find Workshops →"

---

### 4.3 SEED Framework

**Lesson Title:** "The 4 Pillars of Health Habits"
**Duration:** ~3 minutes | **Cards:** 7 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Framework Introduction
**Text:** "Sleep. Eat. Exercise. Device. These 4 pillars hold up your entire wellbeing. Get them right early, and you're set for life."
**Illustration:** Temple/building structure with 4 pillars labeled S-E-E-D, supporting a healthy character at top

#### Card 2: LEARN - SLEEP
**Type:** Information
**Text:** "SLEEP: Adults need 7-9 hours. Teens need 8-10. Screens before bed suppress melatonin (your sleep hormone). Try a 30-min wind-down without devices."
**Illustration:** Character in bed with phone far away, moon and stars, zzz symbols, clock showing healthy sleep time

#### Card 3: LEARN - EAT
**Type:** Information
**Text:** "EAT: Half your plate should be vegetables, a quarter protein, a quarter carbs. Breakfast matters—it kickstarts your metabolism and focus for the day."
**Illustration:** Healthy plate with Singapore-relevant foods, breakfast scene with character energized

#### Card 4: LEARN - EXERCISE
**Type:** Information
**Text:** "EXERCISE: Aim for 150 minutes of moderate activity per week—that's just 20 minutes a day! Walking counts. Dancing counts. Taking stairs counts."
**Illustration:** Weekly calendar with various activities filling the 150-minute goal, character collecting activity icons

#### Card 5: LEARN - DEVICE
**Type:** Information
**Text:** "DEVICE: Screen time over 4 hours daily is linked to worse mental health and sleep. Use Screen Time tools to set limits. Your eyes, posture, and brain will thank you."
**Illustration:** Character setting phone limits, then doing other activities - reading, outdoor walk, talking with friends

#### Card 6: CHECK
**Type:** Self-Assessment
**Question:** "Which SEED pillar needs the most work for you?"
**Options:**
- 😴 Sleep - I don't get enough
- 🥗 Eat - My diet could be better
- 🏃 Exercise - I'm too sedentary
- 📱 Device - I'm on screens too much
**Feedback:** "Knowing where to focus is the first step. Pick ONE thing to improve this week."

#### Card 7: APPLY
**Type:** Micro-action
**Text:** "Based on your answer, set one small goal: Sleep 15 minutes earlier, add one vegetable to dinner, take a 10-minute walk, or set a screen limit. Start small!"
**CTA Button:** "Add to My Habits ✓"

#### Card 8: CONNECT
**Type:** Programme Link
**Text:** "The SEED Framework is part of GrowWell SG—helping young Singaporeans build healthy habits early."
**CTA Button:** "Explore GrowWell SG →"

---

## PILLAR 5: CAREGIVER SKILLS

### 5.1 Wheelchair Handling

**Lesson Title:** "Safe Wheelchair Basics"
**Duration:** ~2.5 minutes | **Cards:** 6 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Scenario
**Text:** "Your grandparent just got a wheelchair. Do you know how to safely help them get around—including navigating kerbs and slopes?"
**Illustration:** Young person looking uncertain next to elderly person in wheelchair, urban Singapore environment

#### Card 2: LEARN
**Type:** Information
**Text:** "Before any trip: Check wheel locks work. Ensure footrests are secure. Check tire pressure (if pneumatic). These 30-second checks prevent accidents."
**Illustration:** Checklist graphic with each safety point illustrated on wheelchair diagram

#### Card 3: LEARN
**Type:** Information
**Text:** "Going UP a kerb: Tilt wheelchair back by pressing foot bar, lift front wheels onto kerb, then push rear wheels up. Going DOWN: Back down slowly, rear wheels first."
**Illustration:** Step-by-step sequence showing proper technique, arrows indicating direction

#### Card 4: LEARN
**Type:** Information
**Text:** "On slopes: Always face forward going UP (push). Face backward going DOWN (control descent by walking backward). Never let the wheelchair roll freely!"
**Illustration:** Slope diagram showing correct positioning and direction for up vs down

#### Card 5: CHECK
**Type:** Scenario Quiz
**Question:** "You're approaching a downward slope with your grandmother. What's the safest approach?"
**Options:**
- A) Face her forward and walk behind, holding handles (Incorrect - less control)
- B) Turn her to face backward, you walk backward down the slope (Correct)
- C) Let her wheel herself while you walk beside (Incorrect - dangerous)
**Feedback:** "Walking backward gives you maximum control on descents. Safety first!"

#### Card 6: APPLY
**Type:** Micro-action
**Text:** "If you have a wheelchair user in your life, practice the kerb technique in a safe area together. Confidence comes from practice!"
**CTA Button:** "I'll Practice This ✓"

#### Card 7: CONNECT
**Type:** Programme Link
**Text:** "NHG's Wheelchair Handling workshops provide hands-on training with occupational therapists."
**CTA Button:** "Register for Training →"

---

### 5.2 Create a Safer Home

**Lesson Title:** "Fall-Proof Your Home"
**Duration:** ~2.5 minutes | **Cards:** 6 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Alarming Stat
**Text:** "Falls are the #1 cause of injury death for seniors in Singapore. Most happen at home—and most are preventable."
**Illustration:** HDB floor plan with hazard icons highlighted in various rooms

#### Card 2: LEARN
**Type:** Information
**Text:** "Bathroom is the danger zone: Wet floors + hard surfaces + getting up from sitting = recipe for falls. Grab bars, non-slip mats, and proper lighting are game-changers."
**Illustration:** Bathroom before/after - hazardous vs safe with grab bars, mat, and light installed

#### Card 3: LEARN
**Type:** Information
**Text:** "Hallway hazards: Loose rugs, cluttered walkways, poor lighting, trailing cables. The rule: Clear paths wide enough for a walking frame, light switches at both ends."
**Illustration:** Hallway showing common hazards with X marks, then same hallway cleared with check marks

#### Card 4: LEARN
**Type:** Information
**Text:** "Bedroom basics: Night light path to bathroom, phone within reach from bed, bed at right height (knees at 90° when sitting). Consider bed rails if needed."
**Illustration:** Safe bedroom setup with each element labeled

#### Card 5: CHECK
**Type:** Spot the Hazard
**Question:** "What's the biggest fall risk in this image?"
**Image:** Living room with: trailing TV cable, small rug, good lighting, clear walkway
**Answer:** Trailing cable + loose rug are both hazards
**Feedback:** "Loose rugs and trailing cables are top trip hazards. Secure or remove them!"

#### Card 6: APPLY
**Type:** Micro-action
**Text:** "Do a quick walk-through of one room where your elderly family member spends time. Spot one hazard? Fix it this week."
**CTA Button:** "I Found Something to Fix ✓"

#### Card 7: CONNECT
**Type:** Programme Link
**Text:** "Create a Safer Home workshops include a complete home safety checklist and info on modification resources."
**CTA Button:** "Get the Checklist →"

---

### 5.3 Medication Habits

**Lesson Title:** "Medication Made Simple"
**Duration:** ~2.5 minutes | **Cards:** 6 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Problem Statement
**Text:** "Elderly patients often take 5+ medications daily. Missing doses, wrong timing, or mixing them up can be dangerous. Can you help manage this safely?"
**Illustration:** Overwhelmed character surrounded by multiple medication bottles, confused expression

#### Card 2: LEARN
**Type:** Information
**Text:** "Reading medication labels: Look for drug name, dosage, frequency (how often), timing (before/after meals), and expiry date. All crucial info!"
**Illustration:** Zoomed medication label with each element highlighted and explained

#### Card 3: LEARN
**Type:** Information
**Text:** "The pillbox system: Sort medications by day and time (morning, afternoon, evening, bedtime). Do this weekly to catch any running-low supplies early."
**Illustration:** Weekly pillbox being filled, with calendar reminder icon

#### Card 4: LEARN
**Type:** Information
**Text:** "Storage matters: Most medications should be kept cool and dry (NOT bathroom). Some need refrigeration. Keep in original packaging until sorting. Check expiry dates monthly."
**Illustration:** Do's and Don'ts of medication storage - proper cabinet vs humid bathroom

#### Card 5: CHECK
**Type:** Label Reading Quiz
**Question:** "A medication says 'Take 1 tablet BD with food.' What does BD mean?"
**Options:**
- A) Before dinner (Incorrect)
- B) Twice daily (Correct)
- C) At bedtime (Incorrect)
**Feedback:** "BD = bis die = twice daily. Common abbreviations: OD (once daily), TDS (three times daily), QID (four times daily)."

#### Card 6: APPLY
**Type:** Micro-action
**Text:** "Help create a simple medication list for an elderly family member: Drug name, what it's for, when to take it. Keep a copy in their wallet for emergencies."
**CTA Button:** "Create Medication List ✓"

#### Card 7: CONNECT
**Type:** Programme Link
**Text:** "NHG's Medication Habits workshops are led by pharmacists who teach hands-on pillbox packing and label reading."
**CTA Button:** "Find a Workshop →"

---

## PILLAR 6: COMMUNITY LEADERSHIP & INNOVATION

### 6.1 My HealthHub Buddy

**Lesson Title:** "Be a Digital Health Mentor"
**Duration:** ~2 minutes | **Cards:** 5 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Call to Action
**Text:** "You navigate apps effortlessly. Your grandparents? Not so much. What if your tech skills could literally improve their health?"
**Illustration:** Young person and elderly person looking at phone together, lightbulb moment

#### Card 2: LEARN
**Type:** Information
**Text:** "Digital health literacy means knowing how to access health information online, use health apps, and navigate telehealth. For seniors, this can mean independence and better health outcomes."
**Illustration:** Icons showing health app, video call with doctor, online appointment booking

#### Card 3: LEARN
**Type:** Information
**Text:** "As a HealthHub Buddy, you teach seniors to use the HealthHub app: checking medical records, booking appointments, accessing health tips. Small skills, big impact on their lives."
**Illustration:** Phone screen showing HealthHub features, senior character successfully using it

#### Card 4: CHECK
**Type:** Reflection
**Question:** "Which skill would help your elderly family member most?"
**Options:**
- Booking polyclinic appointments online
- Checking their medication records
- Video calling with their doctor
- Reading health articles
**Feedback:** "All of these are valuable! Start with what they need most and build from there."

#### Card 5: APPLY
**Type:** Micro-action
**Text:** "This week, show one elderly person in your life ONE health app feature. It could be HealthHub, NHG Health App, or even just setting a medication reminder."
**CTA Button:** "I'll Do This ✓"

#### Card 6: CONNECT
**Type:** Programme Link
**Text:** "Join My HealthHub Buddy through Youth Corps Singapore and NHG Polyclinics—earn volunteer hours while making a real difference!"
**CTA Button:** "Sign Up to Volunteer →"

---

### 6.2 yumCHA Sessions

**Lesson Title:** "Lead Health in Your Community"
**Duration:** ~2 minutes | **Cards:** 5 | **XP:** 10-18

#### Card 1: HOOK
**Type:** Aspiration
**Text:** "What if you could lead health initiatives in your school, workplace, or neighborhood? Leadership skills + health knowledge = community impact."
**Illustration:** Character at front of group, facilitating wellness activity, diverse participants engaged

#### Card 2: LEARN
**Type:** Information
**Text:** "yumCHA (Youth Mobilisation for Community Health Action) trains volunteer leaders to design and run their own health programmes. You learn facilitation, project planning, and community engagement."
**Illustration:** Training session scene with presentation, group discussion, planning boards

#### Card 3: LEARN
**Type:** Information
**Text:** "Past projects include: Campus mental wellness days, HDB block fitness groups, hawker centre healthy eating tours, and intergenerational cooking classes. Your idea could be next!"
**Illustration:** Collage of different youth-led health initiatives in action

#### Card 4: CHECK
**Type:** Brainstorm
**Question:** "If you could run ONE health initiative in your community, what would it be?"
**Options:**
- Fitness challenge for my school/workplace
- Mental wellness peer support group
- Healthy eating workshop
- Health screening awareness campaign
**Feedback:** "Great thinking! yumCHA can help you turn ideas like this into reality."

#### Card 5: APPLY
**Type:** Micro-action
**Text:** "Think of ONE health improvement your community needs. Write it down. That's the first step to making change happen."
**CTA Button:** "I Have an Idea ✓"

#### Card 6: CONNECT
**Type:** Programme Link
**Text:** "yumCHA Sessions at the Centre for Health Activation train the next generation of community health leaders. Interested?"
**CTA Button:** "Learn About yumCHA →"

---

# PART 3: GRAPHICS & ASSET REQUIREMENTS

## 3.1 Master Asset List by Programme

### PILLAR 1: STRESS & MENTAL WELLNESS

#### 1.1 ALERT Programme
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| ALERT-01 | Hook: Young person at desk with thought bubbles | Late night study scene, stress visible |
| ALERT-02 | Learn: Character in dim bedroom | Depression representation - lying in bed daytime |
| ALERT-03 | Learn: Character with thought spirals | Anxiety visualization - racing thoughts |
| ALERT-04 | Learn: Friendly medical professional | Diverse, young-looking doctor, polyclinic setting |
| ALERT-05 | Check: Four emotion states (quiz options) | Happy, prolonged sad, nervous, short-term worried |
| ALERT-06 | Apply: Self-check illustration | Mirror/reflection concept, journaling |
| ALERT-07 | Connect: mindline.sg/ALERT logo treatment | Programme branding integration |

#### 1.2 Moving Free
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| MOVE-01 | Hook: Stress-to-joy transformation | Character dancing, stress clouds becoming happy |
| MOVE-02 | Learn: Free movement flow | Wavy lines showing release, arm movements |
| MOVE-03 | Learn: Group session | Diverse characters moving in circle |
| MOVE-04 | Check: Body stress map | Figure with tension points highlighted |
| MOVE-05 | Apply: Shake it out prompt | Hands shaking, shoulders rolling |

#### 1.3 mindSET! Series
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| MIND-01 | Hook: "Yet" transformation | Split character - defeated vs empowered |
| MIND-02 | Learn: Brain character exercising | Growth mindset metaphor |
| MIND-03 | Learn: Wall vs ladder | Fixed vs growth mindset response |
| MIND-04 | Check: Feedback scenario | Character receiving criticism |

---

### PILLAR 2: NUTRITION & HEALTHY EATING

#### 2.1 Walking Foodpedia
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| FOOD-01 | Hook: Hawker centre aerial | Birds-eye food court, magnifying glass |
| FOOD-02 | Learn: Healthier Choice logo | Stall signage close-up |
| FOOD-03 | Learn: My Healthy Plate hawker | Plate with local food divisions |
| FOOD-04 | Learn: Cooking method comparison | Steamed vs fried fish side-by-side |
| FOOD-05 | Check: Three economic rice plates | Quiz options A, B, C |
| FOOD-06 | Apply: Hawker ordering scene | Character asking "less oil" |
| FOOD-07 | Connect: Walking tour group | Health Coach with participants |

#### 2.2 Make It Siew Dai
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| SIEW-01 | Hook: Bubble tea sugar stack | 10 sugar cubes visual |
| SIEW-02 | Learn: Sugar-diabetes connection | Simple infographic flow |
| SIEW-03 | Learn: Sugar level slider | 0-100% percentage visual |
| SIEW-04 | Learn: Toppings comparison | Pearls vs aloe vera calories |
| SIEW-05 | Check: Order builder interface | Interactive selection mock |

#### 2.3 Eat Right, Smile Bright
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| SMILE-01 | Hook: Tooth detective | Cute tooth with magnifying glass |
| SMILE-02 | Learn: Tooth bacteria battle | Good vs bad bacteria on enamel |
| SMILE-03 | Learn: Healthy plate dental | Food with dental benefit labels |
| SMILE-04 | Check: True/false food options | OJ vs cheese comparison |

---

### PILLAR 3: FITNESS & PHYSICAL ACTIVITY

#### 3.1 KpopX Fitness
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| KPOP-01 | Hook: Dance fitness celebration | Colorful, energetic, K-pop aesthetic |
| KPOP-02 | Learn: Dance move sequence | Simple silhouette steps |
| KPOP-03 | Learn: Enjoyment vs treadmill | Brain comparison |
| KPOP-04 | Connect: Class scene | Group dancing together |

#### 3.2 Resistance Band Training
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| BAND-01 | Hook: HDB room = gym | Small space workout |
| BAND-02 | Learn: Tension diagram | Physics of band resistance |
| BAND-03 | Learn: Three exercises | Bicep, squat, pull-apart |
| BAND-04 | Learn: Color progression | Band difficulty rainbow |

#### 3.3 Mobility Workshops
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| MOBI-01 | Hook: Self-assessment poses | Touch toes, squat, head turn |
| MOBI-02 | Learn: Desk worker stiffness | Timeline degradation |
| MOBI-03 | Learn: Movement snacks | 5-min clock with micro-moves |
| MOBI-04 | Apply: Neck roll guide | Step-by-step exercise |

---

### PILLAR 4: CHRONIC DISEASE PREVENTION

#### 4.1 CDM - Diabetes
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| DIAB-01 | Hook: 1 in 3 statistic | Silhouettes with preventive shield |
| DIAB-02 | Learn: Blood vessel diagram | Healthy vs damaged |
| DIAB-03 | Learn: Blood sugar meter | Zones color-coded |
| DIAB-04 | Learn: Two paths from pre-diabetes | Reversal vs progression |

#### 4.2 CDM - Cholesterol & BP
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| CHOL-01 | Hook: Silent killers ninja | BP/cholesterol as sneaky threats |
| CHOL-02 | Learn: Pipe pressure diagram | BP mechanics |
| CHOL-03 | Learn: Artery plumber | LDL buildup, HDL cleaning |
| CHOL-04 | Learn: Risk factor scale | Balanced see-saw |

#### 4.3 SEED Framework
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| SEED-01 | Hook: Four pillar temple | S-E-E-D supporting health |
| SEED-02 | Learn: Sleep scene | Bedroom, phone away, moon |
| SEED-03 | Learn: Eat healthy plate | Singapore breakfast |
| SEED-04 | Learn: Exercise calendar | Activity icon collection |
| SEED-05 | Learn: Device limits | Screen time alternative activities |

---

### PILLAR 5: CAREGIVER SKILLS

#### 5.1 Wheelchair Handling
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| WHEEL-01 | Hook: Uncertain helper | Young + elderly + wheelchair |
| WHEEL-02 | Learn: Safety checklist | Wheelchair diagram |
| WHEEL-03 | Learn: Kerb technique | Step-by-step up/down |
| WHEEL-04 | Learn: Slope navigation | Direction diagrams |

#### 5.2 Create a Safer Home
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| HOME-01 | Hook: HDB hazard map | Floor plan with danger icons |
| HOME-02 | Learn: Bathroom before/after | Safety modifications |
| HOME-03 | Learn: Hallway hazards | Clear vs cluttered |
| HOME-04 | Learn: Bedroom setup | Safe sleep environment |
| HOME-05 | Check: Spot the hazard | Living room scene |

#### 5.3 Medication Habits
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| MEDS-01 | Hook: Overwhelmed with bottles | Multiple medications chaos |
| MEDS-02 | Learn: Label anatomy | Zoomed medication label |
| MEDS-03 | Learn: Pillbox system | Weekly organizer |
| MEDS-04 | Learn: Storage do's/don'ts | Cabinet vs bathroom |

---

### PILLAR 6: COMMUNITY LEADERSHIP

#### 6.1 My HealthHub Buddy
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| BUDDY-01 | Hook: Intergenerational tech moment | Youth + senior + phone |
| BUDDY-02 | Learn: Digital health icons | App features illustration |
| BUDDY-03 | Learn: HealthHub success | Senior using app confidently |

#### 6.2 yumCHA Sessions
| Asset ID | Description | Style Notes |
|----------|-------------|-------------|
| YCHA-01 | Hook: Youth leader facilitating | Group health activity |
| YCHA-02 | Learn: Training session | Presentation, planning |
| YCHA-03 | Learn: Project collage | Various youth initiatives |

---

## 3.2 Asset Style Guide for AI Generation

### Character Design Specifications

```
STYLE PROMPT TEMPLATE:
"Flat 2D vector illustration, Duolingo style, [DESCRIPTION], 
simple geometric shapes, bold colors, white/minimal background, 
big expressive eyes, rounded features, Singapore context, 
inclusive diverse representation, clean lines, no gradients"
```

### Color Application Rules
- **Backgrounds:** Solid colors or simple patterns
- **Characters:** Maximum 3-4 colors per character
- **Highlights:** Golden yellow (#FFC800) for emphasis
- **Health positive:** Success green (#58CC02)
- **Caution/warning:** Warm coral (#FF6B6B)
- **Information:** Sky blue (#1CB0F6)

### Scene Complexity Limits
- Maximum 4 distinct elements per illustration
- One clear focal point
- Minimal environmental detail
- Consistent lighting (flat, no shadows)

---

## 3.3 Animation Specifications

### Lesson Card Transitions
- **Card flip:** 200ms ease-in-out
- **Progress bar fill:** 300ms linear
- **Element entrance:** 150ms fade + slide up

### Completion Celebration
- **Confetti burst:** 1.5s duration
- **XP counter:** Number animation 500ms
- **Mascot bounce:** 3 bounces, 800ms total

### Interactive Elements
- **Quiz option tap:** 100ms scale (0.95)
- **Correct answer:** Green pulse, 300ms
- **Incorrect answer:** Red shake, 200ms

---

# PART 4: IMPLEMENTATION NOTES

## 4.1 Content Management

### Lesson Data Structure
```json
{
  "lesson_id": "FOOD-HAWKER-01",
  "pillar": "nutrition",
  "programme": "walking_foodpedia",
  "title": "Hawker Centre Hacks",
  "duration_seconds": 180,
  "base_xp": 10,
  "cards": [
    {
      "card_number": 1,
      "type": "hook",
      "content": {...},
      "asset_id": "FOOD-01"
    }
  ],
  "programme_link": {
    "name": "Walking Foodpedia",
    "health_kampung_id": "WF001",
    "deep_link": "nhghealth://healthkampung/programme/WF001"
  }
}
```

### Preference Integration
- User pillar preferences stored in user profile
- Lesson feed filtered by selected pillars
- Notifications respect pillar preferences
- "Explore other pillars" suggestions for discovery

## 4.2 Gamification Integration

### Streak Contribution
- 1 lesson completed = streak maintained for day
- Lessons contribute to daily habit completion
- Multiple lessons = bonus XP (diminishing returns)

### Badge Progression per Pillar
| Badge Level | Lessons Completed | Badge Name Example |
|-------------|-------------------|-------------------|
| Level 1 | 3 lessons | "Nutrition Newbie" |
| Level 2 | 10 lessons | "Hawker Helper" |
| Level 3 | 25 lessons | "Food Wisdom Master" |

## 4.3 Analytics & Tracking

### Key Metrics
- Lesson completion rate by pillar
- Quiz accuracy rates
- Apply card engagement (CTA clicks)
- Connect card conversion (programme sign-ups)
- Time spent per card type

### A/B Testing Opportunities
- Hook card variations
- Quiz format types
- Apply card CTA wording
- Completion celebration designs

---

# APPENDIX: Quick Reference

## Lesson Count Summary

| Pillar | Programmes | Lessons Defined |
|--------|------------|-----------------|
| 1. Stress & Mental Wellness | 3 | 3 |
| 2. Nutrition & Healthy Eating | 3 | 3 |
| 3. Fitness & Physical Activity | 3 | 3 |
| 4. Chronic Disease Prevention | 3 | 3 |
| 5. Caregiver Skills | 3 | 3 |
| 6. Community Leadership | 2 | 2 |
| **TOTAL** | **17** | **17** |

## Total Asset Requirements

| Category | Count |
|----------|-------|
| Hook illustrations | 17 |
| Learn illustrations | ~45 |
| Check/Quiz graphics | ~20 |
| Apply/Connect graphics | ~17 |
| **Total unique assets** | **~99** |

---

*Document Version: 1.0*
*Last Updated: January 2026*
*Purpose: ENHGAGE Learning Feature Development Specification*
