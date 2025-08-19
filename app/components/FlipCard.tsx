"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./FlipCard.module.css";

interface FlipCardProps {
  category: string;
  grammarType: string;
  text: string;
  flipped: boolean;
}

export default function FlipCard({
  category,
  grammarType,
  text,
  flipped,
}: FlipCardProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code only runs on the client side
    setIsClient(true);
  }, []);

  const myElement = document.getElementById(grammarType) as HTMLElement;
  const backElement = document.getElementById(
    grammarType + "_back"
  ) as HTMLElement;
  const jsonData: FlipCardProps = { category, grammarType, text, flipped }; // Example JSON data

  if (
    (myElement && jsonData.grammarType === "Common Noun") ||
    (myElement && jsonData.grammarType === "Action Verb") ||
    (myElement && jsonData.grammarType === "Preposition") ||
    (myElement && jsonData.grammarType === "Adverb")
  ) {
    if (jsonData.grammarType === "Common Noun") {
      myElement.classList.add(`${styles.cardNoun}`);
      // backElement.classList.add(`${styles.backNoun}`);
      console.log("if jsonData.grammarType cardNoun" + jsonData.grammarType);
    } else if (jsonData.grammarType === "Action Verb") {
      myElement.classList.add(`${styles.cardVerb}`);
      // backElement.classList.add(`${styles.cardVerb}`);
      console.log("if jsonData.grammarType cardVerb" + jsonData.grammarType);
    } else if (jsonData.grammarType === "Preposition") {
      myElement.classList.add(`${styles.cardPreposition}`);
      // backElement.classList.add(`${styles.cardPreposition}`);
      console.log(
        "if jsonData.grammarType cardPreposition" + jsonData.grammarType
      );
    } else if (jsonData.grammarType === "Adverb") {
      myElement.classList.add(`${styles.cardAdverb}`);
      // backElement.classList.add(`${styles.cardAdverb}`);
      console.log("if jsonData.grammarType cardAdverb" + jsonData.grammarType);
    }
  }

  if (
    (backElement && jsonData.grammarType === "Common Noun") ||
    (backElement && jsonData.grammarType === "Action Verb") ||
    (backElement && jsonData.grammarType === "Preposition") ||
    (backElement && jsonData.grammarType === "Adverb")
  ) {
    if (jsonData.grammarType === "Common Noun") {
      backElement.classList.add(`${styles.backNoun}`);
      // backElement.classList.add(`${styles.backNoun}`);
      console.log("if jsonData.grammarType cardNoun" + jsonData.grammarType);
    } else if (jsonData.grammarType === "Action Verb") {
      backElement.classList.add(`${styles.backVerb}`);
      // backElement.classList.add(`${styles.backVerb}`);
      console.log("if jsonData.grammarType cardVerb" + jsonData.grammarType);
    } else if (jsonData.grammarType === "Preposition") {
      backElement.classList.add(`${styles.backPreposition}`);
      // backElement.classList.add(`${styles.backPreposition}`);
      console.log(
        "if jsonData.grammarType cardPreposition" + jsonData.grammarType
      );
    } else if (jsonData.grammarType === "Adverb") {
      backElement.classList.add(`${styles.backAdverb}`);
      // backElement.classList.add(`${styles.backAdverb}`);
      console.log("if jsonData.grammarType cardAdverb" + jsonData.grammarType);
    }
  }

  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
      <h2>{grammarType}</h2>
      <div className={styles.cardInner}>
        <div id={grammarType} className={clsx(styles.cardFront)}>
          <div className={styles.container}></div>

          <h2></h2>
          <div className={styles.cardFront}>
            <p></p>
          </div>
        </div>
        <div id={grammarType + "_back"} className={styles.cardBack}>
          <div className={styles.cardCategory}>
            <h5>{category}</h5>
          </div>
          <div className={styles.cardText}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
