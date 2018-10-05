const initState = {
	currentFilter: {Colors:[],Categories:[]},
	products: [
		{
			type: "kwadrat",
			attr: {
				czarny: {cena:111},
				czerwony: {cena:222},
				zielony: {cena:333},

			}
		},
		{
			type: "koło",
			attr: {
				czarny: {cena:111},
				czerwony: {cena:222},
				zielony: {cena:333},
				żółty: {cena:444},
				niebieski: {cena:555},
				biały:{cena:666}
			}
		},
		{
			type: "trójkąt",
			attr: {
				czarny: {cena:111},
				czerwony: {cena:222},
				zielony: {cena:333},
				żółty: {cena:444},
				niebieski: {cena:555},
				biały:{cena:666}
			}
		},
		{
			type: "prostokąt",
			attr: {
				czarny: {cena:111},
				czerwony: {cena:222},
				zielony: {cena:333},
				żółty: {cena:444},
				niebieski: {cena:555},
				biały:{cena:666}
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
	],
	productsFiltered:[]
};

export const FILTER_ADD = "FILTER_ADD";
export const FILTER_PRODUCT = "FILTER_PRODUCT";

export const FilterAdd = val => ({ type: FILTER_ADD, payload: val });
export const ProductsFilter = val => ({ type: FILTER_PRODUCT, payload: val });


export default (state = initState, action) => {
	switch (action.type) {
		case FILTER_ADD:
			return {
				...state,
				currentFilter: { ...state.currentFilter, ...action.payload }
			};
		case FILTER_PRODUCT:
			return {
				...state,
				productsFiltered: action.payload
			};
		default:
			return state;
	}
};