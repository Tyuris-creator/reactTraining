import profilePic from './assets/snus.jpg'

function Card(){
    return(
        <div className="card">
            <img alt="Logo" src={profilePic} className='logo'></img>
            <h2 >Bro Code Tutorial</h2>
            <p className='card-title'>I am 23 and i am deeply want to switch my major AND BECOME DEVELOPER</p>
        </div>
    );

}

export default Card