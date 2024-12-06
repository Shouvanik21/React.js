import ProfilePic from "../assets/img.jpg";

function ProfileCard(){
    return (
        <>
            <div className="container">
                <img className="profile-pic" src={ProfilePic} alt="profile pic"></img>
                <h2 className="profile-title">Atreon88</h2>
                <p className="profile-description">This is Atreon88 who is an youtuber and loves to play video games and football</p>
            </div>            
        </>
    );
}

export default ProfileCard