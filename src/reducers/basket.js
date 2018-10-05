const R = require('ramda');
/*
const Categories = props.filters.Categories;
const CategoriesTest = !R.isEmpty(Categories);

const Colors = props.filters.Colors;
const ColorsTest = !R.isEmpty(Colors);

const CategoriesFilter = state => {
	if (CategoriesTest) {
		return R.filter(el => Categories.indexOf(el.type) != -1, state);
	} else {
		return state;
	}
};

const ColorsFilter = state => {
	if (ColorsTest) {
		return R.map(
			x => R.assoc("attr", R.pickAll(Colors, R.prop("attr", x)), x),
			state
		);
	} else {
		return state;
	}
};

const newState = R.pipe(
	CategoriesFilter,
	ColorsFilter
)(props.products);

*/

const initState = {
	currentFilter: { Colors: [], Categories: [] },
	products: [
		{
			type: "kwadrat",
			attr: {
				czarny: { cena: 111 },
				czerwony: { cena: 222 },
				zielony: { cena: 333 }
			}
		},
		{
			type: "koło",
			attr: {
				czarny: { cena: 111 },
				czerwony: { cena: 222 },
				zielony: { cena: 333 },
				żółty: { cena: 444 },
				niebieski: { cena: 555 },
				biały: { cena: 666 }
			}
		},
		{
			type: "trójkąt",
			attr: {
				czarny: { cena: 111 },
				czerwony: { cena: 222 },
				zielony: { cena: 333 },
				żółty: { cena: 444 },
				niebieski: { cena: 555 },
				biały: { cena: 666 }
			}
		},
		{
			type: "prostokąt",
			attr: {
				czarny: { cena: 111 },
				czerwony: { cena: 222 },
				zielony: { cena: 333 },
				żółty: { cena: 444 },
				niebieski: { cena: 555 },
				biały: { cena: 666 }
			}
		},
		{
			type: "gwiazdka",
			attr: {
				czarny: { cena: 111 },
				czerwony: { cena: 222 },
				zielony: { cena: 333 },
				żółty: { cena: 444 },
				niebieski: { cena: 555 },
				biały: { cena: 666 }
			}
		},
	],
	productsFiltered: []
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