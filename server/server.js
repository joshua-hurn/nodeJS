const path = require('path'), // CommonJS
    fs = require("fs");

const chirpPath = path.join(__dirname, "chirps.json");

const chirps = [
    {
        id: 1,
        username: "joe",
        text: "Hello World"
    },
    {
        id: 2,
        username: "matt",
        text: "Hello World"
    },
    {
        id: 3,
        username: "chad",
        text: "Hello World"
    },
    {
        id: 4,
        username: "brad",
        text: "Hello World"
    },
    {
        id: 5,
        username: "madd",
        text: "Hello World"
    }
];

const chirpData = JSON.stringify(chirps); // turn into JSON
// const sameArr = JSON.parse(chirpData);

fs.writeFileSync(chirpPath, chirpData);

const chirpsFromFile = fs.readFileSync(chirpPath);

console.log(JSON.parse(chirpsFromFile));