import { toggleTheme } from '../theme.js';

import { currentLanguage, toggleLanguage, t } from '../language.js';

import {
    initNavbarEvents
} from '../navbar-events.js';

export const Navbar = (module) => {
    setTimeout(() => {
        const themeButton = document.getElementById('theme-toggle');
        themeButton?.addEventListener('click', toggleTheme);
        const languageButton = document.getElementById('language-toggle');
        languageButton?.addEventListener('click', toggleLanguage);
        initNavbarEvents();
    });

    return `
        <header class="navbar">
            <div class="navbar-content">
                <a
                    href="#home"
                    class="navbar-brand gradient-text"
                >
                    <img
                        class="navbar-avatar"
                        src="./assets/images/profile.webp"
                        alt=""
                    />
                    @migueajm/
                </a>
                <nav class="navbar-links">
                    <a
                        href="#about"
                        class="nav-link"
                    >
                        ${t('navigation.about')}
                    </a>

                    <a
                        href="#skills"
                        class="nav-link"
                    >
                        ${t('navigation.skills')}
                    </a>

                    <a
                        href="#projects"
                        class="nav-link"
                    >
                        ${t('navigation.projects')}
                    </a>

                    <a
                        href="#experience"
                        class="nav-link"
                    >
                        ${t('navigation.experience')}
                    </a>

                    <a
                        href="#contact"
                        class="nav-link"
                    >
                        ${t('navigation.contact')}
                    </a>
                </nav>

                <div class="navbar-controls">
                    <button
                        id="language-toggle"
                        class="button button-secondary language-button"
                        type="button"
                        aria-label="${currentLanguage === 'es' ? t('language.switchToEnglish') : t('language.switchToSpanish')}"
                        title="${currentLanguage === 'es' ? t('language.switchToEnglish') : t('language.switchToSpanish')}"
                    >
                        ${currentLanguage.toUpperCase()}
                    </button>
                    <button
                        id="theme-toggle"
                        class="
                            button
                            button-primary
                            theme-button
                        "
                    >
                        ☀
                    </button>

                    <button
                        id="mobile-menu-button"
                        class="
                            mobile-menu-button
                            glass
                        "
                    >
                        <span
                            class="
                                mobile-menu-icon
                            "
                        ></span>
                    </button>
                </div>
            </div>
        </header>

        <div
            id="mobile-overlay"
            class="mobile-overlay"
        ></div>

        <aside
            id="mobile-sidebar"
            class="mobile-sidebar"
        >
            <nav>
                <a
                    href="#about"
                    class="nav-link"
                >
                    ${t('navigation.about')}
                </a>

                <a
                    href="#skills"
                    class="nav-link"
                >
                    ${t('navigation.skills')}
                </a>

                <a
                    href="#projects"
                    class="nav-link"
                >
                    ${t('navigation.projects')}
                </a>

                <a
                    href="#experience"
                    class="nav-link"
                >
                    ${t('navigation.experience')}
                </a>

                <a
                    href="#contact"
                    class="nav-link"
                >
                    ${t('navigation.contact')}
                </a>
            </nav>
        </aside>
    `;
};
