import ProfilePic from "../assets/img.jpg";

function ProfileCard(){
    return (
        <>
            <img src={ProfilePic} alt="profile pic"></img>
            <h2>Bro</h2>
            <p>This is Bro</p>
        </>
    );
}

export default ProfileCard