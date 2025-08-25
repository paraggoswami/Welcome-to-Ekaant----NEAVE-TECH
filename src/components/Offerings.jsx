import "./Offerings.css";
import second from "../assets/second.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";

const Offerings = () => {
  return (
    <section id="amenities" className="offerings">
      <h2>What We Offer</h2>
      <div className="offerings-grid">
        <div className="card">
          <img src={second} alt="Farm Stay" />
          <h4>Boutique Farm Stay</h4>
        </div>
        <div className="card">
          <img src={three} alt="Agro-Tourism" />
          <h4>Agro-Tourism Activities</h4>
        </div>
        <div className="card">
          <img src={five} alt="Wildlife" />
          <h4>Forest & Wildlife Encounters</h4>
        </div>
        <div className="card">
          <img src={four} alt="Stargazing" />
          <h4>Stargazing Nights</h4>
        </div>
        <div className="card">
          <img src={seven} alt="Bonfire" />
          <h4>Bonfire Evenings</h4>
        </div>
        <div className="card">
          <img src={eight} alt="Wellness" />
          <h4>Digital Detox & Wellness</h4>
        </div>
      </div>
      <button className="btn">Book Now →</button>
    </section>
  );
};

export default Offerings;
