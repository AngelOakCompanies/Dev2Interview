import { WordMetadata } from "../interfaces";
import { getCurrentTimestamp } from "../helpers";

/**
 * Updates word metadata counters and last seen timestamps
 * @param metadata a word metadata object
 * @returns the updated metadata object
 */
export const updateWordMetadata = (metadata: WordMetadata) => {
  return {
    ...metadata,
    count: metadata.count + 1,
    lastSeen: getCurrentTimestamp(),
  };
};
