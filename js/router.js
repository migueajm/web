import { App } from './views/app.js';
import { ProjectDetail } from './components/project-detail.js';
import { CV } from './components/cv.js';

export const renderApp = () => {
    const app = document.getElementById('app');
    const hash = window.location.hash || '#home';
    if (hash === '#/cv') {
        app.innerHTML = CV();
        window.scrollTo(0, 0);
        return;
    }
    if (hash.includes('/project/')) {
        const slug = hash.replace('#/project/', '');
        app.innerHTML = ProjectDetail(slug);
        return;
    }
    app.innerHTML = App(hash);
};
