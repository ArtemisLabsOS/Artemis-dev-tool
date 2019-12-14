import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col m6">
            <h3>Bogus Studio</h3>
            <p>We are a studio that aims to give our clients a platform that exemplifies a good user experience...</p>
          </div>
          <div className="col m6">
            <div className="stats">
              <div className="stat blue darken-2">
                <h2 className="counter white-text">123</h2>
                <p className="grey-text darken-1">coders maimed</p>
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">123</h2>
                <p className="grey-text darken-1">fresh pots of coffee</p>
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">123</h2>
                <p className="grey-text lighten-1">pounds gnar shredded</p>
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">0</h2>
                <p className="grey-text darken-1">honeybadgers harmed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p>Along with a conservative dose of personality.</p>
        </div>
      </div>
    </section>
  );
};

export default About;