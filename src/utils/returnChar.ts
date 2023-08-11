import singleCharOrange from '@assets/singleCharOrange.png';
import singleCharYellow from '@assets/singleCharYellow.png';
import singleCharGreen from '@assets/singleCharGreen.png';
import singleCharBlue from '@assets/singleCharBlue.png';

export const returnChar = (id: number) => {
  switch (id) {
    case 1:
      return singleCharBlue;
    case 2:
      return singleCharOrange;
    case 3:
      return singleCharGreen;
    case 4:
      return singleCharYellow;
    default:
      return singleCharBlue;
  }
};
