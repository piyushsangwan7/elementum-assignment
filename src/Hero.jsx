import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import person3 from "./assets/person3.jpg";
import person4 from "./assets/person4.jpg";
import person5 from "./assets/person5.jpg";

function Hero() {
  return (
    <section>
      <h1>
        The thinkers and doers were changing the
        <br />
        status quo
      </h1>

      <p>
        We are a team of strategists, designers,
        communicators and researchers.
      </p>

      <div className="hero-images">
        <img src={person1} alt="" className="hero-img" />
        <img src={person2} alt="" className="hero-img" />
        <img src={person3} alt="" className="hero-img" />
        <img src={person4} alt="" className="hero-img" />
        <img src={person5} alt="" className="hero-img" />
      </div>
    </section>
  );
}

export default Hero;