
import { IMAGES } from "./assets";

export interface Reward {
    id: string;
    title: string;
    description: string;
    cost: number;
    image?: string;
    category: "voucher" | "activity" | "digital" | "experience";
    partner?: string;
}

const REWARD_IMAGES = {
    // Local Assets
    fairprice: IMAGES.rewards.fairprice,
    watsons: IMAGES.rewards.watsons,
    activesg: IMAGES.rewards.activesg,
    grab: IMAGES.rewards.grab,
    starbucks: IMAGES.rewards.starbucks,
    guardian: IMAGES.rewards.guardian,
    decathlon: IMAGES.rewards.decathlon,
    climbcentral: IMAGES.rewards.climbcentral,

    // New Brands (Local Assets)
    saladstop: IMAGES.rewards.saladstop,
    euyansang: IMAGES.rewards.euyansang,
    mrbean: IMAGES.rewards.mrbean,
    truefitness: IMAGES.rewards.truefitness,
    boost: IMAGES.rewards.boost,
    anytimefitness: IMAGES.rewards.anytimefitness,
    sgpilates: IMAGES.rewards.sgpilates,

    // Others
    nhg: IMAGES.nhgLogo,
};

export const REWARDS: Reward[] = [
    // EXISTING REWARDS (Mapped to Local Assets)
    {
        id: "r1",
        title: "$5 FairPrice Voucher",
        description: "Get $5 off your next healthy grocery shop.",
        cost: 1500,
        category: "voucher",
        partner: "NTUC FairPrice",
        image: REWARD_IMAGES.fairprice
    },
    {
        id: "r2",
        title: "$5 Watsons Voucher",
        description: "Redeem for health and wellness products.",
        cost: 1500,
        category: "voucher",
        partner: "Watsons",
        image: REWARD_IMAGES.watsons
    },
    {
        id: "r3",
        title: "ActiveSG Gym Pass",
        description: "One-time entry to any ActiveSG gym.",
        cost: 600,
        category: "activity",
        partner: "ActiveSG",
        image: REWARD_IMAGES.activesg
    },
    {
        id: "r5",
        title: "Olah Digital Sticker Pack",
        description: "Exclusive stickers for WhatsApp/Telegram.",
        cost: 200,
        category: "digital",
        partner: "ENHGAGE",
        image: IMAGES.olah
    },
    {
        id: "r6",
        title: "$10 Grab Voucher",
        description: "Use on your next GrabFood or GrabMart order.",
        cost: 2500,
        category: "voucher",
        partner: "Grab",
        image: REWARD_IMAGES.grab
    },
    {
        id: "r7",
        title: "$5 Starbucks eGift",
        description: "Treat yourself to a refreshing drink.",
        cost: 1800,
        category: "voucher",
        partner: "Starbucks",
        image: REWARD_IMAGES.starbucks
    },
    {
        id: "r9",
        title: "$5 Guardian Voucher",
        description: "For vitamins, supplements and personal care.",
        cost: 1500,
        category: "voucher",
        partner: "Guardian",
        image: REWARD_IMAGES.guardian
    },
    {
        id: "r10",
        title: "$10 Decathlon Voucher",
        description: "Get new fitness gear for your workouts.",
        cost: 2800,
        category: "voucher",
        partner: "Decathlon",
        image: REWARD_IMAGES.decathlon
    },

    // NEW BRANDS (Using Local Assets)
    {
        id: "nb1",
        title: "$10 SaladStop! Voucher",
        description: "Fresh salads, wraps, and grain bowls.",
        cost: 2000,
        category: "voucher",
        partner: "SaladStop!",
        image: REWARD_IMAGES.saladstop
    },
    {
        id: "nb2",
        title: "Eu Yan Sang Tonic",
        description: "Bottle of Essence of Chicken for energy.",
        cost: 1200,
        category: "voucher",
        partner: "Eu Yan Sang",
        image: REWARD_IMAGES.euyansang
    },
    {
        id: "nb3",
        title: "Mr Bean Soya Milk",
        description: "Classic soya milk (low sugar option).",
        cost: 500,
        category: "voucher",
        partner: "Mr Bean",
        image: REWARD_IMAGES.mrbean
    },
    {
        id: "nb4",
        title: "True Fitness Day Pass",
        description: "Access gym facilities for one day.",
        cost: 1000,
        category: "activity",
        partner: "True Fitness",
        image: REWARD_IMAGES.truefitness
    },
    {
        id: "nb5",
        title: "$5 Boost Juice",
        description: "Healthy fruit smoothies and crushes.",
        cost: 800,
        category: "voucher",
        partner: "Boost Juice",
        image: REWARD_IMAGES.boost
    },
    {
        id: "nb6",
        title: "Anytime Fitness Entry",
        description: "24/7 gym access pass.",
        cost: 1200,
        category: "activity",
        partner: "Anytime Fitness",
        image: REWARD_IMAGES.anytimefitness
    },
    {
        id: "nb7",
        title: "SG Pilates Class",
        description: "Reformer pilates session.",
        cost: 2500,
        category: "activity",
        partner: "SG Pilates",
        image: REWARD_IMAGES.sgpilates
    },

    // ACTIVITIES
    {
        id: "r11",
        title: "ActiveSG Swimming Pass",
        description: "Cool off with one free pool entry.",
        cost: 400,
        category: "activity",
        partner: "ActiveSG",
        image: REWARD_IMAGES.activesg
    },
    {
        id: "r12",
        title: "Free Yoga Class",
        description: "Join a beginner-friendly yoga session at NHG partner studios.",
        cost: 800,
        category: "activity",
        partner: "NHG Wellness",
        image: REWARD_IMAGES.nhg
    },
    {
        id: "r13",
        title: "Meditation Workshop Pass",
        description: "Learn mindfulness techniques with experts.",
        cost: 1000,
        category: "activity",
        partner: "NHG Wellness",
        image: REWARD_IMAGES.nhg
    },
    {
        id: "r14",
        title: "Badminton Court Booking",
        description: "1-hour slot at any ActiveSG sports hall.",
        cost: 500,
        category: "activity",
        partner: "ActiveSG",
        image: REWARD_IMAGES.activesg
    },
    {
        id: "r15",
        title: "Rock Climbing Trial",
        description: "Try indoor bouldering at partner gyms.",
        cost: 1200,
        category: "activity",
        partner: "Climb Central",
        image: REWARD_IMAGES.climbcentral
    },

    // DIGITAL
    {
        id: "r16",
        title: "Lylah Wallpaper Pack",
        description: "5 exclusive phone wallpapers featuring Lylah.",
        cost: 150,
        category: "digital",
        partner: "ENHGAGE",
        image: IMAGES.lylah
    },
    {
        id: "r17",
        title: "Ellah Wallpaper Pack",
        description: "5 exclusive phone wallpapers featuring Ellah.",
        cost: 150,
        category: "digital",
        partner: "ENHGAGE",
        image: IMAGES.ellah
    },
    {
        id: "r18",
        title: "Premium App Theme",
        description: "Unlock the exclusive 'Galaxy Night' theme.",
        cost: 500,
        category: "digital",
        partner: "ENHGAGE",
        image: IMAGES.olahFull
    },
    {
        id: "r19",
        title: "Special Profile Badge",
        description: "Show off a shiny 'Wellness Champion' badge.",
        cost: 300,
        category: "digital",
        partner: "ENHGAGE",
        image: IMAGES.icons.shieldGold
    },
    {
        id: "r20",
        title: "Custom Streak Animation",
        description: "Unlock a unique streak celebration effect.",
        cost: 400,
        category: "digital",
        partner: "ENHGAGE",
        image: IMAGES.icons.flameLarge
    },

    // EXPERIENCES
    {
        id: "r21",
        title: "Health Screening Priority",
        description: "Skip the queue at NHG polyclinics.",
        cost: 2000,
        category: "experience",
        partner: "NHG",
        image: REWARD_IMAGES.nhg
    },
    {
        id: "r22",
        title: "1-on-1 Nutritionist Consult",
        description: "30-min personalized nutrition advice session.",
        cost: 3000,
        category: "experience",
        partner: "NHG Wellness",
        image: REWARD_IMAGES.nhg
    },
    {
        id: "r23",
        title: "Wellness Workshop Entry",
        description: "Join exclusive mental health workshops.",
        cost: 1500,
        category: "experience",
        partner: "NHG Cares",
        image: REWARD_IMAGES.nhg
    },
    {
        id: "r24",
        title: "Cooking Healthy Class",
        description: "Learn to prep nutritious meals with a chef.",
        cost: 2500,
        category: "experience",
        partner: "NHG Wellness",
        image: REWARD_IMAGES.nhg
    },
    {
        id: "r25",
        title: "Community Run VIP Entry",
        description: "Free registration to NHG community runs.",
        cost: 1800,
        category: "experience",
        partner: "NHG Events",
        image: REWARD_IMAGES.nhg
    }
];

export const REWARDS_JSON = JSON.stringify(REWARDS, null, 2);
