import ProfilePic from "../assets/img.jpg";

function ProfileCard(){
    return (
        <>
            <div className="container">
                <img className="profile-pic" src={ProfilePic} alt="profile pic"></img>
                <h2 className="profile-title">Bro</h2>
                <p className="profile-description">This is Bro</p>
            </div>            
        </>
    );
}

export default ProfileCard