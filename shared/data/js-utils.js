import {
    extractObjValuesIDs,
    sortByObjValue,
    sortByValue,
} from "../utils/utils";

const jsUtils = [
    {
        title: "extractObjValuesIDs(obj)",
        // slug: "/element/random-numbers-generator",
        // tags: ["Component", "Element", "Tool"],
        stack: ["JavaScript (ES6)"],
        // description: ``,
        full_description: ``,
        thumbnail: "",
        // pics: null,
        // urls: null,
        // maintained: true,
        // Component: (pageProps) => <RandomNumbersGenerator {...pageProps} />,
        function: extractObjValuesIDs,
        arguments: {
            data: {
                id: 1,
                name: "John",
                animals: [
                    { id: 2, animal: "Dog", name: "Lucky" },
                    { id: 3, animal: "Cat", name: "Luna" },
                ],
            },
        },
        group: "Data Parsers",
        documentation: null,
    },
    {
        title: "sortArrByValue(data, order)",
        stack: ["JavaScript (ES6)"],
        full_description: ``,
        thumbnail: "",
        function: sortByValue,
        arguments: {
            data: [
                "Italy",
                "Canada",
                "Germany",
                "USA",
                "Thailand",
                "Spain",
                "Mexico",
                "Japan",
                "Finland",
            ],
            order: "asc",
        },
        group: "Data Sorters",
        documentation: null,
    },
    {
        title: "sortArrByObjValue(data, key, order)",
        stack: ["JavaScript (ES6)"],
        full_description: ``,
        thumbnail: "",
        function: sortByObjValue,
        arguments: {
            data: [
                { country: "Italy" },
                { country: "Japan" },
                { country: "Canada" },
                { country: "UK" },
                { country: "Finland" },
                { country: "Brazil" },
            ],
            key: "country",
            order: "asc",
        },
        group: "Data Sorters",
        documentation: null,
    },
];

export default jsUtils;
