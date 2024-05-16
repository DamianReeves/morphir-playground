import { defineConfig } from 'vite'
import elmPlugin from 'vite-plugin-elm'
import { resolve } from "path";

let rollupOptions = {};
rollupOptions = {
    input: ['./index.ts'],
    output: {
        file: 'dist/compiler.js',
        format: ["esm"]
    }
};

export default defineConfig({
    build: {
        rollupOptions: rollupOptions
    },
    plugins: [elmPlugin()]
})