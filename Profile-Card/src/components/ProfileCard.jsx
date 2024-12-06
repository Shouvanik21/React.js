import ProfilePic from "../assets/img.jpg";

function ProfileCard(){
    return (
        <>
            <img className="profile-pic" src={ProfilePic} alt="profile pic"></img>
            <h2 className="profile-title">Bro</h2>
            <p className="profile-description">This is Bro</p>
        </>
    );
}

export default ProfileCard