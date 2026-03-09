/**
 * Normalizes a word to lowercase and removes leading and trailing spaces
 * @param word a word string value
 * @returns the normalized word value
 */
export const normalizeWord = (word: string) => {
  return word.toLowerCase().trim();
};
