import { getCurrentTimestamp } from "../helpers";

export const createWordMetadata = (word: string) => {
  const currentTime = getCurrentTimestamp();
  const { vowelCount, consonantCount } = getCharacterCounts(word);

  return {
    count: 1,
    firstSeen: currentTime,
    lastSeen: currentTime,
    vowelCount,
    consonantCount,
  };
};

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

const checkIsPalindrome = () => {};
