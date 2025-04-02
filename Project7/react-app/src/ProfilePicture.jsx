function ProfilePicture(){

    const imageUrl = './src/assets/ProfilePic.jpg';


    const handleClick = (e) => e.target.style.visibility = "hidden"
    const show = ()=>{const img = document.querySelector("img")
        img.style.visibility = "visible";
    }

    return (<><img onClick={e=>handleClick(e)} src={imageUrl}></img>
    <button onClick={show}>Show</button>
    </>)
}

export default ProfilePicture