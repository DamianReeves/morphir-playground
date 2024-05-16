import { defineConfig } from 'vite'
//import elmPlugin from 'vite-plugin-elm'
import elm from 'vite-plugin-elm-watch'


export default defineConfig({
    build: {
        rollupOptions: {
            input: ["./index.ts"],
            output: {
                entryFileNames: "compiler.js",
                format: "esm"
            }
        }
    },
    plugins: [elm()]
})