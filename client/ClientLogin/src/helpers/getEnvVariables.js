export const getEnvVaribles = () => {
    // import.meta.env;

    return {        
        // ...import.meta.env
        VITE_REGISTER_API: import.meta.env.VITE_REGISTER_API,
    }
}