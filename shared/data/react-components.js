import RandomNumbersGenerator from "@/components/ReactComponents/RandomNumbersGenerator/RandomNumbersGenerator";
import DropdownMenusByCategory from "@/components/ReactComponents/DropdownMenusByCategory/DropdownMenusByCategory";

const reactComponents = [
    {
        title: "Random Numbers Generator",
        group: "Tools",
        // slug: "/element/random-numbers-generator",
        tags: ["Component", "Element", "Tool"],
        stack: ["React", "JavaScript (ES6)", "CSS3", "JSX", "localStorage"],
        // description: `This is a tool to generate random numbers, customize the settings and decide if they should be unique numbers or not. You also have an area for taking notes, which will remain available even when the page is reloaded thanks to the use of localStorage to store them. This tool is ideal for replacing dice in board games and role-playing games (for example "D&D" where dice with different number of faces are required).`,
        full_description: `This is a tool to generate random numbers, customize the settings and decide if they should be unique numbers or not. You also have an area for taking notes, which will remain available even when the page is reloaded thanks to the use of localStorage to store them. This tool is ideal for replacing dice in board games and role-playing games (for example "D&D" where dice with different number of faces are required).`,
        thumbnail: "/project-pics/tools/random-numbers.png",
        // pics: null,
        // urls: null,
        // maintained: true,
        Component: (pageProps) => <RandomNumbersGenerator {...pageProps} />,
        props: undefined,
    },
    {
        title: "Dropdown Menus By Category",
        group: "UI",
        tags: ["Component"],
        stack: ["React", "JavaScript (ES6)", "CSS3", "JSX"],
        full_description: "",
        // thumbnail: "/project-pics/tools/random-numbers.png",
        props: {
            obj: {
                animals: {
                    cats: ["Siamese", "Abyssinian Cat", "Chartreux"],
                    dogs: ["Boxer", "Golden Retriever", "Husky"],
                    fishes: ["Gold Fish", "Koi Carp"],
                },
            },
        },
        Component: (pageProps) => <DropdownMenusByCategory {...pageProps} />,
    },
    /*
    {
        title: "",
        tags: ["Component"],
        stack: ["JavaScript (ES6)", "CSS3", "JSX"],
        full_description: "",
        thumbnail: "/project-pics/tools/random-numbers.png",
        Component: (pageProps) => <RandomNumbersGenerator {...pageProps} />,
    },
    */
];

export default reactComponents;
