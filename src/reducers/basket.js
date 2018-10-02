const initState = {
   currentBasket: 'START',
   pickupBasket:[]
}

export const BASKET_ADD = 'BASKET_ADD';
export const BASKET_PICKUP = 'BASKET_PICKUP';

export const BasketAdd = (val) => ({type:BASKET_ADD, payload: val})
export const BasketPickup = (val) => ({type:BASKET_PICKUP, payload: val})

export default (state = initState, action) => {
  switch (action.type) {
    case BASKET_ADD:
      return {...state, currentBasket: action.payload}
    case BASKET_PICKUP:
      return {...state, pickupBasket: [...state.pickupBasket,action.payload].filter((el,idx,a) =>  a.indexOf(el) == idx)}  
    default:
      return state
  }
}