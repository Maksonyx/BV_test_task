import axios from 'axios';
import { getSportsAction, getSportsErrorAction, getSportsIsLoadingAction } from '../store/sportsReducer';

// export default class SportServises {
//   static async fetchAllData() {
//     const response = await axios.get('/bv_in_play/v2/en-gb/1/mini_inplay.json');

//         return response;
//   }

//   static async getById(sportId) {
//     const response = await axios.get(
//       '/bv_in_play/v2/en-gb/1/mini_inplay.json'
//     );
//     return response.sports.find((sport) => sport.id === sportId && sport.comp);
//   }
// }


export const asyncGetSports = () => {
  return function (dispatch) {
    dispatch(getSportsIsLoadingAction(true))
    
    axios.get('/bv_in_play/v2/en-gb/1/mini_inplay.json')
      .then((response) => dispatch(getSportsAction(response.data.sports)))
      .catch(error => dispatch(getSportsErrorAction(error.message)))
      .finally(() => dispatch(getSportsIsLoadingAction(false)));
  };
};