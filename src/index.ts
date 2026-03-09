import { generateWordsReport } from "./generateWordsReport";
import { WordMetadata, WordsCollection } from "./interfaces";
import { saveCollectionToFile } from "./saveCollectionToFile";
import * as utils from "./utils";
import { normalizeWord, wordFilter } from "./word";
import { createWordMetadata, updateWordMetadata } from "./word-metadata";

(async () => {
  // query, noramalize, and filter
  const words = await utils.fetchRandomWords(5);
  words.map(normalizeWord).filter(wordFilter);

  // metadata generation
  const wordsMetadata: Record<string, WordMetadata> = {};
  words.forEach((word) => {
    wordsMetadata[word] =
      word in wordsMetadata
        ? updateWordMetadata(wordsMetadata[word])
        : createWordMetadata(word);
  });

  // report generation
  const wordsReport = generateWordsReport(wordsMetadata);

  // exporting reports
  const wordsCollection: WordsCollection = {
    words: words,
    metadata: wordsMetadata,
    report: wordsReport,
  };

  saveCollectionToFile(wordsCollection);
})();
