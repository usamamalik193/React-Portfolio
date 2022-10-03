export const LIGHT_THEME_PARTICLES = {
  number: {
    value: 20,
    density: {
      enable: true,
      value_area: 800,
    },
  },
  color: {
    value: '#623686',
  },
  opacity: {
    value: 1,
    random: true,
    anim: {
      enable: true,
      speed: 5,
      opacity_min: 0.1,
      sync: false,
    },
  },
  size: {
    value: 5,
    random: true,
    anim: {
      enable: true,
      speed: 2,
      size_min: 3,
      sync: false,
    },
  },
  links: {
    enable: true,
    color: '#623686',
    distance: 50,
    width: 1,
    consent: false,
  },
  move: {
    enable: true,
    speed: 1,
    direction: 'none',
    random: false,
    straight: false,
    out_mode: 'out',
    bounce: false,
    attract: {
      enable: true,
      rotateX: 600,
      rotateY: 1200,
    },
  },
};

export const DARK_THEME_PARTICLES = {
  number: {
    value: 100,
    density: {
      enable: true,
      area: 1000,
    },
  },
  size: {
    value: 2,
  },
  opacity: {
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0.05,
    },
    
  },
  links: {
    enable: false,
    color: "#FFFFFF",
    distance: 150,
    width: 2,
    consent: false,
  },
  move: {
    enable: true,
    speed: 1,
    direction: 'none',
    random: true,
    straight: false,
    out_mode: 'out',
    bounce: false,
    attract: {
      enable: true,
      rotateX: 600,
      rotateY: 1200,
    },
  },

};
