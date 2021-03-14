import produce from 'immer';

const INITIAL_STATE = {
  data: {
    city: '',
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    icon: '',
    description: '',
  },
  tempMax: 0,
  tempMin: 0,
  loading: true,
  error: false,
};

export default function temperature(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@temperature/TEMPERATURE_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        const tempMax = localStorage.getItem('@challengerAmbar:tempMax');
        const tempMin = localStorage.getItem('@challengerAmbar:tempMin');
        if (tempMax && tempMin) {
          if (action.payload.data.temp_max > parseFloat(tempMax)) {
            localStorage.setItem(
              '@challengerAmbar:tempMax',
              action.payload.data.temp_max
            );
            draft.tempMax = action.payload.data.temp_max;
          } else {
            draft.tempMax = parseFloat(tempMax);
          }
          if (action.payload.data.temp_min < parseFloat(tempMin)) {
            localStorage.setItem(
              '@challengerAmbar:tempMin',
              action.payload.data.temp_min
            );
            draft.tempMin = action.payload.data.temp_min;
          } else {
            draft.tempMin = parseFloat(tempMin);
          }
        } else {
          localStorage.setItem(
            '@challengerAmbar:tempMax',
            action.payload.data.temp_max
          );
          draft.tempMax = action.payload.data.temp_max;

          localStorage.setItem(
            '@challengerAmbar:tempMin',
            action.payload.data.temp_min
          );
          draft.tempMin = action.payload.data.temp_min;
        }
        break;
      }

      case '@temperature/TEMPERATURE_FAILURE': {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
