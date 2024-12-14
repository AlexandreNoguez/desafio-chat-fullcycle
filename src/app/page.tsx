"use client";
import Chat from "./components/Chat";
import SubmitChat from "./components/SubmitChat";
import { useState } from "react";

export default function Home() {
  const [updateChats, setUpdateChats] = useState(0);

  const refreshChats = () => {
    setUpdateChats((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start justify-center gap-8 p-8 sm:p-20 min-h-screen">
      {/* Chat Component */}
      <div className="flex-1">
        <Chat key={updateChats} />
      </div>

      {/* SubmitChat Component */}
      <div className="flex-1">
        <SubmitChat onMessageSent={refreshChats} />
      </div>
    </div>
  );
}
