import React from 'react';
import Particles from 'react-tsparticles';

const HyperspaceBackground = () => (
  <Particles 
    options={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff', // white stars
        },
        opacity: {
          value: 0.5,
          animation: {
            enable: true,
          },
        },
        size: {
          value: 3,
          random: true,
          animation: {
            enable: false,
          },
        },
        links: {
          enable: false,
        },
        move: {
          speed: 10, // speed of moving stars
          direction: 'none',
          random: true,
          straight: false,
          outMode: 'out',
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'bubble',
          },
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            size: 0,
            opacity: 0,
          },
          repulse: {
            distance: 400,
            duration: 4,
          },
        },
      },
    }} 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  />
);

export default HyperspaceBackground;
