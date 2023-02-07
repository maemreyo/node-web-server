// const fs = require("fs");
const fsPromises = require("fs").promises;
import path from "path";

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(
            path.join(__dirname, "files", "starter.txt"),
            "utf-8"
        );
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
        await fsPromises.writeFile(
            path.join(__dirname, "files", "newReply.txt"),
            "Nice to meet you!"
        );
        await fsPromises.appendFile(
            path.join(__dirname, "files", "newReply.txt"),
            "\n\nOkay bro!!"
        );
        await fsPromises.rename(
            path.join(__dirname, "files", "newReply.txt"),
            path.join(__dirname, "files", "completeReply.txt")
        );

        const newData = await fsPromises.readFile(
            path.join(__dirname, "files", "completeReply.txt"),
            "utf-8"
        );
        console.log(newData);
    } catch (error) {
        console.error(error);
    }
};

fileOps();
// fs.readFile(
//     path.join(__dirname, "files", "starter.txt"),
//     "utf-8",
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );

// // Callback hell
// fs.writeFile(
//     path.join(__dirname, "files", "reply.txt"),
//     "Nice to meet you!",
//     (err) => {
//         if (err) throw err;
//         console.log("Write complete");

//         fs.appendFile(
//             path.join(__dirname, "files", "reply.txt"),
//             "\n\nOkay bro!",
//             (err) => {
//                 if (err) throw err;
//                 console.log("Append complete");

//                 fs.appendFile(
//                     path.join(__dirname, "files", "reply.txt"),
//                     "\n\nOkay bro!",
//                     (err) => {
//                         if (err) throw err;
//                         console.log("Append complete");
//                     }
//                 );
//             }
//         );
//     }
// );

// Exit on error
process.on("uncaughtException", (err) => {
    console.error(`There was an error: ${err}`);
    process.exit(1);
});
