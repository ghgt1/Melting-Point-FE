export const splitBalance = (inputString: string) => {
  const parts = inputString.split(':');

  const firstPart = parts[0].trim();
  const secondPart = parseFloat(parts[1]);

  const resultArray = [firstPart, secondPart];

  return resultArray;
};
