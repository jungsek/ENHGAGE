import { Quest } from "@/types";

export const DAILY_QUESTS: Quest[] = [

    {
        id: 'quest_steps',
        title: 'Walk 5,000 steps',
        subtitle: '3,241 / 5,000',
        xp: 20,
        icon: 'zap',
        type: 'progress',
        progress: {
            current: 3241,
            total: 5000,
            unit: 'steps'
        },
        colorTheme: {
            bg: '#00897B', // Teal (Brand Match)
            border: '#00695C',
            text: '#ffffff', // White text for better contrast on dark brand color
        },
        uiType: 'progress-bar'
    },
    {
        id: 'quest_mood',
        title: 'Log your mood',
        subtitle: 'How are you feeling?',
        xp: 5,
        icon: 'heart',
        type: 'simple',
        colorTheme: {
            bg: '#42A5F5', // Soft Blue
            border: '#1E88E5',
            text: '#ffffff',
        },
        uiType: 'mood-selector'
    },
    {
        id: 'quest_chp_bonus',
        title: 'BONUS: Visit a CHP',
        subtitle: 'Attend any CHP event',
        xp: 100,
        icon: 'star',
        type: 'bonus',
        colorTheme: {
            bg: '#FFCA28', // Amber/Gold
            border: '#FFA000',
            text: '#5D4037', // Brown text for contrast on yellow
        },
        uiType: 'bonus-card'
    },
    // New Quests
    {
        id: 'quest_hydration',
        title: 'Drink Water',
        subtitle: 'Stay hydrated!',
        xp: 5,
        icon: 'water',
        type: 'simple',
        colorTheme: {
            bg: '#26C6DA', // Cyan
            border: '#00ACC1',
            text: '#ffffff',
        },
        uiType: 'standard'
    },
    {
        id: 'quest_read_article',
        title: 'Read a Mental Health Article',
        subtitle: 'Learn something new',
        xp: 15,
        icon: 'book',
        type: 'simple',
        colorTheme: {
            bg: '#AB47BC', // Purple
            border: '#8E24AA',
            text: '#ffffff',
        },
        uiType: 'standard'
    },
    {
        id: 'quest_sleep',
        title: 'Log 7+ Hours Sleep',
        subtitle: 'Rest well',
        xp: 10,
        icon: 'moon',
        type: 'simple',
        colorTheme: {
            bg: '#5C6BC0', // Indigo
            border: '#3949AB',
            text: '#ffffff',
        },
        uiType: 'standard'
    }
];
