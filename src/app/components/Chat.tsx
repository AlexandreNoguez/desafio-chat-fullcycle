// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";

interface Chat {
  id: number;
  message: string;
  createdAt: string;
}

export default function Chat() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch dos chats
  const fetchChats = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/chats");
      if (!response.ok) {
        throw new Error("Erro ao buscar os chats");
      }

      const data = await response.json();
      setChats(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Lista de Conversas</h1>

      {loading ? (
        <p className="text-lg">Carregando...</p>
      ) : (
        <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
          {chats.length > 0 ? (
            chats.map((chat) => (
              <li
                key={chat.id}
                className="border-b last:border-0 py-2 text-gray-700"
              >
                <span className="font-bold">#{chat.id}:</span> {chat.message}
                <div className="text-sm text-gray-500">
                  {new Date(chat.createdAt).toLocaleString()}
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-500">Nenhuma conversa disponível.</li>
          )}
        </ul>
      )}
    </main>
  );
}
