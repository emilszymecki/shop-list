const R = require("ramda");

export const colors = [
	{ key: "czarny", text: "czarny", value: "czarny" },
	{ key: "czerwony", text: "czerwony", value: "czerwony" },
	{ key: "zielony", text: "zielony", value: "zielony" },
	{ key: "żółty", text: "żółty", value: "żółty" },
	{ key: "niebieski", text: "niebieski", value: "niebieski" },
	{ key: "biały", text: "biały", value: "biały" }
]

export const category = [
	{ key: "kwadrat", text: "kwadrat", value: "kwadrat" },
	{ key: "koło", text: "koło", value: "koło" },
	{ key: "trójkąt", text: "trójkąt", value: "trójkąt" },
	{ key: "prostokąt", text: "prostokąt", value: "prostokąt" },
	{ key: "gwiazdka", text: "gwiazdka", value: "gwiazdka" }
]


export const notEmpty = R.filter(
	R.compose(
		R.not,
		R.isNil
	)
);

export const objIsEmpty = R.compose(
	R.all(R.equals(undefined)),
	R.values
);