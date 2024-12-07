import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginBottom: 10,
        fontSize: '1.5rem', // Adjusts better for responsiveness
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap', // Makes it responsive for smaller screens
        gap: '10px', // Adds spacing between elements
      }}
    >
      <span>Made by Ajinkya Ladkat | </span>
      <a
        href="https://github.com/AjinkyaLadkat"
        style={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#007bff',
          fontWeight: 'bold',
        }}
      >
        GitHub
      </a>
    </div>
  );
};

export default Footer;
