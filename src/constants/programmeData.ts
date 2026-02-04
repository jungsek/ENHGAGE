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
    // North/Northeast (existing & new)
    { id: "v1", name: "Serangoon Community Club", address: "10 Serangoon North Ave 2, Singapore 555877", lat: 1.352, lng: 103.8714 },
    { id: "v2", name: "Ang Mo Kio Community Centre", address: "795 Ang Mo Kio Ave 1, Singapore 569976", lat: 1.3691, lng: 103.8454 },
    { id: "v3", name: "Bishan Community Club", address: "51 Bishan Street 13, Singapore 579799", lat: 1.3526, lng: 103.8352 },
    { id: "v4", name: "Toa Payoh Hub", address: "490 Lor 6 Toa Payoh, Singapore 310490", lat: 1.3343, lng: 103.8508 },
    { id: "v5", name: "Woodlands Health Campus", address: "2 Yishun Central 2, Singapore 768024", lat: 1.4304, lng: 103.8354 },
    { id: "v6", name: "Hougang Community Club", address: "35 Hougang Ave 3, Singapore 538840", lat: 1.3612, lng: 103.8863 },
    { id: "v7", name: "Khoo Teck Puat Hospital", address: "90 Yishun Central, Singapore 768828", lat: 1.4244, lng: 103.8383 },
    { id: "v8", name: "Woodlands Galaxy Community Club", address: "31 Woodlands Avenue 6, Singapore 738991", lat: 1.4391, lng: 103.8026 },
    { id: "v9", name: "Canberra Community Club", address: "2 Sembawang Crescent, Singapore 757632", lat: 1.4449, lng: 103.8196 },
    { id: "v10", name: "Yishun Community Hospital", address: "2 Yishun Central 2, Singapore 768024", lat: 1.4298, lng: 103.8362 },
    { id: "v11", name: "ActiveSG Serangoon Stadium", address: "33 Yio Chu Kang Road, Singapore 545550", lat: 1.3578, lng: 103.8714 },
    { id: "v12", name: "Nee Soon Central Community Club", address: "1 Northpoint Drive, #01-201, Singapore 768019", lat: 1.4308, lng: 103.8351 },
    // Central/North Replacements
    { id: "v13", name: "Marsiling Community Club", address: "100 Admiralty Road, Singapore 739980", lat: 1.4405, lng: 103.7738 },
    { id: "v14", name: "Woodgrove Community Club", address: "353 Woodlands Avenue 1, Singapore 730353", lat: 1.4319, lng: 103.7853 },
    { id: "v15", name: "Sembawang Sports Centre", address: "21 Canberra Link, Singapore 756973", lat: 1.4492, lng: 103.8227 },
    { id: "v16", name: "Chong Pang Community Club", address: "126 Yishun St 11, #01-427, Singapore 760126", lat: 1.4300, lng: 103.8242 },
    // Central
    { id: "v17", name: "Teck Ghee Community Club", address: "861 Ang Mo Kio Avenue 10, Singapore 569734", lat: 1.3632, lng: 103.8536 },
    { id: "v18", name: "Cheng San Community Club", address: "6 Ang Mo Kio Street 53, Singapore 569205", lat: 1.3721, lng: 103.8497 },
    { id: "v19", name: "Yio Chu Kang Community Club", address: "50 Ang Mo Kio Street 61, Singapore 569163", lat: 1.3815, lng: 103.8413 },
    { id: "v20", name: "Kebun Baru Community Club", address: "216 Ang Mo Kio Ave 4, Singapore 569897", lat: 1.3729, lng: 103.8377 },
    { id: "v21", name: "Bishan Sports Hall", address: "5 Bishan Street 14, Singapore 579783", lat: 1.3554, lng: 103.8510 },
    { id: "v22", name: "Toa Payoh West Community Club", address: "200 Lorong 2 Toa Payoh, Singapore 319642", lat: 1.3354, lng: 103.8448 },
    { id: "v23", name: "Toa Payoh Central Community Club", address: "93 Toa Payoh Central, Singapore 319194", lat: 1.3348, lng: 103.8503 },
    { id: "v24", name: "Jalan Besar Community Club", address: "69 Jellicoe Rd, Singapore 208737", lat: 1.3094, lng: 103.8583 },
    { id: "v25", name: "Kampong Glam Community Club", address: "385 Beach Rd, Singapore 199581", lat: 1.3016, lng: 103.8631 },
    { id: "v26", name: "Sembawang Community Club", address: "2 Sembawang Crescent, Singapore 757632", lat: 1.4491, lng: 103.8201 },
    { id: "v27", name: "Admiralty Medical Centre", address: "676 Woodlands Drive 71, Singapore 730676", lat: 1.4406, lng: 103.8001 },
    { id: "v28", name: "Novena Community Club", address: "180 Toa Payoh Lorong 2, Singapore 319256", lat: 1.3204, lng: 103.8430 },
    { id: "v29", name: "Tan Tock Seng Hospital", address: "11 Jalan Tan Tock Seng, Singapore 308433", lat: 1.3215, lng: 103.8465 },
    { id: "v30", name: "Thomson Community Club", address: "30 Sin Ming Rd, Singapore 575483", lat: 1.3565, lng: 103.8380 },
    { id: "v31", name: "Kallang Community Club", address: "45 Boon Keng Road, Singapore 339771", lat: 1.3145, lng: 103.8675 },
    { id: "v32", name: "Geylang Serai Community Club", address: "1 Engku Aman Turn, Singapore 408528", lat: 1.3168, lng: 103.8982 },
    { id: "v33", name: "Pek Kio Community Club", address: "21 Gloucester Road, Singapore 219458", lat: 1.3131, lng: 103.8514 },
    { id: "v34", name: "Whampoa Community Club", address: "300 Whampoa Drive, Singapore 327737", lat: 1.3248, lng: 103.8571 },
    { id: "v35", name: "People's Association HQ", address: "9 King George's Avenue, Singapore 208581", lat: 1.3055, lng: 103.8612 },
    // Hougang/Geylang Replacements
    { id: "v36", name: "Ci Yuan Community Club", address: "51 Hougang Avenue 9, Singapore 538776", lat: 1.3750, lng: 103.8829 },
    { id: "v37", name: "Hougang Sports Centre", address: "93 Hougang Avenue 4, Singapore 538832", lat: 1.3712, lng: 103.8890 },
    { id: "v38", name: "Kampong Ubi Community Club", address: "10 Jalan Ubi, Singapore 409075", lat: 1.3181, lng: 103.9008 },
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

// Sessions (Feb 5-24, 2026) - Next 20 days
export const SESSIONS: Session[] = [
    { id: "s1", programme_id: "p1", venue_id: "v1", date: "2026-02-05", start_time: "09:00", end_time: "10:00", slots_total: 15, slots_available: 4 },
    { id: "s2", programme_id: "p2", venue_id: "v2", date: "2026-02-05", start_time: "09:00", end_time: "09:45", slots_total: 18, slots_available: 5 },
    { id: "s3", programme_id: "p3", venue_id: "v3", date: "2026-02-05", start_time: "14:00", end_time: "15:30", slots_total: 20, slots_available: 12 },
    { id: "s4", programme_id: "p7", venue_id: "v4", date: "2026-02-05", start_time: "09:00", end_time: "11:00", slots_total: 25, slots_available: 14 },
    { id: "s5", programme_id: "p8", venue_id: "v5", date: "2026-02-05", start_time: "10:00", end_time: "11:30", slots_total: 30, slots_available: 16 },
    { id: "s6", programme_id: "p13", venue_id: "v6", date: "2026-02-05", start_time: "10:00", end_time: "11:00", slots_total: 35, slots_available: 16 },
    { id: "s7", programme_id: "p14", venue_id: "v7", date: "2026-02-05", start_time: "09:00", end_time: "10:00", slots_total: 40, slots_available: 22 },
    { id: "s8", programme_id: "p16", venue_id: "v8", date: "2026-02-05", start_time: "07:00", end_time: "08:00", slots_total: 100, slots_available: 37 },
    { id: "s9", programme_id: "p21", venue_id: "v9", date: "2026-02-05", start_time: "09:00", end_time: "11:30", slots_total: 12, slots_available: 6 },
    { id: "s10", programme_id: "p23", venue_id: "v10", date: "2026-02-05", start_time: "09:00", end_time: "12:00", slots_total: 15, slots_available: 7 },
    { id: "s11", programme_id: "p27", venue_id: "v11", date: "2026-02-05", start_time: "10:00", end_time: "11:30", slots_total: 18, slots_available: 6 },
    { id: "s12", programme_id: "p30", venue_id: "v12", date: "2026-02-05", start_time: "09:00", end_time: "12:00", slots_total: 20, slots_available: 11 },
    { id: "s13", programme_id: "p32", venue_id: "v13", date: "2026-02-05", start_time: "10:00", end_time: "12:00", slots_total: 25, slots_available: 13 },
    { id: "s14", programme_id: "p34", venue_id: "v14", date: "2026-02-05", start_time: "10:00", end_time: "11:30", slots_total: 30, slots_available: 15 },
    { id: "s15", programme_id: "p1", venue_id: "v15", date: "2026-02-06", start_time: "10:00", end_time: "11:00", slots_total: 35, slots_available: 23 },
    { id: "s16", programme_id: "p2", venue_id: "v16", date: "2026-02-06", start_time: "10:00", end_time: "10:45", slots_total: 40, slots_available: 24 },
    { id: "s17", programme_id: "p3", venue_id: "v17", date: "2026-02-06", start_time: "15:00", end_time: "16:30", slots_total: 100, slots_available: 45 },
    { id: "s18", programme_id: "p7", venue_id: "v18", date: "2026-02-06", start_time: "09:30", end_time: "11:30", slots_total: 12, slots_available: 4 },
    { id: "s19", programme_id: "p8", venue_id: "v19", date: "2026-02-06", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 6 },
    { id: "s20", programme_id: "p13", venue_id: "v20", date: "2026-02-06", start_time: "18:00", end_time: "19:00", slots_total: 18, slots_available: 8 },
    { id: "s21", programme_id: "p14", venue_id: "v21", date: "2026-02-06", start_time: "10:00", end_time: "11:00", slots_total: 20, slots_available: 11 },
    { id: "s22", programme_id: "p16", venue_id: "v22", date: "2026-02-06", start_time: "07:30", end_time: "08:30", slots_total: 25, slots_available: 9 },
    { id: "s23", programme_id: "p21", venue_id: "v23", date: "2026-02-06", start_time: "10:00", end_time: "12:30", slots_total: 30, slots_available: 23 },
    { id: "s24", programme_id: "p23", venue_id: "v24", date: "2026-02-06", start_time: "09:00", end_time: "13:00", slots_total: 35, slots_available: 24 },
    { id: "s25", programme_id: "p27", venue_id: "v25", date: "2026-02-06", start_time: "14:00", end_time: "15:30", slots_total: 40, slots_available: 19 },
    { id: "s26", programme_id: "p30", venue_id: "v26", date: "2026-02-06", start_time: "13:00", end_time: "16:00", slots_total: 100, slots_available: 73 },
    { id: "s27", programme_id: "p32", venue_id: "v27", date: "2026-02-06", start_time: "14:00", end_time: "16:00", slots_total: 12, slots_available: 6 },
    { id: "s28", programme_id: "p34", venue_id: "v28", date: "2026-02-06", start_time: "15:00", end_time: "16:30", slots_total: 15, slots_available: 4 },
    { id: "s29", programme_id: "p1", venue_id: "v29", date: "2026-02-07", start_time: "15:00", end_time: "16:00", slots_total: 18, slots_available: 6 },
    { id: "s30", programme_id: "p2", venue_id: "v30", date: "2026-02-07", start_time: "11:00", end_time: "11:45", slots_total: 20, slots_available: 15 },
    { id: "s31", programme_id: "p3", venue_id: "v31", date: "2026-02-07", start_time: "14:00", end_time: "15:30", slots_total: 25, slots_available: 19 },
    { id: "s32", programme_id: "p7", venue_id: "v32", date: "2026-02-07", start_time: "10:00", end_time: "12:00", slots_total: 30, slots_available: 11 },
    { id: "s33", programme_id: "p8", venue_id: "v33", date: "2026-02-07", start_time: "15:00", end_time: "16:30", slots_total: 35, slots_available: 22 },
    { id: "s34", programme_id: "p13", venue_id: "v34", date: "2026-02-07", start_time: "19:00", end_time: "20:00", slots_total: 40, slots_available: 23 },
    { id: "s35", programme_id: "p14", venue_id: "v35", date: "2026-02-07", start_time: "18:00", end_time: "19:00", slots_total: 100, slots_available: 52 },
    { id: "s36", programme_id: "p16", venue_id: "v36", date: "2026-02-07", start_time: "18:00", end_time: "19:00", slots_total: 12, slots_available: 9 },
    { id: "s37", programme_id: "p21", venue_id: "v37", date: "2026-02-07", start_time: "14:00", end_time: "16:30", slots_total: 15, slots_available: 8 },
    { id: "s38", programme_id: "p23", venue_id: "v38", date: "2026-02-07", start_time: "09:00", end_time: "12:00", slots_total: 18, slots_available: 13 },
    { id: "s39", programme_id: "p27", venue_id: "v39", date: "2026-02-07", start_time: "10:00", end_time: "11:30", slots_total: 20, slots_available: 12 },
    { id: "s40", programme_id: "p30", venue_id: "v40", date: "2026-02-07", start_time: "09:00", end_time: "12:00", slots_total: 25, slots_available: 18 },
    { id: "s41", programme_id: "p32", venue_id: "v1", date: "2026-02-07", start_time: "10:00", end_time: "12:00", slots_total: 30, slots_available: 18 },
    { id: "s42", programme_id: "p34", venue_id: "v2", date: "2026-02-07", start_time: "10:00", end_time: "11:30", slots_total: 35, slots_available: 24 },
    { id: "s43", programme_id: "p1", venue_id: "v3", date: "2026-02-08", start_time: "09:00", end_time: "10:00", slots_total: 40, slots_available: 31 },
    { id: "s44", programme_id: "p2", venue_id: "v4", date: "2026-02-08", start_time: "09:00", end_time: "09:45", slots_total: 100, slots_available: 60 },
    { id: "s45", programme_id: "p3", venue_id: "v5", date: "2026-02-08", start_time: "15:00", end_time: "16:30", slots_total: 12, slots_available: 8 },
    { id: "s46", programme_id: "p7", venue_id: "v6", date: "2026-02-08", start_time: "09:00", end_time: "11:00", slots_total: 15, slots_available: 10 },
    { id: "s47", programme_id: "p8", venue_id: "v7", date: "2026-02-08", start_time: "10:00", end_time: "11:30", slots_total: 18, slots_available: 11 },
    { id: "s48", programme_id: "p13", venue_id: "v8", date: "2026-02-08", start_time: "10:00", end_time: "11:00", slots_total: 20, slots_available: 7 },
    { id: "s49", programme_id: "p14", venue_id: "v9", date: "2026-02-08", start_time: "19:00", end_time: "20:00", slots_total: 25, slots_available: 15 },
    { id: "s50", programme_id: "p16", venue_id: "v10", date: "2026-02-08", start_time: "07:00", end_time: "08:00", slots_total: 30, slots_available: 21 },
    { id: "s51", programme_id: "p21", venue_id: "v11", date: "2026-02-08", start_time: "09:00", end_time: "11:30", slots_total: 35, slots_available: 25 },
    { id: "s52", programme_id: "p23", venue_id: "v12", date: "2026-02-08", start_time: "09:00", end_time: "13:00", slots_total: 40, slots_available: 29 },
    { id: "s53", programme_id: "p27", venue_id: "v13", date: "2026-02-08", start_time: "14:00", end_time: "15:30", slots_total: 100, slots_available: 60 },
    { id: "s54", programme_id: "p30", venue_id: "v14", date: "2026-02-08", start_time: "13:00", end_time: "16:00", slots_total: 12, slots_available: 5 },
    { id: "s55", programme_id: "p32", venue_id: "v15", date: "2026-02-08", start_time: "14:00", end_time: "16:00", slots_total: 15, slots_available: 8 },
    { id: "s56", programme_id: "p34", venue_id: "v16", date: "2026-02-08", start_time: "15:00", end_time: "16:30", slots_total: 18, slots_available: 8 },
    { id: "s57", programme_id: "p1", venue_id: "v17", date: "2026-02-09", start_time: "10:00", end_time: "11:00", slots_total: 20, slots_available: 15 },
    { id: "s58", programme_id: "p2", venue_id: "v18", date: "2026-02-09", start_time: "10:00", end_time: "10:45", slots_total: 25, slots_available: 15 },
    { id: "s59", programme_id: "p3", venue_id: "v19", date: "2026-02-09", start_time: "14:00", end_time: "15:30", slots_total: 30, slots_available: 14 },
    { id: "s60", programme_id: "p7", venue_id: "v20", date: "2026-02-09", start_time: "09:30", end_time: "11:30", slots_total: 35, slots_available: 15 },
    { id: "s61", programme_id: "p8", venue_id: "v21", date: "2026-02-09", start_time: "14:00", end_time: "15:30", slots_total: 40, slots_available: 18 },
    { id: "s62", programme_id: "p13", venue_id: "v22", date: "2026-02-09", start_time: "18:00", end_time: "19:00", slots_total: 100, slots_available: 43 },
    { id: "s63", programme_id: "p14", venue_id: "v23", date: "2026-02-09", start_time: "09:00", end_time: "10:00", slots_total: 12, slots_available: 6 },
    { id: "s64", programme_id: "p16", venue_id: "v24", date: "2026-02-09", start_time: "07:30", end_time: "08:30", slots_total: 15, slots_available: 9 },
    { id: "s65", programme_id: "p21", venue_id: "v25", date: "2026-02-09", start_time: "10:00", end_time: "12:30", slots_total: 18, slots_available: 9 },
    { id: "s66", programme_id: "p23", venue_id: "v26", date: "2026-02-09", start_time: "09:00", end_time: "12:00", slots_total: 20, slots_available: 6 },
    { id: "s67", programme_id: "p27", venue_id: "v27", date: "2026-02-09", start_time: "10:00", end_time: "11:30", slots_total: 25, slots_available: 10 },
    { id: "s68", programme_id: "p30", venue_id: "v28", date: "2026-02-09", start_time: "09:00", end_time: "12:00", slots_total: 30, slots_available: 11 },
    { id: "s69", programme_id: "p32", venue_id: "v29", date: "2026-02-09", start_time: "10:00", end_time: "12:00", slots_total: 35, slots_available: 16 },
    { id: "s70", programme_id: "p34", venue_id: "v30", date: "2026-02-09", start_time: "10:00", end_time: "11:30", slots_total: 40, slots_available: 29 },
    { id: "s71", programme_id: "p1", venue_id: "v31", date: "2026-02-10", start_time: "15:00", end_time: "16:00", slots_total: 100, slots_available: 78 },
    { id: "s72", programme_id: "p2", venue_id: "v32", date: "2026-02-10", start_time: "11:00", end_time: "11:45", slots_total: 12, slots_available: 4 },
    { id: "s73", programme_id: "p3", venue_id: "v33", date: "2026-02-10", start_time: "15:00", end_time: "16:30", slots_total: 15, slots_available: 6 },
    { id: "s74", programme_id: "p7", venue_id: "v34", date: "2026-02-10", start_time: "10:00", end_time: "12:00", slots_total: 18, slots_available: 7 },
    { id: "s75", programme_id: "p8", venue_id: "v35", date: "2026-02-10", start_time: "15:00", end_time: "16:30", slots_total: 20, slots_available: 14 },
    { id: "s76", programme_id: "p13", venue_id: "v36", date: "2026-02-10", start_time: "19:00", end_time: "20:00", slots_total: 25, slots_available: 16 },
    { id: "s77", programme_id: "p14", venue_id: "v37", date: "2026-02-10", start_time: "10:00", end_time: "11:00", slots_total: 30, slots_available: 13 },
    { id: "s78", programme_id: "p16", venue_id: "v38", date: "2026-02-10", start_time: "18:00", end_time: "19:00", slots_total: 35, slots_available: 27 },
    { id: "s79", programme_id: "p21", venue_id: "v39", date: "2026-02-10", start_time: "14:00", end_time: "16:30", slots_total: 40, slots_available: 18 },
    { id: "s80", programme_id: "p23", venue_id: "v40", date: "2026-02-10", start_time: "09:00", end_time: "13:00", slots_total: 100, slots_available: 53 },
    { id: "s81", programme_id: "p27", venue_id: "v1", date: "2026-02-10", start_time: "14:00", end_time: "15:30", slots_total: 12, slots_available: 5 },
    { id: "s82", programme_id: "p30", venue_id: "v2", date: "2026-02-10", start_time: "13:00", end_time: "16:00", slots_total: 15, slots_available: 6 },
    { id: "s83", programme_id: "p32", venue_id: "v3", date: "2026-02-10", start_time: "14:00", end_time: "16:00", slots_total: 18, slots_available: 8 },
    { id: "s84", programme_id: "p34", venue_id: "v4", date: "2026-02-10", start_time: "15:00", end_time: "16:30", slots_total: 20, slots_available: 14 },
    { id: "s85", programme_id: "p1", venue_id: "v5", date: "2026-02-11", start_time: "09:00", end_time: "10:00", slots_total: 25, slots_available: 10 },
    { id: "s86", programme_id: "p2", venue_id: "v6", date: "2026-02-11", start_time: "09:00", end_time: "09:45", slots_total: 30, slots_available: 17 },
    { id: "s87", programme_id: "p3", venue_id: "v7", date: "2026-02-11", start_time: "14:00", end_time: "15:30", slots_total: 35, slots_available: 16 },
    { id: "s88", programme_id: "p7", venue_id: "v8", date: "2026-02-11", start_time: "09:00", end_time: "11:00", slots_total: 40, slots_available: 19 },
    { id: "s89", programme_id: "p8", venue_id: "v9", date: "2026-02-11", start_time: "10:00", end_time: "11:30", slots_total: 100, slots_available: 33 },
    { id: "s90", programme_id: "p13", venue_id: "v10", date: "2026-02-11", start_time: "10:00", end_time: "11:00", slots_total: 12, slots_available: 4 },
    { id: "s91", programme_id: "p14", venue_id: "v11", date: "2026-02-11", start_time: "18:00", end_time: "19:00", slots_total: 15, slots_available: 5 },
    { id: "s92", programme_id: "p16", venue_id: "v12", date: "2026-02-11", start_time: "07:00", end_time: "08:00", slots_total: 18, slots_available: 13 },
    { id: "s93", programme_id: "p21", venue_id: "v13", date: "2026-02-11", start_time: "09:00", end_time: "11:30", slots_total: 20, slots_available: 9 },
    { id: "s94", programme_id: "p23", venue_id: "v14", date: "2026-02-11", start_time: "09:00", end_time: "12:00", slots_total: 25, slots_available: 16 },
    { id: "s95", programme_id: "p27", venue_id: "v15", date: "2026-02-11", start_time: "10:00", end_time: "11:30", slots_total: 30, slots_available: 16 },
    { id: "s96", programme_id: "p30", venue_id: "v16", date: "2026-02-11", start_time: "09:00", end_time: "12:00", slots_total: 35, slots_available: 17 },
    { id: "s97", programme_id: "p32", venue_id: "v17", date: "2026-02-11", start_time: "10:00", end_time: "12:00", slots_total: 40, slots_available: 14 },
    { id: "s98", programme_id: "p34", venue_id: "v18", date: "2026-02-11", start_time: "10:00", end_time: "11:30", slots_total: 100, slots_available: 69 },
    { id: "s99", programme_id: "p1", venue_id: "v19", date: "2026-02-12", start_time: "10:00", end_time: "11:00", slots_total: 12, slots_available: 5 },
    { id: "s100", programme_id: "p2", venue_id: "v20", date: "2026-02-12", start_time: "10:00", end_time: "10:45", slots_total: 15, slots_available: 10 },
    { id: "s101", programme_id: "p3", venue_id: "v21", date: "2026-02-12", start_time: "15:00", end_time: "16:30", slots_total: 18, slots_available: 7 },
    { id: "s102", programme_id: "p7", venue_id: "v22", date: "2026-02-12", start_time: "09:30", end_time: "11:30", slots_total: 20, slots_available: 8 },
    { id: "s103", programme_id: "p8", venue_id: "v23", date: "2026-02-12", start_time: "14:00", end_time: "15:30", slots_total: 25, slots_available: 14 },
    { id: "s104", programme_id: "p13", venue_id: "v24", date: "2026-02-12", start_time: "18:00", end_time: "19:00", slots_total: 30, slots_available: 9 },
    { id: "s105", programme_id: "p14", venue_id: "v25", date: "2026-02-12", start_time: "19:00", end_time: "20:00", slots_total: 35, slots_available: 26 },
    { id: "s106", programme_id: "p16", venue_id: "v26", date: "2026-02-12", start_time: "07:30", end_time: "08:30", slots_total: 40, slots_available: 17 },
    { id: "s107", programme_id: "p21", venue_id: "v27", date: "2026-02-12", start_time: "10:00", end_time: "12:30", slots_total: 100, slots_available: 44 },
    { id: "s108", programme_id: "p23", venue_id: "v28", date: "2026-02-12", start_time: "09:00", end_time: "13:00", slots_total: 12, slots_available: 6 },
    { id: "s109", programme_id: "p27", venue_id: "v29", date: "2026-02-12", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 7 },
    { id: "s110", programme_id: "p30", venue_id: "v30", date: "2026-02-12", start_time: "13:00", end_time: "16:00", slots_total: 18, slots_available: 5 },
    { id: "s111", programme_id: "p32", venue_id: "v31", date: "2026-02-12", start_time: "14:00", end_time: "16:00", slots_total: 20, slots_available: 7 },
    { id: "s112", programme_id: "p34", venue_id: "v32", date: "2026-02-12", start_time: "15:00", end_time: "16:30", slots_total: 25, slots_available: 10 },
    { id: "s113", programme_id: "p1", venue_id: "v33", date: "2026-02-13", start_time: "15:00", end_time: "16:00", slots_total: 30, slots_available: 9 },
    { id: "s114", programme_id: "p2", venue_id: "v34", date: "2026-02-13", start_time: "11:00", end_time: "11:45", slots_total: 35, slots_available: 15 },
    { id: "s115", programme_id: "p3", venue_id: "v35", date: "2026-02-13", start_time: "14:00", end_time: "15:30", slots_total: 40, slots_available: 16 },
    { id: "s116", programme_id: "p7", venue_id: "v36", date: "2026-02-13", start_time: "10:00", end_time: "12:00", slots_total: 100, slots_available: 59 },
    { id: "s117", programme_id: "p8", venue_id: "v37", date: "2026-02-13", start_time: "15:00", end_time: "16:30", slots_total: 12, slots_available: 9 },
    { id: "s118", programme_id: "p13", venue_id: "v38", date: "2026-02-13", start_time: "19:00", end_time: "20:00", slots_total: 15, slots_available: 11 },
    { id: "s119", programme_id: "p14", venue_id: "v39", date: "2026-02-13", start_time: "09:00", end_time: "10:00", slots_total: 18, slots_available: 8 },
    { id: "s120", programme_id: "p16", venue_id: "v40", date: "2026-02-13", start_time: "18:00", end_time: "19:00", slots_total: 20, slots_available: 13 },
    { id: "s121", programme_id: "p21", venue_id: "v1", date: "2026-02-13", start_time: "14:00", end_time: "16:30", slots_total: 25, slots_available: 17 },
    { id: "s122", programme_id: "p23", venue_id: "v2", date: "2026-02-13", start_time: "09:00", end_time: "12:00", slots_total: 30, slots_available: 16 },
    { id: "s123", programme_id: "p27", venue_id: "v3", date: "2026-02-13", start_time: "10:00", end_time: "11:30", slots_total: 35, slots_available: 20 },
    { id: "s124", programme_id: "p30", venue_id: "v4", date: "2026-02-13", start_time: "09:00", end_time: "12:00", slots_total: 40, slots_available: 27 },
    { id: "s125", programme_id: "p32", venue_id: "v5", date: "2026-02-13", start_time: "10:00", end_time: "12:00", slots_total: 100, slots_available: 67 },
    { id: "s126", programme_id: "p34", venue_id: "v6", date: "2026-02-13", start_time: "10:00", end_time: "11:30", slots_total: 12, slots_available: 6 },
    { id: "s127", programme_id: "p1", venue_id: "v7", date: "2026-02-14", start_time: "09:00", end_time: "10:00", slots_total: 15, slots_available: 6 },
    { id: "s128", programme_id: "p2", venue_id: "v8", date: "2026-02-14", start_time: "09:00", end_time: "09:45", slots_total: 18, slots_available: 6 },
    { id: "s129", programme_id: "p3", venue_id: "v9", date: "2026-02-14", start_time: "15:00", end_time: "16:30", slots_total: 20, slots_available: 13 },
    { id: "s130", programme_id: "p7", venue_id: "v10", date: "2026-02-14", start_time: "09:00", end_time: "11:00", slots_total: 25, slots_available: 17 },
    { id: "s131", programme_id: "p8", venue_id: "v11", date: "2026-02-14", start_time: "10:00", end_time: "11:30", slots_total: 30, slots_available: 9 },
    { id: "s132", programme_id: "p13", venue_id: "v12", date: "2026-02-14", start_time: "10:00", end_time: "11:00", slots_total: 35, slots_available: 18 },
    { id: "s133", programme_id: "p14", venue_id: "v13", date: "2026-02-14", start_time: "10:00", end_time: "11:00", slots_total: 40, slots_available: 16 },
    { id: "s134", programme_id: "p16", venue_id: "v14", date: "2026-02-14", start_time: "07:00", end_time: "08:00", slots_total: 100, slots_available: 52 },
    { id: "s135", programme_id: "p21", venue_id: "v15", date: "2026-02-14", start_time: "09:00", end_time: "11:30", slots_total: 12, slots_available: 9 },
    { id: "s136", programme_id: "p23", venue_id: "v16", date: "2026-02-14", start_time: "09:00", end_time: "13:00", slots_total: 15, slots_available: 5 },
    { id: "s137", programme_id: "p27", venue_id: "v17", date: "2026-02-14", start_time: "14:00", end_time: "15:30", slots_total: 18, slots_available: 6 },
    { id: "s138", programme_id: "p30", venue_id: "v18", date: "2026-02-14", start_time: "13:00", end_time: "16:00", slots_total: 20, slots_available: 8 },
    { id: "s139", programme_id: "p32", venue_id: "v19", date: "2026-02-14", start_time: "14:00", end_time: "16:00", slots_total: 25, slots_available: 9 },
    { id: "s140", programme_id: "p34", venue_id: "v20", date: "2026-02-14", start_time: "15:00", end_time: "16:30", slots_total: 30, slots_available: 10 },
    { id: "s141", programme_id: "p1", venue_id: "v21", date: "2026-02-15", start_time: "10:00", end_time: "11:00", slots_total: 35, slots_available: 11 },
    { id: "s142", programme_id: "p2", venue_id: "v22", date: "2026-02-15", start_time: "10:00", end_time: "10:45", slots_total: 40, slots_available: 24 },
    { id: "s143", programme_id: "p3", venue_id: "v23", date: "2026-02-15", start_time: "14:00", end_time: "15:30", slots_total: 100, slots_available: 54 },
    { id: "s144", programme_id: "p7", venue_id: "v24", date: "2026-02-15", start_time: "09:30", end_time: "11:30", slots_total: 12, slots_available: 4 },
    { id: "s145", programme_id: "p8", venue_id: "v25", date: "2026-02-15", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 6 },
    { id: "s146", programme_id: "p13", venue_id: "v26", date: "2026-02-15", start_time: "18:00", end_time: "19:00", slots_total: 18, slots_available: 10 },
    { id: "s147", programme_id: "p14", venue_id: "v27", date: "2026-02-15", start_time: "18:00", end_time: "19:00", slots_total: 20, slots_available: 10 },
    { id: "s148", programme_id: "p16", venue_id: "v28", date: "2026-02-15", start_time: "07:30", end_time: "08:30", slots_total: 25, slots_available: 14 },
    { id: "s149", programme_id: "p21", venue_id: "v29", date: "2026-02-15", start_time: "10:00", end_time: "12:30", slots_total: 30, slots_available: 15 },
    { id: "s150", programme_id: "p23", venue_id: "v30", date: "2026-02-15", start_time: "09:00", end_time: "12:00", slots_total: 35, slots_available: 22 },
    { id: "s151", programme_id: "p27", venue_id: "v31", date: "2026-02-15", start_time: "10:00", end_time: "11:30", slots_total: 40, slots_available: 22 },
    { id: "s152", programme_id: "p30", venue_id: "v32", date: "2026-02-15", start_time: "09:00", end_time: "12:00", slots_total: 100, slots_available: 33 },
    { id: "s153", programme_id: "p32", venue_id: "v33", date: "2026-02-15", start_time: "10:00", end_time: "12:00", slots_total: 12, slots_available: 6 },
    { id: "s154", programme_id: "p34", venue_id: "v34", date: "2026-02-15", start_time: "10:00", end_time: "11:30", slots_total: 15, slots_available: 8 },
    { id: "s155", programme_id: "p1", venue_id: "v35", date: "2026-02-16", start_time: "15:00", end_time: "16:00", slots_total: 18, slots_available: 13 },
    { id: "s156", programme_id: "p2", venue_id: "v36", date: "2026-02-16", start_time: "11:00", end_time: "11:45", slots_total: 20, slots_available: 7 },
    { id: "s157", programme_id: "p3", venue_id: "v37", date: "2026-02-16", start_time: "15:00", end_time: "16:30", slots_total: 25, slots_available: 16 },
    { id: "s158", programme_id: "p7", venue_id: "v38", date: "2026-02-16", start_time: "10:00", end_time: "12:00", slots_total: 30, slots_available: 22 },
    { id: "s159", programme_id: "p8", venue_id: "v39", date: "2026-02-16", start_time: "15:00", end_time: "16:30", slots_total: 35, slots_available: 24 },
    { id: "s160", programme_id: "p13", venue_id: "v40", date: "2026-02-16", start_time: "19:00", end_time: "20:00", slots_total: 40, slots_available: 29 },
    { id: "s161", programme_id: "p14", venue_id: "v1", date: "2026-02-16", start_time: "19:00", end_time: "20:00", slots_total: 100, slots_available: 54 },
    { id: "s162", programme_id: "p16", venue_id: "v2", date: "2026-02-16", start_time: "18:00", end_time: "19:00", slots_total: 12, slots_available: 9 },
    { id: "s163", programme_id: "p21", venue_id: "v3", date: "2026-02-16", start_time: "14:00", end_time: "16:30", slots_total: 15, slots_available: 5 },
    { id: "s164", programme_id: "p23", venue_id: "v4", date: "2026-02-16", start_time: "09:00", end_time: "13:00", slots_total: 18, slots_available: 12 },
    { id: "s165", programme_id: "p27", venue_id: "v5", date: "2026-02-16", start_time: "14:00", end_time: "15:30", slots_total: 20, slots_available: 11 },
    { id: "s166", programme_id: "p30", venue_id: "v6", date: "2026-02-16", start_time: "13:00", end_time: "16:00", slots_total: 25, slots_available: 9 },
    { id: "s167", programme_id: "p32", venue_id: "v7", date: "2026-02-16", start_time: "14:00", end_time: "16:00", slots_total: 30, slots_available: 18 },
    { id: "s168", programme_id: "p34", venue_id: "v8", date: "2026-02-16", start_time: "15:00", end_time: "16:30", slots_total: 35, slots_available: 20 },
    { id: "s169", programme_id: "p1", venue_id: "v9", date: "2026-02-17", start_time: "09:00", end_time: "10:00", slots_total: 40, slots_available: 12 },
    { id: "s170", programme_id: "p2", venue_id: "v10", date: "2026-02-17", start_time: "09:00", end_time: "09:45", slots_total: 100, slots_available: 41 },
    { id: "s171", programme_id: "p3", venue_id: "v11", date: "2026-02-17", start_time: "14:00", end_time: "15:30", slots_total: 12, slots_available: 8 },
    { id: "s172", programme_id: "p7", venue_id: "v12", date: "2026-02-17", start_time: "09:00", end_time: "11:00", slots_total: 15, slots_available: 5 },
    { id: "s173", programme_id: "p8", venue_id: "v13", date: "2026-02-17", start_time: "10:00", end_time: "11:30", slots_total: 18, slots_available: 10 },
    { id: "s174", programme_id: "p13", venue_id: "v14", date: "2026-02-17", start_time: "10:00", end_time: "11:00", slots_total: 20, slots_available: 14 },
    { id: "s175", programme_id: "p14", venue_id: "v15", date: "2026-02-17", start_time: "09:00", end_time: "10:00", slots_total: 25, slots_available: 13 },
    { id: "s176", programme_id: "p16", venue_id: "v16", date: "2026-02-17", start_time: "07:00", end_time: "08:00", slots_total: 30, slots_available: 13 },
    { id: "s177", programme_id: "p21", venue_id: "v17", date: "2026-02-17", start_time: "09:00", end_time: "11:30", slots_total: 35, slots_available: 27 },
    { id: "s178", programme_id: "p23", venue_id: "v18", date: "2026-02-17", start_time: "09:00", end_time: "12:00", slots_total: 40, slots_available: 17 },
    { id: "s179", programme_id: "p27", venue_id: "v19", date: "2026-02-17", start_time: "10:00", end_time: "11:30", slots_total: 100, slots_available: 65 },
    { id: "s180", programme_id: "p30", venue_id: "v20", date: "2026-02-17", start_time: "09:00", end_time: "12:00", slots_total: 12, slots_available: 5 },
    { id: "s181", programme_id: "p32", venue_id: "v21", date: "2026-02-17", start_time: "10:00", end_time: "12:00", slots_total: 15, slots_available: 10 },
    { id: "s182", programme_id: "p34", venue_id: "v22", date: "2026-02-17", start_time: "10:00", end_time: "11:30", slots_total: 18, slots_available: 13 },
    { id: "s183", programme_id: "p1", venue_id: "v23", date: "2026-02-18", start_time: "10:00", end_time: "11:00", slots_total: 20, slots_available: 9 },
    { id: "s184", programme_id: "p2", venue_id: "v24", date: "2026-02-18", start_time: "10:00", end_time: "10:45", slots_total: 25, slots_available: 17 },
    { id: "s185", programme_id: "p3", venue_id: "v25", date: "2026-02-18", start_time: "15:00", end_time: "16:30", slots_total: 30, slots_available: 11 },
    { id: "s186", programme_id: "p7", venue_id: "v26", date: "2026-02-18", start_time: "09:30", end_time: "11:30", slots_total: 35, slots_available: 12 },
    { id: "s187", programme_id: "p8", venue_id: "v27", date: "2026-02-18", start_time: "14:00", end_time: "15:30", slots_total: 40, slots_available: 28 },
    { id: "s188", programme_id: "p13", venue_id: "v28", date: "2026-02-18", start_time: "18:00", end_time: "19:00", slots_total: 100, slots_available: 58 },
    { id: "s189", programme_id: "p14", venue_id: "v29", date: "2026-02-18", start_time: "10:00", end_time: "11:00", slots_total: 12, slots_available: 9 },
    { id: "s190", programme_id: "p16", venue_id: "v30", date: "2026-02-18", start_time: "07:30", end_time: "08:30", slots_total: 15, slots_available: 11 },
    { id: "s191", programme_id: "p21", venue_id: "v31", date: "2026-02-18", start_time: "10:00", end_time: "12:30", slots_total: 18, slots_available: 11 },
    { id: "s192", programme_id: "p23", venue_id: "v32", date: "2026-02-18", start_time: "09:00", end_time: "13:00", slots_total: 20, slots_available: 10 },
    { id: "s193", programme_id: "p27", venue_id: "v33", date: "2026-02-18", start_time: "14:00", end_time: "15:30", slots_total: 25, slots_available: 16 },
    { id: "s194", programme_id: "p30", venue_id: "v34", date: "2026-02-18", start_time: "13:00", end_time: "16:00", slots_total: 30, slots_available: 15 },
    { id: "s195", programme_id: "p32", venue_id: "v35", date: "2026-02-18", start_time: "14:00", end_time: "16:00", slots_total: 35, slots_available: 15 },
    { id: "s196", programme_id: "p34", venue_id: "v36", date: "2026-02-18", start_time: "15:00", end_time: "16:30", slots_total: 40, slots_available: 20 },
    { id: "s197", programme_id: "p1", venue_id: "v37", date: "2026-02-19", start_time: "15:00", end_time: "16:00", slots_total: 100, slots_available: 65 },
    { id: "s198", programme_id: "p2", venue_id: "v38", date: "2026-02-19", start_time: "11:00", end_time: "11:45", slots_total: 12, slots_available: 5 },
    { id: "s199", programme_id: "p3", venue_id: "v39", date: "2026-02-19", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 7 },
    { id: "s200", programme_id: "p7", venue_id: "v40", date: "2026-02-19", start_time: "10:00", end_time: "12:00", slots_total: 18, slots_available: 7 },
    { id: "s201", programme_id: "p8", venue_id: "v1", date: "2026-02-19", start_time: "15:00", end_time: "16:30", slots_total: 20, slots_available: 8 },
    { id: "s202", programme_id: "p13", venue_id: "v2", date: "2026-02-19", start_time: "19:00", end_time: "20:00", slots_total: 25, slots_available: 10 },
    { id: "s203", programme_id: "p14", venue_id: "v3", date: "2026-02-19", start_time: "18:00", end_time: "19:00", slots_total: 30, slots_available: 20 },
    { id: "s204", programme_id: "p16", venue_id: "v4", date: "2026-02-19", start_time: "18:00", end_time: "19:00", slots_total: 35, slots_available: 21 },
    { id: "s205", programme_id: "p21", venue_id: "v5", date: "2026-02-19", start_time: "14:00", end_time: "16:30", slots_total: 40, slots_available: 30 },
    { id: "s206", programme_id: "p23", venue_id: "v6", date: "2026-02-19", start_time: "09:00", end_time: "12:00", slots_total: 100, slots_available: 74 },
    { id: "s207", programme_id: "p27", venue_id: "v7", date: "2026-02-19", start_time: "10:00", end_time: "11:30", slots_total: 12, slots_available: 8 },
    { id: "s208", programme_id: "p30", venue_id: "v8", date: "2026-02-19", start_time: "09:00", end_time: "12:00", slots_total: 15, slots_available: 8 },
    { id: "s209", programme_id: "p32", venue_id: "v9", date: "2026-02-19", start_time: "10:00", end_time: "12:00", slots_total: 18, slots_available: 7 },
    { id: "s210", programme_id: "p34", venue_id: "v10", date: "2026-02-19", start_time: "10:00", end_time: "11:30", slots_total: 20, slots_available: 6 },
    { id: "s211", programme_id: "p1", venue_id: "v11", date: "2026-02-20", start_time: "09:00", end_time: "10:00", slots_total: 25, slots_available: 15 },
    { id: "s212", programme_id: "p2", venue_id: "v12", date: "2026-02-20", start_time: "09:00", end_time: "09:45", slots_total: 30, slots_available: 21 },
    { id: "s213", programme_id: "p3", venue_id: "v13", date: "2026-02-20", start_time: "15:00", end_time: "16:30", slots_total: 35, slots_available: 20 },
    { id: "s214", programme_id: "p7", venue_id: "v14", date: "2026-02-20", start_time: "09:00", end_time: "11:00", slots_total: 40, slots_available: 31 },
    { id: "s215", programme_id: "p8", venue_id: "v15", date: "2026-02-20", start_time: "10:00", end_time: "11:30", slots_total: 100, slots_available: 47 },
    { id: "s216", programme_id: "p13", venue_id: "v16", date: "2026-02-20", start_time: "10:00", end_time: "11:00", slots_total: 12, slots_available: 9 },
    { id: "s217", programme_id: "p14", venue_id: "v17", date: "2026-02-20", start_time: "19:00", end_time: "20:00", slots_total: 15, slots_available: 5 },
    { id: "s218", programme_id: "p16", venue_id: "v18", date: "2026-02-20", start_time: "07:00", end_time: "08:00", slots_total: 18, slots_available: 14 },
    { id: "s219", programme_id: "p21", venue_id: "v19", date: "2026-02-20", start_time: "09:00", end_time: "11:30", slots_total: 20, slots_available: 13 },
    { id: "s220", programme_id: "p23", venue_id: "v20", date: "2026-02-20", start_time: "09:00", end_time: "13:00", slots_total: 25, slots_available: 15 },
    { id: "s221", programme_id: "p27", venue_id: "v21", date: "2026-02-20", start_time: "14:00", end_time: "15:30", slots_total: 30, slots_available: 22 },
    { id: "s222", programme_id: "p30", venue_id: "v22", date: "2026-02-20", start_time: "13:00", end_time: "16:00", slots_total: 35, slots_available: 12 },
    { id: "s223", programme_id: "p32", venue_id: "v23", date: "2026-02-20", start_time: "14:00", end_time: "16:00", slots_total: 40, slots_available: 16 },
    { id: "s224", programme_id: "p34", venue_id: "v24", date: "2026-02-20", start_time: "15:00", end_time: "16:30", slots_total: 100, slots_available: 53 },
    { id: "s225", programme_id: "p1", venue_id: "v25", date: "2026-02-21", start_time: "10:00", end_time: "11:00", slots_total: 12, slots_available: 4 },
    { id: "s226", programme_id: "p2", venue_id: "v26", date: "2026-02-21", start_time: "10:00", end_time: "10:45", slots_total: 15, slots_available: 4 },
    { id: "s227", programme_id: "p3", venue_id: "v27", date: "2026-02-21", start_time: "14:00", end_time: "15:30", slots_total: 18, slots_available: 12 },
    { id: "s228", programme_id: "p7", venue_id: "v28", date: "2026-02-21", start_time: "09:30", end_time: "11:30", slots_total: 20, slots_available: 13 },
    { id: "s229", programme_id: "p8", venue_id: "v29", date: "2026-02-21", start_time: "14:00", end_time: "15:30", slots_total: 25, slots_available: 9 },
    { id: "s230", programme_id: "p13", venue_id: "v30", date: "2026-02-21", start_time: "18:00", end_time: "19:00", slots_total: 30, slots_available: 16 },
    { id: "s231", programme_id: "p14", venue_id: "v31", date: "2026-02-21", start_time: "09:00", end_time: "10:00", slots_total: 35, slots_available: 27 },
    { id: "s232", programme_id: "p16", venue_id: "v32", date: "2026-02-21", start_time: "07:30", end_time: "08:30", slots_total: 40, slots_available: 30 },
    { id: "s233", programme_id: "p21", venue_id: "v33", date: "2026-02-21", start_time: "10:00", end_time: "12:30", slots_total: 100, slots_available: 68 },
    { id: "s234", programme_id: "p23", venue_id: "v34", date: "2026-02-21", start_time: "09:00", end_time: "12:00", slots_total: 12, slots_available: 8 },
    { id: "s235", programme_id: "p27", venue_id: "v35", date: "2026-02-21", start_time: "10:00", end_time: "11:30", slots_total: 15, slots_available: 8 },
    { id: "s236", programme_id: "p30", venue_id: "v36", date: "2026-02-21", start_time: "09:00", end_time: "12:00", slots_total: 18, slots_available: 7 },
    { id: "s237", programme_id: "p32", venue_id: "v37", date: "2026-02-21", start_time: "10:00", end_time: "12:00", slots_total: 20, slots_available: 11 },
    { id: "s238", programme_id: "p34", venue_id: "v38", date: "2026-02-21", start_time: "10:00", end_time: "11:30", slots_total: 25, slots_available: 15 },
    { id: "s239", programme_id: "p1", venue_id: "v39", date: "2026-02-22", start_time: "15:00", end_time: "16:00", slots_total: 30, slots_available: 19 },
    { id: "s240", programme_id: "p2", venue_id: "v40", date: "2026-02-22", start_time: "11:00", end_time: "11:45", slots_total: 35, slots_available: 21 },
    { id: "s241", programme_id: "p3", venue_id: "v1", date: "2026-02-22", start_time: "15:00", end_time: "16:30", slots_total: 40, slots_available: 12 },
    { id: "s242", programme_id: "p7", venue_id: "v2", date: "2026-02-22", start_time: "10:00", end_time: "12:00", slots_total: 100, slots_available: 40 },
    { id: "s243", programme_id: "p8", venue_id: "v3", date: "2026-02-22", start_time: "15:00", end_time: "16:30", slots_total: 12, slots_available: 3 },
    { id: "s244", programme_id: "p13", venue_id: "v4", date: "2026-02-22", start_time: "19:00", end_time: "20:00", slots_total: 15, slots_available: 11 },
    { id: "s245", programme_id: "p14", venue_id: "v5", date: "2026-02-22", start_time: "10:00", end_time: "11:00", slots_total: 18, slots_available: 6 },
    { id: "s246", programme_id: "p16", venue_id: "v6", date: "2026-02-22", start_time: "18:00", end_time: "19:00", slots_total: 20, slots_available: 6 },
    { id: "s247", programme_id: "p21", venue_id: "v7", date: "2026-02-22", start_time: "14:00", end_time: "16:30", slots_total: 25, slots_available: 10 },
    { id: "s248", programme_id: "p23", venue_id: "v8", date: "2026-02-22", start_time: "09:00", end_time: "13:00", slots_total: 30, slots_available: 17 },
    { id: "s249", programme_id: "p27", venue_id: "v9", date: "2026-02-22", start_time: "14:00", end_time: "15:30", slots_total: 35, slots_available: 20 },
    { id: "s250", programme_id: "p30", venue_id: "v10", date: "2026-02-22", start_time: "13:00", end_time: "16:00", slots_total: 40, slots_available: 21 },
    { id: "s251", programme_id: "p32", venue_id: "v11", date: "2026-02-22", start_time: "14:00", end_time: "16:00", slots_total: 100, slots_available: 78 },
    { id: "s252", programme_id: "p34", venue_id: "v12", date: "2026-02-22", start_time: "15:00", end_time: "16:30", slots_total: 12, slots_available: 7 },
    { id: "s253", programme_id: "p1", venue_id: "v13", date: "2026-02-23", start_time: "09:00", end_time: "10:00", slots_total: 15, slots_available: 9 },
    { id: "s254", programme_id: "p2", venue_id: "v14", date: "2026-02-23", start_time: "09:00", end_time: "09:45", slots_total: 18, slots_available: 6 },
    { id: "s255", programme_id: "p3", venue_id: "v15", date: "2026-02-23", start_time: "14:00", end_time: "15:30", slots_total: 20, slots_available: 8 },
    { id: "s256", programme_id: "p7", venue_id: "v16", date: "2026-02-23", start_time: "09:00", end_time: "11:00", slots_total: 25, slots_available: 19 },
    { id: "s257", programme_id: "p8", venue_id: "v17", date: "2026-02-23", start_time: "10:00", end_time: "11:30", slots_total: 30, slots_available: 9 },
    { id: "s258", programme_id: "p13", venue_id: "v18", date: "2026-02-23", start_time: "10:00", end_time: "11:00", slots_total: 35, slots_available: 14 },
    { id: "s259", programme_id: "p14", venue_id: "v19", date: "2026-02-23", start_time: "18:00", end_time: "19:00", slots_total: 40, slots_available: 15 },
    { id: "s260", programme_id: "p16", venue_id: "v20", date: "2026-02-23", start_time: "07:00", end_time: "08:00", slots_total: 100, slots_available: 62 },
    { id: "s261", programme_id: "p21", venue_id: "v21", date: "2026-02-23", start_time: "09:00", end_time: "11:30", slots_total: 12, slots_available: 6 },
    { id: "s262", programme_id: "p23", venue_id: "v22", date: "2026-02-23", start_time: "09:00", end_time: "12:00", slots_total: 15, slots_available: 7 },
    { id: "s263", programme_id: "p27", venue_id: "v23", date: "2026-02-23", start_time: "10:00", end_time: "11:30", slots_total: 18, slots_available: 8 },
    { id: "s264", programme_id: "p30", venue_id: "v24", date: "2026-02-23", start_time: "09:00", end_time: "12:00", slots_total: 20, slots_available: 15 },
    { id: "s265", programme_id: "p32", venue_id: "v25", date: "2026-02-23", start_time: "10:00", end_time: "12:00", slots_total: 25, slots_available: 18 },
    { id: "s266", programme_id: "p34", venue_id: "v26", date: "2026-02-23", start_time: "10:00", end_time: "11:30", slots_total: 30, slots_available: 18 },
    { id: "s267", programme_id: "p1", venue_id: "v27", date: "2026-02-24", start_time: "10:00", end_time: "11:00", slots_total: 35, slots_available: 22 },
    { id: "s268", programme_id: "p2", venue_id: "v28", date: "2026-02-24", start_time: "10:00", end_time: "10:45", slots_total: 40, slots_available: 15 },
    { id: "s269", programme_id: "p3", venue_id: "v29", date: "2026-02-24", start_time: "15:00", end_time: "16:30", slots_total: 100, slots_available: 71 },
    { id: "s270", programme_id: "p7", venue_id: "v30", date: "2026-02-24", start_time: "09:30", end_time: "11:30", slots_total: 12, slots_available: 7 },
    { id: "s271", programme_id: "p8", venue_id: "v31", date: "2026-02-24", start_time: "14:00", end_time: "15:30", slots_total: 15, slots_available: 8 },
    { id: "s272", programme_id: "p13", venue_id: "v32", date: "2026-02-24", start_time: "18:00", end_time: "19:00", slots_total: 18, slots_available: 7 },
    { id: "s273", programme_id: "p14", venue_id: "v33", date: "2026-02-24", start_time: "19:00", end_time: "20:00", slots_total: 20, slots_available: 6 },
    { id: "s274", programme_id: "p16", venue_id: "v34", date: "2026-02-24", start_time: "07:30", end_time: "08:30", slots_total: 25, slots_available: 14 },
    { id: "s275", programme_id: "p21", venue_id: "v35", date: "2026-02-24", start_time: "10:00", end_time: "12:30", slots_total: 30, slots_available: 20 },
    { id: "s276", programme_id: "p23", venue_id: "v36", date: "2026-02-24", start_time: "09:00", end_time: "13:00", slots_total: 35, slots_available: 18 },
    { id: "s277", programme_id: "p27", venue_id: "v37", date: "2026-02-24", start_time: "14:00", end_time: "15:30", slots_total: 40, slots_available: 30 },
    { id: "s278", programme_id: "p30", venue_id: "v38", date: "2026-02-24", start_time: "13:00", end_time: "16:00", slots_total: 100, slots_available: 31 },
    { id: "s279", programme_id: "p32", venue_id: "v39", date: "2026-02-24", start_time: "14:00", end_time: "16:00", slots_total: 12, slots_available: 4 },
    { id: "s280", programme_id: "p34", venue_id: "v40", date: "2026-02-24", start_time: "15:00", end_time: "16:30", slots_total: 15, slots_available: 10 },
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
