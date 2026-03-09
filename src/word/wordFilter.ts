/**
 * Callback to filter words, removes words with three or less characters
 * @param word the string value of the word
 * @returns a boolean value indicating if the word should be included in the list
 */
export const wordFilter = (word: string) => {
  return word.length >= 3;
};
