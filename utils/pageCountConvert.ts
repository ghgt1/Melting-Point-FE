export const pageCountConvert = (page: number) => {
  switch (page) {
    case 1:
      return '첫';
    case 2:
      return '두';
    case 3:
      return '세';
    case 4:
      return '네';
    default:
      return '첫';
  }
};
