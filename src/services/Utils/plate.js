export const formatPlate = (plate = '') => {
  const regexPlate = /^[a-zA-Z]{3}[0-9]{4}$/;
  if (regexPlate.test(plate)) {
    return `${plate.substr(0, 3)}-${plate.substr(3, 4)}`;
  }
  return plate
};
