import { existsSync, } from "fs";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

export const logEvents = async (message: string) => {
  try {
    const logDir = path.join(__dirname, "logs");
    const logFile = path.join(__dirname, "logs", "serverLog.txt");
    if (!existsSync(logDir)) {
      await mkdir(logDir);
    }
    await appendFile(logFile, `${message}\n`);
  } catch (error) {
    console.log(error);
  }
}
