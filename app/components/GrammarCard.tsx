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
  const [data, setData] = useState<FlipCardProps | null>(null);
  const [className, setClassName] = useState<string>("");

  const nouns = "../../public/data/nouns.json";
  const verbs = "../../public/data/verbs.json";
  const prepositions = "../../public/data/prepositions.json";
  const adverbs = "../../public/data/adverbs.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json"); // Adjust path if needed
        const jsonData: FlipCardProps = await res.json();
        setData(jsonData);

        // Determine className based on jsonData.theme
        let newClassName = "";
        switch (jsonData.grammarType) {
          case "Common Noun":
            newClassName = `${styles.cardNoun}`;
            break;
          case "Action Verb":
            newClassName = `${styles.cardVerb}`;
            break;
          case "Preposition":
            newClassName = `${styles.cardPreposition}`;
            break;
          case "Adverb":
            newClassName = `${styles.cardAdverb}`;
            break;
          default:
            newClassName = ""; // Default class
        }
        setClassName(newClassName);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
      <h2>{grammarType}</h2>
      <div className={styles.cardInner}>
        <div
          id="container-div"
          className={clsx(styles.cardFront, `${className}`)}
        >
          {/* {isClient ? (
            <div id="container-div" className={clsx(styles.container)}></div>
          ) : (
            <div id="container-div" className={styles.container}></div>
          )} */}
          <div className={styles.container}></div>

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
