

function Experience({ experienceHistory }) {

    return (
        <section className="container dark">
            <h1 className="section-title">Experience</h1>
            {
                experienceHistory.map(entry => {
                    return (

                        <div className="entry inline dark-entry" key={entry.id}>
                            <div className="logo">
                                <img src={entry.logo} alt="" height="100%" width="100%" />
                            </div>
                            <div className="details">
                                <h2>{entry.job_title}</h2>
                                <div className="space-around">
                                    <div className="inline">
                                        <h3> {entry.employer}&emsp;|&emsp;</h3>
                                        <h3>{entry.from} - {entry.to}  </h3>
                                    </div>
                                    <p>{entry.description}</p>
                                    <p><b>Technologies</b> : {entry.techs}</p>

                                </div>
                            </div>

                        </div>

                    )
                })
            }
        </section>
    );
}

export default Experience;