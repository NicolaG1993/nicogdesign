module.exports = {
    reactStrictMode: true,
    disableStaticImages: true,

    i18n: {
        localeDetection: false,
        locales: ["it"],
        defaultLocale: "it",
    },

    env: {
        REACT_AWS_KEY: process.env.REACT_AWS_KEY,
        REACT_AWS_SECRET: process.env.REACT_AWS_SECRET,
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};
