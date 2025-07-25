export const UI_THEMES = {
  BLUE: 'blue',
  BLACK: 'black',
  GREEN: 'green',
  RED: 'red',
  GRAY: 'gray',
  YELLOW: 'yellow',
  PURPLE: 'purple',
  WHITE: 'white'
};

export const THEME_VALIDATOR = (value) => {
  return Object.values(UI_THEMES).includes(value);
};
