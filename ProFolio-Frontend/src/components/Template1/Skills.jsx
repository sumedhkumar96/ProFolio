
import ProgressBar from './skill_bar.jsx';

function Skills({ skills }) {
    return (
        <section className="container dark">
            <h1 className="section-title">Skill Set</h1>
            <div className="space-between skills">
                {
                    skills.map(skill => {
                        return (
                            <div className="dark-entry skill-card" style={{ padding: 20 }} key={skill.name}>
                                <ProgressBar width={95} percent={100} level={100} />
                                <h4>{skill.name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Skills;