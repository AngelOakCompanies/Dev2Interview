import { WordMetadata, WordsReport } from "./interfaces";

/**
 * Generates a report with most/least frequent words
 * @param wordsMetadata an object keyed by words containing metadata
 * @returns a report of most and lest frequently seen words
 */
export const generateWordsReport = (
  wordsMetadata: Record<string, WordMetadata>,
): WordsReport => {
  const wordCounts: WordCount[] = Object.entries(wordsMetadata).map(
    ([word, metadata]) => ({
      word,
      count: metadata.count,
    }),
  );

  return {
    mostFrequentWord: getMostFrequent(wordCounts),
    leastFrequentWord: getLeastFrequent(wordCounts),
  };
};

const getMostFrequent = (wordCounts: WordCount[]) => {
  let mostFrequent = wordCounts[0];
  wordCounts.forEach((wordCount) => {
    if (mostFrequent.count < wordCount.count) mostFrequent = wordCount;
  });
  return mostFrequent.word;
};

const getLeastFrequent = (wordCounts: WordCount[]) => {
  let leastFrequent = wordCounts[0];
  wordCounts.forEach((wordCount) => {
    if (leastFrequent.count > wordCount.count) leastFrequent = wordCount;
  });
  return leastFrequent.word;
};

interface WordCount {
  word: string;
  count: number;
}
