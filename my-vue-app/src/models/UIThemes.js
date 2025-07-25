export const UI_THEMES = {
  BLUE: 'blue',
  BLACK: 'black',
  WHITE: 'white',
};

export const THEME_VALIDATOR = (value) => {
  return Object.values(UI_THEMES).includes(value);
};
