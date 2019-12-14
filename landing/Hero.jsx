import React from 'react';
import logo from '../assets/images/logo.png';
import GitHubButton from 'react-github-btn';

const Hero = () => {
  return (
    <section id='hero'>
      <div id='hero-description'>
        <div className='logo-frame'>
          <img className='logo' src={logo} alt='react blue logo' />
        </div>
        <h2>Artemis Labs[print]</h2>
        <div className='github-buttons'>
          <GitHubButton
            href=''
            data-size='large'
            aria-label=''
          >
            Follow Project Artemis Worldwide
          </GitHubButton>
          <GitHubButton
            href=''
            data-icon='octicon-star'
            data-size='large'
            data-show-count='true'
            aria-label=''
          >
            Star
          </GitHubButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;