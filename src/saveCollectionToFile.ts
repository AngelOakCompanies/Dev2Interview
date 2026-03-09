import fs from "fs";
import { WordsCollection } from "./interfaces";
import { getCurrentTimestamp } from "./helpers";

/**
 * writes a collection to a new json file under the reports directory
 * @param collection a WordsCollection including words list, metadata, and reports
 */
export const saveCollectionToFile = (collection: WordsCollection) => {
  const jsonData = JSON.stringify(collection, null, 2);

  // create reports directory if not exists
  const directory = "reports";
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  // create unique file name and save
  const timestamp = getCurrentTimestamp();
  const filePath = `reports/words_report_${timestamp}.json`;

  fs.writeFile(filePath, jsonData, "utf8", (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log(`Data written to ${filePath} as JSON.`);
    }
  });
};
