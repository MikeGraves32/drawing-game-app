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
/* interface GrammarTypeData {
  grammarType: "Common Noun" | "Action Verb" | "Preposition" | "Adverb";
  // other properties
} */

const isNoun = "Common Noun";
const isVerb = "Action Verb";
const isPrep = "Preposition";
const isAdverb = "Adverb";

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
  const jsonData: FlipCardProps = { category, grammarType, text, flipped }; // Example JSON data

  // grammarTypes.forEach((type) => {
  //   const filtered = words.filter((w) => w.grammarType === type);
  //   console.log("filtered length " + filtered.length + " - " + filtered);
  //   if (filtered.length > 0) {
  //     const random = filtered[Math.floor(Math.random() * filtered.length)];
  //     picked[type] = random.text;
  //   }
  // });

  // if (myElement) {
  //   console.log("jsonData.grammarType " + jsonData.grammarType);

  //   switch (jsonData.grammarType) {
  //     case "Common Noun":
  //       myElement.classList.add(`${styles.cardNoun}`);
  //       console.log("Common Noun 1");
  //       // myElement.style = styles.cardNoun;
  //       // myElement.style.color = "#c44522";
  //       break;
  //     case "Action Verb":
  //       console.log("Action Verb");
  //       myElement.classList.add(`${styles.cardVerb}`);
  //       // myElement.style = styles.cardVerb;
  //       // myElement.style.color = "#2857b1";
  //       break;
  //     case "Preposition":
  //       console.log("Preposition");
  //       myElement.classList.add(`${styles.cardPreposition}`);
  //       // myElement.style = styles.cardPreposition;
  //       // myElement.style.color = "white";
  //       break;
  //     case "Adverb":
  //       console.log("Adverb");
  //       myElement.classList.add(`${styles.cardAdverb}`);
  //       // myElement.style = styles.cardAdverb;
  //       // myElement.style.color = "black";
  //       break;
  //     default:
  //       // Optional: default styles if none of the conditions match
  //       console.log("default");
  //       myElement.style.backgroundColor = "lightgray";
  //       break;
  //   }
  // }

  if (
    (myElement && jsonData.grammarType === "Common Noun") ||
    (myElement && jsonData.grammarType === "Action Verb") ||
    (myElement && jsonData.grammarType === "Preposition") ||
    (myElement && jsonData.grammarType === "Adverb")
  ) {
    if (jsonData.grammarType === "Common Noun") {
      myElement.classList.add(`${styles.cardNoun}`);
      console.log("if jsonData.grammarType cardNoun" + jsonData.grammarType);
    } else if (jsonData.grammarType === "Action Verb") {
      myElement.classList.add(`${styles.cardVerb}`);
      console.log("if jsonData.grammarType cardVerb" + jsonData.grammarType);
    } else if (jsonData.grammarType === "Preposition") {
      myElement.classList.add(`${styles.cardPreposition}`);
      console.log(
        "if jsonData.grammarType cardPreposition" + jsonData.grammarType
      );
    } else if (jsonData.grammarType === "Adverb") {
      myElement.classList.add(`${styles.cardAdverb}`);
      console.log("if jsonData.grammarType cardAdverb" + jsonData.grammarType);
    }
  } else {
    console.log("not reading json");
  }

  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
      <h2>{grammarType}</h2>
      <div className={styles.cardInner}>
        <div id={grammarType} className={clsx(styles.cardFront)}>
          {/* {isClient ? (
            <div id="container-div" className={clsx(styles.container)}></div>
          ) : (
            <div id="container-div" className={styles.container}></div>
          )} */}
          <div className={styles.container}></div>

          <h2></h2>
          <div className={styles.cardFront}>
            <p></p>
          </div>
        </div>
        <div className={styles.cardBack}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
