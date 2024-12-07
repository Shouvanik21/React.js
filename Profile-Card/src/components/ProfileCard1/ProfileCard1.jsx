import ProfilePic1 from "../../assets/img1.jpg"
import './ProfileCard1.css'

function ProfileCard1(){
    return (
        <>
            <div className="container1">
                <img className="profile-pic1" src={ProfilePic1} alt="profile pic"></img>
                <h2 className="profile-title1">Atreon88</h2>
                <p className="profile-description1">This is Atreon88 who is an youtuber and loves to play video games and football</p>
            </div>            
        </>
    );
}

export default ProfileCard1