function About() {
  return (
    <section className="about">
      <div className="about-left">
        <h2>
          Tomorrow will
          <br />
          be better than
          <br />
          today
        </h2>

        <p>
          We are a team of strategists, designers,
          communicators and researchers.
          Together, we believe progress only
          happens when you refuse to play things safe.
        </p>

        <a href="#">Read More →</a>
      </div>

      <div className="about-right">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
          alt="team"
        />
      </div>
    </section>
  );
}

export default About;