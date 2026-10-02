import eureka7 from "./assets/eureka7.jpg";

function Card() {
    return (
        <div className="card">
            <img classNmae="card-image" src={eureka7} width="250" alt="profile picture" />
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make YouTube videos and play video games.</p>
        </div>
    );
}

export default Card; 