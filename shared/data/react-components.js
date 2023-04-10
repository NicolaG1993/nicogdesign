import RandomNumbersGenerator from "@/components/ReactComponents/RandomNumbersGenerator/RandomNumbersGenerator";
import DropdownMenusByCategory from "@/components/ReactComponents/DropdownMenusByCategory/DropdownMenusByCategory";
import Alert from "@/components/ReactComponents/Alert/Alert";

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
        full_description:
            "UI Component used to represent a structure with dropdown menus. The object passed as a prop is looped and rendered differently for each level, based on whether the loop encounters an array or an object.",
        thumbnail: "/project-pics/misc/ui.png",
        props: {
            obj: {
                animals: {
                    cats: ["Siamese", "Abyssinian Cat", "Chartreux"],
                    dogs: ["Boxer", "Golden Retriever", "Husky"],
                    fishes: ["Gold Fish", "Koi Carp"],
                },
                plants: {
                    "succulent plants": ["Cactus"],
                    trees: ["Baobab", "Olive Tree"],
                },
            },
        },
        Component: (pageProps) => <DropdownMenusByCategory {...pageProps} />,
    },
    {
        title: "Alert",
        group: "UI",
        tags: ["Component"],
        stack: ["JavaScript (ES6)", "CSS3", "JSX"],
        full_description: `UI Component used to display alerts for user, ideal if used to show the result of server requests. Render a different type of alert if "error" or "success" are present in the props.`,
        thumbnail: "/project-pics/misc/ui.png",
        // dynamic_props: { error: {}, success: true },
        dynamic_props: [
            { text: "Generate Error", props: { error: "404 • Not Found!" } },
            { text: "Generate Success", props: { success: true } },
        ],
        Component: (pageProps) => <Alert {...pageProps} />,
    },
    /*
    {
        title: "",
        group: "UI",
        tags: ["Component"],
        stack: ["JavaScript (ES6)", "CSS3", "JSX"],
        full_description: "",
        thumbnail: "/project-pics/tools/random-numbers.png",
        Component: (pageProps) => <RandomNumbersGenerator {...pageProps} />,
    },
    */
];

export default reactComponents;
