import React from 'react';
import HeroImage from 'static/img/unicef.jpg';
import './LandingHero.scss';

function LandingHero() {
  return (
    <section className="landing-hero">
      <img className="hero-image" src={HeroImage} alt="HeroImage" />
    </section>
  );
}

export default LandingHero;
