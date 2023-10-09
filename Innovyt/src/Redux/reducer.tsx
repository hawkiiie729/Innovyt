// reducers/userReducer.ts
import { priceMenu } from "./AllType";
interface UserState {
  data: priceMenu;
  error: any;
}

const initialState: UserState = {
  data: null,
  error: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_DETAIL':
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
