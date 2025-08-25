import "./About.css";
import about from "../assets/about.png";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Ekaant (एकांत)</h2>
        <p>
          Meaning solitude in Sanskrit — was born from a simple yet powerful vision: to create a space where people could escape the chaos of everyday life and experience true peace in the lap of nature.
        </p>
        <p>Our retreat is designed around the principles of sustainable living, mindful travel, and authentic rural experiences. At Ekaant, you’ll find no loud music, no distractions — only nature’s rhythm, traditional hospitality, and the gentle hum of wildlife.</p>
        <p>
          Whether you’re a solo traveller looking for quiet, a couple seeking a soulful escape, or a family wanting to introduce your children to the joys of rural India — Ekaant welcomes you with open arms and a calm heart.
        </p>
        <button className="btn">Explore More →</button>
      </div>
      <div className="about-img">
        <img src={about} alt="About Ekaant" />
      </div>
    </section>
  );
};

export default About;

