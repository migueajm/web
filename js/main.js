import { renderApp } from './router.js';
import { initTheme } from './theme.js';
import { initLanguage } from './language.js';
import { initAnimations } from './animations.js';
import {
    updateActiveSection
} from './navbar-events.js';

document.addEventListener(
    'DOMContentLoaded',
    () => {
        initTheme();
        initLanguage();
        renderApp();
        requestAnimationFrame(() => {
            initAnimations();
        });
        window.addEventListener(
            'hashchange',
            renderApp
        );
        window.addEventListener(
            'portfolio-language-change',
            () => {
                const scrollPosition = window.scrollY;
                renderApp();
                window.scrollTo(0, scrollPosition);
                requestAnimationFrame(() => {
                    initAnimations();
                    updateActiveSection();
                });
            }
        );
        updateActiveSection();
        window.addEventListener(
            'scroll',
            updateActiveSection
        );
    }
);
