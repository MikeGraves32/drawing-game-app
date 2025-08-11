export interface DataItem {
  id: number;
  category: string;
  grammarType: string;
  text: string;
  // Add other properties as per your JSON structure
}

export type GrammarType = "noun" | "verb" | "preposition" | "adverb";

export interface WordEntry {
  category: string;
  grammarType: GrammarType;
  text: string;
}
