## Overview

You’ll work with a provided function, fetchRandomWords, which returns a specified number of random words. Build a small ETL style program that

- (1) normalizes each word and filters out words shorter than three characters, and
- (2) stores each unique word in a collection that tracks useful metrics over time. For each word, encapsulate metadata such as total occurrences, first seen timestamp, last seen timestamp, and derived properties (e.g., counts of vowels and consonants).
- (3) track if the word is a palandrome (bonus)

The solution should support batch processing of an arbitrary number of words in a single run, update the collection accordingly, and provide simple reports, including identifying the most and least frequently seen words. Include a way to export the enriched collection to either JSON or CSV. No external API calls are required. Use only the provided fetchRandomWords function.

## Testing

To test the output, run the following command in the terminal:

```
npm test
```
