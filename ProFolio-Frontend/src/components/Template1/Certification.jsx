
export default function Certification({ certifications }) {

    if (certifications.length == 0) {
        return <></>;
    }

    return (
        <section className="container light">
            <h1 className="section-title">Certifications or Licenses</h1>
            {
                certifications.map(entry => {
                    return (
                        <div className="padd" key={entry.name}>
                            <div className="entry inline light-entry">
                                <div className="details">
                                    <h2>{entry.name}</h2>
                                    <p>
                                        {entry.provider}
                                    </p>
                                    <div className="inline">
                                        <h3><label>Issued On: </label> {entry.issuedOn} <label>Valid Until: </label> {entry.validUntil}&emsp;|&emsp;</h3>
                                        <h3><label>Credential Id: </label> {entry.credentialId}</h3>

                                    </div>
                                    <h4>{entry.url}</h4>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
}