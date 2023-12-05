import icons from './icons.jsx';
import Visits from './Visits.jsx';
import '../../styles/Template1.css';

function ContactMe({ contacts }) {
    if (contacts.length === 0) {
        return <></>;
    }

    return (
        <section>
            <section className="container dark grad-blue">
                <h1 className="section-title">Contact Me</h1>
                <br /><br />
                <div className='space-between skills'>
                    {
                        contacts.map(entry => {
                            // Find the matching entry in contactMapping

                            function renderContent(site){
                                if (site == "Linkedin") {
                                    return icons["li1"];
                                }
                                else if (site == "Github") {
                                    return icons["git1"];
                                }
                                else if (site == "Instagram") {
                                    return icons["insta1"];
                                }
                            }

                            return (
                                <a href={entry.url} className='git-link' target="_blank" rel="noreferrer noopener" key={entry.name}>
                                    <div className='dark-entry skill-card center'>
                                        <p className='medium' style={{ margin: 10 }}>{renderContent(entry.name)} {entry.name}</p>
                                    </div>
                                </a>
                            );
                        })
                    }
                </div>
                <br /><br />

                <Visits />
            </section>

            <footer className='grad-progress center' style={{ paddingTop: 5, paddingBottom: 5 }}>
                {icons["copy1"]} <small>This site was designed and developed by Kavya Nandigam</small>
            </footer>

        </section>
    );
}

export default ContactMe;
