import "./HowToReach.css";
import mapImg from "../assets/map.png";

const HowToReach = () => {
  return (
    <section id="reach" className="reach">
      <h2>HOW TO REACH <span>EKAANT</span></h2>
      <div className="reach-container">
        <div className="reach-left">
          <img src={mapImg} alt="How to reach Ekaant" />
        </div>

        <div className="reach-right">
          <div className="reach-box">
            <h3>By Road</h3>
            <ul>
              <li>80 Km from Nagpur</li>
              <li>40 Km from Wardha</li>
              <li>Well connected via NH-361 and local village roads</li>
              <li>Ample parking available at the property</li>
            </ul>
          </div>

          <div className="reach-box">
            <h3>By Train</h3>
            <ul>
              <li>Nearest Railway Station: Seloo (10 km), Wardha Junction (40 km)</li>
              <li>Taxis and local autos available from stations</li>
            </ul>
          </div>

          <div className="reach-box">
            <h3>By Air</h3>
            <ul>
              <li>Nearest Airport: Nagpur Dr. Babasaheb Ambedkar International Airport (Approx. 90 km)</li>
              <li>Car rentals or private taxis available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToReach;
