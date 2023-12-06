import { Jumbotron } from "./Jumbotron";

export default function AboutMe({ userData }) {

    return (
        <Jumbotron id="About" className="m-0">
            <div className="container row">
                <div className="col-5 d-none d-lg-block align-self-center">
                    {userData.mediaList.length != 0 && (
                        <img
                            className="border border-secondary rounded-circle"
                            src={userData.mediaList[0].url}
                            alt="profilepicture"
                            width={375}
                            height={375}
                        />
                    )}
                </div>
                <div className={`col-lg-${userData.mediaList.length != 0 ? "7" : "12"}`}>
                    <h2 className="display-4 mb-5 text-center">{userData.title}</h2>
                    <p className="lead text-center">{userData.about}</p>
                </div>
            </div>
        </Jumbotron>
    );
}