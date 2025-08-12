"use client";
import { useState } from "react";
import clsx from "clsx";
import styles from "./FlipCard.module.css";

interface FlipCardProps {
  category: string;
  grammarType: string;
  text: string;
  flipped: boolean;
}

const isNoun = "Common Noun";
const isVerb = "Action Verb";
const isPrep = "Prepositions";
const isAdverb = "Adverbs";

export default function FlipCard({
  category,
  grammarType,
  text,
  flipped,
}: FlipCardProps) {
  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
      <h2>{grammarType}</h2>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div
            className={clsx(styles.container, { [styles.cardVerb]: isNoun })}
          ></div>
          <h2>{grammarType}</h2>
          <div className={styles.cardFront}>
            <p>{category}</p>
          </div>
        </div>
        <div className={styles.cardBack}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
