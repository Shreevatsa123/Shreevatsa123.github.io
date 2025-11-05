tsParticles.load({
  id: "particles-container",
  options: {
    background: {
      color: {
        value: "transparent", // Makes background transparent
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Adds more particles when you click
        },
        onHover: {
          enable: true,
          mode: "connect", // Connects particles when you hover
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        connect: {
          distance: 100,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Particle color
      },
      links: {
        color: {
          value: "#ffffff", // Line color
        },
        distance: 150,
        enable: true,
        opacity: 0.2, // Faint lines
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1, // Slow movement
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 100, // Number of particles
      },
      opacity: {
        value: 0.3, // Faint dots
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 }, // Small dots
      },
    },
    detectRetina: true,
  },
});