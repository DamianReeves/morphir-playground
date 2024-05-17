import { $ } from "bun";

const latestUrl = "https://api.github.com/repos/extism/cli/releases/latest";
const downloadUrl = "https://github.com/extism/cli/releases/download";
const outPrefix = "/usr/local/bin"
let ask = true;
let quiet = false;
let useGo = false;
let version = "";

