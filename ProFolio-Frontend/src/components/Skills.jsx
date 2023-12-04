
import ProgressBar from './skill_bar.jsx';

function Skills({ skillHistory }){ 
    return(
        <section className="container dark">
            <h1 className="section-title">Skill Set</h1>
            <div className="space-between skills">
            {
                skillHistory.map(entry => {
                    return(
                        <div className="dark-entry skill-card" style={{padding:20}} key={entry.id}>
                            <ProgressBar width={95} percent={entry.percent} level = {entry.level} />
                            <h4>{entry.skill}</h4>
                            <h5>{entry.Techs}</h5>
                        </div>
                    )
                })
            }
            </div>
        </section>
    );
}

export default Skills;