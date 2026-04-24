// ─── Projects ────────────────────────────────────────────────────────────────

const PROJECTS = [
    {
        id: 'idf360',
        title: 'IDF 360',
        category: 'Simulation / Strategy',
        tags: ['Unity', 'C#', 'UI Systems'],
        gameLink: 'https://rinaok.itch.io/idf-360',
        image: 'images/idf-360.png',
        description: 'A high-pressure real-time simulation focusing on multi-front strategic defense.',
        details: {
            challenge: 'Capturing the intensity of modern multi-front defense in a 60-second loop. Translating complex data into an intuitive HUD was the main hurdle.',
            process: 'I engineered a prioritized notification system and used color-coded visual cues (Rose for danger, Teal for stable) to guide player attention.',
            role: 'Solo Developer',
            tools: ['Unity', 'C#', 'ScriptableObjects']
        }
    },
    {
        id: 'fishing',
        title: 'Fishing In The Deep',
        category: 'AI / Exploration',
        tags: ['Unity', 'AI Mechanics', 'C#'],
        gameLink: 'https://github.com/rinaok/Fishing_In_The_Deep_AI_Game',
        image: 'images/fishing.png',
        description: 'An atmospheric project exploring advanced AI behaviors and deep-sea mechanical systems.',
        details: {
            challenge: 'Creating a believable deep-sea ecosystem using emergent AI behaviors that respond to player presence and light.',
            process: 'Implemented complex state-management for NPC creatures and a mechanical fishing system that balances tension and meditative exploration.',
            role: 'Solo Developer',
            tools: ['Unity', 'C#', 'Behavior Trees']
        }
    },
    {
        id: 'falling',
        title: 'Falling Sounds',
        category: 'Audio / Experimental',
        tags: ['Unity', 'Audio Mechanics', 'C#'],
        gameLink: 'https://rinaok.itch.io/falling-sounds',
        image: 'images/falling sounds.png',
        description: 'An experimental sound-focused project exploring vertical descent and rhythmic auditory feedback.',
        details: {
            challenge: 'Creating a system where the primary player interaction and progression are driven by sound cues.',
            process: 'Developed a custom audio management system that maps game events to dynamic sound layers, ensuring a tactile feeling.',
            role: 'Solo Developer',
            tools: ['Unity', 'C#', 'Wwise']
        }
    },
    {
        id: 'mivtza_hisul',
        title: 'Mivtza Hisul (מבצע חיסול)',
        category: 'Tabletop / Strategy',
        tags: ['Physical Design', 'Social', 'Satirical'],
        image: 'images/מבצע חיסול.png',
        gameLink: null,
        description: 'A physical card game exploring social dynamics, bidding systems, and satirical commerce.',
        details: {
            challenge: 'Translating fast-paced retail chaos into manual card mechanics that remain easy to learn while capturing satirical elements.',
            process: 'Conducted 15+ playtest iterations to perfect the social bidding system and social deduction mechanics.',
            role: 'Game Designer',
            tools: ['Adobe Suite', 'Print-Ready Assets']
        }
    }
];

// ─── Experience ───────────────────────────────────────────────────────────────

const EXPERIENCE = [
    {
        type: 'edu',
        title: 'Master in Design (M.Des)',
        place: 'Shenkar - Digital Game Design and Development',
        date: 'Expected Oct 2025',
        desc: 'Advancing research into high-level game design and mechanics architecture.'
    },
    {
        type: 'work',
        title: 'Software Engineer',
        place: 'Vonage',
        date: 'Jul 2021 – Present',
        desc: 'Developing global cloud communication infrastructure using modern web technologies.'
    },
    {
        type: 'work',
        title: 'Software Engineer',
        place: 'Salesforce',
        date: 'Aug 2019 – May 2021',
        desc: 'Enterprise software engineering for cloud-based systems and backend architecture.'
    },
    {
        type: 'edu',
        title: 'Bachelor of Science (B.Sc)',
        place: 'The Academic College of Tel-Aviv, Yaffo - Computer Science',
        date: 'Oct 2016 – Oct 2020',
        desc: 'Foundation in computer science, algorithm design, and software development.'
    },
    {
        type: 'work',
        title: 'Game Developer',
        place: 'Ginger Tiger',
        date: 'Sep 2018 – Aug 2019',
        desc: 'Developed educational interactive games and accessible learning tools.'
    },
    {
        type: 'vol',
        title: 'Web Development Mentor',
        place: 'she codes;',
        date: 'Nov 2017 – Nov 2018',
        desc: 'Mentoring women in programming, empowering the next generation of engineers.'
    },
    {
        type: 'work',
        title: 'Software & Game Developer',
        place: 'OneCode LTD',
        date: 'Jul 2015 – Sep 2017',
        desc: 'Hands-on development of games and mobile applications.'
    },
    {
        type: 'work',
        title: 'E-learning Software Developer',
        place: 'IDF - Israel Defence Forces',
        date: 'Jul 2013 – Jul 2015',
        desc: 'Engineered digital training platforms for military curriculum.'
    }
];
