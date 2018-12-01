const text = require("fs").readFileSync(require("path").resolve(__dirname, "input.txt"), "utf-8");
const input = text.split("\r\n");
let out = [0];
let diff = 0;
let count = 0
let match = 0
let runs = 0
//console.log(input)

console.log("Starting...")
input.forEach(frequency => {
    let parts = frequency.split(" ")
    if (parts[0] == "-") {
        diff = diff - parseInt(parts[1])
    }
    if (parts[0] == "+") {
        diff = diff + parseInt(parts[1])
    }
    count = count + 1
    out.forEach(output => {
        if (output == diff) {
            match = match + 1
            console.log(`The first frequency reached twice is ${diff}`)
        }
    })
    out[count] = diff
});
console.log(`The total frequency is ${diff} `)
while (true) {
    input.forEach(frequency => {
        if (match >= 1) {
            console.log("Exiting...")
            process.exit()
        }
        let parts = frequency.split(" ")
        if (parts[0] == "-") {
            diff = diff - parseInt(parts[1])
        }
        if (parts[0] == "+") {
            diff = diff + parseInt(parts[1])
        }
        count = count + 1
        out.forEach(output => {
            if (output == diff) {
                match = match + 1
                console.log(`The first frequency reached twice is ${diff}`)
            }
        })
        out[count] = diff
    });
}