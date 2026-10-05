const years = ((new Date()).getFullYear() - 2021);
export default {
    language: {
        switchToEnglish: 'Switch to English',
        switchToSpanish: 'Switch to Spanish'
    },
    navigation: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact'
    },

    hero: {
        badge: 'Full Stack Developer',
        title: 'Miguel Angel Jiménez',
        description:
            'Building scalable web and mobile experiences with Symfony, Vanilla JS, Angular, Vue, Flutter and Node.js.',
        primaryButton: 'View Projects',
        secondaryButton: 'Contact Me'
    },

    about: {
        title: 'About Me',
        description:
            'I am a Full Stack Developer specialized in modern web and mobile applications, focused on creating scalable, maintainable and high-performance solutions.',
        cards: {
            years: `${years} + Years`,
            experience: 'Professional Experience',
            frontend: 'Modern UI Development',
            backend: 'Scalable APIs & Systems',
            mobile: 'Flutter Applications'
        }
    },

    skills: {
        title: 'Skills',
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile/Desktop',
        database: 'Database'
    },
    projects: {
        title: 'Projects'
    },
    experience: {
        title: 'Experience'
    },
    cv: {
        title: 'Resume',
        open: 'View resume',
        intro: 'A concise overview of my professional experience and technical focus.',
        download: 'Print / Save as PDF',
        back: 'Back to portfolio',
        headline: 'Full Stack Software Developer | Backend and Mobile Applications',
        portfolio: 'Portfolio website',
        profile: 'Professional profile',
        summary: `Full Stack Software Developer with ${years} years of experience building enterprise web and mobile solutions. Specialized in backend development with PHP, Symfony, and PostgreSQL, with complementary experience in Flutter and Dart. Contributed across architecture, REST APIs, data modeling, integrations, security, deployments, and production support.`,
        expertise: 'Focus areas',
        expertiseText: 'Event and exhibition platforms covering attendee and exhibitor management, business networking, QR lead capture, contacts, meetings, notifications, and administration. Experienced in modernizing and maintaining legacy systems, integrating external services, and building generative AI API integrations.',
        technicalSkills: 'Technical skills',
        backend: 'Backend',
        mobile: 'Mobile',
        data: 'Data',
        architecture: 'Architecture',
        tools: 'Tools',
        other: 'Integrations',
        experience: 'Professional experience',
        selectedProjects: 'Selected projects'
    },
    contact: {
        title: 'Contact',
        description:
            'Interested in working together or building something amazing?',
        primaryButton: 'Send Email',
        secondaryButton: 'GitHub'
    },
    footer: {
        text: 'Designed & Built by Miguel Angel Jiménez'
    }
};
