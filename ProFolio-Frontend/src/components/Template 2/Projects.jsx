export function Template2Projects({projects}) {

    if(projects.length==0){
        return (<></>);
    }

    return (
        <section id="projects">
            <h1>These are some of my projects</h1>
            <div id="projects-container">
            {
                projects.map(project => {
                    return(<a href={project.url} target="_blank" rel="noreferrer" className="project-tile"><h4><span className="code">&lt;</span>{project.name}<span className="code">/&gt;</span></h4></a>)
                })
            }
            </div>
            <a id="see-more-button" href="https://github.com/adityar224?tab=repositories" target="_blank"
                rel="noreferrer"><span>Show all</span><i className="fas fa-chevron-right icon"></i></a>
        </section>
    );
}