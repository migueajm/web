const years = ((new Date()).getFullYear() - 2021);
export default {
    language: {
        switchToEnglish: 'Cambiar a inglés',
        switchToSpanish: 'Cambiar a español'
    },
    navigation: {
        about: 'Sobre mí',
        skills: 'Habilidades',
        projects: 'Proyectos',
        experience: 'Experiencia',
        contact: 'Contacto'
    },
    hero: {
        badge: 'Full Stack Developer',
        title: 'Miguel Angel Jiménez',
        description:
            'Construyendo experiencias web y móviles escalables con Symfony, Vanilla JS, Angular, Vue, Flutter y Node.js.',
        primaryButton: 'Ver Proyectos',
        secondaryButton: 'Contáctame'
    },
    about: {
        title: 'Sobre mí',
        description:
            'Soy un Full Stack Developer especializado en aplicaciones web y móviles modernas, enfocado en crear soluciones escalables, mantenibles y de alto rendimiento.',
        cards: {
            years: `${years}+ Años`,
            experience: 'Experiencia Profesional',
            frontend: 'Desarrollo UI Moderno',
            backend: 'APIs y Sistemas Escalables',
            mobile: 'Aplicaciones Flutter'
        }
    },

    skills: {
        title: 'Habilidades',
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile/Escritorio',
        database: 'Base de Datos'
    },
    projects: {
        title: 'Proyectos'
    },
    experience: {
        title: 'Experiencia'
    },
    cv: {
        title: 'Currículum',
        open: 'Ver CV',
        intro: 'Una versión resumida de mi trayectoria, experiencia y enfoque técnico.',
        download: 'Imprimir / Guardar como PDF',
        back: 'Volver al portafolio',
        headline: 'Desarrollador de Software Full Stack | Backend y aplicaciones móviles',
        portfolio: 'Portafolio web',
        profile: 'Perfil profesional',
        summary: `Desarrollador de Software Full Stack con más de ${years} años de experiencia en soluciones empresariales web y móviles. Especializado en backend con PHP, Symfony y PostgreSQL, con experiencia complementaria en Flutter y Dart. He participado en arquitectura, APIs REST, modelado de datos, integraciones, seguridad, despliegues y soporte a sistemas en producción.`,
        expertise: 'Enfoque',
        expertiseText: 'Plataformas para eventos y exposiciones: gestión de asistentes y expositores, networking, captura de leads mediante QR, contactos, reuniones, notificaciones y administración. Experiencia en modernización y mantenimiento de sistemas legacy, además de integración de servicios externos y APIs de IA generativa.',
        technicalSkills: 'Competencias técnicas',
        backend: 'Backend',
        mobile: 'Móvil',
        data: 'Datos',
        architecture: 'Arquitectura',
        tools: 'Herramientas',
        other: 'Integraciones',
        experience: 'Experiencia profesional',
        selectedProjects: 'Proyectos seleccionados'
    },
    contact: {
        title: 'Contacto',
        description:
            '¿Interesado en trabajar juntos o construir algo increíble?',
        primaryButton: 'Enviar Email',
        secondaryButton: 'GitHub'
    },
    footer: {
        text: 'Diseñado y desarrollado por Miguel Angel Jiménez'
    }
};
