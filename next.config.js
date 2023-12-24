/** @type {import('next').NextConfig} */
const nextConfig = {
    //agregar ruta de imagenes externas
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tailus.io",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "camlu.cl",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
