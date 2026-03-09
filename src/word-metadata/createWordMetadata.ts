import { getCurrentTimestamp } from "../helpers";

/**
 * Create process for word metadata
 * @param word a normalized string value
 * @returns the metadata object associated with the word characteristics and with initialized properties(counters, timestamps)
 */
export const createWordMetadata = (word: string) => {
  const currentTime = getCurrentTimestamp();
  const { vowelCount, consonantCount } = getCharacterCounts(word);
  const isPalindrome = checkIsPalindrome(word);

  return {
    count: 1,
    firstSeen: currentTime,
    lastSeen: currentTime,
    vowelCount,
    consonantCount,
    isPalindrome,
  };
};

/**
 * Counts the consonants and vowels in a word
 * @param word the word string value
 * @returns an object containing vowel count and consonant count
 */
const getCharacterCounts = (
  word: string,
): { vowelCount: number; consonantCount: number } => {
  // TODO: implement y vowel logic
  const vowelList = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let consonantCount = 0;

  word.split("").forEach((char) => {
    const isVowel = vowelList.includes(char);

    if (isVowel) vowelCount++;
    else consonantCount++;
  });

  return {
    vowelCount,
    consonantCount,
  };
};

/**
 * Checks if a given word is a palindrome
 * @param word the string value of the word
 * @returns a boolean value representing if the word is a palindrome
 */
const checkIsPalindrome = (word: string) => {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    const charStart = word[i];
    const charEnd = word[word.length - 1 - i];

    if (charStart !== charEnd) return false;
  }

  return true;
};
