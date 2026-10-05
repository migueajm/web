import { skills } from '../data/skills.js';
import { t } from '../language.js';

const iconForSkill = {
    JavaScript: 'js', TypeScript: 'ts', Vue: 'vue', React: 'react',
    Angular: 'angular', HTML5: 'html', CSS3: 'css', PHP: 'php',
    Symfony: 'symfony', Laravel: 'laravel', 'Node.js': 'nodejs',
    'Express.js': 'nodejs', 'REST APIs': 'jwt', Flutter: 'flutter',
    Dart: 'dart', Android: 'android', iOS: 'ios', Windows: 'terminal',
    PostgreSQL: 'postgresql', MySQL: 'mysql', SQLite: 'sql'
};

const renderSkills = (items) =>
    items.map((skill) => `
        <div class="skill-chip">
            <img
                class="skill-icon"
                src="./assets/images/code/${iconForSkill[skill]}.webp"
                alt=""
                loading="lazy"
                aria-hidden="true"
            />
            <span>${skill}</span>
        </div>
    `).join('');

export const Skills = () => `
<section
    id="skills"
    class="section"
>
    <div class="container">
        <div class="fade-up">
            <h2 class="section-title">
                ${t('skills.title')}
            </h2>
        </div>
        <div class="grid-2 grid-s-1">
            <div class="card glass">
                <h3>Frontend</h3>
                <div class="skills-list">
                    ${renderSkills(
                        skills.frontend
                    )}
                </div>
            </div>
            <div class="card glass">
                <h3>Backend</h3>
                <div class="skills-list">
                    ${renderSkills(
                        skills.backend
                    )}
                </div>
            </div>
            <div class="card glass">
                <h3>Mobile/Desktop</h3>
                <div class="skills-list">
                    ${renderSkills(
                        skills.mobile
                    )}
                </div>
            </div>
            <div class="card glass">
                <h3>Database</h3>
                <div class="skills-list">
                    ${renderSkills(
                        skills.database
                    )}
                </div>
            </div>
        </div>
    </div>
</section>
`;
