// const dns = require("dns");
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question("Domain Name: ", url => {
//     readline.close();
//     dns.lookup(url, (error, address) => {
//         if (error) {
//             console.log(error.message);
//             return;
//         }
//         console.log("IP Address: ", address);
//     });
// });

// const fs = require("fs");
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question("filename: ", filename => {
//     readline.close();
//     fs.readFile(filename, (error, buffer) => {
//         if (error) {
//             console.log(error.message);
//             return;
//         }
//         const content = buffer.toString();
//         const upperCased = content.toUpperCase();
//         console.log(upperCased);
//     });
// });

const fs = require("fs");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Input file: ", inputFile => {
    fs.readFile(inputFile, (error, buffer) => {
        if (error) {
            console.log(error.message);
            readline.close();
            return;
        }
        readline.question("Output file: ", outputFile => {
            readline.close();
            const content = buffer.toString();
            const upperCased = content.toUpperCase();
            fs.writeFile(outputFile, upperCased, error => {
                if (error) {
                    console.log(error.message);
                    return;
                }
                console.log("Wrote to file ", outputFile);
            });
        });
    });
});
