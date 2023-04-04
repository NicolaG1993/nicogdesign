import RandomNumbersGenerator from "@/components/ReactComponents/random-numbers-generator";

const reactComponents = [
    {
        title: "Random Numbers Generator",
        // slug: "/element/random-numbers-generator",
        tags: ["Component", "Element", "Tool"],
        stack: ["JavaScript (ES6)", "CSS3", "JSX", "localStorage"],
        // description: `This is a tool to generate random numbers, customize the settings and decide if they should be unique numbers or not. You also have an area for taking notes, which will remain available even when the page is reloaded thanks to the use of localStorage to store them. This tool is ideal for replacing dice in board games and role-playing games (for example "D&D" where dice with different number of faces are required).`,
        full_description: `This is a tool to generate random numbers, customize the settings and decide if they should be unique numbers or not. You also have an area for taking notes, which will remain available even when the page is reloaded thanks to the use of localStorage to store them. This tool is ideal for replacing dice in board games and role-playing games (for example "D&D" where dice with different number of faces are required).`,
        thumbnail: "/project-pics/tools/random-numbers.png",
        // pics: null,
        // urls: null,
        // maintained: true,
        Component: (pageProps) => <RandomNumbersGenerator {...pageProps} />,
    },
];

export default reactComponents;
