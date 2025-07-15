'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

const GameInstructions = () => {
  const [instruction, SetInstruction] = useState("");
  const [rule, SetRule] = useState("");
  const router = useRouter();

  return (
    <div>
      <h1>Game Rules & Instructions </h1>
      <div><h2>Game Rules</h2>
      <ol className="gamerules">
        <li> Team Relay
        <ul>
            <li>Teams alternate turns.</li>
            <li>Only one guesser per round (no shouting over each other!).</li>
        </ul>
        </li>
        <li> Draw Together
            <ul>
            <li>Everyone draws the same prompt at once.</li>
            <li>One guesser tries to identify who captured it best.</li>
            <li>Best artwork gets the point.</li>
            <li>Guesser rotates clockwise.</li>
        </ul></li>
<li>Creative Twist

<ul>
    <li>Each team is given an equal number of Twist cards</li>
    <li>Opponents add fourth: Twist card</li>
    <li>Twist card must be used before timer starts</li>
    </ul></li>
<li>Advance Play

<ul>
    <li>Adverb cards added</li>
    <li>Additional points for correct guess</li>
</ul></li>
</ol>
</div>
    </div>
  );
};

export default GameInstructions;
