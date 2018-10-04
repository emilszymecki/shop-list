const initState = {
   currentFilter: {},
   pickupBasket:[]
}

export const BASKET_ADD = 'BASKET_ADD';
export const BASKET_PICKUP = 'BASKET_PICKUP';

export const BasketAdd = (val) => ({type:BASKET_ADD, payload: val})

export default (state = initState, action) => {
  switch (action.type) {
    case BASKET_ADD:
      return {...state, currentFilter: {...state.currentFilter,...action.payload}}
    default:
      return state
  }
}