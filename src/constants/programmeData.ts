// Programme Data Types and Constants for Map Feature

export interface Pillar {
    id: number;
    name: string;
    icon: string;
    color: string;
}

export interface Venue {
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
}

export interface Programme {
    id: string;
    name: string;
    pillar_id: number;
    description: string;
    duration_mins: number;
    group_size: string;
    what_to_bring: string[];
    points_earned: number;
    image_url: string;
    source: string;
}

export interface Session {
    id: string;
    programme_id: string;
    venue_id: string;
    date: string;
    start_time: string;
    end_time: string;
    slots_total: number;
    slots_available: number;
}

export interface UserBooking {
    id: string;
    session_id: string;
    booked_at: string;
    status: 'confirmed' | 'cancelled' | 'attended';
}

// Pillars
export const PILLARS: Pillar[] = [
    { id: 1, name: "Stress & Mental Wellness", icon: "🧘", color: "#7C3AED" },
    { id: 2, name: "Nutrition", icon: "🥗", color: "#10B981" },
    { id: 3, name: "Fitness", icon: "🏃", color: "#F59E0B" },
    { id: 4, name: "Chronic Disease Prevention", icon: "❤️‍🩹", color: "#EF4444" },
    { id: 5, name: "Caregiver Skills", icon: "🤝", color: "#3B82F6" },
    { id: 6, name: "Community Volunteering", icon: "🌱", color: "#06B6D4" },
];

// Venues
export const VENUES: Venue[] = [
    // North/Northeast (existing)
    { id: "v1", name: "Serangoon Community Club", address: "10 Serangoon North Ave 2, Singapore 555877", lat: 1.352, lng: 103.8714 },
    { id: "v2", name: "Ang Mo Kio Community Centre", address: "795 Ang Mo Kio Ave 1, Singapore 569976", lat: 1.3691, lng: 103.8454 },
    { id: "v3", name: "Bishan Community Club", address: "51 Bishan Street 13, Singapore 579799", lat: 1.3526, lng: 103.8352 },
    { id: "v4", name: "Toa Payoh Hub", address: "490 Lor 6 Toa Payoh, Singapore 310490", lat: 1.3343, lng: 103.8508 },
    { id: "v5", name: "Woodlands Health Campus", address: "2 Yishun Central 2, Singapore 768024", lat: 1.4304, lng: 103.8354 },
    { id: "v6", name: "Hougang Community Club", address: "35 Hougang Ave 3, Singapore 538840", lat: 1.3612, lng: 103.8863 },
    { id: "v7", name: "Khoo Teck Puat Hospital", address: "90 Yishun Central, Singapore 768828", lat: 1.4244, lng: 103.8383 },
    { id: "v8", name: "Sengkang Community Club", address: "2 Sengkang Square, Singapore 545025", lat: 1.3917, lng: 103.8953 },
    { id: "v9", name: "Punggol Community Club", address: "6 Tebing Lane, Singapore 828835", lat: 1.3984, lng: 103.9072 },
    { id: "v10", name: "Yishun Community Hospital", address: "2 Yishun Central 2, Singapore 768024", lat: 1.4298, lng: 103.8362 },
    { id: "v11", name: "ActiveSG Serangoon Stadium", address: "33 Yio Chu Kang Road, Singapore 545550", lat: 1.3578, lng: 103.8714 },
    { id: "v12", name: "FairPrice Hub Joo Koon", address: "1 Joo Koon Circle, Singapore 629117", lat: 1.3271, lng: 103.6784 },
    // East
    { id: "v13", name: "Tampines Hub", address: "1 Tampines Walk, Singapore 528523", lat: 1.3525, lng: 103.9447 },
    { id: "v14", name: "Bedok Community Centre", address: "850 New Upper Changi Rd, Singapore 467352", lat: 1.3236, lng: 103.9273 },
    { id: "v15", name: "Pasir Ris Elias Community Club", address: "93 Pasir Ris Drive 3, Singapore 519498", lat: 1.3732, lng: 103.9496 },
    { id: "v16", name: "Marine Parade Community Club", address: "278 Marine Parade Rd, Singapore 449282", lat: 1.3025, lng: 103.9053 },
    // West
    { id: "v17", name: "Jurong East Community Club", address: "21 Jurong East St 31, Singapore 609517", lat: 1.3329, lng: 103.7436 },
    { id: "v18", name: "Clementi Community Centre", address: "220 Clementi Ave 4, Singapore 129880", lat: 1.3149, lng: 103.7651 },
    { id: "v19", name: "Bukit Batok Community Club", address: "2 Bukit Batok Central Link, Singapore 659526", lat: 1.3489, lng: 103.7496 },
    { id: "v20", name: "Jurong West ActiveSG Gym", address: "20 Jurong West St 93, Singapore 648965", lat: 1.3401, lng: 103.6948 },
    // South
    { id: "v21", name: "Queenstown Community Centre", address: "365 Commonwealth Ave, Singapore 149732", lat: 1.2985, lng: 103.8021 },
    { id: "v22", name: "Bukit Merah Community Centre", address: "3779 Jalan Bukit Merah, Singapore 159462", lat: 1.2846, lng: 103.8165 },
    { id: "v23", name: "Tiong Bahru Community Centre", address: "10 Boon Tiong Rd, Singapore 161010", lat: 1.2867, lng: 103.8275 },
    // Central
    { id: "v24", name: "Jalan Besar Community Club", address: "69 Jellicoe Rd, Singapore 208737", lat: 1.3094, lng: 103.8583 },
    { id: "v25", name: "Kampong Glam Community Club", address: "385 Beach Rd, Singapore 199581", lat: 1.3016, lng: 103.8631 },
    // North (additional)
    { id: "v26", name: "Sembawang Community Club", address: "2 Sembawang Crescent, Singapore 757632", lat: 1.4491, lng: 103.8201 },
    { id: "v27", name: "Admiralty Medical Centre", address: "676 Woodlands Drive 71, Singapore 730676", lat: 1.4406, lng: 103.8001 },
    // Central/Downtown (additional)
    { id: "v28", name: "Novena Community Club", address: "180 Toa Payoh Lorong 2, Singapore 319256", lat: 1.3204, lng: 103.8430 },
    { id: "v29", name: "Tan Tock Seng Hospital", address: "11 Jalan Tan Tock Seng, Singapore 308433", lat: 1.3215, lng: 103.8465 },
    { id: "v30", name: "Thomson Community Club", address: "30 Sin Ming Rd, Singapore 575483", lat: 1.3565, lng: 103.8380 },
    { id: "v31", name: "Kallang Community Club", address: "45 Boon Keng Road, Singapore 339771", lat: 1.3145, lng: 103.8675 },
    { id: "v32", name: "Geylang Serai Community Club", address: "1 Engku Aman Turn, Singapore 408528", lat: 1.3168, lng: 103.8982 },
    { id: "v33", name: "Kreta Ayer Community Club", address: "28A Kreta Ayer Rd, Singapore 088995", lat: 1.2815, lng: 103.8425 },
    { id: "v34", name: "Outram Community Club", address: "979 Outram Rd, Singapore 169081", lat: 1.2875, lng: 103.8320 },
    { id: "v35", name: "People's Association HQ", address: "9 King George's Avenue, Singapore 208581", lat: 1.3055, lng: 103.8612 },
    // More East coverage
    { id: "v36", name: "Kembangan-Chai Chee Community Club", address: "11 Jalan Ubi, Singapore 409074", lat: 1.3205, lng: 103.9115 },
    { id: "v37", name: "Katong Community Centre", address: "120 Mountbatten Rd, Singapore 437870", lat: 1.3048, lng: 103.8845 },
    { id: "v38", name: "Eunos Community Club", address: "180 Bedok North Rd, Singapore 469436", lat: 1.3268, lng: 103.9045 },
    // More Central coverage
    { id: "v39", name: "Braddell Heights Community Club", address: "50 Serangoon Ave 2, Singapore 556129", lat: 1.3425, lng: 103.8685 },
    { id: "v40", name: "MacPherson Community Club", address: "400 Paya Lebar Way, Singapore 379131", lat: 1.3275, lng: 103.8855 },
];

// Programmes
export const PROGRAMMES: Programme[] = [
    { id: "p1", name: "Moving Free", pillar_id: 1, description: "Employs the use of movement to enhance emotional well-being and stress reduction through guided movements and improvisation.", duration_mins: 60, group_size: "8-12 pax", what_to_bring: ["Comfortable clothing", "Water bottle", "Yoga mat (optional)"], points_earned: 35, image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400", source: "NHG Health" },
    { id: "p2", name: "Mindfulness Meditation", pillar_id: 1, description: "Guided meditation sessions for stress reduction and mental clarity.", duration_mins: 45, group_size: "10-20 pax", what_to_bring: ["Comfortable clothing", "Cushion (optional)"], points_earned: 25, image_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400", source: "Health Kampung" },
    { id: "p3", name: "Art Therapy Session", pillar_id: 1, description: "Using art and creative expression as a tool for emotional processing and stress relief.", duration_mins: 90, group_size: "8-15 pax", what_to_bring: ["Comfortable clothing"], points_earned: 40, image_url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400", source: "Health Kampung" },
    { id: "p7", name: "Walking Foodpedia", pillar_id: 2, description: "Learn about healthier food choices in hawker centres through hands-on experiential activities.", duration_mins: 120, group_size: "8-18 pax", what_to_bring: ["Comfortable walking shoes", "Water bottle"], points_earned: 50, image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400", source: "NHG Health" },
    { id: "p8", name: "Make It Siew Dai", pillar_id: 2, description: "Learn how to prevent or delay Type 2 Diabetes with dietary and lifestyle changes.", duration_mins: 90, group_size: "10-20 pax", what_to_bring: ["Notebook", "Pen"], points_earned: 40, image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400", source: "NHG Health" },
    { id: "p13", name: "KpopX Fitness", pillar_id: 3, description: "K-pop inspired dance workout combining popular K-pop music with fitness moves.", duration_mins: 60, group_size: "15-30 pax", what_to_bring: ["Comfortable workout attire", "Water bottle", "Towel"], points_earned: 40, image_url: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400", source: "Health Kampung" },
    { id: "p14", name: "Zumba", pillar_id: 3, description: "Latin-inspired dance fitness class that feels like a party!", duration_mins: 60, group_size: "20-40 pax", what_to_bring: ["Comfortable workout attire", "Water bottle", "Towel"], points_earned: 40, image_url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400", source: "Health Kampung" },
    { id: "p16", name: "Yoga", pillar_id: 3, description: "Flexibility, strength, and relaxation through yoga poses.", duration_mins: 60, group_size: "15-25 pax", what_to_bring: ["Comfortable clothing", "Yoga mat", "Water bottle"], points_earned: 35, image_url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400", source: "Health Kampung" },
    { id: "p21", name: "Diabetes Management Workshop", pillar_id: 4, description: "Gain a better understanding of Diabetes Mellitus and learn how to monitor your own blood sugar level.", duration_mins: 150, group_size: "10-30 pax", what_to_bring: ["Notebook", "Pen"], points_earned: 60, image_url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", source: "NHG Health" },
    { id: "p23", name: "Health Screening", pillar_id: 4, description: "Free community health checks including blood pressure, BMI, and basic health indicators.", duration_mins: 30, group_size: "Walk-in", what_to_bring: ["NRIC"], points_earned: 25, image_url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400", source: "CHP Services" },
    { id: "p27", name: "Create a Safer Home", pillar_id: 5, description: "Identify and improve common home hazards for a safer, elder-friendly environment.", duration_mins: 90, group_size: "20-40 pax", what_to_bring: ["Notebook", "Pen"], points_earned: 40, image_url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400", source: "NHG Health" },
    { id: "p30", name: "CPR & First Aid", pillar_id: 5, description: "Emergency response skills for home caregivers.", duration_mins: 180, group_size: "10-20 pax", what_to_bring: ["Comfortable clothing", "Closed-toe shoes"], points_earned: 75, image_url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400", source: "Health Kampung" },
    { id: "p32", name: "My HealthHub Buddy", pillar_id: 6, description: "Youth-to-elder digital mentoring - help seniors navigate technology and health apps.", duration_mins: 120, group_size: "Varies", what_to_bring: ["Smartphone/tablet", "Patience and enthusiasm!"], points_earned: 60, image_url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400", source: "Youth Corps Singapore" },
    { id: "p34", name: "Befriending Service", pillar_id: 6, description: "Companionship for isolated seniors.", duration_mins: 90, group_size: "1-on-1 or small group", what_to_bring: ["Positive attitude!"], points_earned: 45, image_url: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=400", source: "Health Kampung" },
];

// Sessions (Jan 23-28, 2026)
export const SESSIONS: Session[] = [
    // ===== JAN 23 (FRIDAY) - 16 sessions =====
    { id: "s1", programme_id: "p1", venue_id: "v1", date: "2026-01-23", start_time: "09:00", end_time: "10:00", slots_total: 12, slots_available: 5 },
    { id: "s2", programme_id: "p1", venue_id: "v2", date: "2026-01-23", start_time: "14:00", end_time: "15:00", slots_total: 12, slots_available: 8 },
    { id: "s3", programme_id: "p2", venue_id: "v3", date: "2026-01-23", start_time: "10:00", end_time: "10:45", slots_total: 20, slots_available: 12 },
    { id: "s4", programme_id: "p3", venue_id: "v13", date: "2026-01-23", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 9 },
    { id: "s5", programme_id: "p7", venue_id: "v4", date: "2026-01-23", start_time: "09:30", end_time: "11:30", slots_total: 18, slots_available: 6 },
    { id: "s6", programme_id: "p8", venue_id: "v17", date: "2026-01-23", start_time: "10:00", end_time: "11:30", slots_total: 20, slots_available: 14 },
    { id: "s7", programme_id: "p13", venue_id: "v1", date: "2026-01-23", start_time: "18:00", end_time: "19:00", slots_total: 30, slots_available: 10 },
    { id: "s8", programme_id: "p14", venue_id: "v6", date: "2026-01-23", start_time: "09:00", end_time: "10:00", slots_total: 40, slots_available: 22 },
    { id: "s9", programme_id: "p14", venue_id: "v18", date: "2026-01-23", start_time: "19:00", end_time: "20:00", slots_total: 35, slots_available: 18 },
    { id: "s10", programme_id: "p16", venue_id: "v2", date: "2026-01-23", start_time: "07:00", end_time: "08:00", slots_total: 25, slots_available: 8 },
    { id: "s11", programme_id: "p16", venue_id: "v21", date: "2026-01-23", start_time: "18:00", end_time: "19:00", slots_total: 25, slots_available: 12 },
    { id: "s12", programme_id: "p21", venue_id: "v7", date: "2026-01-23", start_time: "10:00", end_time: "12:30", slots_total: 30, slots_available: 20 },
    { id: "s13", programme_id: "p23", venue_id: "v4", date: "2026-01-23", start_time: "09:00", end_time: "12:00", slots_total: 100, slots_available: 65 },
    { id: "s14", programme_id: "p27", venue_id: "v6", date: "2026-01-23", start_time: "14:00", end_time: "15:30", slots_total: 40, slots_available: 28 },
    { id: "s15", programme_id: "p32", venue_id: "v1", date: "2026-01-23", start_time: "10:00", end_time: "12:00", slots_total: 15, slots_available: 9 },
    { id: "s16", programme_id: "p34", venue_id: "v8", date: "2026-01-23", start_time: "15:00", end_time: "16:30", slots_total: 10, slots_available: 6 },

    // ===== JAN 24 (SATURDAY - Weekend) - 18 sessions =====
    { id: "s17", programme_id: "p1", venue_id: "v3", date: "2026-01-24", start_time: "10:00", end_time: "11:00", slots_total: 12, slots_available: 7 },
    { id: "s18", programme_id: "p1", venue_id: "v13", date: "2026-01-24", start_time: "15:00", end_time: "16:00", slots_total: 12, slots_available: 10 },
    { id: "s19", programme_id: "p2", venue_id: "v21", date: "2026-01-24", start_time: "09:00", end_time: "09:45", slots_total: 20, slots_available: 15 },
    { id: "s20", programme_id: "p2", venue_id: "v14", date: "2026-01-24", start_time: "11:00", end_time: "11:45", slots_total: 20, slots_available: 8 },
    { id: "s21", programme_id: "p3", venue_id: "v22", date: "2026-01-24", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 6 },
    { id: "s22", programme_id: "p7", venue_id: "v16", date: "2026-01-24", start_time: "10:00", end_time: "12:00", slots_total: 18, slots_available: 4 },
    { id: "s23", programme_id: "p8", venue_id: "v24", date: "2026-01-24", start_time: "14:00", end_time: "15:30", slots_total: 20, slots_available: 11 },
    { id: "s24", programme_id: "p13", venue_id: "v8", date: "2026-01-24", start_time: "19:00", end_time: "20:00", slots_total: 30, slots_available: 8 },
    { id: "s25", programme_id: "p14", venue_id: "v1", date: "2026-01-24", start_time: "18:00", end_time: "19:00", slots_total: 25, slots_available: 13 },
    { id: "s26", programme_id: "p14", venue_id: "v13", date: "2026-01-24", start_time: "10:00", end_time: "11:00", slots_total: 40, slots_available: 22 },
    { id: "s27", programme_id: "p14", venue_id: "v19", date: "2026-01-24", start_time: "16:00", end_time: "17:00", slots_total: 35, slots_available: 20 },
    { id: "s28", programme_id: "p16", venue_id: "v15", date: "2026-01-24", start_time: "08:00", end_time: "09:00", slots_total: 25, slots_available: 10 },
    { id: "s29", programme_id: "p16", venue_id: "v17", date: "2026-01-24", start_time: "17:00", end_time: "18:00", slots_total: 25, slots_available: 18 },
    { id: "s30", programme_id: "p30", venue_id: "v10", date: "2026-01-24", start_time: "09:00", end_time: "12:00", slots_total: 30, slots_available: 25 },
    { id: "s31", programme_id: "p23", venue_id: "v7", date: "2026-01-24", start_time: "09:00", end_time: "13:00", slots_total: 100, slots_available: 45 },
    { id: "s32", programme_id: "p27", venue_id: "v26", date: "2026-01-24", start_time: "10:00", end_time: "11:30", slots_total: 40, slots_available: 32 },
    { id: "s33", programme_id: "p32", venue_id: "v9", date: "2026-01-24", start_time: "14:00", end_time: "16:00", slots_total: 15, slots_available: 11 },
    { id: "s34", programme_id: "p34", venue_id: "v23", date: "2026-01-24", start_time: "10:00", end_time: "11:30", slots_total: 10, slots_available: 7 },

    // ===== JAN 25 (SUNDAY - Weekend) - 18 sessions =====
    { id: "s35", programme_id: "p1", venue_id: "v17", date: "2026-01-25", start_time: "09:00", end_time: "10:00", slots_total: 12, slots_available: 6 },
    { id: "s36", programme_id: "p1", venue_id: "v22", date: "2026-01-25", start_time: "11:00", end_time: "12:00", slots_total: 12, slots_available: 9 },
    { id: "s37", programme_id: "p2", venue_id: "v25", date: "2026-01-25", start_time: "10:00", end_time: "10:45", slots_total: 20, slots_available: 14 },
    { id: "s38", programme_id: "p3", venue_id: "v18", date: "2026-01-25", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 8 },
    { id: "s39", programme_id: "p7", venue_id: "v24", date: "2026-01-25", start_time: "09:00", end_time: "11:00", slots_total: 18, slots_available: 5 },
    { id: "s40", programme_id: "p8", venue_id: "v4", date: "2026-01-25", start_time: "15:00", end_time: "16:30", slots_total: 20, slots_available: 12 },
    { id: "s41", programme_id: "p13", venue_id: "v13", date: "2026-01-25", start_time: "10:00", end_time: "11:00", slots_total: 30, slots_available: 12 },
    { id: "s42", programme_id: "p13", venue_id: "v21", date: "2026-01-25", start_time: "16:00", end_time: "17:00", slots_total: 30, slots_available: 18 },
    { id: "s43", programme_id: "p14", venue_id: "v6", date: "2026-01-25", start_time: "09:00", end_time: "10:00", slots_total: 40, slots_available: 15 },
    { id: "s44", programme_id: "p14", venue_id: "v14", date: "2026-01-25", start_time: "17:00", end_time: "18:00", slots_total: 35, slots_available: 24 },
    { id: "s45", programme_id: "p16", venue_id: "v3", date: "2026-01-25", start_time: "07:30", end_time: "08:30", slots_total: 25, slots_available: 6 },
    { id: "s46", programme_id: "p16", venue_id: "v20", date: "2026-01-25", start_time: "10:00", end_time: "11:00", slots_total: 25, slots_available: 19 },
    { id: "s47", programme_id: "p21", venue_id: "v27", date: "2026-01-25", start_time: "09:00", end_time: "11:30", slots_total: 30, slots_available: 22 },
    { id: "s48", programme_id: "p23", venue_id: "v5", date: "2026-01-25", start_time: "09:00", end_time: "12:00", slots_total: 100, slots_available: 58 },
    { id: "s49", programme_id: "p27", venue_id: "v2", date: "2026-01-25", start_time: "14:00", end_time: "15:30", slots_total: 40, slots_available: 30 },
    { id: "s50", programme_id: "p30", venue_id: "v7", date: "2026-01-25", start_time: "13:00", end_time: "16:00", slots_total: 20, slots_available: 16 },
    { id: "s51", programme_id: "p32", venue_id: "v15", date: "2026-01-25", start_time: "10:00", end_time: "12:00", slots_total: 15, slots_available: 8 },
    { id: "s52", programme_id: "p34", venue_id: "v16", date: "2026-01-25", start_time: "15:00", end_time: "16:30", slots_total: 10, slots_available: 4 },

    // ===== JAN 26 (MONDAY) - 14 sessions =====
    { id: "s53", programme_id: "p1", venue_id: "v14", date: "2026-01-26", start_time: "10:00", end_time: "11:00", slots_total: 12, slots_available: 8 },
    { id: "s54", programme_id: "p2", venue_id: "v1", date: "2026-01-26", start_time: "09:00", end_time: "09:45", slots_total: 20, slots_available: 11 },
    { id: "s55", programme_id: "p3", venue_id: "v23", date: "2026-01-26", start_time: "15:00", end_time: "16:30", slots_total: 15, slots_available: 10 },
    { id: "s56", programme_id: "p7", venue_id: "v22", date: "2026-01-26", start_time: "10:00", end_time: "12:00", slots_total: 18, slots_available: 7 },
    { id: "s57", programme_id: "p8", venue_id: "v19", date: "2026-01-26", start_time: "14:00", end_time: "15:30", slots_total: 20, slots_available: 15 },
    { id: "s58", programme_id: "p13", venue_id: "v17", date: "2026-01-26", start_time: "19:00", end_time: "20:00", slots_total: 30, slots_available: 14 },
    { id: "s59", programme_id: "p14", venue_id: "v2", date: "2026-01-26", start_time: "18:00", end_time: "19:00", slots_total: 40, slots_available: 25 },
    { id: "s60", programme_id: "p16", venue_id: "v8", date: "2026-01-26", start_time: "07:00", end_time: "08:00", slots_total: 25, slots_available: 9 },
    { id: "s61", programme_id: "p16", venue_id: "v13", date: "2026-01-26", start_time: "18:30", end_time: "19:30", slots_total: 25, slots_available: 16 },
    { id: "s62", programme_id: "p21", venue_id: "v10", date: "2026-01-26", start_time: "09:00", end_time: "11:30", slots_total: 30, slots_available: 24 },
    { id: "s63", programme_id: "p23", venue_id: "v27", date: "2026-01-26", start_time: "09:00", end_time: "12:00", slots_total: 100, slots_available: 72 },
    { id: "s64", programme_id: "p27", venue_id: "v9", date: "2026-01-26", start_time: "14:00", end_time: "15:30", slots_total: 40, slots_available: 35 },
    { id: "s65", programme_id: "p32", venue_id: "v6", date: "2026-01-26", start_time: "10:00", end_time: "12:00", slots_total: 15, slots_available: 12 },
    { id: "s66", programme_id: "p34", venue_id: "v21", date: "2026-01-26", start_time: "15:00", end_time: "16:30", slots_total: 10, slots_available: 5 },

    // ===== JAN 27 (TUESDAY) - 14 sessions =====
    { id: "s67", programme_id: "p1", venue_id: "v19", date: "2026-01-27", start_time: "09:00", end_time: "10:00", slots_total: 12, slots_available: 7 },
    { id: "s68", programme_id: "p2", venue_id: "v16", date: "2026-01-27", start_time: "10:00", end_time: "10:45", slots_total: 20, slots_available: 13 },
    { id: "s69", programme_id: "p3", venue_id: "v24", date: "2026-01-27", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 9 },
    { id: "s70", programme_id: "p7", venue_id: "v25", date: "2026-01-27", start_time: "09:30", end_time: "11:30", slots_total: 18, slots_available: 8 },
    { id: "s71", programme_id: "p8", venue_id: "v26", date: "2026-01-27", start_time: "10:00", end_time: "11:30", slots_total: 20, slots_available: 16 },
    { id: "s72", programme_id: "p13", venue_id: "v14", date: "2026-01-27", start_time: "18:00", end_time: "19:00", slots_total: 30, slots_available: 11 },
    { id: "s73", programme_id: "p14", venue_id: "v15", date: "2026-01-27", start_time: "19:00", end_time: "20:00", slots_total: 35, slots_available: 20 },
    { id: "s74", programme_id: "p14", venue_id: "v3", date: "2026-01-27", start_time: "09:00", end_time: "10:00", slots_total: 40, slots_available: 28 },
    { id: "s75", programme_id: "p16", venue_id: "v22", date: "2026-01-27", start_time: "07:00", end_time: "08:00", slots_total: 25, slots_available: 5 },
    { id: "s76", programme_id: "p21", venue_id: "v5", date: "2026-01-27", start_time: "14:00", end_time: "16:30", slots_total: 30, slots_available: 21 },
    { id: "s77", programme_id: "p23", venue_id: "v4", date: "2026-01-27", start_time: "09:00", end_time: "12:00", slots_total: 100, slots_available: 55 },
    { id: "s78", programme_id: "p30", venue_id: "v27", date: "2026-01-27", start_time: "09:00", end_time: "12:00", slots_total: 20, slots_available: 17 },
    { id: "s79", programme_id: "p32", venue_id: "v13", date: "2026-01-27", start_time: "14:00", end_time: "16:00", slots_total: 15, slots_available: 10 },
    { id: "s80", programme_id: "p34", venue_id: "v18", date: "2026-01-27", start_time: "10:00", end_time: "11:30", slots_total: 10, slots_available: 6 },

    // ===== JAN 28 (WEDNESDAY) - 14 sessions =====
    { id: "s81", programme_id: "p1", venue_id: "v26", date: "2026-01-28", start_time: "10:00", end_time: "11:00", slots_total: 12, slots_available: 9 },
    { id: "s82", programme_id: "p1", venue_id: "v20", date: "2026-01-28", start_time: "15:00", end_time: "16:00", slots_total: 12, slots_available: 11 },
    { id: "s83", programme_id: "p2", venue_id: "v6", date: "2026-01-28", start_time: "09:00", end_time: "09:45", slots_total: 20, slots_available: 14 },
    { id: "s84", programme_id: "p3", venue_id: "v17", date: "2026-01-28", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 7 },
    { id: "s85", programme_id: "p7", venue_id: "v23", date: "2026-01-28", start_time: "10:00", end_time: "12:00", slots_total: 18, slots_available: 6 },
    { id: "s86", programme_id: "p13", venue_id: "v1", date: "2026-01-28", start_time: "18:00", end_time: "19:00", slots_total: 30, slots_available: 15 },
    { id: "s87", programme_id: "p14", venue_id: "v21", date: "2026-01-28", start_time: "19:00", end_time: "20:00", slots_total: 40, slots_available: 22 },
    { id: "s88", programme_id: "p14", venue_id: "v8", date: "2026-01-28", start_time: "09:00", end_time: "10:00", slots_total: 35, slots_available: 26 },
    { id: "s89", programme_id: "p16", venue_id: "v19", date: "2026-01-28", start_time: "07:30", end_time: "08:30", slots_total: 25, slots_available: 8 },
    { id: "s90", programme_id: "p16", venue_id: "v25", date: "2026-01-28", start_time: "18:00", end_time: "19:00", slots_total: 25, slots_available: 17 },
    { id: "s91", programme_id: "p21", venue_id: "v7", date: "2026-01-28", start_time: "10:00", end_time: "12:30", slots_total: 30, slots_available: 18 },
    { id: "s92", programme_id: "p23", venue_id: "v10", date: "2026-01-28", start_time: "09:00", end_time: "12:00", slots_total: 100, slots_available: 60 },
    { id: "s93", programme_id: "p27", venue_id: "v14", date: "2026-01-28", start_time: "14:00", end_time: "15:30", slots_total: 40, slots_available: 33 },
    { id: "s94", programme_id: "p34", venue_id: "v9", date: "2026-01-28", start_time: "15:00", end_time: "16:30", slots_total: 10, slots_available: 8 },

    // ===== NEW VENUES SESSIONS (v28-v40) =====
    // Novena CC (v28)
    { id: "s95", programme_id: "p2", venue_id: "v28", date: "2026-01-23", start_time: "09:00", end_time: "09:45", slots_total: 20, slots_available: 12 },
    { id: "s96", programme_id: "p16", venue_id: "v28", date: "2026-01-24", start_time: "07:30", end_time: "08:30", slots_total: 25, slots_available: 15 },
    { id: "s97", programme_id: "p14", venue_id: "v28", date: "2026-01-25", start_time: "10:00", end_time: "11:00", slots_total: 40, slots_available: 28 },
    // Tan Tock Seng Hospital (v29)
    { id: "s98", programme_id: "p21", venue_id: "v29", date: "2026-01-23", start_time: "09:00", end_time: "11:30", slots_total: 30, slots_available: 18 },
    { id: "s99", programme_id: "p23", venue_id: "v29", date: "2026-01-24", start_time: "09:00", end_time: "12:00", slots_total: 100, slots_available: 55 },
    { id: "s100", programme_id: "p30", venue_id: "v29", date: "2026-01-26", start_time: "09:00", end_time: "12:00", slots_total: 20, slots_available: 14 },
    // Thomson CC (v30)
    { id: "s101", programme_id: "p1", venue_id: "v30", date: "2026-01-23", start_time: "10:00", end_time: "11:00", slots_total: 12, slots_available: 6 },
    { id: "s102", programme_id: "p13", venue_id: "v30", date: "2026-01-24", start_time: "18:00", end_time: "19:00", slots_total: 30, slots_available: 12 },
    { id: "s103", programme_id: "p3", venue_id: "v30", date: "2026-01-26", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 9 },
    // Kallang CC (v31)
    { id: "s104", programme_id: "p14", venue_id: "v31", date: "2026-01-23", start_time: "19:00", end_time: "20:00", slots_total: 40, slots_available: 20 },
    { id: "s105", programme_id: "p13", venue_id: "v31", date: "2026-01-25", start_time: "10:00", end_time: "11:00", slots_total: 30, slots_available: 16 },
    { id: "s106", programme_id: "p16", venue_id: "v31", date: "2026-01-27", start_time: "18:00", end_time: "19:00", slots_total: 25, slots_available: 11 },
    // Geylang Serai CC (v32)
    { id: "s107", programme_id: "p7", venue_id: "v32", date: "2026-01-23", start_time: "10:00", end_time: "12:00", slots_total: 18, slots_available: 8 },
    { id: "s108", programme_id: "p8", venue_id: "v32", date: "2026-01-24", start_time: "14:00", end_time: "15:30", slots_total: 20, slots_available: 13 },
    { id: "s109", programme_id: "p34", venue_id: "v32", date: "2026-01-26", start_time: "10:00", end_time: "11:30", slots_total: 10, slots_available: 7 },
    // Kreta Ayer CC (v33)
    { id: "s110", programme_id: "p2", venue_id: "v33", date: "2026-01-23", start_time: "10:00", end_time: "10:45", slots_total: 20, slots_available: 14 },
    { id: "s111", programme_id: "p1", venue_id: "v33", date: "2026-01-25", start_time: "09:00", end_time: "10:00", slots_total: 12, slots_available: 8 },
    { id: "s112", programme_id: "p32", venue_id: "v33", date: "2026-01-27", start_time: "14:00", end_time: "16:00", slots_total: 15, slots_available: 10 },
    // Outram CC (v34)
    { id: "s113", programme_id: "p16", venue_id: "v34", date: "2026-01-23", start_time: "07:00", end_time: "08:00", slots_total: 25, slots_available: 10 },
    { id: "s114", programme_id: "p3", venue_id: "v34", date: "2026-01-24", start_time: "15:00", end_time: "16:30", slots_total: 15, slots_available: 7 },
    { id: "s115", programme_id: "p14", venue_id: "v34", date: "2026-01-26", start_time: "18:00", end_time: "19:00", slots_total: 40, slots_available: 22 },
    // PA HQ (v35)
    { id: "s116", programme_id: "p27", venue_id: "v35", date: "2026-01-23", start_time: "10:00", end_time: "11:30", slots_total: 40, slots_available: 30 },
    { id: "s117", programme_id: "p8", venue_id: "v35", date: "2026-01-25", start_time: "14:00", end_time: "15:30", slots_total: 20, slots_available: 12 },
    { id: "s118", programme_id: "p32", venue_id: "v35", date: "2026-01-28", start_time: "10:00", end_time: "12:00", slots_total: 15, slots_available: 9 },
    // Kembangan-Chai Chee CC (v36)
    { id: "s119", programme_id: "p13", venue_id: "v36", date: "2026-01-23", start_time: "19:00", end_time: "20:00", slots_total: 30, slots_available: 14 },
    { id: "s120", programme_id: "p14", venue_id: "v36", date: "2026-01-24", start_time: "10:00", end_time: "11:00", slots_total: 35, slots_available: 19 },
    { id: "s121", programme_id: "p16", venue_id: "v36", date: "2026-01-26", start_time: "07:00", end_time: "08:00", slots_total: 25, slots_available: 8 },
    // Katong CC (v37)
    { id: "s122", programme_id: "p1", venue_id: "v37", date: "2026-01-23", start_time: "15:00", end_time: "16:00", slots_total: 12, slots_available: 7 },
    { id: "s123", programme_id: "p2", venue_id: "v37", date: "2026-01-25", start_time: "09:00", end_time: "09:45", slots_total: 20, slots_available: 11 },
    { id: "s124", programme_id: "p34", venue_id: "v37", date: "2026-01-27", start_time: "15:00", end_time: "16:30", slots_total: 10, slots_available: 5 },
    // Eunos CC (v38)
    { id: "s125", programme_id: "p7", venue_id: "v38", date: "2026-01-23", start_time: "09:00", end_time: "11:00", slots_total: 18, slots_available: 9 },
    { id: "s126", programme_id: "p13", venue_id: "v38", date: "2026-01-24", start_time: "18:00", end_time: "19:00", slots_total: 30, slots_available: 15 },
    { id: "s127", programme_id: "p3", venue_id: "v38", date: "2026-01-26", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 11 },
    // Braddell Heights CC (v39)
    { id: "s128", programme_id: "p14", venue_id: "v39", date: "2026-01-23", start_time: "18:00", end_time: "19:00", slots_total: 40, slots_available: 18 },
    { id: "s129", programme_id: "p16", venue_id: "v39", date: "2026-01-25", start_time: "07:30", end_time: "08:30", slots_total: 25, slots_available: 12 },
    { id: "s130", programme_id: "p27", venue_id: "v39", date: "2026-01-27", start_time: "10:00", end_time: "11:30", slots_total: 40, slots_available: 28 },
    // MacPherson CC (v40)
    { id: "s131", programme_id: "p8", venue_id: "v40", date: "2026-01-23", start_time: "10:00", end_time: "11:30", slots_total: 20, slots_available: 15 },
    { id: "s132", programme_id: "p1", venue_id: "v40", date: "2026-01-24", start_time: "09:00", end_time: "10:00", slots_total: 12, slots_available: 8 },
    { id: "s133", programme_id: "p13", venue_id: "v40", date: "2026-01-26", start_time: "19:00", end_time: "20:00", slots_total: 30, slots_available: 16 },
];

// Helper Functions
export const getPillarById = (id: number): Pillar | undefined => PILLARS.find(p => p.id === id);
export const getVenueById = (id: string): Venue | undefined => VENUES.find(v => v.id === id);
export const getProgrammeById = (id: string): Programme | undefined => PROGRAMMES.find(p => p.id === id);
export const getSessionById = (id: string): Session | undefined => SESSIONS.find(s => s.id === id);

export const getSessionsByDate = (date: string): Session[] =>
    SESSIONS.filter(s => s.date === date).sort((a, b) => a.start_time.localeCompare(b.start_time));

export const getSessionsWithDetails = (date: string) => {
    return getSessionsByDate(date).map(session => {
        const programme = getProgrammeById(session.programme_id);
        const venue = getVenueById(session.venue_id);
        const pillar = programme ? getPillarById(programme.pillar_id) : undefined;
        return { session, programme, venue, pillar };
    });
};
