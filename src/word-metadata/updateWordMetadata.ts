import { WordMetadata } from "../interfaces";
import { getCurrentTimestamp } from "../helpers";

export const updateWordMetadata = (metadata: WordMetadata) => {
  return {
    ...metadata,
    count: metadata.count + 1,
    lastSeen: getCurrentTimestamp(),
  };
};
