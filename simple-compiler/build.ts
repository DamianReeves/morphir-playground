import ElmPlugin from "esbuild-plugin-elm";
import { argv, env } from "node:process";

const watch = argv.includes('--watch')
const isProd = env.NODE_ENV === 'production'


Bun.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/bundle.js',
    plugins: [
        ElmPlugin({
            debug: true,
            optimize: isProd,
            clearOnWatch: watch,
            verbose: true,
        })
    ],
}).catch(e => (console.error(e), process.exit(1)))

