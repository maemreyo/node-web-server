const fs = require("fs");
const path = require("path");

const readStream = fs.createReadStream(
    path.join(__dirname, "files", "lorem.txt"),
    "utf-8"
);

const writeStream = fs.createWriteStream(
    path.join(__dirname, "files", "new-lorem.txt")
);

// readStream.on("data", (chunk) => {
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);