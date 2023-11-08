import React from 'react';

const AboutMe = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Me</h1>
      <p>Hello! I'm [Your Name], a passionate frontend developer.</p>
      <p>
        I have a love for creating seamless user experiences and bringing designs to life through code. With a keen eye for detail and a dedication to crafting responsive, accessible websites, I am always looking for new challenges and opportunities to grow.
      </p>
      <p>
        When I'm not coding, you'll find me exploring the great outdoors or curled up with a good book. I'm always eager to learn new things, whether it's the latest web technology or a fascinating piece of history.
      </p>
      <p>
        If you'd like to connect or see some of my work, feel free to check out my portfolio or get in touch!
      </p>
      {/* You can link to your portfolio or contact page here */}
      <a href="/portfolio">My Portfolio</a> | <a href="/contact">Contact Me</a>
    </div>
  );
};

export default AboutMe;
