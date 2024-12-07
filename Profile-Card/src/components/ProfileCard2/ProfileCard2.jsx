import ProfilePic2 from "./img2.jpg"
import "./ProfileCard2.css"

function ProfileCard2(){
    return (
        <>
            <div className="container2">
                <img className="profile-pic2" src={ProfilePic2} alt="profile pic"></img>
                <h2 className="profile-title2">Atreon88</h2>
                <p className="profile-description2">This is Atreon88 who is an youtuber and loves to play video games and football</p>
            </div>            
        </>
    );
}

export default ProfileCard2