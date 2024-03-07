import "./team.css"
import teamImg from "./images/teamImg.png"

export const Team = () => {
    return(
        <div className="team">
            <h2>Team</h2>
            <p>Lorem ipsum dolor sit amet ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur </p>
            <div className="team-mates">
                <div className="profile">
                <img className="teamImg" alt="teamImg" src={teamImg}></img>
                <p  ><strong>John Smith</strong></p>
                <p className="team-mate-name">Designation here</p>
                </div>
                <p className="team-mate-para" >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>
            <div className="team-mates">
                <div className="profile">
                <img className="teamImg" alt="teamImg" src={teamImg}></img>
                <p  ><strong>John Smith</strong></p>
                <p className="team-mate-name">Designation here</p>
                </div>
                <p className="team-mate-para" >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>
            <div className="team-mates">
                <div className="profile">
                <img className="teamImg" alt="teamImg" src={teamImg}></img>
                <p  ><strong>John Smith</strong></p>
                <p className="team-mate-name">Designation here</p>
                </div>
                <p className="team-mate-para" >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>
        </div>
    )
}
