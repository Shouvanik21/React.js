import ProfilePic2 from "../../assets/img2.jpg"
import "./ProfileCard2.css"

function ProfileCard2(){
    return (
        <>
            <div className="container2">
                <img className="profile-pic2" src={ProfilePic2} alt="profile pic"></img>
                <h2 className="profile-title2">Xephen77</h2>
                <p className="profile-description2">This is Xephen77 who is an youtuber and loves to play video games and baseball</p>
            </div>            
        </>
    );
}

export default ProfileCard2