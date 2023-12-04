
export default function Education({ educationList }) {

    if (educationList.length == 0) {
        return <></>;
    }

    return (
        <section className="container light">
            <h1 className="section-title">Education</h1>
            {
                educationList.map(entry => {
                    return (
                        <div className="padd" key={entry.institutionName}>
                            <div className="entry inline light-entry">
                                <div className="details">
                                    <h2>{entry.institutionName}</h2>
                                    <p>
                                        {entry.description}
                                    </p>
                                    <div className="inline">
                                        <h3>{entry.fromDate} - {entry.toDate}&emsp;|&emsp;</h3>
                                        <h3>{entry.grade}</h3>

                                    </div>
                                    <h4>{entry.degreeName}</h4>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
}