const initState = {
   currentFilter: {},
   pickupBasket:[]
}

export const FILTER_ADD = 'FILTER_ADD';


export const FilterAdd = (val) => ({type:FILTER_ADD, payload: val})

export default (state = initState, action) => {
  switch (action.type) {
    case FILTER_ADD:
      return {...state, currentFilter: {...state.currentFilter,...action.payload}}
    default:
      return state
  }
}