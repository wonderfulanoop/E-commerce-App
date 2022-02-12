import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { ADD_ITEM, REMOVE_ITEM,MANAGE_QTY } from "../actions/actions";

const initialState = []

export default (state=initialState, action)=> {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload]
    case REMOVE_ITEM:
      state = state.filter((item)=> item.id != action.payload.id)
      return state;
    case MANAGE_QTY:
      const itemIndex = state.findIndex((item)=> item.id ===action.payload.product_id)
      state[itemIndex]['quantity'] = Number(action.payload.qty)
      state = [...state]
      return state;
    default:
      return state;
  }
} 