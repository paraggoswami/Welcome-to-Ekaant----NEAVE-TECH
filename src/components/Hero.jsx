import "./Hero.css";
import main from "../assets/main.jpg"; 

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${main})` }}>
      <div className="hero-content">
        <h1>
          WELCOME TO EKAANT—ACRO TOURISM RETREAT NEAR BOR TIGER RESERVE, MAHARASHRA
        </h1>
        <p>Where Silence Heals, And Nature Whispers...</p>
      </div>
    </section>
  );
};

export default Hero;
