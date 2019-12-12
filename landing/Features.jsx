import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Features = () => {
  return (
    <section id='features'>
      <h2>Artemis Laboratories: Adaptive Solutions</h2>
      <figure className='feature-item'>
        <div className='image-frame'>
          <img src='../images/feature-1.gif' alt='feature 1' />
        </div>
        <ScrollAnimation animateIn='fadeInRight'>
          <figcaption className='feature-description'>
            <h3>Engineer-first Approach</h3>
            <p>
            Artemis Labs Open Source provides decentralized GraphQL solutions 
            for testing Apollo Client environments in real time on the browser
            </p>
          </figcaption>
        </ScrollAnimation>
      </figure>
      <figure className='feature-item'>
        <ScrollAnimation animateIn='fadeInLeft'>
          <figcaption className='feature-description'>
            <h3>Why Project Artemis?</h3>
            <ul>
              <li>
                Visualize query structures and schema using dynamic introspection
              </li>
              <li>
                Test driven management of GraphQL Apollo Projects in development mode
              </li>
              <li>
                Cache and Query Performance monitoring 
              </li>
              <li>
                Artemis Labs LLP - Open Sourced
              </li>
            </ul>
          </figcaption>
        </ScrollAnimation>
        <div className='image-frame'>
          <img src='' alt='feature 2' />
        </div>
      </figure>
      <figure className='feature-item'>
        <div className='image-frame'>
          <i class='fas fa-keyboard'></i>
          <i class='fas fa-sitemap'></i>
        </div>
        <ScrollAnimation animateIn='fadeInRight'>
          <figcaption className='feature-description'>
            <h3>Shortcuts and Views</h3>
            <p>
              Keyboard shortcuts right at your fingertips to perform undo
              (ctrl+z) and redo (ctrl+shift+z) actions and toggle between
              horizontal and vertical views of the component tree.
            </p>
          </figcaption>
        </ScrollAnimation>
      </figure>
    </section>
  );
};

export default Features;