import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from '@fortawesome/free-brands-svg-icons';

const git = <FontAwesomeIcon icon={faGithub} size="2x" />
function Project({ projects }){

  if(projects.length==0){
    return <></>;
  }

    var settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <section className="container grad-orange">
            <h1 className="section-title white">Projects</h1>
            <Slider  {...settings}>
            {
                projects.map(entry => {
                    return(
                        <div className="card-space" key={entry.name}>
                           
                          <div className="card">
                         
                           <div className="card-top">
                            
                           </div>
                           <div className="card-body">
                             <h3>{entry.name}</h3>
                             <h4>{entry.startDate}-{entry.endDate}</h4>
                             <p>{entry.decription}</p>
                             <a href={entry.url} className="git-link" target="_blank" rel="noreferrer noopener"><div className="git">{git}</div></a>
                           </div>
                        </div>
                        
                      </div>
                    )
                })
              }
            </Slider>
            <br /><br />
        </section>
    )
}

export default Project;

