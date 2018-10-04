const initState = {
	currentFilter: {Colors:[],Categories:[]},
	products: [
		{
			type: "kwadrat",
			attr: {
				czarny: 111,
				czerwony: 222,
				zielony: 333,
				żółty: 444,
				niebieski: 555,
				biały: 666
			}
		},
		{
			type: "koło",
			attr: {
				czarny: 111,
				czerwony: 222,
				zielony: 333,
				żółty: 444,
				niebieski: 555,
				biały: 666
			}
		},
		{
			type: "trójkąt",
			attr: {
				czarny: 111,
				czerwony: 222,
				zielony: 333,
				żółty: 444,
				niebieski: 555,
				biały: 666
			}
		},
		{
			type: "prostokąt",
			attr: {
				czarny: 111,
				czerwony: 222,
				zielony: 333,
				żółty: 444,
				niebieski: 555,
				biały: 666
			}
		},
		{
			type: "gwiazdka",
			attr: {
				czarny: 111,
				czerwony: 222,
				zielony: 333,
				żółty: 444,
				niebieski: 555,
				biały: 666
			}
		}
	]
};

export const FILTER_ADD = "FILTER_ADD";

export const FilterAdd = val => ({ type: FILTER_ADD, payload: val });

export default (state = initState, action) => {
	switch (action.type) {
		case FILTER_ADD:
			return {
				...state,
				currentFilter: { ...state.currentFilter, ...action.payload }
			};
		default:
			return state;
	}
};