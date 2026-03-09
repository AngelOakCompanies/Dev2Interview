import fs from "fs";
import { WordsCollection } from "./interfaces";
import { getCurrentTimestamp } from "./helpers";

export const saveCollectionToFile = (collection: WordsCollection) => {
  const jsonData = JSON.stringify(collection, null, 2);
  const directory = "reports";

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  const timestamp = getCurrentTimestamp();
  const filePath = `reports/words_report_${timestamp}.json`;

  // Asynchronous method with a callback
  fs.writeFile(filePath, jsonData, "utf8", (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log(`Data written to ${filePath} as JSON.`);
    }
  });
};
