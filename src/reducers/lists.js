import { data } from '../helper/data';

export default function (state = data, action) {
  switch (action.type) {
    case 'value':
      break;

    default:
      return [...state];
  }
}
