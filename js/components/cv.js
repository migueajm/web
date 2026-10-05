import { currentLanguage, t, toggleLanguage } from '../language.js';
import { experience } from '../data/experience.js';
import { projects } from '../data/projects.js';

const renderExperience = () => experience.map((job) => `
    <article class="cv-entry">
        <div class="cv-entry-heading">
            <div><h3>${job.role}</h3><p>${job.company}</p></div>
            <span>${job.period}</span>
        </div>
        <p>${job.description[currentLanguage]}</p>
    </article>
`).join('');

const featuredProjects = [
    'infolead-api',
    'expo-amic-dental',
    'infolead',
    'infoaccess'
];
const renderProjects = () => projects
    .filter((project) => featuredProjects.includes(project.slug))
    .map((project) => `
        <article class="cv-project">
            <h3>${project.title}</h3>
            <p>${project.description[currentLanguage]}</p>
        </article>
    `).join('');

export const CV = () => {
    setTimeout(() => {
        document.getElementById('cv-language-toggle')
            ?.addEventListener('click', toggleLanguage);
    });

    return `
<main class="cv-page">
<section id="cv" class="cv-section">
    <div class="container">
        <div class="cv-top-actions">
            <a href="#home" class="cv-back">
                <span aria-hidden="true">←</span> ${t('cv.back')}
            </a>
            <button
                id="cv-language-toggle"
                class="button button-secondary language-button"
                type="button"
                aria-label="${currentLanguage === 'es' ? t('language.switchToEnglish') : t('language.switchToSpanish')}"
                title="${currentLanguage === 'es' ? t('language.switchToEnglish') : t('language.switchToSpanish')}"
            >${currentLanguage.toUpperCase()}</button>
        </div>
        <div class="cv-toolbar">
            <div>
                <h2 class="section-title">${t('cv.title')}</h2>
                <p class="section-subtitle">${t('cv.intro')}</p>
            </div>
            <button class="button button-primary cv-download" onclick="window.print()">
                ${t('cv.download')}
            </button>
        </div>

        <article class="cv-document">
            <header class="cv-header">
                <div>
                    <h1>Miguel Angel Jiménez</h1>
                    <p class="cv-headline">${t('cv.headline')}</p>
                </div>
                <div class="cv-contact">
                    <a href="https://github.com/migueajm">github.com/migueajm</a>
                    <a href="${window.location.origin}">${t('cv.portfolio')}</a>
                </div>
            </header>

            <section class="cv-block">
                <h2>${t('cv.profile')}</h2>
                <p>${t('cv.summary')}</p>
            </section>
            <section class="cv-block">
                <h2>${t('cv.expertise')}</h2>
                <p>${t('cv.expertiseText')}</p>
            </section>
            <section class="cv-block">
                <h2>${t('cv.technicalSkills')}</h2>
                <dl class="cv-skills">
                    <div><dt>${t('cv.backend')}</dt><dd>PHP 8, Symfony 7 / 3, REST APIs, JWT, Composer</dd></div>
                    <div><dt>${t('cv.mobile')}</dt><dd>Flutter, Dart, Provider, SQLite, Firebase Cloud Messaging, QR</dd></div>
                    <div><dt>${t('cv.data')}</dt><dd>PostgreSQL, SQL, JSON / JSONB, SQLite</dd></div>
                    <div><dt>${t('cv.architecture')}</dt><dd>Layered architecture, Service Layer, Repository Pattern, Dependency Injection</dd></div>
                    <div><dt>${t('cv.tools')}</dt><dd>Git, Composer, Android SDK, Gradle, Xcode, Apache, PHP-FPM</dd></div>
                    <div><dt>${t('cv.other')}</dt><dd>HTML, CSS, JavaScript, Firebase, OpenAI API, PDF / Excel generation</dd></div>
                </dl>
            </section>
            <section class="cv-block">
                <h2>${t('cv.experience')}</h2>
                <div class="cv-entries">${renderExperience()}</div>
            </section>
            <section class="cv-block">
                <h2>${t('cv.selectedProjects')}</h2>
                <div class="cv-projects">${renderProjects()}</div>
            </section>
        </article>
    </div>
</section>
</main>
`;
};
