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
        ],
    },
};

module.exports = nextConfig;
