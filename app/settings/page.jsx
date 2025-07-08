'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

const GameSettings = () => {
  const [setting, SetSetting] = useState("");
  const [rule, SetRule] = useState("");
  const router = useRouter();

  return (
    <div>
      <h1>Game Settings </h1>
      <div><h2>Settings</h2>
      
</div>
    </div>
  );
};

export default GameSettings;
