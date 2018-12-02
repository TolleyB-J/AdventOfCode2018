const text = require("fs").readFileSync(require("path").resolve(__dirname, "input.txt"), "utf-8");
const input = text.split("\r\n");
const letters = "abcdefghijklmnopqrstuvwxyz".split("")
let twoFinds = 0
let threeFinds = 0
let i;

input.forEach(id => {
    let foundTwo = false
    let foundThree = false
    letters.forEach(letter => {
        let regex = new RegExp(letter, "gi");
        let match = id.match(regex)
        if (match != null) {
            if (match.length == 2) { foundTwo = true }
            if (match.length == 3) { foundThree = true }
        }
    })
    if (foundTwo) { twoFinds = twoFinds + 1 }
    if (foundThree) { threeFinds = threeFinds + 1 }

    for (i = 0; i < id.length; i++) {
        let reg = id.split("");
        reg[i] = ".";
        reg = reg.join("");
        input.forEach(check => {
            test = check.match(RegExp(reg, "gi"))
            if (test != null) {
                if (test[0] != id) {
                    console.log(`The Regexp is ${reg}`)
                    //console.log(test[0])
                    //console.log(id)
                    console.log()
                }
            }
        })
    }
})
console.log(`The checksum of Box IDs is: ${twoFinds * threeFinds}`)
