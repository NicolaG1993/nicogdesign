/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,

    i18n: {
        localeDetection: false,
        locales: ["it"],
        defaultLocale: "it",
    },

    images: { domains: ["res.cloudinary.com"] },

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
