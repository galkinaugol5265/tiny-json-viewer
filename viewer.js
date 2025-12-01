const fs = require("fs");

const raw = fs.readFileSync("sample.json", "utf8");
const formatted = JSON.stringify(JSON.parse(raw), null, 4);

console.log(formatted);
