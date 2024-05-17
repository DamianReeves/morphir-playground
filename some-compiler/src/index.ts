import Main from './elm/Morphir/Simple/Compiler/Main.elm';


const app = Main.init({ flags: {} });
console.log(app);

export function buildFromScratch(name: string) {
    let reportProgress = (value: string) => {
        console.log(value);
        app.ports.reportProgress.unsubscribe(reportProgress);
    };
    app.ports.reportProgress.subscribe(reportProgress);
    app.ports.buildFromScratch.send({ name: name });
}

export function hello() {
    console.log("Hello from some-compiler");
}

export default {
    buildFromScratch,
    hello
}