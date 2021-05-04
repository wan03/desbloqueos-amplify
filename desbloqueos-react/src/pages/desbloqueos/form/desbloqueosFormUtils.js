export const formatForOptions = (rawOptions) => {
    return rawOptions.map((option) => ({value: option.id, text: option.name}))
}

export const countries = [
    {

        id: 1146,
        name: "Argentina"

    },
    {
        id: 1932,
        name: "Canada"
    },
    {
        id: 1937,
        name: "China"
    }
];

export const networks = [
    {
        id: 1,
        name: "Movistar",
    },
    {
        id: 1,
        name: "Vodafone",
    },
    {
        id: 1,
        name: "Orange",
    },
    {
        id: 1,
        name: "Yoigo",
    },
]
