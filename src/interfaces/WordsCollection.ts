import { WordMetadata } from "./WordMetadata";
import { WordsReport } from "./WordsReport";

export interface WordsCollection {
  words: string[];
  metadata: Record<string, WordMetadata>;
  report: WordsReport;
}
