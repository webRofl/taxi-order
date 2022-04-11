export const validateOrderInput = (string) =>
  string.match(/^улица .+, [0-9]+/) || string.match(/^Улица .+, [0-9]+/);
