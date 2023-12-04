function Experience({ workExperienceList }) {

    if(workExperienceList.length==0){
        return <></>;
    }

    return (
        <section className="container dark">
            <h1 className="section-title">Experience</h1>
            {
                workExperienceList.map(entry => {
                    return (
                        <div className="entry inline dark-entry" key={entry.organizationName}>
                            <div className="details">
                                <h2>{entry.role}</h2>
                                <div className="space-around">
                                    <div className="inline">
                                        <h3> {entry.organizationName}&emsp;|&emsp;</h3>
                                        <h3>{entry.fromDate} - {entry.toDate}  </h3>
                                    </div>
                                    <p>{entry.description}</p>
                                    <p><b>Role</b> : {entry.role}</p>
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