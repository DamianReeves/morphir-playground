import Main from './elm/Morphir/Simple/Compiler/Main.elm';


const app = Main.init({ flags: {} });

function reportProgress(value: string) {
    console.log(value);
}

console.log(app);
app.ports.reportProgress.subscribe(reportProgress);
app.ports.buildFromScratch.send({ name: "some-compiler" });
app.ports.buildFromScratch.send({ name: "Morphir.Simple.Compiler.Main" });