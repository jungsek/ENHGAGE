// Lesson Data: All 17 lessons across 6 health pillars
// Content sourced from ENHGAGE Learning Feature Full Plan

import { Lesson } from "@/types/LessonTypes";

// Placeholder illustration URLs - will be replaced with actual assets
const ILLUSTRATIONS = {
    // Stress & Mental Wellness
    stressed_student: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    person_in_bed: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop",
    anxiety_thoughts: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=300&fit=crop",
    friendly_doctor: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
    self_check: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
    movement_dance: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    group_movement: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    growth_mindset: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    brain_exercise: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",

    // Nutrition
    hawker_centre: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    healthy_plate: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    cooking_methods: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    bubble_tea: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop",
    sugar_cubes: "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?w=400&h=300&fit=crop",
    teeth_smile: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
    dairy_foods: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop",

    // Fitness
    kpop_dance: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400&h=300&fit=crop",
    dance_class: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400&h=300&fit=crop",
    resistance_band: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=400&h=300&fit=crop",
    hdb_workout: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
    mobility_stretch: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    desk_worker: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop",

    // Chronic Disease
    diabetes_stat: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
    blood_sugar: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop",
    heart_health: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=300&fit=crop",
    bp_monitor: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    seed_pillars: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
    sleep_scene: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop",

    // Caregiver
    wheelchair: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    elderly_care: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    home_safety: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    bathroom_safety: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
    medications: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
    pillbox: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",

    // Community
    intergenerational: "https://images.unsplash.com/photo-1516733968668-dbdce39c0651?w=400&h=300&fit=crop",
    health_app: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    youth_leader: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    community_health: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
};

// ============================================
// PILLAR 1: STRESS & MENTAL WELLNESS
// ============================================

export const ALERT_LESSON: Lesson = {
    id: "ALERT-01",
    pillar: "stress_mental",
    programme: "alert",
    title: "Know Your Warning Signs",
    subtitle: "ALERT Programme",
    durationMinutes: 2.5,
    baseXP: 10,
    cards: [
        {
            id: "alert-01-hook",
            type: "hook",
            hookType: "stat",
            text: "1 in 3 youth in Singapore report feeling stressed 'most of the time.' Do you know what signs to look out for?",
            illustration: ILLUSTRATIONS.stressed_student,
        },
        {
            id: "alert-01-learn-1",
            type: "learn",
            text: "Your mind sends signals when it's struggling. Depression might show up as feeling hopeless, losing interest in things you used to enjoy, or changes in sleep and appetite.",
            illustration: ILLUSTRATIONS.person_in_bed,
        },
        {
            id: "alert-01-learn-2",
            type: "learn",
            text: "Anxiety can feel like constant worry, racing thoughts, or physical symptoms like a tight chest or upset stomach. These feelings lasting more than 2 weeks are worth checking out.",
            illustration: ILLUSTRATIONS.anxiety_thoughts,
        },
        {
            id: "alert-01-learn-3",
            type: "learn",
            text: "The good news? Help is available at every NHG Polyclinic through the ALERT programme. It's confidential, and you'll work with doctors and counsellors who get it.",
            illustration: ILLUSTRATIONS.friendly_doctor,
        },
        {
            id: "alert-01-check",
            type: "check",
            quizType: "multiple_choice",
            question: "Which of these could be a warning sign worth checking out?",
            options: [
                { id: "opt-a", text: "Feeling sad for a day after a bad exam", isCorrect: false },
                { id: "opt-b", text: "Losing interest in friends and hobbies for several weeks", isCorrect: true },
                { id: "opt-c", text: "Feeling nervous before a presentation", isCorrect: false },
                { id: "opt-d", text: "Having trouble sleeping the night before something big", isCorrect: false },
            ],
            feedbackCorrect: "That's right! Persistent changes lasting 2+ weeks are worth discussing with someone.",
            feedbackIncorrect: "Not quite. Short-term reactions to events are normal. Look for changes lasting 2+ weeks.",
        },
        {
            id: "alert-01-apply",
            type: "apply",
            text: "This week, check in with yourself: How have you been sleeping? Eating? Feeling? If something's been off for a while, it's okay to talk to someone.",
            ctaText: "Add 'Self Check-In' to Habits",
            ctaAction: "add_habit",
            illustration: ILLUSTRATIONS.self_check,
        },
        {
            id: "alert-01-connect",
            type: "connect",
            text: "Need to talk to someone? The ALERT programme at NHG Polyclinics offers free, confidential mental health support for youth.",
            ctaText: "Learn About ALERT",
            programmeName: "ALERT Programme",
            deepLink: "https://mindline.sg",
        },
    ],
    programmeLink: {
        name: "ALERT Programme",
        deepLink: "https://mindline.sg",
    },
};

export const MOVING_FREE_LESSON: Lesson = {
    id: "MOVE-01",
    pillar: "stress_mental",
    programme: "moving_free",
    title: "Move Your Mood",
    subtitle: "Moving Free",
    durationMinutes: 2,
    baseXP: 20,
    cards: [
        {
            id: "move-01-hook",
            type: "hook",
            hookType: "question",
            text: "What if you could shake off stress—literally? Movement isn't just exercise. It's medicine for your mind.",
            illustration: ILLUSTRATIONS.movement_dance,
        },
        {
            id: "move-01-learn-1",
            type: "learn",
            text: "When we move freely without counting reps or watching form, our body releases tension we didn't even know we were holding. It's not about fitness—it's about feeling.",
            illustration: ILLUSTRATIONS.movement_dance,
        },
        {
            id: "move-01-learn-2",
            type: "learn",
            text: "Moving Free uses guided movement and improvisation to help you tune into your body, process emotions, and find calm. No dance experience needed—just willingness to move!",
            illustration: ILLUSTRATIONS.group_movement,
        },
        {
            id: "move-01-check",
            type: "check",
            quizType: "poll",
            question: "When you're stressed, what does your body do?",
            options: [
                { id: "opt-a", text: "Shoulders tense up", isCorrect: true },
                { id: "opt-b", text: "Jaw clenches", isCorrect: true },
                { id: "opt-c", text: "Stomach feels tight", isCorrect: true },
                { id: "opt-d", text: "I hold my breath", isCorrect: true },
            ],
            feedbackCorrect: "You're already more aware than you think! Movement helps release exactly these physical stress responses.",
            feedbackIncorrect: "You're already more aware than you think! Movement helps release exactly these physical stress responses.",
        },
        {
            id: "move-01-apply",
            type: "apply",
            text: "Try this now: Stand up, shake out your hands for 10 seconds, then roll your shoulders back 3 times. Notice how your body feels different.",
            ctaText: "Done!",
            ctaAction: "done",
        },
        {
            id: "move-01-connect",
            type: "connect",
            text: "Want to explore more? Moving Free runs 5-session workshops in community centres across Singapore.",
            ctaText: "Find Sessions Near Me",
            programmeName: "Moving Free",
            deepLink: "https://www.nhghealth.com.sg/residents/community/workshop-activities/Move-Exercise4",
        },
    ],
    programmeLink: {
        name: "Moving Free",
        deepLink: "https://www.nhghealth.com.sg/residents/community/workshop-activities/Move-Exercise4",
    },
};

export const MINDSET_LESSON: Lesson = {
    id: "MIND-01",
    pillar: "stress_mental",
    programme: "mindset",
    title: "The Power of 'Yet'",
    subtitle: "mindSET! Series",
    durationMinutes: 2,
    baseXP: 30,
    cards: [
        {
            id: "mind-01-hook",
            type: "hook",
            hookType: "question",
            text: "What's the difference between 'I can't do this' and 'I can't do this YET'? One tiny word changes everything.",
            illustration: ILLUSTRATIONS.growth_mindset,
        },
        {
            id: "mind-01-learn-1",
            type: "learn",
            text: "A growth mindset means believing your abilities can develop through effort and learning. It's not about being positive all the time—it's about seeing challenges as chances to grow.",
            illustration: ILLUSTRATIONS.brain_exercise,
        },
        {
            id: "mind-01-learn-2",
            type: "learn",
            text: "When things get hard, a fixed mindset says 'I'm not smart enough.' A growth mindset says 'What can I try differently?' This shift helps you bounce back faster.",
            illustration: ILLUSTRATIONS.growth_mindset,
        },
        {
            id: "mind-01-check",
            type: "check",
            quizType: "scenario",
            question: "Your project gets harsh feedback. Which response shows growth mindset?",
            options: [
                { id: "opt-a", text: "\"I knew I wasn't good at this.\"", isCorrect: false },
                { id: "opt-b", text: "\"The feedback stings, but what can I learn from it?\"", isCorrect: true },
                { id: "opt-c", text: "\"They just don't understand my work.\"", isCorrect: false },
            ],
            feedbackCorrect: "Growth mindset doesn't mean ignoring disappointment—it means learning from it.",
            feedbackIncorrect: "Growth mindset doesn't mean ignoring disappointment—it means learning from it.",
        },
        {
            id: "mind-01-apply",
            type: "apply",
            text: "Next time you think 'I can't,' add 'yet' to the end. 'I can't code'—becomes 'I can't code yet.' Try it with one thing you're struggling with.",
            ctaText: "I'll Try This",
            ctaAction: "done",
        },
        {
            id: "mind-01-connect",
            type: "connect",
            text: "The mindSET! Series helps build these skills in schools and communities through NHG's Healthier Minds programme.",
            ctaText: "Explore Healthier Minds",
            programmeName: "mindSET! Series",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "mindSET! Series",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

// ============================================
// PILLAR 2: NUTRITION & HEALTHY EATING
// ============================================

export const WALKING_FOODPEDIA_LESSON: Lesson = {
    id: "FOOD-01",
    pillar: "nutrition",
    programme: "walking_foodpedia",
    title: "Hawker Centre Hacks",
    subtitle: "Walking Foodpedia",
    durationMinutes: 3,
    baseXP: 10,
    cards: [
        {
            id: "food-01-hook",
            type: "hook",
            hookType: "stat",
            text: "The average hawker meal can range from 400 to 1,200 calories. Can you spot the healthier choices?",
            illustration: ILLUSTRATIONS.hawker_centre,
        },
        {
            id: "food-01-learn-1",
            type: "learn",
            text: "Start by scanning the stall for 'Healthier Choice' logos. But even without the logo, you can make smarter picks by knowing what to look for.",
            illustration: ILLUSTRATIONS.hawker_centre,
        },
        {
            id: "food-01-learn-2",
            type: "learn",
            text: "The 'My Healthy Plate' rule: Fill half with veggies, quarter with protein, quarter with carbs. At hawker centres, this might mean: Yong tau foo with lots of veg, soup-based instead of fried.",
            illustration: ILLUSTRATIONS.healthy_plate,
        },
        {
            id: "food-01-learn-3",
            type: "learn",
            text: "Cooking methods matter! Steamed, boiled, or grilled > fried or braised in gravy. Asking for 'less oil' or 'gravy separate' is totally normal—hawkers hear it all the time.",
            illustration: ILLUSTRATIONS.cooking_methods,
        },
        {
            id: "food-01-check",
            type: "check",
            quizType: "multiple_choice",
            question: "You're at the economic rice stall. Which combination is the healthier choice?",
            options: [
                { id: "opt-a", text: "Sweet & sour pork + fried egg + white rice", isCorrect: false },
                { id: "opt-b", text: "Steamed fish + stir-fried vegetables + brown rice", isCorrect: true },
                { id: "opt-c", text: "Curry chicken + tofu + white rice", isCorrect: false },
            ],
            feedbackCorrect: "Steamed fish with veggies and brown rice wins! Less oil, more fibre, balanced nutrition.",
            feedbackIncorrect: "Steamed fish with veggies and brown rice would be better! Less oil, more fibre, balanced nutrition.",
        },
        {
            id: "food-01-apply",
            type: "apply",
            text: "Next time you're at a hawker centre, try asking for one modification: 'less oil,' 'gravy on the side,' or swap to brown rice. Small changes add up!",
            ctaText: "I'll Try This Week",
            ctaAction: "done",
        },
        {
            id: "food-01-connect",
            type: "connect",
            text: "Want to learn more in person? Walking Foodpedia takes you on guided tours of hawker centres with a Health Coach!",
            ctaText: "Join Walking Foodpedia",
            programmeName: "Walking Foodpedia",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "Walking Foodpedia",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

export const SIEW_DAI_LESSON: Lesson = {
    id: "SIEW-01",
    pillar: "nutrition",
    programme: "make_it_siew_dai",
    title: "Bubble Tea Reality Check",
    subtitle: "Make It Siew Dai",
    durationMinutes: 2.5,
    baseXP: 20,
    cards: [
        {
            id: "siew-01-hook",
            type: "hook",
            hookType: "stat",
            text: "A regular bubble tea with pearls = 38g of sugar. That's almost 10 teaspoons in one cup!",
            illustration: ILLUSTRATIONS.bubble_tea,
        },
        {
            id: "siew-01-learn-1",
            type: "learn",
            text: "High sugar intake is linked to Type 2 Diabetes, and Singapore has one of the highest rates in developed Asia. But you don't have to quit your favorites—just make smarter orders.",
            illustration: ILLUSTRATIONS.sugar_cubes,
        },
        {
            id: "siew-01-learn-2",
            type: "learn",
            text: "'Siew dai' means 'less sweet' in Hokkien—and it's your secret weapon. Most shops can do 0%, 25%, 50%, or 75% sugar. Try going one level lower than your usual!",
            illustration: ILLUSTRATIONS.bubble_tea,
        },
        {
            id: "siew-01-learn-3",
            type: "learn",
            text: "Skip the pearls for fewer calories, or try healthier toppings like aloe vera or white pearls. Milk tea > fruit tea for sugar (fruit syrups are sneaky!).",
            illustration: ILLUSTRATIONS.bubble_tea,
        },
        {
            id: "siew-01-check",
            type: "check",
            quizType: "multiple_choice",
            question: "Which bubble tea order has the least sugar?",
            options: [
                { id: "opt-a", text: "100% sugar with pearls", isCorrect: false },
                { id: "opt-b", text: "50% sugar with extra pearls", isCorrect: false },
                { id: "opt-c", text: "25% sugar with aloe vera", isCorrect: true },
                { id: "opt-d", text: "0% sugar with pearls", isCorrect: false },
            ],
            feedbackCorrect: "Nice! 25% sugar with aloe vera is about 60% less sugar than a regular order. Your body thanks you.",
            feedbackIncorrect: "25% sugar with aloe vera would be the best choice—pearls add more sugar too!",
        },
        {
            id: "siew-01-apply",
            type: "apply",
            text: "Challenge: Next bubble tea run, order one sugar level lower than usual. Can you even taste the difference? Most people can't after a few tries!",
            ctaText: "Accept the Challenge",
            ctaAction: "done",
        },
        {
            id: "siew-01-connect",
            type: "connect",
            text: "Make It Siew Dai workshops teach practical skills to prevent diabetes through daily food choices.",
            ctaText: "Learn More",
            programmeName: "Make It Siew Dai",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "Make It Siew Dai",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

export const SMILE_BRIGHT_LESSON: Lesson = {
    id: "SMILE-01",
    pillar: "nutrition",
    programme: "eat_right_smile_bright",
    title: "Your Teeth Know What You Eat",
    subtitle: "Eat Right, Smile Bright",
    durationMinutes: 2,
    baseXP: 30,
    cards: [
        {
            id: "smile-01-hook",
            type: "hook",
            hookType: "question",
            text: "What you eat doesn't just affect your waistline—it shows up in your smile. Your teeth are basically nutrition detectives.",
            illustration: ILLUSTRATIONS.teeth_smile,
        },
        {
            id: "smile-01-learn-1",
            type: "learn",
            text: "Foods high in sugar and acid (yes, that includes bubble tea and citrus drinks) feed bacteria that cause cavities. But calcium-rich foods like milk and cheese actually help protect enamel!",
            illustration: ILLUSTRATIONS.dairy_foods,
        },
        {
            id: "smile-01-learn-2",
            type: "learn",
            text: "The My Healthy Plate approach isn't just for your body—it's for your teeth too. Crunchy vegetables like carrots help clean teeth naturally. Dairy provides calcium for strong enamel.",
            illustration: ILLUSTRATIONS.healthy_plate,
        },
        {
            id: "smile-01-check",
            type: "check",
            quizType: "true_false",
            question: "Which helps your teeth MORE?",
            options: [
                { id: "opt-a", text: "Drinking orange juice throughout the day", isCorrect: false },
                { id: "opt-b", text: "Eating cheese after a sweet snack", isCorrect: true },
            ],
            feedbackCorrect: "Cheese is a teeth superhero! It neutralizes acids and provides calcium.",
            feedbackIncorrect: "Actually, cheese is better! It neutralizes acids and provides calcium. Orange juice exposes teeth to acid throughout the day.",
        },
        {
            id: "smile-01-apply",
            type: "apply",
            text: "Try this: End your next snack with a small piece of cheese or a sip of milk to protect your enamel. Your dentist will wonder what changed!",
            ctaText: "I'll Remember This",
            ctaAction: "done",
        },
        {
            id: "smile-01-connect",
            type: "connect",
            text: "Eat Right, Smile Bright workshops combine nutrition and oral health tips with dietitians and dental therapists.",
            ctaText: "Find a Workshop",
            programmeName: "Eat Right, Smile Bright",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "Eat Right, Smile Bright",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

// ============================================
// PILLAR 3: FITNESS & PHYSICAL ACTIVITY
// ============================================

export const KPOPX_LESSON: Lesson = {
    id: "KPOP-01",
    pillar: "fitness",
    programme: "kpopx_fitness",
    title: "Dance Your Way Fit",
    subtitle: "KpopX Fitness",
    durationMinutes: 2,
    baseXP: 10,
    cards: [
        {
            id: "kpop-01-hook",
            type: "hook",
            hookType: "stat",
            text: "What burns as many calories as running but feels like a party? K-pop dance workouts! 50 minutes = 400-600 calories gone.",
            illustration: ILLUSTRATIONS.kpop_dance,
        },
        {
            id: "kpop-01-learn-1",
            type: "learn",
            text: "KpopX Fitness combines popular K-pop choreography with cardio intervals. No dance experience needed—the moves are designed to be catchy AND effective for fitness.",
            illustration: ILLUSTRATIONS.dance_class,
        },
        {
            id: "kpop-01-learn-2",
            type: "learn",
            text: "Why it works: You're so focused on getting the moves right and vibing to the music that you forget you're exercising. That's the secret to actually sticking with fitness!",
            illustration: ILLUSTRATIONS.kpop_dance,
        },
        {
            id: "kpop-01-check",
            type: "check",
            quizType: "poll",
            question: "What's your biggest barrier to exercise?",
            options: [
                { id: "opt-a", text: "It's boring", isCorrect: true },
                { id: "opt-b", text: "I don't have time", isCorrect: true },
                { id: "opt-c", text: "I feel awkward at gyms", isCorrect: true },
                { id: "opt-d", text: "I don't know where to start", isCorrect: true },
            ],
            feedbackCorrect: "Whatever your answer, dance fitness addresses it—it's fun, social, and welcoming to beginners!",
            feedbackIncorrect: "Whatever your answer, dance fitness addresses it—it's fun, social, and welcoming to beginners!",
        },
        {
            id: "kpop-01-apply",
            type: "apply",
            text: "Put on your favorite K-pop song and just move for one song. No choreo needed—just let your body respond to the beat. That's the first step!",
            ctaText: "Done Dancing!",
            ctaAction: "done",
        },
        {
            id: "kpop-01-connect",
            type: "connect",
            text: "KpopX Fitness classes run weekly at Woodlands Health and community centres across Singapore. Join the party!",
            ctaText: "Find Classes Near Me",
            programmeName: "KpopX Fitness",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "KpopX Fitness",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

export const RESISTANCE_BAND_LESSON: Lesson = {
    id: "BAND-01",
    pillar: "fitness",
    programme: "resistance_band",
    title: "Gym-Free Strength",
    subtitle: "Resistance Band Training",
    durationMinutes: 2.5,
    baseXP: 20,
    cards: [
        {
            id: "band-01-hook",
            type: "hook",
            hookType: "myth_buster",
            text: "Think you need a gym membership to build strength? A $10 resistance band can give you the same muscle workout—anywhere, anytime.",
            illustration: ILLUSTRATIONS.resistance_band,
        },
        {
            id: "band-01-learn-1",
            type: "learn",
            text: "Resistance bands create tension throughout the entire movement—unlike dumbbells where gravity only works one direction. This means better muscle activation with lower injury risk.",
            illustration: ILLUSTRATIONS.resistance_band,
        },
        {
            id: "band-01-learn-2",
            type: "learn",
            text: "Start with 3 basic moves: Bicep curls (arms), Squats with band above knees (legs), and Band pull-aparts (back/shoulders). 3 sets of 10 reps each = complete upper AND lower body workout.",
            illustration: ILLUSTRATIONS.hdb_workout,
        },
        {
            id: "band-01-learn-3",
            type: "learn",
            text: "Band colors = resistance levels. Start light (yellow/red), progress to medium (green/blue), then heavy (black/silver). When 15 reps feels easy, move up!",
            illustration: ILLUSTRATIONS.resistance_band,
        },
        {
            id: "band-01-check",
            type: "check",
            quizType: "multiple_choice",
            question: "Which exercise targets your back and shoulders?",
            options: [
                { id: "opt-a", text: "Bicep curls", isCorrect: false },
                { id: "opt-b", text: "Banded squats", isCorrect: false },
                { id: "opt-c", text: "Band pull-aparts", isCorrect: true },
            ],
            feedbackCorrect: "You've got it! Pull-aparts target your back and shoulders, great for posture.",
            feedbackIncorrect: "Pull-aparts target your back and shoulders—bicep curls work arms, squats work legs.",
        },
        {
            id: "band-01-apply",
            type: "apply",
            text: "No band yet? Try this: Clasp your hands together and pull outward for 10 seconds. You just did an isometric pull-apart! Feel that back engage?",
            ctaText: "Felt It!",
            ctaAction: "done",
        },
        {
            id: "band-01-connect",
            type: "connect",
            text: "Learn proper form with Resistance Band Training workshops through Health Kampung.",
            ctaText: "Find a Workshop",
            programmeName: "Resistance Band Training",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "Resistance Band Training",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

export const MOBILITY_LESSON: Lesson = {
    id: "MOBI-01",
    pillar: "fitness",
    programme: "mobility_workshops",
    title: "Move Better, Move More",
    subtitle: "Mobility Workshops",
    durationMinutes: 2,
    baseXP: 30,
    cards: [
        {
            id: "mobi-01-hook",
            type: "hook",
            hookType: "question",
            text: "Can you touch your toes? Squat with heels flat? Turn your head fully both ways? Mobility = freedom to move without pain.",
            illustration: ILLUSTRATIONS.mobility_stretch,
        },
        {
            id: "mobi-01-learn-1",
            type: "learn",
            text: "Mobility isn't just flexibility—it's your joints' ability to move through their full range with control. Poor mobility from sitting all day leads to back pain, injury risk, and moving like you're 60 at 25.",
            illustration: ILLUSTRATIONS.desk_worker,
        },
        {
            id: "mobi-01-learn-2",
            type: "learn",
            text: "Good news: Mobility improves fast with consistency. Just 5 minutes of daily movement snacks (hip circles while waiting for MRT, shoulder rolls at your desk) makes a real difference.",
            illustration: ILLUSTRATIONS.mobility_stretch,
        },
        {
            id: "mobi-01-check",
            type: "check",
            quizType: "poll",
            question: "Which are signs you could benefit from mobility work?",
            options: [
                { id: "opt-a", text: "Lower back aches after sitting", isCorrect: true },
                { id: "opt-b", text: "Stiff neck from looking at phone", isCorrect: true },
                { id: "opt-c", text: "Knees crack when you squat", isCorrect: true },
                { id: "opt-d", text: "Shoulders round forward", isCorrect: true },
            ],
            feedbackCorrect: "If you checked any of these, you're not alone—and mobility work can help!",
            feedbackIncorrect: "If you checked any of these, you're not alone—and mobility work can help!",
        },
        {
            id: "mobi-01-apply",
            type: "apply",
            text: "Try this now: Sit tall, drop your chin to chest, slowly roll your head in a circle 3 times each direction. That's a mobility snack! Set a reminder to do this hourly.",
            ctaText: "Done! Set Reminder?",
            ctaAction: "reminder",
        },
        {
            id: "mobi-01-connect",
            type: "connect",
            text: "NHG's Mobility Workshops with physiotherapists teach you a complete routine for lifelong movement freedom.",
            ctaText: "Join a Workshop",
            programmeName: "Mobility Workshops",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "Mobility Workshops",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

// ============================================
// PILLAR 4: CHRONIC DISEASE PREVENTION
// ============================================

export const DIABETES_LESSON: Lesson = {
    id: "DIAB-01",
    pillar: "chronic_disease",
    programme: "cdm_diabetes",
    title: "Know Your Numbers: Blood Sugar",
    subtitle: "CDM - Diabetes",
    durationMinutes: 2.5,
    baseXP: 10,
    cards: [
        {
            id: "diab-01-hook",
            type: "hook",
            hookType: "stat",
            text: "1 in 3 Singaporeans will develop diabetes in their lifetime. But here's the thing—you can see it coming years in advance if you know what to look for.",
            illustration: ILLUSTRATIONS.diabetes_stat,
        },
        {
            id: "diab-01-learn-1",
            type: "learn",
            text: "Blood sugar (glucose) is fuel for your cells. But too much, too often, damages blood vessels and nerves over time. That's diabetes—and it affects eyes, kidneys, heart, and feet.",
            illustration: ILLUSTRATIONS.blood_sugar,
        },
        {
            id: "diab-01-learn-2",
            type: "learn",
            text: "Key numbers to know: Fasting blood sugar under 6.0 mmol/L is normal. 6.1-6.9 is 'pre-diabetes' (warning zone). 7.0+ indicates diabetes. A simple blood test tells you where you stand.",
            illustration: ILLUSTRATIONS.blood_sugar,
        },
        {
            id: "diab-01-learn-3",
            type: "learn",
            text: "The earlier you catch pre-diabetes, the easier it is to reverse through diet and exercise. That's why screening matters—even if you feel fine.",
            illustration: ILLUSTRATIONS.diabetes_stat,
        },
        {
            id: "diab-01-check",
            type: "check",
            quizType: "multiple_choice",
            question: "Your friend's fasting blood sugar result is 6.5 mmol/L. What does this mean?",
            options: [
                { id: "opt-a", text: "Normal, no worries", isCorrect: false },
                { id: "opt-b", text: "Pre-diabetes, time to take action", isCorrect: true },
                { id: "opt-c", text: "Diabetes, needs medication", isCorrect: false },
            ],
            feedbackCorrect: "6.5 is in the pre-diabetes range—a critical window where lifestyle changes can prevent progression!",
            feedbackIncorrect: "6.5 mmol/L is in the pre-diabetes range (6.1-6.9)—a critical window where lifestyle changes can help!",
        },
        {
            id: "diab-01-apply",
            type: "apply",
            text: "Do you know your last blood sugar reading? If not, it might be time for a health screening. Screen for Life covers this for Singaporeans!",
            ctaText: "Remind Me to Check",
            ctaAction: "reminder",
        },
        {
            id: "diab-01-connect",
            type: "connect",
            text: "NHG's Diabetes Management workshops teach you to monitor blood sugar and make sustainable lifestyle changes.",
            ctaText: "Learn More",
            programmeName: "CDM - Diabetes",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "CDM - Diabetes",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

export const CHOLESTEROL_BP_LESSON: Lesson = {
    id: "CHOL-01",
    pillar: "chronic_disease",
    programme: "cdm_cholesterol_bp",
    title: "The Silent Health Thieves",
    subtitle: "CDM - Cholesterol & BP",
    durationMinutes: 2.5,
    baseXP: 20,
    cards: [
        {
            id: "chol-01-hook",
            type: "hook",
            hookType: "stat",
            text: "High blood pressure and cholesterol are called 'silent killers' because you can't feel them—until something serious happens. Let's learn to outsmart them.",
            illustration: ILLUSTRATIONS.heart_health,
        },
        {
            id: "chol-01-learn-1",
            type: "learn",
            text: "Blood pressure measures the force of blood against artery walls. Normal is below 120/80. High BP (140/90+) makes your heart work overtime and damages vessels over time.",
            illustration: ILLUSTRATIONS.bp_monitor,
        },
        {
            id: "chol-01-learn-2",
            type: "learn",
            text: "Cholesterol isn't all bad—your body needs it. But too much LDL ('bad' cholesterol) builds up in arteries like gunk in a pipe. HDL ('good' cholesterol) helps clear it away.",
            illustration: ILLUSTRATIONS.heart_health,
        },
        {
            id: "chol-01-learn-3",
            type: "learn",
            text: "What raises your risk: Too much salt (BP), saturated fats (cholesterol), sitting all day (both). What helps: Movement, vegetables, fiber, managing stress.",
            illustration: ILLUSTRATIONS.healthy_plate,
        },
        {
            id: "chol-01-check",
            type: "check",
            quizType: "multiple_choice",
            question: "Which blood pressure reading indicates you should see a doctor?",
            options: [
                { id: "opt-a", text: "120/80", isCorrect: false },
                { id: "opt-b", text: "Below 5.2 mmol/L cholesterol", isCorrect: false },
                { id: "opt-c", text: "140/90+", isCorrect: true },
            ],
            feedbackCorrect: "Knowing these numbers helps you understand your health screening results!",
            feedbackIncorrect: "140/90+ is high blood pressure—you should consult a doctor. 120/80 is healthy.",
        },
        {
            id: "chol-01-apply",
            type: "apply",
            text: "This week, try reducing one high-sodium food: instant noodles, canned soup, or processed meat. Your blood pressure will notice!",
            ctaText: "I'll Try This",
            ctaAction: "done",
        },
        {
            id: "chol-01-connect",
            type: "connect",
            text: "Learn to monitor your own BP and understand cholesterol at NHG's CDM workshops.",
            ctaText: "Find Workshops",
            programmeName: "CDM - Cholesterol & BP",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "CDM - Cholesterol & BP",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

export const SEED_LESSON: Lesson = {
    id: "SEED-01",
    pillar: "chronic_disease",
    programme: "seed_framework",
    title: "The 4 Pillars of Health Habits",
    subtitle: "SEED Framework",
    durationMinutes: 3,
    baseXP: 30,
    cards: [
        {
            id: "seed-01-hook",
            type: "hook",
            hookType: "question",
            text: "Sleep. Eat. Exercise. Device. These 4 pillars hold up your entire wellbeing. Get them right early, and you're set for life.",
            illustration: ILLUSTRATIONS.seed_pillars,
        },
        {
            id: "seed-01-learn-1",
            type: "learn",
            title: "SLEEP",
            text: "Adults need 7-9 hours. Teens need 8-10. Screens before bed suppress melatonin (your sleep hormone). Try a 30-min wind-down without devices.",
            illustration: ILLUSTRATIONS.sleep_scene,
        },
        {
            id: "seed-01-learn-2",
            type: "learn",
            title: "EAT",
            text: "Half your plate should be vegetables, a quarter protein, a quarter carbs. Breakfast matters—it kickstarts your metabolism and focus for the day.",
            illustration: ILLUSTRATIONS.healthy_plate,
        },
        {
            id: "seed-01-learn-3",
            type: "learn",
            title: "EXERCISE",
            text: "Aim for 150 minutes of moderate activity per week—that's just 20 minutes a day! Walking counts. Dancing counts. Taking stairs counts.",
            illustration: ILLUSTRATIONS.mobility_stretch,
        },
        {
            id: "seed-01-learn-4",
            type: "learn",
            title: "DEVICE",
            text: "Screen time over 4 hours daily is linked to worse mental health and sleep. Use Screen Time tools to set limits. Your eyes, posture, and brain will thank you.",
            illustration: ILLUSTRATIONS.desk_worker,
        },
        {
            id: "seed-01-check",
            type: "check",
            quizType: "poll",
            question: "Which SEED pillar needs the most work for you?",
            options: [
                { id: "opt-a", text: "Sleep - I don't get enough", isCorrect: true },
                { id: "opt-b", text: "Eat - My diet could be better", isCorrect: true },
                { id: "opt-c", text: "Exercise - I'm too sedentary", isCorrect: true },
                { id: "opt-d", text: "Device - I'm on screens too much", isCorrect: true },
            ],
            feedbackCorrect: "Knowing where to focus is the first step. Pick ONE thing to improve this week.",
            feedbackIncorrect: "Knowing where to focus is the first step. Pick ONE thing to improve this week.",
        },
        {
            id: "seed-01-apply",
            type: "apply",
            text: "Based on your answer, set one small goal: Sleep 15 minutes earlier, add one vegetable to dinner, take a 10-minute walk, or set a screen limit. Start small!",
            ctaText: "Add to My Habits",
            ctaAction: "add_habit",
        },
        {
            id: "seed-01-connect",
            type: "connect",
            text: "The SEED Framework is part of GrowWell SG—helping young Singaporeans build healthy habits early.",
            ctaText: "Explore GrowWell SG",
            programmeName: "SEED Framework",
            deepLink: "https://www.healthhub.sg/programmes/parent-hub/grow-well-sg",
        },
    ],
    programmeLink: {
        name: "SEED Framework",
        deepLink: "https://www.healthhub.sg/programmes/parent-hub/grow-well-sg",
    },
};

// ============================================
// PILLAR 5: CAREGIVER SKILLS
// ============================================

export const WHEELCHAIR_LESSON: Lesson = {
    id: "WHEEL-01",
    pillar: "caregiver",
    programme: "wheelchair_handling",
    title: "Safe Wheelchair Basics",
    subtitle: "Wheelchair Handling",
    durationMinutes: 2.5,
    baseXP: 10,
    cards: [
        {
            id: "wheel-01-hook",
            type: "hook",
            hookType: "scenario",
            text: "Your grandparent just got a wheelchair. Do you know how to safely help them get around—including navigating kerbs and slopes?",
            illustration: ILLUSTRATIONS.wheelchair,
        },
        {
            id: "wheel-01-learn-1",
            type: "learn",
            text: "Before any trip: Check wheel locks work. Ensure footrests are secure. Check tire pressure (if pneumatic). These 30-second checks prevent accidents.",
            illustration: ILLUSTRATIONS.wheelchair,
        },
        {
            id: "wheel-01-learn-2",
            type: "learn",
            text: "Going UP a kerb: Tilt wheelchair back by pressing foot bar, lift front wheels onto kerb, then push rear wheels up. Going DOWN: Back down slowly, rear wheels first.",
            illustration: ILLUSTRATIONS.wheelchair,
        },
        {
            id: "wheel-01-learn-3",
            type: "learn",
            text: "On slopes: Always face forward going UP (push). Face backward going DOWN (control descent by walking backward). Never let the wheelchair roll freely!",
            illustration: ILLUSTRATIONS.elderly_care,
        },
        {
            id: "wheel-01-check",
            type: "check",
            quizType: "scenario",
            question: "You're approaching a downward slope with your grandmother. What's the safest approach?",
            options: [
                { id: "opt-a", text: "Face her forward and walk behind, holding handles", isCorrect: false },
                { id: "opt-b", text: "Turn her to face backward, you walk backward down the slope", isCorrect: true },
                { id: "opt-c", text: "Let her wheel herself while you walk beside", isCorrect: false },
            ],
            feedbackCorrect: "Walking backward gives you maximum control on descents. Safety first!",
            feedbackIncorrect: "Walking backward down the slope gives you maximum control. Safety first!",
        },
        {
            id: "wheel-01-apply",
            type: "apply",
            text: "If you have a wheelchair user in your life, practice the kerb technique in a safe area together. Confidence comes from practice!",
            ctaText: "I'll Practice This",
            ctaAction: "done",
        },
        {
            id: "wheel-01-connect",
            type: "connect",
            text: "NHG's Wheelchair Handling workshops provide hands-on training with occupational therapists.",
            ctaText: "Register for Training",
            programmeName: "Wheelchair Handling",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "Wheelchair Handling",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

export const SAFER_HOME_LESSON: Lesson = {
    id: "HOME-01",
    pillar: "caregiver",
    programme: "create_safer_home",
    title: "Fall-Proof Your Home",
    subtitle: "Create a Safer Home",
    durationMinutes: 2.5,
    baseXP: 20,
    cards: [
        {
            id: "home-01-hook",
            type: "hook",
            hookType: "stat",
            text: "Falls are the #1 cause of injury death for seniors in Singapore. Most happen at home—and most are preventable.",
            illustration: ILLUSTRATIONS.home_safety,
        },
        {
            id: "home-01-learn-1",
            type: "learn",
            text: "Bathroom is the danger zone: Wet floors + hard surfaces + getting up from sitting = recipe for falls. Grab bars, non-slip mats, and proper lighting are game-changers.",
            illustration: ILLUSTRATIONS.bathroom_safety,
        },
        {
            id: "home-01-learn-2",
            type: "learn",
            text: "Hallway hazards: Loose rugs, cluttered walkways, poor lighting, trailing cables. The rule: Clear paths wide enough for a walking frame, light switches at both ends.",
            illustration: ILLUSTRATIONS.home_safety,
        },
        {
            id: "home-01-learn-3",
            type: "learn",
            text: "Bedroom basics: Night light path to bathroom, phone within reach from bed, bed at right height (knees at 90° when sitting). Consider bed rails if needed.",
            illustration: ILLUSTRATIONS.home_safety,
        },
        {
            id: "home-01-check",
            type: "check",
            quizType: "multiple_choice",
            question: "What's a common fall hazard in homes?",
            options: [
                { id: "opt-a", text: "Good lighting", isCorrect: false },
                { id: "opt-b", text: "Loose rugs and trailing cables", isCorrect: true },
                { id: "opt-c", text: "Grab bars in bathroom", isCorrect: false },
            ],
            feedbackCorrect: "Loose rugs and trailing cables are top trip hazards. Secure or remove them!",
            feedbackIncorrect: "Loose rugs and trailing cables are the hazards—good lighting and grab bars actually help prevent falls!",
        },
        {
            id: "home-01-apply",
            type: "apply",
            text: "Do a quick walk-through of one room where your elderly family member spends time. Spot one hazard? Fix it this week.",
            ctaText: "I Found Something to Fix",
            ctaAction: "done",
        },
        {
            id: "home-01-connect",
            type: "connect",
            text: "Create a Safer Home workshops include a complete home safety checklist and info on modification resources.",
            ctaText: "Get the Checklist",
            programmeName: "Create a Safer Home",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "Create a Safer Home",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

export const MEDICATION_LESSON: Lesson = {
    id: "MEDS-01",
    pillar: "caregiver",
    programme: "medication_habits",
    title: "Medication Made Simple",
    subtitle: "Medication Habits",
    durationMinutes: 2.5,
    baseXP: 30,
    cards: [
        {
            id: "meds-01-hook",
            type: "hook",
            hookType: "scenario",
            text: "Elderly patients often take 5+ medications daily. Missing doses, wrong timing, or mixing them up can be dangerous. Can you help manage this safely?",
            illustration: ILLUSTRATIONS.medications,
        },
        {
            id: "meds-01-learn-1",
            type: "learn",
            text: "Reading medication labels: Look for drug name, dosage, frequency (how often), timing (before/after meals), and expiry date. All crucial info!",
            illustration: ILLUSTRATIONS.medications,
        },
        {
            id: "meds-01-learn-2",
            type: "learn",
            text: "The pillbox system: Sort medications by day and time (morning, afternoon, evening, bedtime). Do this weekly to catch any running-low supplies early.",
            illustration: ILLUSTRATIONS.pillbox,
        },
        {
            id: "meds-01-learn-3",
            type: "learn",
            text: "Storage matters: Most medications should be kept cool and dry (NOT bathroom). Some need refrigeration. Keep in original packaging until sorting. Check expiry dates monthly.",
            illustration: ILLUSTRATIONS.medications,
        },
        {
            id: "meds-01-check",
            type: "check",
            quizType: "multiple_choice",
            question: "A medication says 'Take 1 tablet BD with food.' What does BD mean?",
            options: [
                { id: "opt-a", text: "Before dinner", isCorrect: false },
                { id: "opt-b", text: "Twice daily", isCorrect: true },
                { id: "opt-c", text: "At bedtime", isCorrect: false },
            ],
            feedbackCorrect: "BD = bis die = twice daily. Common abbreviations: OD (once daily), TDS (three times daily), QID (four times daily).",
            feedbackIncorrect: "BD = bis die = twice daily. It's a Latin abbreviation commonly used on medication labels.",
        },
        {
            id: "meds-01-apply",
            type: "apply",
            text: "Help create a simple medication list for an elderly family member: Drug name, what it's for, when to take it. Keep a copy in their wallet for emergencies.",
            ctaText: "Create Medication List",
            ctaAction: "done",
        },
        {
            id: "meds-01-connect",
            type: "connect",
            text: "NHG's Medication Habits workshops are led by pharmacists who teach hands-on pillbox packing and label reading.",
            ctaText: "Find a Workshop",
            programmeName: "Medication Habits",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "Medication Habits",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

// ============================================
// PILLAR 6: COMMUNITY LEADERSHIP
// ============================================

export const HEALTHHUB_BUDDY_LESSON: Lesson = {
    id: "BUDDY-01",
    pillar: "community",
    programme: "healthhub_buddy",
    title: "Be a Digital Health Mentor",
    subtitle: "My HealthHub Buddy",
    durationMinutes: 2,
    baseXP: 10,
    cards: [
        {
            id: "buddy-01-hook",
            type: "hook",
            hookType: "question",
            text: "You navigate apps effortlessly. Your grandparents? Not so much. What if your tech skills could literally improve their health?",
            illustration: ILLUSTRATIONS.intergenerational,
        },
        {
            id: "buddy-01-learn-1",
            type: "learn",
            text: "Digital health literacy means knowing how to access health information online, use health apps, and navigate telehealth. For seniors, this can mean independence and better health outcomes.",
            illustration: ILLUSTRATIONS.health_app,
        },
        {
            id: "buddy-01-learn-2",
            type: "learn",
            text: "As a HealthHub Buddy, you teach seniors to use the HealthHub app: checking medical records, booking appointments, accessing health tips. Small skills, big impact on their lives.",
            illustration: ILLUSTRATIONS.intergenerational,
        },
        {
            id: "buddy-01-check",
            type: "check",
            quizType: "poll",
            question: "Which skill would help your elderly family member most?",
            options: [
                { id: "opt-a", text: "Booking polyclinic appointments online", isCorrect: true },
                { id: "opt-b", text: "Checking their medication records", isCorrect: true },
                { id: "opt-c", text: "Video calling with their doctor", isCorrect: true },
                { id: "opt-d", text: "Reading health articles", isCorrect: true },
            ],
            feedbackCorrect: "All of these are valuable! Start with what they need most and build from there.",
            feedbackIncorrect: "All of these are valuable! Start with what they need most and build from there.",
        },
        {
            id: "buddy-01-apply",
            type: "apply",
            text: "This week, show one elderly person in your life ONE health app feature. It could be HealthHub, NHG Health App, or even just setting a medication reminder.",
            ctaText: "I'll Do This",
            ctaAction: "done",
        },
        {
            id: "buddy-01-connect",
            type: "connect",
            text: "Join My HealthHub Buddy through Youth Corps Singapore and NHG Polyclinics—earn volunteer hours while making a real difference!",
            ctaText: "Sign Up to Volunteer",
            programmeName: "My HealthHub Buddy",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "My HealthHub Buddy",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

export const YUMCHA_LESSON: Lesson = {
    id: "YCHA-01",
    pillar: "community",
    programme: "yumcha_sessions",
    title: "Lead Health in Your Community",
    subtitle: "yumCHA Sessions",
    durationMinutes: 2,
    baseXP: 20,
    cards: [
        {
            id: "ycha-01-hook",
            type: "hook",
            hookType: "question",
            text: "What if you could lead health initiatives in your school, workplace, or neighborhood? Leadership skills + health knowledge = community impact.",
            illustration: ILLUSTRATIONS.youth_leader,
        },
        {
            id: "ycha-01-learn-1",
            type: "learn",
            text: "yumCHA (Youth Mobilisation for Community Health Action) trains volunteer leaders to design and run their own health programmes. You learn facilitation, project planning, and community engagement.",
            illustration: ILLUSTRATIONS.community_health,
        },
        {
            id: "ycha-01-learn-2",
            type: "learn",
            text: "Past projects include: Campus mental wellness days, HDB block fitness groups, hawker centre healthy eating tours, and intergenerational cooking classes. Your idea could be next!",
            illustration: ILLUSTRATIONS.youth_leader,
        },
        {
            id: "ycha-01-check",
            type: "check",
            quizType: "poll",
            question: "If you could run ONE health initiative in your community, what would it be?",
            options: [
                { id: "opt-a", text: "Fitness challenge for my school/workplace", isCorrect: true },
                { id: "opt-b", text: "Mental wellness peer support group", isCorrect: true },
                { id: "opt-c", text: "Healthy eating workshop", isCorrect: true },
                { id: "opt-d", text: "Health screening awareness campaign", isCorrect: true },
            ],
            feedbackCorrect: "Great thinking! yumCHA can help you turn ideas like this into reality.",
            feedbackIncorrect: "Great thinking! yumCHA can help you turn ideas like this into reality.",
        },
        {
            id: "ycha-01-apply",
            type: "apply",
            text: "Think of ONE health improvement your community needs. Write it down. That's the first step to making change happen.",
            ctaText: "I Have an Idea",
            ctaAction: "done",
        },
        {
            id: "ycha-01-connect",
            type: "connect",
            text: "yumCHA Sessions at the Centre for Health Activation train the next generation of community health leaders. Interested?",
            ctaText: "Learn About yumCHA",
            programmeName: "yumCHA Sessions",
            deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
        },
    ],
    programmeLink: {
        name: "yumCHA Sessions",
        deepLink: "https://www.nhghealth.com.sg/residents/your-community-of-care",
    },
};

// ============================================
// COLLECTION OF ALL LESSONS
// ============================================

export const ALL_LESSONS: Lesson[] = [
    // Pillar 1: Stress & Mental Wellness
    ALERT_LESSON,
    MOVING_FREE_LESSON,
    MINDSET_LESSON,
    // Pillar 2: Nutrition & Healthy Eating
    WALKING_FOODPEDIA_LESSON,
    SIEW_DAI_LESSON,
    SMILE_BRIGHT_LESSON,
    // Pillar 3: Fitness & Physical Activity
    KPOPX_LESSON,
    RESISTANCE_BAND_LESSON,
    MOBILITY_LESSON,
    // Pillar 4: Chronic Disease Prevention
    DIABETES_LESSON,
    CHOLESTEROL_BP_LESSON,
    SEED_LESSON,
    // Pillar 5: Caregiver Skills
    WHEELCHAIR_LESSON,
    SAFER_HOME_LESSON,
    MEDICATION_LESSON,
    // Pillar 6: Community Leadership
    HEALTHHUB_BUDDY_LESSON,
    YUMCHA_LESSON,
];

// Helper to get lessons by pillar
export const getLessonsByPillar = (pillar: Lesson["pillar"]): Lesson[] => {
    return ALL_LESSONS.filter(lesson => lesson.pillar === pillar);
};
